"use client";

import React, { useState } from 'react';

export default function CarRentalForm() {
  const [dropOffDiff, setDropOffDiff] = useState(false);
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("Sat, Jun 20");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffDate, setDropoffDate] = useState("Fri, Jun 26");
  const [dropoffTime, setDropoffTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="mb-4">
         <label className="flex items-center gap-2 text-[15px] text-[#111111] cursor-pointer select-none w-fit">
          <input
            type="checkbox"
            checked={dropOffDiff}
            onChange={(e) => setDropOffDiff(e.target.checked)}
            className="h-5 w-5 rounded border-slate-300 text-[#44b50c] focus:ring-[#44b50c] accent-[#44b50c]"
          />
          Drop off car at a different location
        </label>
      </div>
      
      <div className="grid gap-3 lg:grid-cols-[2fr_1fr_1fr]">
        {/* Pick-up location */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors relative">
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
            <div className="text-[13px] font-semibold text-slate-500">Pick-up & drop-off location</div>
            <input 
              type="text" 
              placeholder="Search for location..."
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0 placeholder:text-slate-400 placeholder:font-normal" 
            />
          </div>
        </div>

        {/* Pick-up date & time */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors">
          <div className="flex-[2] px-4 py-1.5 flex flex-col justify-center border-r border-slate-200">
            <div className="text-[13px] font-semibold text-slate-500">Pick-up date</div>
            <input 
              type="text" 
              value={pickupDate} 
              onChange={(e) => setPickupDate(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
             <div className="text-[13px] font-semibold text-slate-500">Time</div>
             <input 
              type="text" 
              value={pickupTime} 
              onChange={(e) => setPickupTime(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
        </div>
        
        {/* Drop-off date & time */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors">
          <div className="flex-[2] px-4 py-1.5 flex flex-col justify-center border-r border-slate-200">
            <div className="text-[13px] font-semibold text-slate-500">Drop-off date</div>
            <input 
              type="text" 
              value={dropoffDate} 
              onChange={(e) => setDropoffDate(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
             <div className="text-[13px] font-semibold text-slate-500">Time</div>
             <input 
              type="text" 
              value={dropoffTime} 
              onChange={(e) => setDropoffTime(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-t border-slate-100 pt-4">
        <label className="flex items-center gap-2 text-[15px] text-[#111111] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={driverAge}
            onChange={(e) => setDriverAge(e.target.checked)}
            className="h-5 w-5 rounded border-slate-300 text-[#44b50c] focus:ring-[#44b50c] accent-[#44b50c]"
          />
          Driver aged between 30 - 69
        </label>
        
        <div className="flex items-center gap-4">
           <div className="flex items-center text-[15px] text-[#111111]">
              <span className="mr-1">I live in</span>
              <button className="font-bold flex items-center gap-1 hover:text-slate-600 transition-colors">
                France
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-400"><path d="M7 10l5 5 5-5z" /></svg>
              </button>
           </div>
           <button className="rounded-full bg-[#44b50c] px-10 py-3.5 text-[18px] font-bold text-white shadow-sm transition-colors hover:bg-[#3ca409]">
             Search
           </button>
        </div>
      </div>
    </div>
  );
}
