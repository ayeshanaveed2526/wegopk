"use client";

import React, { useState } from "react";
import FlightSearchForm from "./FlightSearchForm";
import HotelSearchForm from "./HotelSearchForm";
import CarRentalForm from "./CarRentalForm";

type Tab = "flights" | "hotels" | "cars";

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "flights",
    label: "Flights",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
      </svg>
    ),
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
      </svg>
    ),
  },
  {
    id: "cars",
    label: "Car Rentals",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      </svg>
    ),
  },
];

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("flights");

  return (
    <div className="w-full" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

      {/* ── TAB PILL BAR ── */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            padding: "4px",
            borderRadius: "9999px",
            backgroundColor: "rgba(0,0,0,0.28)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`search-tab-${tab.id}`}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 18px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: 700,
                  transition: "all 0.18s ease",
                  backgroundColor: active ? "#ffffff" : "transparent",
                  color: active ? "#1D1D1D" : "rgba(255,255,255,0.88)",
                  boxShadow: active ? "0 1px 4px rgba(0,0,0,0.12)" : "none",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                }}
              >
                <span style={{ color: active ? "#44B50C" : "rgba(255,255,255,0.88)" }}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── WHITE SEARCH CARD ── */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "20px 24px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        {activeTab === "flights" && <FlightSearchForm />}
        {activeTab === "hotels" && <HotelSearchForm />}
        {activeTab === "cars" && <CarRentalForm />}
      </div>
    </div>
  );
}
