import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface FeedbackButtonProps {
  size?: "sm" | "md" | "lg";
}

export default function FeedbackButton({ size = "md" }: FeedbackButtonProps) {
  const label = "Feedback";
  const paddingX = size === "sm" ? "px-4" : size === "lg" ? "px-6" : "px-5";
  const paddingY = size === "sm" ? "py-2" : size === "lg" ? "py-3" : "py-2.5";

  return (
    <a
      href="/feedback"
      className={cn(
        "group cursor-pointer rounded-xl border-4 border-[#2B7A78] border-opacity-0 bg-transparent p-0.5 transition-all duration-300",
        "hover:border-opacity-100",
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center gap-3 overflow-hidden rounded-lg font-semibold transition-all",
          "bg-[#3AAFA9]",
          "text-[#17252A]",
          paddingX,
          paddingY,
          "font-display",
        )}
      >
        <span className="relative z-30 flex items-center gap-3">
          {label}
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
        </span>

        <div
          className={cn(
            "absolute left-0 top-0 h-full w-16 -rotate-[30deg] bg-white/10 pointer-events-none z-20",
            "transform -translate-x-full opacity-0 transition-transform transition-opacity duration-500",
            "group-hover:translate-x-full group-hover:opacity-100",
          )}
        />
      </div>
    </a>
  );
}
