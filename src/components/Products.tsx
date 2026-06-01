import { useState } from "react";
import { motion } from "motion/react";
import { Car, Factory, Ship, Shield } from "lucide-react";
import { Language } from "../translations";

interface ProductsProps {
  lang: Language;
}

export default function Products({ lang }: ProductsProps) {
  const content = {
    fr: {
      range: "NOS GAMMES DE LUBRIFIANTS",
      hint: "Decouvrez nos gammes puis contactez-nous pour toute demande produit",
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
          items: [
            "Huiles moteur essence",
            "Huiles moteur diesel",
            "Lubrifiants de transmission",
            "Fluides hydrauliques",
          ],
        },
        {
          title: "INDUSTRIE",
          desc: "Solutions lubrifiantes specialisees : huiles hydrauliques, engrenages, turbines et compresseurs.",
          items: [
            "Huiles hydrauliques",
            "Huiles pour engrenages",
            "Lubrifiants pour turbines",
            "Lubrifiants pour compresseurs",
          ],
        },
        {
          title: "MARINE",
          desc: "Lubrifiants marins haute performance concus pour resister aux environnements corrosifs.",
          items: [
            "Huiles moteur marines",
            "Lubrifiants pour systemes de bord",
            "Solutions anti-corrosion",
            "Produits pour environnement salin",
          ],
        },
        {
          title: "GRAISSES",
          desc: "Gamme complete de graisses pour roulements et articulations, offrant une excellente resistance.",
          items: [
            "Graisses multi-usages",
            "Graisses pour roulements",
            "Graisses haute temperature",
            "Graisses pour charges lourdes",
          ],
        },
      ],
      contactLabel: "Pour toute information produit",
      contactTitle: "Besoin d'un produit ou d'un renseignement ?",
      contactDesc:
        "Notre equipe est a votre disposition pour vous orienter vers la gamme la plus adaptee a votre besoin.",
      contactCta: "Contacter l'entreprise",
    },
    en: {
      range: "OUR LUBRICANT RANGES",
      hint: "Explore our ranges, then contact us for any product request",
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
          items: [
            "Gasoline engine oils",
            "Diesel engine oils",
            "Transmission lubricants",
            "Hydraulic fluids",
          ],
        },
        {
          title: "INDUSTRY",
          desc: "Specialized lubricating solutions: hydraulic oils, gears, turbines, and compressors.",
          items: [
            "Hydraulic oils",
            "Gear oils",
            "Turbine lubricants",
            "Compressor lubricants",
          ],
        },
        {
          title: "MARINE",
          desc: "High-performance marine lubricants designed to withstand corrosive environments.",
          items: [
            "Marine engine oils",
            "Onboard system lubricants",
            "Anti-corrosion solutions",
            "Saltwater-ready products",
          ],
        },
        {
          title: "GREASES",
          desc: "Complete range of greases for bearings and joints, offering excellent resistance.",
          items: [
            "Multi-purpose greases",
            "Bearing greases",
            "High-temperature greases",
            "Heavy-duty greases",
          ],
        },
      ],
      contactLabel: "For any product information",
      contactTitle: "Need a product or more information?",
      contactDesc:
        "Our team is available to guide you toward the range best suited to your needs.",
      contactCta: "Contact the company",
    },
  }[lang];

  const productCategories = [
    {
      id: "auto",
      title: content.cats[0].title,
      description: content.cats[0].desc,
      items: content.cats[0].items,
      icon: Car,
      image: "/automobile-lubrifiant-v2.jpg",
      bgColor: "bg-pizolub-blue-light",
    },
    {
      id: "indus",
      title: content.cats[1].title,
      description: content.cats[1].desc,
      items: content.cats[1].items,
      icon: Factory,
      image: "/industrie-lubrifiant.jpg",
      bgColor: "bg-pizolub-blue",
    },
    {
      id: "marine",
      title: content.cats[2].title,
      description: content.cats[2].desc,
      items: content.cats[2].items,
      icon: Ship,
      image: "/marine-lubrifiant.jpg",
      bgColor: "bg-pizolub-blue-dark",
    },
    {
      id: "grease",
      title: content.cats[3].title,
      description: content.cats[3].desc,
      items: content.cats[3].items,
      icon: Shield,
      image: "/graisses-lubrifiant.jpg",
      bgColor: "bg-pizolub-blue-light",
    },
  ];
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const selectedCategory =
    productCategories.find((cat) => cat.id === selectedCategoryId) ?? null;

  const openRanges = (categoryId?: string) => {
    setSelectedCategoryId(categoryId ?? productCategories[0].id);
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-pizolub-blue">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <button
            type="button"
            onClick={() => openRanges()}
            className="group inline-flex flex-col items-center rounded-2xl px-4 py-3 transition-all duration-300 hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-gabon-yellow/70"
            aria-expanded={selectedCategory !== null}
            aria-controls="products-ranges-panel"
          >
            <h2 className="text-white text-xs md:text-sm font-bold tracking-[0.22em] md:tracking-[0.3em] mb-4 uppercase font-display">
              {content.range}
            </h2>
            <h3 className="section-title-underline text-2xl sm:text-3xl md:text-5xl font-black text-white font-display">
              {content.title}
            </h3>
            <p className="mt-4 text-[11px] md:text-xs uppercase tracking-[0.18em] text-white/65 group-hover:text-white/85 transition-colors">
              {content.hint}
            </p>
            <div className="flex justify-center mt-6 space-x-1">
              <div className="w-12 h-1.5 bg-gabon-yellow" />
              <div className="w-12 h-1.5 bg-gabon-yellow" />
              <div className="w-12 h-1.5 bg-gabon-yellow" />
            </div>
          </button>
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

              <button
                type="button"
                onClick={() => openRanges(cat.id)}
                className="border-2 font-bold text-[11px] md:text-xs px-6 md:px-8 py-3 rounded-sm transition-all duration-300 relative z-20 border-white/50 text-white hover:bg-white hover:text-pizolub-blue-dark"
              >
                {lang === "fr" ? "VOIR LES PRODUITS" : "VIEW PRODUCTS"}
              </button>

              <div className="absolute top-0 right-0 w-32 h-32 bg-pizolub-blue/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          id="products-ranges-panel"
          initial={false}
          animate={{
            opacity: selectedCategory ? 1 : 0,
            height: selectedCategory ? "auto" : 0,
            marginTop: selectedCategory ? 56 : 0,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="rounded-[2rem] border border-white/12 bg-pizolub-blue-dark/70 p-6 md:p-8 shadow-2xl shadow-black/20 backdrop-blur-md">
            <div className="flex flex-wrap gap-3">
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`rounded-full border px-5 py-3 text-xs md:text-sm font-bold tracking-[0.18em] uppercase transition-all ${
                    selectedCategoryId === cat.id
                      ? "border-gabon-yellow bg-gabon-yellow text-pizolub-blue-dark"
                      : "border-white/20 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {selectedCategory && (
              <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gabon-yellow">
                    {lang === "fr" ? "Gammes disponibles" : "Available ranges"}
                  </p>
                  <h4 className="mt-3 text-2xl md:text-4xl font-black text-white font-display">
                    {selectedCategory.title}
                  </h4>
                  <p className="mt-4 max-w-2xl text-white/82 leading-relaxed">
                    {selectedCategory.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {selectedCategory.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm text-white/92"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[260px] overflow-hidden rounded-[1.75rem]">
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                      {lang === "fr" ? "Selection Pizolub" : "Pizolub selection"}
                    </p>
                    <p className="mt-2 text-xl font-black text-white">
                      {selectedCategory.title}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-2 rounded-[1.5rem] border border-white/12 bg-white/6 px-6 py-6 md:px-8 md:py-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gabon-yellow">
                    {content.contactLabel}
                  </p>
                  <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <h5 className="text-xl md:text-2xl font-black text-white">
                        {content.contactTitle}
                      </h5>
                      <p className="mt-2 text-white/78 leading-relaxed">
                        {content.contactDesc}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-sm bg-gabon-yellow px-6 py-4 text-[11px] md:text-xs font-black uppercase tracking-[0.18em] text-pizolub-blue-dark transition-all hover:bg-white"
                    >
                      {content.contactCta}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
