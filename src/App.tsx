/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainSections from "./components/Activities";
import ProjectVideo from "./components/ProjectVideo";
import Products from "./components/Products";
import Laboratory from "./components/Laboratory";
import Coverage from "./components/Coverage";
import Partners from "./components/Partners";
import CompanyNews from "./components/CompanyNews";
import Careers from "./components/Careers";
import Values from "./components/Values";
import ContactForm from "./components/ContactForm";
import QualityShowcase from "./components/QualityShowcase";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";
import { Language } from "./translations";

export default function App() {
  const [lang, setLang] = useState<Language>("fr");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pizolub-orange z-50 origin-left"
        style={{ scaleX }}
      />

      <Navbar lang={lang} setLang={setLang} />

      <main className="flex-grow">
        <Hero lang={lang} />

        {/* The 01-04 Sections from live site */}
        <MainSections lang={lang} />

        {/* Project Video Presentation */}
        <ProjectVideo />

        {/* Global Product Overview Section */}
        <Products lang={lang} />

        {/* Laboratory Focus - Premium Quality Guarantee */}
        <Laboratory lang={lang} />

        {/* Coverage Section */}
        <Coverage lang={lang} />

        {/* Real World Showcase */}
        <QualityShowcase lang={lang} />

        {/* Company News */}
        <CompanyNews lang={lang} />

        {/* Strategic Partners Section */}
        <Partners lang={lang} />

        {/* Careers and Applications */}
        <Careers lang={lang} />

        {/* Contact Form from the live site */}
        <ContactForm lang={lang} />

        {/* CTA Section */}
        <section className="bg-pizolub-blue-night py-32 relative overflow-hidden">
          <div className="absolute inset-0 pattern-gabon opacity-10" />
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10 border-y border-white/10 py-20 px-6">
            <div className="flex justify-center space-x-2 mb-8">
              <div className="w-16 h-1 bg-gabon-green" />
              <div className="w-16 h-1 bg-gabon-yellow" />
              <div className="w-16 h-1 bg-gabon-blue" />
            </div>
            <h2 className="text-white text-3xl md:text-6xl font-black mb-10 leading-tight uppercase font-display">
              {lang === "fr" ? "POUR UN GABON" : "FOR A GABON"} <br />
              <span className="text-gabon-yellow italic">
                {lang === "fr" ? "TOUJOURS EN MOUVEMENT" : "ALWAYS IN MOTION"}
              </span>
            </h2>
            <a
              href="#products"
              className="bg-gabon-green text-white font-black px-16 py-5 hover:bg-white hover:text-gabon-green transition-all rounded-sm uppercase tracking-[0.2em] text-sm shadow-2xl inline-block"
            >
              {lang === "fr"
                ? "Consulter nos fiches techniques"
                : "Consult our technical sheets"}
            </a>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
