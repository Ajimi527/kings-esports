import type { Dictionary } from './en';

export const fr: Dictionary = {
  meta: {
    title: 'Kings Esports | Conçus pour la compétition. Nés pour conquérir.',
    description:
      "Kings Esports est une organisation esport compétitive qui construit une communauté et un roster. Jeu principal : Brawl Stars.",
  },

  nav: {
    home: 'Accueil',
    news: 'Actualités',
    tournaments: 'Tournois',
    roster: 'Roster',
    about: 'À propos',
    partnerships: 'Partenariats',
    joinDiscord: 'Rejoindre Discord',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    mainNavigation: 'Navigation principale',
    skipToContent: 'Aller au contenu',
  },

  common: {
    readMore: 'Lire la suite',
    viewAll: 'Tout voir',
    backToNews: 'Retour aux actualités',
    backToTournaments: 'Retour aux tournois',
    sample: 'Exemple',
    sampleTitle: 'Contenu d’exemple : à remplacer par des informations réelles',
    tba: 'À annoncer',
    register: "S'inscrire",
    viewDetails: 'Voir les détails',
    opensInNewTab: '(s’ouvre dans un nouvel onglet)',
    published: 'Publié le',
    date: 'Date',
    format: 'Format',
    prize: 'Récompense',
    game: 'Jeu',
    status: 'Statut',
    share: 'Partager',
    imageLoading: "Chargement de l'image",
  },

  category: {
    all: 'Tout',
    organization: "Actualités de l'organisation",
    tournamentAnnouncement: 'Annonce de tournoi',
    tournamentResult: 'Résultats de tournoi',
    competitive: 'Actualité compétitive',
    roster: 'Annonce du roster',
    community: 'Actualités de la communauté',
  },

  status: {
    open: 'Inscriptions ouvertes',
    comingSoon: 'Bientôt',
    closed: 'Inscriptions closes',
    inProgress: 'En cours',
    completed: 'Terminé',
  },

  hero: {
    eyebrow: 'Kings Esports',
    line1: 'Conçus pour la compétition.',
    line2: 'Nés pour conquérir.',
    intro:
      "Kings est une organisation esport compétitive construite autour d'une exigence : performer. Nous formons des joueurs, bâtissons une communauté et nous préparons à rivaliser au plus haut niveau, en commençant par Brawl Stars.",
    ctaJoin: 'Rejoindre la communauté',
    ctaExplore: 'Découvrir Kings',
    scroll: 'Défiler',
    est: 'Fondé en',
  },

  home: {
    news: {
      eyebrow: 'Dernières annonces',
      title: 'Actualités',
      subtitle: "Actualités de l'organisation, annonces de tournois et informations compétitives de Kings.",
    },
    tournaments: {
      eyebrow: 'Tournois à venir',
      title: 'Compétitionnez avec Kings',
      subtitle: 'Inscriptions ouvertes et événements à venir. Les inscriptions se font sur nos canaux officiels.',
      empty: "Aucun tournoi n'est programmé pour le moment. Rejoignez notre Discord pour être le premier informé.",
    },
    journey: {
      eyebrow: 'Notre parcours compétitif',
      title: 'Bâtir une équipe durable',
      intro:
        "Kings a été fondé en 2026. Nous sommes au début de la route et nous la construisons avec méthode : d'abord des fondations solides, ensuite les résultats. Voici notre feuille de route, pas une liste de réalisations.",
      roadmapLabel: 'Feuille de route',
      steps: [
        {
          title: 'Fondation',
          text: "Établir une organisation sérieuse et bien dirigée, avec des standards clairs dès le premier jour.",
        },
        {
          title: 'Communauté',
          text: 'Créer un lieu où joueurs et fans se retrouvent, s’entraînent et participent à des événements.',
        },
        {
          title: 'Compétition',
          text: 'Aligner un roster compétitif, organiser des tournois et nous mesurer à de solides adversaires.',
        },
        {
          title: 'Expansion',
          text: "Faire grandir le roster, former les talents de l'académie et, avec le temps, étendre Kings au-delà d'un seul jeu.",
        },
      ],
      commitmentTitle: 'Notre engagement envers les joueurs',
      commitments: [
        { title: 'Progression', text: "Entraînement structuré, retours honnêtes et un parcours clair de l'académie au roster principal." },
        { title: 'Fair-play', text: 'Respect des adversaires, des règles et du jeu dans lequel nous évoluons.' },
        { title: 'Professionnalisme', text: 'Communication fiable et attentes claires, en jeu comme en dehors.' },
      ],
    },
    team: {
      eyebrow: "Rencontrez l'équipe",
      title: 'Le roster',
      subtitle: 'Les joueurs qui concourent sous le nom de Kings.',
      cta: 'Voir tout le roster',
    },
    join: {
      eyebrow: 'Rejoignez le royaume',
      title: 'Votre place vous attend',
      text:
        "Notre Discord est la maison de Kings : annonces officielles, inscriptions aux tournois et une communauté de joueurs qui prennent le jeu au sérieux. Que vous jouiez pour la compétition ou pour progresser, vous êtes les bienvenus.",
      cta: 'Rejoindre notre Discord',
      points: ['Annonces officielles en premier', 'Inscriptions aux tournois', 'Une communauté de joueurs compétitifs'],
    },
    partners: {
      eyebrow: 'Partenariats',
      title: 'Grandissez avec Kings',
      text:
        "Kings construit une organisation sérieuse, de zéro. Nous sommes ouverts aux partenariats avec des marques et des organisations qui souhaitent faire partie de cette histoire dès le début.",
      cta: 'Découvrir les partenariats',
    },
  },

  newsPage: {
    eyebrow: 'Actualités et annonces',
    title: 'Les dernières nouvelles de Kings',
    subtitle: "Tout ce qui compte chez Kings : actualités de l'organisation, tournois, résultats et mouvements du roster.",
    empty: "Aucune annonce dans cette catégorie pour l'instant.",
    notFoundTitle: 'Article introuvable',
    notFoundText: "Cette annonce n'existe pas ou a peut-être été supprimée.",
    filterLabel: 'Filtrer par catégorie',
  },

  tournamentsPage: {
    eyebrow: 'Tournois',
    title: 'Compétitionnez. Prouvez-le.',
    subtitle: 'Inscriptions, règles, formats, récompenses et résultats de chaque événement Kings.',
    upcoming: 'Tournois à venir',
    noUpcoming: "Aucun tournoi programmé pour l'instant",
    noUpcomingText: 'Nous annoncerons les événements sur Discord et sur cette page dès leur confirmation.',
    sections: {
      registration: 'Inscription',
      rules: 'Règlement',
      format: 'Format et déroulement des matchs',
      prizes: 'Récompenses',
    },
    generalRulesTitle: 'Règles générales',
    generalRules: [
      'Respectez à tout moment les adversaires, le staff et la communauté.',
      'Les joueurs doivent utiliser leur propre compte. Le partage de compte et le smurfing sont interdits.',
      'La triche, les exploits et les matchs truqués entraînent une disqualification.',
      "Les décisions du staff du tournoi sont définitives. Les règles spécifiques sont publiées avec chaque événement.",
    ],
    generalRulesNote: 'Ce sont des lignes directrices générales. Chaque tournoi publie ses propres règles, qui prévalent.',
    results: 'Résultats précédents',
    noResults: "Aucun tournoi n'est terminé pour le moment. Les résultats apparaîtront ici après notre premier événement.",
    hall: 'Hall des champions',
    noChampions: "Le Hall des champions est vide, pour l'instant. Le premier nom y sera mérité.",
    place: 'Place',
    team: 'Équipe',
    registerCta: "S'inscrire maintenant",
    registerComingSoon: "Inscriptions pas encore ouvertes",
    moreInfo: "Où se font les inscriptions",
    registrationHandledOn: "Les inscriptions sont gérées sur notre canal officiel. Le bouton l'ouvre dans un nouvel onglet.",
    notFoundTitle: 'Tournoi introuvable',
    notFoundText: "Ce tournoi n'existe pas ou a peut-être été supprimé.",
    detailsComingSoon: 'Les détails seront bientôt publiés.',
    dateTba: 'Date à annoncer',
  },

  rosterPage: {
    eyebrow: 'Roster compétitif',
    title: 'Les joueurs de Kings',
    subtitle: 'Celles et ceux qui concourent, progressent et dirigent sous le nom de Kings.',
    main: 'Roster principal',
    mainText: 'Nos meilleurs joueurs compétitifs.',
    academy: 'Académie',
    academyText: 'Des talents en progression vers le roster principal.',
    staff: 'Staff',
    staffText: "Les personnes qui font tourner Kings en coulisses.",
    ign: 'Pseudo en jeu',
    roleTba: 'Rôle à annoncer',
    achievements: 'Palmarès',
    noAchievements: 'Aucun résultat enregistré pour le moment.',
    placeholderNote:
      'Les profils marqués « Exemple » sont des emplacements provisoires. Les vrais joueurs et membres du staff seront présentés ici une fois confirmés.',
    socials: 'Réseaux sociaux',
  },

  aboutPage: {
    eyebrow: 'À propos de Kings',
    title: 'Qui sommes-nous',
    subtitle: "Une organisation compétitive guidée par une conviction simple : l'exigence d'abord, les résultats ensuite.",
    sections: {
      who: {
        title: 'Qui sommes-nous',
        text: "Kings Esports est une organisation esport fondée en 2026. Notre jeu principal est Brawl Stars, et nous concourons sous un lion couronné dans un écusson. Nous construisons Kings comme une organisation sérieuse et professionnelle, dans laquelle les joueurs peuvent progresser et dont la communauté peut être fière.",
      },
      mission: {
        title: 'Notre mission',
        text: 'Offrir aux joueurs ambitieux un environnement professionnel et bienveillant pour concourir, progresser et voir leur travail reconnu.',
      },
      vision: {
        title: 'Notre vision',
        text: "Devenir une organisation esport respectée et ouverte sur l'international, reconnue pour ses standards, les joueurs qu'elle forme et la communauté qui l'entoure.",
      },
      philosophy: {
        title: 'Philosophie compétitive',
        text: "La préparation avant le bruit. Nous valorisons la discipline, l'esprit d'équipe, les retours honnêtes et le respect de chaque adversaire. Nous croyons que les résultats se gagnent par un travail constant, et nous nous mesurons à une concurrence solide.",
      },
      community: {
        title: 'Notre communauté',
        text: "Une organisation vaut ce que valent les personnes qui l'entourent. Notre communauté est ouverte aux joueurs de tous niveaux : c'est là que les talents de Kings sont repérés, soutenus et, à terme, formés.",
      },
      ambitions: {
        title: 'Ambitions à long terme',
        text: "Nos objectifs : concourir régulièrement à haut niveau sur Brawl Stars, bâtir un parcours d'académie, organiser des tournois bien menés, nouer des partenariats durables et, le moment venu, nous étendre à d'autres jeux compétitifs.",
      },
    },
    valuesTitle: 'Nos valeurs',
    values: [
      { title: 'Discipline', text: 'Une préparation constante, en jeu comme en dehors.' },
      { title: "Esprit d'équipe", text: 'Nous gagnons, perdons et progressons ensemble.' },
      { title: 'Respect', text: 'Des adversaires, coéquipiers, membres du staff et du jeu.' },
      { title: 'Ambition', text: 'Nous visons haut et nous nous y tenons.' },
    ],
    ctaTitle: 'Prenez part à ce que nous construisons',
    ctaText: "Rejoignez la communauté, suivez notre progression et aidez-nous à écrire le premier chapitre de Kings.",
  },

  partnersPage: {
    eyebrow: 'Partenariats',
    title: 'Devenez partenaire de Kings',
    subtitle: "Nous construisons une organisation sérieuse et cherchons des partenaires qui partagent cette ambition.",
    introTitle: 'À propos de Kings',
    intro:
      "Kings Esports est une organisation compétitive fondée en 2026, avec Brawl Stars comme jeu principal. Nous réunissons un roster compétitif, une communauté ouverte et un plan à long terme pour bâtir une marque respectée et ouverte sur l'international.",
    visionTitle: 'Notre vision',
    vision:
      "Nous voulons que Kings soit reconnu pour son professionnalisme, la progression de ses joueurs et la communauté qui l'entoure. Les partenaires qui nous rejoignent tôt contribuent à écrire cette histoire et grandissent avec elle.",
    activitiesTitle: 'Notre communauté et nos activités compétitives',
    activities: [
      "Un roster compétitif et un parcours d'académie sur Brawl Stars",
      'Des tournois et événements communautaires',
      'Une communauté Discord active',
      'Du contenu sur nos réseaux sociaux',
    ],
    opportunitiesTitle: 'Opportunités de collaboration',
    opportunitiesIntro: "Nous sommes ouverts à la discussion dans les domaines suivants. Chaque partenariat est adapté aux deux parties.",
    currentPartnersTitle: 'Partenaires actuels',
    noPartners: "Nous n'avons annoncé aucun partenaire pour l'instant. La première place est libre.",
    mediaKitTitle: 'Audience et kit média',
    mediaKitText:
      "Les chiffres d'audience et un kit média seront publiés ici dès que nous aurons des données vérifiées à partager. Nous préférons montrer des données réelles plus tard que des chiffres gonflés aujourd'hui.",
    contactTitle: 'Lançons la conversation',
    contactText: 'Parlez-nous de votre marque et de vos idées. Nous reviendrons vers vous.',
    contactCta: 'Nous contacter',
    emailSoon: "L'adresse e-mail de notre organisation arrive bientôt. En attendant, contactez-nous via notre serveur Discord.",
  },

  footer: {
    tagline: 'Conçus pour la compétition. Nés pour conquérir.',
    explore: 'Explorer',
    community: 'Communauté',
    followUs: 'Suivez-nous',
    joinText: 'Rejoignez la communauté Kings sur Discord.',
    disclaimer:
      "Kings Esports est une organisation indépendante. Elle n'est ni affiliée à Supercell, ni approuvée, parrainée ou spécifiquement autorisée par Supercell, et Supercell n'en est pas responsable. Brawl Stars est une marque de Supercell.",
    rights: 'Tous droits réservés.',
    followOn: 'Suivre Kings sur',
  },

  notFound: {
    title: 'Page introuvable',
    text: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};
