import { Users, FileText, BarChart3, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function Stats() {
  const stats = [
    { label: "CONSULTATION", value: "987 345", icon: Users },
    { label: "CLIENTS", value: "87 345", icon: BarChart3 },
    { label: "CONTRIBUTIONS", value: "98 345", icon: FileText },
    { label: "AVIS", value: "7 345", icon: MessageSquare }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-pizolub-blue-dark uppercase tracking-wider">
            Nos résultats actifs
          </h2>
          <div className="w-20 h-1.5 bg-pizolub-blue-light mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-pizolub-blue-dark flex items-center justify-center rounded-full mb-6 group-hover:bg-pizolub-blue transition-colors duration-300">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xs md:text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">
                {stat.label}
              </h3>
              <p className="text-2xl md:text-4xl font-black text-pizolub-blue-dark">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
