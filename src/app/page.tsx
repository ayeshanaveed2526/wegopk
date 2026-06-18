"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Plane, 
  Hotel, 
  BookOpen, 
  Smartphone, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  Globe, 
  DollarSign, 
  ChevronDown, 
  ArrowRightLeft, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Star, 
  Filter, 
  SlidersHorizontal,
  TrendingUp, 
  ArrowRight,
  Shield, 
  ThumbsUp, 
  Zap, 
  MessageSquare,
  Sparkles,
  Percent,
  Map,
  Grid
} from "lucide-react";

// Mock data for Autocomplete Airports & Cities
const POPULAR_AIRPORTS = [
  { city: "Karachi", code: "KHI", country: "Pakistan", name: "Jinnah International Airport" },
  { city: "Lahore", code: "LHE", country: "Pakistan", name: "Allama Iqbal International Airport" },
  { city: "Islamabad", code: "ISB", country: "Pakistan", name: "Islamabad International Airport" },
  { city: "Dubai", code: "DXB", country: "United Arab Emirates", name: "Dubai International Airport" },
  { city: "London", code: "LHR", country: "United Kingdom", name: "Heathrow Airport" },
  { city: "Jeddah", code: "JED", country: "Saudi Arabia", name: "King Abdulaziz International Airport" },
  { city: "New York", code: "JFK", country: "United States", name: "John F. Kennedy Intl Airport" },
  { city: "Bangkok", code: "BKK", country: "Thailand", name: "Suvarnabhumi Airport" },
  { city: "Peshawar", code: "PEW", country: "Pakistan", name: "Bacha Khan International Airport" },
  { city: "Multan", code: "MUX", country: "Pakistan", name: "Multan International Airport" },
];

const POPULAR_HOTELS_CITIES = [
  { city: "Lahore", country: "Pakistan", description: "PC Lahore, Serena, Avari, Gulberg" },
  { city: "Karachi", country: "Pakistan", description: "Marriott Karachi, Movenpick, Avari Towers" },
  { city: "Islamabad", country: "Pakistan", description: "Serena Islamabad, Marriott, Centaurus" },
  { city: "Murree", country: "Pakistan", description: "Lockwood Hotel, PC Bhurban, Cecil" },
  { city: "Hunza Valley", country: "Pakistan", description: "Luxus Hunza, Hunza Serena Inn, Eagle's Nest" },
  { city: "Dubai", country: "UAE", description: "Burj Al Arab, Atlantis, Marina Hotels" },
  { city: "London", country: "UK", description: "The Ritz, Savoy, Hilton Metropole" },
];

