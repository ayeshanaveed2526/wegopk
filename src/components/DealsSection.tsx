"use client";

import React from "react";
import Image from "next/image";

export default function DealsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left: Phone mockup */}
          <div className="flex-shrink-0 flex justify-center">
            <Image
              src="https://zen.wego.com/cdn-cgi/image/width=600/web/illustrations/download-app-phone_en.png"
              alt="Wego App"
              width={280}
              height={420}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right: Text + Download */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-6">
              Globally top-rated and MENA&apos;s #1 travel app, with{" "}
              <span className="text-[#44B50C]">83M+ downloads</span>
            </h2>

            {/* Bullet features */}
            <div className="space-y-3 mb-8">
              {["App-only deals", "700+ sites in one search", "Safe, secure bookings"].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#44B50C] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold">{feat}</span>
                </div>
              ))}
            </div>

            {/* QR + Badges row */}
            <div className="flex items-center gap-6 flex-wrap">
              {/* QR Code */}
              <div className="border border-gray-200 rounded-xl p-2">
                <Image
                  src="https://assets.wego.com/image/upload/h_120,w_120,f_auto,fl_lossy,q_auto:low/v202010050/web/install_banner/qr_code.png"
                  alt="Scan to download"
                  width={96}
                  height={96}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-3">
                {/* Apple */}
                <a
                  href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors"
                >
                  <Image
                    src="https://zen.wego.com/cdn-cgi/image/format=auto,quality=90/cms/images/app-store-icon_354729773.png"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <div className="leading-tight">
                    <div className="text-[10px] text-gray-300">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                  <div className="ml-2 text-right">
                    <div className="text-xs font-black">4.7 ★</div>
                    <div className="text-[9px] text-gray-400">230K+ reviews</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2.5 hover:bg-gray-800 transition-colors"
                >
                  <Image
                    src="https://zen.wego.com/cdn-cgi/image/format=auto,quality=90/cms/images/google-playstore-icon_354729800.png"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <div className="leading-tight">
                    <div className="text-[10px] text-gray-300">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                  <div className="ml-2 text-right">
                    <div className="text-xs font-black">4.7 ★</div>
                    <div className="text-[9px] text-gray-400">187K+ reviews</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              "What is Wego?",
              "How reliable is Wego, and what support do you provide after I book?",
              "What is Book on Wego?",
              "How does Wego ensure I find the lowest flight price?",
              "How popular is Wego?",
            ].map((q, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-800 text-sm md:text-base">{q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  Wego is a travel search engine that compares hundreds of booking sites to find you the best deals on flights and hotels. We&apos;re trusted by 83 million+ travellers worldwide.
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
