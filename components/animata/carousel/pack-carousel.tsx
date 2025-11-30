"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ICarouselItem {
  id: number;
  title: string;
  description?: string;
  image: string;
  comingSoon?: boolean;
}

interface IImageCarouselProps {
  items: ICarouselItem[];
  onPackChange?: (pack: ICarouselItem) => void;
}

export default function PackCarousel({ items: initialItems, onPackChange }: IImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialItems.length === 1 ? 0 : 1);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % initialItems.length;
    setCurrentIndex(newIndex);
    if (onPackChange) {
      onPackChange(initialItems[newIndex]);
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + initialItems.length) % initialItems.length;
    setCurrentIndex(newIndex);
    if (onPackChange) {
      onPackChange(initialItems[newIndex]);
    }
  };

  // If only one item, just show it centered
  const visibleItems = initialItems.length === 1
    ? [initialItems[0]]
    : [
        initialItems[(currentIndex - 1 + initialItems.length) % initialItems.length],
        initialItems[currentIndex],
        initialItems[(currentIndex + 1) % initialItems.length],
      ];

  const currentItem = initialItems.length === 1 ? initialItems[0] : visibleItems[1];

  // Notify parent of initial pack on mount
  React.useEffect(() => {
    if (onPackChange && initialItems[currentIndex]) {
      onPackChange(initialItems[currentIndex]);
    }
  }, []);

  return (
    <div className="space-y-3">
      {/* Carousel Container */}
      <div className="carousel-container relative h-[140px] w-full overflow-visible">
        {initialItems.length > 1 && (
          <>
            <div
              onClick={handlePrev}
              className="navigation-item-left absolute left-0 top-[50%] z-20 flex h-6 w-6 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              <ChevronLeft className="text-white/80 h-3 w-3" />
            </div>
            <div
              onClick={handleNext}
              className="navigation-item-right absolute right-0 top-[50%] z-20 flex h-6 w-6 translate-y-[-50%] cursor-pointer items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
            >
              <ChevronRight className="text-white/80 h-3 w-3" />
            </div>
          </>
        )}
        {visibleItems.map((item, index) => {
          const isSingleItem = initialItems.length === 1;
          const isCenterItem = isSingleItem ? true : index === 1;

          return (
            <div
              key={`${item.id}-${index}`}
              className="absolute left-[50%] top-[0%] z-10 h-[125px] w-[95px] animate-fadeIn rounded-xl shadow-2xl border border-white/10 overflow-hidden"
              style={{
                transform: isCenterItem
                  ? "translateX(-50%) scale(1.1)"
                  : index === 0
                    ? "translateX(-145%) rotate(-15deg) scale(0.85)"
                    : "translateX(45%) rotate(15deg) scale(0.85)",
                transition: "transform 0.5s ease, filter 0.5s ease, opacity 0.5s ease",
                filter: isCenterItem ? "none" : "blur(3px)",
                opacity: isCenterItem ? 1 : 0.6,
                zIndex: isCenterItem ? 3 : 1,
              }}
            >
            {/* Background Image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Overlay Gradient - più scuro per maggiore contrasto */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />

            {/* Blur extra per coming soon */}
            {item.comingSoon && (
              <div className="absolute inset-0 backdrop-blur-[3px] z-5" />
            )}

            {/* Title Overlay - centrato verticalmente e orizzontalmente */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-2 z-10">
              <h3
                className="text-sm font-display font-bold text-white text-center leading-tight"
                style={{
                  textShadow: '0 0 8px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1), -1px -1px 2px rgba(0,0,0,0.8)',
                  WebkitTextStroke: '0.5px rgba(0,0,0,0.5)'
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
          );
        })}
      </div>

      {/* Description Below Carousel */}
      {currentItem?.description && (
        <div className="text-center px-2 mt-3 space-y-1.5">
          <p className="text-xs text-white/80 leading-relaxed">
            {currentItem.description}
          </p>
          {initialItems.length === 1 && (
            <p className="text-xs text-teal-400 font-medium">
              More packs coming soon
            </p>
          )}
        </div>
      )}
    </div>
  );
}
