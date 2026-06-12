"use client";

import React, { useState } from "react";

export default function CarRentalForm() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [sameLocation, setSameLocation] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

      {/* Same location checkbox */}
      <label
        className="flex items-center gap-2 cursor-pointer w-fit"
        style={{ fontSize: "14px", fontWeight: 600, color: "#1D1D1D" }}
      >
        <div
          onClick={() => setSameLocation(!sameLocation)}
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "4px",
            border: sameLocation ? "2px solid #44B50C" : "2px solid #DFDFDF",
            backgroundColor: sameLocation ? "#44B50C" : "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexShrink: 0,
            transition: "all 0.15s",
          }}
        >
          {sameLocation && (
            <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
              <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        Return car to same location
      </label>

      {/* Pickup / Dropoff */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #DFDFDF",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #DFDFDF" }}>
          <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
            Pick-up location
          </label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="City or airport"
            style={{ width: "100%", fontSize: "15px", fontWeight: 700, color: "#1D1D1D", background: "transparent", border: "none", outline: "none" }}
          />
        </div>
        {!sameLocation && (
          <div style={{ padding: "12px 16px" }}>
            <label style={{ display: "block", fontSize: "10px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
              Drop-off location
            </label>
            <input
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="City or airport"
              style={{ width: "100%", fontSize: "15px", fontWeight: 700, color: "#1D1D1D", background: "transparent", border: "none", outline: "none" }}
            />
          </div>
        )}
      </div>

      {/* Dates row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "1px solid #DFDFDF",
          borderRadius: "10px",
          overflow: "hidden",
          gap: 0,
        }}
      >
        <div style={{ padding: "12px 16px", borderRight: "1px solid #DFDFDF" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Pick-up date</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#9CA3AF" }}>Select date</div>
        </div>
        <div style={{ padding: "12px 16px" }}>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>Drop-off date</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#9CA3AF" }}>Select date</div>
        </div>
      </div>

      {/* Search */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          id="car-search-btn"
          style={{
            backgroundColor: "#44B50C",
            color: "#fff",
            fontWeight: 700,
            fontSize: "15px",
            padding: "10px 36px",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "background 0.15s",
            boxShadow: "0 2px 8px rgba(68,181,12,0.25)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#188920")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#44B50C")}
        >
          Search
        </button>
      </div>
    </div>
  );
}
