import { useState } from "react";
import { motion } from "motion/react";
import { Language, translations } from "../translations";

interface ActivitiesProps {
  lang: Language;
}

export default function MainSections({ lang }: ActivitiesProps) {
  const t = translations[lang].activities;
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    {
      id: "01",
      title: t.sections[0].title,
      subtitle: t.sections[0].subtitle,
      content: t.sections[0].content,
      details:
        lang === "fr"
          ? "PIZOLUB est la societe de formulation de lubrifiants, creee en 1978 par ELF et SHELL Gabon. La denomination sociale de la societe PIZOLUB est la fabrication, l'emballage, le stockage et la vente de lubrifiants industriels et automobiles ainsi que d'emballages metalliques et plastiques.\n\nAvec une presence regionale dans des pays tels que le Cameroun, le Congo, la RDC, la Centrafrique, Sao-Tomee et la Guinee Equatorial, nous couvrons une large zone geographique."
          : "PIZOLUB is a lubricant formulation company created in 1978 by ELF and SHELL Gabon. The company manufactures, packages, stores, and sells industrial and automotive lubricants, as well as metal and plastic packaging.\n\nWith a regional presence in countries such as Cameroon, Congo, the DRC, the Central African Republic, Sao Tome and Equatorial Guinea, we cover a wide geographic area.",
      image: "/notre-histoire.jpg",
      accent: "bg-pizolub-blue",
    },
    {
      id: "04",
      title: lang === "fr" ? "DURABILITE" : "SUSTAINABILITY",
      subtitle:
        lang === "fr"
          ? "Proteger la beaute de notre terre"
          : "Protecting our land's beauty",
      content:
        lang === "fr"
          ? "Parce que le Gabon est le poumon de l'Afrique, Pizolub s'inscrit dans une demarche eco-responsable. Nous optimisons nos processus pour preserver notre biodiversite unique."
          : "Because Gabon is the lung of Africa, Pizolub is part of an eco-responsible approach. We optimize our processes to preserve our unique biodiversity.",
      details: null,
      image: "/durabilite-beaute-terre.jpg",
      accent: "bg-pizolub-accent",
    },
    {
      id: "05",
      title: lang === "fr" ? "NOS ACTIVITES" : "OUR ACTIVITIES",
      subtitle:
        lang === "fr"
          ? "Formulation, emballage et stockage au service de la performance"
          : "Formulation, packaging, and storage serving performance",
      content:
        lang === "fr"
          ? "Notre activite principale couvre la formulation des lubrifiants automobiles et industriels, avec une exigence constante de qualite."
          : "Our core business covers the formulation of automotive and industrial lubricants, with a constant focus on quality.",
      details:
        lang === "fr"
          ? "Notre activite principale reside dans la formulation des lubrifiants, tant pour le secteur automobile que pour le secteur industriel. Nous avons a coeur de developper des produits de haute qualite, adaptes aux besoins specifiques de nos clients. Grace a notre equipe d'experts, nous sommes en mesure de formuler des lubrifiants qui repondent aux normes les plus strictes et qui garantissent une performance optimale. En parallele, nous nous occupons egalement de la fabrication d'emballages plastiques et metalliques. Ces emballages sont essentiels pour garantir la protection et la conservation des lubrifiants que nous produisons. Nous nous engageons a utiliser des materiaux durables et respectueux de l'environnement dans le processus de fabrication. De plus, notre societe propose des services de stockage et d'entreposage des lubrifiants. Nous disposons d'installations modernes et securisees, permettant de gerer efficacement les stocks tout en respectant les reglementations en vigueur."
          : "Our main activity lies in the formulation of lubricants for both the automotive and industrial sectors. We are committed to developing high-quality products tailored to the specific needs of our clients. Thanks to our team of experts, we are able to formulate lubricants that meet the strictest standards and guarantee optimal performance.\n\nAt the same time, we also manufacture plastic and metal packaging. These packages are essential to ensure the protection and preservation of the lubricants we produce. We are committed to using durable and environmentally respectful materials in the manufacturing process.\n\nIn addition, our company provides lubricant storage and warehousing services. We have modern and secure facilities that allow us to manage inventory efficiently while complying with current regulations.",
      image: "/distribution-masse.jpg",
      accent: "bg-gabon-yellow",
    },
  ];

  return (
    <section
      id="activities"
      className="py-16 md:py-24 bg-pizolub-blue-dark pattern-pizolub"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {sections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } mb-20 md:mb-32 last:mb-0 gap-10 md:gap-16 items-center`}
          >
            <div className="flex-1 w-full">
              <div className="relative">
                <span className="text-7xl md:text-[200px] font-black text-white/5 absolute -top-10 md:-top-32 -left-3 md:-left-8 select-none leading-none font-display">
                  {section.id}
                </span>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4 md:mb-6">
                    <div className={`w-10 h-1 ${section.accent}`} />
                    <h3 className="text-gabon-yellow text-[10px] md:text-xs font-black tracking-[0.25em] md:tracking-[0.4em] uppercase">
                      {section.title}
                    </h3>
                  </div>

                  <h4 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-5 md:mb-8 leading-tight font-display">
                    {section.subtitle}
                  </h4>

                  <p className="text-white/80 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-10">
                    {section.content}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenSection(openSection === section.id ? null : section.id)
                    }
                    className={`px-6 md:px-8 py-3 md:py-4 ${section.accent} text-white font-bold text-[11px] md:text-xs tracking-[0.18em] md:tracking-widest uppercase hover:scale-105 transition-transform shadow-lg`}
                  >
                    {openSection === section.id
                      ? lang === "fr"
                        ? "Reduire"
                        : "Show less"
                      : lang === "fr"
                        ? "En savoir plus"
                        : "Learn more"}
                  </button>

                  {section.details && openSection === section.id ? (
                    <div className="mt-6 border-l-4 border-gabon-yellow bg-white/10 backdrop-blur-sm p-5 md:p-6">
                      <p className="text-white/90 text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {section.details}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="relative h-[280px] sm:h-[360px] md:h-[550px] overflow-hidden shadow-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div
                className={`absolute bottom-0 ${
                  idx % 2 === 0 ? "right-0" : "left-0"
                } w-16 h-16 md:w-24 md:h-24 ${section.accent} z-20 translate-x-3 md:translate-x-4 translate-y-3 md:translate-y-4`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
