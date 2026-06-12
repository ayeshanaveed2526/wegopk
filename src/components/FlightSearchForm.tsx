"use client";

import React, { useState } from "react";

type TripType = "one-way" | "round-trip" | "multi-city";

const TRIP_TYPES: { id: TripType; label: string }[] = [
  { id: "one-way", label: "One-way" },
  { id: "round-trip", label: "Round-trip" },
  { id: "multi-city", label: "Multi-city" },
];

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<TripType>("round-trip");
  const [origin, setOrigin] = useState("Karachi (KHI)");
  const [destination, setDestination] = useState("");
  const [depart, setDepart] = useState("");
  const [ret, setRet] = useState("");
  const [directOnly, setDirectOnly] = useState(false);

  const handleSwap = () => {
    const tmp = origin;
    setOrigin(destination);
    setDestination(tmp);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

      {/* ── TRIP TYPE PILLS ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        {TRIP_TYPES.map((t) => {
          const active = tripType === t.id;
          return (
            <button
              key={t.id}
              id={`trip-type-${t.id}`}
              onClick={() => setTripType(t.id)}
              style={{
                padding: "6px 14px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 600,
                border: active ? "1.5px solid #44B50C" : "1.5px solid #DFDFDF",
                backgroundColor: active ? "#E7FDDC" : "transparent",
                color: active ? "#44B50C" : "#1D1D1D",
                cursor: "pointer",
                transition: "all 0.15s",
                outline: "none",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* ── FROM / TO / DATES ROW ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "1.5px solid #DFDFDF",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* FROM */}
        <div
          style={{
            flex: "1 1 180px",
            padding: "12px 16px",
            borderRight: "1px solid #DFDFDF",
            position: "relative",
            backgroundColor: "#fff",
            minWidth: "0",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "10px",
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "3px",
            }}
          >
            From
          </label>
          <input
            id="flight-from"
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="City or airport"
            style={{
              width: "100%",
              fontSize: "15px",
              fontWeight: 700,
              color: "#1D1D1D",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          />
          {/* Swap button */}
          <button
            onClick={handleSwap}
            aria-label="Swap origin and destination"
            style={{
              position: "absolute",
              top: "50%",
              right: "-16px",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#fff",
              border: "1.5px solid #DFDFDF",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#44B50C")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#DFDFDF")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#44B50C" strokeWidth={2.5} width="13" height="13">
              <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* TO */}
        <div
          style={{
            flex: "1 1 180px",
            padding: "12px 16px 12px 28px",
            borderRight: "1px solid #DFDFDF",
            backgroundColor: "#fff",
            minWidth: "0",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "10px",
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "3px",
            }}
          >
            To
          </label>
          <input
            id="flight-to"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="City or airport"
            style={{
              width: "100%",
              fontSize: "15px",
              fontWeight: 700,
              color: "#1D1D1D",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          />
        </div>

        {/* DEPART */}
        <div
          style={{
            flex: "1 1 130px",
            padding: "12px 16px",
            borderRight: "1px solid #DFDFDF",
            backgroundColor: "#fff",
            minWidth: "0",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "10px",
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "3px",
            }}
          >
            Depart
          </label>
          <input
            id="flight-depart"
            type="text"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            placeholder="Select date"
            style={{
              width: "100%",
              fontSize: "15px",
              fontWeight: 700,
              color: depart ? "#1D1D1D" : "#BDBDBD",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          />
        </div>

        {/* RETURN */}
        <div
          style={{
            flex: "1 1 130px",
            padding: "12px 16px",
            backgroundColor: "#fff",
            minWidth: "0",
            opacity: tripType === "one-way" ? 0.4 : 1,
            transition: "opacity 0.15s",
          }}
        >
          <label
            style={{
              display: "block",
              fontSize: "10px",
              fontWeight: 700,
              color: "#9CA3AF",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "3px",
            }}
          >
            Return
          </label>
          <input
            id="flight-return"
            type="text"
            value={ret}
            onChange={(e) => setRet(e.target.value)}
            placeholder={tripType === "one-way" ? "—" : "Select date"}
            disabled={tripType === "one-way"}
            style={{
              width: "100%",
              fontSize: "15px",
              fontWeight: 700,
              color: ret ? "#1D1D1D" : "#BDBDBD",
              background: "transparent",
              border: "none",
              outline: "none",
              cursor: tripType === "one-way" ? "not-allowed" : "text",
            }}
          />
        </div>
      </div>

      {/* ── BOTTOM OPTIONS ROW ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Direct only */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            userSelect: "none",
            fontSize: "13px",
            fontWeight: 600,
            color: "#1D1D1D",
          }}
        >
          <div
            onClick={() => setDirectOnly(!directOnly)}
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "4px",
              border: directOnly ? "2px solid #44B50C" : "2px solid #DFDFDF",
              backgroundColor: directOnly ? "#44B50C" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: "all 0.15s",
            }}
          >
            {directOnly && (
              <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          Direct Only
        </label>

        {/* Right: Dropdowns + Search */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {/* Passengers */}
          <button
            id="flight-passengers"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "1.5px solid #DFDFDF",
              borderRadius: "9999px",
              padding: "7px 14px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#1D1D1D",
              backgroundColor: "#fff",
              cursor: "pointer",
              outline: "none",
              transition: "border-color 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#BDBDBD")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#DFDFDF")}
          >
            1 Adult
            <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} width="14" height="14">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cabin class */}
          <button
            id="flight-cabin"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "1.5px solid #DFDFDF",
              borderRadius: "9999px",
              padding: "7px 14px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#1D1D1D",
              backgroundColor: "#fff",
              cursor: "pointer",
              outline: "none",
              transition: "border-color 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#BDBDBD")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#DFDFDF")}
          >
            Economy
            <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} width="14" height="14">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Payment types */}
          <button
            id="flight-payment"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              border: "1.5px solid #DFDFDF",
              borderRadius: "9999px",
              padding: "7px 14px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#1D1D1D",
              backgroundColor: "#fff",
              cursor: "pointer",
              outline: "none",
              transition: "border-color 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#BDBDBD")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#DFDFDF")}
          >
            0 Payment Types
            <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} width="14" height="14">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Search button */}
          <button
            id="flight-search-btn"
            style={{
              backgroundColor: "#44B50C",
              color: "#fff",
              fontWeight: 700,
              fontSize: "14px",
              padding: "9px 28px",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(68,181,12,0.30)",
              transition: "background 0.15s, box-shadow 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#188920";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(68,181,12,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#44B50C";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(68,181,12,0.30)";
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
