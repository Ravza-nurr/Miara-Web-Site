"use client";

import { Share2, Clock, Eye, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  news: {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    readTime: string;
    views: string;
    author: string;
    date: string;
    isHot?: boolean;
  };
  referrer?: "home" | "category";
  categorySlug?: string;
}

export default function NewsCard({
  news,
  referrer = "category",
  categorySlug,
}: NewsCardProps) {
  const href = `/news/${news.id}?referrer=${referrer}${
    categorySlug ? `&categorySlug=${categorySlug}` : ""
  }`;

  return (
    <article className="group">
      <div className="relative overflow-hidden bg-[var(--color-bg-primary)] mb-4 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
        <Image
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          width={320}
          height={240}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-overlay-dark)] via-[var(--color-overlay-medium)] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-[var(--color-backdrop-light)] backdrop-blur-sm px-3 py-1 text-xs font-medium text-[var(--color-text-primary)] rounded-full transform transition-all duration-500 group-hover:bg-[var(--color-bg-black)] group-hover:text-[var(--color-text-white)]">
          {news.category}
        </span>
        
        {/* Hot Badge */}
        {news.isHot && (
          <span className="absolute top-4 right-4 bg-[var(--color-blue-accent)] text-[var(--color-text-white)] px-2 py-1 text-xs font-bold rounded-full">YENİ</span>
        )}
        
        {/* Share Button */}
        <button className="absolute top-4 right-4 bg-[var(--color-backdrop-light)] backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-[var(--color-bg-primary)] transition-all duration-300 hover:scale-110 hover:shadow-2xl">
          <Share2 className="h-4 w-4 text-[var(--color-text-tertiary)]" />
        </button>
      </div>

      <div className="space-y-3 bg-[var(--color-bg-primary)] p-4 rounded-lg shadow-sm transform transition-all duration-500 hover:shadow-xl">
        <Link href={href}>
          <h4 className="text-xl font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-text-tertiary)] transition-colors duration-300 line-clamp-2">
            {news.title}
          </h4>
        </Link>
        
        <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed line-clamp-3 transition-all duration-300 group-hover:text-[var(--color-text-secondary)]">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-[var(--color-text-quaternary)]">
          <div className="flex items-center space-x-4">
            <span className="flex items-center transition-all duration-300 hover:text-[var(--color-text-primary)]">
              <Clock className="w-3 h-3 mr-1" />
              {news.readTime}
            </span>
            <span className="flex items-center transition-all duration-300 hover:text-[var(--color-text-primary)]">
              <Eye className="w-3 h-3 mr-1" />
              {news.views}
            </span>
          </div>
          <span className="font-medium transition-all duration-300 group-hover:text-[var(--color-text-primary)]">
            {news.author}
          </span>
        </div>
        
        <Link
          href={href}
          className="w-full text-center text-[var(--color-text-primary)] font-medium hover:underline border-t border-[var(--color-border-primary)] pt-3 block transform transition-all duration-300 hover:text-[var(--color-text-tertiary)] hover:translate-y-[-2px]"
        >
          Devamını Oku
        </Link>
      </div>
    </article>
  );
}
