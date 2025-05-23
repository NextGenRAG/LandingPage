"use client";

import { BorderBeam } from "../magicui/border-beam";
import TextShimmer from "../magicui/text-shimmer";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button";
import { useRouter } from "next/navigation";
import { PromoBanner } from "../magicui/promo-banner";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Only start loading and playing the video when it's in view
  useEffect(() => {
    if (!videoRef.current) return;
    
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
    
    observer.observe(videoRef.current);
    
    return () => {
      if (videoRef.current) observer.disconnect();
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
        className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8"
      >
        <div className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>✨ Introducing the Coursebite Platform</span>{" "}
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </TextShimmer>
        </div>

        <h1 className="bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Coursebite is the first
          <br className="hidden md:block" /> integrated learning ecosystem.
        </h1>
        <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Learn faster and reclaim your time with real instructors, expert-curated courses,
          <br className="hidden md:block" /> and a personalized learning experience.
        </p>
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <InteractiveHoverButton
            className="gap-1 rounded-lg text-black"
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
            className={`rounded-xl border border-white/10 bg-[#fdfdfd] dark:bg-[#fdfdfd] bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
              inView ? "before:animate-image-glow" : ""
            }`}
          >
            <BorderBeam
              size={200}
              duration={12}
              delay={11}
              colorFrom="var(--color-one)"
              colorTo="var(--color-two)"
            />

            <VideoBackground />
          </div>
        </div>
      </section>
    </>
  );
}
