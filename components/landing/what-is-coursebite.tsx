import React from "react";
/* Import the CSS module (adjust the path if needed) */
import styles from "./styles.module.css";
import { cn } from "../../lib/utils";

export const WhatIsCoursebite = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center relative py-16">
      <div id="webcrumbs" className={cn(styles.centered, "relative z-10")}>
        {/* On mobile, container is full width; on md and up, it's 1200px wide */}
        <div className="w-full md:w-[1200px] bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
          <section className="space-y-8">
            <div className="text-center space-y-4">
              {/* Use a smaller text size on mobile, and revert to 40px on md+ */}
              <h1 className="text-3xl md:text-[40px] font-bold leading-tight bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                What is Coursebite?
              </h1>
              {/* Use a mobile-friendly text size that upgrades on md+ */}
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-300">
                The First Integrated Learning Ecosystem as a Platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1">
                <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">
                  integration_instructions
                </span>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">
                  Integrated Environment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A vertically integrated ecosystem that connects all aspects of
                  education, both inside and outside the classroom.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1">
                <span className="material-symbols-outlined text-4xl text-purple-600 dark:text-purple-400">
                  school
                </span>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">
                  Streamlined Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simplifies the traditional educational paradigm by combining
                  curriculum creation, teaching resources, and assessment tools.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-400">
                  hub
                </span>
                <h3 className="text-xl font-semibold mt-6 mb-3 text-black dark:text-white">
                  Platform Features
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enables course creators, educators, and students to collaborate
                  and share content through various course categories.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-black dark:text-white">For Educators</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 group">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Easy content upload and customization
                      </span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Automated rubric-based grading
                      </span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Revenue-sharing model for creators
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-black dark:text-white">For Students</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 group">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Comprehensive learning resources
                      </span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Built-in tutoring support
                      </span>
                    </li>
                    <li className="flex items-center gap-3 group">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Collaborative learning opportunities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

