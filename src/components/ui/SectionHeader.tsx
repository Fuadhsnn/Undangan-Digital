import React from "react";
import { cn } from "@/lib/utils";
import { IslamicOrnament } from "./IslamicOrnament";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  showOrnament?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  className,
  showOrnament = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-8 sm:mb-10", className)}>
      {badge && (
        <p className="text-xs font-semibold tracking-[0.2em] text-[#9C7A4A] uppercase mb-2">
          {badge}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-serif text-[#2D4030] font-semibold tracking-tight">
        {title}
      </h2>
      {showOrnament && <IslamicOrnament className="my-3" />}
      {subtitle && (
        <p className="text-sm sm:text-base text-[#58635B] max-w-md mx-auto leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
