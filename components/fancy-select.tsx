"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FancySelectProps = {
  value: string;
  onChange: (val: string) => void;
  options: string[];
};

export function FancySelect({ value, onChange, options }: FancySelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // chiudi il menu cliccando fuori
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option: string) {
    onChange(option);
    setOpen(false);
  }

  return (
    <div
      ref={containerRef}
      className={cn("fancy-select", open && "fancy-select--open")}
    >
      <button
        type="button"
        className="fancy-select-trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="fancy-select-label">{value}</span>
        <span className="fancy-select-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" className="fancy-select-icon-svg">
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="fancy-select-menu">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className={cn(
                "fancy-select-option",
                option === value && "fancy-select-option--active"
              )}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
