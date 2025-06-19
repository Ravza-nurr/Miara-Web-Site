import Header from "@/components/header";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import TrendingTopics from "@/components/TrendingTopics";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Main Content Grid */}
      <section className="py-16 px-4 bg-[var(--color-bg-primary)] sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <FeaturedArticles />
            <TrendingTopics />
          </div>
        </div>
      </section>

      <LatestNews />
      <Newsletter />
    </main>
  );
}
