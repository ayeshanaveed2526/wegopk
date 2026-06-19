"use client";

import { useState } from "react";
import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function MultiCityForm() {
  const [flights, setFlights] = useState([
    { id: 1, from: "Marseille (MRS)", to: "", date: "Sat, 20 Jun 2026" },
    { id: 2, from: "", to: "", date: "" },
    { id: 3, from: "", to: "", date: "" },
  ]);

  const addFlight = () => {
    if (flights.length < 6) {
      setFlights([...flights, { id: Date.now(), from: "", to: "", date: "" }]);
    }
  };

  const removeFlight = (id: number) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  const updateFlight = (id: number, field: string, value: string) => {
    setFlights(flights.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  };

  return (
    <div className="flex flex-col gap-3">
      {flights.map((flight, index) => (
        <div key={flight.id} className="flex flex-col lg:flex-row items-center gap-3 w-full">
          {/* From / To group */}
          <div className="flex items-center w-full lg:w-[65%] relative">
            <div className="flex-1 flex flex-col justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 group focus-within:border-[#44b50c] transition-colors">
              <div className="text-[13px] font-semibold text-slate-500">From</div>
              <input
                type="text"
                value={flight.from}
                onChange={(e) => updateFlight(flight.id, "from", e.target.value)}
                placeholder="From"
                className={`w-full outline-none bg-transparent truncate text-[18px] ${
                  flight.from ? "font-bold tracking-tight text-slate-900" : "font-medium text-slate-400"
                }`}
              />
            </div>

            {/* Swap Button (Absolute center) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm hover:text-slate-600 cursor-pointer">
              <ArrowsRightLeftIcon className="h-4 w-4" />
            </div>

            <div className="flex-1 flex flex-col justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 ml-2 group focus-within:border-[#44b50c] transition-colors">
              <div className="text-[13px] font-semibold text-slate-500">To</div>
              <input
                type="text"
                value={flight.to}
                onChange={(e) => updateFlight(flight.id, "to", e.target.value)}
                placeholder="To"
                className={`w-full outline-none bg-transparent truncate text-[18px] ${
                  flight.to ? "font-bold tracking-tight text-slate-900" : "font-medium text-slate-400"
                }`}
              />
            </div>
          </div>

          {/* Depart */}
          <div className="flex items-center w-full lg:w-[35%] gap-2">
            <div className="flex-1 flex overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex-1 px-4 py-3 flex flex-col justify-center group focus-within:border-[#44b50c]">
                <div className="text-[13px] font-semibold text-slate-500">Depart</div>
                <input
                  type="text"
                  value={flight.date}
                  onChange={(e) => updateFlight(flight.id, "date", e.target.value)}
                  placeholder="Depart"
                  className={`w-full outline-none bg-transparent truncate text-[18px] ${
                    flight.date ? "font-bold tracking-tight text-slate-900" : "font-medium text-slate-400"
                  }`}
                />
              </div>
              {/* Optional chevrons if date is selected */}
              {flight.date && (
                <div className="flex items-center gap-3 pr-4 text-slate-400">
                  <ChevronLeftIcon className="h-4 w-4 cursor-pointer hover:text-slate-600" />
                  <ChevronRightIcon className="h-4 w-4 text-[#44b50c] cursor-pointer" />
                </div>
              )}
            </div>

            {/* Remove Button Placeholder / Button */}
            <div className="w-8 flex justify-center shrink-0">
              {index > 0 ? (
                <button
                  onClick={() => removeFlight(flight.id)}
                  className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-slate-500 text-white hover:bg-slate-600 transition-colors"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              ) : (
                <div className="w-[26px]" /> // Placeholder for alignment
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Row */}
      <div className="mt-2 flex flex-col gap-4 border-t border-slate-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
        <button
          onClick={addFlight}
          className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#44b50c] px-4 py-2 text-[15px] font-bold text-[#44b50c] hover:bg-[#f4fbf0] transition-colors"
        >
          <span>+ Add flight</span>
        </button>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 pr-8">
          <div className="flex flex-wrap items-center gap-6 text-[18px] text-[#2c2c2c] font-semibold mr-2">
            <button className="flex items-center gap-2 transition-colors hover:text-slate-900">
              1 Adult
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <button className="flex items-center gap-2 transition-colors hover:text-slate-900">
              Economy
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            <button className="flex items-center gap-2 transition-colors hover:text-slate-900">
              5 Payment Types
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
          </div>
          <button className="rounded-full bg-[#44b50c] px-10 py-4 text-[18px] font-bold text-white shadow-sm transition-colors hover:bg-[#3ca409]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
