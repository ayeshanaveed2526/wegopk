import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wego.pk - The #1 Travel Booking Website For Flights & Hotel Deals",
  description: "Book your flights & hotels on Wego.pk ✈ Compare over 1000 booking sites ✓ Find the lowest price ✓ Fast & easy booking ✓ Find out more now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
