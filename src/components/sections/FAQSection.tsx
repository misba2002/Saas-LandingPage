"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "../animations/FadeIn";

const faqs = [
  {
    question: "What is ADmyBRAND AI Suite?",
    answer:
      "ADmyBRAND AI Suite is an AI-powered marketing platform that helps you plan, execute, and optimize campaigns with ease.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial. No credit card required.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Absolutely. You can cancel your subscription anytime from your account settings.",
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through live chat and email.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we follow industry best practices to ensure your data is safe and encrypted.",
  },
];

export default function FAQSection() {
  return (
    <FadeIn>

    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[15%] w-[300px] h-[300px] bg-[#7f5af0] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] bg-[#2cb67d] opacity-10 rounded-full blur-[120px]" />
      </div>

      
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-neutral-400">
            Can&rsquo;t find the answer you&rsquo;re looking for? Reach out to our support team anytime.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:border-[#7f5af0]/30"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium text-white hover:text-[#7f5af0] hover:bg-white/5 transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-neutral-300 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    
    </section>
    </FadeIn>
  );
}