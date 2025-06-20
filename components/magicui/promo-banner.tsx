"use client";

import TextShimmer from "./text-shimmer";
import { cn } from "../../lib/utils";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Gift, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface PromoBannerProps {
  className?: string;
}

export function PromoBanner({ className }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full z-50 mt-[4.5rem] flex items-center justify-center px-4 sm:px-0",
        className
      )}
    >
      <div className="relative max-w-4xl overflow-visible">
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-gray-800 px-6 py-2 text-sm font-semibold shadow-lg border border-purple-200 dark:border-purple-700"
            >
              <Gift className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <TextShimmer className="inline-flex items-center justify-center text-gray-900 dark:text-white font-semibold">
                <span>🎉 100% FREE ACCESS</span>
              </TextShimmer>
              <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400" />
            </motion.div>
          </div>
      </div>
    </div>
  );
} 