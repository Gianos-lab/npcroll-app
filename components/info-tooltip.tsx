
"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type InfoTooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
};

export function InfoTooltip({ content, children }: InfoTooltipProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  // Check if mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close when clicking outside on mobile
  React.useEffect(() => {
    if (!open || !isMobile) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open, isMobile]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <span ref={containerRef} className="relative inline-block">
      <span
        tabIndex={0}
        role="button"
        aria-label="Info"
        aria-expanded={open}
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold shadow hover:bg-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-300/40 transition cursor-pointer touch-manipulation"
        onMouseEnter={() => !isMobile && handleOpen()}
        onMouseLeave={() => !isMobile && handleClose()}
        onFocus={() => !isMobile && handleOpen()}
        onBlur={() => !isMobile && handleClose()}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        {children}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 z-[100]"
          >
            <div className="relative">
              <div className="rounded-lg bg-teal-900/95 backdrop-blur-sm text-white px-4 py-3 shadow-xl border border-teal-500/30 w-64 sm:w-72 md:w-80 whitespace-normal break-words text-sm">
                {content}
              </div>
              {/* Arrow pointing up */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full w-3 h-2">
                <svg width="12" height="8" viewBox="0 0 12 8" className="block">
                  <polygon points="6,0 12,8 0,8" fill="#134e4a" fillOpacity="0.95" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
