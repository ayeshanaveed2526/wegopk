"use client";

import React, { useState } from "react";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      {/* Chat window bubble */}
      {isOpen && (
        <div
          style={{
            marginBottom: "16px",
            width: "320px",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
            border: "1px solid #DFDFDF",
            overflow: "hidden",
            animation: "slideIn 0.3s ease-out forwards",
          }}
        >
          {/* Header */}
          <div style={{ backgroundColor: "#44B50C", padding: "16px", color: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                🤖
              </div>
              <div>
                <h4 style={{ margin: 0, fontWeight: 900, fontSize: "14px", lineHeight: 1 }}>Wego Assistant</h4>
                <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.8)", lineHeight: 1.2, marginTop: "2px", display: "block" }}>Online &bull; Powered by AI</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: "transparent", border: "none", color: "#ffffff", cursor: "pointer", padding: "4px", outline: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} width="16" height="16">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div style={{ padding: "16px", height: "256px", overflowY: "auto", backgroundColor: "#FAFAFA", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ backgroundColor: "#ffffff", padding: "12px", borderRadius: "16px", borderTopLeftRadius: "0", border: "1px solid #DFDFDF", maxWidth: "85%", fontSize: "12px", fontWeight: 600, color: "#1D1D1D", lineHeight: 1.4 }}>
              Hello! I'm your Wego Travel assistant. How can I help you find the best flights or hotels today?
            </div>
          </div>

          {/* Input */}
          <div style={{ padding: "12px", backgroundColor: "#ffffff", borderTop: "1px solid #DFDFDF", display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="text"
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: "8px 12px",
                backgroundColor: "#F4F4F4",
                borderRadius: "9999px",
                fontSize: "12px",
                fontWeight: 700,
                color: "#1D1D1D",
                border: "1px solid transparent",
                outline: "none",
                transition: "all 0.2s",
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.borderColor = "#44B50C";
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = "#F4F4F4";
                e.currentTarget.style.borderColor = "transparent";
              }}
            />
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#44B50C",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 900,
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#188920")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#44B50C")}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating round mascot button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          backgroundColor: "#ffffff",
          border: "1px solid #DFDFDF",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = "rotate(12deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = "rotate(0deg)";
        }}
      >
        {/* Mascot face image */}
        <img
          src="/images/mascot-support.png"
          alt="Chatbot mascot"
          style={{ width: "90%", height: "90%", objectFit: "contain", borderRadius: "50%", transition: "transform 0.5s ease" }}
        />
        {/* Dot status */}
        <span style={{ position: "absolute", bottom: "4px", right: "4px", width: "14px", height: "14px", backgroundColor: "#44B50C", border: "2px solid #ffffff", borderRadius: "50%" }}></span>
      </button>

      {/* Global styles for animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
