"use client";

import React from "react";
import Image from "next/image";
import SearchTabs from "./SearchTabs";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex items-start justify-center"
      style={{ minHeight: "calc(100vh - 64px)", marginTop: "64px" }}
    >
      {/* ── BACKGROUND PHOTO ── */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[center_40%]"
        style={{ zIndex: 0 }}
      />

      {/* Top dark scrim for navbar contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.02) 18%, transparent 35%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          zIndex: 1,
          background: "linear-gradient(0deg, rgba(255,255,255,0.25) 0%, transparent 100%)",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative w-full max-w-[900px] mx-auto px-4 sm:px-6"
        style={{ zIndex: 30, paddingTop: "36px", paddingBottom: "32px" }}
      >
        {/* Search tabs + card */}
        <SearchTabs />

        {/* ── QUICK LINKS BAR (Visa / eSIM) ── */}
        <div
          className="mt-6 mx-auto w-fit flex items-center flex-wrap gap-x-0 gap-y-2"
          style={{
            background: "rgba(255,255,255,0.94)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.7)",
            padding: "9px 20px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
          }}
        >
          {/* Umrah e-Visa */}
          <div className="relative flex items-center gap-[8px] cursor-pointer group px-3">
            <span
              className="absolute text-white font-extrabold uppercase tracking-wider whitespace-nowrap"
              style={{
                top: "-22px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#FF7A00",
                borderRadius: "9999px",
                fontSize: "9px",
                padding: "2px 8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
              }}
            >
              New
            </span>
            <div
              className="flex items-center justify-center rounded-[8px] flex-shrink-0"
              style={{ backgroundColor: "#44B50C", width: "28px", height: "28px" }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span
              className="font-semibold whitespace-nowrap group-hover:text-[#44B50C] transition-colors"
              style={{ fontSize: "14px", color: "#1D1D1D" }}
            >
              Umrah e-Visa
            </span>
          </div>

          <div style={{ width: "1px", height: "20px", background: "#DFDFDF", margin: "0 4px" }} />

          {/* e-Visa */}
          <div className="flex items-center gap-[8px] cursor-pointer group px-3">
            <div
              className="flex items-center justify-center rounded-[8px] flex-shrink-0"
              style={{ backgroundColor: "#44B50C", width: "28px", height: "28px" }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0 4h8v2H6z" />
              </svg>
            </div>
            <span
              className="font-semibold whitespace-nowrap group-hover:text-[#44B50C] transition-colors"
              style={{ fontSize: "14px", color: "#1D1D1D" }}
            >
              e-Visa
            </span>
          </div>

          <div style={{ width: "1px", height: "20px", background: "#DFDFDF", margin: "0 4px" }} />

          {/* eSIM */}
          <div className="flex items-center gap-[8px] cursor-pointer group px-3">
            <div
              className="flex items-center justify-center rounded-[8px] flex-shrink-0"
              style={{ backgroundColor: "#44B50C", width: "28px", height: "28px" }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="14" height="14">
                <path d="M17 3H7l-4 4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H9V6h6v2z" />
              </svg>
            </div>
            <span
              className="font-semibold whitespace-nowrap group-hover:text-[#44B50C] transition-colors"
              style={{ fontSize: "14px", color: "#1D1D1D" }}
            >
              eSIM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
