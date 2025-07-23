"use client";

import Link from "next/link";
import Image from "next/image";
import RotatingCube from "../components/RotatingCube";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-[#2B337E]/80 text-white">
      <div className="container-custom py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 items-center">
          {/* Logo Cube - Centered on mobile, aligned left on desktop */}
          <div className="flex flex-col items-center md:items-left justify-start px-4 md:px-0">
            <RotatingCube
              logoPath="/images/Logo-footer.png"
              logoAlt="Beqube Consultancy Logo"
              size={100}
            />
          </div>

          {/* Quick Links - Aligned to start vertically */}
          <div className="text-center md:text-left flex flex-col justify-start">
            <h3 className="font-montserrat font-semibold text-lg md:text-xl text-yellow-400 mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm md:text-lg">
              {["Home", "About Us", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" us", "")}`
                    }
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Aligned to start vertically */}
          <div className="text-center md:text-left flex flex-col justify-start">
            <h3 className="font-montserrat font-semibold text-lg md:text-xl text-yellow-400 mb-2">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex items-center space-x-2 group justify-center md:justify-start">
                <MapPin
                  size={18}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Kalyan
                </span>
              </div>
              <div className="flex items-center space-x-2 group justify-center md:justify-start">
                <Phone
                  size={18}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  8369490500
                </span>
              </div>
              <div className="flex items-center space-x-2 group justify-center md:justify-start">
                <Mail
                  size={18}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Be.Beqube@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Icons - Aligned to start vertically */}
          <div className="text-center md:text-left flex flex-col justify-start">
            <h3 className="font-montserrat font-semibold text-lg md:text-xl text-yellow-400 mb-2">
              Connect
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
                >
                  <Icon size={25} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-500 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Beqube Consultancy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
