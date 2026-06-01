import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Language, translations } from "../translations";

interface HeroProps {
  lang: Language;
}

const heroSlides = [
  "/hero-slides/slide-1.jpg",
  "/hero-slides/slide-5.jpg",
  "/hero-slides/slide-6.jpg",
  "/hero-slides/slide-7.jpg",
  "/hero-slides/slide-8.jpg",
  "/hero-slides/slide-9.jpg",
  "/hero-slides/slide-10.jpg",
  "/hero-slides/slide-11.jpg",
  "/hero-slides/slide-12.jpg",
  "/hero-slides/slide-13.jpg",
];

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const englishHero = translations.en.hero as typeof translations.en.hero & {
    title: string;
  };
  const heroDescription =
    lang === "fr"
      ? "Depuis 1978, nous accompagnons la souverainete industrielle Du Gabon en produisant localement pour transformer durablement."
      : t.desc;
  const [activeSlide, setActiveSlide] = useState(
    () => Math.floor(Math.random() * heroSlides.length),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0 ? heroSlides.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="relative min-h-[700px] md:min-h-[760px] lg:h-[780px] w-full overflow-hidden bg-pizolub-blue-night">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <motion.div
              key={slide}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.02 : 1.08,
              }}
              transition={{
                opacity: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 6.2, ease: "linear" },
              }}
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url("${slide}")`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute top-0 left-0 w-2 h-full flex flex-col z-20">
        <div className="flex-1 bg-pizolub-blue-dark" />
        <div className="flex-1 bg-pizolub-blue" />
        <div className="flex-1 bg-pizolub-blue-light" />
      </div>

      <div className="absolute inset-0 flex items-center py-14 md:py-0 z-20">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-[min(68rem,86vw)] lg:max-w-4xl pb-28 md:pb-32"
          >
            <div className="flex items-center space-x-3 mb-5 md:mb-6">
              <div className="w-8 md:w-12 h-1 bg-pizolub-blue-light" />
              <h2 className="text-white text-[10px] md:text-xs font-black tracking-[0.25em] md:tracking-[0.4em] uppercase font-display">
                {t.badge}
              </h2>
            </div>

            <h1 className="max-w-[9ch] text-white text-4xl sm:text-5xl md:text-[3.8rem] lg:text-[4.2rem] xl:text-[4.5rem] font-black leading-[0.95] lg:leading-[0.92] mb-4 md:mb-5 font-display tracking-[-0.05em] text-balance">
              {lang === "en" ? (
                englishHero.title
              ) : (
                <>
                  {t.title1} <br />
                  {t.title2} <br />
                  <span className="text-gabon-yellow tracking-tighter">
                    {t.title3}
                  </span>
                </>
              )}
            </h1>

            <p className="text-white/90 text-base md:text-lg max-w-xl lg:max-w-[42rem] leading-relaxed mb-7 md:mb-8 font-sans border-l-2 border-pizolub-blue-light pl-4 md:pl-6">
              {heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 sm:max-w-2xl">
              <a
                href="#activities"
                className="bg-pizolub-blue hover:bg-white hover:text-pizolub-blue text-white font-black px-6 md:px-10 py-4 md:py-5 transition-all uppercase tracking-[0.14em] md:tracking-[0.18em] text-xs md:text-sm rounded-sm shadow-2xl inline-flex items-center justify-center text-center sm:min-w-[260px]"
              >
                {t.btnSavoirFaire}
              </a>
              <a
                href="#products"
                className="border border-white/25 hover:bg-white/10 text-white font-bold px-6 md:px-10 py-4 md:py-5 transition-all uppercase tracking-[0.14em] md:tracking-[0.18em] text-xs md:text-sm backdrop-blur-md inline-flex items-center justify-center text-center sm:min-w-[260px]"
              >
                {t.btnProducts}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end space-y-4 text-right z-20">
        <div className="bg-black/20 backdrop-blur-md p-6 border-r-4 border-pizolub-blue-light">
          <p className="text-3xl font-black text-white font-display">1978</p>
          <p className="text-[10px] text-white/80 tracking-widest uppercase">
            {t.statsLabel}
          </p>
        </div>
      </div>

      <div className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-12 md:right-12 flex items-center justify-between gap-4 z-20">
        <div className="flex space-x-2 shrink-0">
          {heroSlides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Afficher le slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === activeSlide
                  ? "w-12 bg-white"
                  : "w-6 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 ml-3 shrink-0">
          <button
            type="button"
            onClick={goToPrevious}
            className="w-11 h-11 rounded-full border border-white/25 bg-black/15 backdrop-blur-sm text-white hover:bg-white hover:text-pizolub-blue transition-all flex items-center justify-center"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="w-11 h-11 rounded-full border border-white/25 bg-black/15 backdrop-blur-sm text-white hover:bg-white hover:text-pizolub-blue transition-all flex items-center justify-center"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
