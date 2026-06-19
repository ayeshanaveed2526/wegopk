"use client";

import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

export default function OneWayForm() {
  return (
    <>
      <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
        {/* From & To with Concave Cutouts */}
        <div className="flex w-full relative h-[60px]">
          {/* FROM */}
          <div className="relative flex-1 group z-10 focus-within:z-20">
            <div className="h-full rounded-l-2xl border border-slate-200 group-focus-within:border-[#44b50c] bg-white px-4 py-1.5 transition-colors">
              <div className="text-[13px] font-semibold text-slate-500">From</div>
              <div className="truncate text-[16px] font-bold tracking-tight text-slate-900">Marseille (MRS)</div>
            </div>
            {/* Mask right border */}
            <div className="absolute right-[-1px] top-1/2 -translate-y-1/2 w-[2px] h-[34px] bg-white pointer-events-none z-10"></div>
            {/* Concave curve pointing left (on the right side of From) */}
            <div 
              className="absolute right-[-17px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full border border-slate-200 group-focus-within:border-[#44b50c] pointer-events-none z-20 transition-colors" 
              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
            ></div>
          </div>

          {/* SWAP BUTTON */}
          <div className="relative z-30 flex items-center justify-center -mx-[17px]">
            <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm hover:text-slate-600 transition-colors">
              <ArrowsRightLeftIcon className="h-4 w-4" />
            </div>
          </div>

          {/* TO */}
          <div className="relative flex-1 group z-10 focus-within:z-20">
            <div className="h-full rounded-r-2xl border border-slate-200 group-focus-within:border-[#44b50c] bg-white px-4 py-1.5 pl-6 transition-colors">
              <div className="text-[13px] font-semibold text-slate-500">To</div>
              <div className="truncate text-[16px] font-medium text-slate-400">To</div>
            </div>
            {/* Mask left border */}
            <div className="absolute left-[-1px] top-1/2 -translate-y-1/2 w-[2px] h-[34px] bg-white pointer-events-none z-10"></div>
            {/* Concave curve pointing right (on the left side of To) */}
            <div 
              className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full border border-slate-200 group-focus-within:border-[#44b50c] pointer-events-none z-20 transition-colors" 
              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
            ></div>
          </div>
        </div>

        {/* Depart */}
        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors">
          <div className="flex-1 px-4 py-1.5">
            <div className="text-[13px] font-semibold text-slate-500">Depart</div>
            <div className="text-[16px] font-bold tracking-tight text-slate-900">Sat, 20 Jun 2026</div>
          </div>
          <div className="flex items-center gap-3 px-4 text-slate-400">
            <ChevronLeftIcon className="h-4 w-4 hover:text-slate-600 cursor-pointer" />
            <ChevronRightIcon className="h-4 w-4 text-[#44b50c] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
        <label className="flex items-center gap-2 text-[15px] text-slate-700 cursor-pointer select-none">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-slate-300 text-[#44b50c] focus:ring-[#44b50c] accent-[#44b50c]"
          />
          Direct Only
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex flex-wrap items-center gap-8 text-[15.5px] text-[#2c2c2c] font-normal mr-2">
            <button className="flex items-center gap-2.5 transition-colors hover:text-slate-900">
              1 Adult
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]"><path d="M7 10l5 5 5-5z" /></svg>
            </button>
            <button className="flex items-center gap-2.5 transition-colors hover:text-slate-900">
              Economy
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]"><path d="M7 10l5 5 5-5z" /></svg>
            </button>
            <button className="flex items-center gap-2.5 transition-colors hover:text-slate-900">
              5 Payment Types
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]"><path d="M7 10l5 5 5-5z" /></svg>
            </button>
          </div>
          <button className="rounded-full bg-[#44b50c] px-10 py-4 text-[18px] font-bold text-white shadow-sm transition-colors hover:bg-[#3ca409]">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
