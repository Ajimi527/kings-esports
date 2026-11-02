/**
 * CENTRAL SITE CONFIGURATION
 * --------------------------
 * Every link, handle and contact detail lives here. Edit this one file to change them everywhere.
 * Leave a value as an empty string ('') to hide it until you have it.
 */
export const siteConfig = {
  name: 'KINGS ESPORTS',
  shortName: 'KINGS',
  slogan: 'BUILT TO COMPETE. BORN TO CONQUER.',
  founded: 2026,
  primaryGame: 'Brawl Stars',

  /** Discord invitation. Used by every JOIN DISCORD / JOIN OUR COMMUNITY button. */
  discordUrl: 'https://discord.gg/hqQPcFdYF',

  /**
   * Organization email used by CONTACT US buttons.
   * Official organization email.
   * While empty, the buttons send people to Discord instead and the site says email is coming soon.
   */
  contactEmail: 'kingsteamtn@outlook.com',

  /** Social media. Empty string = the icon is not shown. */
  socials: {
    youtube: 'https://www.youtube.com/@KingsTeamTN',
    x: 'https://x.com/afterbrawl',
    instagram: 'https://www.instagram.com/kingsteamtn',
    twitch: '',
    tiktok: '',
  },

  /** Where tournament "Register" buttons go when a tournament has no registrationUrl of its own. */
  defaultRegistrationUrl: 'https://discord.gg/hqQPcFdYF',

  /** Show a small "SAMPLE" tag on content flagged `placeholder: true` in the data files. */
  showPlaceholderBadges: true,

  /** Public paths of brand assets (files live in /public/images). */
  logo: {
    /** Official logo on its red background (navbar, footer, About) */
    src: './images/kings-logo.jpg',
    src2x: './images/kings-logo@2x.jpg',
    /** Same logo as a transparent white emblem, for use on any coloured background (hero, cards) */
    mark: './images/kings-mark.png',
  },
  /** Cinematic hero background (cleaned version of the official banner, no text) */
  heroBackground: './images/hero-bg.jpg',
} as const;

export type SocialKey = keyof typeof siteConfig.socials;
