import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export default function ProjectVideo() {
  return (
    <section className="py-24 bg-pizolub-blue-night relative overflow-hidden">
      <div className="absolute inset-0 pattern-gabon opacity-5" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-1 bg-pizolub-orange" />
              <h2 className="text-white text-xs font-black tracking-[0.4em] uppercase">
                IMMERSION PIZOLUB
              </h2>
            </div>

            <h3 className="text-4xl md:text-6xl font-black text-white font-display leading-[0.9] mb-8">
              DECOUVREZ <br />
              <span className="text-gabon-yellow italic">NOTRE VISION</span>{" "}
              <br />
              EN IMAGES
            </h3>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Plongez au coeur de notre complexe industriel de Port-Gentil.
              Cette video retrace notre ambition pour le Gabon et notre
              engagement en faveur d'une excellence industrielle durable en
              Afrique centrale.
            </p>

            <div className="flex items-center space-x-6">
              <div className="w-px h-12 bg-white/20" />
              <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                Production officielle <br /> Pizolub Gabon - 2024
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video shadow-2xl border-[12px] border-white/5 rounded-lg overflow-hidden group bg-black"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/atqJDFs9Yac?rel=0&modestbranding=1"
                title="Pizolub Gabon - Presentation du projet"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              <div className="absolute top-0 right-0 p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gabon-green" />
                  <div className="w-2 h-2 rounded-full bg-gabon-yellow" />
                  <div className="w-2 h-2 rounded-full bg-gabon-blue" />
                </div>
              </div>

              <a
                href="https://www.youtube.com/watch?v=atqJDFs9Yac"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-black/70 text-white text-[11px] font-bold uppercase tracking-widest px-4 py-3 backdrop-blur-sm border border-white/20"
              >
                Ouvrir sur YouTube
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute -top-10 -right-20 opacity-[0.03] pointer-events-none select-none">
        <p className="text-[200px] font-black text-white uppercase leading-none">
          VIDEO
        </p>
      </div>
    </section>
  );
}
