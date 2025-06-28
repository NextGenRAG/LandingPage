"use client";

import { useEffect, useRef } from "react";
import { Rive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RivePlayerProps {
  /** Path to the .riv file, relative to the public folder */
  src: string;
  /** Optional artboard name (defaults to first) */
  artboard?: string;
  /** Single or multiple state machine names to activate */
  stateMachines?: string | string[];
  /** Tailwind / custom className passed to the underlying canvas */
  className?: string;
  /** Whether to autoplay on mount. Defaults to true */
  autoplay?: boolean;
}

export default function RivePlayer({
  src,
  artboard,
  stateMachines,
  className,
  autoplay = true,
}: RivePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const riveInstance = new Rive({
      src,
      canvas: canvasRef.current,
      artboard,
      stateMachines,
      autoplay,
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
    });

    return () => {
      riveInstance.cleanup();
    };
  }, [src, artboard, stateMachines, autoplay]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "w-full h-full rounded-[inherit] border"}
    />
  );
} 