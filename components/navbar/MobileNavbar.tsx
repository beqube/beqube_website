"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
}

const MobileNavbar = ({ isOpen, setIsOpen, isScrolled }: MobileNavbarProps) => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "8451951123";
  const whatsappMessage =
    "I came across your website, I would like to have more information about your business";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-effect shadow-lg"
            : "bg-gray-100/20 backdrop-blur-sm"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo-1.png"
                alt="Beqube Logo"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#2B337E] hover:text-[#4B5BD6] transition-colors duration-300 relative z-60"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-0 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 top-2.5" : ""
                  }`}
                />
                <span
                  className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 top-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide Menu */}
        <div
          className={`absolute top-20 left-0 h-[calc(100%-4rem)] w-80 max-w-[85vw] bg-primary shadow-2xl transform transition-all duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-bold transition-all duration-300 transform hover:translate-x-2 ${
                      pathname === link.href
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* WhatsApp Button with Shimmer */}
            <div className="p-6 border-t border-white/20">
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2 border border-[#2B337E]"
                style={{
                  background:
                    "linear-gradient(110deg, #1a1f5c 45%, #8A94FF 55%, #1a1f5c)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2s linear infinite",
                }}
              >
                <MessageCircle size={20} />
                <span>What&apos;s App</span>
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
      </div>
    </>
  );
};

export default MobileNavbar;
