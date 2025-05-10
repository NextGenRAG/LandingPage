"use client";

import Marquee from "../magicui/marquee";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  BarChart,
  ChevronRight,
  File,
  Globe,
  HeartHandshake,
  Rss,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

const tiles = [
  {
    icon: <HeartHandshake className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Globe className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <File className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Shield className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <Rss className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px] filter"></div>
    ),
  },
  {
    icon: <BarChart className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px] filter"></div>
    ),
  },
];

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const Card = (card: { icon: JSX.Element; bg: JSX.Element }) => {
  const id = useId();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { delay: Math.random() * 2, ease: "easeOut", duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      key={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        // light styles
        "bg-white/80 backdrop-blur-sm border-gray-100 shadow-sm",
        // dark styles
        "transform-gpu dark:bg-gray-900/80 dark:border-gray-800"
      )}
    >
      {card.icon}
      {card.bg}
    </motion.div>
  );
};

export default function CallToActionSection() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([]);
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([]);
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([]);
  const [randomTiles4, setRandomTiles4] = useState<typeof tiles>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]));
      setRandomTiles2(shuffleArray([...tiles]));
      setRandomTiles3(shuffleArray([...tiles]));
      setRandomTiles4(shuffleArray([...tiles]));
    }
  }, []);

  return (
    <section id="cta" className="relative py-16 pb-24 mb-8">
      {/* Background gradient decorations */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/25 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500/20 dark:bg-pink-500/25 rounded-full blur-3xl"></div>
      
      <div className="py-14 relative z-10">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:10s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:25s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles1.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles2.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              className="-delay-[200ms] [--duration:20s]"
              repeat={5}
            >
              {randomTiles3.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:30s]" repeat={5}>
              {randomTiles4.map((review, idx) => (
                <Card key={idx} {...review} />
              ))}
            </Marquee>
            <div className="absolute z-10">
              <div className="mx-auto size-24 rounded-[2rem] border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-3 shadow-xl hover:shadow-2xl transition-all duration-300 lg:size-32">
                <HeartHandshake className="mx-auto size-16 text-purple-600 dark:text-purple-400 lg:size-24" />
              </div>
              <div className="z-10 mt-4 flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold lg:text-4xl bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Stop wasting time with ineffective study.
                </h1>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Start your 7-day free trial.
                </p>
                <Link
                  href="/app/login"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                      variant: "outline",
                    }),
                    "group mt-4 rounded-[2rem] px-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white border-none hover:-translate-y-1 transition-all duration-300"
                  )}
                >
                  Get Started
                  <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/30 dark:to-pink-500/30 opacity-40 blur-xl" />
            </div>
            {/* Modified gradient fade to blend with footer */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-950/50 dark:to-gray-950"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
