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
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Main background - using same color as interactive demo */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-purple-50 dark:from-black dark:to-purple-950/20"></div>
      
      {/* Subtle gradient accents - revised to use purple tones */}
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-purple-500/15 dark:bg-purple-900/15 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%] bg-pink-500/15 dark:bg-purple-800/15 rounded-full blur-[150px]"></div>
      
      {/* Additional subtle accent - creates depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-purple-600/5 via-transparent to-pink-600/5 dark:from-purple-900/10 dark:to-pink-900/10 blur-[100px] transform -skew-y-12"></div>
      
      {/* Add vignette effect - subtle darkening around the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.15)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.3)_100%)]"></div>
      
      {/* Top edge fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-purple-900/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
      
      {/* Bottom edge fade */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-purple-900/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
      
      {/* Left edge fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-purple-900/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
      
      {/* Right edge fade */}
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-purple-900/10 to-transparent dark:from-black/20 dark:to-transparent"></div>
      
      {/* Grid pattern with custom fade out effect */}
      {showGrid && (
        <motion.div 
          className="fixed inset-0 w-screen h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className={`absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${
              fadeOut 
                ? '[mask-image:linear-gradient(to_bottom,black_0%,black_30%,transparent_70%)]' 
                : ''
            }`} 
          />
        </motion.div>
      )}
    </div>
  );
}

export default LandingBackground; 