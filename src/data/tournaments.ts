import type { Champion, Tournament } from '@/types';

/**
 * TOURNAMENTS
 * -----------
 * Copy a block to add a tournament. Each one gets its own detail page at /#/tournaments/<slug>.
 *
 * - `date` is optional: leave it out until the date is confirmed ("Date to be announced" is shown).
 * - `prize` is optional: leave it out until confirmed ("To be announced" is shown). Never guess a prize.
 * - `registrationUrl` is where the Register button goes (Discord channel link or external platform).
 *   If omitted, `defaultRegistrationUrl` from src/config/site.ts is used.
 * - `status`: 'comingSoon' | 'open' | 'closed' | 'inProgress' | 'completed'
 *   Tournaments marked 'completed' move to "Previous results" automatically; add `results` to list placings.
 * - Delete `placeholder: true` once the information is real.
 */
export const tournaments: Tournament[] = [
  {
    slug: 'kings-community-cup-sample',
    name: {
      en: 'Kings Community Cup (sample)',
      fr: 'Kings Community Cup (exemple)',
      ar: 'كأس مجتمع كينغز (نموذج)',
    },
    game: 'Brawl Stars',
    format: {
      en: '3v3 · Gem Grab, Brawl Ball, Heist (sample format)',
      fr: '3v3 · Gem Grab, Brawl Ball, Heist (format d’exemple)',
      ar: '3 ضد 3 · Gem Grab وBrawl Ball وHeist (نظام تجريبي)',
    },
    status: 'comingSoon',
    summary: {
      en: 'A sample tournament entry showing how an upcoming event is presented. Replace it with a real Kings event: name, date, format and registration link.',
      fr: 'Un exemple de tournoi pour montrer la présentation d’un événement à venir. Remplacez-le par un vrai événement Kings : nom, date, format et lien d’inscription.',
      ar: 'نموذج بطولة يوضح كيف يُعرض حدث قادم. استبدله بفعالية حقيقية من كينغز: الاسم والموعد والنظام ورابط التسجيل.',
    },
    details: {
      registration: {
        en: [
          'Registration details will be published here once the event is confirmed.',
          'Sign-ups are handled through our official Discord server. The Register button opens it in a new tab.',
        ],
        fr: [
          'Les détails d’inscription seront publiés ici dès que l’événement sera confirmé.',
          'Les inscriptions sont gérées via notre serveur Discord officiel. Le bouton S’inscrire l’ouvre dans un nouvel onglet.',
        ],
        ar: [
          'ستُنشر تفاصيل التسجيل هنا بمجرد تأكيد الفعالية.',
          'تتم عمليات التسجيل عبر خادم ديسكورد الرسمي. يفتح زر التسجيل الخادم في تبويب جديد.',
        ],
      },
      rules: {
        en: [
          'Tournament-specific rules will be listed here.',
          '- Team size, substitutes and eligibility',
          '- Accepted game modes and map pool',
          '- Conduct and disqualification rules',
        ],
        fr: [
          'Les règles propres au tournoi seront listées ici.',
          '- Taille des équipes, remplaçants et éligibilité',
          '- Modes de jeu et pool de cartes acceptés',
          '- Règles de conduite et de disqualification',
        ],
        ar: [
          'ستُدرج هنا القواعد الخاصة بالبطولة.',
          '- حجم الفريق والبدلاء وشروط الأهلية',
          '- أنماط اللعب وقائمة الخرائط المعتمدة',
          '- قواعد السلوك والاستبعاد',
        ],
      },
      formatAndStructure: {
        en: [
          'The bracket type, number of rounds and match structure (for example best-of-three) will be described here.',
        ],
        fr: [
          'Le type de tableau, le nombre de tours et la structure des matchs (par exemple au meilleur des trois) seront décrits ici.',
        ],
        ar: [
          'سيُوصف هنا نوع الجدول وعدد الأدوار وهيكل المباريات (مثل أفضل ثلاث مباريات).',
        ],
      },
      prizes: {
        en: ['Prize information will be shared here only once it is confirmed.'],
        fr: ['Les informations sur les récompenses ne seront communiquées ici qu’une fois confirmées.'],
        ar: ['ستُعرض معلومات الجوائز هنا فقط بعد تأكيدها.'],
      },
    },
    placeholder: true,
  },
];

/**
 * HALL OF CHAMPIONS
 * Only add real winners of Kings tournaments. Empty until the first event is completed.
 * Example:
 *   { tournament: 'Kings Community Cup #1', team: 'Team Name', date: '2026-12-20' }
 */
export const champions: Champion[] = [];
