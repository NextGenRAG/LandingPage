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
      {/* Main background gradients - darker and more subtle in dark mode */}
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] bg-purple-500/25 dark:bg-gray-800/40 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[120%] bg-pink-500/25 dark:bg-gray-900/40 rounded-full blur-[150px]"></div>
      
      {/* Additional gradients - reduced opacity and darker in dark mode */}
      <div className="absolute top-[10%] left-[10%] w-[120%] h-[120%] bg-purple-400/20 dark:bg-gray-800/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[120%] h-[120%] bg-pink-400/20 dark:bg-gray-900/30 rounded-full blur-[120px]"></div>
      
      {/* Center gradient - subtle dark purple in dark mode */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-br from-purple-500/15 to-pink-500/15 dark:from-gray-900/20 dark:to-purple-900/15 rounded-full blur-[100px]"></div>
      
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