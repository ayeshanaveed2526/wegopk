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
    <section style={{ backgroundColor: "#ffffff", padding: "64px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "60px", flexWrap: "wrap" }}>

          {/* ── LEFT: Phone Mockup ── */}
          <div style={{ display: "flex", justifyContent: "center", flexShrink: 0 }}>
            <Image
              src="/images/app-mockup.png"
              alt="Wego App on iPhone"
              width={260}
              height={420}
              style={{ objectFit: "contain", filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.15))" }}
              priority={false}
            />
          </div>

          {/* ── RIGHT: Text + Download ── */}
          <div style={{ maxWidth: "480px", flex: 1 }}>
            <h2 style={{ fontSize: "30px", fontWeight: 900, color: "#1D1D1D", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "24px" }}>
              Globally top-rated and MENA&apos;s #1 travel app, with{" "}
              <span style={{ color: "#44B50C" }}>83M+ downloads</span>
            </h2>

            {/* Bullet features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {features.map((feat) => (
                <div key={feat} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "#44B50C", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span style={{ color: "#1D1D1D", fontWeight: 600, fontSize: "15px" }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* ── QR + Store Badges ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
              {/* QR Code */}
              <div style={{ border: "1px solid #DFDFDF", borderRadius: "12px", padding: "8px", flexShrink: 0 }}>
                <Image
                  src="/images/qr-code.png"
                  alt="Scan QR code to download Wego app"
                  width={88}
                  height={88}
                  style={{ borderRadius: "8px" }}
                />
              </div>

              {/* Store Badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Apple App Store */}
                <Link
                  href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: "10px 16px",
                    textDecoration: "none",
                    minWidth: "180px",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D1D1D")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
                >
                  <Image src="/images/badge-appstore.png" alt="App Store" width={22} height={22} />
                  <div style={{ lineHeight: 1.1 }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>Download on the</div>
                    <div style={{ fontSize: "14px", fontWeight: 700 }}>App Store</div>
                  </div>
                  <div style={{ marginLeft: "auto", textAlign: "right", lineHeight: 1.1 }}>
                    <div style={{ fontSize: "12px", fontWeight: 900 }}>4.7 ★</div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)" }}>230K+ reviews</div>
                  </div>
                </Link>

                {/* Google Play Store */}
                <Link
                  href="https://wegotravel.onelink.me/pGV9/c04fbc77"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: "10px 16px",
                    textDecoration: "none",
                    minWidth: "180px",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1D1D1D")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
                >
                  <Image src="/images/badge-playstore.png" alt="Google Play" width={22} height={22} />
                  <div style={{ lineHeight: 1.1 }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>Get it on</div>
                    <div style={{ fontSize: "14px", fontWeight: 700 }}>Google Play</div>
                  </div>
                  <div style={{ marginLeft: "auto", textAlign: "right", lineHeight: 1.1 }}>
                    <div style={{ fontSize: "12px", fontWeight: 900 }}>4.7 ★</div>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)" }}>187K+ reviews</div>
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
