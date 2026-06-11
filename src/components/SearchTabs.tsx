"use client";

import React, { useState } from "react";
import FlightSearchForm from "./FlightSearchForm";
import HotelSearchForm from "./HotelSearchForm";

type Tab = "flights" | "hotels" | "cars";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "flights",
    label: "Flights",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"/>
      </svg>
    ),
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
      </svg>
    ),
  },
  {
    id: "cars",
    label: "Car Rentals",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    ),
  },
];

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("flights");

  return (
    <div className="w-full space-y-3">
      {/* ── TAB PILL BAR ── */}
      <div className="flex justify-center">
        <div
          className="flex items-center p-1 rounded-full space-x-0.5"
          style={{ backgroundColor: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)" }}
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  active
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-white hover:bg-white/20"
                }`}
              >
                <span className={active ? "text-[#44B50C]" : "text-white"}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── WHITE SEARCH CARD ── */}
      <div className="w-full bg-white rounded-2xl shadow-2xl p-5 md:p-6">
        {activeTab === "flights" && <FlightSearchForm />}
        {activeTab === "hotels" && <HotelSearchForm />}
        {activeTab === "cars" && (
          <div className="text-center py-10 text-gray-400 font-semibold">
            Car Rentals — Coming Soon
          </div>
        )}
      </div>
    </div>
  );
}
