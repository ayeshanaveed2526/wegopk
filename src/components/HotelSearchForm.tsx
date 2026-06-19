"use client";

import React, { useState } from 'react';

export default function HotelSearchForm() {
  const [destination, setDestination] = useState("Marseille, France");
  const [checkIn, setCheckIn] = useState("Fri, 19 Jun 2026");
  const [checkOut, setCheckOut] = useState("Sat, 20 Jun 2026");
  const [guests, setGuests] = useState("2 Adults in 1 Room");
  const [freeCancellation, setFreeCancellation] = useState(false);

  return (
    <div className="flex flex-col mt-2">
      <h3 className="text-[#111111] text-[16px] font-medium mb-4">Where would you like to stay?</h3>
      
      <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* Destination */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors relative">
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
            <div className="text-[13px] font-semibold text-slate-500">Destination</div>
            <input 
              type="text" 
              value={destination} 
              onChange={(e) => setDestination(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
        </div>

        {/* Check In */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors relative">
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center border-r border-slate-200">
            <div className="text-[13px] font-semibold text-slate-500">Check In</div>
            <input 
              type="text" 
              value={checkIn} 
              onChange={(e) => setCheckIn(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
        </div>
        
        {/* Check Out */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors relative">
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
            <div className="text-[13px] font-semibold text-slate-500">Check Out</div>
            <input 
              type="text" 
              value={checkOut} 
              onChange={(e) => setCheckOut(e.target.value)} 
              className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
            />
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors relative">
          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
            <div className="text-[13px] font-semibold text-slate-500">Guests & Rooms</div>
            <div className="flex justify-between items-center w-full">
               <input 
                type="text" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                className="text-[16px] font-bold tracking-tight text-slate-900 bg-transparent border-none outline-none w-full p-0 m-0" 
               />
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-400 pointer-events-none"><path d="M7 10l5 5 5-5z" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between border-t border-slate-100 pt-4">
        <label className="flex items-center gap-2 text-[15px] text-[#111111] cursor-pointer select-none">
          <input
            type="checkbox"
            checked={freeCancellation}
            onChange={(e) => setFreeCancellation(e.target.checked)}
            className="h-5 w-5 rounded border-slate-300 text-[#44b50c] focus:ring-[#44b50c] accent-[#44b50c]"
          />
          Free cancellation
        </label>
        
        <button className="rounded-full bg-[#44b50c] px-10 py-3.5 text-[18px] font-bold text-white shadow-sm transition-colors hover:bg-[#3ca409]">
          Search
        </button>
      </div>
    </div>
  );
}
