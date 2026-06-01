import { motion } from "motion/react";
import { Leaf, ShieldCheck, Users } from "lucide-react";
import { Language } from "../translations";

interface RSEProps {
  lang: Language;
}

export default function RSE({ lang }: RSEProps) {
  const content = {
    fr: {
      badge: "ENGAGEMENT RSE",
      title: "RESPONSABILITÉ SOCIÉTALE DE L'ENTREPRISE",
      desc:
        "Chez Pizolub, la performance industrielle s'accompagne d'une attention constante portée à la sécurité, à l'environnement et au respect des femmes et des hommes qui font vivre l'entreprise.",
      pillars: [
        {
          title: "Sécurité et conformité",
          desc:
            "Nous veillons à la maîtrise des risques industriels, au respect des procédures et à l'amélioration continue des conditions de travail.",
          icon: ShieldCheck,
        },
        {
          title: "Environnement",
          desc:
            "Nous cherchons à mieux encadrer nos opérations, à limiter les impacts liés à nos activités et à promouvoir des pratiques plus responsables.",
          icon: Leaf,
        },
        {
          title: "Capital humain",
          desc:
            "Nous valorisons les compétences locales, la transmission du savoir-faire et l'implication des équipes dans la durée.",
          icon: Users,
        },
      ],
      footer:
        "Notre démarche RSE s'inscrit dans une logique de progrès, au service d'une industrie plus responsable au Gabon.",
    },
    en: {
      badge: "CSR COMMITMENT",
      title: "CORPORATE SOCIAL RESPONSIBILITY",
      desc:
        "At Pizolub, industrial performance goes hand in hand with constant attention to safety, environmental responsibility, and respect for the people who drive the company forward.",
      pillars: [
        {
          title: "Safety and compliance",
          desc:
            "We work to control industrial risks, comply with procedures, and continuously improve working conditions.",
          icon: ShieldCheck,
        },
        {
          title: "Environment",
          desc:
            "We aim to better frame our operations, reduce the impact of our activities, and encourage more responsible practices.",
          icon: Leaf,
        },
        {
          title: "People",
          desc:
            "We value local skills, know-how transmission, and long-term team commitment.",
          icon: Users,
        },
      ],
      footer:
        "Our CSR approach is part of a continuous improvement mindset in support of more responsible industry in Gabon.",
    },
  }[lang];

  return (
    <section
      id="rse"
      className="py-16 md:py-24 bg-[#f5f8fb] border-y border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-12 h-1 bg-pizolub-blue-light" />
            <p className="text-pizolub-blue text-[10px] md:text-xs font-black tracking-[0.28em] uppercase">
              {content.badge}
            </p>
          </div>
          <h2 className="section-title-underline text-pizolub-blue-dark text-3xl md:text-6xl font-black leading-[0.95] font-display mb-5">
            {content.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            {content.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {content.pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white border border-slate-200 p-6 md:p-8 shadow-[0_18px_50px_rgba(7,24,40,0.06)]"
              >
                <div className="w-14 h-14 rounded-full bg-pizolub-blue flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-pizolub-blue-dark text-xl md:text-2xl font-black mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12 bg-pizolub-blue-dark text-white p-6 md:p-8 border-l-4 border-gabon-yellow">
          <p className="text-sm md:text-base leading-relaxed max-w-4xl">
            {content.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
