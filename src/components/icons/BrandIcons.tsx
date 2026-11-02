import type { SVGProps } from 'react';

/** Minimal brand glyphs (lucide-react no longer ships brand icons). All inherit `currentColor`. */
type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
};

export const XIcon = (props: IconProps) => (
  <svg {...base} fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const YouTubeIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" {...props}>
    <rect x="2.5" y="5" width="19" height="14" rx="4.5" />
    <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const DiscordIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8.2 6.4C9.4 6.1 10.7 6 12 6s2.6.1 3.8.4c1.6 2.1 2.6 4.6 3 7.8-1.2.9-2.6 1.6-4.1 2l-1-1.6M8.2 6.4C6.6 8.5 5.6 11 5.2 14.2c1.2.9 2.6 1.6 4.1 2l1-1.6M8.6 15.2c2.1.8 4.7.8 6.8 0" />
    <circle cx="9.3" cy="11.6" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="14.7" cy="11.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const TwitchIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 3h16v11l-4 4h-4l-3 3v-3H4z" />
    <path d="M12 7.5v3.5M16 7.5v3.5" />
  </svg>
);

export const TikTokIcon = (props: IconProps) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 3.5v11.2a3.7 3.7 0 1 1-3.7-3.7" />
    <path d="M14 3.5c.3 2.4 1.9 4 4.3 4.3" />
  </svg>
);
