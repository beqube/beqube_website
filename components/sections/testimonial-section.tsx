"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    company: "Urban Developers Ltd",
    logo: "/placeholder.svg?height=60&width=120",
    testimonial:
      "Their expertise in commercial real estate helped us secure prime locations for our retail chain. The team's market insights and negotiation skills are exceptional.",
    name: "Sarah Johnson",
  },
  {
    id: 2,
    company: "Metro Housing Corp",
    logo: "/placeholder.svg?height=60&width=120",
    testimonial:
      "Outstanding service in residential property consulting. They guided us through complex zoning regulations and helped maximize our investment returns.",
    name: "Michael Chen",
  },
  {
    id: 3,
    company: "Skyline Investments",
    logo: "/placeholder.svg?height=60&width=120",
    testimonial:
      "Professional, reliable, and results-driven. Their market analysis and property valuation services have been instrumental in our portfolio growth.",
    name: "Emily Rodriguez",
  },
  {
    id: 4,
    company: "Heritage Properties",
    logo: "/placeholder.svg?height=60&width=120",
    testimonial:
      "Exceptional knowledge of luxury real estate markets. They helped us navigate high-value transactions with confidence and precision.",
    name: "David Thompson",
  },
  {
    id: 5,
    company: "Green Valley Estates",
    logo: "/placeholder.svg?height=60&width=120",
    testimonial:
      "Their sustainable development consulting transformed our approach to eco-friendly construction. Truly forward-thinking professionals.",
    name: "Lisa Park",
  },
];

export default function TestimonialSection() {
  const [isPaused, setIsPaused] = useState(false);
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
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 animate-scroll"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 md:w-96 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-[#2b337e] hover:border-opacity-30"
              >
                {/* Company Logo */}
                <div className="flex items-center justify-center h-20 mb-4">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain opacity-80"
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
                      <p className="font-montserrat font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p
                        className="text-sm md:text-xs"
                        style={{ color: "#2b337e" }}
                      >
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
                <div className="flex items-center justify-center h-20 mb-4">
                  <Image
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={`${testimonial.company} logo`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto object-contain opacity-80"
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
                      <p className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs" style={{ color: "#2b337e" }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-20"></div> */}
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
