import { motion } from "motion/react";
import { ShieldCheck, Store } from "lucide-react";
import { Language, translations } from "../translations";

interface PartnersProps {
  lang: Language;
}

const partners = [
  { name: "CHEVRON ORONITE", logo: "/partners/chevron-oronite.jpeg" },
  { name: "TOTAL ENERGIES", logo: "/partners/total-energies.jpeg" },
  { name: "OLA ENERGY", logo: "/partners/ola-energy.jpeg" },
  { name: "VIVO ENERGY", logo: "/partners/vivo-energy.jpeg" },
  { name: "PETROGABON", logo: "/partners/petrogabon.jpeg" },
  { name: "GABON OIL COMPANY", logo: "/partners/gabon-oil-company.jpeg" },
];

export default function Partners({ lang }: PartnersProps) {
  const t = translations[lang].partnersSec;

  return (
    <section id="partners" className="py-16 md:py-24 bg-pizolub-blue-night relative overflow-hidden">
      {/* Background national colors subtle glow */}
      <div className="absolute top-0 left-0 w-full h-1 flex opacity-30">
        <div className="flex-1 bg-pizolub-blue-dark" />
        <div className="flex-1 bg-pizolub-blue" />
        <div className="flex-1 bg-pizolub-blue-light" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-pizolub-blue-light" />
              <h2 className="text-white text-[10px] md:text-xs font-black tracking-[0.25em] md:tracking-[0.4em] uppercase">
                {t.badge}
              </h2>
            </div>
            
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white font-display leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
              {t.title}
            </h3>
            
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8">
              {t.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-md">
                <ShieldCheck className="text-pizolub-blue-light mb-4" size={32} />
                <h4 className="text-white font-black text-sm uppercase mb-2">{t.cards[0].title}</h4>
                <p className="text-white/50 text-xs leading-relaxed italic">
                  {t.cards[0].desc}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-md">
                <Store className="text-pizolub-blue mb-4" size={32} />
                <h4 className="text-white font-black text-sm uppercase mb-2">{t.cards[1].title}</h4>
                <p className="text-white/50 text-xs leading-relaxed italic">
                  {t.cards[1].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Partners Grid/Marquee */}
          <div className="lg:w-1/2 w-full self-center">
            <div className="bg-white/5 border border-white/10 p-5 sm:p-6 md:p-10 rounded-sm relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               <div className="mb-8 md:mb-10 text-center">
                <p className="text-pizolub-blue-light text-[10px] font-black uppercase tracking-[0.5em] mb-4 italic">
                  {t.maillage}
                </p>
                <div className="h-px w-24 bg-white/20 mx-auto" />
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {partners.map((partner, idx) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center justify-between p-4 md:p-5 border border-white/5 hover:border-pizolub-blue-light/30 hover:bg-white/5 transition-all group min-h-[180px] md:min-h-[210px] text-center"
                  >
                    <div className="w-full h-[92px] md:h-[110px] bg-white rounded-sm flex items-center justify-center mb-4 overflow-hidden p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase group-hover:text-white leading-tight">
                      {partner.name}
                    </span>
                  </motion.div>
                ))}
               </div>

               <div className="mt-10 p-6 border-t border-white/10">
                <p className="text-white/40 text-xs leading-relaxed text-center italic">
                  "{t.quote}"
                </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative text rail */}
      <div className="absolute -bottom-6 md:-bottom-10 left-0 w-full opacity-[0.02] select-none pointer-events-none">
        <p className="text-[150px] font-black whitespace-nowrap text-white uppercase tracking-tighter">
          COOPÉRATION • SYNERGIE • EXCELLENCE • CEMAC • PARTENARIAT • PERFORMANCE
        </p>
      </div>
    </section>
  );
}
