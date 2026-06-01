import { motion } from "motion/react";
import { CheckCircle2, Award, Zap } from "lucide-react";
import { Language } from "../translations";

interface LaboratoryProps {
  lang: Language;
}

export default function Laboratory({ lang }: LaboratoryProps) {
  const content = {
    fr: {
      badge: "LABORATOIRE TECHNIQUE",
      title: (
        <>
          UN <span className="text-pizolub-blue italic">LABORATOIRE</span>{" "}
          AU SERVICE DE LA{" "}
          <span className="text-pizolub-blue-light uppercase">QUALITE</span>
        </>
      ),
      desc:
        "Le laboratoire Pizolub assure le contrôle qualité, la conformité technique et le suivi de performance de nos huiles, de la réception des matières premières jusqu’à l’analyse des produits en service.",
      analyses: [
        {
          title: "Analyse des huiles neuves",
          items: [
            "Contrôle qualité des matières premières : huiles de base et additifs.",
            "Contrôles qualité en cours de production et sur produits finis.",
            "Vérification de la conformité des huiles avec les normes et spécifications techniques.",
          ],
        },
        {
          title: "Analyse des huiles en service",
          items: [
            "Détermination de l’état de dégradation de l’huile en service.",
            "Suivi de la performance de l’huile.",
            "Détermination de la durée limite d’utilisation de l’huile.",
            "Suivi de l’usure des pièces en fonction des éléments métalliques présents dans l’huile.",
          ],
        },
      ],
      award:
        "Nos procédures de laboratoire soutiennent une exigence simple : garantir des huiles fiables, suivies et adaptées aux conditions réelles d’utilisation.",
    },
    en: {
      badge: "TECHNICAL LABORATORY",
      title: (
        <>
          A <span className="text-pizolub-blue italic">LABORATORY</span> IN
          SERVICE OF <span className="text-pizolub-blue-light uppercase">QUALITY</span>
        </>
      ),
      desc:
        "The Pizolub laboratory ensures quality control, technical compliance, and oil performance monitoring from raw materials to used-oil analysis.",
      analyses: [
        {
          title: "New oil analysis",
          items: [
            "Quality control of raw materials: base oils and additives.",
            "In-process quality checks and finished product control.",
            "Verification of compliance with technical standards and specifications.",
          ],
        },
        {
          title: "Used oil analysis",
          items: [
            "Determination of oil degradation state in service.",
            "Monitoring of oil performance over time.",
            "Determination of the oil's usable life limit.",
            "Monitoring of component wear based on metallic elements present in the oil.",
          ],
        },
      ],
      award:
        "Our laboratory procedures follow a simple standard: delivering reliable, monitored oils suited to real operating conditions.",
    },
  }[lang];

  return (
    <section className="py-24 bg-white relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -z-10 skew-x-12 translate-x-32" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 grid grid-cols-6 grid-rows-6 gap-2 aspect-square max-w-[600px] mx-auto"
            >
              <div className="col-span-4 row-span-4 border-8 border-pizolub-blue-dark shadow-xl relative overflow-hidden group">
                <img
                  src="/laboratoire-equipe-2026.jpeg"
                  alt="Equipe du laboratoire Pizolub"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-pizolub-blue-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-2 left-2 bg-pizolub-blue-dark text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                  {lang === "fr" ? "Equipe laboratoire" : "Laboratory team"}
                </div>
              </div>

              <div className="col-span-2 row-span-3 border-4 border-white shadow-lg relative overflow-hidden">
                <img
                  src="/laboratoire-technicien-2026.jpeg"
                  alt="Technicien Pizolub en analyse laboratoire"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pizolub-blue-dark/25" />
                <div className="absolute bottom-2 left-2 bg-white/90 text-pizolub-blue-dark text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                  {lang === "fr" ? "Controle technique" : "Technical control"}
                </div>
              </div>

              <div className="col-span-3 row-span-2 border-4 border-pizolub-blue-light/20 shadow-lg relative overflow-hidden">
                <img
                  src="/laboratoire-03.jpg"
                  alt="Laboratoire Pizolub - Verification technique"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pizolub-blue-dark/50 to-transparent" />
                <div className="absolute top-2 left-2 bg-pizolub-blue-light text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                  {lang === "fr" ? "Tests et validation" : "Testing and validation"}
                </div>
              </div>

              <div className="col-span-3 row-span-3 bg-pizolub-blue-dark/5 border border-pizolub-blue-dark/15 flex flex-col items-center justify-center px-5 text-center hover:bg-pizolub-blue-dark/10 transition-colors">
                <Zap className="text-pizolub-blue-light" size={24} />
                <span className="mt-3 text-[10px] font-black uppercase tracking-widest text-pizolub-blue-dark">
                  {lang === "fr" ? "Procedures de suivi" : "Monitoring procedures"}
                </span>
                <p className="mt-2 text-[11px] leading-relaxed text-pizolub-blue-dark/70">
                  {lang === "fr"
                    ? "Le laboratoire accompagne le contrôle, la conformité et l’analyse technique des huiles sur tout leur cycle de vie."
                    : "The laboratory supports quality control, compliance, and technical analysis of oils throughout their lifecycle."}
                </p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-pizolub-blue-light p-5 shadow-2xl z-20 border-b-4 border-r-4 border-pizolub-blue-dark text-white">
                <p className="text-white font-black text-sm md:text-base leading-none uppercase tracking-[0.2em]">
                  {lang === "fr" ? "Controle" : "Control"}
                </p>
                <p className="text-white/90 text-[9px] font-bold uppercase tracking-widest leading-none mt-2">
                  {lang === "fr" ? "Qualite produit" : "Product quality"}
                </p>
              </div>
            </motion.div>

            <div
              className="absolute -top-10 -left-10 w-40 h-40 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#141414 2px, transparent 2px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-pizolub-blue-light" />
              <h2 className="text-pizolub-blue-dark text-xs font-black tracking-[0.4em] uppercase font-display">
                {content.badge}
              </h2>
            </div>

            <h3 className="section-title-underline text-4xl md:text-7xl font-black text-pizolub-blue-dark mb-8 leading-[0.9] font-display uppercase tracking-tighter">
              {content.title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-pizolub-blue-dark pl-6">
              {content.desc}
            </p>

            <div className="space-y-6 mb-10">
              {content.analyses.map((analysis, i) => (
                <motion.div
                  key={analysis.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-gray-100 bg-gray-50 p-6 md:p-7"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-full mt-1 shadow-sm">
                      <CheckCircle2 size={18} className="text-pizolub-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-pizolub-blue-dark font-bold uppercase text-sm tracking-widest">
                        {analysis.title}
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {analysis.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pizolub-blue-light shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 border border-gray-100 bg-gray-50 flex items-center gap-6">
              <Award className="text-pizolub-blue shrink-0" size={40} />
              <p className="text-[11px] font-bold text-pizolub-blue-dark uppercase tracking-wider leading-relaxed">
                {content.award}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
