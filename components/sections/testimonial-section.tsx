"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    company: "Regency",
    logo: "/images/testimonials/regency.webp",
    testimonial:
      "Their expertise in commercial real estate helped us secure prime locations for our retail chain. The team's market insights and negotiation skills are exceptional.",
    name: "Regency",
  },
  {
    id: 2,
    company: "Panchratna",
    logo: "/images/testimonials/pancharatna-s.png",
    testimonial:
      "Outstanding service in residential property consulting. They guided us through complex zoning regulations and helped maximize our investment returns.",
    name: "",
  },
  {
    id: 3,
    company: "Runwal garden city",
    logo: "/images/testimonials/runwal-garden.png",
    testimonial:
      "Professional, reliable, and results-driven. Their market analysis and property valuation services have been instrumental in our portfolio growth.",
    name: "",
  },
  {
    id: 4,
    company: "Magus city",
    logo: "/images/testimonials/magus.jpg",
    testimonial:
      "Exceptional knowledge of luxury real estate markets. They helped us navigate high-value transactions with confidence and precision.",
    name: "",
  },
  {
    id: 5,
    company: "Kohinoor eden",
    logo: "/images/testimonials/kohinoor.png",
    testimonial:
      "Their sustainable development consulting transformed our approach to eco-friendly construction. Truly forward-thinking professionals.",
    name: "",
  },
];

export default function TestimonialSection() {
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<number>>(
    new Set()
  );

  const toggleTestimonial = (id: number) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTestimonials(newExpanded);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/images/testimonials-bg.webp')] bg-cover bg-center bg-no-repeat opacity-[20]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white/85 to-blue-50/80"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="font-montserrat text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#2b337e" }}
          >
            What Our Clients Say
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading developers, investors, and property owners across
            the region
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            className="flex gap-6 animate-scroll"
            style={{
              animationPlayState: "running",
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 md:w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#2b337e] hover:border-opacity-30"
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center h-24 md:h-36 mb-4">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    width={160}
                    height={80}
                    className="max-h-16 md:max-h-20 w-auto object-contain opacity-80"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="mb-4 min-h-[4rem]">
                  <blockquote
                    className={`text-gray-700 text-sm md:text-base leading-relaxed ${
                      !expandedTestimonials.has(testimonial.id)
                        ? "line-clamp-4"
                        : ""
                    }`}
                  >
                    {'"'}
                    {testimonial.testimonial}
                    {'"'}
                  </blockquote>
                  {testimonial.testimonial.length > 150 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTestimonial(testimonial.id);
                      }}
                      className="text-xs mt-1 text-gray-500 hover:text-[#2b337e] transition-colors duration-200 flex items-center gap-1"
                    >
                      {expandedTestimonials.has(testimonial.id) ? (
                        <>
                          <span>Show less</span>
                          <span className="text-[10px]">▲</span>
                        </>
                      ) : (
                        <>
                          <span>...</span>
                          <span className="text-[10px]">▼</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Company Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "#2b337e" }}
                    ></div>
                    <div>
                      <p className="font-montserrat font-bold text-gray-900 text-base md:text-lg">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial) => (
              <div
                key={`duplicate-${testimonial.id}`}
                className="flex-shrink-0 w-80 md:w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#2b337e] hover:border-opacity-30"
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center h-20 md:h-24 mb-4">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    width={160}
                    height={80}
                    className="max-h-16 md:max-h-20 w-auto object-contain opacity-80"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="mb-4 min-h-[4rem]">
                  <blockquote
                    className={`text-gray-700 text-sm md:text-base leading-relaxed ${
                      !expandedTestimonials.has(testimonial.id)
                        ? "line-clamp-4"
                        : ""
                    }`}
                  >
                    {'"'}
                    {testimonial.testimonial}
                    {'"'}
                  </blockquote>
                  {testimonial.testimonial.length > 150 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTestimonial(testimonial.id);
                      }}
                      className="text-xs mt-1 text-gray-500 hover:text-[#2b337e] transition-colors duration-200 flex items-center gap-1"
                    >
                      {expandedTestimonials.has(testimonial.id) ? (
                        <>
                          <span>Show less</span>
                          <span className="text-[10px]">▲</span>
                        </>
                      ) : (
                        <>
                          <span>...</span>
                          <span className="text-[10px]">▼</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Company Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <div
                      className="w-2 h-2 rounded-full mr-3"
                      style={{ backgroundColor: "#2b337e" }}
                    ></div>
                    <div>
                      <p className="font-montserrat font-bold text-gray-900 text-base md:text-lg">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: calc(200% + 1.5rem);
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 45s linear infinite;
          }
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
