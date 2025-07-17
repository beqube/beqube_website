"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface DesktopNavbarProps {
  isScrolled: boolean;
}

const DesktopNavbar = ({ isScrolled }: DesktopNavbarProps) => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "8369490500";
  const whatsappMessage =
    "I came across your website, I would like to have more information about your business";

  return (
    <nav
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg"
          : "bg-gray-200/20 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo-1.png"
              alt="Beqube Logo"
              width={200}
              height={100}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-bold text-xl transition-all duration-300 relative group ${
                  pathname === link.href
                    ? "text-[#2B337E]"
                    : "text-[#2B337E] hover:text-transparent bg-clip-text bg-gradient-to-r from-[#2B337E] to-[#4B5BD6]"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2B337E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Updated WhatsApp Button with Shimmer */}
          <div className="hidden md:flex">
            <a
              href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#2B337E] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2B337E] focus:ring-offset-2 focus:ring-offset-slate-50"
              style={{
                background:
                  "linear-gradient(110deg, #1a1f5c 45%, #444ec0 55%, #1a1f5c)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2s linear infinite",
              }}
              aria-label="Contact us via WhatsApp"
            >
              What&apos;s App
            </a>
            <style jsx>{`
              @keyframes shimmer {
                from {
                  background-position: 0 0;
                }
                to {
                  background-position: -200% 0;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
