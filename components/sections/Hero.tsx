"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const slides = [
    {
      image: "/images/banner1.jpg",
      headline: (
        <>
          Empowering Your
          <span className="block text-white">Real Estate Journey</span>
        </>
      ),
    },
    {
      image: "/images/banner2.jpg",
      headline: (
        <>
          Strategic Property Insights
          <span className="block text-white">Tailored for You</span>
        </>
      ),
    },
    {
      image: "/images/banner3.jpg",
      headline: (
        <>
          Building Dreams with
          <span className="block text-white">Expert Consultancy</span>
        </>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[calc(96vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Background Carousel with Zoom */}
      <div className="absolute inset-0 z-0">
        <div
          key={currentSlide}
          className="w-full h-full bg-cover bg-center animate-smooth-zoom transition-transform duration-[3000ms]"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/60 to-transparent backdrop-blur-[1px] z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up text-white">
            {slides[currentSlide].headline}
          </h1>

          {/* Optional CTA */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link
              href="/contact"
              className="btn-primary flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight size={20} />
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
