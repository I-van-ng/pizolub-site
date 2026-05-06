import { motion } from "motion/react";
import { Language, translations } from "../translations";

interface QualityShowcaseProps {
  lang: Language;
}

export default function QualityShowcase({ lang }: QualityShowcaseProps) {
  const t = translations[lang].quality;
  const images = [
    {
      url: "/technique-showcase.jpg",
      title: lang === "fr" ? "Technique" : "Technical",
      desc:
        lang === "fr"
          ? "Nos techniciens qualifies assurent un controle constant de la qualite."
          : "Our qualified technicians ensure consistent quality control.",
    },
    {
      url: "/distribution-masse.jpg",
      title: lang === "fr" ? "Distribution de masse" : "Mass distribution",
      desc:
        lang === "fr"
          ? "Capacite industrielle au service de l'economie nationale."
          : "Industrial capacity serving the national economy.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-pizolub-orange" />
              <h2 className="text-pizolub-blue-night text-[10px] md:text-xs font-black tracking-[0.25em] md:tracking-[0.4em] uppercase">
                {t.badge}
              </h2>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-6xl font-black text-pizolub-blue-night font-display leading-[0.95] md:leading-[0.9]">
              {t.title}
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm font-medium border-l-4 border-pizolub-orange pl-4 md:pl-6 mb-2 text-sm md:text-base">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group h-[320px] sm:h-[420px] md:h-[500px] overflow-hidden"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pizolub-blue-night via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 p-5 md:p-8 w-full transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform">
                <p className="text-gabon-yellow text-[10px] font-black uppercase tracking-widest mb-2">
                  Pizolub Gabon
                </p>
                <h4 className="text-white text-xl md:text-2xl font-black mb-2 font-display uppercase tracking-tighter">
                  {img.title}
                </h4>
                <p className="text-white/70 text-sm font-medium leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">
                  {img.desc}
                </p>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 flex">
                <div className="flex-1 bg-gabon-green" />
                <div className="flex-1 bg-gabon-yellow" />
                <div className="flex-1 bg-gabon-blue" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
