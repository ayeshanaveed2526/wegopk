"use client";

import React from "react";

// Styled text representations of real travel booking platforms
const travelSites = [
  { name: "Booking", dot: ".com", color: "#003580", weight: 900, size: 17 },
  { name: "Expedia", color: "#00355F", weight: 700, size: 16 },
  { name: "trip", suffix: ".com", color: "#00AF87", weight: 900, size: 16, suffixColor: "#FF6B35" },
  { name: "Kayak", color: "#FF690F", weight: 900, size: 17 },
  { name: "skyscanner", color: "#0770E3", weight: 700, size: 14 },
  { name: "agoda", color: "#E1173F", weight: 900, size: 15 },
  { name: "hotels", dot: ".com", color: "#D32F2F", weight: 700, size: 15 },
  { name: "Airbnb", color: "#FF385C", weight: 700, size: 16 },
  { name: "Priceline", color: "#003087", weight: 700, size: 14 },
  { name: "Orbitz", color: "#E91E8C", weight: 800, size: 16 },
  { name: "trivago", color: "#E8590C", weight: 700, size: 15 },
  { name: "Wotif", color: "#FF6600", weight: 900, size: 16 },
];

const doubled = [...travelSites, ...travelSites];

function SiteLogo({ site }: { site: typeof travelSites[0] }) {
  return (
    <div className="flex items-center flex-shrink-0 select-none" style={{ padding: "0 28px" }}>
      <span
        style={{
          color: site.color,
          fontWeight: site.weight,
          fontSize: `${site.size}px`,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
          fontFamily: "Inter, sans-serif",
          opacity: 0.82,
        }}
      >
        {site.name}
        {site.dot && <span style={{ color: site.color }}>{site.dot}</span>}
        {site.suffix && <span style={{ color: (site as any).suffixColor || site.color }}>{site.suffix}</span>}
      </span>
    </div>
  );
}

export default function TravelWebsites() {
  return (
    <section style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #F4F4F4", borderBottom: "1px solid #F4F4F4", overflow: "hidden", padding: "28px 0" }}>

      {/* Heading */}
      <div className="text-center" style={{ marginBottom: "22px" }}>
        <p style={{ fontSize: "18px", fontWeight: 800, color: "#1D1D1D", letterSpacing: "-0.01em" }}>
          Compare <span style={{ color: "#44B50C" }}>700+</span> travel websites. One simple search.
        </p>
        <p style={{ fontSize: "13px", color: "#767676", fontWeight: 400, marginTop: "4px" }}>
          We search all major airlines and booking sites so you don&apos;t have to.
        </p>
      </div>

      {/* Logos marquee */}
      <div
        className="animate-marquee-container"
        style={{ position: "relative", overflow: "hidden" }}
        aria-label="Partner travel booking sites"
      >
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full z-10"
          style={{ width: "80px", background: "linear-gradient(90deg, #FAFAFA 0%, transparent 100%)" }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full z-10"
          style={{ width: "80px", background: "linear-gradient(270deg, #FAFAFA 0%, transparent 100%)" }}
        />

        <div className="animate-marquee flex items-center" style={{ width: "max-content" }}>
          {doubled.map((site, i) => (
            <SiteLogo key={`${site.name}-${i}`} site={site} />
          ))}
        </div>
      </div>
    </section>
  );
}
