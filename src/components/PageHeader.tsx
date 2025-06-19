interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  description,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center">
      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-[var(--color-overlay-medium)]"></div>
        </div>
      )}

      <div
        className={`relative z-10 max-w-4xl mx-auto text-center ${
          backgroundImage ? "text-[var(--color-text-white)]" : "text-[var(--color-text-primary)]"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-light mb-6 tracking-wide">
          {title}
        </h1>
        {description && (
          <p
            className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              backgroundImage ? "text-[var(--color-text-white)]/90" : "text-[var(--color-text-tertiary)]"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
