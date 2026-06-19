"use client";

import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const popflights: FaqItem[] = [
  {
    question: "Flights to top cities from Pakistan",
    answer: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-[15px] text-[#444444]">
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Jeddah</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Riyadh</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Dubai</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Dammam</a>

        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Al Madinah</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Muscat</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Kuwait City</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Sharjah</a>

        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Manama</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Abu Dhabi</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Doha</a>
        <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Buraydah Al-Qassim</a>
      </div>
    ),
  },
  {
    question: "Flights to top countries from Pakistan",
    answer: (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-[15px] text-[#444444]">
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Saudia Arabia</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Bahrain</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Azerbaijan</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to United Arab Emirates</a>

      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Qatar</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to United Kingdom</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Turkey</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Oman</a>

      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Italy</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Malaysia</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to Kuwait</a>
      <a href="#" className="hover:text-[#44b50c] transition-colors">Flights to United States</a>
    </div>),
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is Wego Flights, and how does it work?",
    answer:
      "Wego Flights is a travel metasearch engine and online travel marketplace, dual-headquartered in Singapore and Dubai. It compares live prices and options from hundreds of airlines and online travel agencies, letting travelers find and book great deals in their local language and currency. Wego is the most downloaded travel app for flight search and booking in the MENA region.",
  },
  {
    question: "How does Wego help me find the lowest hotel rate (with taxes, fees, and resort charges included)?",
    answer:
      "Wego shows all-inclusive prices (taxes and mandatory fees included) and highlights savings through Member Deals for logged-in users. Limited-time discounts are clearly labeled in results, and you can enter promo codes at checkout for extra savings. Regional promotions may also be available on select stays",
  },
  {
    question: "What is (Book on Wego) for hotels, and what payment options and currencies are available ?",
    answer:
      "Book on Wego lets you complete your hotel booking directly within Wego for a fast and seamless checkout experience. We support a wide range of localized payment methods in key markets, including MADA, STC Pay, KNET and Tabby, giving travellers the flexibility to pay using familiar options. Bookings can be made in multiple local currencies, ensuring transparent pricing and a smoother experience from start to finish.",
  },

  {
    question: "Can I see room details, amenities, bed type, breakfast, and cancellation/refund rules before I book?",
    answer:
      "Yes. Wego provides comprehensive room and rate details including amenities, bed types, breakfast options, and cancellation or refund rules before you complete your booking. Wego also aggregates reviews from multiple trusted sources, giving you an at-a-glance view of key themes such as cleanliness, staff experience, and location.",
  },
  {
    question: "What support does Wego provide after I book a hotel (changes, cancellations, no-shows, and refunds)",
    answer:
      "Wego offers 24/7 support with multilingual agents (Arabic, English & Urdu) via live chat, WhatsApp, email, and phone. If you book on Wego, you can manage reservations and request cancellations directly in the app. Offline booking access lets you view saved hotel details and itineraries without an active internet connection.",
  },
];

export default function FaqSection() {
  const [openPopIndex, setOpenPopIndex] = useState<number | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Explore popular flights section */}
        <h2 className="flex items-center justify-center text-4xl font-semibold leading-9 m-0 px-8 pb-8 text-[#111111]">
          Explore popular flights
        </h2>
        <div className="flex flex-col gap-4 mb-16">
          {popflights.map((faq, i) => {
            const isOpen = openPopIndex === i;
            return (
              <div
                key={`pop-${i}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
              >
                <button
                  id={`pop-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`pop-answer-${i}`}
                  onClick={() => setOpenPopIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-transparent hover:bg-gray-50/50 transition-colors duration-200 ease-in-out cursor-pointer border-none"
                >
                  <span className="font-semibold text-[#111111] text-xl pr-4">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className={`w-5 h-5 text-[#111111] flex-shrink-0 transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Answer panel */}
                <div
                  id={`pop-answer-${i}`}
                  role="region"
                  aria-labelledby={`pop-btn-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 text-[#444444] text-[17px] leading-relaxed m-0">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frequently asked questions section */}
        <h2 className="flex items-center justify-center text-4xl font-semibold leading-9 m-0 px-8 pb-8 text-[#111111]">
          Frequently asked questions
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div
                key={`faq-${i}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-transparent hover:bg-gray-50/50 transition-colors duration-200 ease-in-out cursor-pointer border-none"
                >
                  <span className="font-semibold text-[#111111] text-xl pr-4">
                    {faq.question}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    className={`w-5 h-5 text-[#111111] flex-shrink-0 transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Answer panel */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 pb-6 text-[#444444] text-[17px] leading-relaxed m-0">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
