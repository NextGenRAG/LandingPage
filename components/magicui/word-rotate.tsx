"use client";

import { useEffect, useState, useRef } from 'react';

interface WordRotateProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export const WordRotate = ({
  words = [],
  typingSpeed = 65,  // Faster typing for smoother effect
  deletingSpeed = 35, // Faster deleting for smoother effect
  pauseTime = 1800,  // Slightly shorter pause
  className = "",
}: WordRotateProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize with the first word when component mounts
  useEffect(() => {
    if (words.length > 0) {
      // Start with the first letter of the first word to kick off the animation
      setTimeout(() => {
        setCurrentText(words[0][0] || "");
      }, 500); // Small delay for better UX when the page first loads
    }
  }, []); // Empty dependency array means this runs once on mount

  useEffect(() => {
    if (words.length === 0) return;
    
    const currentWord = words[currentWordIndex];
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (isDeleting) {
      // Deleting text
      if (currentText.length > 0) {
        // Continue deleting
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Finished deleting
        setIsDeleting(false);
        // Move to next word
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
        // Start typing the next word with its first letter
        timeoutRef.current = setTimeout(() => {
          const nextWord = words[(currentWordIndex + 1) % words.length];
          if (nextWord) setCurrentText(nextWord[0] || "");
        }, 200);
      }
    } else {
      // Typing text
      if (currentText.length < currentWord.length) {
        // Continue typing
        timeoutRef.current = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing
        setIsTypingComplete(true);
        // Pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsTypingComplete(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    }
    
    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentWordIndex, isDeleting, isTypingComplete, words, typingSpeed, deletingSpeed, pauseTime]);
  
  return (
    <span className={className}>
      <span className="inline-flex mx-2 min-h-[1.1em] relative">
        <span className="inline-block min-w-[140px] text-left font-bold">
          {currentText}
          <span 
            className="absolute -right-[4px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 animate-blink"
            aria-hidden="true"
          />
        </span>
      </span>
    </span>
  );
};

// Add this to your globals.css or create a style tag in the component
// @keyframes blink {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0; }
// }
