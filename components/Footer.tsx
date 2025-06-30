import Link from "next/link";
import Image from "next/image";
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
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo - Aligned with column heading and link height */}
          <div className="flex flex-col items-start justify-start">
            <Image
              src="/images/Logo-footer.png"
              alt="Beqube Consultancy Logo"
              width={300}
              height={340}
              className="object-contain"
              priority
            />
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <div className="h-[60px] flex items-center justify-center md:justify-start">
              <h3 className="font-poppins font-semibold text-xl text-yellow-400">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2 text-base">
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

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="h-[60px] flex items-center justify-center md:justify-start">
              <h3 className="font-poppins font-semibold text-xl text-yellow-400">
                Contact Info
              </h3>
            </div>
            <div className="space-y-3 text-base">
              <div className="flex items-center space-x-3 group justify-center md:justify-start">
                <MapPin
                  size={18}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Kalyan
                </span>
              </div>
              <div className="flex items-center space-x-3 group justify-center md:justify-start">
                <Phone
                  size={18}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  8369490500
                </span>
              </div>
              <div className="flex items-center space-x-3 group justify-center md:justify-start">
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

          {/* Social Media Icons */}
          <div className="space-y-4 text-center md:text-left">
            <div className="h-[60px] flex items-center justify-center md:justify-start">
              <h3 className="font-poppins font-semibold text-xl text-yellow-400">
                Connect
              </h3>
            </div>
            <div className="flex space-x-5 justify-center md:justify-start">
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
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-500 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm ">
            © {new Date().getFullYear()} Beqube Consultancy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
