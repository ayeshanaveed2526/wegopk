"use client";

import React from "react";

// Partner logos data (text-based styled to match real logos)
const partners = [
  {
    name: "FlyJinnah",
    color: "#E8001C",
    accent: "#FF6B00",
    style: "font-extrabold text-lg italic",
    badge: "✈",
  },
  {
    name: "AIRSIAL",
    color: "#1A6B35",
    accent: "#1A6B35",
    style: "font-black text-sm tracking-widest",
    badge: "★",
  },
  {
    name: "PAKISTAN\nInternational Airlines",
    color: "#1B4F8A",
    accent: "#2E8B57",
    style: "font-bold text-xs leading-tight text-center",
    badge: "✈",
  },
  {
    name: "airblue",
    color: "#003DA5",
    accent: "#0066CC",
    style: "font-light text-xl tracking-tight",
    bold: "blue",
  },
  {
    name: "sastaticket.pk",
    color: "#555555",
    accent: "#555555",
    style: "font-semibold text-sm",
  },
  {
    name: "Sky-tours",
    color: "#00AACC",
    accent: "#FF6600",
    style: "font-black text-lg",
  },
  {
    name: "OneTravel",
    color: "#FF6600",
    accent: "#FF6600",
    style: "font-bold text-lg",
  },
];

// Feature cards using real Wego mascot images
const features = [
  {
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/flight_363374043.png",
    alt: "Best Deals",
    title: "The best hotel & flight deals in the universe",
  },
  {
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/pay_363374094.png",
    alt: "Flexible Payment",
    title: "Flexible ways to pay",
  },
  {
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/support_363374119.png",
    alt: "24/7 Support",
    title: "Support that never sleeps, we're with you 24/7",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-8 tracking-tight">
          700+ travel websites. One simple search.
        </h2>

        {/* ── PARTNER LOGOS ROW ── */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-14">

          {/* FlyJinnah */}
          <div className="flex items-center gap-1">
            <span className="text-[#E8001C] font-black text-lg italic tracking-tight">Fly</span>
            <span className="text-[#E8001C] font-black text-lg italic tracking-tight">Jinnah</span>
            <span className="ml-0.5 bg-[#FF6B00] text-white text-[8px] font-black px-1 py-0.5 rounded">✈</span>
          </div>

          {/* AirSial */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#1A6B35] text-sm font-black">★</span>
            <span className="text-[#1A6B35] font-black text-sm tracking-widest uppercase">AirSial</span>
          </div>

          {/* Pakistan International Airlines */}
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-[#1B4F8A] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[8px] font-black">PIA</span>
            </div>
            <div className="leading-tight">
              <div className="text-[#1B4F8A] font-bold text-[10px] uppercase tracking-wider leading-none">Pakistan</div>
              <div className="text-[#1B4F8A] font-bold text-[10px] leading-none">International Airlines</div>
            </div>
          </div>

          {/* airblue */}
          <div className="flex items-baseline gap-0">
            <span className="text-gray-600 font-light text-xl tracking-tight">air</span>
            <span className="text-[#003DA5] font-black text-xl tracking-tight">blue</span>
          </div>

          {/* sastaticket.pk */}
          <div>
            <span className="text-gray-500 font-semibold text-sm">sastaticket</span>
            <span className="text-gray-400 font-semibold text-sm">.pk</span>
          </div>

          {/* Sky-tours */}
          <div className="flex items-center gap-0.5">
            <span className="text-[#0099CC] font-black text-lg">Sky</span>
            <span className="text-white bg-[#0099CC] font-black text-sm px-1 py-0.5 rounded mx-0.5">
              <svg className="w-3 h-3 inline" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"/>
              </svg>
            </span>
            <span className="text-[#FF6600] font-black text-lg">tours</span>
          </div>

          {/* OneTravel */}
          <div>
            <span className="text-[#FF6600] font-bold text-lg">One</span>
            <span className="text-gray-700 font-bold text-lg">Travel</span>
          </div>

          {/* ...and more! */}
          <div>
            <span className="text-gray-400 font-semibold text-sm">...and more!</span>
          </div>
        </div>

        {/* ── THREE FEATURE CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              {/* Mascot image */}
              <div className="w-48 h-48 flex items-end justify-center mb-4">
                <img
                  src={feat.image}
                  alt={feat.alt}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <p className="text-gray-900 font-bold text-base leading-snug max-w-[220px]">
                {feat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
