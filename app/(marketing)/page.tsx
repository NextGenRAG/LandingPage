import ClientSection from "../../components/landing/client-section";
import CallToActionSection from "../../components/landing/cta-section";
import HeroSection from "../../components/landing/hero-section";
import PricingSection from "../../components/landing/pricing-section";
import Particles from "../../components/magicui/particles";
import { SphereMask } from "../../components/magicui/sphere-mask";
import HowItWorksSteps from "../../components/landing/how-it-works";
import Testimonials from "../../components/landing/testimonials";
import Features from "../../components/landing/features";
import { WhatIsCoursebite } from "../../components/landing/what-is-coursebite";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <WhatIsCoursebite />
      <HowItWorksSteps />
      <Features />
      <SphereMask />
      <PricingSection />
      <Testimonials />
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
