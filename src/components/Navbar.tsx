import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Language, translations } from "../translations";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { name: t.home, href: "#", active: true },
    { name: t.products, href: "#products", active: false },
    { name: t.activities, href: "#activities", active: false },
    { name: t.coverage, href: "#coverage", active: false },
    { name: t.partners, href: "#partners", active: false },
    { name: lang === "fr" ? "RECRUTEMENT" : "CAREERS", href: "#careers", active: false },
    { name: t.contact, href: "#contact", active: false },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-pizolub-blue-dark shadow-sm font-sans">
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-gabon-green" />
        <div className="flex-1 bg-gabon-yellow" />
        <div className="flex-1 bg-gabon-blue" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20 md:h-24">
        <div className="flex items-center space-x-4">
          <a href="#">
            <Logo className="w-32 md:w-44" />
          </a>
          <div className="hidden sm:flex flex-col border-l border-pizolub-blue-light pl-4">
            <span className="text-[10px] font-black text-gabon-green leading-tight">
              FIERTE
            </span>
            <span className="text-[10px] font-black text-gabon-yellow leading-tight uppercase tracking-widest">
              Gabonaise
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <ul className="flex space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "text-xs font-bold tracking-widest transition-colors uppercase",
                    link.active
                      ? "text-gabon-yellow border-b-2 border-gabon-yellow pb-1 font-black"
                      : "text-white hover:text-gabon-yellow",
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-pizolub-blue-light mx-2" />

          <div className="flex items-center space-x-1">
            <Globe className="w-4 h-4 text-white" />
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-[10px] font-black tracking-widest text-white hover:text-gabon-yellow transition-colors"
            >
              {lang.toUpperCase()}
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-[10px] font-black tracking-widest bg-gray-100 px-2 py-1 rounded-sm"
          >
            {lang.toUpperCase()}
          </button>
          <button
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-pizolub-blue-dark border-t border-pizolub-blue-light overflow-hidden shadow-xl"
          >
            <ul className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm font-bold text-white hover:text-gabon-yellow tracking-widest transition-colors uppercase border-b border-pizolub-blue-light pb-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
