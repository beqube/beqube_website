"use client";
import {
  TrendingUp,
  Building2,
  Users,
  BarChart3,
  Database,
  Target,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Target,
      title: "Marketing",
      description:
        "Comprehensive marketing solutions including digital, traditional, and innovative strategies to boost your real estate brand.",
      extendedDescription:
        "Digital marketing, SEO, social media campaigns, print advertising, and targeted promotional strategies for maximum reach.",
      image: "/images/services1.jpg",
    },
    {
      icon: Users,
      title: "Residential Consultancy",
      description:
        "Expert guidance for buying, selling, and investing in residential properties with personalized solutions.",
      extendedDescription:
        "Professional home valuation, neighborhood analysis, and complete transaction support from start to finish.",
      image: "/images/services2.jpg",
    },
    {
      icon: Building2,
      title: "Commercial Advisory",
      description:
        "Strategic retail and commercial real estate solutions to maximize your property investments and returns.",
      extendedDescription:
        "Market positioning, lease negotiations, and investment optimization for commercial real estate success.",
      image: "/images/services3.jpg",
    },
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description:
        "In-depth market research and strategic advisory services to make data-driven real estate decisions.",
      extendedDescription:
        "Comprehensive market forecasting, risk assessment, and long-term investment strategy development.",
      image: "/images/services4.jpg",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description:
        "Advanced market analysis and trend forecasting to identify profitable investment opportunities.",
      extendedDescription:
        "Real-time market data, comparative analysis, and predictive modeling for informed decision making.",
      image: "/images/services5.jpg",
    },
    {
      icon: Database,
      title: "CRM Solutions",
      description:
        "Integrated customer relationship management systems to streamline your real estate business operations.",
      extendedDescription:
        "Automated lead tracking, client communication tools, and performance analytics for business growth.",
      image: "/images/services6.jpg",
    },
  ];

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Replace the getVisibleCards function with a memoized version
  const getVisibleCards = useCallback(() => (isMobile ? 1 : 3), [isMobile]);

  // Replace the getStartingIndex function with a memoized version
  const getStartingIndex = useCallback(
    () => getVisibleCards(),
    [getVisibleCards]
  );

  // Initialize with proper starting position
  useEffect(() => {
    setCurrentIndex(getStartingIndex());
  }, [isMobile, getStartingIndex]);

  // Update the nextSlide useCallback to include getVisibleCards in dependencies
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // Reset position after transition if we've gone past the original items
    setTimeout(() => {
      const visibleCards = getVisibleCards();
      const totalOriginalItems = services.length;
      const maxIndex = visibleCards + totalOriginalItems;

      setCurrentIndex((currentIdx) => {
        if (currentIdx >= maxIndex) {
          // Reset to the beginning of original items (after prefix)
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.7s ease-in-out";
              }
            }, 50);
          }
          return visibleCards;
        }
        return currentIdx;
      });
      setIsTransitioning(false);
    }, 700);
  }, [isTransitioning, services.length, getVisibleCards]);

  // Update the prevSlide useCallback to include getVisibleCards in dependencies
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);

    // Reset position after transition if we've gone before the original items
    setTimeout(() => {
      const visibleCards = getVisibleCards();
      const totalOriginalItems = services.length;

      setCurrentIndex((currentIdx) => {
        if (currentIdx < visibleCards) {
          // Reset to the end of original items
          if (carouselRef.current) {
            carouselRef.current.style.transition = "none";
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.7s ease-in-out";
              }
            }, 50);
          }
          return visibleCards + totalOriginalItems - 1;
        }
        return currentIdx;
      });
      setIsTransitioning(false);
    }, 700);
  }, [isTransitioning, services.length, getVisibleCards]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Update the goToSlide function to use the memoized getVisibleCards
  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    const visibleCards = getVisibleCards();
    setCurrentIndex(visibleCards + index);
  };

  const getCardWidth = () => {
    return isMobile ? 100 : 100 / 3;
  };

  const getTransformValue = () => {
    const cardWidth = getCardWidth();
    return currentIndex * cardWidth;
  };

  // Update the getActiveSlideIndex function to use the memoized getVisibleCards
  const getActiveSlideIndex = () => {
    const visibleCards = getVisibleCards();
    const adjustedIndex = currentIndex - visibleCards;
    return (
      ((adjustedIndex % services.length) + services.length) % services.length
    );
  };

  const getInfiniteServices = () => {
    const visibleCards = getVisibleCards();
    const totalOriginalItems = services.length;
    const prefix = services.slice(-visibleCards);
    const suffix = services.slice(0, visibleCards);
    return [...prefix, ...services, ...suffix];
  };

  const infiniteServices = getInfiniteServices();

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs
            and investment goals
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Services Grid with Animation */}
          <div
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${getTransformValue()}%)`,
            }}
          >
            {infiniteServices.map((service, index: number) => (
              <div
                key={`service-${index}`}
                className="flex-shrink-0 w-full lg:w-1/3 px-4"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-poppins text-xl font-semibold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.extendedDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === getActiveSlideIndex()
                  ? "bg-primary scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 4rem 0;
        }
        .container-custom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
        .text-primary {
          color: #2563eb;
        }
        .bg-primary {
          background-color: #2563eb;
        }
        .bg-primary\/10 {
          background-color: rgba(37, 99, 235, 0.1);
        }
        .bg-primary\/20 {
          background-color: rgba(37, 99, 235, 0.2);
        }
        .bg-primary\/30 {
          background-color: rgba(37, 99, 235, 0.3);
        }
        .hover\\:bg-primary\/90:hover {
          background-color: rgba(37, 99, 235, 0.9);
        }
      `}</style>
    </section>
  );
};

export default Services;
