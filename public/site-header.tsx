"use client";

import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function SiteHeader() {
  const mobilenavbarVariant = {
    initial: { opacity: 0, scale: 1 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, delay: 0.2, ease: "easeOut" },
    },
  };

  const mobileLinkVar = {
    initial: { y: "-20px", opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const containerVariants = {
    open: { transition: { staggerChildren: 0.06 } },
  };

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  // Define mobile menu items including login and sign up.
  const mobileMenuItems = [
    { id: 1, label: "Pricing", href: "/pricing" },
    { id: 2, label: "FAQ", href: "/faq" },
    { id: 3, label: "Courses Offered", href: "/courses-offered" },
    { id: 4, label: "Log in", href: "/app/login" },
    { id: 5, label: "Sign up", href: "/app/login" },
  ];

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:800ms]">
        <div className="container flex h-[3.5rem] items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-x-1">
            <Image 
              src={useTheme().theme === 'dark' ? "/icon_light.svg" : "/icon_dark.svg"}
              alt="Coursebite Logo" 
              width={24} 
              height={24} 
              priority
            />
            <Link className="text-md flex items-center" href="/">
              Coursebite
            </Link>
          </div>
          {/* Desktop Navigation: hidden on mobile */}
          <div className="hidden md:flex ml-auto h-full items-center gap-x-4">
            <Link className="text-sm" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm" href="/faq">
              FAQ
            </Link>
            <Link className="text-sm" href="/courses-offered">
              Our Courses
            </Link>
            <div className="flex items-center gap-x-4">
              <Link className="text-sm" href="/app/login">
                Log in
              </Link>
              <Link
                className={cn(buttonVariants({ variant: "secondary" }), "text-sm")}
                href="/app/login"
              >
                Sign up
              </Link>
            </div>
          </div>
          {/* Hamburger button: shown on mobile */}
          <button
            className="ml-6 md:hidden"
            onClick={() => setHamburgerMenuIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        <motion.nav
          initial="initial"
          exit="exit"
          variants={mobilenavbarVariant}
          animate={hamburgerMenuIsOpen ? "animate" : "exit"}
          className={cn(
            "fixed left-0 top-0 z-50 h-screen w-full overflow-auto bg-background/70 backdrop-blur-[12px]",
            { "pointer-events-none": !hamburgerMenuIsOpen }
          )}
        >
          <div className="container flex h-[3.5rem] items-center justify-between">
            <Link className="text-md flex items-center" href="/">
              Coursebite
            </Link>
            <div className="flex items-center gap-x-2">
              <button
                className="ml-2 md:hidden"
                onClick={() => setHamburgerMenuIsOpen((open) => !open)}
              >
                <span className="sr-only">Toggle menu</span>
                {hamburgerMenuIsOpen ? <XIcon /> : <AlignJustify />}
              </button>
            </div>
          </div>
          <motion.ul
            className="flex flex-col md:flex-row md:items-center md:normal-case ease-in"
            variants={containerVariants}
            initial="initial"
            animate={hamburgerMenuIsOpen ? "open" : "exit"}
          >
            {mobileMenuItems.map((item) => (
              <motion.li
                key={item.id}
                variants={mobileLinkVar}
                className="border-grey-dark pl-6 py-0.5 border-b md:border-none"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-grey flex h-[var(--navigation-height)] w-full items-center transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors",
                  )}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  );
}