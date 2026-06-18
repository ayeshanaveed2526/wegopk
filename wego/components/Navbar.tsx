"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="absolute top-0 w-full z-50">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center px-4 sm:h-[72px] sm:px-6 lg:px-8">
        
        {/* Left: Logo (White variant from bottom of sprite) */}
        <Link href="/" className="flex shrink-0 items-center">
          <div className="overflow-hidden h-7 w-[76px] sm:h-8 sm:w-[86px] relative">
            <img
              src="https://zen.wego.com/cdn-cgi/image/format=auto,quality=100,height=162,width=200/web/sprites/roxana-wego-logo.png"
              alt="Wego"
              className="absolute bottom-0 left-0 w-full h-auto"
            />
          </div>
        </Link>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-4 lg:gap-5">
          
          {/* WegoPro */}
          <Link href="#" className="hidden lg:flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#00c5ff]">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold leading-tight tracking-wide">WegoPro</span>
              <span className="text-[11px] font-medium text-white/90 leading-tight">for Business Travel</span>
            </div>
          </Link>

          {/* Divider */}
          <div className="hidden lg:block w-px h-6 bg-white/30 ml-2" />

          {/* Locale / Currency */}
          <div className="hidden md:flex items-center gap-3 text-white font-semibold text-[14px] ml-2 tracking-wide">
            <img src="https://flagcdn.com/w40/pk.png" alt="Pakistan" className="w-[20px] h-[14px] rounded-[2px] object-cover" />
            <span className="text-white/50 font-medium">|</span>
            <button className="hover:opacity-80 transition-opacity">EN</button>
            <span className="text-white/50 font-medium">|</span>
            <button className="hover:opacity-80 transition-opacity">PKR</button>
          </div>

          {/* Support / My Trips */}
          <div className="hidden md:flex items-center gap-6 text-white font-semibold text-[14px] ml-4 tracking-wide">
            <Link href="#" className="hover:opacity-80 transition-opacity">Support</Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">My Trips</Link>
          </div>

          {/* Login Button */}
          <button className="ml-2 px-6 py-2 rounded-full border border-white text-white font-semibold text-[14px] tracking-wide hover:bg-white/10 transition-colors">
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        
      </div>
    </header>
  );
}
