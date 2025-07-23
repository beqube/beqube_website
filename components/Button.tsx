"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative inline-block px-6 py-3 text-[#2b337e] border-2 border-transparent text-base font-semibold uppercase tracking-wide transition-all duration-300 ${className}`}
    >
      <span className="relative z-10">{text}</span>

      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#2b337e] transition-all duration-300"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#2b337e] origin-bottom transition-all duration-300 group-hover:h-full group-hover:delay-150"></span>
      <span className="absolute bottom-0 right-0 w-0.5 h-0 bg-[#2b337e] origin-bottom transition-all duration-300 group-hover:h-full group-hover:delay-150"></span>
      <span className="absolute top-0 left-0 w-0 h-0.5 bg-[#2b337e] transition-all duration-300 group-hover:w-full group-hover:delay-300"></span>
      <span className="absolute top-0 right-0 w-0 h-0.5 bg-[#2b337e] transition-all duration-300 group-hover:w-full group-hover:delay-300"></span>

      <span className="absolute inset-0 border-2 border-transparent transition-all duration-300 pointer-events-none"></span>
    </button>
  );
};

export default Button;
