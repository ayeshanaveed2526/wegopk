import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import TravelWebsites from "@/components/TravelWebsites";
import FeatureCards from "@/components/FeatureCards";
import Footer from "@/components/Footer";
import PopularDestinations from "@/components/PopularDestinations";
import AppDownloadSection from "@/components/AppDownloadSection";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <TrustSection />
      <TravelWebsites />
      <FeatureCards />
      <PopularDestinations />
      <AppDownloadSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
