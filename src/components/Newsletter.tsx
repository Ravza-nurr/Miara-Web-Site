export default function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-[var(--color-text-white)]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-light mb-6">Haberdar Olun</h3>
        <p className="text-[var(--color-text-light)] mb-8 max-w-2xl mx-auto">
          En son moda trendleri, güzellik ipuçları ve yaşam tarzı önerileri için 
          e-posta listemize katılın. Özel içerikler ve fırsatlardan ilk siz haberdar olun.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            required
            className="flex-1 px-6 py-4 text-[var(--color-text-primary)] focus:outline-none"
          />
          <button className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-8 py-4 font-medium hover:bg-[var(--color-hover-primary)] transition-colors">
            Abone Ol
          </button>
        </form>
      </div>
    </section>
  );
}
