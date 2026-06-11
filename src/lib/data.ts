export interface Destination {
  id: number;
  name: string;
  country: string;
  price: string;
  image: string;
}

export interface Deal {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export const popularDestinations: Destination[] = [
  {
    id: 1,
    name: "Dubai",
    country: "United Arab Emirates",
    price: "PKR 48,500",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Istanbul",
    country: "Turkey",
    price: "PKR 98,200",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "London",
    country: "United Kingdom",
    price: "PKR 142,000",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Murree",
    country: "Pakistan",
    price: "PKR 8,500",
    image: "https://images.unsplash.com/photo-1627914022880-99933fc0f065?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Bangkok",
    country: "Thailand",
    price: "PKR 62,300",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Jeddah",
    country: "Saudi Arabia",
    price: "PKR 76,900",
    image: "https://images.unsplash.com/photo-1561746416-d35508a8ebc5?auto=format&fit=crop&w=600&q=80",
  },
];

export const valueProps = [
  {
    title: "Search Flights & Hotels",
    description: "Compare over 1,000 online travel sites and get the best prices instantly.",
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/flight_363374043.png",
  },
  {
    title: "Local & Secure Payments",
    description: "Book in local currency PKR with trusted payment methods and security.",
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/pay_363374094.png",
  },
  {
    title: "24/7 Premium Support",
    description: "Our support team is always ready to assist you before, during, and after your trip.",
    image: "https://zen.wego.com/cdn-cgi/image/format=auto/cms/images/support_363374119.png",
  },
];

export const footerLinks = {
  company: [
    { label: "About Wego", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  explore: [
    { label: "Flights", href: "#" },
    { label: "Hotels", href: "#" },
    { label: "Popular Routes", href: "#" },
    { label: "Travel Destinations", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Feedback", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
