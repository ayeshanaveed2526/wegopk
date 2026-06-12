"use client";

import React, { useState } from "react";

type TabType = "flights" | "hotels";

const flightDeals = [
  { from: "Karachi", fromCode: "KHI", to: "Dubai", toCode: "DXB", price: "PKR 48,500", duration: "2h 15m", airline: "flydubai", stops: "Direct", date: "Jun 20", flag: "🇦🇪" },
  { from: "Lahore", fromCode: "LHE", to: "Istanbul", toCode: "IST", price: "PKR 98,200", duration: "7h 45m", airline: "Turkish Airlines", stops: "Direct", date: "Jun 22", flag: "🇹🇷" },
  { from: "Karachi", fromCode: "KHI", to: "London", toCode: "LHR", price: "PKR 142,000", duration: "9h 30m", airline: "PIA", stops: "Direct", date: "Jun 25", flag: "🇬🇧" },
  { from: "Islamabad", fromCode: "ISB", to: "Bangkok", toCode: "BKK", price: "PKR 62,300", duration: "6h 10m", airline: "Thai Airways", stops: "Direct", date: "Jun 28", flag: "🇹🇭" },
  { from: "Karachi", fromCode: "KHI", to: "Jeddah", toCode: "JED", price: "PKR 54,900", duration: "3h 45m", airline: "Saudia", stops: "Direct", date: "Jul 1", flag: "🇸🇦" },
  { from: "Lahore", fromCode: "LHE", to: "Kuala Lumpur", toCode: "KUL", price: "PKR 72,800", duration: "5h 55m", airline: "AirAsia", stops: "Direct", date: "Jul 5", flag: "🇲🇾" },
];

