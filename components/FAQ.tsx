"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer: "Yes, 100% free. No hidden charges, no obligations.",
  },
  {
    question: "Who is this consultation for?",
    answer:
      "This is for Nepal-based business owners who want more leads, customers, and sales through digital marketing.",
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "A clear understanding of what is not working in your current marketing and a simple actionable plan to fix it.",
  },
  {
    question: "How long will the consultation call be?",
    answer: "The call is 1 hour long.",
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer: "No. You just need a business and the desire to grow it.",
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "You will receive an email with the appointment link to schedule your call.",
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. By the end of the call you will have a customized digital marketing plan specific to your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked{" "}
          <span className="text-[#C9A84C]">Questions</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className="text-[#C9A84C] text-xl font-bold shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "500px" : "0px" }}
                >
                  <p className="px-6 pb-5 text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
