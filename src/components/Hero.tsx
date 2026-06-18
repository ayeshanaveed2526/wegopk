"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round-trip");

  return (
    <section className="relative overflow-hidden bg-[#e9eef5]">
      <div className="absolute inset-0 bg-[url('/images/pk_1.png')] bg-cover bg-center opacity-100" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,23,54,0.12)_0%,rgba(5,23,54,0.28)_100%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-[1200px] flex-col px-4 pb-12 pt-8 sm:min-h-[calc(100vh-72px)] sm:px-6 lg:px-8 lg:pt-10">
        <div className="flex flex-1 flex-col items-center justify-start pt-6 sm:pt-10">
          <div className="mb-5 inline-flex rounded-full bg-white/85 p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.12)] backdrop-blur-md">
            <button onClick={() => setActiveTab("flights")} className={`rounded-full px-5 py-2 text-[15px] font-semibold transition-colors sm:px-6 ${activeTab === "flights" ? "bg-white text-slate-900 shadow-sm" : "text-white"}`}>Flights</button>
            <button onClick={() => setActiveTab("hotels")} className={`rounded-full px-5 py-2 text-[15px] font-semibold transition-colors sm:px-6 ${activeTab === "hotels" ? "bg-white text-slate-900 shadow-sm" : "text-white"}`}>Hotels</button>
          </div>

          <div className="w-full max-w-[1120px] rounded-[28px] bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.18)] sm:p-6 lg:p-7">
            <div className="mb-4 flex flex-wrap gap-2">
              <button onClick={() => setTripType("one-way")} className={`rounded-full px-4 py-2 text-[14px] font-medium ${tripType === "one-way" ? "bg-[#e7fddc] text-[#298a08]" : "bg-slate-100 text-slate-700"}`}>One-way</button>
              <button onClick={() => setTripType("round-trip")} className={`rounded-full px-4 py-2 text-[14px] font-medium ${tripType === "round-trip" ? "bg-[#e7fddc] text-[#298a08]" : "bg-slate-100 text-slate-700"}`}>Round-trip</button>
              <button onClick={() => setTripType("multi-city")} className={`rounded-full px-4 py-2 text-[14px] font-medium ${tripType === "multi-city" ? "bg-[#e7fddc] text-[#298a08]" : "bg-slate-100 text-slate-700"}`}>Multi-city</button>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr]">
              <div className="flex overflow-hidden rounded-2xl border border-slate-200">
                <div className="flex-1 bg-white px-4 py-3"><div className="text-[13px] font-semibold text-slate-500">From</div><div className="truncate text-[18px] font-bold tracking-tight text-slate-900">Karachi (KHI)</div></div>
                <div className="flex items-center px-2 text-slate-400"><ArrowPathIcon className="h-5 w-5" /></div>
                <div className="flex-1 border-l border-slate-200 bg-white px-4 py-3"><div className="text-[13px] font-semibold text-slate-500">To</div><div className="truncate text-[18px] font-bold tracking-tight text-slate-900">Dubai (DXB)</div></div>
              </div>

              <div className="flex overflow-hidden rounded-2xl border border-slate-200">
                <div className="flex-1 bg-white px-4 py-3"><div className="text-[13px] font-semibold text-slate-500">Depart</div><div className="text-[18px] font-bold tracking-tight text-slate-900">Fri, 19 Jun 2026</div></div>
                <div className="flex items-center gap-2 border-l border-slate-200 px-4 text-slate-400"><ChevronLeftIcon className="h-4 w-4" /><ChevronRightIcon className="h-4 w-4 text-[#44b50c]" /></div>
                <div className="flex-1 border-l border-slate-200 bg-white px-4 py-3"><div className="text-[13px] font-semibold text-slate-500">Return</div><div className="text-[18px] font-bold tracking-tight text-slate-900">Add return</div></div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4 md:flex-row md:items-center md:justify-between">
              <label className="flex items-center gap-2 text-[15px] text-slate-700"><input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-[#44b50c] focus:ring-[#44b50c]" />Direct Only</label>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                <div className="flex flex-wrap gap-3 text-[15px] text-slate-700"><button className="rounded-full bg-slate-50 px-4 py-2">1 Adult</button><button className="rounded-full bg-slate-50 px-4 py-2">Economy</button><button className="rounded-full bg-slate-50 px-4 py-2">5 Payment Types</button></div>
                <button className="rounded-[14px] bg-[#44b50c] px-8 py-4 text-[18px] font-bold text-white shadow-sm transition-colors hover:bg-[#3ca409] sm:px-12">Search</button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.10)] backdrop-blur-sm sm:gap-5 sm:px-5">
            <span className="rounded-full bg-[#ff6b00] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">New</span>
            <button className="flex items-center gap-2 text-[13px] font-bold text-slate-800"><img src="/images/Umrah@3x_376857943.png" alt="Umrah" className="h-5 w-5" />Umrah e-Visa</button>
            <div className="hidden h-[18px] w-px bg-slate-200 sm:block" />
            <button className="flex items-center gap-2 text-[13px] font-bold text-slate-800"><img src="/images/Visa_358279377.png" alt="Visa" className="h-5 w-5" />e-Visa</button>
            <div className="hidden h-[18px] w-px bg-slate-200 sm:block" />
            <button className="flex items-center gap-2 text-[13px] font-bold text-slate-800"><img src="/images/eSIM_358279346.png" alt="eSIM" className="h-5 w-5" />eSIM</button>
          </div>
        </div>
      </div>
    </section>
  );
}
