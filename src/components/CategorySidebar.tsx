import { ArrowRight } from 'lucide-react'
import Link from "next/link"

interface CategorySidebarProps {
  category: string
  backgroundImage: string
  quote?: string
  quoteAuthor?: string
  featuredTitle?: string
  featuredLink?: string
}

export default function CategorySidebar({
  category,
  backgroundImage,
  quote,
  quoteAuthor,
  featuredTitle,
  featuredLink,
}: CategorySidebarProps) {
  return (
    <div className="lg:sticky lg:top-20 lg:self-start">
      {/* Parallax Background */}
      <div
        className="h-80 sm:h-96 lg:h-[calc(100vh-120px)] rounded-lg overflow-hidden relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--color-overlay-medium)]"></div>
        <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
          {/* Top Content */}
          <div>
            <span className="inline-block bg-[var(--color-bg-primary)]/20 backdrop-blur-sm text-[var(--color-text-white)] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
              {category}
            </span>
          </div>

          {/* Middle Content - Quote */}
          {quote && (
            <div className="my-auto">
              <blockquote className="text-[var(--color-text-white)] text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed">
                "{quote}"
              </blockquote>
              {quoteAuthor && (
                <p className="text-[var(--color-text-white)]/80 mt-3 sm:mt-4 text-right text-sm sm:text-base">
                  — {quoteAuthor}
                </p>
              )}
            </div>
          )}

          {/* Bottom Content - Featured Link */}
          {featuredTitle && (
            <div className="bg-[var(--color-bg-primary)]/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg">
              <h3 className="text-[var(--color-text-white)] text-base sm:text-lg font-medium mb-2">Öne Çıkan</h3>
              <p className="text-[var(--color-text-white)]/90 mb-3 sm:mb-4 text-sm sm:text-base">{featuredTitle}</p>
              <Link
                href={featuredLink || "#"}
                className="inline-flex items-center text-[var(--color-text-white)] hover:text-[var(--color-text-light)] transition-all duration-300 group hover:bg-[var(--color-bg-primary)]/10 px-3 py-2 rounded-lg"
              >
                Keşfet
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}