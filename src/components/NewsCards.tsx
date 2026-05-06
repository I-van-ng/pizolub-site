import { motion } from "motion/react";
import { Clock, MessageCircle, Users } from "lucide-react";

const newsItems = [
  {
    title: "LA SATISFACTION DE NOS CLIENTS",
    category: "LA SATISFACTION DE NOS CLIENTS",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    contributions: 864,
    avis: 32,
    participants: 33,
    time: "Il y'a 2 jours",
    description: "Nous mettons tout en oeuvre pour garantir une qualité de service irréprochable et des produits répondant aux normes internationales."
  },
  {
    title: "L’ENVIRONNEMENT GABONAIS",
    category: "L’ENVIRONNEMENT GABONAIS",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    contributions: 345,
    avis: 24,
    participants: 382,
    time: "Il y'a 4 jours",
    description: "Pizolub s'engage dans une démarche éco-responsable pour préserver la biodiversité exceptionnelle du Gabon."
  },
  {
    title: "L’ESSOR DE L’AFRIQUE",
    category: "L’ESSOR DE L’AFRIQUE",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    contributions: 678,
    avis: 91,
    participants: 576,
    time: "Il reste 22 jours",
    description: "Contribuer au développement économique du continent à travers l'innovation et le partage de savoir-faire industriel."
  }
];

export default function NewsCards() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {newsItems.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full"
            >
              {/* Image with overlay tags */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-pizolub-orange text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-pizolub-blue-dark font-black text-lg mb-4 uppercase leading-tight">
                  Engagés pour <br /> {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                  {item.description}
                  <button className="text-pizolub-blue-light font-bold text-xs ml-2 hover:underline">plus</button>
                </p>
                
                <div className="flex items-center text-[10px] text-gray-400 font-bold mb-4">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.time.toUpperCase()}
                </div>

                {/* Stats Bar */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-sm">
                        <div className="flex flex-col items-center">
                            <span className="text-pizolub-blue-dark font-bold text-xs">{item.contributions}</span>
                            <span className="text-[9px] text-gray-400 uppercase font-medium">Contributions</span>
                        </div>
                        <div className="w-px h-6 bg-gray-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-pizolub-blue-dark font-bold text-xs">{item.avis}</span>
                            <span className="text-[9px] text-gray-400 uppercase font-medium">Avis</span>
                        </div>
                        <div className="w-px h-6 bg-gray-200" />
                        <div className="flex flex-col items-center">
                            <span className="text-pizolub-blue-dark font-bold text-xs">{item.participants}</span>
                            <span className="text-[9px] text-gray-400 uppercase font-medium">Participants</span>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
