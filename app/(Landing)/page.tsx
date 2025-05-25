import ClientSection from "../../components/landing/client-section";
import HeroSection from "../../components/landing/hero-section";
import PricingSection from "../../components/landing/pricing-section";
import Particles from "../../components/magicui/particles";
import InteractiveDemo from "../../components/landing/interactive-demo";
import Testimonials from "../../components/landing/testimonials";
import Features from "../../components/landing/features";
import { WhatIsCoursebite } from "../../components/landing/what-is-coursebite";
import TimelineEvent from "../../components/landing/timeline-section";
import LandingBackground from "../../components/landing/background";
import FAQSection from "../../components/landing/faq-section";
import CallToActionSection from "../../components/landing/cta-section";

export default async function Page() {
  return (
    <>
      {/* Global background elements - updated with fadeOut set to true */}
      <LandingBackground showGrid={true} fadeOut={true} />
      
      {/* Enhanced particles effect that follows mouse cursor */}
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={120}
        ease={40}  
        size={0.06}
        staticity={20}  
        color={"#ffffff"}
        vx={0.2}
        vy={0.2}
      />
      
      {/* Content sections - grouped by fading sequence */}
      <div className="relative z-10">
        {/* First sections (with grid pattern) */}
        <div className="relative">
          <HeroSection />
          <ClientSection />
        </div>
        
        {/* Sections after grid fade-out */}
        <div className="relative">
          <WhatIsCoursebite />
          <InteractiveDemo />
          <Features />
          <Testimonials />
          <TimelineEvent />
        </div>
      </div>
    </>
  );
}
