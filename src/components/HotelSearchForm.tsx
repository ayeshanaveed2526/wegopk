"use client";

import React, { useState } from "react";
import { Search, Calendar, Users, MapPin } from "lucide-react";

export default function HotelSearchForm() {
  const [destination, setDestination] = useState("Murree, Pakistan");
  const [checkIn, setCheckIn] = useState("2026-06-15");
  const [checkOut, setCheckOut] = useState("2026-06-22");
  const [guests, setGuests] = useState("2 Guests, 1 Room");

  return (
    <div className="space-y-4">
      {/* Main Inputs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {/* Destination */}
        <div className="lg:col-span-5 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <MapPin className="h-5 w-5" />
          </span>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where do you want to stay?"
            className="w-full pl-10 pr-4 py-3 bg-wego-light-grey rounded-lg text-sm text-wego-dark font-medium border border-transparent focus:bg-white focus:border-wego-green focus:ring-1 focus:ring-wego-green outline-hidden transition-all"
          />
        </div>

        {/* Dates */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-2">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Calendar className="h-5 w-5" />
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-3 py-3 bg-wego-light-grey rounded-lg text-sm text-wego-dark font-medium border border-transparent focus:bg-white focus:border-wego-green focus:ring-1 focus:ring-wego-green outline-hidden transition-all"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Calendar className="h-5 w-5" />
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-3 py-3 bg-wego-light-grey rounded-lg text-sm text-wego-dark font-medium border border-transparent focus:bg-white focus:border-wego-green focus:ring-1 focus:ring-wego-green outline-hidden transition-all"
            />
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="lg:col-span-3 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Users className="h-5 w-5" />
          </span>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-wego-light-grey rounded-lg text-sm text-wego-dark font-medium border border-transparent focus:bg-white focus:border-wego-green focus:ring-1 focus:ring-wego-green outline-hidden transition-all"
          />
        </div>
      </div>

      {/* Submit Button Row */}
      <div className="flex justify-end pt-2">
        <button className="flex items-center justify-center space-x-2 px-8 py-3 bg-wego-green text-white font-semibold rounded-full hover:bg-opacity-95 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto">
          <Search className="h-5 w-5" />
          <span>Search Hotels</span>
        </button>
      </div>
    </div>
  );
}
