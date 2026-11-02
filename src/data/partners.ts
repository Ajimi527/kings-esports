import type { Partner, PartnershipCategory } from '@/types';

/**
 * PARTNERSHIP OPPORTUNITIES
 * These are the areas Kings is open to collaboration in. They are NOT existing partners.
 */
export const partnershipCategories: PartnershipCategory[] = [
  {
    id: 'gaming-tech',
    icon: 'cpu',
    title: { en: 'Gaming & technology', fr: 'Gaming et technologie', ar: 'الألعاب والتقنية' },
    description: {
      en: 'Games, platforms and tech brands that want to reach a competitive, engaged gaming audience.',
      fr: 'Jeux, plateformes et marques tech souhaitant toucher un public gaming compétitif et engagé.',
      ar: 'الألعاب والمنصات وعلامات التقنية الراغبة في الوصول إلى جمهور ألعاب تنافسي ومتفاعل.',
    },
  },
  {
    id: 'hardware',
    icon: 'keyboard',
    title: { en: 'Hardware & peripherals', fr: 'Matériel et périphériques', ar: 'الأجهزة والملحقات' },
    description: {
      en: 'Devices, accessories and equipment for our players and content, from phones to controllers and audio.',
      fr: 'Appareils, accessoires et équipements pour nos joueurs et notre contenu, des téléphones aux manettes et au son.',
      ar: 'أجهزة وملحقات ومعدات للاعبينا ومحتوانا، من الهواتف إلى أذرع التحكم والصوتيات.',
    },
  },
  {
    id: 'digital-services',
    icon: 'cloud',
    title: { en: 'Digital services', fr: 'Services numériques', ar: 'الخدمات الرقمية' },
    description: {
      en: 'Apps, software and online services that support players, teams and communities.',
      fr: 'Applications, logiciels et services en ligne au service des joueurs, des équipes et des communautés.',
      ar: 'تطبيقات وبرمجيات وخدمات إلكترونية تدعم اللاعبين والفرق والمجتمعات.',
    },
  },
  {
    id: 'events',
    icon: 'calendar',
    title: { en: 'Event partnerships', fr: 'Partenariats événementiels', ar: 'شراكات الفعاليات' },
    description: {
      en: 'Co-hosted tournaments, community events and activations built around competitive play.',
      fr: 'Tournois co-organisés, événements communautaires et activations autour de la compétition.',
      ar: 'بطولات مشتركة وفعاليات مجتمعية وأنشطة ترويجية قائمة على اللعب التنافسي.',
    },
  },
  {
    id: 'content',
    icon: 'video',
    title: { en: 'Content collaborations', fr: 'Collaborations de contenu', ar: 'التعاون في المحتوى' },
    description: {
      en: 'Joint videos, streams and social campaigns that tell the story of Kings and our partners.',
      fr: 'Vidéos, streams et campagnes sociales communes qui racontent l’histoire de Kings et de ses partenaires.',
      ar: 'فيديوهات وبثوث وحملات اجتماعية مشتركة تروي قصة كينغز وشركائها.',
    },
  },
];

/**
 * CURRENT PARTNERS
 * Leave empty until a partnership is officially agreed. Only add real, confirmed partners.
 * Example: { name: 'Brand Name', logo: './images/partners/brand.png', url: 'https://brand.com', tier: 'Official partner' }
 */
export const partners: Partner[] = [];
