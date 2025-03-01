"use client";

import React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import PricingSection from "@/components/landing/pricing-section";

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 p-4">
      <PricingSection/>
      </main>
      <SiteFooter />
    </>
  );
}
