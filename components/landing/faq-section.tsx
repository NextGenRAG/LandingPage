"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
   
  const faqs = [
    {
      question: "Is there a free plan?",
      answer:
        "Sadly no, but we offer a free trial. You can cancel anytime, no questions asked.",
    },
    {
      question: "Do you offer any discounts?",
      answer:
        "We offfer a free trial and many diffrent promo codes if you sign up for our newsletter or recived a referal.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime in your account settings. You'll keep access until your current billing period ends.",
    },
    {
      question: "Can I create my own course?",
      answer:
        "Curretly we only offer CourseBite curated courses, community courses are currently in development and will allow you to create, moderate and share your custom courses to the entire coursebite platform.",
    },
    {
      question: "Can CourseBite be utilized by educators?",
      answer:
        "Yes, although there are still features currently in development that need to be added to replace a platform like Canva or Blackboard, educators can leverage the features to make sure all students get high quality practice material with no addional effort from the educator.",
    },
    {
        question: "What if CourseBite does not carry the course I need?",
        answer:
          "Sign up for our newsletter and you can submit requests while community courses are still in development, we will notifiy all subscribers when new courses are added.",
    },
  ];
   
  export default function FAQSection() {
    return (
      <section id="faq">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 py-6 mx-auto">
            <h2 className="text-[14px] text-primary font-mono font-medium tracking-tight">
              FAQ
            </h2>
            <h4 className="text-[42px] font-medium mb-2 text-balance max-w-3xl mx-auto tracking-tighter">
              Frequently Asked Questions
            </h4>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }