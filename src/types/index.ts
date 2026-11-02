/** Supported languages. To add one: extend this union, add src/i18n/<code>.ts and register it in src/i18n/index.tsx. */
export type Lang = 'en' | 'fr' | 'ar';

/**
 * Text that can optionally be translated.
 * - A plain string is shown as-is in every language.
 * - An object lets you give per-language versions; English is the fallback.
 */
export type Localized<T = string> = T | { en: T; fr?: T; ar?: T };

/* ---------- News ---------- */

export type AnnouncementCategory =
  | 'organization'
  | 'tournamentAnnouncement'
  | 'tournamentResult'
  | 'competitive'
  | 'roster'
  | 'community';

export interface Announcement {
  /** URL-safe unique id, used in the link: /#/news/<slug> */
  slug: string;
  title: Localized;
  /** ISO date: YYYY-MM-DD */
  date: string;
  category: AnnouncementCategory;
  /** Path under /public (e.g. "/images/news/launch.jpg") or a full URL. Optional: a branded fallback is shown. */
  thumbnail?: string;
  summary: Localized;
  /** Paragraphs. A line starting with "## " becomes a sub-heading, "- " lines become list items. */
  content: Localized<string[]>;
  /** Marks sample content so visitors are never misled. Remove (or set false) once the text is real. */
  placeholder?: boolean;
}

/* ---------- Tournaments ---------- */

export type RegistrationStatus = 'open' | 'comingSoon' | 'closed' | 'inProgress' | 'completed';

export interface Tournament {
  slug: string;
  name: Localized;
  /** ISO date (start). Leave undefined while the date is not confirmed. */
  date?: string;
  /** Optional end date (ISO). */
  endDate?: string;
  game: string;
  /** Short format line, e.g. "3v3 · Gem Grab, Brawl Ball, Heist" */
  format: Localized;
  status: RegistrationStatus;
  /** Prize info, only once confirmed. Leave undefined to show "To be announced". */
  prize?: Localized;
  /** Where the Register button goes (Discord channel or external platform). Falls back to the Discord invite. */
  registrationUrl?: string;
  summary: Localized;
  /** Sections shown on the tournament page. */
  details?: {
    registration?: Localized<string[]>;
    rules?: Localized<string[]>;
    formatAndStructure?: Localized<string[]>;
    prizes?: Localized<string[]>;
  };
  /** Final results, once the event is completed. */
  results?: { place: number; team: string }[];
  placeholder?: boolean;
}

export interface Champion {
  tournament: Localized;
  team: string;
  /** ISO date or year */
  date: string;
}

/* ---------- People ---------- */

export interface SocialLinks {
  x?: string;
  instagram?: string;
  youtube?: string;
  twitch?: string;
  tiktok?: string;
}

export interface Player {
  id: string;
  name: string;
  /** In-game name */
  ign: string;
  role?: Localized;
  /** Path under /public or full URL. Optional: initials avatar is shown. */
  image?: string;
  bio: Localized;
  achievements?: Localized<string[]>;
  socials?: SocialLinks;
  division: 'main' | 'academy';
  placeholder?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: Localized;
  image?: string;
  bio?: Localized;
  socials?: SocialLinks;
  placeholder?: boolean;
}

/* ---------- Partnerships ---------- */

export type PartnerIcon = 'cpu' | 'keyboard' | 'cloud' | 'calendar' | 'video';

export interface PartnershipCategory {
  id: string;
  icon: PartnerIcon;
  title: Localized;
  description: Localized;
}

export interface Partner {
  name: string;
  logo?: string;
  url?: string;
  tier?: string;
}
