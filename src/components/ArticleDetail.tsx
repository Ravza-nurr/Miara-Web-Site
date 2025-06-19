import {
  Share2,
  Clock,
  Eye,
  ArrowLeft,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleDetailProps {
  article: {
    id: number;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    readTime: string;
    views: string;
    isHot?: boolean;
    date?: string;
    content?: string;
    author?: string;
    tags?: string[];
    time?: string;
  };
  categorySlug: string;
  referrer?: "home" | "category";
}

export default function ArticleDetail({
  article,
  categorySlug,
  referrer = "category",
}: ArticleDetailProps) {
  const fullContent =
    article.content ||
    `
    <p>${article.excerpt}</p>
    
    <h2>Detaylı Bilgi</h2>
    <p>Bu makale henüz detaylı içeriğe sahip değil. Yakında güncellenecektir.</p>
    `;

  // Geri dönüş linkini belirle
  const getBackLink = () => {
    if (referrer === "home" || categorySlug === "news") {
      return "/";
    }
    return `/${categorySlug}`;
  };

  const getBackText = () => {
    if (referrer === "home") {
      return "Ana sayfaya dön";
    }
    if (categorySlug === "news") {
      return "Ana sayfaya dön";
    }

    // Kategori adını Türkçe'ye çevir
    const categoryNames: { [key: string]: string } = {
      fashion: "Moda",
      beauty: "Güzellik",
      lifestyle: "Kültür & Yaşam",
      horoscope: "Burçlar",
    };

    const categoryName = categoryNames[categorySlug] || article.category;
    return `${categoryName} sayfasına dön`;
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Button */}
      <Link
        href={getBackLink()}
        className="inline-flex items-center text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors mb-8 group"
      >
        <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        {getBackText()}
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-[var(--color-bg-black)] text-[var(--color-text-white)] px-3 py-1 text-sm font-medium rounded-full">
            {article.category}
          </span>
          {article.isHot && (
            <span className="bg-[var(--color-red-accent)] text-[var(--color-text-white)] px-2 py-1 text-xs font-bold rounded-full">
              HOT
            </span>
          )}
          {categorySlug === "news" && (
            <span className="bg-[var(--color-blue-accent)] text-[var(--color-text-white)] px-2 py-1 text-xs font-bold rounded-full">
              YENİ
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--color-text-tertiary)] mb-6">
          <div className="flex items-center space-x-6">
            {article.author && <span>Yazar: {article.author}</span>}
            {article.date && <span>{article.date}</span>}
            {article.time && <span>{article.time}</span>}
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </span>
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {article.views}
            </span>
          </div>

          <div className="flex items-center">
            <button className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>

        <p className="text-xl text-[var(--color-text-tertiary)] leading-relaxed">
          {article.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <div
        className="prose prose-lg prose-gray max-w-none mb-12 
                   prose-headings:text-[var(--color-prose-heading)] prose-p:text-[var(--color-prose-text)] 
                   prose-strong:text-[var(--color-prose-strong)] prose-blockquote:text-[var(--color-prose-blockquote)]
                   prose-blockquote:border-[var(--color-text-primary)] prose-a:text-[var(--color-prose-link)]
                   prose-li:text-[var(--color-prose-list)]
                   prose-h2:text-3xl prose-h2:font-light prose-h2:mb-6 prose-h2:mt-12"
        dangerouslySetInnerHTML={{ __html: fullContent }}
        style={{
          lineHeight: "1.8",
          fontSize: "18px",
          color: "var(--color-prose-text)",
        }}
      />

      {/* Tags */}
      {article.tags && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">Etiketler</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] px-3 py-1 text-sm rounded-full hover:bg-[var(--color-hover-secondary)] transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Social Share */}
      <div className="border-t border-[var(--color-border-primary)] pt-8">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
          Bu {categorySlug === "news" ? "haberi" : "makaleyi"} paylaş
        </h3>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-[var(--color-blue-facebook)] text-[var(--color-text-white)] px-4 py-2 rounded-lg hover:bg-[var(--color-blue-dark)] transition-colors">
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </button>
          <button className="flex items-center space-x-2 bg-[var(--color-blue-social)] text-[var(--color-text-white)] px-4 py-2 rounded-lg hover:bg-[var(--color-blue-dark)] transition-colors">
            <Twitter className="h-4 w-4" />
            <span>Twitter</span>
          </button>
          <button className="flex items-center space-x-2 bg-[var(--color-pink-instagram)] text-[var(--color-text-white)] px-4 py-2 rounded-lg hover:bg-[var(--color-pink-instagram-dark)] transition-colors">
            <Instagram className="h-4 w-4" />
            <span>Instagram</span>
          </button>
        </div>
      </div>
    </article>
  );
}
