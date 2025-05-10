import React from "react";
import { cn } from "../../lib/utils";

type TimelineEvent = {
  title: string;
  date: string;
  description: string;
  status: "past" | "future";
};

const timelineEvents: TimelineEvent[] = [
  {
    title: "Founded",
    date: "Aug 2024",
    description: "Our startup was founded.",
    status: "past",
  },
  {
    title: "Coursebite Alpha Launch",
    date: "March 2025",
    description: "Released our first Minimum Viable Product.",
    status: "past",
  },
  {
    title: "Coursebite Version 1.0",
    date: "Aug 2025",
    description: "New Added Features.",
    status: "future",
  },
  {
    title: "Coursebite Version 1.0.1",
    date: "Dec 2025",
    description: "Improved User Experience - Mobile App Launch.",
    status: "future",
  },
  {
    title: "Coursebite Mobile App Launch",
    date: "Q1 2026",
    description: "Full fledged Mobile App Launch.",
    status: "future",
  },
  {
    title: "Coming Soon...",
    date: "2029",
    description: "Launching our next-generation product.",
    status: "future",
  },
];

export function StartupTimeline() {
  return (
    <section id="timeline" className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 dark:from-purple-500 dark:via-pink-400 dark:to-purple-500 bg-clip-text text-transparent mb-12 text-center">
          Our Journey & Future Prospects
        </h2>

        {/* Desktop Layout: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative mb-12">
            {/* Horizontal progress bar - gradient line */}
            <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 dark:from-purple-600 dark:via-pink-500 dark:to-purple-600 z-0 rounded-full"></div>
            
            <div className="flex justify-between items-center relative">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-4 z-10 transition-all duration-300 shadow-md group-hover:scale-110",
                      event.status === "past"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 border-white dark:border-gray-800"
                        : "bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-900 group-hover:border-purple-300"
                    )}
                  ></div>
                  <div className="mt-4 text-center transition-all duration-300 group-hover:-translate-y-1">
                    <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-purple-600 dark:group-hover:from-pink-400 dark:group-hover:to-purple-400">
                      {event.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Detailed Event Descriptions */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={cn(
                  "p-6 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1",
                  event.status === "past" 
                    ? "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-900/30"
                    : "bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                )}
              >
                <div className="flex items-center mb-3">
                  <div className={cn(
                    "w-3 h-3 rounded-full mr-3",
                    event.status === "past"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  )}></div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">{event.date}</p>
                <p className="text-base text-neutral-700 dark:text-neutral-300">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Vertical Timeline */}
        <div className="block md:hidden">
          <div className="flex flex-col space-y-8 relative">
            {/* Vertical progress line - gradient */}
            <div className="absolute top-0 left-3 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 dark:from-purple-600 dark:via-pink-600 dark:to-purple-600"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex items-start relative group">
                {/* Dot marker */}
                <div className="relative z-10 mr-6">
                  <div
                    className={cn(
                      "w-6 h-6 rounded-full border-4 transition-all duration-300 group-hover:scale-110 shadow-md",
                      event.status === "past"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 border-white dark:border-gray-900"
                        : "bg-white dark:bg-gray-800 border-purple-200 dark:border-purple-900"
                    )}
                  ></div>
                </div>
                
                {/* Content card */}
                <div 
                  className={cn(
                    "flex-1 p-5 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1",
                    event.status === "past" 
                      ? "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-900/30"
                      : "bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
                  )}
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    {event.title}
                  </h3>
                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1 mb-2">{event.date}</p>
                  <p className="text-base text-neutral-700 dark:text-neutral-300">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartupTimeline;