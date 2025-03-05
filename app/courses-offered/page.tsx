"use client";
import React from "react";
import { SiteHeader } from "../../components/site-header";
import { SiteFooter } from "../../components/site-footer";
import { CourseBento } from "../../components/courses-offered/course-bento";
export default function CoursesOffered() {
    return (
      <>
        <SiteHeader />
        <main>
          <div className="flex flex-col mx-auto px-4 py-16 max-w-7xl">
          <h1 className="mx-auto mt-4 max-w-sm text-center text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
          Courses Offered
          </h1>
          </div>
          <CourseBento />
        </main>
        <SiteFooter />
      </>
    );
  }