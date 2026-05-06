import Logo from "./Logo";
import { Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Language, translations } from "../translations";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  return (
    <footer className="bg-pizolub-blue-night text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-6">
            <Logo className="w-40" />
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              {t.aboutDesc}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-2 inline-block">
              {t.about}
            </h4>
            <ul className="space-y-4 text-white/75 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-pizolub-blue-light transition-colors"
                >
                  Pizolub Gabon
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pizolub-blue-light transition-colors"
                >
                  Notre vision
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-pizolub-blue-light transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-pizolub-blue-light transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-2 inline-block">
              Contact
            </h4>
            <address className="not-italic text-white/80 text-sm space-y-4">
              <p>Port-Gentil, Ogooue-Maritime</p>
              <p>Gabon - Zone industrielle</p>
              <p className="pt-2">Tel. : (+241) 77 87 86 55</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:accueil@pizolub.ga"
                  className="hover:text-white transition-colors"
                >
                  accueil@pizolub.ga
                </a>
              </p>
            </address>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-8 border-b border-white/10 pb-2 inline-block">
              {t.newsletter}
            </h4>
            <p className="text-white/80 text-sm mb-6">
              {lang === "fr"
                ? "Abonnez-vous pour recevoir nos actualites."
                : "Subscribe to receive our news."}
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder={
                    lang === "fr" ? "Entrez votre email" : "Enter your email"
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-sm py-3 px-4 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-pizolub-blue-light transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-pizolub-blue-light hover:text-white">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <button className="bg-pizolub-blue text-white font-bold text-xs py-3 rounded-sm hover:scale-105 transition-transform">
                {t.newsletterBtn}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <p className="text-white/65 text-[10px] uppercase font-bold tracking-widest">
              © 2024 PIZOLUB.{" "}
              {lang === "fr"
                ? "TOUS DROITS RESERVES."
                : "ALL RIGHTS RESERVED."}
            </p>
            <p className="text-pizolub-blue-light text-[9px] font-black tracking-[0.3em] uppercase italic">
              Union - Travail - Justice -{" "}
              {lang === "fr" ? "Fierement gabonais" : "Proudly Gabonese"}
            </p>
          </div>

          <div className="flex space-x-6">
            <Facebook className="w-5 h-5 text-white/60 hover:text-pizolub-blue-light cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-white/60 hover:text-pizolub-blue-light cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-white/60 hover:text-pizolub-blue-light cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
