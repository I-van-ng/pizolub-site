import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Language, translations } from "../translations";

interface CoverageProps {
  lang: Language;
}

type MarketStatus = "active" | "transit";

type Market = {
  country: string;
  role: string;
  centers: string;
  status: MarketStatus;
};

type CountryShape = {
  key: string;
  label: string;
  sublabel?: string;
  points: string;
  labelX: number;
  labelY: number;
  tone: MarketStatus;
  highlighted?: boolean;
};

type CityMarker = {
  key: string;
  label: string;
  x: number;
  y: number;
  align?: "start" | "middle" | "end";
  featured?: boolean;
};

export default function Coverage({ lang }: CoverageProps) {
  const t = translations[lang].coverage;

  const markets: Market[] = [
    {
      country: "Gabon",
      role: lang === "fr" ? "Siege & Production Locale" : "HQ & Local Production",
      centers: "Port-Gentil, Libreville",
      status: "active",
    },
    {
      country: "Cameroun",
      role: lang === "fr" ? "Hub Logistique CEMAC" : "CEMAC Logistics Hub",
      centers: "Douala, Yaounde",
      status: "active",
    },
    {
      country: "R.D. Congo",
      role: lang === "fr" ? "Marche Strategique" : "Strategic Market",
      centers: "Kinshasa",
      status: "active",
    },
    {
      country: "Congo Brazza",
      role: lang === "fr" ? "Distribution Regionale" : "Regional Distribution",
      centers: "Pointe-Noire, Brazzaville",
      status: "active",
    },
    {
      country: "Centrafrique",
      role: lang === "fr" ? "Partenariat d'Importation" : "Import Partnership",
      centers: "Bangui",
      status: "transit",
    },
    {
      country: "Guinee Equat.",
      role: lang === "fr" ? "Soutien Offshore" : "Offshore Support",
      centers: "Malabo",
      status: "transit",
    },
  ];

  const countries: CountryShape[] = [
    {
      key: "cameroon",
      label: "CAMEROUN",
      points:
        "146,422 146,334 172,302 224,270 278,284 316,324 312,390 284,450 276,506 232,540 182,528 148,494",
      labelX: 230,
      labelY: 420,
      tone: "active",
    },
    {
      key: "car",
      label: "CENTRAL AFRICAN",
      sublabel: "REPUBLIC",
      points:
        "306,344 382,332 486,334 596,350 650,388 648,452 586,486 476,500 372,492 314,458 294,402",
      labelX: 468,
      labelY: 412,
      tone: "transit",
    },
    {
      key: "eq-guinea",
      label: "EQUATORIAL",
      sublabel: "GUINEA",
      points: "106,458 134,448 152,468 142,492 114,496 100,476",
      labelX: 88,
      labelY: 482,
      tone: "transit",
    },
    {
      key: "gabon",
      label: "GABON",
      points: "186,540 274,540 306,566 312,642 286,728 228,768 168,746 144,682 150,596",
      labelX: 226,
      labelY: 654,
      tone: "active",
      highlighted: true,
    },
    {
      key: "congo-b",
      label: "REPUBLIC OF THE",
      sublabel: "CONGO",
      points: "312,530 374,514 434,516 468,560 470,612 442,664 388,702 326,688 300,636 296,580",
      labelX: 390,
      labelY: 606,
      tone: "active",
    },
    {
      key: "drc",
      label: "DEMOCRATIC REPUBLIC",
      sublabel: "OF THE CONGO",
      points:
        "454,514 570,500 702,520 810,588 844,700 820,812 724,880 566,894 452,856 402,774 410,678 438,604",
      labelX: 624,
      labelY: 676,
      tone: "active",
    },
    {
      key: "angola",
      label: "ANGOLA",
      points: "316,720 404,734 472,782 522,888 510,958 270,958 252,820 284,762",
      labelX: 392,
      labelY: 842,
      tone: "transit",
    },
  ];

  const cityMarkers: CityMarker[] = [
    { key: "malabo", label: "MALABO", x: 116, y: 476, align: "end" },
    { key: "yaounde", label: "YAOUNDE", x: 214, y: 470 },
    { key: "libreville", label: "LIBREVILLE", x: 188, y: 594, align: "start" },
    { key: "port-gentil", label: "PORT-GENTIL", x: 190, y: 634, align: "start", featured: true },
    { key: "bangui", label: "BANGUI", x: 424, y: 470 },
    { key: "pointe-noire", label: "POINTE-NOIRE", x: 336, y: 652, align: "end" },
    { key: "brazzaville", label: "BRAZZAVILLE", x: 394, y: 718, align: "end" },
    { key: "kinshasa", label: "KINSHASA", x: 428, y: 730, align: "start" },
  ];

  return (
    <section
      id="coverage"
      className="py-16 md:py-24 bg-pizolub-blue-night relative overflow-hidden border-t border-white/10"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(60,99,130,0.38),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(10,61,98,0.4),transparent_38%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-[2px] bg-pizolub-blue" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] md:tracking-[0.4em] text-white/55">
                {t.badge}
              </span>
            </div>
            <h2 className="section-title-underline text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase font-display leading-[0.95] md:leading-[0.9] mb-4">
              {t.title}
            </h2>
            <p className="text-white/72 font-medium max-w-lg leading-relaxed">
              {t.desc}
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <div className="text-center">
              <div className="text-4xl font-black text-white">06</div>
              <div className="text-[10px] font-bold text-white/55 uppercase tracking-widest">
                {t.stats.countries}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white">08</div>
              <div className="text-[10px] font-bold text-white/55 uppercase tracking-widest">
                {t.stats.centers}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7dd3fc]" />
            <span className="text-[9px] font-bold text-white/55 uppercase tracking-widest">
              {lang === "fr" ? "Villes Strategiques" : "Strategic Cities"}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
            <span className="text-[9px] font-bold text-white/55 uppercase tracking-widest">
              {lang === "fr" ? "Façade Atlantique" : "Atlantic Coastline"}
            </span>
          </div>
        </div>

        <div className="rounded-[20px] md:rounded-[28px] overflow-hidden glass-surface">
          <div className="bg-[#cfe4f3] relative min-h-[420px] sm:min-h-[560px] md:min-h-[760px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.72),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(7,47,74,0.06))]" />

            <div className="relative w-full h-full p-2 sm:p-4 md:p-8">
              <svg
                viewBox="0 0 920 980"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="countryShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0a3d62" floodOpacity="0.12" />
                  </filter>
                </defs>

                <rect x="0" y="0" width="920" height="980" fill="#cfe4f3" />
                <path
                  d="M0,0 L124,0 L122,980 L0,980 Z"
                  fill="#289fd7"
                />
                <path
                  d="M122,0 C110,122 114,196 130,276 C140,326 140,372 126,430 C112,500 114,572 132,666 C144,734 144,824 130,980"
                  fill="none"
                  stroke="#eff8fd"
                  strokeWidth="4"
                />

                <path
                  d="M508,540 C540,572 544,622 528,670 C514,718 520,786 560,846"
                  fill="none"
                  stroke="#58bfe9"
                  strokeWidth="2.5"
                  opacity="0.9"
                />
                <path
                  d="M484,540 C460,566 444,596 438,622"
                  fill="none"
                  stroke="#58bfe9"
                  strokeWidth="1.6"
                  opacity="0.72"
                />

                <path
                  d="M132,304 212,252 290,214 354,234"
                  fill="none"
                  stroke="#587b93"
                  strokeWidth="2"
                  opacity="0.55"
                />
                <path
                  d="M648,236 770,228 864,244"
                  fill="none"
                  stroke="#587b93"
                  strokeWidth="2"
                  opacity="0.55"
                />
                <path
                  d="M776,868 856,850 904,826"
                  fill="none"
                  stroke="#587b93"
                  strokeWidth="2"
                  opacity="0.55"
                />

                {countries.map((country, index) => (
                  <g key={country.key}>
                    <motion.polygon
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.08 * index }}
                      viewport={{ once: true, amount: 0.3 }}
                      points={country.points}
                      fill={country.highlighted ? "#dbeeff" : "#edf6fc"}
                      stroke={country.highlighted ? "#0a3d62" : "#5d7f97"}
                      strokeWidth={country.highlighted ? "2.6" : "2"}
                      filter="url(#countryShadow)"
                    />
                    <text
                      x={country.labelX}
                      y={country.labelY}
                      fill={country.highlighted ? "#072f4a" : "#22384a"}
                      fontSize="12"
                      fontWeight="600"
                      letterSpacing="3"
                      textAnchor="middle"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {country.label}
                    </text>
                    {country.sublabel ? (
                      <text
                        x={country.labelX}
                        y={country.labelY + 20}
                        fill={country.highlighted ? "#072f4a" : "#22384a"}
                        fontSize="10"
                        fontWeight="600"
                        letterSpacing="2.4"
                        textAnchor="middle"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {country.sublabel}
                      </text>
                    ) : null}
                  </g>
                ))}

                <text
                  x="70"
                  y="812"
                  fill="#ecf8ff"
                  fontSize="12"
                  letterSpacing="4"
                  textAnchor="middle"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  SOUTH
                </text>
                <text
                  x="70"
                  y="850"
                  fill="#ecf8ff"
                  fontSize="12"
                  letterSpacing="4"
                  textAnchor="middle"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  ATLANTIC
                </text>
                <text
                  x="70"
                  y="888"
                  fill="#ecf8ff"
                  fontSize="12"
                  letterSpacing="4"
                  textAnchor="middle"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  OCEAN
                </text>

                {cityMarkers.map((city, index) => (
                  <g key={city.key}>
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, delay: 0.45 + index * 0.06 }}
                      viewport={{ once: true, amount: 0.3 }}
                      cx={city.x}
                      cy={city.y}
                      r={city.featured ? "5.5" : "4.5"}
                      fill={city.featured ? "#0a3d62" : "#1d4ed8"}
                    />
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.featured ? "11" : "9"}
                      fill={city.featured ? "#0a3d62" : "#1d4ed8"}
                      opacity="0.12"
                    />
                    <text
                      x={city.x + (city.align === "end" ? -10 : city.align === "start" ? 10 : 0)}
                      y={city.y + 3}
                      fill="#102435"
                      fontSize="9"
                      fontWeight="700"
                      letterSpacing="0.8"
                      textAnchor={city.align ?? "middle"}
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {city.label}
                    </text>
                  </g>
                ))}
              </svg>

              <div className="absolute top-3 right-3 md:top-5 md:right-5 border border-white/20 bg-[#072f4a]/84 backdrop-blur-md p-3 md:p-4 space-y-2 md:space-y-3 hidden sm:block shadow-lg rounded-xl md:rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-8 bg-[#7dd3fc]" />
                  <div>
                    <p className="text-[10px] text-white/45 font-bold uppercase tracking-wider">
                      {t.hudProduction}
                    </p>
                    <p className="text-xs md:text-sm text-white font-black">Port-Gentil</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1 h-8 bg-[#38bdf8]" />
                  <div>
                    <p className="text-[10px] text-white/45 font-bold uppercase tracking-wider">
                      {t.hudFleet}
                    </p>
                    <p className="text-xs md:text-sm text-white font-black">CEMAC / RDC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10 border-t border-white/10">
            {markets.map((market) => (
              <div
                key={market.country}
                className="glass-dark p-5 md:p-6 hover:bg-pizolub-blue/40 group transition-all cursor-pointer"
              >
                <div className="flex justify-between">
                  <h3 className="font-black text-white group-hover:text-white uppercase transition-colors">
                    {market.country}
                  </h3>
                  <div
                    className={
                      market.status === "active"
                        ? "w-2 h-2 rounded-full bg-[#93c5fd]"
                        : "w-2 h-2 rounded-full bg-[#38bdf8]"
                    }
                  />
                </div>
                <p className="text-[10px] font-bold text-white/55 group-hover:text-white/80 uppercase mt-1 transition-colors">
                  {market.role}
                </p>
                <div className="flex items-center space-x-2 mt-4 text-white/35 group-hover:text-white/40 transition-colors">
                  <MapPin size={12} />
                  <span className="text-[9px] font-bold uppercase transition-colors">
                    {market.centers}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
