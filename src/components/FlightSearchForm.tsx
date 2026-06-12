"use client";

import React, { useState } from "react";

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<"one-way" | "round-trip" | "multi-city">("round-trip");
  const [origin, setOrigin] = useState("Marseille (MRS)");
  const [destination, setDestination] = useState("");
  const [departDate] = useState("Fri, 12 Jun 2026");
  const [returnDate] = useState("");
  const [directOnly, setDirectOnly] = useState(false);

  const handleSwap = () => {
    const tmp = origin;
    setOrigin(destination);
    setDestination(tmp);
  };

  return (
    <div className="space-y-4">
      {/* ── TRIP TYPE PILLS ── */}
      <div className="flex items-center space-x-2">
        {(["one-way", "round-trip", "multi-city"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTripType(t)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all border ${
              tripType === t
                ? "bg-[#E7FDDC] text-[#44B50C] border-[#44B50C]/20"
                : "bg-transparent text-gray-600 border-transparent hover:bg-gray-100"
            }`}
          >
            {t === "one-way" ? "One-way" : t === "round-trip" ? "Round-trip" : "Multi-city"}
          </button>
        ))}
      </div>

      {/* ── FROM / TO / DATES ROW ── */}
      <div className="flex flex-col lg:flex-row border border-gray-200 rounded-xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

        {/* FROM */}
        <div className="flex-1 relative flex items-stretch">
          <div className="flex-1 px-4 py-3 bg-white min-w-0">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">From</label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="City or airport"
              className="w-full text-base font-bold text-gray-900 focus:outline-none placeholder:text-gray-300 bg-transparent"
            />
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full shadow items-center justify-center hover:bg-gray-50 text-gray-400 hover:text-[#44B50C] transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M8 7l-4 4m0 0l4 4m-4-4h16M16 17l4-4m0 0l-4-4m4 4H4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* TO */}
        <div className="flex-1 px-4 py-3 bg-white min-w-0">
          <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">To</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="City or airport"
            className="w-full text-base font-bold text-gray-900 focus:outline-none placeholder:text-gray-300 bg-transparent"
          />
        </div>

        {/* DEPART */}
        <div className="flex-1 flex items-center bg-white min-w-0">
          <div className="flex-1 px-4 py-3">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">Depart</label>
            <div className="text-base font-bold text-gray-900">{departDate}</div>
          </div>
          <div className="flex flex-col space-y-0.5 pr-2 text-gray-300">
            <button className="hover:text-[#44B50C] transition-colors p-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hover:text-[#44B50C] transition-colors p-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RETURN */}
        <div className="flex-1 px-4 py-3 bg-white min-w-0">
          <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-0.5">Return</label>
          <div className={`text-base font-bold ${tripType === "one-way" ? "text-gray-300" : "text-gray-400"}`}>
            {returnDate || (tripType === "one-way" ? "—" : "Select date")}
          </div>
        </div>
      </div>

      {/* ── BOTTOM OPTIONS BAR ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Direct Only */}
        <label className="flex items-center space-x-2 cursor-pointer select-none">
          <div
            onClick={() => setDirectOnly(!directOnly)}
            className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
              directOnly ? "bg-[#44B50C] border-[#44B50C]" : "border-gray-300 bg-white"
            }`}
          >
            {directOnly && (
              <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <span className="text-sm font-semibold text-gray-700">Direct Only</span>
        </label>

        {/* Right options */}
        <div className="flex items-center flex-wrap gap-4 sm:gap-6">
          {/* Adults */}
          <button className="flex items-center space-x-1.5 text-sm font-bold text-gray-700 hover:text-[#44B50C] transition-colors">
            <span>1 Adult</span>
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Economy */}
          <button className="flex items-center space-x-1.5 text-sm font-bold text-gray-700 hover:text-[#44B50C] transition-colors">
            <span>Economy</span>
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Payment Types */}
          <button className="flex items-center space-x-1.5 text-sm font-bold text-gray-700 hover:text-[#44B50C] transition-colors">
            <span>0 Payment Types</span>
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Search Button */}
          <button
            className="px-8 py-2.5 rounded-full font-extrabold text-white text-sm shadow-md transition-all hover:shadow-lg active:scale-95"
            style={{ backgroundColor: "#44B50C" }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
