"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import RivePlayer from "../rive/rive-player";

/**
 * Lazy-loads the hero Rive animation only when the section scrolls near the viewport.
 */
export default function RiveHero() {
  const triggerRef = useRef(null);
  const isInView = useInView(triggerRef, { once: true, margin: "200px" });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  return (
    <div ref={triggerRef} className="relative w-full h-full">
      {visible && (
        <RivePlayer
          src="/rive/hero.riv"
          stateMachines="HeroSM"
          className="w-full h-full rounded-[inherit] border object-cover"
        />
      )}
    </div>
  );
} 