"use client";

import { useParams } from "react-router-dom";
import ArticleGrid from "@/components/ArticleGrid";
import {
  fashionArticles,
  beautyArticles,
  cultureArticles,
  horoscopeArticles,
  latestNews,
} from "@/lib/data";

export default function TagPage() {
  const { tag } = useParams();
  const decodedTag = decodeURIComponent(tag || "");

  // Tüm makaleleri birleştir
  const allArticles = [
    ...fashionArticles,
    ...beautyArticles,
    ...cultureArticles,
    ...horoscopeArticles,
    ...latestNews,
  ];

  // Seçilen hashtag'e sahip makaleleri filtrele
  const filteredArticles = allArticles.filter((article) =>
    article.tags?.some((t) => t.toLowerCase() === decodedTag.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[var(--color-text-primary)] mb-4">
            #{decodedTag}
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-4">
            {filteredArticles.length} makale bulundu
          </p>
          <div className="w-24 h-0.5 bg-[var(--color-text-primary)] mx-auto"></div>
        </div>

        {filteredArticles.length > 0 ? (
          <ArticleGrid articles={filteredArticles} />
        ) : (
          <div className="text-center py-12">
            <p className="text-[var(--color-text-secondary)]">
              Bu hashtag ile ilgili makale bulunamadı.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
