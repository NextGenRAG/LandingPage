"use client";

import Section from "../ui/section";
import { cn } from "../../lib/utils";

const features = [
  {
    title: "Learn",
    description:
      "Like your private tutor, it guides you through each concept step-by-step—making it virtually impossible to zone out or fall behind. With intelligent content delivery, dynamic feedback, and bite-sized lessons built from proprietary knowledge graphs, Coursebite transforms studying into an engaging, adaptive experience designed to ensure true understanding at every turn.",
    content: (
      <div className="flex flex-col gap-4 md:flex-row md:gap-12 justify-center items-center mt-6 overflow-x-auto max-w-full">
        <div className="flex flex-col items-center gap-3 min-w-0 group">
          <h4 className="font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Study</h4>
          <div className="w-[32rem] max-w-full flex items-center justify-center">
            <img src="/study.png" alt="Study" className="h-96 w-auto object-contain rounded shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 min-w-0 group">
          <h4 className="font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Practice</h4>
          <div className="w-[32rem] max-w-full flex items-center justify-center">
            <img src="/practice.png" alt="Practice" className="h-96 w-auto object-contain rounded shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 min-w-0 group">
          <h4 className="font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Reinforce</h4>
          <div className="w-[32rem] max-w-full flex items-center justify-center">
            <img src="/reinforce.png" alt="Reinforce" className="h-96 w-auto object-contain rounded shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1" />
          </div>
        </div>
      </div>
    ),
    cardClass: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300",
  },
  {
    title: "Stay Organized Seamlessly",
    description:
      "Keep all your modules, notes, and resources organized in one place. Effortlessly manage your study schedule and never lose track of your progress.",
    content: (
      <div className="flex justify-center w-full mt-6 group">
        <img
          src="/Modules.png"
          alt="Organization"
          className="h-96 w-auto object-contain rounded shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
        />
      </div>
    ),
    cardClass: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300",
  },
  {
    title: "Measure Your Real-Time Understanding",
    description:
      "Use comprehensive quizzes and assessments to gauge your understanding of key concepts, track your progress, and get real-time feedback.",
    content: (
      <div className="flex justify-center w-full mt-6 group">
        <img
          src="/gradebook.png"
          alt="Gradebook showing detailed course progress"
          className="h-96 w-auto object-contain rounded shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
        />
      </div>
    ),
    cardClass: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300",
  },
];

export default function Component() {
  return (
    <div className="relative py-16">
      <Section
        title="Features"
        subtitle="Succeed With Our World Leading Educational Tools"
        description="Our platform is designed to help you succeed in your studies by providing you with the tools you need to learn faster and more effectively."
        className="relative z-10 [&>h2]:bg-gradient-to-r [&>h2]:from-purple-600 [&>h2]:to-pink-600 [&>h2]:dark:from-purple-400 [&>h2]:dark:to-pink-400 [&>h2]:bg-clip-text [&>h2]:text-transparent [&>h3]:bg-gradient-to-br [&>h3]:from-black [&>h3]:via-gray-700 [&>h3]:to-black [&>h3]:dark:from-white [&>h3]:dark:via-gray-300 [&>h3]:dark:to-white [&>h3]:bg-clip-text [&>h3]:text-transparent"
      >
        <div className="mx-auto mt-16 flex flex-col gap-8 max-w-7xl">
          {/* Learn Feature - full width */}
          <div
            className={cn(
              "relative items-start overflow-hidden p-10 rounded-2xl",
              features[0].cardClass
            )}
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="font-semibold mb-2 text-2xl text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {features[0].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-6 text-sm">
                {features[0].description}
              </p>
            </div>
            {features[0].content}
          </div>
          {/* Bottom two features in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(1).map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "relative items-start overflow-hidden p-8 rounded-2xl",
                  feature.cardClass
                )}
              >
                <div>
                  <h3 className="font-semibold mb-2 text-xl text-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center mb-4 text-sm">
                    {feature.description}
                  </p>
                </div>
                {feature.content}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
