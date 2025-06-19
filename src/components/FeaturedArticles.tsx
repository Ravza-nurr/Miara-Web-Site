"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import ArticleGrid from "./ArticleGrid";
import {
  featuredArticles,
  fashionArticles,
  beautyArticles,
  horoscopeArticles,
  cultureArticles,
} from "@/lib/data";

export default function FeaturedArticles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllArticles, setShowAllArticles] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Tüm kategorilerden hot makaleleri birleştir
  const allHotArticles = [
    ...featuredArticles.filter((article) => article.isHot),
    ...fashionArticles.filter((article) => article.isHot),
    ...beautyArticles.filter((article) => article.isHot),
    ...horoscopeArticles.filter((article) => article.isHot),
  ];

  // Tüm kategorilerden tüm makaleleri birleştir
  const allArticles = [
    ...featuredArticles,
    ...fashionArticles,
    ...beautyArticles,
    ...horoscopeArticles,
    ...cultureArticles,
  ];

  const displayArticles = showAllArticles ? allArticles : allHotArticles;

  const getCategorySlug = (category: string) => {
    switch (category) {
      case "Moda":
        return "fashion";
      case "Güzellik":
        return "beauty";
      case "Kültür & Yaşam":
        return "lifestyle";
      case "Burçlar":
        return "horoscope";
      default:
        return "fashion";
    }
  };

  const getArticleUrl = (article: any) => {
    return `/${getCategorySlug(article.category)}/${article.id}?from=home`;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allHotArticles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allHotArticles.length) % allHotArticles.length
    );
  };

  useEffect(() => {
    if (!showAllArticles) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [showAllArticles]);

  useEffect(() => {
    if (scrollContainerRef.current && !showAllArticles) {
      const container = scrollContainerRef.current;
      const slideWidth = container.offsetWidth;
      container.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, showAllArticles]);

  return (
    <div className="lg:col-span-3" id="featured-articles">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-3xl font-light text-[var(--color-text-primary)]">
          Öne Çıkan Makaleler
        </h3>
        <Link
          href="/all-articles"
          className="flex items-center text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-tertiary)] transition-colors group"
        >
          Tümünü Gör
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {showAllArticles ? (
        <ArticleGrid articles={allArticles} />
      ) : (
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth"
          >
            {allHotArticles.map((article) => (
              <div key={article.id} className="flex-shrink-0 w-full">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 md:h-120 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-dark)] via-[var(--color-overlay-medium)] to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-text-white)]">
                    <span className="inline-block bg-[var(--color-blue-accent)] text-[var(--color-text-white)] px-3 py-1 text-sm font-medium rounded-full mb-4">
                      {article.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span>{article.readTime}</span>
                        <span>{article.views} görüntüleme</span>
                      </div>
                      <Link
                        href={getArticleUrl(article)}
                        className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-4 py-2 rounded-full hover:bg-[var(--color-hover-primary)] transition-colors"
                      >
                        Oku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-[45%] -translate-y-1/2 bg-[var(--color-backdrop-light)] p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-colors opacity-85 hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-[var(--color-text-primary)]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-[45%] -translate-y-1/2 bg-[var(--color-backdrop-light)] p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-colors opacity-85 hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-[var(--color-text-primary)]" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {allHotArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-[var(--color-blue-accent)]"
                    : "bg-[var(--color-border-secondary)]"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
