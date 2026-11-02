/**
 * English is the reference dictionary: its shape defines the `Dictionary` type that fr.ts and ar.ts must match.
 * Add or rename a key here and TypeScript will tell you what is missing in the other languages.
 */
export const en = {
  meta: {
    title: 'Kings Esports | Built to compete. Born to conquer.',
    description:
      'Kings Esports is a competitive esports organization building a community and a roster. Primary game: Brawl Stars.',
  },

  nav: {
    home: 'Home',
    news: 'News',
    tournaments: 'Tournaments',
    roster: 'Roster',
    about: 'About',
    partnerships: 'Partnerships',
    joinDiscord: 'Join Discord',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    mainNavigation: 'Main navigation',
    skipToContent: 'Skip to content',
  },

  common: {
    readMore: 'Read more',
    viewAll: 'View all',
    backToNews: 'Back to news',
    backToTournaments: 'Back to tournaments',
    sample: 'Sample',
    sampleTitle: 'Sample content: replace with real information',
    tba: 'To be announced',
    register: 'Register',
    viewDetails: 'View details',
    opensInNewTab: '(opens in a new tab)',
    published: 'Published',
    date: 'Date',
    format: 'Format',
    prize: 'Prize',
    game: 'Game',
    status: 'Status',
    share: 'Share',
    imageLoading: 'Loading image',
  },

  category: {
    all: 'All',
    organization: 'Organization News',
    tournamentAnnouncement: 'Tournament Announcement',
    tournamentResult: 'Tournament Results',
    competitive: 'Competitive Update',
    roster: 'Roster Announcement',
    community: 'Community News',
  },

  status: {
    open: 'Registration open',
    comingSoon: 'Coming soon',
    closed: 'Registration closed',
    inProgress: 'In progress',
    completed: 'Completed',
  },

  hero: {
    eyebrow: 'Kings Esports',
    line1: 'Built to compete.',
    line2: 'Born to conquer.',
    intro:
      'Kings is a competitive esports organization built around one standard: perform. We are developing players, building a community and preparing to compete at a high level, beginning with Brawl Stars.',
    ctaJoin: 'Join our community',
    ctaExplore: 'Explore Kings',
    scroll: 'Scroll',
    est: 'Est.',
  },

  home: {
    news: {
      eyebrow: 'Latest announcements',
      title: 'News & updates',
      subtitle: 'Organization news, tournament announcements and competitive updates from Kings.',
    },
    tournaments: {
      eyebrow: 'Upcoming tournaments',
      title: 'Compete with Kings',
      subtitle: 'Open registrations and upcoming events. Sign-ups are handled on our official channels.',
      empty: 'No tournaments are scheduled yet. Join our Discord to be the first to know when one is announced.',
    },
    journey: {
      eyebrow: 'Our competitive journey',
      title: 'Building a team that lasts',
      intro:
        'Kings was founded in 2026. We are at the start of the road, and we are building it deliberately: strong foundations first, then results. This is our roadmap, not a list of achievements.',
      roadmapLabel: 'Roadmap',
      steps: [
        {
          title: 'Foundation',
          text: 'Establish a serious, well-run organization with clear standards from day one.',
        },
        {
          title: 'Community',
          text: 'Create a home for players and fans to meet, practise and take part in events.',
        },
        {
          title: 'Competition',
          text: 'Field a competitive roster, run tournaments and test ourselves against strong opposition.',
        },
        {
          title: 'Expansion',
          text: 'Grow the roster, develop academy talent and, in time, extend Kings beyond a single title.',
        },
      ],
      commitmentTitle: 'Our commitment to players',
      commitments: [
        { title: 'Development', text: 'Structured practice, honest feedback and a clear path from academy to main roster.' },
        { title: 'Fair play', text: 'Respect for opponents, for the rules and for the game we compete in.' },
        { title: 'Professionalism', text: 'Reliable communication and clear expectations, on and off the server.' },
      ],
    },
    team: {
      eyebrow: 'Meet the team',
      title: 'The roster',
      subtitle: 'The players competing under the Kings name.',
      cta: 'See the full roster',
    },
    join: {
      eyebrow: 'Join the kingdom',
      title: 'Your seat is waiting',
      text:
        'Our Discord is the home of Kings: official announcements, tournament sign-ups and a community of players who take the game seriously. Whether you play to compete or simply to improve, you are welcome.',
      cta: 'Join our Discord',
      points: ['Official announcements first', 'Tournament sign-ups', 'A community of competitive players'],
    },
    partners: {
      eyebrow: 'Partnerships',
      title: 'Grow with Kings',
      text:
        'Kings is building a serious organization from the ground up. We are open to partnerships with brands and organizations who want to be part of that story from the start.',
      cta: 'Explore partnerships',
    },
  },

  newsPage: {
    eyebrow: 'News & announcements',
    title: 'Latest from Kings',
    subtitle: 'Everything that matters at Kings: organization news, tournaments, results and roster moves.',
    empty: 'No announcements in this category yet.',
    notFoundTitle: 'Article not found',
    notFoundText: 'This announcement does not exist or may have been removed.',
    filterLabel: 'Filter by category',
  },

  tournamentsPage: {
    eyebrow: 'Tournaments',
    title: 'Compete. Prove it.',
    subtitle: 'Registration details, rules, formats, prizes and results for every Kings event.',
    upcoming: 'Upcoming tournaments',
    noUpcoming: 'No tournaments scheduled yet',
    noUpcomingText: 'We will announce events on Discord and on this page as soon as they are confirmed.',
    sections: {
      registration: 'Registration',
      rules: 'Rules',
      format: 'Format & match structure',
      prizes: 'Prizes',
    },
    generalRulesTitle: 'General rules',
    generalRules: [
      'Respect opponents, staff and the community at all times.',
      'Players must use their own accounts. Account sharing and smurfing are not allowed.',
      'Cheating, exploits and match-fixing result in disqualification.',
      'Rulings by tournament staff are final. Specific rules are published with each event.',
    ],
    generalRulesNote: 'These are general guidelines. Each tournament page lists its own rules, which take priority.',
    results: 'Previous results',
    noResults: 'No tournaments have been completed yet. Results will appear here after our first event.',
    hall: 'Hall of Champions',
    noChampions: 'The Hall of Champions is empty, for now. The first name on it will be earned.',
    place: 'Place',
    team: 'Team',
    registerCta: 'Register now',
    registerComingSoon: 'Registration not open yet',
    moreInfo: 'Where registration is handled',
    registrationHandledOn: 'Registration is handled through our official channel. The button opens it in a new tab.',
    notFoundTitle: 'Tournament not found',
    notFoundText: 'This tournament does not exist or may have been removed.',
    detailsComingSoon: 'Details will be published soon.',
    dateTba: 'Date to be announced',
  },

  rosterPage: {
    eyebrow: 'Competitive roster',
    title: 'The players of Kings',
    subtitle: 'The people competing, developing and leading under the Kings name.',
    main: 'Main roster',
    mainText: 'Our top competitive players.',
    academy: 'Academy',
    academyText: 'Rising talent developing towards the main roster.',
    staff: 'Staff',
    staffText: 'The people who run Kings behind the scenes.',
    ign: 'In-game name',
    roleTba: 'Role to be announced',
    achievements: 'Achievements',
    noAchievements: 'No achievements recorded yet.',
    placeholderNote:
      'Profiles marked "Sample" are placeholders. Real players and staff will be introduced here once confirmed.',
    socials: 'Social links',
  },

  aboutPage: {
    eyebrow: 'About Kings',
    title: 'Who we are',
    subtitle: 'A competitive organization with a simple belief: standards come first, results follow.',
    sections: {
      who: {
        title: 'Who we are',
        text: 'Kings Esports is an esports organization founded in 2026. Our primary title is Brawl Stars, and we compete under a crowned lion in a shield. We are building Kings as a serious, professional organization that players can grow in and a community can be proud of.',
      },
      mission: {
        title: 'Our mission',
        text: 'To give ambitious players a professional, supportive environment in which to compete, improve and be recognized for their work.',
      },
      vision: {
        title: 'Our vision',
        text: 'To become a respected, internationally minded esports organization, known for the standards we hold, the players we develop and the community around us.',
      },
      philosophy: {
        title: 'Competitive philosophy',
        text: 'Preparation over hype. We value discipline, teamwork, honest feedback and respect for every opponent. We believe results are earned through consistent work, and we measure ourselves against strong competition.',
      },
      community: {
        title: 'Our community',
        text: 'An organization is only as strong as the people around it. Our community is open to players of every level, and it is where Kings talent is noticed, supported and, eventually, developed.',
      },
      ambitions: {
        title: 'Long-term ambitions',
        text: 'Our goals are to compete consistently at a high level in Brawl Stars, build an academy pathway, host well-run tournaments, form lasting partnerships and, when the time is right, expand into other competitive games.',
      },
    },
    valuesTitle: 'What we stand for',
    values: [
      { title: 'Discipline', text: 'Consistent preparation, on and off the server.' },
      { title: 'Teamwork', text: 'We win and lose together, and improve together.' },
      { title: 'Respect', text: 'For opponents, teammates, staff and the game.' },
      { title: 'Ambition', text: 'We aim high and hold ourselves to it.' },
    ],
    ctaTitle: 'Be part of what we are building',
    ctaText: 'Join the community, follow our progress and help write the first chapter of Kings.',
  },

  partnersPage: {
    eyebrow: 'Partnerships',
    title: 'Partner with Kings',
    subtitle: 'We are building a serious organization and we are looking for partners who share that ambition.',
    introTitle: 'About Kings',
    intro:
      'Kings Esports is a competitive organization founded in 2026, with Brawl Stars as its primary title. We combine a competitive roster, an open community and a long-term plan to build a respected, internationally minded brand.',
    visionTitle: 'Our vision',
    vision:
      'We want Kings to be known for professionalism, player development and the community around it. Partners who join early help shape that story and grow with it.',
    activitiesTitle: 'Our community and competitive activities',
    activities: [
      'A competitive roster and academy pathway in Brawl Stars',
      'Community tournaments and events',
      'An active Discord community',
      'Content on our social channels',
    ],
    opportunitiesTitle: 'Collaboration opportunities',
    opportunitiesIntro: 'We are open to conversations in the following areas. Every partnership is tailored to both sides.',
    currentPartnersTitle: 'Current partners',
    noPartners: 'We have not announced any partners yet. The first spot is open.',
    mediaKitTitle: 'Audience & media kit',
    mediaKitText:
      'Audience figures and a media kit will be published here once we have verified numbers to share. We would rather show real data later than inflated numbers now.',
    contactTitle: 'Start a conversation',
    contactText: 'Tell us about your brand and what you have in mind. We will get back to you.',
    contactCta: 'Contact us',
    emailSoon: 'Our organization email is coming soon. For now, reach us through our Discord server.',
  },

  footer: {
    tagline: 'Built to compete. Born to conquer.',
    explore: 'Explore',
    community: 'Community',
    followUs: 'Follow us',
    joinText: 'Join the Kings community on Discord.',
    disclaimer:
      'Kings Esports is an independent organization. It is not affiliated with, endorsed, sponsored or specifically approved by Supercell, and Supercell is not responsible for it. Brawl Stars is a trademark of Supercell.',
    rights: 'All rights reserved.',
    followOn: 'Follow Kings on',
  },

  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to home',
  },
};

export type Dictionary = typeof en;
