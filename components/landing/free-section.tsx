"use client";

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Gift } from "lucide-react";

export default function FreeSection() {
  return (
    <section id="free" className="relative py-20 overflow-hidden">
      {/* Background gradient effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-white dark:from-purple-950/20 dark:via-pink-950/10 dark:to-background" /> */}
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Free badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-sm font-semibold text-white shadow-lg mb-8"
          >
            <Gift className="h-4 w-4" />
            <span>100% FREE ACCESS</span>
            <Sparkles className="h-4 w-4" />
          </motion.div>

          {/* Main heading */}
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Coursebite is Completely Free!
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300 mb-8">
            Get unlimited access to all our AI-powered learning features, personalized tutoring, 
            and comprehensive course materials. No credit card required, no hidden fees - 
            just pure learning excellence at your fingertips.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {[
              "AI-Powered Tutoring",
              "Unlimited Courses", 
              "Practice Exams & Quizzes"
            ].map((feature, idx) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link href="https://coursebite.ai/app/signup">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning for Free
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </Link>
          </motion.div>

          {/* No credit card text */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            No credit card required • Instant access • Cancel anytime
          </p>
        </motion.div>


      </div>
    </section>
  );
} 