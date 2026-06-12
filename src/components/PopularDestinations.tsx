"use client";

import React, { useRef } from "react";
import { popularDestinations } from "@/lib/data";

export default function PopularDestinations() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate for seamless loop
  const doubled = [...popularDestinations, ...popularDestinations];

  return (
    <section className="bg-white py-12 overflow-hidden">

      {/* ── SECTION HEADER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-[#44B50C] text-xs font-extrabold uppercase tracking-widest mb-2">
              Flights from Pakistan
            </p>
            <h2 className="text-2xl sm:text-[28px] font-black text-[#1D1D1D] leading-tight tracking-tight">
              Popular Destinations from Pakistan
            </h2>
            <p className="mt-2 text-[#767676] text-sm max-w-md">
              Compare prices across 1,000+ sites and find your next adventure
            </p>
          </div>

          <a
            href="https://www.wego.pk/flights"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1.5 text-[#44B50C] font-bold text-sm hover:text-[#188920] transition-colors group"
          >
            View all flights
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── MARQUEE TRACK ── */}
      <div
        className="animate-marquee-container w-full overflow-hidden"
        aria-label="Popular destinations carousel"
      >
        <div ref={trackRef} className="animate-marquee flex gap-5 w-max">
          {doubled.map((dest, idx) => (
            <a
              key={`${dest.id}-${idx}`}
              href={`https://www.wego.pk/flights/search/pkr?dep_airport=KHI&arr_airport=${dest.code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[240px] sm:w-[280px] group relative rounded-2xl overflow-hidden cursor-pointer select-none"
              style={{ height: "300px" }}
              tabIndex={idx >= popularDestinations.length ? -1 : 0}
              aria-hidden={idx >= popularDestinations.length}
            >
              {/* Background photo */}
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* IATA code badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full tracking-wider">
                  {dest.code}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                {/* Route */}
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  {dest.route}
                </p>
                {/* City name */}
                <h3 className="text-white text-lg font-black leading-tight tracking-tight">
                  {dest.name}
                </h3>
                {/* Country */}
                <p className="text-white/70 text-[11px] font-medium mb-3">{dest.country}</p>

                {/* Price row */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest">
                      Starting from
                    </p>
                    <p className="text-[#44B50C] text-base font-black leading-none">
                      {dest.price}
                    </p>
                  </div>

                  {/* Arrow button */}
                  <div className="w-8 h-8 rounded-full bg-[#44B50C] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── FADE EDGES ── */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent" style={{ position: 'relative', display: 'none' }} />
    </section>
  );
}
