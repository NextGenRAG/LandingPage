"use client";

import { BorderBeam } from "./border-beam";
import TextShimmer from "./text-shimmer";
import { cn } from "../../lib/utils";
import { ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

interface PromoBannerProps {
  className?: string;
  promoCode: string;
  expiryDate?: string;
  onClick?: () => void;
}

export function PromoBanner({
  className,
  promoCode,
  expiryDate,
  onClick,
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full z-50 mt-[4.5rem] flex items-center justify-center",
        className
      )}
    >
      <div className="relative max-w-4xl overflow-visible">
        <div className="backdrop-filter-[12px] relative overflow-visible border-b border-white/5 bg-white/10 py-4 px-3 sm:px-14 text-center transition-all duration-300 rounded-xl shadow-lg">
          <BorderBeam
            size={200}
            duration={12}
            delay={0}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
          />
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 top-3 sm:right-4 sm:top-4 rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-gray-200 transition-all duration-300 z-20"
            aria-label="Dismiss"
          >
            <Cross2Icon className="size-4" />
          </button>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pr-10 sm:pr-0">
            <TextShimmer className="inline-flex items-center justify-center text-sm sm:text-base font-medium">
              <span>🎉 50% off for 3 months</span>
            </TextShimmer>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-medium">
                Use code: <span className="text-primary font-bold">{promoCode}</span>
              </span>
              <button
                onClick={onClick}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs sm:text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/20"
              >
                Copy
                <ArrowRightIcon className="size-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 