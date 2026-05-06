import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Language, translations } from "../translations";

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[lang].contact;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
          <div className="lg:w-1/3 bg-pizolub-blue-dark p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 uppercase tracking-wider">
              {t.title}
            </h3>
            <p className="text-white/85 mb-8 md:mb-12 leading-relaxed text-sm">
              {t.desc}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <Phone className="w-5 h-5 text-pizolub-blue-light" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/75 mb-1">
                    {t.labelPhone}
                  </h4>
                  <p className="font-bold underline italic text-pizolub-blue-light text-base md:text-lg break-all">
                    (+241) 77 87 86 55
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <Mail className="w-5 h-5 text-pizolub-blue-light" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/75 mb-1">
                    {t.labelEmail}
                  </h4>
                  <p className="font-bold text-sm break-all">accueil@pizolub.ga</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full">
                  <MapPin className="w-5 h-5 text-pizolub-blue-light" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/75 mb-1">
                    {t.labelAddress}
                  </h4>
                  <p className="font-bold text-xs">
                    Port-Gentil, Ogooue-Maritime - Gabon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex-1 p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col"
                >
                  <h4 className="text-pizolub-blue-dark text-xl md:text-2xl font-black mb-6 md:mb-8">
                    {t.formTitle}
                  </h4>
                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow"
                  >
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        {t.fieldName}
                      </label>
                      <input
                        required
                        type="text"
                        className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                        placeholder="Ex: Jean Dupont"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        {t.fieldEmail}
                      </label>
                      <input
                        required
                        type="email"
                        className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        {t.fieldSubject}
                      </label>
                      <input
                        required
                        type="text"
                        className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                        placeholder="Comment pouvons-nous vous aider ?"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                        {t.fieldMessage}
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors resize-none"
                        placeholder="Votre message..."
                      />
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className={cn(
                          "bg-pizolub-blue text-white font-bold px-8 md:px-12 py-4 shadow-lg hover:bg-pizolub-blue-dark transition-all uppercase text-xs md:text-sm tracking-[0.18em] md:tracking-widest flex items-center space-x-3",
                          isSubmitting && "opacity-50 cursor-not-allowed",
                        )}
                      >
                        <span className="text-left">
                          {isSubmitting ? t.btnSending : t.btnSend}
                        </span>
                        {!isSubmitting && <Send className="w-4 h-4" />}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-6 md:p-12"
                >
                  <div className="w-20 h-20 bg-pizolub-blue/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-pizolub-blue" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-pizolub-blue-dark mb-4 uppercase">
                    {t.successTitle}
                  </h4>
                  <p className="text-gray-600 max-w-sm mb-8">
                    {t.successDesc}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-pizolub-blue-light font-bold uppercase tracking-widest text-xs hover:underline"
                  >
                    {t.btnAgain}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
