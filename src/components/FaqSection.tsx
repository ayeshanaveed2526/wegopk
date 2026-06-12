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
    <section style={{ backgroundColor: "#ffffff", padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        <h2 style={{ fontSize: "24px", fontWeight: 900, color: "#1D1D1D", marginBottom: "24px", letterSpacing: "-0.02em" }}>
          Frequently asked questions
        </h2>

        <div style={{ border: "1px solid #DFDFDF", borderRadius: "16px", overflow: "hidden" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: i === faqs.length - 1 ? "none" : "1px solid #DFDFDF" }}>
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 24px",
                    textAlign: "left",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    transition: "background-color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <span style={{ fontWeight: 600, color: "#1D1D1D", fontSize: "16px", paddingRight: "16px" }}>
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#767676",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Answer panel */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <p style={{ padding: "4px 24px 20px", color: "#767676", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
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
