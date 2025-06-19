import ArticleCard from "./ArticleCard"

interface Article {
  id: number
  title: string
  category: string
  image: string
  excerpt: string
  readTime: string
  views: string
  isHot?: boolean
  date?: string
}

interface ArticleGridProps {
  articles: Article[]
  title?: string
}

export default function ArticleGrid({ articles, title }: ArticleGridProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[var(--color-text-primary)] mb-4">{title}</h2>
            <div className="w-24 h-0.5 bg-[var(--color-text-primary)] mx-auto"></div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  )
}
