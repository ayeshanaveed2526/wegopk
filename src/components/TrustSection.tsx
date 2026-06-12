"use client";

import React from "react";
import Image from "next/image";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#F59E0B">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* Half star */}
      <svg className="w-4 h-4" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <h2 className="text-2xl sm:text-[30px] font-black text-[#1D1D1D] text-center mb-8 tracking-tight leading-tight">
          Trusted by 83 million+ travellers worldwide
        </h2>

        {/* ── RATING ROW ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-6">

          {/* App Store rating */}
          <div className="flex items-center gap-3">
            <span className="text-[28px] font-black text-[#1D1D1D]">4.7</span>
            <div className="flex flex-col gap-1">
              <StarRating rating={4.7} />
              <div className="flex items-center gap-1.5">
                <Image
                  src="/images/badge-appstore.png"
                  alt="App Store"
                  width={18}
                  height={18}
                  className="rounded-sm"
                />
                <span className="text-[13px] text-[#767676]">230,591+ reviews</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-10 w-px bg-[#DFDFDF]" />

          {/* Google Play rating */}
          <div className="flex items-center gap-3">
            <span className="text-[28px] font-black text-[#1D1D1D]">4.7</span>
            <div className="flex flex-col gap-1">
              <StarRating rating={4.7} />
              <div className="flex items-center gap-1.5">
                <Image
                  src="/images/badge-playstore.png"
                  alt="Google Play"
                  width={18}
                  height={18}
                  className="rounded-sm"
                />
                <span className="text-[13px] text-[#767676]">187,371+ reviews</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
