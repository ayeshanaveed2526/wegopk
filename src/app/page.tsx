import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import PopularDestinations from "@/components/PopularDestinations";
import DealsSection from "@/components/DealsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero & Search Forms */}
        <HeroSection />

        {/* Worldwide Trust & Reviews */}
        <TrustSection />

        {/* Popular Destinations Marquee */}
        <PopularDestinations />

        {/* App Download & FAQ */}
        <DealsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
