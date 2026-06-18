"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  const [tripType, setTripType] = useState("round-trip");

  return (
    <section className="relative overflow-hidden bg-[#0978c7] text-slate-900">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,77,145,0.88)_0%,rgba(0,132,214,0.16)_28%,rgba(255,255,255,0)_62%)]" />

      <div className="relative mx-auto max-w-[1600px] px-4 pb-16 pt-5 sm:px-6 lg:px-10">
        {/* Removed duplicate navbar from here to prevent merging with sticky Navbar */}        <div className="relative mx-auto mt-10 max-w-[1450px]">
          <img src="/images/balloon-left.png" alt="" className="absolute left-[-6px] top-[-14px] hidden h-[250px] w-auto lg:block" />
          <img src="/images/mascot-support.png" alt="" className="absolute right-[230px] top-[-8px] hidden h-[135px] w-auto lg:block" />
          <img src="/images/balloon-left.png" alt="" className="absolute right-[0px] top-[-10px] hidden h-[250px] w-auto scale-x-[-1] lg:block" />

          <div className="mx-auto flex w-full max-w-[1040px] flex-col items-center pt-16 lg:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/25 px-2 py-2 text-white backdrop-blur-sm">
              <button className="rounded-full bg-white px-5 py-4 text-[18px] font-semibold text-slate-900 shadow-sm">
                <span className="mr-2 text-[20px] text-lime-500">✈</span>Flights
              </button>
              <button className="rounded-full px-5 py-4 text-[18px] font-semibold">🏨 Hotels</button>
              <button className="rounded-full px-5 py-4 text-[18px] font-semibold">🚗 Car Rentals</button>
            </div>

            <div className="mt-6 w-full rounded-[20px] bg-white px-4 py-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] sm:px-5 sm:py-8 lg:px-6">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setTripType("one-way")} className={`rounded-full px-5 py-3 text-[17px] ${tripType === "one-way" ? "bg-[#f3f3f3] text-black" : "bg-[#f3f3f3] text-black"}`}>One-way</button>
                <button onClick={() => setTripType("round-trip")} className="rounded-full bg-[#dff7c7] px-5 py-3 text-[17px] text-[#17911a]">Round-trip</button>
                <button onClick={() => setTripType("multi-city")} className="rounded-full bg-[#f3f3f3] px-5 py-3 text-[17px] text-black">Multi-city</button>
              </div>

              <div className="mt-5 grid gap-2 lg:grid-cols-[1.08fr_1fr]">
                <div className="flex min-h-[80px] rounded-[11px] border border-[#d9d9d9] bg-white">
                  <div className="flex-1 px-5 py-3">
                    <div className="text-[15px] text-[#8d8d8d]">From</div>
                    <div className="text-[21px] font-semibold tracking-tight">Marseille (MRS)</div>
                  </div>
                  <div className="relative flex w-12 items-center justify-center">
                    <div className="absolute left-1/2 top-0 h-full w-px bg-[#d9d9d9]" />
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-[#b5b5b5]">
                      <ArrowsRightLeftIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 items-center px-5 py-3">
                    <div>
                      <div className="text-[15px] text-[#8d8d8d]">To</div>
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[80px] rounded-[11px] border border-[#d9d9d9] bg-white">
                  <div className="flex-1 px-5 py-3">
                    <div className="text-[15px] text-[#8d8d8d]">Depart</div>
                    <div className="text-[21px] font-semibold tracking-tight">Fri, 19 Jun 2026</div>
                  </div>
                  <div className="flex items-center gap-3 px-4 text-[#1f8f1f]">
                    <ChevronLeftIcon className="h-5 w-5" />
                    <ChevronRightIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 border-l border-[#d9d9d9] px-5 py-3">
                    <div className="text-[15px] text-[#8d8d8d]">Return</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <label className="flex items-center gap-3 text-[18px] text-[#303030]">
                  <span className="h-7 w-7 border border-[#b0b0b0] bg-white" />
                  Direct Only
                </label>

                <div className="flex flex-wrap items-center gap-8 lg:justify-end">
                  <button className="text-[19px] font-medium text-[#303030]">1 Adult <ChevronDownIcon className="ml-2 inline-block h-5 w-5" /></button>
                  <button className="text-[19px] font-medium text-[#303030]">Economy <ChevronDownIcon className="ml-2 inline-block h-5 w-5" /></button>
                  <button className="text-[19px] font-medium text-[#303030]">5 Payment Types <ChevronDownIcon className="ml-2 inline-block h-5 w-5" /></button>
                  <button className="min-w-[168px] rounded-full bg-[#53c20d] px-8 py-4 text-[20px] font-bold text-white">Search</button>
                </div>
              </div>
            </div>

            <div className="relative mt-24 flex justify-center">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-[#ff8200] px-3 py-1 text-[14px] font-bold text-white">New</div>
              <div className="flex items-center overflow-hidden rounded-2xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
                <PromoItem image="/images/icon-flight.png" label="Umrah e-Visa" />
                <Divider />
                <PromoItem image="/images/icon-pay.png" label="e-Visa" />
                <Divider />
                <PromoItem image="/images/mascot-support.png" label="eSIM" small />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PromoItem({ image, label, small }: { image: string; label: string; small?: boolean }) {
  return (
    <div className="flex min-w-[155px] items-center gap-3 px-5 py-4 text-[16px] font-semibold">
      <img src={image} alt="" className={small ? "h-5 w-5 object-contain" : "h-6 w-6 object-contain"} />
      <span>{label}</span>
    </div>
  );
}

function Divider() {
  return <div className="h-12 w-px bg-[#dcdcdc]" />;
}

function LinklessLogo() {
  return <span className="flex items-center gap-2 text-white"><span>WegoPro</span><span className="text-[13px] font-normal">for Business Travel</span></span>;
}
