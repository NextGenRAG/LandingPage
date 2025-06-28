import React from "react";
/* Import the CSS module (adjust the path if needed) */
import styles from "./styles.module.css";
import { cn } from "../../lib/utils";

export const WhatIsCoursebite = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center relative py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Local subtle gradient background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div id="webcrumbs" className={cn(styles.centered, "relative z-10 w-full max-w-7xl")}>
        {/* Responsive container with proper max-width and padding */}
        <div className="w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
          <section className="space-y-6 lg:space-y-8">
            <div className="text-center space-y-2 sm:space-y-4">
              {/* Improved responsive text sizing */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                What is Coursebite?
              </h1>
              {/* Better responsive subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The First Integrated Learning Ecosystem as a Platform
              </p>
            </div>

            {/* Improved responsive grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1">
                <span className="material-symbols-outlined text-3xl sm:text-4xl bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  integration_instructions
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 bg-gradient-to-r from-purple-700 to-blue-700 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Integrated Environment
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  A vertically integrated ecosystem that connects all aspects of
                  education, both inside and outside the classroom.
                </p>
              </div>

              <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1">
                <span className="material-symbols-outlined text-3xl sm:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  school
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  Streamlined Education
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Simplifies the traditional educational paradigm by combining
                  curriculum creation, teaching resources, and assessment tools.
                </p>
              </div>

              <div className="bg-white/90 dark:bg-gray-900/90 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                <span className="material-symbols-outlined text-3xl sm:text-4xl bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                  hub
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3 bg-gradient-to-r from-green-700 to-teal-700 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Platform Features
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Enables course creators, educators, and students to collaborate
                  and share content through various course categories.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/50 to-white/90 dark:from-gray-900/50 dark:to-gray-900/90 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">For Educators</h2>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start sm:items-center gap-3 group">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5 sm:mt-0">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Easy content upload and customization
                      </span>
                    </li>
                    <li className="flex items-start sm:items-center gap-3 group">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5 sm:mt-0">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Automated rubric-based grading
                      </span>
                    </li>
                    <li className="flex items-start sm:items-center gap-3 group">
                      <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5 sm:mt-0">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Revenue-sharing model for creators
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-700 to-teal-700 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent">For Students</h2>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start sm:items-center gap-3 group">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5 sm:mt-0">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Comprehensive learning resources
                      </span>
                    </li>
                    <li className="flex items-start sm:items-center gap-3 group">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5 sm:mt-0">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                        Built-in tutoring support
                      </span>
                    </li>
                    <li className="flex items-start sm:items-center gap-3 group">
                      <span className="material-symbols-outlined text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5 sm:mt-0">
                        check_circle
                      </span>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
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

