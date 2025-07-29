"use client";
import type React from "react";

interface RotatingCubeProps {
  logoPath?: string;
  logoAlt?: string;
  size?: number;
}

const RotatingCube: React.FC<RotatingCubeProps> = ({
  logoPath = "/images/logo.png",
  logoAlt = "Company Logo",
  size = 200,
}) => {
  const faceStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundImage: `url(${logoPath})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderColor: "#fbbf24",
    boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
  };

  return (
    <div className="flex justify-center items-center py-12">
      <div
        className="group"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          perspective: "800px",
        }}
      >
        <div
          className="relative w-full h-full animate-spin-3d group-hover:animate-pause"
          style={{
            transformStyle: "preserve-3d",
            animation: "rotate3d 15s infinite linear",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute border-2 shadow-2xl opacity-90"
            style={{
              ...faceStyle,
              transform: `translateZ(${size / 2}px)`,
            }}
          />
          {/* Back Face */}
          <div
            className="absolute border-2 shadow-2xl opacity-90"
            style={{
              ...faceStyle,
              transform: `rotateY(180deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Right Face */}
          <div
            className="absolute border-2 shadow-2xl opacity-90"
            style={{
              ...faceStyle,
              transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Left Face */}
          <div
            className="absolute border-2 shadow-2xl opacity-90"
            style={{
              ...faceStyle,
              transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Top Face */}
          <div
            className="absolute border-2 shadow-2xl opacity-90"
            style={{
              ...faceStyle,
              transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            }}
          />
          {/* Bottom Face */}
          <div
            className="absolute border-2 shadow-2xl opacity-90"
            style={{
              ...faceStyle,
              transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            }}
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes rotate3d {
          0% {
            transform: rotateX(0) rotateY(0) rotateZ(0);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
        .animate-spin-3d {
          animation: rotate3d 15s infinite linear;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default RotatingCube;
