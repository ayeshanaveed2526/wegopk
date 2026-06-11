"use client";

import React from "react";
import { popularDestinations } from "@/lib/data";

export default function PopularDestinations() {
  // Duplicate the list of destinations to make the scrolling seamless and infinite
  const doubleDestinations = [...popularDestinations, ...popularDestinations];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Header Section */}
        <div>
          <span className="text-wego-green font-extrabold text-xs tracking-widest uppercase bg-wego-light-green px-3 py-1 rounded-full">
            Compare Flights & Save
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-wego-dark mt-2 tracking-tight">
            Popular Destinations from Pakistan
          </h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-xl">
            Discover trending flight routes. Hover over any card to pause the continuous movement and explore details.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper - pauses when hovered */}
      <div className="animate-marquee-container w-full overflow-hidden py-4 relative">
        {/* Inner Marquee track */}
        <div className="animate-marquee flex space-x-6">
          {doubleDestinations.map((dest, idx) => (
            <div
              key={`${dest.id}-${idx}`}
              className="flex-shrink-0 w-[290px] sm:w-[350px] group relative h-80 rounded-2xl overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 transform hover:-translate-y-1.5"
            >
              {/* Card Image with zoom and soft rotation on hover */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Layered Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-wego-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card Badge */}
              <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-300 group-hover:bg-wego-green group-hover:text-white">
                Flight Deal
              </span>

              {/* Text Info Box with sliding/spring physics simulation */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex justify-between items-end transition-transform duration-500 ease-out translate-y-1 group-hover:translate-y-0">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black tracking-tight">{dest.name}</h3>
                  <p className="text-xs text-gray-300 font-bold uppercase tracking-widest">{dest.country}</p>
                </div>
                
                <div className="text-right transform transition-transform duration-500 ease-out group-hover:scale-105">
                  <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest">Starting from</p>
                  <p className="text-xl font-black text-wego-green drop-shadow-sm">{dest.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
