"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BackgroundProps {
  showGrid?: boolean;
  fadeOut?: boolean;
}

export function LandingBackground({ showGrid = true, fadeOut = false }: BackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the background spans the entire viewport
    if (containerRef.current) {
      containerRef.current.style.minHeight = `${window.innerHeight}px`;
      containerRef.current.style.width = `${window.innerWidth}px`;
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.style.minHeight = `${window.innerHeight}px`;
        containerRef.current.style.width = `${window.innerWidth}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-20 overflow-hidden"
    >
      {/* Background gradients - made more prominent */}
      <div className="absolute -top-[30%] -left-[20%] w-[150%] h-[150%] bg-purple-500/20 dark:bg-purple-600/25 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-[30%] -right-[20%] w-[150%] h-[150%] bg-pink-500/20 dark:bg-pink-600/25 rounded-full blur-[150px]"></div>
      
      {/* Additional gradients to ensure full coverage */}
      <div className="absolute top-[30%] left-[20%] w-[100%] h-[100%] bg-purple-400/15 dark:bg-purple-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[30%] right-[20%] w-[100%] h-[100%] bg-pink-400/15 dark:bg-pink-500/20 rounded-full blur-[120px]"></div>
      
      {/* Grid pattern with fade out effect if needed */}
      {showGrid && (
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className={`absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${
              fadeOut ? '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_70%,#000_70%,transparent_100%)]' : ''
            }`} 
          />
        </motion.div>
      )}
    </div>
  );
}

export default LandingBackground; 