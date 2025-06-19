import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import TrendingTopics from "@/components/TrendingTopics";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <FeaturedArticles />
            <TrendingTopics />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <LatestNews />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
} 