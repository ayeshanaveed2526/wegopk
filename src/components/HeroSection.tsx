"use client";

import React from "react";
import SearchTabs from "./SearchTabs";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-start justify-center overflow-hidden"
      style={{ minHeight: "calc(100vh - 64px)", marginTop: "64px" }}
    >
      {/* ── REAL HERO BACKGROUND PHOTO ── */}
      <img
        src="https://assets.wego.com/image/upload/c_fill,fl_lossy,q_auto:best,f_auto,w_1920/v1597920831/web/hero_images/pk_1.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* Subtle dark overlay at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, transparent 20%)",
        }}
      />

      {/* ── MAIN CONTENT: TABS + SEARCH CARD ── */}
      <div
        className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-8 flex flex-col items-center"
        style={{ zIndex: 30 }}
      >
        <SearchTabs />

        {/* ── VISA / eSIM BAR ── */}
        <div
          className="mt-8 flex items-center flex-wrap gap-3 rounded-full px-5 py-2.5 border border-white/60 shadow-lg"
          style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(6px)" }}
        >
          {/* Umrah e-Visa */}
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
              New
            </span>
            <div className="w-7 h-7 rounded-lg bg-[#44B50C] flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold text-sm group-hover:text-[#44B50C] transition-colors whitespace-nowrap">
              Umrah e-Visa
            </span>
          </div>

          <div className="h-5 w-px bg-gray-200 flex-shrink-0" />

          {/* e-Visa */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-7 h-7 rounded-lg bg-[#44B50C] flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0 4h8v2H6z" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold text-sm group-hover:text-[#44B50C] transition-colors whitespace-nowrap">
              e-Visa
            </span>
          </div>

          <div className="h-5 w-px bg-gray-200 flex-shrink-0" />

          {/* eSIM */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-7 h-7 rounded-lg bg-[#44B50C] flex items-center justify-center flex-shrink-0">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 3H7l-4 4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H9V6h6v2z" />
              </svg>
            </div>
            <span className="text-gray-800 font-semibold text-sm group-hover:text-[#44B50C] transition-colors whitespace-nowrap">
              eSIM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
