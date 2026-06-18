"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, ArrowsRightLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round-trip");

  return (
    <div className="relative w-full h-[600px] flex flex-col items-center pt-32">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/pk_1.png")' }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f4f4f4] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col">
        
        {/* Main Tabs */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button onClick={() => setActiveTab("flights")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${activeTab === 'flights' ? 'bg-white text-gray-800' : 'bg-black/30 text-white hover:bg-black/40'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeTab === 'flights' ? '#44b50c' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3 3-3-1-1 1 3 4 4 3 1-1-1-3 3-3 5 6 1.2-.7.6-1.1z"/></svg>
            Flights
          </button>
          <button onClick={() => setActiveTab("hotels")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${activeTab === 'hotels' ? 'bg-white text-gray-800' : 'bg-black/30 text-white hover:bg-black/40'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21v-8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8"/><path d="M14 10h-4"/><path d="M14 14h-4"/><path d="M14 6h-4"/><path d="M4 21V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/><path d="M2 21h20"/></svg>
            Hotels
          </button>
          <button onClick={() => setActiveTab("cars")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${activeTab === 'cars' ? 'bg-white text-gray-800' : 'bg-black/30 text-white hover:bg-black/40'}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H5.3a2 2 0 0 0-1.6.8L1 11l-.16.84A1 1 0 0 0 0 12.85V16h3"/><circle cx="6" cy="16" r="3"/><circle cx="17" cy="16" r="3"/></svg>
            Car Rentals
          </button>
        </div>

        {/* Search Widget */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-6 mt-2">
          
          {/* Top Row: Trip Type & Options */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-4">
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full">
              <button onClick={() => setTripType("one-way")} className={`px-5 py-1.5 rounded-full text-[13px] font-bold transition-colors ${tripType === 'one-way' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>One-way</button>
              <button onClick={() => setTripType("round-trip")} className={`px-5 py-1.5 rounded-full text-[13px] font-bold transition-colors ${tripType === 'round-trip' ? 'bg-[#e7fddc] text-wego-dark-green shadow-sm' : 'text-gray-600 hover:text-gray-800'}`}>Round-trip</button>
              <button onClick={() => setTripType("multi-city")} className={`px-5 py-1.5 rounded-full text-[13px] font-bold transition-colors ${tripType === 'multi-city' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-600 hover:text-gray-800'}`}>Multi-city</button>
            </div>

            <div className="flex items-center gap-4 mt-4 md:mt-0 text-[13px] font-bold text-gray-700">
              <button className="flex items-center gap-1 hover:text-wego-green">
                1 Adult
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="flex items-center gap-1 hover:text-wego-green">
                Economy
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="flex items-center gap-1 hover:text-wego-green">
                5 Payment Types
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* Search Inputs */}
          <div className="flex flex-col lg:flex-row gap-2 mb-4">
            
            {/* Origin & Destination Block */}
            <div className="flex-1 flex relative border border-gray-300 rounded-xl bg-white hover:border-gray-400 focus-within:border-wego-green transition-colors">
              <div className="flex-1 px-4 py-2 hover:bg-gray-50 rounded-l-xl cursor-text group relative">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-0.5 group-hover:text-wego-green transition-colors">From</div>
                <div className="font-bold text-gray-900 text-lg truncate">Marseille (MRS)</div>
              </div>
              
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm text-gray-400 hover:text-wego-green cursor-pointer">
                <ArrowsRightLeftIcon className="w-4 h-4" />
              </div>
              
              <div className="flex-1 px-4 py-2 hover:bg-gray-50 rounded-r-xl border-l border-gray-200 cursor-text group relative">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-0.5 group-hover:text-wego-green transition-colors">To</div>
                <div className="font-bold text-gray-900 text-lg text-transparent placeholder-gray-400 selection:text-transparent">Select</div>
              </div>
            </div>

            {/* Dates Block */}
            <div className="flex-1 flex relative border border-gray-300 rounded-xl bg-white hover:border-gray-400 focus-within:border-wego-green transition-colors">
              <div className="flex-1 px-4 py-2 hover:bg-gray-50 rounded-l-xl cursor-text group flex justify-between items-center relative">
                <div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-0.5 group-hover:text-wego-green transition-colors">Depart</div>
                  <div className="font-bold text-gray-900 text-lg truncate">Fri, 19 Jun 2026</div>
                </div>
                <div className="flex gap-2 text-gray-400">
                  <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:text-gray-800 transition-colors">
                    <ChevronLeftIcon className="w-3 h-3" />
                  </div>
                  <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:text-gray-800 transition-colors">
                    <ChevronRightIcon className="w-3 h-3" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 px-4 py-2 hover:bg-gray-50 rounded-r-xl border-l border-gray-200 cursor-text group relative">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-0.5 group-hover:text-wego-green transition-colors">Return</div>
                <div className="font-bold text-gray-900 text-lg text-transparent selection:text-transparent">Select</div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Direct Only & Search Button */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-[13px] font-bold text-gray-700">
              <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-wego-green focus:ring-wego-green" />
              <span>Direct Only</span>
            </label>
            
            <button className="bg-wego-green hover:bg-[#3ca409] text-white font-bold rounded-xl px-12 py-3.5 text-lg transition-colors shadow-md mt-4 md:mt-0 w-full md:w-auto text-center flex items-center justify-center">
              Search
            </button>
          </div>
        </div>

        {/* Mini Banner */}
        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-full px-6 py-2 shadow-md flex items-center gap-6 relative">
            <div className="absolute -top-2 left-12 bg-wego-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">New</div>
            <button className="flex items-center gap-2 font-bold text-sm text-gray-800 hover:text-wego-green transition-colors">
              <Image src="/images/Umrah@3x_376857943.png" alt="Umrah" width={24} height={24} />
              Umrah e-Visa
            </button>
            <div className="w-px h-5 bg-gray-200"></div>
            <button className="flex items-center gap-2 font-bold text-sm text-gray-800 hover:text-wego-green transition-colors">
              <Image src="/images/Visa_358279377.png" alt="Visa" width={24} height={24} />
              e-Visa
            </button>
            <div className="w-px h-5 bg-gray-200"></div>
            <button className="flex items-center gap-2 font-bold text-sm text-gray-800 hover:text-wego-green transition-colors">
              <Image src="/images/eSIM_358279346.png" alt="eSIM" width={24} height={24} />
              eSIM
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
