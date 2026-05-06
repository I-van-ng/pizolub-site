import { motion } from "motion/react";
import { CheckCircle2, Award, Zap } from "lucide-react";
import { Language } from "../translations";

interface LaboratoryProps {
  lang: Language;
}

export default function Laboratory({ lang }: LaboratoryProps) {
  const content = {
    fr: {
      badge: "LE COEUR DE NOTRE EXCELLENCE",
      title: (
        <>
          NOTRE <span className="text-pizolub-blue italic">LABORATOIRE</span>{" "}
          EST LA REFERENCE{" "}
          <span className="text-pizolub-blue-light uppercase">CEMAC</span>
        </>
      ),
      desc:
        "Si Pizolub est reconnu pour sa qualite premium dans toute la zone CEMAC, c'est grace a notre laboratoire de pointe. Ici, nos experts certifies soumettent chaque lot a des tests rigoureux.",
      certs: [
        {
          title: "Standard ISO",
          desc: "Protocoles de test internationaux rigoureux.",
        },
        {
          title: "Controle CEMAC",
          desc: "Reference qualite en Afrique centrale.",
        },
        {
          title: "Formulation equatoriale",
          desc: "Adaptee aux chaleurs extremes du Gabon.",
        },
      ],
      award:
        "Reconnu par les plus grands constructeurs mondiaux pour la protection moteur en milieu equatorial exigeant.",
    },
    en: {
      badge: "THE HEART OF OUR EXCELLENCE",
      title: (
        <>
          OUR <span className="text-pizolub-blue italic">LABORATORY</span> IS
          THE <span className="text-pizolub-blue-light uppercase">CEMAC</span>{" "}
          REFERENCE
        </>
      ),
      desc:
        "If Pizolub is recognized for its premium quality throughout the CEMAC zone, it is thanks to our state-of-the-art laboratory. Here, our certified experts subject every batch to rigorous testing.",
      certs: [
        {
          title: "ISO Standard",
          desc: "Rigorous international testing protocols.",
        },
        {
          title: "CEMAC Control",
          desc: "A quality benchmark in Central Africa.",
        },
        {
          title: "Equatorial Formulation",
          desc: "Adapted to Gabon's extreme heat.",
        },
      ],
      award:
        "Recognized by global manufacturers for engine protection in demanding equatorial environments.",
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
                  src="/expertise-local.jpg"
                  alt="Laboratoire Pizolub - Analyse"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-pizolub-blue-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-2 left-2 bg-pizolub-blue-dark text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                  Analyse // Laboratoire
                </div>
              </div>

              <div className="col-span-2 row-span-3 border-4 border-white shadow-lg relative overflow-hidden">
                <img
                  src="/laboratoire-02.jpg"
                  alt="Laboratoire Pizolub - Controle qualite"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-pizolub-blue-dark/25" />
                <div className="absolute bottom-2 left-2 bg-white/90 text-pizolub-blue-dark text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                  Controle // Conformite
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
                  Tests // Validation
                </div>
              </div>

              <div className="col-span-3 row-span-3 bg-pizolub-blue-dark/5 border-2 border-dashed border-pizolub-blue-dark/20 flex flex-col items-center justify-center px-5 text-center hover:bg-pizolub-blue-dark/10 transition-colors">
                <Zap className="text-pizolub-blue-light" size={24} />
                <span className="mt-3 text-[10px] font-black uppercase tracking-widest text-pizolub-blue-dark">
                  {lang === "fr" ? "Protocoles verifies" : "Verified protocols"}
                </span>
                <p className="mt-2 text-[11px] leading-relaxed text-pizolub-blue-dark/70">
                  {lang === "fr"
                    ? "Controle, formulation et validation continue sur chaque gamme strategique."
                    : "Control, formulation, and continuous validation across every strategic range."}
                </p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-pizolub-blue-light p-6 shadow-2xl z-20 border-b-4 border-r-4 border-pizolub-blue-dark text-white">
                <p className="text-white font-black text-3xl leading-none">
                  100%
                </p>
                <p className="text-white/80 text-[9px] font-bold uppercase tracking-widest leading-none mt-1">
                  {lang === "fr" ? "Surete labo" : "Lab safety"}
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

            <h3 className="text-4xl md:text-7xl font-black text-pizolub-blue-dark mb-8 leading-[0.9] font-display uppercase tracking-tighter">
              {content.title}
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-pizolub-blue-dark pl-6">
              {content.desc}
            </p>

            <div className="space-y-6">
              {content.certs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gray-100 p-3 rounded-full mt-1">
                    <CheckCircle2 size={18} className="text-pizolub-blue" />
                  </div>
                  <div>
                    <h4 className="text-pizolub-blue-dark font-bold uppercase text-sm tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
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
