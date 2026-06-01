import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Language, translations } from "../translations";

interface HistorySectionProps {
  lang: Language;
}

interface AlbumSlide {
  src: string;
  alt: string;
}

const ALBUM_SLIDES: AlbumSlide[] = Array.from({ length: 19 }, (_, index) => ({
  src: `/history-album-${String(index + 1).padStart(2, "0")}.jpeg`,
  alt: `Archive Pizolub ${index + 1}`,
}));

function shuffleSlides(slides: AlbumSlide[]) {
  const shuffled = [...slides];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

export default function HistorySection({ lang }: HistorySectionProps) {
  const t = translations[lang].history;
  const [slides, setSlides] = useState(() => shuffleSlides(ALBUM_SLIDES));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = currentIndex + 1;

        if (nextIndex >= slides.length) {
          setSlides((currentSlides) => shuffleSlides(currentSlides));
          return 0;
        }

        return nextIndex;
      });
    }, 3800);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[activeIndex];
  const previewSlides = Array.from({ length: 3 }, (_, offset) => {
    return slides[(activeIndex + offset + 1) % slides.length];
  });

  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-pizolub-blue-night relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-gabon opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-8 md:mb-10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-pizolub-orange" />
              <h2 className="text-white text-[10px] md:text-xs font-black tracking-[0.28em] md:tracking-[0.4em] uppercase">
                {t.badge}
              </h2>
            </div>

            <h3 className="section-title-underline text-3xl sm:text-4xl md:text-6xl font-black text-white font-display leading-[0.95]">
              {t.title}
            </h3>
          </div>
        </div>

        <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-6 items-start">
          <div className="relative">
            <div className="absolute -inset-2 md:-inset-3 rounded-[2rem] bg-gradient-to-br from-pizolub-blue-light/20 via-white/0 to-pizolub-orange/20 blur-2xl" />
            <div className="relative glass-dark p-2 md:p-3 shadow-2xl">
              <div className="flex items-center justify-between px-2 py-2 md:px-3">
                <div>
                  <p className="text-white/55 text-[10px] font-black uppercase tracking-[0.35em]">
                    Album d'archives
                  </p>
                  <p className="text-white text-sm md:text-base font-bold mt-2">
                    Pizolub en images
                  </p>
                </div>
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={`dot-${index}`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Afficher la slide ${index + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-8 bg-gabon-yellow"
                          : "w-2 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] sm:h-[360px] lg:h-[460px] xl:h-[820px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSlide.src}
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    initial={{ opacity: 0, scale: 1.06, rotate: -1 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.98, rotate: 1 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-pizolub-blue-night/85 via-transparent to-black/15" />
                <div className="absolute top-0 left-0 w-full h-1 flex">
                  <div className="flex-1 bg-gabon-green" />
                  <div className="flex-1 bg-gabon-yellow" />
                  <div className="flex-1 bg-gabon-blue" />
                </div>

                <div className="absolute left-4 right-4 bottom-4 md:left-6 md:right-6 md:bottom-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-white/60 text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] mb-2">
                      Memoire industrielle
                    </p>
                    <p className="text-white text-xl md:text-3xl font-black font-display uppercase tracking-tight">
                      Archive Pizolub
                    </p>
                  </div>
                  <div className="shrink-0 bg-black/35 backdrop-blur-sm border border-white/10 px-4 py-3">
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.28em]">
                      Slide
                    </p>
                    <p className="text-white text-lg font-black">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(slides.length).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 xl:grid-cols-1 gap-3">
              {previewSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() =>
                    setActiveIndex((activeIndex + index + 1) % slides.length)
                  }
                  className="group text-left bg-white/[0.03] border border-white/10 hover:border-pizolub-blue-light/45 transition-colors overflow-hidden"
                >
                  <div className="relative h-24 sm:h-24 xl:h-28 overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pizolub-blue-night/75 to-transparent" />
                    <div className="absolute left-3 bottom-3">
                      <p className="text-white text-xs font-black uppercase tracking-[0.2em]">
                        Suivant
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="glass-surface-soft p-4 md:p-5">
              <p className="text-white/55 text-[10px] font-black uppercase tracking-[0.35em] mb-4">
                Collection complete
              </p>
              <div className="grid grid-cols-5 gap-2">
                {slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`relative overflow-hidden border transition-colors ${
                      index === activeIndex
                        ? "border-gabon-yellow"
                        : "border-white/10 hover:border-white/35"
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-10 md:h-12 w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-gabon-yellow glass-surface-soft px-5 py-5 md:px-6 md:py-6">
              <p className="text-white text-base md:text-xl font-medium leading-relaxed">
                {t.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
