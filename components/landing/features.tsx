"use client";

import { cn } from "../../lib/utils";

const features = [
  {
    placeholder: "Study",
    title: "Learn at Your Own Pace",
    description: "Interactive lessons and personalized learning paths that adapt to your style",
    gradient: "from-purple-600 to-blue-600"
  },
  {
    placeholder: "Practice",
    title: "Apply What You Learn",
    description: "Engage with interactive exercises and real-world applications",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    placeholder: "Reinforce",
    title: "Solidify Your Knowledge",
    description: "Review and strengthen your understanding with smart repetition",
    gradient: "from-pink-600 to-purple-600"
  },
  {
    placeholder: "Organize",
    title: "Stay Organized Seamlessly",
    description: "Keep all your materials and progress in one intuitive workspace",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    placeholder: "Track",
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed analytics and insights",
    gradient: "from-blue-600 to-pink-600"
  }
];

export default function Features() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-6">
      <div className="grid grid-cols-1 gap-20 md:gap-40">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative"
          >
            <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {index % 2 === 1 ? (
                <>
                  <div className="relative flex justify-center order-1 md:order-1">
                    <span className="absolute -inset-8 md:-inset-12 z-0 bg-purple-300/20 blur-2xl rounded-[4rem]"></span>
                    <div className="relative aspect-[9/16] w-[290px] md:w-[405px] rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl border-8 border-gray-200 dark:border-gray-700 z-10">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className="w-24 md:w-28 h-24 md:h-28 rounded-full border-4 border-foreground/20 flex items-center justify-center mx-auto mb-6 md:mb-8">
                            <svg className="w-12 md:w-14 h-12 md:h-14 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-foreground/60 text-lg md:text-xl font-medium">Video Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-1 md:space-y-3 order-2 md:order-2 w-full">
                    <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-1 w-fit mx-auto leading-tight pb-1">
                      {feature.placeholder}
                    </span>
                    <h3 className={cn(
                      "text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent w-fit mx-auto",
                      `from-${feature.gradient.split(' ')[1]} to-${feature.gradient.split(' ')[3]}`
                    )}>
                      {feature.title}
                    </h3>
                    <p className="text-foreground/80 text-lg md:text-xl max-w-xl mx-auto">
                      {feature.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center text-center space-y-1 md:space-y-3 order-2 md:order-1 w-full">
                    <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-1 w-fit mx-auto leading-tight pb-1">
                      {feature.placeholder}
                    </span>
                    <h3 className={cn(
                      "text-3xl md:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent w-fit mx-auto",
                      `from-${feature.gradient.split(' ')[1]} to-${feature.gradient.split(' ')[3]}`
                    )}>
                      {feature.title}
                    </h3>
                    <p className="text-foreground/80 text-lg md:text-xl max-w-xl mx-auto">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative flex justify-center order-1 md:order-2">
                    <span className="absolute -inset-8 md:-inset-12 z-0 bg-purple-300/20 blur-2xl rounded-[4rem]"></span>
                    <div className="relative aspect-[9/16] w-[290px] md:w-[405px] rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl border-8 border-gray-200 dark:border-gray-700 z-10">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className="w-24 md:w-28 h-24 md:h-28 rounded-full border-4 border-foreground/20 flex items-center justify-center mx-auto mb-6 md:mb-8">
                            <svg className="w-12 md:w-14 h-12 md:h-14 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-foreground/60 text-lg md:text-xl font-medium">Video Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 