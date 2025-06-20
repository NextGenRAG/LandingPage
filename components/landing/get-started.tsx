import Features from "../magicui/features-vertical";
import Section from "../ui/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Select Your Course",
    content:
      "Simply select a course from our extensive course library containing three types of courses: Coursebite-curated, verified instructor, and community-created courses.",
    image: "/courses.png",
    icon: <Upload className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all duration-300" />,
  },
  {
    id: 2,
    title: "2. Learn at Your Convenience",
    content:
      "Get access to the course content and start learning at your own pace. Our platform offers a variety of learning tools and resources to help you succeed.",
    image: "/learn.png",
    icon: <Zap className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-all duration-300" />,
  },
  {
    id: 3,
    title: "3. Achieve Academic Success",
    content:
      "Measure progress and track your learning journey with our built-in assessment tools. Improve using tailored feedback and recommendations to achieve academic success.",
    image: "/results.png",
    icon: <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-all duration-300" />,
  },
];

export default function GetStartedSteps() {
  return (
    <div className="relative py-16">
      <div className="relative z-10">
        <Section 
          title=""
          subtitle="Get started in 3 steps"
          className="[&>h3]:bg-gradient-to-r [&>h3]:from-purple-600 [&>h3]:to-pink-600 [&>h3]:dark:from-purple-400 [&>h3]:dark:to-pink-400 [&>h3]:bg-clip-text [&>h3]:text-transparent"
        >
          <div className="rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl ">
            <Features data={data} />
          </div>
        </Section>
      </div>
    </div>
  );
}
