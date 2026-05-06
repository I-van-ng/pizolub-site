import { motion } from "motion/react";
import { CalendarDays, PlayCircle, Newspaper } from "lucide-react";
import { Language } from "../translations";

interface CompanyNewsProps {
  lang: Language;
}

const content = {
  fr: {
    badge: "ACTUALITES",
    title: "L'ACTUALITE DE L'ENTREPRISE",
    desc:
      "Retrouvez les temps forts de Pizolub, les coulisses de nos activites et les moments qui font vivre notre entreprise au quotidien.",
    videoTitle: "Focus video",
    videoHeadline: "Pizolub en action sur le terrain",
    videoDesc:
      "Une immersion dans l'energie de nos equipes, entre operations, expertise et vie d'entreprise.",
    cards: [
      {
        title: "Vie d'entreprise",
        date: "Mai 2026",
        description:
          "Des moments forts qui illustrent l'engagement de nos equipes et la dynamique interne de Pizolub.",
      },
      {
        title: "Operations & terrain",
        date: "Actualite recente",
        description:
          "Un regard concret sur les activites, les installations et le savoir-faire qui structurent notre quotidien industriel.",
      },
      {
        title: "Engagement collectif",
        date: "A la une",
        description:
          "Une entreprise en mouvement, portee par des femmes et des hommes mobilises autour d'une meme ambition.",
      },
    ],
  },
  en: {
    badge: "NEWS",
    title: "COMPANY NEWS",
    desc:
      "Discover Pizolub highlights, behind-the-scenes activities, and the moments that shape the life of our company.",
    videoTitle: "Video highlight",
    videoHeadline: "Pizolub in action on the ground",
    videoDesc:
      "An immersion into the energy of our teams across operations, expertise, and company life.",
    cards: [
      {
        title: "Company life",
        date: "May 2026",
        description:
          "Key moments that reflect the commitment of our teams and the internal momentum of Pizolub.",
      },
      {
        title: "Operations & field work",
        date: "Recent update",
        description:
          "A concrete look at the activities, facilities, and know-how that shape our industrial day-to-day work.",
      },
      {
        title: "Collective engagement",
        date: "Headline",
        description:
          "A company in motion, driven by women and men united around the same ambition.",
      },
    ],
  },
} as const;

export default function CompanyNews({ lang }: CompanyNewsProps) {
  const t = content[lang];

  return (
    <section id="news" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center space-x-3 mb-5">
            <div className="w-12 h-1 bg-pizolub-orange" />
            <p className="text-pizolub-orange text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
              {t.badge}
            </p>
          </div>
          <h2 className="text-pizolub-blue-night text-3xl md:text-6xl font-black leading-[0.95] font-display mb-5">
            {t.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 md:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-pizolub-blue-night overflow-hidden shadow-2xl"
          >
            <div className="relative aspect-video bg-black">
              <video
                src="/company-news-video.mp4"
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              />
              <div className="absolute top-0 left-0 w-full h-1 flex">
                <div className="flex-1 bg-gabon-green" />
                <div className="flex-1 bg-gabon-yellow" />
                <div className="flex-1 bg-gabon-blue" />
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="inline-flex items-center gap-2 text-gabon-yellow text-[11px] font-black uppercase tracking-[0.2em] mb-4">
                <PlayCircle className="w-4 h-4" />
                {t.videoTitle}
              </div>
              <h3 className="text-white text-2xl md:text-4xl font-black mb-4 font-display">
                {t.videoHeadline}
              </h3>
              <p className="text-white/75 leading-relaxed max-w-2xl">
                {t.videoDesc}
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {t.cards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-gray-200 bg-gray-50 p-6 md:p-7"
              >
                <div className="inline-flex items-center gap-2 text-pizolub-blue text-[11px] font-black uppercase tracking-[0.2em] mb-3">
                  <CalendarDays className="w-4 h-4" />
                  {card.date}
                </div>
                <h3 className="text-pizolub-blue-night text-xl md:text-2xl font-black mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.article>
            ))}

            <div className="bg-pizolub-blue p-6 md:p-7 text-white">
              <div className="inline-flex items-center gap-2 text-gabon-yellow text-[11px] font-black uppercase tracking-[0.2em] mb-3">
                <Newspaper className="w-4 h-4" />
                {lang === "fr" ? "Communication" : "Communication"}
              </div>
              <p className="text-lg leading-relaxed">
                {lang === "fr"
                  ? "Cette section peut ensuite accueillir vos prochaines videos, annonces internes, lancements produits ou evenements d'entreprise."
                  : "This section can later host your next videos, internal announcements, product launches, or company events."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
