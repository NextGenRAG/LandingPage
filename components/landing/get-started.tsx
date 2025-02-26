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
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Learn at Your Convenience",
    content:
      "Get access to the course content and start learning at your own pace. Our platform offers a variety of learning tools and resources to help you succeed.",
    image: "/learn.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Achieve Academic Success",
    content:
      "Measure progress and track your learning journey with our built-in assessment tools. Improve using tailored feedback and recommendations to achieve academic success.",
    image: "/results.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function GetStartedSteps() {
  return (
    <Section title="" subtitle="Get started in 3 steps">
      <Features data={data} />
    </Section>
  );
}
