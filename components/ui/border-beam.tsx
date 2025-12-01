"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
}

/**
 * BorderBeam - An animated border glow effect.
 * Shows a rotating gradient border around the element.
 */
export function BorderBeam({
  className,
  duration = 6,
  colorFrom = "#3AAFA9",
  colorTo = "#2B7A78",
}: BorderBeamProps) {
  return (
    <>
      {/* Outer rotating gradient - sits behind content */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-[2px] rounded-xl z-0 overflow-hidden",
          className
        )}
      >
        <div
          className="absolute inset-[-50%] animate-spin origin-center"
          style={{
            animationDuration: `${duration}s`,
            animationTimingFunction: "linear",
            background: `conic-gradient(from 0deg, transparent 0deg, ${colorFrom} 60deg, ${colorTo} 120deg, transparent 180deg)`,
          }}
        />
      </div>
    </>
  );
}