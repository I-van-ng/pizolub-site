import { motion } from "motion/react";
import { Hammer, ShieldAlert, Zap } from "lucide-react";
import { Language, translations } from "../translations";

interface ValuesProps {
  lang: Language;
}

export default function Values({ lang }: ValuesProps) {
  const t = translations[lang].values;
  const icons = [Hammer, ShieldAlert, Zap];

  return (
    <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-px bg-pizolub-blue-light" />
            <span className="text-[10px] font-black text-pizolub-blue-dark uppercase tracking-[0.4em]">
              {t.badge}
            </span>
            <div className="w-8 h-px bg-pizolub-blue-light" />
          </div>
          <h2 className="section-title-underline text-4xl font-black text-pizolub-blue-dark uppercase tracking-tight">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 border border-gray-100 hover:border-pizolub-blue hover:bg-pizolub-blue transition-all duration-300"
              >
                <div className="w-14 h-14 bg-pizolub-blue text-white group-hover:bg-white group-hover:text-pizolub-blue flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-pizolub-blue-dark group-hover:text-white uppercase mb-4 tracking-tighter transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed font-medium transition-colors">
                  {item.desc}
                </p>
                <div className="mt-8 h-1 w-12 bg-pizolub-blue-light group-hover:bg-white group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
