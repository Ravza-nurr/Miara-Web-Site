"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const featuredSection = document.getElementById("featured-articles");
      if (featuredSection) {
        const rect = featuredSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          featuredSection.style.opacity = "1";
          featuredSection.style.transform = "translateY(0)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-35 overflow-hidden bg-[url('/images/Ana_Fotograf.jpg')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-[var(--color-overlay-medium)] z-0" />
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-[var(--color-text-white)] mb-6 tracking-wide">
          Stil ile Zarafetin
          <br />
          Buluştuğu Yer
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-white)]/90 max-w-3xl mx-auto leading-relaxed mb-8">
          Moda, güzellik ve yaşam tarzındaki en son trendleri keşfedin. 
          Özenle seçilmiş hikayelerimizle stilinizi yeniden tanımlayın.
        </p>
        <button
          onClick={() => {
            const featuredSection = document.getElementById("featured-articles");
            if (featuredSection) {
              featuredSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-6 py-3 sm:px-8 sm:py-4 font-medium hover:bg-[var(--color-hover-primary)] transition-all transform hover:scale-105 rounded-full cursor-pointer"
        >
          Keşfet
        </button>
      </div>
    </section>
  );
}
