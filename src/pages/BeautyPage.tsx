import PageHeader from "@/components/PageHeader";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryNews from "@/components/CategoryNews";
import Newsletter from "@/components/Newsletter";
import { beautyArticles } from "@/lib/data";

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <PageHeader
        title="Güzellik"
        description="Doğal güzelliğinizi ortaya çıkaran ipuçları ve trendler"
        backgroundImage="/images/Güzellik.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArticleGrid articles={beautyArticles} title="Güzellik Makaleleri" />
          </div>
          <div className="lg:col-span-1">
            <CategorySidebar
              category="Güzellik"
              backgroundImage="/images/Güzellik3.jpg"
              quote="Güzellik, bakışın içindedir."
              quoteAuthor="Sophia Loren"
              featuredTitle="Doğal Cilt Bakımı Rehberi"
              featuredLink="/beauty/14"
            />
          </div>
        </div>
      </div>
      <CategoryNews category="Güzellik" title="Son Güzellik Haberleri" categorySlug="beauty" />

      <Newsletter />
    </div>
  );
} 