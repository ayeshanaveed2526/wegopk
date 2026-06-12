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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* ── LEFT: Phone Mockup ── */}
          <div className="flex-shrink-0 flex justify-center">
            <Image
              src="/images/app-mockup.png"
              alt="Wego App on iPhone"
              width={260}
              height={420}
              className="object-contain drop-shadow-2xl"
              priority={false}
            />
          </div>

          {/* ── RIGHT: Text + Download ── */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-[30px] font-black text-[#1D1D1D] leading-tight mb-6">
              Globally top-rated and MENA&apos;s #1 travel app, with{" "}
              <span className="text-[#44B50C]">83M+ downloads</span>
            </h2>

            {/* Bullet features */}
            <div className="space-y-3 mb-8">
              {features.map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#44B50C] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#1D1D1D] font-semibold">{feat}</span>
                </div>
              ))}
            </div>

            {/* ── QR + Store Badges ── */}
            <div className="flex items-center gap-6 flex-wrap">
              {/* QR Code */}
              <div className="border border-[#DFDFDF] rounded-xl p-2 flex-shrink-0">
                <Image
                  src="/images/qr-code.png"
                  alt="Scan QR code to download Wego app"
                  width={88}
                  height={88}
                  className="rounded-lg"
                />
              </div>

              {/* Store Badges */}
              <div className="space-y-3">
                {/* Apple App Store */}
                <Link
                  href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-[#1D1D1D] transition-colors min-w-[180px]"
                >
                  <Image
                    src="/images/badge-appstore.png"
                    alt="App Store"
                    width={22}
                    height={22}
                  />
                  <div className="leading-tight">
                    <div className="text-[10px] text-white/60">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs font-black">4.7 ★</div>
                    <div className="text-[9px] text-white/50">230K+ reviews</div>
                  </div>
                </Link>

                {/* Google Play Store */}
                <Link
                  href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-[#1D1D1D] transition-colors min-w-[180px]"
                >
                  <Image
                    src="/images/badge-playstore.png"
                    alt="Google Play"
                    width={22}
                    height={22}
                  />
                  <div className="leading-tight">
                    <div className="text-[10px] text-white/60">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-xs font-black">4.7 ★</div>
                    <div className="text-[9px] text-white/50">187K+ reviews</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
