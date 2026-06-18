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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="flex items-center justify-center text-2xl font-semibold leading-9 m-0 px-8 pb-4 text-[#111111]">
          Top searched destinations from Karachi
        </h2>
      </div>

      {/* ── MARQUEE TRACK ── */}
      <div
        className="w-full overflow-hidden group/track"
        aria-label="Popular destinations carousel"
      >
        <div ref={trackRef} className="animate-marquee flex gap-4 w-max group-hover/track:[animation-play-state:paused] py-4 px-4">
          {doubled.map((dest, idx) => (
            <a
              key={`${dest.id}-${idx}`}
              href={`https://www.wego.pk/flights/search/pkr?dep_airport=KHI&arr_airport=${dest.code}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[240px] group relative rounded-[16px] overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out hover:scale-105 hover:z-10 hover:shadow-xl"
              style={{ height: "340px" }}
              tabIndex={idx >= popularDestinations.length ? -1 : 0}
              aria-hidden={idx >= popularDestinations.length}
            >
              {/* Background photo */}
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out"
                draggable={false}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end">
                <h3 className="text-white text-[22px] font-bold leading-tight mb-1">
                  {dest.name}
                </h3>
                <p className="text-white/90 text-[11px] mb-0.5">
                  Round-trip flights from
                </p>
                <p className="text-white text-[15px] font-bold">
                  {dest.price.replace(' ', '')}
                </p>
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