// Popular Flight Routes from Pakistan (Mock Data for Landing Page Cards)
const POPULAR_ROUTES = [
  { fromCity: "Karachi", fromCode: "KHI", toCity: "Dubai", toCode: "DXB", price: "PKR 54,200", date: "Jul 2026", airline: "FlyDubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80" },
  { fromCity: "Lahore", fromCode: "LHE", toCity: "Jeddah", toCode: "JED", price: "PKR 82,900", date: "Aug 2026", airline: "PIA", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80" },
  { fromCity: "Islamabad", fromCode: "ISB", toCity: "London", toCode: "LHR", price: "PKR 145,500", date: "Jul 2026", airline: "British Airways", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80" },
  { fromCity: "Lahore", fromCode: "LHE", toCity: "Dubai", toCode: "DXB", price: "PKR 58,100", date: "Oct 2026", airline: "Emirates", image: "https://images.unsplash.com/photo-1526495124232-a02e18494d1a?auto=format&fit=crop&w=400&q=80" },
  { fromCity: "Karachi", fromCode: "KHI", toCity: "Jeddah", toCode: "JED", price: "PKR 76,400", date: "Sep 2026", airline: "Saudi Arabian", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80" },
  { fromCity: "Islamabad", fromCode: "ISB", toCity: "Dubai", toCode: "DXB", price: "PKR 61,000", date: "Nov 2026", airline: "AirSial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80" },
];

const TRENDING_DESTINATIONS = [
  { city: "Skardu", country: "Pakistan", tag: "Adventure & Lakes", desc: "Unlock stunning views of Shangrila & Cold Desert.", image: "https://images.unsplash.com/photo-1627483262112-039e9a0a40a8?auto=format&fit=crop&w=400&q=80" },
  { city: "Baku", country: "Azerbaijan", tag: "Fast E-Visa", desc: "Rich European feel blended with Caspian breeze.", image: "https://images.unsplash.com/photo-1527030280862-64139fbe04ca?auto=format&fit=crop&w=400&q=80" },
  { city: "Bangkok", country: "Thailand", tag: "Shopping & Food", desc: "Experience bustling night markets and grand shrines.", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80" },
  { city: "Istanbul", country: "Turkey", tag: "Heritage & Bazaars", desc: "Stops along the Bosphorus strait linking East & West.", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=400&q=80" }
];

// Simulated Flight Search Results Data
const FLIGHT_RESULTS_DATABASE = [
  { id: 1, airline: "PIA", logo: "🟢🇵🇰", departureTime: "08:15 AM", arrivalTime: "10:30 AM", duration: "2h 15m", stops: "Non-stop", price: 54200, rating: 7.2, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 2, airline: "Emirates", logo: "🔴🇦🇪", departureTime: "03:30 AM", arrivalTime: "05:40 AM", duration: "2h 10m", stops: "Non-stop", price: 78500, rating: 9.0, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 3, airline: "FlyDubai", logo: "🔵🇦🇪", departureTime: "06:00 PM", arrivalTime: "08:15 PM", duration: "2h 15m", stops: "Non-stop", price: 51900, rating: 7.8, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 4, airline: "AirSial", logo: "🟢🟡", departureTime: "11:20 AM", arrivalTime: "01:30 PM", duration: "2h 10m", stops: "Non-stop", price: 53800, rating: 8.1, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 5, airline: "Gulf Air", logo: "🟤🇧🇭", departureTime: "04:10 PM", arrivalTime: "09:45 PM", duration: "5h 35m", stops: "1 Stop (BAH)", price: 62400, rating: 8.0, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 6, airline: "Qatar Airways", logo: "🟣🇶🇦", departureTime: "09:30 AM", arrivalTime: "02:15 PM", duration: "4h 45m", stops: "1 Stop (DOH)", price: 89600, rating: 9.3, cabin: "Business", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 7, airline: "FlyJinnah", logo: "🔴🇵🇰", departureTime: "01:00 AM", arrivalTime: "03:15 AM", duration: "2h 15m", stops: "Non-stop", price: 49500, rating: 7.6, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" },
  { id: 8, airline: "Serene Air", logo: "🔵🟡", departureTime: "09:15 PM", arrivalTime: "11:30 PM", duration: "2h 15m", stops: "Non-stop", price: 52900, rating: 7.9, cabin: "Economy", departureCode: "KHI", arrivalCode: "DXB" }
];

// Simulated Hotel Search Results Data
const HOTEL_RESULTS_DATABASE = [
  { id: 1, name: "Pearl Continental Hotel", rating: 4.8, reviews: 3410, stars: 5, price: 28500, region: "Mall Road", tags: ["Pool", "Gym", "Breakfast Included"], image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80", provider: "Booking.com" },
  { id: 2, name: "Avari Towers Hotel", rating: 4.6, reviews: 2980, stars: 5, price: 24300, region: "Shahrah-e-Faisal", tags: ["Pool", "Spa", "Free Airport Shuttle"], image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80", provider: "Agoda" },
  { id: 3, name: "Serena Hotel", rating: 4.9, reviews: 4120, stars: 5, price: 38000, region: "Diplomatic Enclave", tags: ["Mountain Views", "Luxury Spa", "High Security"], image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80", provider: "Expedia" },
  { id: 4, name: "Luxus Grand Hotel", rating: 4.4, reviews: 1420, stars: 4, price: 18500, region: "Gulberg", tags: ["City View", "Free Wi-Fi", "Restaurant"], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80", provider: "Wego Direct" },
  { id: 5, name: "Ramada Plaza Hotel", rating: 4.2, reviews: 1200, stars: 4, price: 16200, region: "Airport Zone", tags: ["Free Wifi", "Pool", "Gym"], image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80", provider: "Booking.com" },
  { id: 6, name: "Marriott Hotel", rating: 4.7, reviews: 2190, stars: 5, price: 34000, region: "City Center", tags: ["Pool", "24/7 Service", "Breakfast Buffet"], image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80", provider: "Agoda" }
];

export default function Home() {
  // Navigation & General Site Settings State
  const [activeTab, setActiveTab] = useState<"flights" | "hotels">("flights");
  const [currency, setCurrency] = useState("PKR");
  const [language, setLanguage] = useState("English");
  
  // Flights Form Inputs State
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [flightFromQuery, setFlightFromQuery] = useState("Karachi (KHI)");
  const [flightToQuery, setFlightToQuery] = useState("Dubai (DXB)");
  const [departDate, setDepartDate] = useState("2026-07-20");
  const [returnDate, setReturnDate] = useState("2026-07-27");
  const [cabinClass, setCabinClass] = useState("Economy");
  
  // Passengers State
  const [showPaxDropdown, setShowPaxDropdown] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // Autocomplete suggestions triggers
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  // Hotels Form Inputs State
  const [hotelDestination, setHotelDestination] = useState("Lahore, Pakistan");
  const [showHotelSuggestions, setShowHotelSuggestions] = useState(false);
  const [hotelCheckIn, setHotelCheckIn] = useState("2026-07-20");
  const [hotelCheckOut, setHotelCheckOut] = useState("2026-07-25");
  const [roomsCount, setRoomsCount] = useState(1);
  const [guestsCount, setGuestsCount] = useState(2);
  const [showHotelGuestsDropdown, setShowHotelGuestsDropdown] = useState(false);

  // Search Simulator Overlay State
  const [isSearching, setIsSearching] = useState(false);
  const [showResultsScreen, setShowResultsScreen] = useState(false);
  const [searchPercentage, setSearchPercentage] = useState(0);
  
  // Simulated Filter States (Flights)
  const [flightStopsFilter, setFlightStopsFilter] = useState("All");
  const [flightAirlineFilter, setFlightAirlineFilter] = useState("All");
  const [flightSortBy, setFlightSortBy] = useState("cheapest");
  
  // Simulated Filter States (Hotels)
  const [hotelStarsFilter, setHotelStarsFilter] = useState("All");
  const [hotelSortBy, setHotelSortBy] = useState("popular");
  
  // Dropdown States for Header
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Toast feedback
  const [successToast, setSuccessToast] = useState("");

  const triggerToast = (message: string) => {
    setSuccessToast(message);
    setTimeout(() => {
      setSuccessToast("");
    }, 3500);
  };

  // Close dropdowns on outer click
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const paxRef = useRef<HTMLDivElement>(null);
  const hotelDestRef = useRef<HTMLDivElement>(null);
  const hotelGuestsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setShowFromSuggestions(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setShowToSuggestions(false);
      }
      if (paxRef.current && !paxRef.current.contains(event.target as Node)) {
        setShowPaxDropdown(false);
      }
      if (hotelDestRef.current && !hotelDestRef.current.contains(event.target as Node)) {
        setShowHotelSuggestions(false);
      }
      if (hotelGuestsRef.current && !hotelGuestsRef.current.contains(event.target as Node)) {
        setShowHotelGuestsDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Run Search simulation
  const handleSearchTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchPercentage(0);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setSearchPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSearching(false);
            setShowResultsScreen(true);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
  };

  // Switch departure and arrival cities
  const swapCities = () => {
    const temp = flightFromQuery;
    setFlightFromQuery(flightToQuery);
    setFlightToQuery(temp);
    triggerToast("Origin and Destination swapped!");
  };

  // Filtered Flight listings based on state
  const getFilteredFlights = () => {
    let list = [...FLIGHT_RESULTS_DATABASE];
    
    // Stops filter
    if (flightStopsFilter !== "All") {
      list = list.filter((f) => f.stops.toLowerCase().includes(flightStopsFilter.toLowerCase()));
    }
    
    // Airline filter
    if (flightAirlineFilter !== "All") {
      list = list.filter((f) => f.airline === flightAirlineFilter);
    }
    
    // Sorting
    if (flightSortBy === "cheapest") {
      list.sort((a, b) => a.price - b.price);
    } else if (flightSortBy === "fastest") {
      list.sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));
    } else if (flightSortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }
    
    return list;
  };

  // Filtered Hotel listings based on state
  const getFilteredHotels = () => {
    let list = [...HOTEL_RESULTS_DATABASE];
    
    // Stars filter
    if (hotelStarsFilter !== "All") {
      list = list.filter((h) => h.stars === parseInt(hotelStarsFilter));
    }
    
    // Sorting
    if (hotelSortBy === "popular") {
      list.sort((a, b) => b.reviews - a.reviews);
    } else if (hotelSortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (hotelSortBy === "priceAsc") {
      list.sort((a, b) => a.price - b.price);
    } else if (hotelSortBy === "priceDesc") {
      list.sort((a, b) => b.price - a.price);
    }
    
    return list;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased">
      
      {/* Toast Feedback popup */}
      {successToast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-slate-900/95 text-[#80D700] border border-slate-700/80 px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in font-medium text-sm">
          <Sparkles className="h-5 w-5 text-[#80D700]" />
          <span>{successToast}</span>
        </div>
      )}

      {/* -------------------- 1. HEADER -------------------- */}
      <header className="bg-[#1a1a1a] text-white border-b border-slate-800 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Branding Logo */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2" onClick={() => setShowResultsScreen(false)}>
                {/* Simulated Wego Icon */}
                <div className="h-9 w-9 rounded-xl bg-[#80D700] flex items-center justify-center font-black text-slate-900 text-lg shadow-md shadow-[#80D700]/30 transition-transform hover:scale-105">
                  w
                </div>
                <span className="text-2xl font-extrabold tracking-tight">
                  <span className="text-[#80D700]">we</span>go
                  <span className="text-xs text-slate-400 font-semibold align-super ml-0.5">.pk</span>
                </span>
              </a>

              {/* Main Service Links */}
              <nav className="hidden md:flex items-center gap-1.5">
                <button 
                  onClick={() => { setActiveTab("flights"); setShowResultsScreen(false); }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all ${activeTab === "flights" && !showResultsScreen ? "bg-slate-800 text-[#80D700]" : "text-slate-300 hover:bg-slate-800/50"}`}
                >
                  <Plane className="h-4.5 w-4.5" /> Flights
                </button>
                <button 
                  onClick={() => { setActiveTab("hotels"); setShowResultsScreen(false); }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all ${activeTab === "hotels" && !showResultsScreen ? "bg-slate-800 text-[#80D700]" : "text-slate-300 hover:bg-slate-800/50"}`}
                >
                  <Hotel className="h-4.5 w-4.5" /> Hotels
                </button>
                <a href="#blog" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-800/50 transition-all">
                  <BookOpen className="h-4.5 w-4.5 text-slate-400" /> Blog
                </a>
              </nav>
            </div>

            {/* Header Right Widgets */}
            <div className="flex items-center gap-4 text-xs font-semibold">
              
              {/* Currency Dropdown Selector */}
              <div className="relative">
                <button 
                  onClick={() => { setShowCurrencyDropdown(!showCurrencyDropdown); setShowLanguageDropdown(false); }}
                  className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 hover:bg-slate-800 rounded-lg transition-all"
                >
                  <DollarSign className="h-3.5 w-3.5 text-[#80D700]" /> {currency} <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {showCurrencyDropdown && (
                  <div className="absolute right-0 mt-2 w-28 bg-[#2a2a2a] border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden text-sm">
                    {["PKR", "USD", "AED", "SAR", "GBP"].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => { setCurrency(curr); setShowCurrencyDropdown(false); triggerToast(`Currency changed to ${curr}`); }}
                        className="w-full text-left px-4 py-2 text-slate-200 hover:bg-[#80D700] hover:text-slate-900 transition-colors font-medium"
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Dropdown Selector */}
              <div className="relative">
                <button 
                  onClick={() => { setShowLanguageDropdown(!showLanguageDropdown); setShowCurrencyDropdown(false); }}
                  className="flex items-center gap-1 text-slate-300 hover:text-white px-2 py-1 hover:bg-slate-800 rounded-lg transition-all"
                >
                  <Globe className="h-3.5 w-3.5 text-[#80D700]" /> {language} <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-[#2a2a2a] border border-slate-700 rounded-xl shadow-xl z-50 overflow-hidden text-sm">
                    {["English", "اردو", "العربية", "Deutsch"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setShowLanguageDropdown(false); triggerToast(`Language changed to ${lang}`); }}
                        className="w-full text-left px-4 py-2 text-slate-200 hover:bg-[#80D700] hover:text-slate-900 transition-colors font-medium"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <span className="hidden sm:inline text-slate-600">|</span>

              <button 
                onClick={() => triggerToast("Member login portal integration coming soon!")}
                className="hidden sm:block text-slate-300 hover:text-white transition-colors"
              >
                Log in
              </button>
              
              <button 
                onClick={() => triggerToast("Registration is currently direct on booking partners")}
                className="bg-[#80D700] text-slate-950 px-4 py-2 rounded-xl transition-all font-extrabold hover:brightness-110 shadow-md shadow-[#80D700]/25"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container when showing main landing page */}
      {!showResultsScreen && (
        <main className="flex-grow flex flex-col">
          
          {/* -------------------- 2. HERO AREA WITH SEARCH WIDGET -------------------- */}
          <section className="relative bg-[#1a1a1a] pb-24 pt-12 overflow-hidden">
            {/* Subtle Gradient Backdrops */}
            <div className="absolute inset-0 bg-radial-gradient from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#80D700]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
              
              {/* Title Headings */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  Compare & Book Cheap Flights & Hotels
                </h1>
                <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
                  Search hundreds of travel sites at once in Pakistan. Find flight tickets and room deals easily.
                </p>
              </div>

              {/* Main Search Card Container */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 text-left border border-slate-200">
                
                {/* Search Type Tabs (Flights vs Hotels) */}
                <div className="flex border-b border-slate-100 pb-4 mb-6 gap-6">
                  <button 
                    onClick={() => setActiveTab("flights")}
                    className={`flex items-center gap-2 pb-3 text-base font-extrabold transition-all relative ${activeTab === "flights" ? "text-slate-900 border-b-3 border-[#80D700]" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <Plane className={`h-5 w-5 ${activeTab === "flights" ? "text-[#80D700]" : "text-slate-400"}`} /> Flights
                  </button>
                  <button 
                    onClick={() => setActiveTab("hotels")}
                    className={`flex items-center gap-2 pb-3 text-base font-extrabold transition-all relative ${activeTab === "hotels" ? "text-slate-900 border-b-3 border-[#80D700]" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <Hotel className={`h-5 w-5 ${activeTab === "hotels" ? "text-[#80D700]" : "text-slate-400"}`} /> Hotels
                  </button>
                </div>

                {/* SEARCH WIDGET FORM */}
                <form onSubmit={handleSearchTrigger} className="space-y-5">
                  
                  {activeTab === "flights" ? (
                    /* FLIGHT SEARCH FIELDS */
                    <div className="space-y-4">
                      
                      {/* Trip options header */}
                      <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 font-bold">
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input 
                              type="radio" 
                              name="trip-type" 
                              checked={tripType === "one-way"}
                              onChange={() => setTripType("one-way")}
                              className="accent-[#80D700] h-4 w-4"
                            />
                            One-way
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input 
                              type="radio" 
                              name="trip-type" 
                              checked={tripType === "round-trip"}
                              onChange={() => setTripType("round-trip")}
                              className="accent-[#80D700] h-4 w-4"
                            />
                            Round-trip
                          </label>
                        </div>
                        
                        <div className="h-4 w-px bg-slate-200 hidden sm:block" />

                        {/* Passenger and Cabin selection trigger */}
                        <div className="relative" ref={paxRef}>
                          <button
                            type="button"
                            onClick={() => setShowPaxDropdown(!showPaxDropdown)}
                            className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 bg-slate-100/80 px-3 py-1.5 rounded-lg transition-all"
                          >
                            <Users className="h-4 w-4 text-[#80D700]" />
                            <span>{adults + children + infants} Passenger(s), {cabinClass}</span>
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                          
                          {showPaxDropdown && (
                            <div className="absolute left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-40 space-y-4 text-slate-800">
                              <h4 className="font-extrabold text-sm border-b border-slate-100 pb-2">Select Passengers</h4>
                              
                              {/* Adults count */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <span className="font-bold block">Adults</span>
                                  <span className="text-xs text-slate-400">Ages 12+</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Minus className="h-3 w-3" /></button>
                                  <span className="font-bold w-4 text-center">{adults}</span>
                                  <button type="button" onClick={() => setAdults(adults + 1)} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Plus className="h-3 w-3" /></button>
                                </div>
                              </div>

                              {/* Children count */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <span className="font-bold block">Children</span>
                                  <span className="text-xs text-slate-400">Ages 2-11</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <button type="button" onClick={() => setChildren(Math.max(0, children - 1))} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Minus className="h-3 w-3" /></button>
                                  <span className="font-bold w-4 text-center">{children}</span>
                                  <button type="button" onClick={() => setChildren(children + 1)} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Plus className="h-3 w-3" /></button>
                                </div>
                              </div>

                              {/* Infants count */}
                              <div className="flex justify-between items-center text-sm">
                                <div>
                                  <span className="font-bold block">Infants</span>
                                  <span className="text-xs text-slate-400">Under 2 years</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <button type="button" onClick={() => setInfants(Math.max(0, infants - 1))} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Minus className="h-3 w-3" /></button>
                                  <span className="font-bold w-4 text-center">{infants}</span>
                                  <button type="button" onClick={() => setInfants(infants + 1)} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Plus className="h-3 w-3" /></button>
                                </div>
                              </div>

                              <div className="border-t border-slate-100 pt-3">
                                <h4 className="font-extrabold text-sm pb-2">Cabin Class</h4>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  {["Economy", "Premium Econ", "Business", "First"].map((cl) => (
                                    <button
                                      key={cl}
                                      type="button"
                                      onClick={() => setCabinClass(cl)}
                                      className={`px-3 py-2 rounded-lg border text-center font-bold transition-all ${cabinClass === cl ? "bg-slate-900 border-slate-900 text-white" : "border-slate-200 hover:bg-slate-50 text-slate-600"}`}
                                    >
                                      {cl}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Main input grids */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                        
                        {/* FROM field */}
                        <div className="lg:col-span-3.5 relative" ref={fromRef}>
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">From</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="text" 
                              value={flightFromQuery}
                              onChange={(e) => { setFlightFromQuery(e.target.value); setShowFromSuggestions(true); }}
                              onFocus={() => setShowFromSuggestions(true)}
                              className="bg-transparent w-full font-bold text-slate-800 text-base outline-none placeholder-slate-400"
                              placeholder="City or Airport"
                            />
                          </div>
                          
                          {/* From Autocomplete */}
                          {showFromSuggestions && (
                            <div className="absolute left-0 mt-1 w-full bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 px-4 py-2 block border-b border-slate-100 bg-slate-50">Popular Airports</span>
                              {POPULAR_AIRPORTS.map((port) => (
                                <button
                                  key={port.code}
                                  type="button"
                                  onClick={() => { setFlightFromQuery(`${port.city} (${port.code})`); setShowFromSuggestions(false); }}
                                  className="w-full text-left px-4 py-2.5 hover:bg-slate-100/80 transition-colors flex items-center justify-between border-b border-slate-50"
                                >
                                  <div>
                                    <span className="font-extrabold text-slate-800 block text-sm">{port.city}, {port.country}</span>
                                    <span className="text-xs text-slate-400 block truncate max-w-[180px] sm:max-w-xs">{port.name}</span>
                                  </div>
                                  <span className="text-xs font-black bg-slate-200 text-slate-600 px-2 py-1 rounded">{port.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Swap Cities Button */}
                        <div className="flex items-center justify-center lg:col-span-0.5">
                          <button
                            type="button"
                            onClick={swapCities}
                            className="h-10 w-10 rounded-full border border-slate-200 bg-white shadow hover:shadow-md hover:border-[#80D700] hover:text-[#80D700] transition-all flex items-center justify-center text-slate-500"
                            title="Swap locations"
                          >
                            <ArrowRightLeft className="h-4.5 w-4.5" />
                          </button>
                        </div>

                        {/* TO field */}
                        <div className="lg:col-span-3.5 relative" ref={toRef}>
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">To</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="text" 
                              value={flightToQuery}
                              onChange={(e) => { setFlightToQuery(e.target.value); setShowToSuggestions(true); }}
                              onFocus={() => setShowToSuggestions(true)}
                              className="bg-transparent w-full font-bold text-slate-800 text-base outline-none placeholder-slate-400"
                              placeholder="Destination Airport"
                            />
                          </div>

                          {/* To Autocomplete */}
                          {showToSuggestions && (
                            <div className="absolute left-0 mt-1 w-full bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 px-4 py-2 block border-b border-slate-100 bg-slate-50">Popular Airports</span>
                              {POPULAR_AIRPORTS.map((port) => (
                                <button
                                  key={port.code}
                                  type="button"
                                  onClick={() => { setFlightToQuery(`${port.city} (${port.code})`); setShowToSuggestions(false); }}
                                  className="w-full text-left px-4 py-2.5 hover:bg-slate-100/80 transition-colors flex items-center justify-between border-b border-slate-50"
                                >
                                  <div>
                                    <span className="font-extrabold text-slate-800 block text-sm">{port.city}, {port.country}</span>
                                    <span className="text-xs text-slate-400 block truncate max-w-[180px] sm:max-w-xs">{port.name}</span>
                                  </div>
                                  <span className="text-xs font-black bg-slate-200 text-slate-600 px-2 py-1 rounded">{port.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* DEPART Date field */}
                        <div className="lg:col-span-2 relative">
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Depart</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="date" 
                              value={departDate}
                              onChange={(e) => setDepartDate(e.target.value)}
                              className="bg-transparent w-full font-bold text-slate-800 text-sm outline-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* RETURN Date field */}
                        <div className={`lg:col-span-2 relative transition-all ${tripType === "one-way" ? "opacity-45 hover:opacity-100" : ""}`}>
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Return</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="date" 
                              value={returnDate}
                              onChange={(e) => { setReturnDate(e.target.value); setTripType("round-trip"); }}
                              className="bg-transparent w-full font-bold text-slate-800 text-sm outline-none cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  ) : (
                    /* HOTEL SEARCH FIELDS */
                    <div className="space-y-4">
                      
                      {/* Guest details selection bar */}
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                        <div className="relative" ref={hotelGuestsRef}>
                          <button
                            type="button"
                            onClick={() => setShowHotelGuestsDropdown(!showHotelGuestsDropdown)}
                            className="flex items-center gap-1.5 text-slate-700 hover:text-slate-900 bg-slate-100/80 px-3 py-1.5 rounded-lg transition-all"
                          >
                            <Users className="h-4 w-4 text-[#80D700]" />
                            <span>{roomsCount} Room(s), {guestsCount} Guest(s)</span>
                            <ChevronDown className="h-3.5 w-3.5" />
                          </button>
                          
                          {showHotelGuestsDropdown && (
                            <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-45 space-y-4 text-slate-800">
                              <h4 className="font-extrabold text-sm border-b border-slate-100 pb-2">Select Guests</h4>
                              
                              {/* Rooms */}
                              <div className="flex justify-between items-center text-sm">
                                <span className="font-bold">Rooms</span>
                                <div className="flex items-center gap-3">
                                  <button type="button" onClick={() => setRoomsCount(Math.max(1, roomsCount - 1))} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Minus className="h-3 w-3" /></button>
                                  <span className="font-bold w-4 text-center">{roomsCount}</span>
                                  <button type="button" onClick={() => setRoomsCount(roomsCount + 1)} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Plus className="h-3 w-3" /></button>
                                </div>
                              </div>

                              {/* Guests */}
                              <div className="flex justify-between items-center text-sm">
                                <span className="font-bold">Guests</span>
                                <div className="flex items-center gap-3">
                                  <button type="button" onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Minus className="h-3 w-3" /></button>
                                  <span className="font-bold w-4 text-center">{guestsCount}</span>
                                  <button type="button" onClick={() => setGuestsCount(guestsCount + 1)} className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center font-bold hover:bg-slate-200"><Plus className="h-3 w-3" /></button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Main input grids for Hotels */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                        
                        {/* Destination input */}
                        <div className="lg:col-span-6 relative" ref={hotelDestRef}>
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Going to</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="text" 
                              value={hotelDestination}
                              onChange={(e) => { setHotelDestination(e.target.value); setShowHotelSuggestions(true); }}
                              onFocus={() => setShowHotelSuggestions(true)}
                              className="bg-transparent w-full font-bold text-slate-800 text-base outline-none placeholder-slate-400"
                              placeholder="City, landmark, or hotel name"
                            />
                          </div>

                          {/* Hotels City autocomplete */}
                          {showHotelSuggestions && (
                            <div className="absolute left-0 mt-1 w-full bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto">
                              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 px-4 py-2 block border-b border-slate-100 bg-slate-50">Popular Travel Spots</span>
                              {POPULAR_HOTELS_CITIES.map((spot) => (
                                <button
                                  key={spot.city}
                                  type="button"
                                  onClick={() => { setHotelDestination(`${spot.city}, ${spot.country}`); setShowHotelSuggestions(false); }}
                                  className="w-full text-left px-4 py-2.5 hover:bg-slate-100/80 transition-colors flex items-center justify-between border-b border-slate-50"
                                >
                                  <div>
                                    <span className="font-extrabold text-slate-800 block text-sm">{spot.city}, {spot.country}</span>
                                    <span className="text-xs text-slate-400 block truncate">{spot.description}</span>
                                  </div>
                                  <Hotel className="h-4.5 w-4.5 text-slate-400" />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* CHECK-IN field */}
                        <div className="lg:col-span-3 relative">
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Check-in</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="date" 
                              value={hotelCheckIn}
                              onChange={(e) => setHotelCheckIn(e.target.value)}
                              className="bg-transparent w-full font-bold text-slate-800 text-sm outline-none cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* CHECK-OUT field */}
                        <div className="lg:col-span-3 relative">
                          <label className="absolute left-4 top-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">Check-out</label>
                          <div className="flex items-center bg-slate-50 border border-slate-200 rounded-2xl pl-10 pr-4 pt-6 pb-2 focus-within:ring-2 focus-within:ring-[#80D700]/40 focus-within:border-[#80D700] transition-all">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input 
                              type="date" 
                              value={hotelCheckOut}
                              onChange={(e) => setHotelCheckOut(e.target.value)}
                              className="bg-transparent w-full font-bold text-slate-800 text-sm outline-none cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="bg-[#80D700] hover:brightness-110 text-slate-950 font-black text-base px-8 py-4 rounded-2xl transition-all flex items-center gap-2.5 shadow-lg shadow-[#80D700]/30 w-full sm:w-auto justify-center"
                    >
                      <Search className="h-5 w-5" /> 
                      {activeTab === "flights" ? "Search Flights" : "Search Hotels"}
                    </button>
                  </div>
                  
                </form>
              </div>

            </div>
          </section>

          {/* -------------------- SEARCH SIMULATOR LOADER -------------------- */}
          {isSearching && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center space-y-6 shadow-2xl border border-slate-200 animate-scale-up">
                
                {/* Simulated spinning loader icon */}
                <div className="relative h-24 w-24 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-[#80D700] animate-spin" />
                  {activeTab === "flights" ? (
                    <Plane className="h-10 w-10 text-[#80D700] animate-pulse" />
                  ) : (
                    <Hotel className="h-10 w-10 text-[#80D700] animate-pulse" />
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-800">
                    Comparing 700+ travel sites...
                  </h3>
                  <p className="text-xs text-slate-400 font-bold tracking-wider uppercase">
                    Searching {activeTab === "flights" ? `${flightFromQuery} ➔ ${flightToQuery}` : hotelDestination}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5">
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#80D700] to-emerald-500 transition-all duration-100 rounded-full" 
                      style={{ width: `${searchPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-bold">
                    <span>Searching airlines & partners...</span>
                    <span>{searchPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* -------------------- 3. POPULAR FLIGHTS ROUTES SECTION -------------------- */}
          <section className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    <TrendingUp className="h-5.5 w-5.5 text-[#80D700]" /> Popular Flights from Pakistan
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Discover airfare price comparisons for trending local and international travel routes.
                  </p>
                </div>
                <button 
                  onClick={() => { triggerToast("Redirecting to all flights routes comparison..."); }}
                  className="text-sm font-extrabold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 transition-colors"
                >
                  View all routes <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {POPULAR_ROUTES.map((route, i) => (
                  <div 
                    key={i}
                    onClick={() => {
                      setFlightFromQuery(`${route.fromCity} (${route.fromCode})`);
                      setFlightToQuery(`${route.toCity} (${route.toCode})`);
                      setActiveTab("flights");
                      window.scrollTo({ top: 120, behavior: "smooth" });
                      triggerToast(`Selected flight route: ${route.fromCity} to ${route.toCity}`);
                    }}
                    className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/60 hover:border-[#80D700] hover:bg-white hover:shadow-xl transition-all duration-300 flex"
                  >
                    {/* Route Image */}
                    <div className="w-1/3 relative overflow-hidden shrink-0">
                      <img 
                        src={route.image} 
                        alt={route.toCity} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50 group-hover:to-white" />
                    </div>

                    {/* Route Details */}
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-black text-[#80D700] uppercase tracking-wider">
                          <span>{route.airline}</span>
                          <span>•</span>
                          <span>{route.date}</span>
                        </div>
                        <h3 className="font-extrabold text-base text-slate-800 group-hover:text-emerald-600 transition-colors mt-1">
                          {route.fromCity} to {route.toCity}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">Compare and book on Wego</p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex justify-between items-end">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase">Fares from</span>
                          <span className="text-sm font-black text-slate-900">{route.price}</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Find Deals <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* -------------------- 4. TRENDING DESTINATIONS SECTION -------------------- */}
          <section className="py-16 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Globe className="h-5.5 w-5.5 text-[#80D700]" /> Trending Destinations for Pakistani Travelers
                </h2>
                <p className="text-slate-400 text-sm">
                  Top-rated escapes selected by search frequency and direct visa simplicity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {TRENDING_DESTINATIONS.map((dest, i) => (
                  <div 
                    key={i}
                    onClick={() => {
                      if (activeTab === "flights") {
                        setFlightToQuery(dest.city);
                      } else {
                        setHotelDestination(`${dest.city}, ${dest.country}`);
                      }
                      window.scrollTo({ top: 120, behavior: "smooth" });
                      triggerToast(`Updated destination search to ${dest.city}`);
                    }}
                    className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#80D700] hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-48 relative overflow-hidden shrink-0">
                      <img 
                        src={dest.image} 
                        alt={dest.city} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-slate-950/75 text-[#80D700] text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-slate-800/60 tracking-wider">
                        {dest.tag}
                      </span>
                    </div>

                    <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                      <div>
                        <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-emerald-600 transition-colors">
                          {dest.city}, {dest.country}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">{dest.desc}</p>
                      </div>
                      
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:underline pt-2 border-t border-slate-50">
                        Explore Deals <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* -------------------- 5. WHY WEGO SECTION -------------------- */}
          <section className="py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  How does Wego help you travel?
                </h2>
                <p className="text-slate-400 text-sm max-w-lg mx-auto">
                  Compare fares from 700+ websites instantly to save time and book directly on your terms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Benefit 1 */}
                <div className="text-center p-6 space-y-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-[#80D700]/10 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    <SlidersHorizontal className="h-7 w-7 text-[#80D700]" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-800">Compare with Ease</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Compare airfares, flight timings, layovers, baggage inclusions, and hotel room rates across booking sites at a glance.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="text-center p-6 space-y-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-[#80D700]/10 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    <Shield className="h-7 w-7 text-[#80D700]" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-800">Unbiased & Free</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We show you the cheapest pricing options with zero added markup or booking fees. Our services are 100% free of charge.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="text-center p-6 space-y-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="h-14 w-14 rounded-full bg-[#80D700]/10 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                    <Zap className="h-7 w-7 text-[#80D700]" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-800">Book Directly</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Find the perfect travel deal and book directly on your chosen partner portal or airline website. Secure checkout built in.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* -------------------- 6. LOCAL SUPPORT & LAHORE OFFICE DETAILS -------------------- */}
          <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-[#80D700]/5 blur-[90px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700/80 text-[#80D700] text-[10px] font-black uppercase tracking-wider">
                  <MessageSquare className="h-4.5 w-4.5" /> Wego Pakistan Support
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Need Help Planning? Our Local Experts Are Here.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  Wego operates a dedicated regional office in Pakistan to assist local travelers. Have queries about flight cancellations, refund policies, or booking partner channels? Contact our customer care.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-[#80D700] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200">Wego Lahore Office</strong>
                      <span className="text-slate-400 text-xs">Haly Tower, Phase 2, DHA, Lahore, Punjab, Pakistan</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 text-sm">
                    <MessageSquare className="h-5 w-5 text-[#80D700] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-200">WhatsApp Support Care</strong>
                      <span className="text-slate-400 text-xs">Available Mon-Sat (9:00 AM - 6:00 PM) for ticket query guidance.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => triggerToast("Launching chat interface for WhatsApp support...")}
                    className="bg-[#80D700] text-slate-950 font-black px-6 py-3 rounded-xl hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-[#80D700]/10 text-sm"
                  >
                    Chat on WhatsApp
                  </button>
                  <button 
                    onClick={() => triggerToast("Redirecting to help ticket center...")}
                    className="border border-slate-700 hover:border-slate-500 text-slate-300 font-bold px-6 py-3 rounded-xl transition-all text-sm"
                  >
                    Open Support Ticket
                  </button>
                </div>
              </div>

              {/* Office Mock Illustration */}
              <div className="bg-slate-800/40 border border-slate-800 p-8 rounded-3xl space-y-6 relative">
                <h3 className="font-extrabold text-lg text-white flex items-center gap-2 border-b border-slate-800 pb-4">
                  <Check className="h-5 w-5 text-[#80D700]" /> Travel Trust Shield
                </h3>

                <ul className="space-y-4 text-xs text-slate-300">
                  <li className="flex gap-2.5">
                    <span className="h-5 w-5 bg-emerald-950 text-[#80D700] rounded-full flex items-center justify-center shrink-0 font-bold">✓</span>
                    <span><strong>100% Secure Checkout:</strong> Redirection only to certified OTAs, local agencies and airlines.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="h-5 w-5 bg-emerald-950 text-[#80D700] rounded-full flex items-center justify-center shrink-0 font-bold">✓</span>
                    <span><strong>Local Currency Support:</strong> Pricing matches actual checkouts in PKR, saving hidden exchange markup fees.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="h-5 w-5 bg-emerald-950 text-[#80D700] rounded-full flex items-center justify-center shrink-0 font-bold">✓</span>
                    <span><strong>24/7 Booking Tracking:</strong> Track and manage ticket queries directly from the provider portal.</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* -------------------- 7. MOBILE APP SECTION -------------------- */}
          <section className="py-16 bg-slate-50 border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              
              <div className="space-y-4 max-w-md">
                <div className="h-9 w-9 bg-[#80D700]/10 rounded-xl flex items-center justify-center text-[#80D700]">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Get the Wego App for Mobile Travel Search
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Track flight fare trends on the go. Receive notifications when hotel prices drop. Available for iOS & Android.
                </p>
                
                <div className="flex gap-3 pt-2">
                  <button onClick={() => triggerToast("App Store link clicked")} className="bg-slate-900 text-white text-[10px] font-black px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors uppercase tracking-wider">App Store</button>
                  <button onClick={() => triggerToast("Google Play link clicked")} className="bg-slate-900 text-white text-[10px] font-black px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors uppercase tracking-wider">Google Play</button>
                </div>
              </div>

              {/* QR Code Simulation */}
              <div className="flex items-center gap-4 border border-dashed border-slate-200 p-4 rounded-2xl bg-slate-50">
                <div className="h-24 w-24 bg-white border border-slate-200 rounded-lg p-1.5 flex flex-col justify-between shrink-0">
                  {/* Simulated QR Code grids */}
                  <div className="grid grid-cols-4 gap-1 w-full h-full opacity-75">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className={`rounded-sm ${(i * 3 + 2) % 5 === 0 || i % 4 === 0 ? "bg-slate-900" : "bg-transparent"}`} />
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block">Scan to Download</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5 leading-tight">Point your smartphone camera to scan & download the Wego app instantly.</span>
                </div>
              </div>

            </div>
          </section>

          {/* -------------------- 8. TRAVEL BLOG PREVIEW -------------------- */}
          <section id="blog" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Inspiration for Your Next Adventure
                </h2>
                <p className="text-slate-400 text-sm">
                  Trending stories and travel insights from the official Wego Pakistan Blog.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Blog Card 1 */}
                <article className="group cursor-pointer border border-slate-200/60 rounded-2xl overflow-hidden hover:border-[#80D700] hover:shadow-xl transition-all duration-300">
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=400&q=80" 
                      alt="Northern Pakistan Roadtrip" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">Travel Guide</span>
                    <h3 className="font-extrabold text-base text-slate-800 group-hover:text-emerald-600 transition-colors">
                      Naran Kaghan & Hunza Valley: The Ultimate 10-Day Itinerary
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Detailed routes, safety guides, and hidden viewpoints for roadtrips in Pakistan.
                    </p>
                  </div>
                </article>

                {/* Blog Card 2 */}
                <article className="group cursor-pointer border border-slate-200/60 rounded-2xl overflow-hidden hover:border-[#80D700] hover:shadow-xl transition-all duration-300">
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1596701062351-dfc799c72953?auto=format&fit=crop&w=400&q=80" 
                      alt="Budget Travel Tips" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">Saving Hacks</span>
                    <h3 className="font-extrabold text-base text-slate-800 group-hover:text-emerald-600 transition-colors">
                      How to Find Cheap Flight Fares Online: Pro Tips
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Learn the exact times to book and how layovers can slash plane ticket prices.
                    </p>
                  </div>
                </article>

                {/* Blog Card 3 */}
                <article className="group cursor-pointer border border-slate-200/60 rounded-2xl overflow-hidden hover:border-[#80D700] hover:shadow-xl transition-all duration-300">
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" 
                      alt="Visa Free Countries" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block">Visa Guide</span>
                    <h3 className="font-extrabold text-base text-slate-800 group-hover:text-emerald-600 transition-colors">
                      Visa-On-Arrival Countries for Pakistani Passport Holders
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Plan your quick international holidays with these destination suggestions.
                    </p>
                  </div>
                </article>

              </div>

            </div>
          </section>

        </main>
      )}

      {/* -------------------- 9. SIMULATED SEARCH RESULTS OVERLAY SCREEN -------------------- */}
      {showResultsScreen && (
        <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Return-to-Search Banner */}
          <div className="lg:col-span-12 bg-white border border-slate-200 rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#80D700]/10 flex items-center justify-center text-emerald-600 shrink-0">
                {activeTab === "flights" ? <Plane className="h-5 w-5" /> : <Hotel className="h-5 w-5" />}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simulated Results For</span>
                <h2 className="text-base font-extrabold text-slate-800">
                  {activeTab === "flights" ? (
                    <span>{flightFromQuery} ➔ {flightToQuery} ({tripType === "one-way" ? "One-way" : "Round-trip"})</span>
                  ) : (
                    <span>{hotelDestination} • {roomsCount} Room, {guestsCount} Guests</span>
                  )}
                </h2>
              </div>
            </div>

            <button 
              onClick={() => setShowResultsScreen(false)}
              className="bg-slate-900 text-white font-extrabold px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-colors text-sm"
            >
              Modify Search
            </button>
          </div>

          {/* LEFT SIDEBAR: FILTERS PANEL (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-base text-slate-800 flex items-center gap-2">
                  <Filter className="h-4.5 w-4.5 text-[#80D700]" /> Filter Results
                </h3>
                <button 
                  onClick={() => {
                    setFlightStopsFilter("All");
                    setFlightAirlineFilter("All");
                    setHotelStarsFilter("All");
                    triggerToast("Filters reset!");
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors"
                >
                  Reset All
                </button>
              </div>

              {activeTab === "flights" ? (
                /* FLIGHT FILTERS */
                <div className="space-y-5 text-sm">
                  
                  {/* Stops filter */}
                  <div className="space-y-2.5">
                    <label className="font-extrabold text-slate-800 block">Stops</label>
                    <div className="space-y-2">
                      {["All", "Non-stop", "1 Stop"].map((stops) => (
                        <label key={stops} className="flex items-center gap-2 cursor-pointer font-medium text-slate-600 hover:text-slate-800">
                          <input 
                            type="radio" 
                            name="stops-filter" 
                            checked={flightStopsFilter === stops}
                            onChange={() => setFlightStopsFilter(stops)}
                            className="accent-[#80D700] h-4 w-4"
                          />
                          {stops}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Airlines filter */}
                  <div className="space-y-2.5">
                    <label className="font-extrabold text-slate-800 block">Airlines</label>
                    <select
                      value={flightAirlineFilter}
                      onChange={(e) => setFlightAirlineFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none font-bold text-slate-700"
                    >
                      <option value="All">All Airlines</option>
                      <option value="PIA">PIA</option>
                      <option value="Emirates">Emirates</option>
                      <option value="FlyDubai">FlyDubai</option>
                      <option value="AirSial">AirSial</option>
                      <option value="Qatar Airways">Qatar Airways</option>
                      <option value="Serene Air">Serene Air</option>
                    </select>
                  </div>

                  {/* Sort order */}
                  <div className="space-y-2.5">
                    <label className="font-extrabold text-slate-800 block">Sort By</label>
                    <select
                      value={flightSortBy}
                      onChange={(e) => setFlightSortBy(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none font-bold text-slate-700"
                    >
                      <option value="cheapest">Price (Cheapest first)</option>
                      <option value="fastest">Duration (Fastest first)</option>
                      <option value="rating">Rating (Highest quality)</option>
                    </select>
                  </div>

                </div>
              ) : (
                /* HOTEL FILTERS */
                <div className="space-y-5 text-sm">
                  
                  {/* Hotel Star Rating filter */}
                  <div className="space-y-2.5">
                    <label className="font-extrabold text-slate-800 block">Hotel Class</label>
                    <div className="space-y-2">
                      {["All", "5", "4"].map((stars) => (
                        <label key={stars} className="flex items-center gap-2 cursor-pointer font-medium text-slate-600 hover:text-slate-800">
                          <input 
                            type="radio" 
                            name="stars-filter" 
                            checked={hotelStarsFilter === stars}
                            onChange={() => setHotelStarsFilter(stars)}
                            className="accent-[#80D700] h-4 w-4"
                          />
                          {stars === "All" ? "All Stars" : `${stars} Star Hotels`}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Hotel Sort */}
                  <div className="space-y-2.5">
                    <label className="font-extrabold text-slate-800 block">Sort By</label>
                    <select
                      value={hotelSortBy}
                      onChange={(e) => setHotelSortBy(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 outline-none font-bold text-slate-700"
                    >
                      <option value="popular">Popularity (Most Reviewed)</option>
                      <option value="rating">Guest Rating (Highest first)</option>
                      <option value="priceAsc">Price (Cheapest first)</option>
                      <option value="priceDesc">Price (Highest first)</option>
                    </select>
                  </div>

                </div>
              )}

              {/* Secure partner verification widget */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-xs text-slate-400 space-y-2">
                <span className="font-extrabold text-slate-800 block">Booking Trust Guaranteed</span>
                <p>Wego aggregates data directly from verified airlines, official travel agents, and hotel providers. Booking happens securely on partner portals.</p>
              </div>

            </div>
          </aside>

          {/* RIGHT SIDEBAR: RESULTS LISTINGS (8 Columns) */}
          <section className="lg:col-span-8 space-y-4">
            
            {activeTab === "flights" ? (
              /* FLIGHT LISTINGS VIEW */
              <div className="space-y-4">
                {getFilteredFlights().length > 0 ? (
                  getFilteredFlights().map((flight) => (
                    <div 
                      key={flight.id} 
                      className="bg-white border border-slate-200 rounded-3xl p-5 hover:border-[#80D700] hover:shadow-xl transition-all duration-300 space-y-4"
                    >
                      {/* Ticket Row */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        
                        {/* Airline logo and metadata */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl shrink-0">{flight.logo}</span>
                          <div>
                            <h4 className="font-black text-slate-800">{flight.airline}</h4>
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{flight.cabin} class</span>
                          </div>
                        </div>

                        {/* Timing details */}
                        <div className="flex items-center gap-6 text-sm">
                          <div className="text-right">
                            <span className="font-extrabold text-slate-800 block">{flight.departureTime}</span>
                            <span className="text-xs text-slate-400 font-bold uppercase">{flight.departureCode}</span>
                          </div>
                          
                          {/* Duration and layovers indicator */}
                          <div className="text-center space-y-1 w-24 sm:w-32">
                            <span className="text-[10px] text-slate-400 font-bold block">{flight.duration}</span>
                            <div className="h-0.5 bg-slate-200 relative">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-slate-400" />
                            </div>
                            <span className="text-[10px] font-black text-emerald-600 block">{flight.stops}</span>
                          </div>

                          <div>
                            <span className="font-extrabold text-slate-800 block">{flight.arrivalTime}</span>
                            <span className="text-xs text-slate-400 font-bold uppercase">{flight.arrivalCode}</span>
                          </div>
                        </div>

                      </div>

                      {/* Pricing comparing sources and direct booking links */}
                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                        <div className="flex gap-4 text-xs text-slate-400 font-semibold">
                          <span>Verified by <strong>Wego Protection</strong></span>
                          <span>•</span>
                          <span className="text-[#80D700]">★ {flight.rating} Quality</span>
                        </div>
                        
                        <div className="flex items-center gap-4 justify-between sm:justify-end">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase font-bold">Total price from</span>
                            <span className="text-xl font-black text-slate-900">PKR {flight.price.toLocaleString()}</span>
                          </div>

                          <button 
                            onClick={() => triggerToast(`Connecting you safely to ${flight.airline} checkout portal...`)}
                            className="bg-[#80D700] hover:brightness-110 text-slate-950 font-black px-5 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-[#80D700]/10 flex items-center gap-1"
                          >
                            Book now <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  ))
                ) : (
                  /* Empty state flight filter */
                  <div className="bg-white border border-slate-200 border-dashed rounded-3xl p-16 text-center space-y-3">
                    <Plane className="h-10 w-10 text-slate-300 mx-auto animate-pulse" />
                    <p className="text-slate-500 font-bold">No simulated flight listings match the selected filters.</p>
                    <button 
                      onClick={() => { setFlightStopsFilter("All"); setFlightAirlineFilter("All"); }}
                      className="text-xs font-extrabold text-emerald-600 hover:underline"
                    >
                      Clear Airline & Stop Filters
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* HOTEL LISTINGS VIEW */
              <div className="space-y-4">
                {getFilteredHotels().length > 0 ? (
                  getFilteredHotels().map((hotel) => (
                    <div 
                      key={hotel.id} 
                      className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-[#80D700] hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row"
                    >
                      {/* Hotel thumbnail image */}
                      <div className="w-full sm:w-1/3 relative shrink-0 min-h-[160px]">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name} 
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-slate-900/85 text-amber-400 text-xs px-2 py-0.5 rounded-lg font-bold flex items-center gap-1 border border-slate-700/60">
                          ★ {hotel.rating}
                        </span>
                      </div>

                      {/* Content panel */}
                      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                        
                        <div>
                          {/* Stars */}
                          <div className="flex gap-0.5">
                            {[...Array(hotel.stars)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          
                          <h4 className="font-black text-lg text-slate-800 mt-1">{hotel.name}</h4>
                          <span className="text-xs text-slate-400 font-bold block mt-0.5">{hotel.region}, {hotelDestination}</span>
                          
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {hotel.tags.map((tg, idx) => (
                              <span key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                                {tg}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Price details and compare */}
                        <div className="pt-3 border-t border-slate-100 flex justify-between items-end">
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase font-bold">Best deal from</span>
                            <span className="text-xs font-black text-emerald-600">{hotel.provider}</span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-right">
                            <div>
                              <span className="text-[10px] text-slate-400 block uppercase font-bold">Nightly from</span>
                              <span className="text-base font-black text-slate-900">PKR {hotel.price.toLocaleString()}</span>
                            </div>
                            
                            <button 
                              onClick={() => triggerToast(`Booking requested via partner: ${hotel.provider}...`)}
                              className="bg-[#80D700] hover:brightness-110 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs transition-all shadow-md shadow-[#80D700]/10 flex items-center gap-1"
                            >
                              Check rooms <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>
                  ))
                ) : (
                  /* Empty state hotel filter */
                  <div className="bg-white border border-slate-200 border-dashed rounded-3xl p-16 text-center space-y-3">
                    <Hotel className="h-10 w-10 text-slate-300 mx-auto animate-pulse" />
                    <p className="text-slate-500 font-bold">No simulated hotels found matching star rating class.</p>
                    <button 
                      onClick={() => setHotelStarsFilter("All")}
                      className="text-xs font-extrabold text-emerald-600 hover:underline"
                    >
                      Show All Star Classes
                    </button>
                  </div>
                )}
              </div>
            )}

          </section>

        </div>
      )}

      {/* -------------------- 10. COMPREHENSIVE FOOTER -------------------- */}
      <footer className="bg-[#1a1a1a] text-slate-400 text-xs border-t border-slate-800">
        
        {/* Region country list */}
        <div className="border-b border-slate-800/80 py-8 bg-[#151515]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <span className="font-extrabold text-slate-300 uppercase tracking-widest text-[10px] block">Compare Flights and Hotels Globally</span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400">
              {["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Egypt", "Pakistan", "India", "Bangladesh", "Turkey", "Singapore", "Malaysia", "Australia"].map((country) => (
                <a 
                  key={country} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); triggerToast(`Switched region portal to Wego ${country}`); }}
                  className="hover:text-white transition-colors"
                >
                  Wego {country}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Brand details and links */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <span className="text-[#80D700] text-sm font-extrabold block">About Wego</span>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Room</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Advertise with Wego</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[#80D700] text-sm font-extrabold block">Explore</span>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Flights Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hotels Comparison</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wego App Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Blog Stories</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[#80D700] text-sm font-extrabold block">Partners</span>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Airlines Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hotel Networks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OTA Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Direct Booking APIs</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[#80D700] text-sm font-extrabold block">Legal & Support</span>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Help Center / FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800/80 py-6 text-center text-slate-500">
          <p>© 2026 Wego.pk - High Fidelity UI Clone. All flights and hotels data simulated for comparison demo.</p>
        </div>

      </footer>

    </div>
  );
}
