"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import NewsCard from "./NewsCard";
import { getCategoryNews } from "@/lib/utils";
import { useRef } from "react";

interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
  views: string;
  author: string;
  tags: string[];
  date: string;
  content?: string;
}

interface CategoryNewsProps {
  category: string;
  title?: string;
  categorySlug?: string;
  news?: NewsItem[];
}

export default function CategoryNews({
  category,
  title,
  categorySlug,
  news: propNews,
}: CategoryNewsProps) {
  const news = propNews || getCategoryNews(category);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (news.length === 0) {
    return null;
  }

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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-light text-[var(--color-text-primary)]">
            {title || `${category} Haberleri`}
          </h3>
          <a
            href="/news"
            className="flex items-center text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-tertiary)] transition-colors group"
          >
            Tüm Haberler
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Horizontal Scrollable News Cards with Navigation Buttons */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
          >
            <div className="flex space-x-6" style={{ width: "max-content" }}>
              {news.map((newsItem: NewsItem) => (
                <NewsCard
                  key={newsItem.id}
                  news={newsItem}
                  referrer="category"
                  categorySlug={categorySlug}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 bg-[var(--color-backdrop-light)] p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-colors opacity-85 hover:opacity-100"
            aria-label="Önceki"
          >
            <ChevronLeft className="h-6 w-6 text-[var(--color-text-primary)]" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-[40%] -translate-y-1/2 bg-[var(--color-backdrop-light)] p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-colors opacity-85 hover:opacity-100"
            aria-label="Sonraki"
          >
            <ChevronRight className="h-6 w-6 text-[var(--color-text-primary)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
