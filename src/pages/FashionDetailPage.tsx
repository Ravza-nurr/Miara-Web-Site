import { useParams, useSearchParams } from "react-router-dom";
import ArticleDetail from "@/components/ArticleDetail";
import { getArticleById } from "@/lib/data";

export default function FashionDetailPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const articleId = Number(id);
  const article = getArticleById(articleId, "moda");
  const referrer = searchParams.get("from") === "home" ? "home" : "category";

  if (!article) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Makale bulunamadı
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Aradığınız makale mevcut değil.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <ArticleDetail
        article={article}
        categorySlug="fashion"
        referrer={referrer}
      />
    </div>
  );
}
