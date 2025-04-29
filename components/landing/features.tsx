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
        <div className="flex flex-col items-center gap-3 min-w-0">
          <h4 className="font-medium text-primary">Study</h4>
          <div className="w-[32rem] max-w-full flex items-center justify-center">
            <img src="/study.png" alt="Study" className="h-96 w-auto object-contain rounded" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 min-w-0">
          <h4 className="font-medium text-primary">Practice</h4>
          <div className="w-[32rem] max-w-full flex items-center justify-center">
            <img src="/practice.png" alt="Practice" className="h-96 w-auto object-contain rounded" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 min-w-0">
          <h4 className="font-medium text-primary">Reinforce</h4>
          <div className="w-[32rem] max-w-full flex items-center justify-center">
            <img src="/reinforce.png" alt="Reinforce" className="h-96 w-auto object-contain rounded" />
          </div>
        </div>
      </div>
    ),
    cardClass: "bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700",
  },
  {
    title: "Stay Organized Seamlessly",
    description:
      "Keep all your modules, notes, and resources organized in one place. Effortlessly manage your study schedule and never lose track of your progress.",
    content: (
      <div className="flex justify-center w-full mt-6">
        <img
          src="/Modules.png"
          alt="Organization"
          className="h-96 w-auto object-contain rounded"
        />
      </div>
    ),
    cardClass: "bg-gradient-to-br from-blue-50 via-white to-purple-50 border-2 border-blue-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700",
  },
  {
    title: "Measure Your Real-Time Understanding",
    description:
      "Use comprehensive quizzes and assessments to gauge your understanding of key concepts, track your progress, and get real-time feedback.",
    content: (
      <div className="flex justify-center w-full mt-6">
        <img
          src="/gradebook.png"
          alt="Gradebook showing detailed course progress"
          className="h-96 w-auto object-contain rounded"
        />
      </div>
    ),
    cardClass: "bg-gradient-to-br from-pink-50 via-white to-purple-50 border-2 border-pink-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700",
  },
];

export default function Component() {
  return (
    <Section
      title="Features"
      subtitle="Succeed With Our World Leading Educational Tools"
      description="Our platform is designed to help you succeed in your studies by providing you with the tools you need to learn faster and more effectively."
      className="bg-neutral-100 dark:bg-neutral-900"
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
            <h3 className="font-semibold mb-2 text-primary text-2xl text-center">
              {features[0].title}
            </h3>
            <p className="text-foreground text-center mb-6 text-sm">
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
                <h3 className="font-semibold mb-2 text-primary text-xl text-center">
                  {feature.title}
                </h3>
                <p className="text-foreground text-center mb-4 text-sm">
                  {feature.description}
                </p>
              </div>
              {feature.content}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
