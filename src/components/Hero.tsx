"use client";

import { useState } from "react";
import {
  ArrowsRightLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import MultiCityForm from "./MultiCityForm";
import OneWayForm from "./OneWayForm";
import HotelSearchForm from "./HotelSearchForm";
import CarRentalForm from "./CarRentalForm";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("round-trip");
  const [fromLocation, setFromLocation] = useState("Marseille (MRS)");
  const [toLocation, setToLocation] = useState("");
  const [departDate, setDepartDate] = useState("Sat, 20 Jun 2026");
  const [returnDate, setReturnDate] = useState("");

  return (
    <section className="relative bg-[#ffffff]">
      <div className="absolute inset-x-0 top-0 h-[560px] lg:h-[620px] bg-[url('/hero-bg.png')] bg-cover bg-center" />
      <div className="absolute inset-x-0 top-0 h-[560px] lg:h-[620px] bg-black/5" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col px-4 pb-[70px] pt-20 lg:pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-start">
          {/* Tab pill */}
          <div className="mb-8 inline-flex h-[60px] overflow-hidden rounded-full bg-white/40 border border-white/30 p-[6px] backdrop-blur-[31.2px]">
            <button
              onClick={() => setActiveTab("flights")}
              className={`flex h-full items-center gap-2 rounded-full px-5 sm:px-6 text-[15px] font-bold transition-all duration-300 ${activeTab === "flights"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-white hover:bg-white/10"
                }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-7 h-7 transform -rotate-45 ${activeTab === "flights" ? "text-[#44b50c]" : "text-white"
                  }`}
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              Flights
            </button>
            <button
              onClick={() => setActiveTab("hotels")}
              className={`flex h-full items-center gap-2 rounded-full px-5 sm:px-6 text-[15px] font-bold transition-all duration-300 ${activeTab === "hotels"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-white hover:bg-white/10"
                }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-7 h-7 ${activeTab === "hotels" ? "text-[#44b50c]" : "text-white"}`}
              >
                <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
              </svg>
              Hotels
            </button>
            <button
              onClick={() => setActiveTab("cars")}
              className={`flex h-full items-center gap-2 rounded-full px-5 sm:px-6 text-[15px] font-bold transition-all duration-300 ${activeTab === "cars"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-white hover:bg-white/10"
                }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-7 h-7 ${activeTab === "cars" ? "text-[#44b50c]" : "text-white"}`}
              >
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
              Car Rentals
            </button>
          </div>

          {/* Search card */}
          <div className="relative w-full max-w-[1380px]">
            {/* Mascot Image */}
            <div className="absolute -top-[130px] right-[10%] z-0 hidden w-[180px] md:block lg:-top-[160px] lg:right-[5%] lg:w-[220px] pointer-events-none">
              <img src="/weegio_354916968.png" alt="Wego Mascot" className="h-full w-full object-contain drop-shadow-lg" />
            </div>

            <div className="w-full rounded-[24px] bg-white p-4 sm:p-5 lg:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.18)] relative z-10">
              {activeTab === "flights" && (
                <>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <button
                      onClick={() => setTripType("one-way")}
                      className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${tripType === "one-way" ? "bg-[#e7fddc] text-[#298a08] hover:bg-[#d8f4cb]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                    >
                      One-way
                    </button>
                    <button
                      onClick={() => setTripType("round-trip")}
                      className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${tripType === "round-trip" ? "bg-[#e7fddc] text-[#298a08] hover:bg-[#d8f4cb]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                    >
                      Round-trip
                    </button>
                    <button
                      onClick={() => setTripType("multi-city")}
                      className={`rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${tripType === "multi-city" ? "bg-[#e7fddc] text-[#298a08] hover:bg-[#d8f4cb]" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                    >
                      Multi-city
                    </button>
                  </div>

                  {tripType === "multi-city" && <MultiCityForm />}
                  {tripType === "one-way" && <OneWayForm />}
                  {tripType === "round-trip" && (
                    <>
                      <div className="grid gap-3 lg:grid-cols-2">
                        {/* From & To with Concave Cutouts */}
                        <div className="flex w-full relative h-[60px]">
                          {/* FROM */}
                          <div className="relative flex-1 group z-10 focus-within:z-20">
                            <div className="h-full flex flex-col justify-center rounded-l-2xl border border-slate-200 group-focus-within:border-[#44b50c] bg-white px-4 py-1.5 transition-colors">
                              <div className="text-[13px] font-semibold text-slate-500">From</div>
                              <input
                                type="text"
                                value={fromLocation}
                                onChange={(e) => setFromLocation(e.target.value)}
                                placeholder="City or airport"
                                className="w-full text-[16px] font-bold tracking-tight text-slate-900 outline-none bg-transparent truncate"
                              />
                            </div>
                            {/* Mask right border */}
                            <div className="absolute right-[-1px] top-1/2 -translate-y-1/2 w-[2px] h-[34px] bg-white pointer-events-none z-10"></div>
                            {/* Concave curve pointing left */}
                            <div
                              className="absolute right-[-17px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full border border-slate-200 group-focus-within:border-[#44b50c] pointer-events-none z-20 transition-colors"
                              style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                            ></div>
                          </div>

                          {/* SWAP BUTTON */}
                          <div className="relative z-30 flex items-center justify-center -mx-[17px]">
                            <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm hover:text-slate-600 transition-colors">
                              <ArrowsRightLeftIcon className="h-4 w-4" />
                            </div>
                          </div>

                          {/* TO */}
                          <div className="relative flex-1 group z-10 focus-within:z-20">
                            <div className="h-full flex flex-col justify-center rounded-r-2xl border border-slate-200 group-focus-within:border-[#44b50c] bg-white px-4 py-1.5 pl-6 transition-colors">
                              <div className="text-[13px] font-semibold text-slate-500">To</div>
                              <input
                                type="text"
                                value={toLocation}
                                onChange={(e) => setToLocation(e.target.value)}
                                placeholder="Destination"
                                className="w-full text-[16px] font-medium text-slate-900 outline-none bg-transparent truncate"
                              />
                            </div>
                            {/* Mask left border */}
                            <div className="absolute left-[-1px] top-1/2 -translate-y-1/2 w-[2px] h-[34px] bg-white pointer-events-none z-10"></div>
                            {/* Concave curve pointing right */}
                            <div
                              className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-[34px] h-[34px] rounded-full border border-slate-200 group-focus-within:border-[#44b50c] pointer-events-none z-20 transition-colors"
                              style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                            ></div>
                          </div>
                        </div>

                        {/* Depart & Return */}
                        <div className="flex h-[60px] overflow-hidden rounded-2xl border border-slate-200 bg-white group focus-within:border-[#44b50c] transition-colors">
                          <div className="flex-1 px-4 py-1.5 border-r border-slate-200 flex justify-between items-center group-focus-within:border-[#44b50c]">
                            <div className="flex-1">
                              <div className="text-[13px] font-semibold text-slate-500">Depart</div>
                              <input
                                type="text"
                                value={departDate}
                                onChange={(e) => setDepartDate(e.target.value)}
                                placeholder="Add date"
                                className="w-full text-[16px] font-bold tracking-tight text-slate-900 outline-none bg-transparent truncate"
                              />
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                              <ChevronLeftIcon className="h-4 w-4 hover:text-slate-600 cursor-pointer" />
                              <ChevronRightIcon className="h-4 w-4 text-[#44b50c] cursor-pointer" />
                            </div>
                          </div>
                          <div className="flex-1 px-4 py-1.5 flex flex-col justify-center">
                            <div className="text-[13px] font-semibold text-slate-500">Return</div>
                            <input
                              type="text"
                              value={returnDate}
                              onChange={(e) => setReturnDate(e.target.value)}
                              placeholder="Add date"
                              className="w-full text-[16px] font-medium text-slate-900 outline-none bg-transparent truncate"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
                        <label className="flex items-center gap-2 text-[15px] text-slate-700 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-slate-300 text-[#44b50c] focus:ring-[#44b50c] accent-[#44b50c]"
                          />
                          Direct Only
                        </label>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                          <div className="flex flex-wrap items-center gap-8 text-[15.5px] text-[#2c2c2c] font-normal mr-2">
                            <button className="flex items-center gap-2.5 transition-colors hover:text-slate-900">
                              1 Adult
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]"><path d="M7 10l5 5 5-5z" /></svg>
                            </button>
                            <button className="flex items-center gap-2.5 transition-colors hover:text-slate-900">
                              Economy
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]"><path d="M7 10l5 5 5-5z" /></svg>
                            </button>
                            <button className="flex items-center gap-2.5 transition-colors hover:text-slate-900">
                              5 Payment Types
                              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#1a1a1a]"><path d="M7 10l5 5 5-5z" /></svg>
                            </button>
                          </div>
                          <button className="rounded-full bg-[#44b50c] px-10 py-4 text-[18px] font-bold text-white shadow-sm transition-colors hover:bg-[#3ca409]">
                            Search
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
              {activeTab === "hotels" && <HotelSearchForm />}
              {activeTab === "cars" && <CarRentalForm />}
            </div>

            {/* Umrah e-Visa / e-Visa / eSIM pill */}
            <div className="relative mt-[70px] flex w-full items-center justify-center">
              <div className="relative inline-flex items-center rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.10)]">
                <span className="absolute -top-[10px] left-6 rounded-[4px] bg-[#ff8c00] px-1.5 py-px text-[11px] font-bold text-white shadow-sm">
                  New
                </span>
                <button className="flex items-center gap-2 rounded-l-2xl px-5 py-3 transition-colors hover:bg-slate-50 sm:px-7">
                  <img src="/images/Umrah@3x_376857943.png" alt="Umrah" className="h-5 w-5 object-contain" />
                  <span className="text-[14px] font-medium text-slate-900">Umrah e-Visa</span>
                </button>

                <div className="h-8 w-px bg-slate-200" />

                <button className="flex items-center gap-2 px-5 py-3 transition-colors hover:bg-slate-50 sm:px-7">
                  <img src="/images/Visa_358279377.png" alt="Visa" className="h-5 w-5 object-contain" />
                  <span className="text-[14px] font-medium text-slate-900">e-Visa</span>
                </button>

                <div className="h-8 w-px bg-slate-200" />

                <button className="flex items-center gap-2 rounded-r-2xl px-5 py-3 transition-colors hover:bg-slate-50 sm:px-7">
                  <img src="/images/eSIM_358279346.png" alt="eSIM" className="h-5 w-5 object-contain" />
                  <span className="text-[14px] font-medium text-slate-900">eSIM</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
