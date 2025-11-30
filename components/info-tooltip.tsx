
"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type InfoTooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
};

export function InfoTooltip({ content, children }: InfoTooltipProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <span className="relative inline-block">
      <span
        tabIndex={0}
        role="button"
        aria-label="Info"
        className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold shadow hover:bg-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-300/40 transition cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {children}
      </span>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50"
            style={{ pointerEvents: 'none' }}
          >
            <div className="relative">
              <div className="rounded-lg bg-teal-900/95 backdrop-blur-sm text-white px-4 py-3 shadow-xl border border-teal-500/30 w-80 whitespace-normal break-words">
                {content}
              </div>
              {/* Arrow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-3 h-3">
                <svg width="12" height="12" viewBox="0 0 12 12" className="block rotate-180">
                  <polygon points="6,0 12,12 0,12" fill="#134e4a" fillOpacity="0.95" />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
