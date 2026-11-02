import { siteConfig } from '@/config/site';

/** True for absolute web URLs and mailto links (anything that should not go through the router). */
export const isExternal = (url: string) => /^(https?:)?\/\//i.test(url) || url.startsWith('mailto:');

/** Props to spread on an <a> so external links open safely in a new tab. */
export const externalProps = (url: string) =>
  url.startsWith('mailto:') ? {} : ({ target: '_blank', rel: 'noopener noreferrer' } as const);

/** mailto link if an organization email is configured, otherwise null. */
export const contactHref = (subject?: string) =>
  siteConfig.contactEmail
    ? `mailto:${siteConfig.contactEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`
    : null;
