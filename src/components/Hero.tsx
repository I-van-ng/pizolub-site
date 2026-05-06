import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Language, translations } from "../translations";

interface HeroProps {
  lang: Language;
}

const heroSlides = [
  "/hero-slides/slide-1.jpg",
  "/hero-slides/slide-2.jpg",
  "/hero-slides/slide-3.jpg",
  "/hero-slides/slide-4.jpg",
  "/hero-slides/slide-5.jpg",
];

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
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
    <section className="relative min-h-[560px] md:h-[650px] w-full overflow-hidden bg-pizolub-blue-night">
      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[activeSlide]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.01 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroSlides[activeSlide]}")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-2 h-full flex flex-col z-20">
        <div className="flex-1 bg-pizolub-blue-dark" />
        <div className="flex-1 bg-pizolub-blue" />
        <div className="flex-1 bg-pizolub-blue-light" />
      </div>

      <div className="absolute inset-0 flex items-center py-16 md:py-0 z-20">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-3 mb-5 md:mb-6">
              <div className="w-8 md:w-12 h-1 bg-pizolub-blue-light" />
              <h2 className="text-white text-[10px] md:text-xs font-black tracking-[0.25em] md:tracking-[0.4em] uppercase font-display">
                {t.badge}
              </h2>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-black leading-[0.92] md:leading-[0.9] mb-6 md:mb-8 font-display">
              {t.title1} <br />
              {t.title2} <br />
              <span className="text-gabon-yellow tracking-tighter">
                {t.title3}
              </span>
            </h1>

            <p className="text-white/90 text-base md:text-xl max-w-xl leading-relaxed mb-8 md:mb-12 font-sans border-l-2 border-pizolub-blue-light pl-4 md:pl-6">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#activities"
                className="bg-pizolub-blue hover:bg-white hover:text-pizolub-blue text-white font-black px-8 md:px-12 py-4 md:py-5 transition-all uppercase tracking-[0.18em] md:tracking-widest text-xs md:text-sm rounded-sm shadow-2xl inline-block text-center"
              >
                {t.btnSavoirFaire}
              </a>
              <a
                href="#products"
                className="border border-white/25 hover:bg-white/10 text-white font-bold px-8 md:px-12 py-4 md:py-5 transition-all uppercase tracking-[0.18em] md:tracking-widest text-xs md:text-sm backdrop-blur-md inline-block text-center"
              >
                {t.btnProducts}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end space-y-4 text-right z-20">
        <div className="bg-black/20 backdrop-blur-md p-6 border-r-4 border-pizolub-blue-light">
          <p className="text-3xl font-black text-white font-display">+45 ANS</p>
          <p className="text-[10px] text-white/80 tracking-widest uppercase">
            {t.statsLabel}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-12 flex items-center gap-3 z-20">
        <div className="flex space-x-2">
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

        <div className="hidden sm:flex items-center gap-2 ml-3">
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
