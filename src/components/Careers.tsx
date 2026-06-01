import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Briefcase, MapPin, Clock3, Send, CheckCircle2 } from "lucide-react";
import { Language } from "../translations";

interface CareersProps {
  lang: Language;
}

const content = {
  fr: {
    badge: "RECRUTEMENT",
    title: "REJOIGNEZ L'AVENTURE PIZOLUB",
    desc:
      "Nous recherchons des profils engages pour accompagner notre croissance industrielle, logistique et commerciale au Gabon et dans la sous-region.",
    jobsTitle: "Postes ouverts",
    applyTitle: "Postuler maintenant",
    applyDesc:
      "Envoyez votre candidature spontanee ou postulez a l'un des postes actuellement ouverts.",
    fields: {
      fullName: "Nom complet",
      email: "Email",
      phone: "Telephone",
      job: "Poste vise",
      experience: "Experience",
      message: "Message",
      cv: "CV / Portfolio",
    },
    placeholders: {
      fullName: "Ex: Jean Mbadinga",
      email: "jean@email.com",
      phone: "(+241) 00 00 00 00",
      job: "Selectionnez un poste",
      experience: "Ex: 5 ans en maintenance industrielle",
      message: "Parlez-nous de votre parcours et de votre motivation...",
      cv: "Lien Drive, Dropbox ou portfolio",
    },
    submit: "Envoyer ma candidature",
    sending: "Envoi en cours...",
    success: "Candidature envoyee",
    successDesc:
      "Merci. Notre equipe RH reviendra vers vous apres etude de votre profil.",
    contract: "Temps plein",
    location: "Port-Gentil",
    jobs: [
      {
        title: "Maintenance",
        type: "Temps plein",
        place: "Port-Gentil",
        summary:
          "Assurer l'entretien preventif et correctif des equipements afin de garantir la continuite de la production.",
      },
      {
        title: "Production",
        type: "Temps plein",
        place: "Port-Gentil",
        summary:
          "Participer aux operations de fabrication, de conditionnement et au suivi des procedures de production.",
      },
      {
        title: "Technicien de laboratoire",
        type: "Temps plein",
        place: "Port-Gentil",
        summary:
          "Participer aux controles qualite, aux tests produits et au suivi des procedures techniques.",
      },
    ],
  },
  en: {
    badge: "CAREERS",
    title: "JOIN THE PIZOLUB JOURNEY",
    desc:
      "We are looking for committed talent to support our industrial, logistics, and commercial growth in Gabon and across the region.",
    jobsTitle: "Open positions",
    applyTitle: "Apply now",
    applyDesc:
      "Send us a spontaneous application or apply for one of our current openings.",
    fields: {
      fullName: "Full name",
      email: "Email",
      phone: "Phone",
      job: "Target position",
      experience: "Experience",
      message: "Message",
      cv: "CV / Portfolio",
    },
    placeholders: {
      fullName: "Ex: Jean Mbadinga",
      email: "jean@email.com",
      phone: "(+241) 00 00 00 00",
      job: "Select a position",
      experience: "Ex: 5 years in industrial maintenance",
      message: "Tell us about your background and motivation...",
      cv: "Drive, Dropbox, or portfolio link",
    },
    submit: "Send my application",
    sending: "Sending...",
    success: "Application sent",
    successDesc:
      "Thank you. Our HR team will get back to you after reviewing your profile.",
    contract: "Full time",
    location: "Port-Gentil",
    jobs: [
      {
        title: "Maintenance",
        type: "Full time",
        place: "Port-Gentil",
        summary:
          "Ensure preventive and corrective maintenance of equipment to guarantee production continuity.",
      },
      {
        title: "Production",
        type: "Full time",
        place: "Port-Gentil",
        summary:
          "Support manufacturing, packaging, and day-to-day production procedures.",
      },
      {
        title: "Laboratory technician",
        type: "Full time",
        place: "Port-Gentil",
        summary:
          "Support quality control, product testing, and technical procedure follow-up.",
      },
    ],
  },
} as const;

