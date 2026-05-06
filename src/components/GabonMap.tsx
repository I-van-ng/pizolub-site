import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Language } from "../translations";

interface GabonMapProps {
  lang: Language;
}

export default function GabonMap({ lang }: GabonMapProps) {
  const mainHubs = [
    {
      city: "Libreville",
      role: lang === "fr" ? "Siège Administratif" : "Administrative HQ",
    },
    {
      city: "Port-Gentil",
      role: lang === "fr" ? "Hub Logistique Principal" : "Main Logistics Hub",
    },
    {
      city: "Franceville",
      role: lang === "fr" ? "Centre de Distribution" : "Distribution Center",
    },
    {
      city: "Oyem",
      role: lang === "fr" ? "Antenne Nord" : "Northern Branch",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pizolub-blue-night to-pizolub-blue-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #FF6B35 0%, transparent 50%), radial-gradient(circle at 80% 50%, #FFC627 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="flex space-x-3">
                <div className="w-12 h-1 bg-gabon-green" />
                <div className="w-12 h-1 bg-gabon-yellow" />
                <div className="w-12 h-1 bg-gabon-blue" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase font-display mb-4 leading-tight">
              {lang === "fr" ? "RÉSEAU LOGISTIQUE" : "LOGISTICS NETWORK"}
              <br />
              <span className="text-gabon-yellow italic">
                {lang === "fr" ? "DANS TOUT LE GABON" : "ACROSS GABON"}
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {lang === "fr"
                ? "Pizolub opère dans les 9 provinces du Gabon avec un réseau logistique moderne et efficace"
                : "Pizolub operates in all 9 provinces of Gabon with a modern and efficient logistics network"}
            </p>
          </motion.div>
        </div>

        {/* Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-white/10 shadow-2xl"
          >
            <svg
              viewBox="0 0 800 600"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background */}
              <rect width="800" height="600" fill="#0f172a" />

              {/* Gabon Provinces */}
              <rect
                x="350"
                y="80"
                width="130"
                height="100"
                fill="#FF7043"
                opacity="0.6"
                rx="4"
              />
              <text
                x="415"
                y="135"
                fill="#fff"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                Woleu-Ntem
              </text>

              <rect
                x="480"
                y="80"
                width="120"
                height="120"
                fill="#FF5722"
                opacity="0.6"
                rx="4"
              />
              <text
                x="540"
                y="145"
                fill="#fff"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                Bongo
              </text>

              <rect
                x="300"
                y="150"
                width="80"
                height="130"
                fill="#FF6B35"
                opacity="0.8"
                rx="4"
              />
              <text
                x="340"
                y="220"
                fill="#fff"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                Estuaire
              </text>
              <circle cx="350" cy="240" r="5" fill="#FFD700" />

              <rect
                x="250"
                y="220"
                width="50"
                height="100"
                fill="#FFB84D"
                opacity="0.6"
                rx="4"
              />
              <text
                x="275"
                y="265"
                fill="#fff"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                Ogooué-Maritime
              </text>

              <rect
                x="350"
                y="280"
                width="100"
                height="120"
                fill="#FFC627"
                opacity="0.6"
                rx="4"
              />
              <text
                x="400"
                y="345"
                fill="#000"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                Moyen-Ogooué
              </text>

              <rect
                x="450"
                y="320"
                width="110"
                height="100"
                fill="#FF8C42"
                opacity="0.6"
                rx="4"
              />
              <text
                x="505"
                y="370"
                fill="#000"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                Ogooué-Lolo
              </text>

              <rect
                x="500"
                y="380"
                width="130"
                height="120"
                fill="#F7931E"
                opacity="0.6"
                rx="4"
              />
              <text
                x="565"
                y="440"
                fill="#000"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                Haut-Ogooué
              </text>
              <circle cx="565" cy="420" r="5" fill="#FFD700" />

              <rect
                x="350"
                y="380"
                width="100"
                height="120"
                fill="#E94B3C"
                opacity="0.6"
                rx="4"
              />
              <text
                x="400"
                y="440"
                fill="#fff"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                Ngounié
              </text>

              <rect
                x="250"
                y="450"
                width="100"
                height="90"
                fill="#D9534F"
                opacity="0.6"
                rx="4"
              />
              <text
                x="300"
                y="495"
                fill="#fff"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
              >
                Nyanga
              </text>

              {/* Hub circles */}
              <circle
                cx="350"
                cy="240"
                r="12"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="2"
              />
              <circle
                cx="300"
                cy="300"
                r="12"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="2"
              />
              <circle
                cx="565"
                cy="420"
                r="12"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="2"
              />
              <circle
                cx="420"
                cy="150"
                r="12"
                fill="none"
                stroke="#FF6B35"
                strokeWidth="2"
              />

              {/* Connection lines */}
              <line
                x1="350"
                y1="240"
                x2="300"
                y2="300"
                stroke="#FF6B35"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                opacity="0.3"
              />
              <line
                x1="350"
                y1="240"
                x2="420"
                y2="150"
                stroke="#FF6B35"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            </svg>
          </motion.div>

          {/* Stats and Legend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Hubs */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-black text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-gabon-yellow" />
                {lang === "fr" ? "Hubs Logistiques" : "Logistics Hubs"}
              </h3>
              <div className="space-y-3">
                {mainHubs.map((hub, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    className="pb-3 border-b border-white/10 last:border-0"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gabon-yellow" />
                      <div>
                        <p className="text-white font-bold text-sm">
                          {hub.city}
                        </p>
                        <p className="text-gray-400 text-xs">{hub.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coverage Stats */}
            <div className="bg-gradient-to-br from-gabon-yellow/20 to-gabon-green/20 backdrop-blur-sm rounded-lg p-6 border border-gabon-yellow/30">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-gabon-yellow">9</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mt-1">
                    {lang === "fr" ? "Provinces" : "Provinces"}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black text-gabon-green">4+</div>
                  <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mt-1">
                    {lang === "fr" ? "Hubs Majeurs" : "Major Hubs"}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Legend */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h4 className="text-sm font-black text-white mb-3 uppercase tracking-wider">
                {lang === "fr" ? "Légende" : "Legend"}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#FF6B35" }}
                  />
                  <span className="text-xs text-gray-300">
                    {lang === "fr" ? "Siège Principal" : "Main HQ"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#FFD700" }}
                  />
                  <span className="text-xs text-gray-300">
                    {lang === "fr"
                      ? "Centre Opérationnel"
                      : "Operational Center"}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#FFC627" }}
                  />
                  <span className="text-xs text-gray-300">
                    {lang === "fr" ? "Zone de Couverture" : "Coverage Area"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
