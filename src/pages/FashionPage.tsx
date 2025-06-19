import PageHeader from "@/components/PageHeader";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryNews from "@/components/CategoryNews";
import Newsletter from "@/components/Newsletter";
import { fashionArticles } from "@/lib/data";

export default function FashionPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <PageHeader
        title="Moda" 
        description="En son moda trendleri, tasarımcı koleksiyonları ve stil önerileri. Gardırobunuzu yenileyin ve kişisel stilinizi keşfedin."
        backgroundImage="/images/Moda2.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ArticleGrid articles={fashionArticles} title="Moda Makaleleri" />
          </div>
          <div className="lg:col-span-1">
            <CategorySidebar
              category="Moda"
              backgroundImage="/images/Moda.jpg"
              quote="Moda geçer, stil kalır."
              quoteAuthor="Coco Chanel"
              featuredTitle="2024 İlkbahar/Yaz Koleksiyonları"
              featuredLink="/fashion/10"
            />
          </div>
        </div>
      </div>
      <CategoryNews category="Moda" title="Son Moda Haberleri" categorySlug="fashion" />

      <Newsletter />
    </div>
  );
} 