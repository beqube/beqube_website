"use client";
import type React from "react";
import Image from "next/image";

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
            className="absolute flex items-center justify-center border-2 shadow-2xl opacity-90"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `translateZ(${size / 2}px)`,
              background:
                "linear-gradient(135deg, #2b337e 0%, #4c5fd7 50%, #7c3aed 100%)",
              borderColor: "#fbbf24",
              boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
            }}
          >
            <Image
              src={logoPath || "/placeholder.svg"}
              alt={logoAlt}
              width={size * 2.5}
              height={size * 2.5}
              className="object-contain"
            />
          </div>

          {/* Back Face */}
          <div
            className="absolute flex items-center justify-center border-2 shadow-2xl opacity-90"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotateY(180deg) translateZ(${size / 2}px)`,
              background:
                "linear-gradient(135deg, #2b337e 0%, #4c5fd7 50%, #7c3aed 100%)",
              borderColor: "#fbbf24",
              boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
            }}
          >
            <Image
              src={logoPath || "/placeholder.svg"}
              alt={logoAlt}
              width={size * 2.5}
              height={size * 2.5}
              className="object-contain"
            />
          </div>

          {/* Right Face */}
          <div
            className="absolute flex items-center justify-center border-2 shadow-2xl opacity-90"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotateY(90deg) translateZ(${size / 2}px)`,
              background:
                "linear-gradient(135deg, #2b337e 0%, #4c5fd7 50%, #7c3aed 100%)",
              borderColor: "#fbbf24",
              boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
            }}
          >
            <Image
              src={logoPath || "/placeholder.svg"}
              alt={logoAlt}
              width={size * 2.5}
              height={size * 2.5}
              className="object-contain"
            />
          </div>

          {/* Left Face */}
          <div
            className="absolute flex items-center justify-center border-2 shadow-2xl opacity-90"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
              background:
                "linear-gradient(135deg, #2b337e 0%, #4c5fd7 50%, #7c3aed 100%)",
              borderColor: "#fbbf24",
              boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
            }}
          >
            <Image
              src={logoPath || "/placeholder.svg"}
              alt={logoAlt}
              width={size * 2.5}
              height={size * 2.5}
              className="object-contain"
            />
          </div>

          {/* Top Face */}
          <div
            className="absolute flex items-center justify-center border-2 shadow-2xl opacity-90"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotateX(90deg) translateZ(${size / 2}px)`,
              background:
                "linear-gradient(135deg, #2b337e 0%, #4c5fd7 50%, #7c3aed 100%)",
              borderColor: "#fbbf24",
              boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
            }}
          >
            <Image
              src={logoPath || "/placeholder.svg"}
              alt={logoAlt}
              width={size * 2.5}
              height={size * 2.5}
              className="object-contain"
            />
          </div>

          {/* Bottom Face */}
          <div
            className="absolute flex items-center justify-center border-2 shadow-2xl opacity-90"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
              background:
                "linear-gradient(135deg, #2b337e 0%, #4c5fd7 50%, #7c3aed 100%)",
              borderColor: "#fbbf24",
              boxShadow: "0 0 50px rgba(251, 191, 36, 0.3)",
            }}
          >
            <Image
              src={logoPath || "/placeholder.svg"}
              alt={logoAlt}
              width={size * 2.5}
              height={size * 2.5}
              className="object-contain"
            />
          </div>
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
