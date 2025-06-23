import { useParams, useSearchParams } from "react-router-dom";
import ArticleDetail from "@/components/ArticleDetail";
import { getNewsById } from "@/lib/data";

export default function NewsDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const newsId = Number(id);
  const news = getNewsById(newsId);
  const categorySlug = searchParams.get("categorySlug") || "news";
  const referrer =
    (searchParams.get("referrer") as "home" | "category") || "category";

  if (!news) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Haber bulunamadı
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Aradığınız haber mevcut değil.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <ArticleDetail
        article={news}
        categorySlug={categorySlug}
        referrer={referrer}
      />
    </div>
  );
}
