"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 bg-white shadow-md" : "absolute top-0 bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center px-4 sm:h-[72px] sm:px-6 lg:px-8 relative">

        {/* Left: Logo */}
        <Link href="/" className="flex shrink-0 items-center relative z-10">
          <div className="overflow-hidden h-7 w-[76px] sm:h-8 sm:w-[86px] relative">
            <img
              src="https://zen.wego.com/cdn-cgi/image/format=auto,quality=100,height=162,width=200/web/sprites/roxana-wego-logo.png"
              alt="Wego"
              className={`absolute left-0 w-full h-auto transition-transform duration-300 ${isScrolled ? "top-0" : "bottom-0"
                }`}
            />
          </div>
        </Link>

        {/* Center: Links (Only visible on scroll) */}
        <div className={`hidden lg:flex items-center gap-8 ml-8 h-full transition-opacity duration-300 ${isScrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}>
          <Link href="#" className="flex items-center h-full text-[15px] font-bold text-slate-700 hover:text-[#44b50c] transition-colors border-b-[3px] border-transparent pt-[3px]">
            WegoPro
          </Link>
          <Link href="#" className="flex items-center h-full text-[15px] font-bold text-[#44b50c] border-b-[3px] border-[#44b50c] pt-[3px]">
            Flights
          </Link>
          <Link href="#" className="flex items-center h-full text-[15px] font-bold text-slate-700 hover:text-[#44b50c] transition-colors border-b-[3px] border-transparent pt-[3px]">
            Hotels
          </Link>
          <Link href="#" className="flex items-center h-full text-[15px] font-bold text-slate-700 hover:text-[#44b50c] transition-colors border-b-[3px] border-transparent pt-[3px]">
            Promo Code
          </Link>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-4 lg:gap-5 relative z-10">
          {/* WegoPro */}
          <Link href="#" className={`hidden items-center gap-2.5 hover:opacity-80 transition-opacity ${isScrolled ? "opacity-0 absolute pointer-events-none invisible" : "lg:flex relative"}`}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="12.5" y1="12" x2="8" y2="19" stroke="#00c5ff" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="12.5" y1="12" x2="8" y2="5" stroke="#00c5ff" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="5" y1="12" x2="20" y2="12" stroke="#0077ff" strokeWidth="4.5" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <span className={`text-[15px] font-bold leading-tight tracking-wide transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}>WegoPro</span>
              <span className={`text-[11px] font-medium leading-tight transition-colors ${isScrolled ? "text-slate-500" : "text-white/90"}`}>for Business Travel</span>
            </div>
          </Link>

          {/* Divider */}
          <div className={`hidden w-px h-6 ml-2 transition-colors ${isScrolled ? "hidden opacity-0 pointer-events-none" : "lg:block bg-white/30"}`} />

          {/* Locale / Currency */}
          <div className="hidden md:flex items-center gap-3 font-semibold text-[14px] ml-2 tracking-wide">
            <img src="https://flagcdn.com/w40/pk.png" alt="Pakistan" className="w-[20px] h-[14px] rounded-[2px] object-cover shadow-sm" />
            <span className={`font-medium transition-colors ${isScrolled ? "text-slate-300" : "text-white/50"}`}>|</span>
            <button className={`hover:opacity-80 transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}>EN</button>
            <span className={`font-medium transition-colors ${isScrolled ? "text-slate-300" : "text-white/50"}`}>|</span>
            <button className={`hover:opacity-80 transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}>PKR</button>
          </div>

          {/* Support / My Trips */}
          <div className={`hidden md:flex items-center gap-6 font-semibold text-[14px] ml-4 tracking-wide transition-colors ${isScrolled ? "text-slate-800" : "text-white"}`}>
            <Link href="#" className="hover:opacity-80 transition-opacity">Support</Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">My Trips</Link>
          </div>

          {/* Login Button */}
          <button className={`ml-2 px-6 py-2 rounded-full border font-semibold text-[14px] tracking-wide transition-colors ${isScrolled
            ? "border-slate-300 text-slate-800 hover:bg-slate-50"
            : "border-white text-white hover:bg-white/10"
            }`}>
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className={`md:hidden ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

      </div>
    </header>
  );
}
