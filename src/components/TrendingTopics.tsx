"use client";

import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import {
  fashionArticles,
  beautyArticles,
  cultureArticles,
  horoscopeArticles,
  latestNews,
} from "@/lib/data";

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  readTime: string;
  views: string;
  author: string;
  tags?: string[];
  date: string;
  content?: string;
  isHot?: boolean;
}

export default function TrendingTopics() {
  // Tüm makaleleri birleştir
  const allArticles = [
    ...fashionArticles,
    ...beautyArticles,
    ...cultureArticles,
    ...horoscopeArticles,
    ...latestNews,
  ];

  // Tüm hashtag'leri topla ve sayılarını hesapla
  const hashtagCounts = allArticles.reduce(
    (acc: { [key: string]: number }, article) => {
      if (article.tags) {
        article.tags.forEach((tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
      }
      return acc;
    },
    {}
  );

  // En popüler 5 hashtag'i al
  const trendingTopics = Object.entries(hashtagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([tag, count]) => ({
      name: tag,
      count: count,
    }));

  return (
    <div className="lg:col-span-1">
      <div className="bg-[var(--color-bg-black)] text-[var(--color-text-white)] p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Trend Konular
        </h4>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <Link
              key={topic.name}
              to={`/tag/${encodeURIComponent(topic.name)}`}
              className="block"
            >
              <div className="flex items-center justify-between p-3 bg-[var(--color-bg-primary)]/10 rounded-lg hover:bg-[var(--color-bg-primary)]/20 transition-colors">
                <div>
                  <p className="text-sm font-medium">{topic.name}</p>
                  <p className="text-xs text-[var(--color-text-light)]">
                    {topic.count} gönderi
                  </p>
                </div>
                <span className="text-xs bg-[var(--color-bg-primary)]/20 px-2 py-1 rounded-full">
                  #{index + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
