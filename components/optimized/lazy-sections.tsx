"use client";

import { lazy, Suspense } from "react";

// Lazy load components that aren't immediately visible
export const LazyInteractiveDemo = lazy(() => import("../landing/interactive-demo"));
export const LazyFeatures = lazy(() => import("../landing/features"));
export const LazyTestimonials = lazy(() => import("../landing/testimonials"));
export const LazyTimelineEvent = lazy(() => import("../landing/timeline-section"));
export const LazyWhatIsCoursebite = lazy(() => import("../landing/what-is-coursebite").then(module => ({ default: module.WhatIsCoursebite })));

// Loading fallback component
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={`w-full ${height} animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg`}>
    <div className="flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto animate-spin">
          <div className="w-4 h-4 bg-purple-500 rounded-full mt-6 ml-6"></div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Loading...</p>
      </div>
    </div>
  </div>
);

// Wrapped components with suspense
export const SuspenseInteractiveDemo = () => (
  <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
    <LazyInteractiveDemo />
  </Suspense>
);

export const SuspenseFeatures = () => (
  <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
    <LazyFeatures />
  </Suspense>
);

export const SuspenseTestimonials = () => (
  <Suspense fallback={<SectionSkeleton height="h-[400px]" />}>
    <LazyTestimonials />
  </Suspense>
);

export const SuspenseTimelineEvent = () => (
  <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
    <LazyTimelineEvent />
  </Suspense>
);

export const SuspenseWhatIsCoursebite = () => (
  <Suspense fallback={<SectionSkeleton height="h-[400px]" />}>
    <LazyWhatIsCoursebite />
  </Suspense>
); 