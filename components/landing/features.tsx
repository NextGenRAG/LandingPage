"use client";

import Section from "../ui/section";
import { cn } from "../../lib/utils";

const features = [
  {
    title: "Learn",
    description:
      "Like your private tutor, it guides you through each concept step-by-step—making it virtually impossible to zone out or fall behind. With intelligent content delivery, dynamic feedback, and bite-sized lessons built from proprietary knowledge graphs, Coursebite transforms studying into an engaging, adaptive experience designed to ensure true understanding at every turn.",
    content: (
      <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-center mt-6">
        <div className="w-40 h-32 bg-gradient-to-br from-purple-300 via-purple-100 to-blue-200 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow">Image 1</div>
        <div className="w-40 h-32 bg-gradient-to-br from-blue-200 via-white to-pink-200 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow">Image 2</div>
        <div className="w-40 h-32 bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow">Image 3</div>
      </div>
    ),
    cardClass: "bg-gradient-to-br from-purple-50 via-white to-blue-50 border-2 border-purple-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700",
  },
  {
    title: "Stay Organized Seamlessly",
    description:
      "[Placeholder] Keep all your modules, notes, and resources organized in one place. Effortlessly manage your study schedule and never lose track of your progress.",
    content: (
      <div className="w-full h-32 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow mt-6">Modules/Organization Image</div>
    ),
    cardClass: "bg-gradient-to-br from-blue-50 via-white to-purple-50 border-2 border-blue-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 dark:border-neutral-700",
  },
  {
    title: "Measure Your Real-Time Understanding",
    description:
      "[Placeholder] Use comprehensive quizzes and assessments to gauge your understanding of key concepts, track your progress, and get real-time feedback.",
    content: (
      <div className="w-full h-32 bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow mt-6">Gradebook/Assessment Image</div>
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
            "relative items-start overflow-hidden p-10 rounded-2xl shadow-md",
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
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 justify-center items-center">
            <div className="w-80 h-64 bg-gradient-to-br from-purple-300 via-purple-100 to-blue-200 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow">Image 1</div>
            <div className="w-80 h-64 bg-gradient-to-br from-blue-200 via-white to-pink-200 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow">Image 2</div>
            <div className="w-80 h-64 bg-gradient-to-br from-pink-200 via-pink-100 to-purple-200 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow">Image 3</div>
          </div>
        </div>
        {/* Bottom two features in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.slice(1).map((feature, index) => (
            <div
              key={index}
              className={cn(
                "relative items-start overflow-hidden p-8 rounded-2xl shadow-md",
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
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center rounded-lg text-neutral-700 text-sm font-medium shadow mt-6">
                {index === 0 ? "Modules/Organization Image" : "Gradebook/Assessment Image"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
