"use client";

import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// const menuItem = [
//   {
//     id: 1,
//     label: "Features",
//     href: "/features",
//   },
//   {
//     id: 2,
//     label: "Pricing",
//     href: "#",
//   },
//   {
//     id: 3,
//     label: "Careers",
//     href: "#",
//   },
//   {
//     id: 4,
//     label: "Contact Us",
//     href: "#",
//   },
// ];

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
      <div className="container flex h-[3.5rem] items-center justify-between">
        {/* Left section: Logo and Coursebite */}
        <div className="flex items-center gap-x-1">
          <img src="/logo.svg" alt="logo" className="flex item-center" />
          <Link className="text-md flex items-center" href="/">
            Coursebite
          </Link>
        </div>

        {/* Right section: Navigation links */}
        <div className="ml-auto flex h-full items-center gap-x-4">
          {/* Separate div for "How It Works" */}
          <div>
            <Link className="text-sm" href="/how-it-works">
              How It Works
            </Link>
          </div>
          {/* Separate div for "Courses Offered" */}
          <div>
            <Link className="text-sm" href="/courses-offered">
              Courses Offered
            </Link>
          </div>
          {/* Separate div for "for instructos" */}
          <div>
            <Link className="text-sm" href="/for-instructors">
              For Instructors
            </Link>
          </div>
          {/* Separate div for "Pricing" */}
          <div>
            <Link className="text-sm" href="/for-instructors">
              Pricing
            </Link>
          </div>
           {/* Separate div for "FAQ" */}
           <div>
            <Link className="text-sm" href="/faq">
              FAQ
            </Link>
          </div>
          {/* Grouped div for Log in and Sign up */}
          <div className="flex items-center gap-x-4">
            <Link className="text-sm" href="/app/login">
              Log in
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "text-sm"
              )}
              href="/app/login"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}