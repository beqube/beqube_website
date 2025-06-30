import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beqube Consultancy - Premier Real Estate Consultancy Services",
    template: "%s | Beqube Consultancy",
  },
  description:
    "Leading real estate consultancy firm specializing in residential, retail, and commercial property advisory services. Expert guidance for property investment, market analysis, and strategic real estate solutions.",
  keywords: [
    "real estate consultancy",
    "property advisory",
    "residential real estate",
    "commercial property",
    "retail real estate",
    "property investment",
    "market analysis",
    "real estate strategy",
  ],
  authors: [{ name: "Beqube Consultancy" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beqube.com",
    siteName: "Beqube Consultancy",
    title: "Beqube Consultancy - Premier Real Estate Consultancy Services",
    description:
      "Leading real estate consultancy firm specializing in residential, retail, and commercial property advisory services.",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B337E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font links removed; using next/font/google for font optimization */}
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main className="min-h-screen pt-20  md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
