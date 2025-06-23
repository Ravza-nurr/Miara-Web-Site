import ArticleGrid from "@/components/ArticleGrid";
import {
  featuredArticles,
  fashionArticles,
  beautyArticles,
  horoscopeArticles,
  cultureArticles,
} from "@/lib/data";

export default function AllArticlesPage() {
  // Tüm kategorilerden tüm makaleleri birleştir
  const allArticles = [
    ...featuredArticles,
    ...fashionArticles,
    ...beautyArticles,
    ...horoscopeArticles,
    ...cultureArticles,
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[var(--color-text-primary)] mb-4">
            Tüm Makaleler
          </h1>
          <div className="w-24 h-0.5 bg-[var(--color-text-primary)] mx-auto"></div>
        </div>
        <ArticleGrid articles={allArticles} />
      </div>
    </div>
  );
}
