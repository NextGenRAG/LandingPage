import ClientSection from "../../components/landing/client-section";
import HeroSection from "../../components/landing/hero-section";
import FreeSection from "../../components/landing/free-section";
import MemoParticles from "../../components/optimized/memo-particles";
import {
  SuspenseInteractiveDemo,
  SuspenseFeatures,
  SuspenseTestimonials,
  SuspenseTimelineEvent,
  SuspenseWhatIsCoursebite,
} from "../../components/optimized/lazy-sections";
import LandingBackground from "../../components/landing/background";

export default async function Page() {
  return (
    <>
      {/* Global background elements - updated with fadeOut set to true */}
      <LandingBackground showGrid={true} fadeOut={true} />
      
      {/* Enhanced particles effect that follows mouse cursor */}
      <MemoParticles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={80}
        ease={200}  
        size={0.4}
        staticity={200}  
        color={"#ffffff"}
        vx={0}
        vy={0}
      />
      
      {/* Content sections - grouped by fading sequence */}
      <div className="relative z-10">
        {/* First sections (with grid pattern) */}
        <div className="relative">
          <HeroSection />
          <FreeSection />
          <ClientSection />
        </div>
        
        {/* Sections after grid fade-out */}
        <div className="relative">
          <SuspenseWhatIsCoursebite />
          <SuspenseInteractiveDemo />
          <SuspenseFeatures />
          <SuspenseTestimonials />
          <SuspenseTimelineEvent />
        </div>
      </div>
    </>
  );
}
