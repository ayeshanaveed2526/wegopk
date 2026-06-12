import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TravelWebsites from "@/components/TravelWebsites";
import TrustSection from "@/components/TrustSection";
import PopularDestinations from "@/components/PopularDestinations";
import ExploreSection from "@/components/ExploreSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ChatbotButton from "@/components/ChatbotButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero & Search Forms */}
        <HeroSection />

        {/* Travel Websites Marquee */}
        <TravelWebsites />

        {/* Trust Signal: ratings + 3 feature cards */}
        <TrustSection />

        {/* Popular Destinations: scrolling marquee of flight routes */}
        <PopularDestinations />

        {/* Explore Flights & Hotels Grid */}
        <ExploreSection />

        {/* App Download: phone mockup + QR + store badges */}
        <AppDownloadSection />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Chatbot */}
      <ChatbotButton />
    </div>
  );
}
