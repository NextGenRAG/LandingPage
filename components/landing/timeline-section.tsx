import React from "react";
import { MagicCard } from "../magicui/magic-card";

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
    status: "future",
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
    title: "Coming Soon ...",
    date: "2029",
    description: "Launching our next-generation product.",
    status: "future",
  },
];

export function StartupTimeline() {
  return (
    <section className="py-8 bg-background-150">
      <MagicCard
        gradientOpacity={0.6}
        gradientSize={2600}
        gradientColor="#cda0df"
        className="container rounded-2xl mx-auto px-4"
      >
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Journey & Future Prospects
          </h2>

          {/* Desktop Layout: Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative mb-12">
              {/* Horizontal progress bar */}
              <div className="absolute top-1/3 left-0 w-full h-1 bg-neutral-600 z-0"></div>
              <div className="flex justify-between items-center relative">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full border-4 z-10 ${
                        event.status === "past"
                          ? "bg-primary border-primary"
                          : "bg-white border-neutral-300"
                      }`}
                    ></div>
                    <div className="mt-4 text-center">
                      <p className="text-lg font-semibold text-primary">
                        {event.title}
                      </p>
                      <p className="text-sm text-neutral-600">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Detailed Event Descriptions */}
            <div className="mt-8 grid grid-cols-1 gap-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 border border-neutral-200 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {event.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{event.date}</p>
                  <p className="mt-2 text-base text-neutral-700">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Vertical Timeline with Progress on Left */}
          <div className="block md:hidden">
            <div className="flex flex-col space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-start">
                  {/* Left column: marker & vertical progress line */}
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`w-6 h-6 rounded-full border-4 z-10 ${
                        event.status === "past"
                          ? "bg-primary border-primary"
                          : "bg-white border-neutral-300"
                      }`}
                    ></div>
                    {index !== timelineEvents.length - 1 && (
                      <div className="flex-1 w-px bg-neutral-600"></div>
                    )}
                  </div>
                  {/* Right column: event content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary">
                      {event.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{event.date}</p>
                    <p className="mt-2 text-base text-neutral-700">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </MagicCard>
    </section>
  );
}

export default StartupTimeline;