"use client";

import RotatingText from "../magicui/rotating-text";
import TextShimmer from "../magicui/text-shimmer";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

import { useRouter } from "next/navigation";
import { PromoBanner } from "../magicui/promo-banner";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Only start loading and playing the video when it's in view
  useEffect(() => {
    if (!videoRef.current) return;
    
    // Store ref value in a variable to use in cleanup
    const currentVideoRef = videoRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Add a small delay before loading the video to improve perceived performance
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.load();
              videoRef.current.play().catch(error => {
                console.warn("Video autoplay failed:", error);
              });
            }
          }, 300);
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );
    
    observer.observe(currentVideoRef);
    
    return () => {
      // Use stored reference in cleanup
      observer.disconnect();
    };
  }, []);
  
  return (
    <video
      ref={videoRef}
      autoPlay={isVisible}
      loop
      muted
      playsInline
      preload="none"
      poster="/hero-light.png"
      className="relative w-full h-full rounded-[inherit] border object-cover"
      style={{ width: "100%", height: "100%" }}
    >
      {isVisible && (
        <source src="/hero-vid.mp4" type="video/mp4" />
      )}
      Your browser does not support HTML5 video.
    </video>
  );
};

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();
  
  // Responsive text arrays for mobile vs desktop
  const desktopTexts = [" On-demand 1-1 Tutor", " AI Learn", " AI powered courses"];
  const mobileTexts = [" On-demand\n1-1 Tutor", " AI\nLearn", " AI powered\ncourses"];
  
  // Track screen size for responsive behavior
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <>
      <section
        id="hero"
        className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 pb-24"
      >
        <div className="relative z-10">
          <div className="flex justify-center items-center w-full mb-6">
            <PromoBanner />
          </div>
          <h1 className="bg-gradient-to-br from-purple-700 via-black to-pink-700 dark:from-purple-400 dark:via-white dark:to-pink-400 bg-clip-text py-6 text-4xl font-medium leading-tight tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <span className="block text-center">Coursebite is the first</span>
            <span className="relative flex items-center justify-center w-full min-h-[1.2em] md:min-h-[1em]">
              <RotatingText 
                texts={isMobile ? mobileTexts : desktopTexts} 
                mainClassName={isMobile ? "flex flex-col justify-center items-center text-center w-full max-w-full mx-auto tracking-tighter leading-tight font-medium" : "flex justify-center items-center text-center w-full max-w-full mx-auto tracking-tighter leading-tight font-medium"}
                splitLevelClassName={isMobile ? "overflow-hidden flex justify-center items-center" : "overflow-hidden flex justify-center"}
                elementLevelClassName="relative text-purple-600 dark:text-purple-200 text-shadow text-center"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 350 }}
                staggerDuration={0.025}
                staggerFrom="first"
                rotationInterval={3000}
                splitBy={isMobile ? "lines" : "characters"}
              />
            </span>
          </h1>
          <p className="mb-12 text-lg tracking-tight text-gray-600 dark:text-gray-300 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Skip class and still pass your class with personalized learning.
            <br className="hidden md:block"/>
          </p>
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <InteractiveHoverButton
              className="gap-1 rounded-lg text-black dark:text-white"
              onClick={() => router.push('/app/signup')}
            >
              <span className="text-sm font-medium">Sign Up</span>
            </InteractiveHoverButton>
          </div>
          <div
            ref={ref}
            className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px]"
          >
            <div
              className="rounded-xl border border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Full-width gradient effect that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <VideoBackground />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
