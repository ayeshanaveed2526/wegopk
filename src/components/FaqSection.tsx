"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is Wego?",
    answer:
      "Wego is a travel search engine that compares hundreds of booking sites to find you the best deals on flights and hotels. We're trusted by 83 million+ travellers worldwide and available in 50+ countries.",
  },
  {
    question: "How reliable is Wego, and what support do you provide after I book?",
    answer:
      "Wego partners with verified, reputable travel agencies and airlines. Our 24/7 customer support team is always ready to help with any post-booking queries. We also provide real-time flight status tracking and travel alerts.",
  },
  {
    question: "What is Book on Wego?",
    answer:
      "Book on Wego lets you complete your booking directly on our platform without being redirected to a third-party site. You get a seamless, secure checkout experience backed by Wego's customer support.",
  },
  {
    question: "How does Wego ensure I find the lowest flight price?",
    answer:
      "Wego searches and compares prices across 1,000+ airlines, travel agencies, and booking sites in real-time. Our smart filters let you sort by price, duration, stops, and payment type to find the best deal for your trip.",
  },
  {
    question: "How popular is Wego?",
    answer:
      "Wego has over 83 million downloads and is the #1 travel app in MENA. We're rated 4.7 stars on both the App Store (230,591+ reviews) and Google Play (187,371+ reviews).",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-black text-[#1D1D1D] mb-6">
          Frequently asked questions
        </h2>

        <div className="border border-[#DFDFDF] rounded-2xl overflow-hidden divide-y divide-[#DFDFDF]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-[#FAFAFA] transition-colors group"
                >
                  <span className="font-semibold text-[#1D1D1D] text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#767676] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Answer panel */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 pt-1 text-[#767676] text-sm leading-relaxed">
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