const hotelDeals = [
  { name: "Atlantis The Palm", city: "Dubai", country: "UAE", stars: 5, price: "PKR 42,000", per: "/night", rating: 4.8, reviews: "12.4K", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80", badge: "Best Seller" },
  { name: "Shangri-La Bosphorus", city: "Istanbul", country: "Turkey", stars: 5, price: "PKR 28,500", per: "/night", rating: 4.7, reviews: "8.2K", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=400&q=80", badge: "Popular" },
  { name: "The Savoy", city: "London", country: "UK", stars: 5, price: "PKR 65,000", per: "/night", rating: 4.9, reviews: "6.1K", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80", badge: "Luxury" },
  { name: "Rosewood Bangkok", city: "Bangkok", country: "Thailand", stars: 5, price: "PKR 19,800", per: "/night", rating: 4.8, reviews: "5.3K", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80", badge: "Top Rated" },
  { name: "Hilton Jeddah", city: "Jeddah", country: "Saudi Arabia", stars: 4, price: "PKR 22,400", per: "/night", rating: 4.5, reviews: "9.7K", image: "https://images.unsplash.com/photo-1568322445389-f64ac2515099?auto=format&fit=crop&w=400&q=80", badge: "Great Value" },
  { name: "Mandarin Oriental", city: "KL", country: "Malaysia", stars: 5, price: "PKR 17,600", per: "/night", rating: 4.7, reviews: "7.8K", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=400&q=80", badge: "Award Winner" },
];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState<TabType>("flights");

  return (
    <section style={{ backgroundColor: "#fff", padding: "52px 0 60px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <h2 style={{ fontSize: "26px", fontWeight: 900, color: "#1D1D1D", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Explore popular flights &amp; hotels
            </h2>
            <p style={{ fontSize: "14px", color: "#767676", marginTop: "6px" }}>
              Best prices found by travellers from Pakistan this week
            </p>
          </div>

          {/* Tab switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #DFDFDF",
              borderRadius: "9999px",
              padding: "4px",
              gap: "2px",
              backgroundColor: "#FAFAFA",
            }}
          >
            {(["flights", "hotels"] as TabType[]).map((t) => (
              <button
                key={t}
                id={`explore-tab-${t}`}
                onClick={() => setActiveTab(t)}
                style={{
                  padding: "7px 20px",
                  borderRadius: "9999px",
                  fontSize: "13px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  backgroundColor: activeTab === t ? "#44B50C" : "transparent",
                  color: activeTab === t ? "#fff" : "#767676",
                  outline: "none",
                }}
              >
                {t === "flights" ? "✈ Flights" : "🏨 Hotels"}
              </button>
            ))}
          </div>
        </div>

        {/* ── FLIGHT CARDS ── */}
        {activeTab === "flights" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "14px" }}>
            {flightDeals.map((deal, i) => (
              <div
                key={i}
                className="group"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #DFDFDF",
                  borderRadius: "12px",
                  padding: "16px 18px",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {/* Route */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: 900, color: "#1D1D1D", letterSpacing: "-0.02em" }}>
                        {deal.fromCode}
                      </div>
                      <div style={{ fontSize: "11px", color: "#767676", fontWeight: 500 }}>{deal.from}</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", flex: 1 }}>
                      <svg viewBox="0 0 24 24" fill="#DFDFDF" width="18" height="18">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" />
                      </svg>
                      <div style={{ fontSize: "10px", color: "#BDBDBD", fontWeight: 600 }}>{deal.duration}</div>
                      <div
                        style={{
                          height: "1px",
                          width: "100%",
                          backgroundImage: "linear-gradient(90deg, #DFDFDF 50%, transparent 50%)",
                          backgroundSize: "8px 1px",
                        }}
                      />
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "18px", fontWeight: 900, color: "#1D1D1D", letterSpacing: "-0.02em" }}>
                        {deal.toCode}
                      </div>
                      <div style={{ fontSize: "11px", color: "#767676", fontWeight: 500 }}>{deal.to} {deal.flag}</div>
                    </div>
                  </div>
                </div>

                {/* Details + price */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #F4F4F4", paddingTop: "12px" }}>
                  <div>
                    <div style={{ fontSize: "12px", color: "#767676", fontWeight: 500 }}>{deal.airline}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "3px" }}>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#188920",
                          backgroundColor: "#E7FDDC",
                          padding: "2px 7px",
                          borderRadius: "9999px",
                        }}
                      >
                        {deal.stops}
                      </span>
                      <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{deal.date}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "9px", color: "#9CA3AF", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      from
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 900, color: "#44B50C", letterSpacing: "-0.01em" }}>
                      {deal.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── HOTEL CARDS ── */}
        {activeTab === "hotels" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px" }}>
            {hotelDeals.map((hotel, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #DFDFDF",
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.11)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "#44B50C",
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: 800,
                      padding: "3px 9px",
                      borderRadius: "9999px",
                    }}
                  >
                    {hotel.badge}
                  </span>
                </div>

                {/* Details */}
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px" }}>
                    <div>
                      <h3 style={{ fontSize: "14px", fontWeight: 800, color: "#1D1D1D", lineHeight: 1.3, marginBottom: "3px" }}>
                        {hotel.name}
                      </h3>
                      <p style={{ fontSize: "12px", color: "#767676" }}>
                        {hotel.city}, {hotel.country}
                      </p>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: "10px", color: "#9CA3AF", letterSpacing: "0.03em" }}>from</div>
                      <div style={{ fontSize: "16px", fontWeight: 900, color: "#44B50C" }}>{hotel.price}</div>
                      <div style={{ fontSize: "10px", color: "#9CA3AF" }}>{hotel.per}</div>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
                    <span
                      style={{
                        backgroundColor: "#44B50C",
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "2px 6px",
                        borderRadius: "4px",
                      }}
                    >
                      {hotel.rating}
                    </span>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#1D1D1D" }}>Excellent</span>
                    <span style={{ fontSize: "11px", color: "#9CA3AF" }}>({hotel.reviews} reviews)</span>
                    <span style={{ marginLeft: "auto", fontSize: "12px" }}>{"★".repeat(hotel.stars)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
          <a
            href={activeTab === "flights" ? "https://www.wego.pk/flights" : "https://www.wego.pk/hotels"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1.5px solid #44B50C",
              color: "#44B50C",
              fontSize: "14px",
              fontWeight: 700,
              padding: "10px 32px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "all 0.15s",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#44B50C";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#44B50C";
            }}
          >
            View all {activeTab}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width="14" height="14">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
