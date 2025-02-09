"use client";

import Marquee from "../magicui/marquee";
import Section from "../ui/section";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Undergraduate Student at Harvard University",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        #EduSphere has revolutionized my study routine with its comprehensive resources.
        <Highlight>
          The interactive modules and personalized dashboard have made learning engaging.
        </Highlight>{" "}
        This platform truly elevates my academic journey.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Graduate Student at Stanford University",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        Discovering #LearnEdge transformed my learning experience.
        <Highlight>
          Adaptive lessons and real-time feedback keep me on track with my studies.
        </Highlight>{" "}
        It’s an essential tool for any dedicated learner.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Exchange Student at MIT",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        #StudyHub bridges the gap between theory and practice in my academic life.
        <Highlight>
          Collaborative tools and resource integration have boosted my performance.
        </Highlight>{" "}
        It’s an innovative platform for student success.
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Postgraduate Student at University of California, Berkeley",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        The integrated learning ecosystem at #CourseConnect is a game-changer.
        <Highlight>
          Interactive lectures and curated content have enhanced my understanding.
        </Highlight>{" "}
        It makes studying more dynamic and effective.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "PhD Candidate at University of Oxford",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        #SmartLearning provides a personalized learning environment that adapts to my pace.
        <Highlight>
          Its intelligent recommendations have made mastering complex topics simpler.
        </Highlight>{" "}
        I’m more confident in my studies than ever.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "Undergraduate Learner at University of Cambridge",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        With #EduNexus, my learning experience is fully integrated and highly interactive.
        <Highlight>
          Seamless access to diverse learning materials has enriched my academic life.
        </Highlight>{" "}
        It’s a must-have platform for every student.
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Graduate Learner at Columbia University",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        #LearnWave offers an immersive study experience that keeps me engaged.
        <Highlight>
          Real-time collaboration and interactive modules set it apart.
        </Highlight>{" "}
        I feel more connected to my coursework than ever.
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "Undergraduate Student at Princeton University",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        The integrated learning ecosystem, #ScholarSpace, redefines how I approach my studies.
        <Highlight>
          Personalized learning paths and interactive feedback have boosted my confidence.
        </Highlight>{" "}
        It’s a revolutionary platform for modern learners.
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Graduate Student at Yale University",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        #CampusLink has transformed my academic routine with its user-friendly design.
        <Highlight>
          The platform’s innovative features facilitate effective collaboration and learning.
        </Highlight>{" "}
        It’s a vital tool in my educational journey.
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "Undergraduate Student at University of Chicago",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        Studying with #StudyNet has never been more engaging.
        <Highlight>
          The integration of multimedia resources and interactive assessments enhances my understanding.
        </Highlight>{" "}
        It’s an indispensable part of my academic life.
      </p>
    ),
  },
  {
    name: "Jake Morrison",
    role: "Master's Student at Duke University",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
    description: (
      <p>
        #EduMatrix simplifies complex subjects with its adaptive learning framework.
        <Highlight>
          Its smart assessments and feedback mechanisms keep me challenged and motivated.
        </Highlight>{" "}
        It’s a transformative tool for mastering new concepts.
      </p>
    ),
  },
  {
    name: "Nadia Ali",
    role: "Graduate Student at University of Pennsylvania",
    img: "https://randomuser.me/api/portraits/women/78.jpg",
    description: (
      <p>
        The platform #LearnVista fits perfectly into my busy schedule.
        <Highlight>
          On-demand tutorials and interactive study sessions have redefined my learning experience.
        </Highlight>{" "}
        It’s flexible and effective for today’s student.
      </p>
    ),
  },
  {
    name: "Omar Farooq",
    role: "PhD Candidate at University of Michigan",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    description: (
      <p>
        My academic journey has been elevated by #ScholarSync.
        <Highlight>
          The blend of collaborative features and rich content makes studying dynamic.
        </Highlight>{" "}
        It’s an essential resource for academic excellence.
      </p>
    ),
  },
];


export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
