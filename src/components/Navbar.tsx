"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full transition-shadow duration-200"
      style={{
        backgroundColor: "#0090CC",
        boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.18)" : "none",
        height: "64px",
      }}
    >
      <div className="h-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-[5px] flex-shrink-0 group" aria-label="Wego home">
          {/* "wego" italic text */}
          <span
            className="text-white font-black text-[26px] leading-none select-none"
            style={{ fontStyle: "italic", letterSpacing: "-0.04em", fontFamily: "Inter, sans-serif" }}
          >
            wego
          </span>
          {/* Green plane box */}
          <div
            className="flex items-center justify-center rounded-[6px] flex-shrink-0"
            style={{ backgroundColor: "#44B50C", width: "24px", height: "24px" }}
          >
            <svg viewBox="0 0 24 24" fill="white" width="13" height="13">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
            </svg>
          </div>
        </Link>

        {/* ── DESKTOP RIGHT NAV ── */}
        <nav
          className="hidden md:flex items-center text-white"
          style={{ gap: "20px", fontSize: "14px", fontWeight: 600 }}
        >
          {/* WegoPro */}
          <Link
            href="https://www.wegopro.com/en/wego-for-business?utm_source=wego&utm_medium=web&utm_campaign=top-nav-bar"
            target="_blank"
            className="flex items-center gap-[8px] hover:opacity-80 transition-opacity"
          >
            {/* Crystal icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#7DD8F8" strokeWidth="1" opacity="0.5" />
              <polygon
                points="14,4 17,12 25,12 18.5,17 21,25 14,20 7,25 9.5,17 3,12 11,12"
                fill="#7DD8F8"
                opacity="0.85"
              />
            </svg>
            <div className="leading-none">
              <div style={{ fontSize: "14px", fontWeight: 900, color: "#fff", lineHeight: 1 }}>WegoPro</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", fontWeight: 500, lineHeight: 1.3, marginTop: "2px" }}>
                for Business Travel
              </div>
            </div>
          </Link>

          {/* Divider */}
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.3)" }} />

          {/* Flag + EN + PKR */}
          <button
            className="flex items-center hover:opacity-80 transition-opacity"
            style={{ gap: "5px" }}
            aria-label="Change language and currency"
          >
            <span style={{ fontSize: "18px", lineHeight: 1 }}>🇵🇰</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>|</span>
            <span style={{ fontSize: "14px", fontWeight: 700 }}>EN</span>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>|</span>
            <span style={{ fontSize: "14px", fontWeight: 700 }}>PKR</span>
          </button>

          {/* Support */}
          <Link
            href="https://support.wego.com/"
            target="_blank"
            className="hover:opacity-80 transition-opacity"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            Support
          </Link>

          {/* My Trips */}
          <Link
            href="#"
            className="hover:opacity-80 transition-opacity"
            style={{ fontSize: "14px", fontWeight: 600 }}
          >
            My Trips
          </Link>

          {/* Login */}
          <Link
            href="#"
            className="hover:bg-white/10 transition-colors"
            style={{
              border: "1.5px solid rgba(255,255,255,0.85)",
              borderRadius: "9999px",
              padding: "6px 20px",
              fontSize: "14px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Login
          </Link>
        </nav>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/20 py-4 px-4 space-y-3 text-white text-sm font-semibold"
          style={{ backgroundColor: "#0090CC" }}
        >
          <Link href="https://www.wegopro.com" target="_blank" className="block hover:opacity-80">
            WegoPro for Business
          </Link>
          <div className="flex items-center gap-2">
            <span>🇵🇰</span><span>EN</span><span className="opacity-40">|</span><span>PKR</span>
          </div>
          <Link href="https://support.wego.com/" target="_blank" className="block hover:opacity-80">Support</Link>
          <Link href="#" className="block hover:opacity-80">My Trips</Link>
          <Link
            href="#"
            className="inline-block border border-white rounded-full px-5 py-1.5 text-sm font-bold hover:bg-white/10 transition-colors"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
