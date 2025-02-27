"use client"; // if you need client-side functionality
import React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import FAQSection from "@/components/landing/faq-section"; // adjust the path if necessary

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main className="p-4">
        <FAQSection />
      </main>
      <SiteFooter />
    </>
  );
}
