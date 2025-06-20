"use client";

import React, { memo } from "react";
import Particles from "../magicui/particles";

// Memoized Particles component with custom comparison
const MemoParticles = memo(Particles, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  return (
    prevProps.className === nextProps.className &&
    prevProps.quantity === nextProps.quantity &&
    prevProps.staticity === nextProps.staticity &&
    prevProps.ease === nextProps.ease &&
    prevProps.size === nextProps.size &&
    prevProps.color === nextProps.color &&
    prevProps.vx === nextProps.vx &&
    prevProps.vy === nextProps.vy &&
    prevProps.refresh === nextProps.refresh
  );
});

MemoParticles.displayName = "MemoParticles";

export default MemoParticles; 