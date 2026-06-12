"use client";

import React from "react";

const partners = [
  {
    name: "FlyJinnah",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/airlines_rectangular/9P.png",
  },
  {
    name: "AirSial",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/airlines_rectangular/PF.png",
  },
  {
    name: "Pakistan International Airlines",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/airlines_rectangular/PK.png",
  },
  {
    name: "airblue",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/airlines_rectangular/PA.png",
  },
  {
    name: "sastaticket.pk",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/providers/sastaticket_pk.png",
    fallback: <span style={{ color: "#2E57A6", fontWeight: 700, fontSize: "14px" }}>sastaticket<span style={{ fontSize: "11px", color: "#666" }}>.pk</span></span>
  },
  {
    name: "Sky-tours",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/providers/sky_tours.png",
    fallback: <span style={{ color: "#0090CC", fontWeight: 900, fontSize: "18px", fontStyle: "italic" }}>Sky<span style={{ color: "#E1173F" }}>-tours</span></span>
  },
  {
    name: "OneTravel",
    url: "https://assets.wego.com/image/upload/c_fit,w_100,h_30/v20230801/flights/providers/onetravel.png",
    fallback: <span style={{ color: "#FF690F", fontWeight: 800, fontSize: "16px" }}>OneTravel</span>
  },
];

const features = [
  {
    image: "/images/icon-flight.png",
    alt: "Best Deals",
    title: "The best hotel & flight deals in the universe",
  },
  {
    image: "/images/icon-pay.png",
    alt: "Flexible Payment",
    title: "Flexible ways to pay",
  },
  {
    image: "/images/mascot-support.png",
    alt: "24/7 Support",
    title: "Support that never sleeps, we're with you 24/7",
  },
];

export default function TravelWebsites() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "0 0 64px", textAlign: "center" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* ── HEADING ── */}
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#1D1D1D", marginBottom: "32px", letterSpacing: "-0.01em" }}>
          700+ travel websites. One simple search.
        </h2>

        {/* ── LOGOS ROW ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "36px", flexWrap: "wrap", opacity: 0.9, marginBottom: "80px" }}>
          {partners.map((partner) => (
            <div key={partner.name} style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "60px", height: "30px" }}>
              <img
                src={partner.url}
                alt={partner.name}
                style={{ width: "auto", height: "100%", objectFit: "contain", filter: "grayscale(0%)" }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                  }
                }}
              />
              {/* Fallback element if image fails to load */}
              <div style={{ display: "none" }}>
                {partner.fallback || (
                  <span style={{ fontWeight: 700, fontSize: "14px", color: "#1D1D1D" }}>
                    {partner.name}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* "...and more!" text */}
          <div style={{ fontSize: "14px", color: "#1D1D1D", fontWeight: 500 }}>
            ...and more!
          </div>
        </div>

        {/* ── MASCOTS ROW ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div style={{ width: "192px", height: "192px", display: "flex", alignItems: "flex-end", justifySelf: "center", marginBottom: "16px" }} className="mx-auto">
                <img
                  src={feat.image}
                  alt={feat.alt}
                  style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", transition: "transform 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
              <p style={{ color: "#1D1D1D", fontWeight: 700, fontSize: "16px", lineHeight: 1.3, maxWidth: "220px", margin: "0 auto" }}>
                {feat.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
