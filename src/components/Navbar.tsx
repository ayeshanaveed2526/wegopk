"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ backgroundColor: "#0090CC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── WEGO LOGO ── */}
          <Link href="/" className="flex items-center space-x-1.5 flex-shrink-0">
            {/* "wego" italic text */}
            <span
              className="text-white font-black text-2xl leading-none"
              style={{ fontStyle: "italic", letterSpacing: "-0.03em" }}
            >
              wego
            </span>
            {/* Green plane box */}
            <div
              className="flex items-center justify-center rounded-md ml-0.5"
              style={{ backgroundColor: "#44B50C", width: 26, height: 26 }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-3.5 h-3.5"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z"/>
              </svg>
            </div>
          </Link>

          {/* ── DESKTOP RIGHT NAV ── */}
          <div className="hidden md:flex items-center space-x-5 text-white text-sm font-semibold">

            {/* WegoPro */}
            <Link
              href="https://www.wegopro.com"
              target="_blank"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              {/* Crystal/Star icon */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#7DD8F8" strokeWidth="1.5" opacity="0.6"/>
                <polygon points="20,6 23,17 35,17 25,24 28,35 20,28 12,35 15,24 5,17 17,17" fill="#7DD8F8" opacity="0.9"/>
              </svg>
              <div className="leading-tight">
                <div className="font-black text-white text-sm leading-none">WegoPro</div>
                <div className="text-[10px] text-blue-100 font-medium leading-tight mt-0.5">for Business Travel</div>
              </div>
            </Link>

            {/* Vertical divider */}
            <div className="h-5 w-px bg-white/30 flex-shrink-0"/>

            {/* Pakistan flag + EN + PKR */}
            <button className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity">
              <span className="text-lg leading-none">🇵🇰</span>
              <span className="text-white/40 text-sm mx-0.5">|</span>
              <span className="font-bold text-sm">EN</span>
              <span className="text-white/40 text-sm mx-0.5">|</span>
              <span className="font-bold text-sm">PKR</span>
            </button>

            {/* Support */}
            <Link href="https://support.wego.com/" target="_blank" className="font-bold text-sm hover:opacity-80 transition-opacity">
              Support
            </Link>

            {/* My Trips */}
            <Link href="#" className="font-bold text-sm hover:opacity-80 transition-opacity">
              My Trips
            </Link>

            {/* Login */}
            <Link
              href="#"
              className="border border-white rounded-full px-5 py-1.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
            >
              Login
            </Link>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/20 py-4 space-y-3 text-white text-sm font-semibold">
            <Link href="https://www.wegopro.com" className="block hover:opacity-80">WegoPro for Business</Link>
            <div className="flex items-center space-x-2">
              <span>🇵🇰</span><span>EN</span><span>|</span><span>PKR</span>
            </div>
            <Link href="https://support.wego.com/" className="block hover:opacity-80">Support</Link>
            <Link href="#" className="block hover:opacity-80">My Trips</Link>
            <Link href="#" className="block border border-white rounded-full px-4 py-1.5 w-max hover:bg-white/10">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
}
