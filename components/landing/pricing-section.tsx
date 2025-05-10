"use client";

import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { cn } from "../../lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";
import  Link  from "next/link";

type Interval = "month" | "year";

export const toHumanPrice = (price: number, decimals: number = 2) => {
  return Number(price / 100).toFixed(decimals);
};
const demoPrices = [
  {
    id: "price_1",
    name: "Essential",
    description: "A basic plan students and anyone trying to learn",
    features: [
      "AI-Tutor",
      "Automated Free Response Grading",
      "Up to 5 Courses",
      "Practice Exams",
      "Curated Study Guides",
      "Expert AI Lectures",
      "First Party Courses",
      "Community Courses",
      "Personalized Course Plans",
      "Verified-Instructor Courses",
      "End-to-End Organization"
    ],
    monthlyPrice: 1999,
    yearlyPrice: 19999,
    isMostPopular: false,
  },
];

export default function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    window.location.href = '/app/signup';
  };

  return (
    <section id="pricing" className="relative py-16">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Pricing
          </h4>

          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-br from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent sm:text-6xl">
            Simple pricing for everyone.
          </h2>

          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
            Choose an <strong>affordable plan</strong> that&apos;s packed with
            the best features for creating optimal academic outcomes.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <span className="text-gray-700 dark:text-gray-300">Monthly</span>
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span className="text-gray-700 dark:text-gray-300">Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-6 text-black dark:text-white overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-gray-600 dark:text-gray-300">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  $
                  {interval === "year"
                    ? toHumanPrice(price.yearlyPrice, 0)
                    : toHumanPrice(price.monthlyPrice, 0)}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </motion.div>
              <Link href="https://coursebite.ai/app/signup">
              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Subscribe</p>
                )}

                {isLoading && id === price.id && <p>Subscribing</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                )}
              </Button>
              </Link>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-purple-500/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature: any, idx: any) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-300 group hover:translate-x-1 transition-transform duration-300"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[2px] text-white group-hover:scale-110 transition-transform duration-300" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
