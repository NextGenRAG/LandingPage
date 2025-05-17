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
      question: "Is there a free plan?",
      answer:
        "Sadly no, but we offer a free trial. You can cancel anytime, no questions asked.",
    },
    {
      question: "Do you offer any discounts?",
      answer:
        "We offer a free trial and several different promo codes if you sign up for our newsletter or receive a referral.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime in your account settings. You'll keep access until your current billing period ends.",
    },
    {
      question: "Can I create my own course?",
      answer:
        "Currently we only offer CourseBite curated courses, community courses are currently in development and will allow you to create, moderate and share your custom courses to the entire coursebite platform.",
    },
    {
      question: "Can CourseBite be utilized by educators?",
      answer:
        "Yes, although there are still features currently in development that need to be added to replace a (LMS) Learning Management System like Canva or Blackboard, educators can leverage the features to make sure all students get high quality practice material with no additional effort from the educator.",
    },
    {
        question: "What if CourseBite does not carry the course I need?",
        answer:
          "Sign up for our newsletter and you can submit requests while community courses are still in development, we will notify all subscribers when new courses are added.",
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