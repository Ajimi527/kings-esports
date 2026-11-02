import type { ComponentType, SVGProps } from 'react';
import { siteConfig, type SocialKey } from '@/config/site';
import { useI18n } from '@/i18n';
import { DiscordIcon, InstagramIcon, TikTokIcon, TwitchIcon, XIcon, YouTubeIcon } from '@/components/icons/BrandIcons';

const icons: Record<SocialKey | 'discord', { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }> = {
  discord: { label: 'Discord', Icon: DiscordIcon },
  youtube: { label: 'YouTube', Icon: YouTubeIcon },
  x: { label: 'X', Icon: XIcon },
  instagram: { label: 'Instagram', Icon: InstagramIcon },
  twitch: { label: 'Twitch', Icon: TwitchIcon },
  tiktok: { label: 'TikTok', Icon: TikTokIcon },
};

interface SocialLinksProps {
  /** Include the Discord invite as the first icon */
  includeDiscord?: boolean;
  /** Override links, e.g. a player's own socials. Defaults to the organization's socials. */
  links?: Partial<Record<SocialKey, string>>;
  className?: string;
  size?: number;
  tone?: 'onDark' | 'onLight';
}

export default function SocialLinks({ includeDiscord = false, links, className = '', size = 22, tone = 'onDark' }: SocialLinksProps) {
  const { t } = useI18n();
  const source = links ?? siteConfig.socials;
  const entries: { key: SocialKey | 'discord'; url: string }[] = [];
  if (includeDiscord && siteConfig.discordUrl) entries.push({ key: 'discord', url: siteConfig.discordUrl });
  (Object.keys(icons) as (SocialKey | 'discord')[]).forEach((key) => {
    if (key === 'discord') return;
    const url = source[key];
    if (url) entries.push({ key, url });
  });
  if (entries.length === 0) return null;

  const toneClasses =
    tone === 'onDark'
      ? 'text-white ring-white/30 hover:bg-brand hover:ring-brand'
      : 'text-ink ring-ink/25 hover:bg-ink hover:text-white hover:ring-ink';

  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {entries.map(({ key, url }) => {
        const { label, Icon } = icons[key];
        return (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.footer.followOn} ${label} ${t.common.opensInNewTab}`}
              title={label}
              className={`cut-sm flex h-11 w-11 items-center justify-center ring-1 ring-inset transition-colors duration-200 ${toneClasses}`}
            >
              <Icon width={size} height={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
