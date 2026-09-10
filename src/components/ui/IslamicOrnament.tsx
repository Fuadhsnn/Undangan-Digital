import React from "react";
import { cn } from "@/lib/utils";

interface IslamicOrnamentProps {
  className?: string;
  variant?: "divider" | "badge" | "corner";
}

export function IslamicOrnament({
  className,
  variant = "divider",
}: IslamicOrnamentProps) {
  if (variant === "divider") {
    return (
      <div
        className={cn(
          "flex items-center justify-center space-x-3 my-4 opacity-80",
          className
        )}
        aria-hidden="true"
      >
        <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#9C7A4A] to-[#9C7A4A]/50" />
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-[#9C7A4A] flex-shrink-0"
        >
          {/* Subtle 8-pointed star / Rub el Hizb ornament */}
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            transform="rotate(45 12 12)"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
          />
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
          />
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
        <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#9C7A4A] to-[#9C7A4A]/50" />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className={cn("text-[#9C7A4A]", className)}
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          transform="rotate(45 12 12)"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.15" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  return null;
}
