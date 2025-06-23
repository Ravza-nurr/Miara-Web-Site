import PageHeader from "@/components/PageHeader";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryNews from "@/components/CategoryNews";
import { horoscopeArticles } from "@/lib/data";

export default function HoroscopePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <PageHeader
        title="Burçlar"
        description="Astroloji, burç yorumları ve kozmik enerjiler. Yıldızların size rehberlik ettiği kişisel gelişim yolculuğu."
        backgroundImage="/images/Burçlar2.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArticleGrid articles={horoscopeArticles} title="Burç Makaleleri" />
          </div>
          <div className="lg:col-span-1">
            <CategorySidebar
              category="Burçlar"
              backgroundImage="/images/Burçlar3.jpg"
              quote="Yıldızlar kaderinizi belirlemez, sadece potansiyelinizi gösterir."
              quoteAuthor="Alan Leo"
              featuredTitle="Mart Ayı Burç Yorumları"
              featuredLink="/horoscope/22"
            />
          </div>
        </div>
      </div>
      <CategoryNews
        category="Burçlar"
        title="Son Burç Haberleri"
        categorySlug="horoscope"
      />
    </div>
  );
}
