import ClientSection from "../../components/landing/client-section";
import HeroSection from "../../components/landing/hero-section";
import PricingSection from "../../components/landing/pricing-section";
import Particles from "../../components/magicui/particles";
import GetStartedSteps from "../../components/landing/get-started";
import Testimonials from "../../components/landing/testimonials";
import Features from "../../components/landing/features";
import { WhatIsCoursebite } from "../../components/landing/what-is-coursebite";
import TimelineEvent from "../../components/landing/timeline-section";
import LandingBackground from "../../components/landing/background";

export default async function Page() {
  return (
    <>
      {/* Global background elements */}
      <LandingBackground showGrid={true} fadeOut={false} />
      <Particles
        className="fixed inset-0 -z-10"
        quantity={70}
        ease={70}
        size={0.05}
        staticity={30}
        color={"#ffffff"}
      />
      
      {/* Content sections */}
      <div className="relative z-10">
        <HeroSection />
        {/* <CallToAction/> */}
        <ClientSection />
        <WhatIsCoursebite />
        <GetStartedSteps />
        <Features />
        <Testimonials/>
        <TimelineEvent/>
      </div>
    </>
  );
}
