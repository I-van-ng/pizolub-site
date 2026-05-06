import { motion } from "motion/react";
import { Car, Factory, Ship, Shield } from "lucide-react";
import { Language } from "../translations";

interface ProductsProps {
  lang: Language;
}

export default function Products({ lang }: ProductsProps) {
  const content = {
    fr: {
      badge: "Concu pour nos routes",
      range: "NOS GAMMES DE LUBRIFIANTS",
      title: (
        <>
          La performance sous notre{" "}
          <span className="text-gabon-yellow italic">climat equatorial</span>
        </>
      ),
      cats: [
        {
          title: "AUTOMOBILE",
          desc: "Huiles moteur essence et diesel de haute qualite pour une protection optimale et une longevite accrue des vehicules.",
        },
        {
          title: "INDUSTRIE",
          desc: "Solutions lubrifiantes specialisees : huiles hydrauliques, engrenages, turbines et compresseurs.",
        },
        {
          title: "MARINE",
          desc: "Lubrifiants marins haute performance concus pour resister aux environnements corrosifs.",
        },
        {
          title: "GRAISSES",
          desc: "Gamme complete de graisses pour roulements et articulations, offrant une excellente resistance.",
        },
      ],
    },
    en: {
      badge: "Designed for our roads",
      range: "OUR LUBRICANT RANGES",
      title: (
        <>
          Performance under our{" "}
          <span className="text-gabon-yellow italic">equatorial climate</span>
        </>
      ),
      cats: [
        {
          title: "AUTOMOTIVE",
          desc: "High-quality gasoline and diesel engine oils for optimal protection and increased vehicle longevity.",
        },
        {
          title: "INDUSTRY",
          desc: "Specialized lubricating solutions: hydraulic oils, gears, turbines, and compressors.",
        },
        {
          title: "MARINE",
          desc: "High-performance marine lubricants designed to withstand corrosive environments.",
        },
        {
          title: "GREASES",
          desc: "Complete range of greases for bearings and joints, offering excellent resistance.",
        },
      ],
    },
  }[lang];

  const productCategories = [
    {
      id: "auto",
      title: content.cats[0].title,
      description: content.cats[0].desc,
      icon: Car,
      image: "/automobile-lubrifiant-v2.jpg",
      bgColor: "bg-pizolub-blue-light",
    },
    {
      id: "indus",
      title: content.cats[1].title,
      description: content.cats[1].desc,
      icon: Factory,
      image: "/industrie-lubrifiant.jpg",
      bgColor: "bg-pizolub-blue",
    },
    {
      id: "marine",
      title: content.cats[2].title,
      description: content.cats[2].desc,
      icon: Ship,
      image: "/marine-lubrifiant.jpg",
      bgColor: "bg-pizolub-blue-dark",
    },
    {
      id: "grease",
      title: content.cats[3].title,
      description: content.cats[3].desc,
      icon: Shield,
      image: "/graisses-lubrifiant.jpg",
      bgColor: "bg-pizolub-blue-light",
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-pizolub-blue">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="h-px w-8 bg-gabon-yellow" />
            <span className="text-gabon-yellow text-[10px] font-black tracking-[0.2em] uppercase italic">
              {content.badge}
            </span>
            <div className="h-px w-8 bg-gabon-yellow" />
          </div>
          <h2 className="text-white text-xs md:text-sm font-bold tracking-[0.22em] md:tracking-[0.3em] mb-4 uppercase font-display">
            {content.range}
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white font-display">
            {content.title}
          </h3>
          <div className="flex justify-center mt-8 space-x-1">
            <div className="w-12 h-1.5 bg-gabon-yellow" />
            <div className="w-12 h-1.5 bg-gabon-yellow" />
            <div className="w-12 h-1.5 bg-gabon-yellow" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {productCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative min-h-[320px] md:h-[400px] bg-gray-50 flex flex-col items-center justify-center p-6 md:p-8 text-center overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-pizolub-blue-dark/55 z-10" />

              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 z-10 opacity-100" />

              <div
                className={
                  cat.bgColor +
                  " w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-6 md:mb-8 relative z-20 transition-transform group-hover:scale-110 duration-500 shadow-lg shadow-pizolub-blue-dark/10"
                }
              >
                <cat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>

              <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 transition-colors relative z-20 text-white">
                {cat.title}
              </h4>

              <p className="text-sm md:text-base max-w-sm mb-6 md:mb-8 leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 relative z-20 text-white/90">
                {cat.description}
              </p>

              <button className="border-2 font-bold text-[11px] md:text-xs px-6 md:px-8 py-3 rounded-sm transition-all duration-300 relative z-20 border-white/50 text-white hover:bg-white hover:text-pizolub-blue-dark">
                {lang === "fr" ? "VOIR LA GAMME" : "VIEW RANGE"}
              </button>

              <div className="absolute top-0 right-0 w-32 h-32 bg-pizolub-blue/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