export default function Careers({ lang }: CareersProps) {
  const t = content[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      position: String(formData.get("position") || ""),
      experience: String(formData.get("experience") || ""),
      cvUrl: String(formData.get("cvUrl") || ""),
      message: String(formData.get("message") || ""),
    };

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "Votre candidature n'a pas pu être envoyée.");
      }

      form.reset();
      setIsSubmitting(false);
      setIsSubmitted(true);

      window.setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage(
        error instanceof Error ? error.message : "L'envoi a échoué. Réessayez.",
      );
    }
  };

  return (
    <section id="careers" className="py-16 md:py-24 bg-pizolub-blue-night">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="flex items-center justify-center space-x-3 mb-5">
            <div className="w-10 h-1 bg-gabon-yellow" />
            <p className="text-gabon-yellow text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
              {t.badge}
            </p>
            <div className="w-10 h-1 bg-gabon-yellow" />
          </div>
          <h2 className="section-title-underline text-white text-3xl md:text-6xl font-black leading-[0.95] font-display mb-6">
            {t.title}
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-start">
          <div>
            <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-[0.18em] mb-6">
              {t.jobsTitle}
            </h3>

            <div className="space-y-5">
              {t.jobs.map((job, index) => (
                <motion.article
                  key={job.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/6 border border-white/10 backdrop-blur-sm p-6 md:p-7"
                >
                  <div className="flex items-start justify-between gap-5 flex-col md:flex-row">
                    <div>
                      <div className="inline-flex items-center gap-2 text-gabon-yellow text-[11px] font-black uppercase tracking-[0.2em] mb-3">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </div>
                      <h4 className="text-white text-xl md:text-2xl font-black mb-3">
                        {job.title}
                      </h4>
                      <p className="text-white/75 leading-relaxed max-w-2xl">
                        {job.summary}
                      </p>
                    </div>

                    <a
                      href="#apply"
                      className="bg-pizolub-blue text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-pizolub-blue transition-all"
                    >
                      {lang === "fr" ? "Postuler" : "Apply"}
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-5 mt-6 text-white/70 text-sm">
                    <div className="inline-flex items-center gap-2">
                      <Clock3 className="w-4 h-4 text-pizolub-blue-light" />
                      {job.type}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-pizolub-blue-light" />
                      {job.place}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div
            id="apply"
            className="bg-white text-pizolub-blue-dark shadow-2xl p-6 md:p-8 lg:p-10"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.12em] mb-3">
                  {t.applyTitle}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {t.applyDesc}
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.fullName}
                    </label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      placeholder={t.placeholders.fullName}
                      className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.email}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder={t.placeholders.email}
                      className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.phone}
                    </label>
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder={t.placeholders.phone}
                      className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.job}
                    </label>
                    <select
                      required
                      name="position"
                      className="border-b-2 border-gray-200 py-3 bg-transparent focus:outline-none focus:border-pizolub-blue transition-colors"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t.placeholders.job}
                      </option>
                      {t.jobs.map((job) => (
                        <option key={job.title} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.experience}
                    </label>
                    <input
                      type="text"
                      name="experience"
                      placeholder={t.placeholders.experience}
                      className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.cv}
                    </label>
                    <input
                      type="url"
                      name="cvUrl"
                      placeholder={t.placeholders.cv}
                      className="border-b-2 border-gray-200 py-3 focus:outline-none focus:border-pizolub-blue transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-600">
                      {t.fields.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      placeholder={t.placeholders.message}
                      className="border-b-2 border-gray-200 py-3 resize-none focus:outline-none focus:border-pizolub-blue transition-colors"
                    />
                  </div>

                  {errorMessage && (
                    <p className="md:col-span-2 text-sm text-red-600 font-medium" role="alert">
                      {errorMessage}
                    </p>
                  )}

                  <div className="md:col-span-2 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 bg-pizolub-blue text-white px-8 py-4 text-xs md:text-sm font-black uppercase tracking-[0.18em] hover:bg-pizolub-blue-dark transition-all disabled:opacity-60"
                    >
                      <span>{isSubmitting ? t.sending : t.submit}</span>
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="min-h-[420px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-pizolub-blue/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-pizolub-blue" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
                  {t.success}
                </h3>
                <p className="text-gray-600 max-w-md leading-relaxed">
                  {t.successDesc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
