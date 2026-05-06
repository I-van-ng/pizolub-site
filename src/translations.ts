export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      home: "ACCUEIL",
      products: "NOS PRODUITS",
      activities: "NOS ACTIVITÉS",
      coverage: "ZONE DE COUVERTURE",
      partners: "PARTENAIRES",
      contact: "CONTACT",
    },
    hero: {
      badge: "Fierté Nationale • Excellence Industrielle",
      title1: "L'ÉNERGIE",
      title2: "D'UN GABON",
      title3: "QUI AVANCE",
      desc: "Depuis 1978, Pizolub accompagne chaque moteur, chaque machine et chaque foyer gabonais avec des lubrifiants conçus avec la rigueur de notre terre.",
      btnSavoirFaire: "Notre Savoir-Faire",
      btnProducts: "Nos Produits",
      statsLabel: "Au service du Gabon",
    },
    activities: {
      sections: [
        {
          title: "NOTRE HISTOIRE",
          subtitle: "Un héritage gabonais forgé dans l'acier et l'huile",
          content: "Depuis notre création à Port-Gentil en 1978, Pizolub est le témoin et l'acteur de l'essor industriel du Gabon.",
        },
        {
          title: "SAVOIR-FAIRE LOCAL",
          subtitle: "L'expertise de nos fils et filles du pays",
          content: "Nos laboratoires et nos lignes de production sont animés par des experts gabonais.",
        }
      ]
    },
    products: {
      badge: "Conçu pour nos routes",
      title: "NOTRE GAMME DE LUBRIFIANTS",
      categories: {
        auto: { title: "AUTOMOBILE", desc: "Huiles moteur essence et diesel de haute qualité." },
        industry: { title: "INDUSTRIE", desc: "Solutions de graissage haute performance." },
        marine: { title: "MARINE", desc: "Lubrifiants spécialisés pour les moteurs marins." },
        special: { title: "SPÉCIALITÉS", desc: "Graisses et fluides techniques spécifiques." }
      }
    },
    contact: {
      title: "Contactez-nous",
      desc: "Une question ? Notre équipe est à votre disposition.",
      labelPhone: "Téléphone",
      labelEmail: "Email",
      labelAddress: "Adresse",
      formTitle: "Laissez-nous vos coordonnées",
      fieldName: "Nom complet",
      fieldEmail: "Email",
      fieldSubject: "Sujet",
      fieldMessage: "Message",
      btnSend: "Envoyer le message",
      btnSending: "Envoi en cours...",
      successTitle: "Message Envoyé !",
      successDesc: "Merci de nous avoir contactés.",
      btnAgain: "Envoyer un autre message"
    },
    coverage: {
      badge: "Réseau Logistique",
      title: "NOTRE DÉPLOIEMENT",
      desc: "Une présence stratégique en Afrique Centrale.",
      stats: { countries: "Pays Actifs", centers: "Centres" },
      legend: { active: "Territoires Actifs", transit: "Zones en Transit" },
      hudProduction: "Production Locale",
      hudFleet: "Flotte Active"
    },
    partnersSec: {
      badge: "ALLIANCES STRATÉGIQUES",
      title: "NOS PARTENAIRES",
      desc: "Relations solides avec des pétroliers de renom.",
      cards: [
        { title: "Qualité Garantie", desc: "Formulations de lubrifiants exigeantes." },
        { title: "Vente & Distribution", desc: "Présence accrue sur le terrain." }
      ],
      maillage: "Maillage Territorial",
      quote: "Ensemble, nous couvrons la zone CEMAC."
    },
    quality: {
      badge: "EXCELLENCE OPÉRATIONNELLE",
      title: "L'INDUSTRIE GABONAISE",
      desc: "Immersion au cœur de nos installations à Port-Gentil."
    },
    footer: {
      about: "À propos",
      aboutDesc: "Leader de la lubrification au Gabon.",
      newsletter: "Newsletter",
      newsletterBtn: "ABONNEZ-VOUS"
    },
    values: {
      badge: "NOS PILIERS",
      title: "LES VALEURS PIZOLUB",
      items: [
        { title: "TRAVAIL", desc: "L'engagement quotidien pour l'excellence industrielle." },
        { title: "DISCIPLINE", desc: "La rigueur dans nos processus et notre sécurité." },
        { title: "POLYVALENCE", desc: "L'adaptabilité aux défis du marché africain." }
      ]
    }
  },
  en: {
    nav: {
      home: "HOME",
      products: "OUR PRODUCTS",
      activities: "OUR ACTIVITIES",
      coverage: "COVERAGE",
      partners: "PARTNERS",
      contact: "CONTACT",
    },
    hero: {
      badge: "National Pride • Industrial Excellence",
      title1: "THE ENERGY",
      title2: "OF A GABON",
      title3: "MOVING FORWARD",
      desc: "Since 1978, Pizolub supports every engine with Gabonese rigor.",
      btnSavoirFaire: "Expertise",
      btnProducts: "Products",
      statsLabel: "Serving Gabon",
    },
    activities: {
      sections: [
        {
          title: "OUR HISTORY",
          subtitle: "A Gabonese heritage",
          content: "Since 1978, Pizolub is a key actor in Gabon's industrial rise.",
        },
        {
          title: "LOCAL EXPERTISE",
          subtitle: "Country's talent",
          content: "Our labs are staffed by Gabonese experts.",
        }
      ]
    },
    products: {
      badge: "Designed for our roads",
      title: "OUR LUBRICANTS",
      categories: {
        auto: { title: "AUTOMOTIVE", desc: "High-quality engine oils." },
        industry: { title: "INDUSTRY", desc: "High-performance solutions." },
        marine: { title: "MARINE", desc: "Specialized marine lubricants." },
        special: { title: "SPECIALTIES", desc: "Technical fluids." }
      }
    },
    contact: {
      title: "Contact Us",
      desc: "Questions? Our team is available.",
      labelPhone: "Phone",
      labelEmail: "Email",
      labelAddress: "Address",
      formTitle: "Leave your details",
      fieldName: "Full Name",
      fieldEmail: "Email",
      fieldSubject: "Subject",
      fieldMessage: "Message",
      btnSend: "Send",
      btnSending: "Sending...",
      successTitle: "Sent!",
      successDesc: "Thank you for contacting us.",
      btnAgain: "Send again"
    },
    coverage: {
      badge: "Logistics Network",
      title: "OUR DEPLOYMENT",
      desc: "Strategic presence in Central Africa.",
      stats: { countries: "Countries", centers: "Centers" },
      legend: { active: "Active", transit: "Transit" },
      hudProduction: "Local Production",
      hudFleet: "Active Fleet"
    },
    partnersSec: {
      badge: "STRATEGIC ALLIANCES",
      title: "OUR PARTNERS",
      desc: "Strong relations with renowned companies.",
      cards: [
        { title: "Quality Guaranteed", desc: "Demanding formulations." },
        { title: "Sales & Distribution", desc: "Regional presence." }
      ],
      maillage: "Territorial Network",
      quote: "Together, we cover the CEMAC zone."
    },
    quality: {
      badge: "OPERATIONAL EXCELLENCE",
      title: "GABONESE INDUSTRY",
      desc: "Immersion in the heart of our facilities in Port-Gentil."
    },
    footer: {
      about: "About",
      aboutDesc: "Leader in Gabon lubrication.",
      newsletter: "Newsletter",
      newsletterBtn: "SUBSCRIBE"
    },
    values: {
      badge: "OUR PILLARS",
      title: "PIZOLUB VALUES",
      items: [
        { title: "WORK", desc: "Daily commitment to industrial excellence." },
        { title: "DISCIPLINE", desc: "Rigour in our processes and safety." },
        { title: "VERSATILITY", desc: "Adaptability to African market challenges." }
      ]
    }
  }
};
