"use client";

import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import NewsCard from "./NewsCard";
import { latestNews } from "@/lib/data";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function LatestNews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Her tıklamada kaydırılacak piksel miktarı
      const container = scrollContainerRef.current;

      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl font-light text-[var(--color-text-primary)] flex items-center">
            <Clock className="h-8 w-8 mr-3" />
            Haberler
          </h3>
          <Link
            to="/news"
            className="flex items-center text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-tertiary)] transition-colors group"
          >
            Tümünü Gör
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal Scrollable News Cards with Navigation Buttons */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-horizontal"
          >
            <div className="flex space-x-6" style={{ width: "max-content" }}>
              {latestNews.map((news) => (
                <NewsCard key={news.id} news={news} referrer="home" />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 bg-[var(--color-backdrop-light)] p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-colors opacity-85 hover:opacity-100"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--color-text-primary)]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] -translate-y-1/2 bg-[var(--color-backdrop-light)] p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-colors opacity-85 hover:opacity-100"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-6 h-6 text-[var(--color-text-primary)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
