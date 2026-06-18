"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b1727] py-3 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className="w-24 h-8 bg-no-repeat bg-contain"
            style={{
              backgroundImage: 'url("https://zen.wego.com/cdn-cgi/image/format=auto,quality=100,height=162,width=200/web/sprites/roxana-wego-logo.png")',
              backgroundPosition: '0 0'
            }}
          />
        </Link>

        {/* Right Nav */}
        <div className="flex items-center gap-6 font-semibold text-[13px] text-white">
          <div className="hidden md:flex items-center gap-5">
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex flex-col text-left leading-tight">
                <span className="font-bold">WegoPro</span>
                <span className="font-normal text-[11px] opacity-80">for Business Travel</span>
              </div>
            </button>
            
            <div className="flex items-center gap-2">
              <img src="https://assets.wego.com/image/upload/h_32,c_fit,f_auto,fl_lossy,q_auto:low/v1643278448/web/country_flags/country-flags-v1/pk.png" alt="PK" className="w-5 h-5 rounded-full object-cover" />
              <span>|</span>
              <span>EN</span>
              <span>|</span>
              <span>PKR</span>
            </div>

            <Link href="#" className="hover:opacity-80 transition-opacity">Support</Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">My Trips</Link>
            
            <button className="border border-white rounded-full px-5 py-1.5 hover:bg-white hover:text-[#0b1727] transition-colors font-bold">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
