"use client";
import type React from "react";

interface NewRotatingCubeProps {
  logoPath?: string;
  logoAlt?: string;
  size?: number;
}

const NewRotatingCube: React.FC<NewRotatingCubeProps> = ({
  logoPath = "/images/logo.png",
  logoAlt = "Company Logo",
  size = 100,
}) => {
  return (
    <div className="flex justify-center items-center py-12">
      <div
        className="cube-container"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          perspective: "800px",
        }}
      >
        <div className="cube">
          {/* Front Face */}
          <div
            className="cube-face front"
            style={{
              backgroundImage: `url(${logoPath})`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {/* Back Face */}
          <div
            className="cube-face back"
            style={{
              backgroundImage: `url(${logoPath})`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {/* Right Face */}
          <div
            className="cube-face right"
            style={{
              backgroundImage: `url(${logoPath})`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {/* Left Face */}
          <div
            className="cube-face left"
            style={{
              backgroundImage: `url(${logoPath})`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {/* Top Face */}
          <div
            className="cube-face top"
            style={{
              backgroundImage: `url(${logoPath})`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
          {/* Bottom Face */}
          <div
            className="cube-face bottom"
            style={{
              backgroundImage: `url(${logoPath})`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .cube-container {
          perspective: 800px;
        }

        .cube {
          position: relative;
          width: ${size}px;
          height: ${size}px;
          transform-style: preserve-3d;
          animation: rotateCube 15s infinite linear;
        }

        .cube:hover {
          animation-play-state: paused;
        }

        .cube-face {
          position: absolute;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid #fbbf24;
          box-shadow: 0 0 50px rgba(251, 191, 36, 0.3);
          opacity: 0.9;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .front {
          transform: translateZ(${size / 2}px);
        }

        .back {
          transform: rotateY(180deg) translateZ(${size / 2}px);
        }

        .right {
          transform: rotateY(90deg) translateZ(${size / 2}px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(${size / 2}px);
        }

        .top {
          transform: rotateX(90deg) translateZ(${size / 2}px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(${size / 2}px);
        }

        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NewRotatingCube;
