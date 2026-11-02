import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import SocialLinks from '@/components/ui/SocialLinks';
import { DiscordIcon } from '@/components/icons/BrandIcons';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const links = [
    { to: '/', label: t.nav.home },
    { to: '/news', label: t.nav.news },
    { to: '/tournaments', label: t.nav.tournaments },
    { to: '/roster', label: t.nav.roster },
    { to: '/about', label: t.nav.about },
    { to: '/partnerships', label: t.nav.partnerships },
  ];

  return (
    <footer className="relative overflow-hidden border-t-[6px] border-brand bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 start-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.06)] rtl:translate-x-1/2"
      >
        {siteConfig.shortName}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Logo size={72} className="cut" />
              <div className="leading-none">
                <p className="font-display text-4xl font-extrabold uppercase tracking-[0.06em]">{siteConfig.shortName}</p>
                <p className="mt-1 font-display text-sm font-bold uppercase tracking-[0.42em] text-brand-light">Esports</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white/90">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label={t.footer.explore} className="md:col-span-3">
            <h2 className="mb-5 font-display text-lg font-bold uppercase tracking-[0.25em] text-brand-light">{t.footer.explore}</h2>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-display text-xl font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="mb-5 font-display text-lg font-bold uppercase tracking-[0.25em] text-brand-light">{t.footer.community}</h2>
            <p className="mb-5 text-white/75">{t.footer.joinText}</p>
            <Button
              variant="red"
              href={siteConfig.discordUrl}
              arrow={false}
              icon={<DiscordIcon width={20} height={20} />}
              externalHint={t.common.opensInNewTab}
            >
              {t.nav.joinDiscord}
            </Button>

            <h2 className="mb-4 mt-9 font-display text-lg font-bold uppercase tracking-[0.25em] text-brand-light">{t.footer.followUs}</h2>
            <SocialLinks />

            {siteConfig.contactEmail && (
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="mt-6 inline-flex items-center gap-2 text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                <Mail size={18} aria-hidden />
                {siteConfig.contactEmail}
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-sm leading-relaxed text-white/55">{t.footer.disclaimer}</p>
          <p className="mt-4 text-sm text-white/55">
            © {siteConfig.founded}–{year} {siteConfig.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
