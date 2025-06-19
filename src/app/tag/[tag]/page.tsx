import ArticleGrid from "@/components/ArticleGrid";
import Newsletter from "@/components/Newsletter";
import {
  fashionArticles,
  beautyArticles,
  cultureArticles,
  horoscopeArticles,
  latestNews,
} from "@/lib/data";

interface PageProps {
  params: {
    tag: string;
  };
}

export default function TagPage({ params }: PageProps) {
  const tag = decodeURIComponent(params.tag);

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
    article.tags?.includes(tag)
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[var(--color-text-primary)] mb-4">
            #{tag}
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

      <Newsletter />
    </div>
  );
}
