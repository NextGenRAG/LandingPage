"use client";
import React from "react";

export function CourseBento() {
  const courseCards = [
    {
      title: "Introduction to Computer Science",
      professor: "Dr. Jennifer Martinez",
      role: "Professor",
      courseCode: "CS-101",
      section: "Section A",
      college: "College of Engineering",
      campus: "Main Campus",
    },
    {
      title: "Organic Chemistry",
      professor: "Dr. Michael Thompson",
      role: "Professor",
      courseCode: "CHEM-301",
      section: "Section B",
      college: "College of Science",
      campus: "North Campus",
    },
    {
      title: "World History",
      professor: "Dr. Sarah Johnson",
      role: "Associate Professor",
      courseCode: "HIST-201",
      section: "Section C",
      college: "College of Arts & Humanities",
      campus: "West Campus",
    },
    {
      title: "Macroeconomics",
      professor: "Dr. Robert Chen",
      role: "Professor",
      courseCode: "ECON-220",
      section: "Section A",
      college: "College of Business",
      campus: "South Campus",
    },
    {
      title: "Psychology 101",
      professor: "Dr. Emily Wilson",
      role: "Associate Professor",
      courseCode: "PSYC-101",
      section: "Section D",
      college: "College of Social Sciences",
      campus: "East Campus",
    },
    {
      title: "Environmental Science",
      professor: "Dr. Laura Green",
      role: "Professor",
      courseCode: "ENV-101",
      section: "Section E",
      college: "College of Environmental Studies",
      campus: "Central Campus",
    },
  ];

  return (
    <div>
      {/* 
        Previously: bg-primary-50 dark:bg-primary-900 
        Now: a light primary wash for light mode, darker for dark mode
      */}
      <div className="w-full min-h-screen bg-primary/10 dark:bg-primary/20 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseCards.map((course, index) => (
              <div
                key={index}
                /* 
                  Previously:
                    bg-primary-100 dark:bg-primary-900
                    hover:shadow-primary-300/20
                  Now: approximate with /20 and /30 for background + hover
                */
                className="w-full rounded-xl p-6 backdrop-blur-lg bg-primary/20 dark:bg-primary/20 bg-opacity-10 dark:bg-opacity-5
                  relative overflow-hidden group transition-all duration-300
                  hover:shadow-lg hover:shadow-primary/20"
              >
                {/* 
                  Previously: 
                    from-primary-400/10 to-primary-300/10 dark:from-primary-600/10 dark:to-primary-500/10 
                  Now: single color gradient with slight difference in dark
                */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/10 dark:from-primary/20 dark:to-primary/20" />

                <div className="absolute inset-0">
                  {/* 
                    Previously used classes like bg-primary-400, bg-primary-300, etc.
                    Now: just use bg-primary with no scale, optionally with small opacity if needed
                  */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full animate-float" />
                  <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-primary rounded-full animate-float-delayed" />
                  <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
                  <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float-delayed" />
                  <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float" />
                  <div className="absolute bottom-1/2 right-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float-delayed" />
                  <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-float" />
                  <div className="absolute bottom-3/4 right-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-float-delayed" />
                </div>

                <div className="relative">
                  {/* 
                    Previously: bg-primary-200/40 dark:bg-primary-700/30
                    Replaced with e.g. bg-primary/20 dark:bg-primary/30
                  */}
                  <div className="mb-4 bg-primary/20 dark:bg-primary/30 rounded-lg p-2 transform transition-transform group-hover:scale-105 duration-300">
                    {/* 
                      Previously: text-primary-700 dark:text-primary-300
                      Now: text-primary (light mode) & dark:text-primary-foreground 
                    */}
                    <h2 className="text-xl font-bold text-primary dark:text-primary-foreground">
                      {course.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {/* 
                      Example row: used text-primary-500/dark:text-primary-300 
                      We'll unify to text-primary & dark:text-primary-foreground
                    */}
                    <div className="flex items-start gap-3">
                      {/* 
                        Previously: bg-primary-200/50 dark:bg-primary-400/20
                        We'll do: bg-primary/20 dark:bg-primary/20
                      */}
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary dark:text-primary-foreground">
                          person
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-primary dark:text-primary-foreground">
                          {course.professor}
                        </p>
                        {/* 
                          Previously: text-primary-400 dark:text-primary-400/70
                          We’ll approximate as text-primary/70 dark:text-primary-foreground/70
                          or you could use text-muted if you prefer.
                        */}
                        <p className="text-sm text-primary/70 dark:text-primary-foreground/70">
                          {course.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary dark:text-primary-foreground">
                          tag
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-primary dark:text-primary-foreground">
                          {course.courseCode}
                        </p>
                        <p className="text-sm text-primary/70 dark:text-primary-foreground/70">
                          {course.section}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary dark:text-primary-foreground">
                          school
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-primary dark:text-primary-foreground">
                          {course.college}
                        </p>
                        <p className="text-sm text-primary/70 dark:text-primary-foreground/70">
                          {course.campus}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons at bottom */}
                <div className="mt-6 flex justify-end gap-2">
                  {/* 
                    Previously: hover:bg-primary-200/50 dark:hover:bg-primary-400/20
                    Now: e.g. hover:bg-primary/20 dark:hover:bg-primary/30
                  */}
                  <button className="p-2 rounded-full hover:bg-primary/20 transition-all duration-300 group-hover:rotate-6 dark:hover:bg-primary/30">
                    <span className="material-symbols-outlined text-primary dark:text-primary-foreground">
                      calendar_month
                    </span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 dark:hover:bg-primary/30">
                    <span className="material-symbols-outlined text-primary dark:text-primary-foreground">
                      info
                    </span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-primary/20 transition-all duration-300 group-hover:-rotate-6 dark:hover:bg-primary/30">
                    <span className="material-symbols-outlined text-primary dark:text-primary-foreground">
                      bookmark_add
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}   