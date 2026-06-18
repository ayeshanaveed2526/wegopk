"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  "App-only deals",
  "700+ sites in one search",
  "Safe, secure bookings",
];

export default function AppDownloadSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
          
          {/* Mountain Background (clipped to rounded corners) */}
          <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[340px] overflow-hidden rounded-l-[24px]">
            <img src="/images/hero-bg.png" className="w-full h-full object-cover" />
          </div>

          {/* Phone Mockup (overflows) */}
          <div className="relative w-full lg:w-[340px] flex justify-center lg:block flex-shrink-0 pt-8 lg:pt-0 z-10">
            <img 
              src="/images/app-mockup.png" 
              alt="Wego App" 
              className="lg:absolute lg:top-[-40px] lg:bottom-[-40px] lg:left-1/2 lg:-translate-x-1/2 w-[260px] lg:w-[280px] lg:max-w-none lg:h-[calc(100%+80px)] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 py-10 lg:py-16 px-6 lg:pl-10 lg:pr-14 text-center lg:text-left z-10 relative">
            <h2 className="text-[26px] sm:text-[32px] font-bold text-[#111111] leading-[1.2] mb-8">
              Globally top-rated and MENA&apos;s #1 travel app,<br className="hidden sm:block" /> with 83M+ downloads
            </h2>

            {/* Bullet features */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10">
              {features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#888888] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                      <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[#444444] text-[15px]">{feat}</span>
                </div>
              ))}
            </div>

            {/* ── QR + Store Badges ── */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
              {/* QR Code */}
              <div className="flex-shrink-0">
                <img
                  src="/images/qr-code.png"
                  alt="Scan QR code"
                  className="w-[100px] h-[100px]"
                />
              </div>

              {/* Store Badges Row */}
              <div className="flex flex-row items-center gap-6">
                {/* Apple App Store */}
                <div className="flex flex-col items-center lg:items-start">
                  <Link
                    href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white rounded-[14px] px-4 py-2 hover:bg-gray-800 transition-colors w-[160px] h-[54px]"
                  >
                    <svg className="w-[22px] h-[22px] fill-white" viewBox="0 0 24 24">
                      <path d="M16.36 10.3c-.02-2.54 2.07-3.76 2.16-3.82-1.18-1.73-3.02-1.96-3.69-2-1.57-.16-3.07.93-3.88.93-.8 0-2.02-1.02-3.32-.99-1.7.03-3.26 1-4.14 2.54-1.8 3.12-.46 7.73 1.3 10.27.86 1.25 1.88 2.65 3.23 2.6 1.28-.05 1.78-.83 3.34-.83 1.54 0 2.01.83 3.36.8.14 0 .23-.05.41-.05 1.41-.03 2.31-1.32 3.16-2.57 1-1.46 1.41-2.88 1.43-2.95-.03-.02-2.76-1.06-2.78-3.93zM14.73 4.88c.7-.85 1.17-2.03 1.04-3.2-.99.04-2.24.66-2.95 1.52-.63.75-1.18 1.95-1.03 3.09 1.1-.03 2.24-.56 2.94-1.41z"/>
                    </svg>
                    <div className="text-left leading-tight">
                      <div className="text-[10px] text-gray-200">Download on the</div>
                      <div className="text-[16px] font-semibold -mt-0.5">App Store</div>
                    </div>
                  </Link>
                  <div className="mt-2.5 text-center lg:text-left w-full pl-2">
                    <div className="flex items-center gap-1">
                      <span className="text-[15px] font-bold text-[#111111]">4.7</span>
                      <div className="flex text-[#FF9800] text-[14px] tracking-tighter">
                        ★★★★★
                      </div>
                    </div>
                    <div className="text-[12px] text-[#767676] mt-0.5">243,418+ reviews</div>
                  </div>
                </div>

                {/* Google Play Store */}
                <div className="flex flex-col items-center lg:items-start">
                  <Link
                    href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-black text-white rounded-[14px] px-4 py-2 hover:bg-gray-800 transition-colors w-[160px] h-[54px]"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 3.5L18.5 12L4.5 20.5V3.5Z" fill="currentColor" />
                    </svg>
                    <div className="text-left leading-tight">
                      <div className="text-[10px] text-gray-200 uppercase tracking-wide">Get it on</div>
                      <div className="text-[16px] font-semibold -mt-0.5">Google Play</div>
                    </div>
                  </Link>
                  <div className="mt-2.5 text-center lg:text-left w-full pl-2">
                    <div className="flex items-center gap-1">
                      <span className="text-[15px] font-bold text-[#111111]">4.4</span>
                      <div className="flex text-[#FF9800] text-[14px] tracking-tighter">
                        ★★★★★
                      </div>
                    </div>
                    <div className="text-[12px] text-[#767676] mt-0.5">191,799+ reviews</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
