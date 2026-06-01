export type Language = "fr" | "en";

export const translations = {
  fr: {
    nav: {
      home: "ACCUEIL",
      history: "HISTORIQUE",
      products: "NOS PRODUITS",
      activities: "NOS ACTIVITÉS",
      coverage: "ZONE DE COUVERTURE",
      partners: "PARTENAIRES",
      contact: "CONTACT",
    },
    hero: {
      badge: "Fierté Nationale • Excellence Industrielle",
      title1:
        "L'expertise industrielle ",
      title2: "au service de la",
      title3: "performance énergetique",
      desc: "Depuis 1978, nous accompagnons la souveraineté industrielle Du Gabon en produisant localement pour transformer durablemen.",
      btnSavoirFaire: "Notre Savoir-Faire",
      btnProducts: "Nos Produits",
      statsLabel: "45 ans au service du Gabon",
    },
    activities: {
      sections: [
        {
          title: "NOTRE HISTOIRE",
          subtitle: "Un héritage gabonais forgé dans l'acier et l'huile",
          content:
            "Depuis notre création à Port-Gentil en 1978, Pizolub est le témoin et l'acteur de l'essor industriel du Gabon.",
        },
        {
          title: "SAVOIR-FAIRE LOCAL",
          subtitle: "L'expertise de nos fils et filles du pays",
          content:
            "Nos laboratoires et nos lignes de production sont animés par des experts gabonais.",
        },
      ],
    },
    products: {
      badge: "Conçu pour nos routes",
      title: "NOTRE GAMME DE LUBRIFIANTS",
      categories: {
        auto: {
          title: "AUTOMOBILE",
          desc: "Huiles moteur essence et diesel de haute qualité.",
        },
        industry: {
          title: "INDUSTRIE",
          desc: "Solutions de graissage haute performance.",
        },
        marine: {
          title: "MARINE",
          desc: "Lubrifiants spécialisés pour les moteurs marins.",
        },
        special: {
          title: "SPÉCIALITÉS",
          desc: "Graisses et fluides techniques spécifiques.",
        },
      },
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
      btnAgain: "Envoyer un autre message",
    },
    coverage: {
      badge: "Réseau Logistique",
      title: "NOTRE DÉPLOIEMENT",
      desc: "Une présence stratégique en Afrique Centrale.",
      stats: { countries: "Pays Actifs", centers: "Centres" },
      legend: { active: "Territoires Actifs", transit: "Zones en Transit" },
      hudProduction: "Production Locale",
      hudFleet: "Flotte Active",
    },
    partnersSec: {
      badge: "ALLIANCES STRATÉGIQUES",
      title: "NOS PARTENAIRES",
      desc: "Relations solides avec des pétroliers de renom.",
      cards: [
        {
          title: "Qualité Garantie",
          desc: "Formulations de lubrifiants exigeantes.",
        },
        {
          title: "Vente & Distribution",
          desc: "Présence accrue sur le terrain.",
        },
      ],
      maillage: "Maillage Territorial",
      quote: "Ensemble, nous couvrons la zone CEMAC.",
    },
    quality: {
      badge: "EXCELLENCE OPÉRATIONNELLE",
      title: "L'INDUSTRIE GABONAISE",
      desc: "Immersion au cœur de nos installations à Port-Gentil.",
    },
    history: {
      badge: "NOTRE HISTOIRE",
      title:
        "Depuis Port-Gentil, une histoire industrielle au service du Gabon",
      intro:
        "Depuis 1978, Pizolub accompagne le developpement du Gabon avec une meme exigence : produire, distribuer et faire progresser des solutions de lubrification pensees pour les realites du terrain. Nee a Port-Gentil, l'entreprise a grandi au rythme des besoins industriels, de la mobilite et des ambitions nationales.",
      founderLabel: "Figure fondatrice",
      founderName: "Mr Michel MOUBA",
      founderRole:
        "Premier Directeur Adjoint de Pizolub, responsable de l'aspect technique de l'entreprise.",
      founderDesc:
        "Son engagement a contribue a structurer les bases techniques de Pizolub et a installer une culture d'exigence, de maitrise operationnelle et de rigueur industrielle au service du developpement de l'entreprise.",
      quote:
        "Plus qu'une marque, Pizolub incarne une continuite industrielle, un ancrage national et une energie qui accompagne le progres.",
      milestones: [
        {
          year: "1978",
          title: "L'ancrage",
          desc: "L'histoire de Pizolub commence a Port-Gentil, au coeur d'un environnement strategique pour l'industrie gabonaise. Des ses debuts, l'entreprise affirme une vocation claire : batir localement une reference de confiance dans le domaine des lubrifiants.",
          imageAlt: "Archive du site historique Pizolub",
          image: "/history-origin.jpeg",
        },
        {
          year: "1989",
          title: "Une montee en capacite",
          desc: "Au fil des annees, Pizolub renforce ses installations, structure sa logistique et consolide son savoir-faire. Cette evolution progressive permet a l'entreprise de repondre aux exigences croissantes du marche avec rigueur, constance et proximite.",
          imageAlt: "Archive des zones de stockage Pizolub",
          image: "/history-capacity.jpeg",
        },
        {
          year: "1990s",
          title: "La force logistique",
          desc: "Le developpement de la manutention, du stockage et de la distribution donne a Pizolub une presence plus fluide sur le terrain. L'histoire de la marque se construit aussi dans sa capacite a livrer avec regularite et fiabilite.",
          imageAlt: "Vue d'ensemble des operations logistiques Pizolub",
          image: "/history-logistics-network.jpeg",
        },
        {
          year: "Aujourd'hui",
          title: "Le choix de l'exigence",
          desc: "Outils de production, maitrise des operations, controle de la qualite et engagement des equipes ont faconne une entreprise tournee vers la performance durable. Pizolub poursuit cette trajectoire avec une ambition intacte : servir le Gabon et la sous-region avec expertise et innovation.",
          imageAlt: "Installation industrielle Pizolub",
          image: "/history-production.jpeg",
        },
      ],
    },
    footer: {
      about: "À propos",
      aboutDesc: "Leader de la lubrification au Gabon.",
      newsletter: "Newsletter",
      newsletterBtn: "ABONNEZ-VOUS",
    },
    values: {
      badge: "NOS PILIERS",
      title: "LES VALEURS PIZOLUB",
      items: [
        {
          title: "TRAVAIL",
          desc: "L'engagement quotidien pour l'excellence industrielle.",
        },
        {
          title: "DISCIPLINE",
          desc: "La rigueur dans nos processus et notre sécurité.",
        },
        {
          title: "POLYVALENCE",
          desc: "L'adaptabilité aux défis du marché africain.",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "HOME",
      history: "HISTORY",
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
      statsLabel: "45 years serving Gabon",
    },
    activities: {
      sections: [
        {
          title: "OUR HISTORY",
          subtitle: "A Gabonese heritage",
          content:
            "Since 1978, Pizolub is a key actor in Gabon's industrial rise.",
        },
        {
          title: "LOCAL EXPERTISE",
          subtitle: "Country's talent",
          content: "Our labs are staffed by Gabonese experts.",
        },
      ],
    },
    products: {
      badge: "Designed for our roads",
      title: "OUR LUBRICANTS",
      categories: {
        auto: { title: "AUTOMOTIVE", desc: "High-quality engine oils." },
        industry: { title: "INDUSTRY", desc: "High-performance solutions." },
        marine: { title: "MARINE", desc: "Specialized marine lubricants." },
        special: { title: "SPECIALTIES", desc: "Technical fluids." },
      },
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
      btnAgain: "Send again",
    },
    coverage: {
      badge: "Logistics Network",
      title: "OUR DEPLOYMENT",
      desc: "Strategic presence in Central Africa.",
      stats: { countries: "Countries", centers: "Centers" },
      legend: { active: "Active", transit: "Transit" },
      hudProduction: "Local Production",
      hudFleet: "Active Fleet",
    },
    partnersSec: {
      badge: "STRATEGIC ALLIANCES",
      title: "OUR PARTNERS",
      desc: "Strong relations with renowned companies.",
      cards: [
        { title: "Quality Guaranteed", desc: "Demanding formulations." },
        { title: "Sales & Distribution", desc: "Regional presence." },
      ],
      maillage: "Territorial Network",
      quote: "Together, we cover the CEMAC zone.",
    },
    quality: {
      badge: "OPERATIONAL EXCELLENCE",
      title: "GABONESE INDUSTRY",
      desc: "Immersion in the heart of our facilities in Port-Gentil.",
    },
    history: {
      badge: "OUR HISTORY",
      title: "From Port-Gentil, an industrial story serving Gabon",
      intro:
        "Since 1978, Pizolub has supported Gabon's development with the same commitment: producing, distributing and improving lubrication solutions built for real operating conditions. Born in Port-Gentil, the company has grown alongside industrial needs, mobility and national ambition.",
      founderLabel: "Founding figure",
      founderName: "Mr Michel MOUBA",
      founderRole:
        "Pizolub's first Deputy Director, responsible for the company's technical dimension.",
      founderDesc:
        "His commitment helped establish Pizolub's technical foundations and shaped a culture of high standards, operational control and industrial discipline in support of the company's growth.",
      quote:
        "More than a brand, Pizolub stands for industrial continuity, national roots and an energy that moves progress forward.",
      milestones: [
        {
          year: "1978",
          title: "Local roots",
          desc: "Pizolub's story begins in Port-Gentil, within a strategic environment for Gabonese industry. From the start, the company embraced a clear mission: building a trusted local reference in lubricants.",
          imageAlt: "Historic Pizolub site archive",
          image: "/history-origin.jpeg",
        },
        {
          year: "1989",
          title: "Growing capacity",
          desc: "Over the years, Pizolub strengthened its facilities, organized its logistics and deepened its expertise. This gradual evolution enabled the company to meet growing market expectations with rigor, consistency and proximity.",
          imageAlt: "Historic archive of Pizolub storage areas",
          image: "/history-capacity.jpeg",
        },
        {
          year: "1990s",
          title: "Logistics strength",
          desc: "The development of handling, storage and distribution gave Pizolub a stronger presence on the ground. The brand's history is also built on its ability to deliver with consistency and reliability.",
          imageAlt: "Overview of historic Pizolub logistics operations",
          image: "/history-logistics-network.jpeg",
        },
        {
          year: "Today",
          title: "The discipline of excellence",
          desc: "Production tools, operational control, quality discipline and team commitment have shaped a company focused on durable performance. Pizolub continues this path with the same ambition: serving Gabon and the sub-region with expertise and innovation.",
          imageAlt: "Pizolub industrial installation",
          image: "/history-production.jpeg",
        },
      ],
    },
    footer: {
      about: "About",
      aboutDesc: "Leader in Gabon lubrication.",
      newsletter: "Newsletter",
      newsletterBtn: "SUBSCRIBE",
    },
    values: {
      badge: "OUR PILLARS",
      title: "PIZOLUB VALUES",
      items: [
        { title: "WORK", desc: "Daily commitment to industrial excellence." },
        { title: "DISCIPLINE", desc: "Rigour in our processes and safety." },
        {
          title: "VERSATILITY",
          desc: "Adaptability to African market challenges.",
        },
      ],
    },
  },
};
