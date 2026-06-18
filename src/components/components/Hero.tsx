"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, ArrowsRightLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round-trip");

  return (
    <div className="relative w-full h-[600px] flex flex-col items-center pt-28">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/pk_1.png")' }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1100px] px-6 flex flex-col mt-4">
        
        <div className="relative isolate">
          {/* Mascot Ad positioned on the right, strictly behind the search box */}
          <div className="absolute -top-[110px] right-[8%] z-[-1] hidden lg:block select-none pointer-events-none">
            <Image 
              src="/images/weegio_354916968.png" 
              alt="Wego Mascot" 
              width={180} 
              height={160}
              className="object-contain drop-shadow-md"
            />
          </div>

          {/* Main Tabs in a translucent pill */}
          <div className="flex justify-center mb-6 relative z-10">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full p-1.5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.1)]">
              <button onClick={() => setActiveTab("flights")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${activeTab === 'flights' ? 'bg-white shadow-sm text-gray-800' : 'text-white hover:bg-white/20'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeTab === 'flights' ? '#44b50c' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3 3-3-1-1 1 3 4 4 3 1-1-1-3 3-3 5 6 1.2-.7.6-1.1z"/></svg>
                Flights
              </button>
              <button onClick={() => setActiveTab("hotels")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${activeTab === 'hotels' ? 'bg-white shadow-sm text-gray-800' : 'text-white hover:bg-white/20'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21v-8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8"/><path d="M14 10h-4"/><path d="M14 14h-4"/><path d="M14 6h-4"/><path d="M4 21V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12"/><path d="M2 21h20"/></svg>
                Hotels
              </button>
              <button onClick={() => setActiveTab("cars")} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-[15px] transition-colors ${activeTab === 'cars' ? 'bg-white shadow-sm text-gray-800' : 'text-white hover:bg-white/20'}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H5.3a2 2 0 0 0-1.6.8L1 11l-.16.84A1 1 0 0 0 0 12.85V16h3"/><circle cx="6" cy="16" r="3"/><circle cx="17" cy="16" r="3"/></svg>
                Car Rentals
              </button>
            </div>
          </div>

          {/* Search Widget */}
          <div className="w-full bg-white rounded-3xl shadow-xl px-7 py-6 relative z-10">
            
            {/* Top Row: Trip Type */}
            <div className="flex mb-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setTripType("one-way")} className={`px-5 py-2 rounded-full text-[15px] font-medium transition-colors ${tripType === 'one-way' ? 'bg-[#e7fddc] text-wego-dark-green' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>One-way</button>
                <button onClick={() => setTripType("round-trip")} className={`px-5 py-2 rounded-full text-[15px] font-medium transition-colors ${tripType === 'round-trip' ? 'bg-[#e7fddc] text-wego-dark-green' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>Round-trip</button>
                <button onClick={() => setTripType("multi-city")} className={`px-5 py-2 rounded-full text-[15px] font-medium transition-colors ${tripType === 'multi-city' ? 'bg-[#e7fddc] text-wego-dark-green' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>Multi-city</button>
              </div>
            </div>

            {/* Middle Row: Search Inputs */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              
              {/* Origin & Destination Block (Puzzle Piece) */}
              <div className="flex-1 flex relative border border-gray-200 rounded-2xl bg-white hover:border-gray-400 focus-within:border-wego-green transition-colors group">
                <div className="flex-1 px-4 py-3 hover:bg-gray-50 rounded-l-2xl cursor-text relative flex flex-col justify-center">
                  <div className="text-[13px] font-semibold text-gray-500 mb-0.5 group-hover:text-wego-green transition-colors">From</div>
                  <div className="font-bold text-gray-900 text-[18px] truncate tracking-tight leading-tight">Marseille (MRS)</div>
                </div>
                
                {/* SVG Puzzle Divider */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 flex flex-col pointer-events-none z-10 text-gray-200 group-hover:text-gray-400 group-focus-within:text-wego-green transition-colors">
                  <div className="w-px flex-1 bg-current mx-auto"></div>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0 mx-auto">
                    <path d="M 16 0 A 16 16 0 0 1 16 32" stroke="currentColor" strokeWidth="1" />
                  </svg>
                  <div className="w-px flex-1 bg-current mx-auto"></div>
                </div>
                {/* Swap Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[6px] flex items-center justify-center text-gray-400 hover:text-wego-green pointer-events-auto cursor-pointer p-2 z-20">
                  <ArrowsRightLeftIcon className="w-5 h-5" strokeWidth={2.5} />
                </div>
                
                <div className="flex-1 px-4 py-3 hover:bg-gray-50 rounded-r-2xl cursor-text relative pl-10 flex flex-col justify-center">
                  <div className="text-[16px] text-gray-500 transition-colors">To</div>
                </div>
              </div>

              {/* Dates Block */}
              <div className="flex-1 flex relative border border-gray-200 rounded-2xl bg-white hover:border-gray-400 focus-within:border-wego-green transition-colors group">
                <div className="flex-1 px-4 py-3 hover:bg-gray-50 rounded-l-2xl cursor-text flex justify-between items-center relative">
                  <div className="flex flex-col justify-center">
                    <div className="text-[13px] font-semibold text-gray-500 mb-0.5 group-hover:text-wego-green transition-colors">Depart</div>
                    <div className="font-bold text-gray-900 text-[18px] truncate tracking-tight leading-tight">Fri, 19 Jun 2026</div>
                  </div>
                  <div className="flex gap-4 text-gray-400 mr-1 mt-3">
                    <ChevronLeftIcon className="w-4 h-4 hover:text-gray-800 cursor-pointer" strokeWidth={2.5} />
                    <ChevronRightIcon className="w-4 h-4 hover:text-gray-800 cursor-pointer text-wego-green" strokeWidth={2.5} />
                  </div>
                </div>
                
                <div className="w-px h-full bg-gray-200 group-hover:bg-gray-400 group-focus-within:bg-wego-green transition-colors"></div>

                <div className="flex-1 px-4 py-3 hover:bg-gray-50 rounded-r-2xl cursor-text relative flex flex-col justify-center">
                  <div className="text-[16px] text-gray-500 transition-colors">Return</div>
                </div>
              </div>

            </div>

            {/* Bottom Row: Options & Search Button */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer text-[15px] text-gray-700">
                <input type="checkbox" className="w-5 h-5 border-gray-300 rounded text-wego-green focus:ring-wego-green" />
                <span>Direct Only</span>
              </label>
              
              <div className="flex items-center gap-6 mt-4 md:mt-0">
                <div className="flex items-center gap-6 text-[15px] text-gray-700">
                  <button className="flex items-center gap-2 hover:text-wego-green">
                    1 Adult
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button className="flex items-center gap-2 hover:text-wego-green">
                    Economy
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button className="flex items-center gap-2 hover:text-wego-green">
                    5 Payment Types
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                
                <button className="bg-wego-green hover:bg-[#3ca409] text-white font-bold rounded-[14px] px-14 py-4 text-[22px] transition-colors shadow-sm ml-4">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Banner */}
        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-xl px-5 py-2 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.1)] flex items-center gap-5 relative">
            <div className="absolute -top-[9px] left-8 bg-[#ff6b00] text-white text-[10px] font-bold px-[6px] py-[1px] rounded-full tracking-wide">New</div>
            <button className="flex items-center gap-2 font-bold text-[13px] text-gray-800 hover:text-wego-green transition-colors">
              <Image src="/images/Umrah@3x_376857943.png" alt="Umrah" width={20} height={20} />
              Umrah e-Visa
            </button>
            <div className="w-[1px] h-[18px] bg-gray-200"></div>
            <button className="flex items-center gap-2 font-bold text-[13px] text-gray-800 hover:text-wego-green transition-colors">
              <Image src="/images/Visa_358279377.png" alt="Visa" width={20} height={20} />
              e-Visa
            </button>
            <div className="w-[1px] h-[18px] bg-gray-200"></div>
            <button className="flex items-center gap-2 font-bold text-[13px] text-gray-800 hover:text-wego-green transition-colors">
              <Image src="/images/eSIM_358279346.png" alt="eSIM" width={20} height={20} />
              eSIM
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
