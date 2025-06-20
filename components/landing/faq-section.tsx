"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion";
  //components\ui\accordion.tsx
   
  const faqs = [
    {
      question: "Is Coursebite really free?",
      answer:
        "Yes! Coursebite is now completely free with no hidden costs. You get unlimited access to all features including AI tutoring, practice exams, and all available courses.",
    },
    {
      question: "Do I need a credit card to sign up?",
      answer:
        "No credit card required! Simply sign up with your email and start learning immediately. We believe education should be accessible to everyone.",
    },
    {
      question: "What features are included in the free access?",
      answer:
        "Everything! You get access to our AI-powered tutor, automated grading, unlimited courses, practice exams, study guides, expert AI lectures, and personalized learning paths - all at no cost.",
    },
    {
      question: "Can I create my own course?",
      answer:
        "Currently we only offer Coursebite curated courses. Community courses are in development and will allow you to create, moderate and share your custom courses to the entire Coursebite platform.",
    },
    {
      question: "Can Coursebite be utilized by educators?",
      answer:
        "Yes! Educators can leverage our features to ensure all students get high-quality practice material with no additional effort. While we're still developing features to fully replace traditional LMS platforms, Coursebite is already a powerful supplementary tool.",
    },
    {
        question: "What if Coursebite doesn't have the course I need?",
        answer:
          "Sign up for our newsletter to submit course requests. We're constantly adding new courses and will notify all users when new content becomes available. Community courses are also coming soon!",
    },
  ];
   
  export default function FAQSection() {
    return (
      <section id="faq" className="relative py-16">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center space-y-4 py-6 mx-auto">
            <h2 className="text-[14px] bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent font-mono font-medium tracking-tight">
              FAQ
            </h2>
            <h4 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter bg-gradient-to-br from-black via-gray-700 to-black dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Frequently Asked Questions
            </h4>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b-purple-100 dark:border-b-gray-800 group"
              >
                <AccordionTrigger className="text-left hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }