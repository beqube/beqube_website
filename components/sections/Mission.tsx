"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const Mission = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  const isMissionInView = useInView(missionRef, { once: false, amount: 0.3 });
  const isVisionInView = useInView(visionRef, { once: false, amount: 0.3 });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Overlay with Mission Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(43, 51, 126, 0.9), rgba(43, 51, 126, 0.7)), url('/images/mission-vision.jpeg')`,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 container-custom text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left">
            {/* Mission - Slides in from left */}
            <div
              ref={missionRef}
              className="space-y-6 overflow-hidden"
              style={{
                transform: isMissionInView
                  ? "translateX(0%)"
                  : "translateX(-100%)",
                opacity: isMissionInView ? 1 : 0,
                transition: "transform 1.5s ease-out, opacity 1s ease-in",
              }}
            >
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                To provide exceptional real estate consultancy services with our
                seasoned leadership in delivering personalized, transparent and
                innovative real-estate solutions—empowering clients with
                confidence, clarity and superior investment outcomes
              </p>
            </div>

            {/* Vision - Slides in from right */}
            <div
              ref={visionRef}
              className="space-y-6 overflow-hidden"
              style={{
                transform: isVisionInView
                  ? "translateX(0%)"
                  : "translateX(100%)",
                opacity: isVisionInView ? 1 : 0,
                transition: "transform 1.5s ease-out, opacity 1s ease-in",
              }}
            >
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                To be the trusted leader in the industry - where unwavering
                integrity, relentless commitment and tenacious grit drive us to
                exceed expectations, build lasting partnerships and deliver
                exceptional outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
