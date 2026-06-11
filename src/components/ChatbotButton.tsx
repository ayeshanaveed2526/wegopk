"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat window bubble */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom duration-300">
          {/* Header */}
          <div className="bg-[#44B50C] p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                🤖
              </div>
              <div>
                <h4 className="font-black text-sm">Wego Assistant</h4>
                <span className="text-[10px] text-gray-100">Online &bull; Powered by AI</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-80 transition-opacity">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-gray-50 text-xs font-semibold text-gray-700">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 max-w-[85%]">
              Hello! I'm your Wego Travel assistant. How can I help you find the best flights or hotels today?
            </div>
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-700 focus:outline-hidden focus:bg-white focus:ring-1 focus:ring-wego-green transition-all"
            />
            <button className="px-4 py-2 bg-wego-green text-white text-xs font-black rounded-full hover:bg-opacity-95 shadow-xs">
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating round mascot button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-2xl p-1 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 relative group overflow-hidden"
      >
        {/* Mascot face image */}
        <img
          src="https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/support_363374119.png"
          alt="Chatbot mascot"
          className="w-[90%] h-[90%] object-contain rounded-full transition-transform duration-500 group-hover:rotate-12"
        />
        {/* Dot status */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#44B50C] border-2 border-white rounded-full"></span>
      </button>
    </div>
  );
}
