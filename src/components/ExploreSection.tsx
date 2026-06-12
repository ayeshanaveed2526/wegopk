"use client";

import React, { useState } from "react";
import Link from "next/link";

const exploreTopics = [
  {
    title: "Flights to top cities from Pakistan",
    links: [
      "Flights to Jeddah", "Flights to Riyadh", "Flights to Dubai", "Flights to Dammam",
      "Flights to Al Madinah", "Flights to Muscat", "Flights to Kuwait City", "Flights to Sharjah",
      "Flights to Manama", "Flights to Doha", "Flights to Abu Dhabi", "Flights to Buraydah Al-Qassim",
    ],
  },
  {
    title: "Flights to top countries from Pakistan",
    links: [
      "Flights to Saudi Arabia", "Flights to United Arab Emirates", "Flights to Oman", "Flights to Kuwait",
      "Flights to Bahrain", "Flights to Qatar", "Flights to Malaysia", "Flights to Turkey",
      "Flights to Azerbaijan", "Flights to United Kingdom", "Flights to United States", "Flights to Italy",
    ],
  },
  {
    title: "Hotels in top cities",
    links: [
      "Hotels in Lahore", "Hotels in Islamabad", "Hotels in Karachi", "Hotels in Murree",
      "Hotels in Skardu", "Hotels in Nathia Gali", "Hotels in Multan", "Hotels in Faisalabad",
      "Hotels in Naran", "Hotels in Sialkot", "Hotels in Makkah", "Hotels in Al Madinah",
      "Hotels in Dubai", "Hotels in Baku", "Hotels in Kuala Lumpur", "Hotels in Istanbul",
    ],
  },
  {
    title: "Hotels in top countries",
    links: [
      "Hotels in Pakistan", "Hotels in United Arab Emirates", "Hotels in Saudi Arabia", "Hotels in United Kingdom",
      "Hotels in Turkey", "Hotels in Malaysia", "Hotels in Thailand", "Hotels in Oman",
      "Hotels in Qatar", "Hotels in Bahrain", "Hotels in United States", "Hotels in Italy",
    ],
  },
];

export default function ExploreSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default like the screenshot

  return (
    <section style={{ backgroundColor: "#FAFAFA", padding: "64px 0" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── ACCORDION LIST ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {exploreTopics.map((topic, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.02)",
                  overflow: "hidden",
                  transition: "box-shadow 0.2s",
                }}
              >
                <button
                  id={`explore-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`explore-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    textAlign: "left",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <span style={{ fontWeight: 700, color: "#1D1D1D", fontSize: "16px" }}>
                    {topic.title}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    style={{
                      width: "18px",
                      height: "18px",
                      color: "#1D1D1D",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Answer panel - 4 column grid */}
                <div
                  id={`explore-answer-${i}`}
                  role="region"
                  aria-labelledby={`explore-btn-${i}`}
                  style={{
                    maxHeight: isOpen ? "400px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      padding: "4px 24px 24px",
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "12px 24px",
                    }}
                  >
                    {topic.links.map((link) => (
                      <Link
                        key={link}
                        href="#"
                        style={{
                          fontSize: "14px",
                          color: "#1D1D1D",
                          textDecoration: "none",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#44B50C")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#1D1D1D")}
                      >
                        {link}
                      </Link>
                    ))}
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
