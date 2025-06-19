import PageHeader from "@/components/PageHeader";
import ArticleGrid from "@/components/ArticleGrid";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryNews from "@/components/CategoryNews";
import Newsletter from "@/components/Newsletter";
import { cultureArticles, latestNews } from "@/lib/data";

export default function LifestylePage() {
  // Kültür & Yaşam kategorisindeki haberleri al
  const lifestyleNews = latestNews.filter((news) => news.category === "Yaşam");

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <PageHeader
        title="Kültür & Yaşam"
        description="Sanat, kültür ve yaşam tarzı üzerine derinlemesine yazılar. Hayatınızı zenginleştirecek deneyimler ve perspektifler."
        backgroundImage="/images/Kültür_Yaşam.jpg"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Makaleler */}
          <section className="lg:col-span-3">
            <ArticleGrid
              articles={cultureArticles}
              title="Kültür & Yaşam Makaleleri"
            />
          </section>

          {/* Yan menü / Sidebar */}
          <aside className="lg:col-span-1">
            <CategorySidebar
              category="Kültür & Yaşam"
              backgroundImage="/images/Kültür_Yaşam3.jpg"
              quote="Hayat, yaşadığın değil, hatırladığın şeydir."
              quoteAuthor="Gabriel García Márquez"
              featuredTitle="Minimalist Yaşam Rehberi"
              featuredLink="/lifestyle/18"
            />
          </aside>
        </div>
      </main>

      {/* Yaşam Haberleri */}
      <CategoryNews
        category="Kültür & Yaşam"
        title="Son Yaşam Haberleri"
        categorySlug="lifestyle"
        news={lifestyleNews}
      />

      <Newsletter />
    </div>
  );
}
