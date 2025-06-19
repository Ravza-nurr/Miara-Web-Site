"use client";

import { Share2, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    readTime: string;
    views: string;
    isHot?: boolean;
    date?: string;
  };
  categorySlug?: string;
  compact?: boolean;
  referrer?: "home" | "category";
}

export default function ArticleCard({
  article,
  categorySlug,
  compact = false,
  referrer = "category",
}: ArticleCardProps) {
  const getCategorySlug = () => {
    if (categorySlug) return categorySlug;

    switch (article.category) {
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

  // URL'ye referrer parametresi ekle
  const getArticleUrl = () => {
    const baseUrl = `/${getCategorySlug()}/${article.id}`;
    return referrer === "home" ? `${baseUrl}?from=home` : baseUrl;
  };

  return (
    <div className="w-full group cursor-pointer transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl rounded-lg">
      <Link href={getArticleUrl()}>
        <div
          className={`relative overflow-hidden bg-[var(--color-bg-tertiary)] mb-4 rounded-lg ${
            compact ? "aspect-[4/3]" : "aspect-[4/5]"
          }`}
        >
          {article.isHot && (
            <div className="absolute top-3 right-3 z-10 animate-pulse">
              <span className="bg-[var(--color-red-accent)] text-[var(--color-text-white)] px-2 py-1 text-xs font-bold rounded-full shadow-lg">
                HOT
              </span>
            </div>
          )}
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transform transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-dark)] via-[var(--color-overlay-medium)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute top-3 left-3">
            <span className="bg-[var(--color-backdrop-light)] backdrop-blur-sm px-2 py-1 text-xs font-medium text-[var(--color-text-primary)] rounded-full transform transition-all duration-500 group-hover:bg-[var(--color-bg-black)] group-hover:text-[var(--color-text-white)]">
              {article.category}
            </span>
          </div>
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2">
            <button
              onClick={(e) => e.preventDefault()}
              className="bg-[var(--color-backdrop-light)] backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              <Share2 className="h-3 w-3 text-[var(--color-text-tertiary)]" />
            </button>
          </div>
        </div>
      </Link>

      <div className="space-y-2 transform transition-all duration-500">
        <Link href={getArticleUrl()}>
          <h4
            className={`font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-text-tertiary)] transition-colors duration-300 line-clamp-2 ${
              compact ? "text-base min-h-[2.5rem]" : "text-lg min-h-[3.5rem]"
            }`}
          >
            {article.title}
          </h4>
        </Link>
        <p
          className={`text-[var(--color-text-tertiary)] leading-relaxed line-clamp-2 transition-all duration-300 group-hover:text-[var(--color-text-secondary)] ${
            compact ? "text-xs min-h-[2.5rem]" : "text-sm min-h-[4rem]"
          }`}
        >
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-[var(--color-text-quaternary)]">
          <div className="flex items-center space-x-3">
            <span className="flex items-center transition-all duration-300 hover:text-[var(--color-text-primary)]">
              <Clock className="h-3 w-3 mr-1" />
              {article.readTime}
            </span>
            <span className="flex items-center transition-all duration-300 hover:text-[var(--color-text-primary)]">
              <Eye className="h-3 w-3 mr-1" />
              {article.views}
            </span>
          </div>
          <Link
            href={getArticleUrl()}
            className="text-[var(--color-text-primary)] font-medium hover:underline transform transition-all duration-300 hover:translate-x-1"
          >
            Devamını Oku
          </Link>
        </div>
        {article.date && (
          <div className="text-xs text-[var(--color-text-quaternary)] border-t border-[var(--color-border-primary)] pt-2 transition-colors duration-300 group-hover:text-[var(--color-text-tertiary)]">
            {article.date}
          </div>
        )}
      </div>
    </div>
  );
}
