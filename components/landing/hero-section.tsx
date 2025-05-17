"use client";

import RotatingText from "../magicui/rotating-text";
import TextShimmer from "../magicui/text-shimmer";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { useRouter } from "next/navigation";
import { PromoBanner } from "../magicui/promo-banner";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Only start loading and playing the video when it's in view
  useEffect(() => {
    if (!videoRef.current) return;
    
    // Store ref value in a variable to use in cleanup
    const currentVideoRef = videoRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(error => {
            console.warn("Video autoplay failed:", error);
          });
        }
      },
      { threshold: 0.1 }
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
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="/hero-light.png"
      className="relative w-full h-full rounded-[inherit] border object-cover"
      style={{ width: "100%", height: "100%" }}
    >
      <source src="/hero-vid.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText("GPAHACK");
  };

  return (
    <>
      <PromoBanner
        promoCode="GPAHACK"
        expiryDate="May 31, 2025"
        onClick={handleCopyPromoCode}
      />
      <section
        id="hero"
        className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8 pb-24"
      >
        <div className="relative z-10">
          

          <h1 className="bg-gradient-to-br from-purple-700 via-black to-pink-700 dark:from-purple-400 dark:via-white dark:to-pink-400 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Coursebite has the first 
            <span className="relative inline-flex items-baseline">
              <RotatingText 
                texts={[" On-demand 1-1 Tutor", " AI Learn", " AI powered courses"]} 
                mainClassName="inline-flex ml-2 min-w-[180px] tracking-tighter leading-none font-medium"
                splitLevelClassName="overflow-hidden"
                elementLevelClassName="relative text-purple-600 dark:text-purple-200 text-shadow"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 350 }}
                staggerDuration={0.025}
                staggerFrom="first"
                rotationInterval={3000}
                splitBy="characters"
              />
              {/* Subtle gradient background that matches the heading style */}
              {/* <div className="absolute inset-0 rounded-lg -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-pink-100/20 dark:from-purple-800/30 dark:to-pink-800/30 rounded-lg opacity-40"></div>
              </div> */}
            </span>
          </h1>
          <p className="mb-12 text-lg tracking-tight text-gray-600 dark:text-gray-300 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Learn faster and reclaim your time with real instructors, expert-curated courses,
            <br className="hidden md:block" /> and a personalized learning experience.
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
