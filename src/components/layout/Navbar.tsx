import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { DiscordIcon } from '@/components/icons/BrandIcons';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/news', label: t.nav.news },
    { to: '/tournaments', label: t.nav.tournaments },
    { to: '/roster', label: t.nav.roster },
    { to: '/about', label: t.nav.about },
    { to: '/partnerships', label: t.nav.partnerships },
  ];

  // Close the mobile menu when navigating
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll while the mobile menu is open, close on Escape
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — ${t.nav.home}`}>
          <Logo size={44} className="cut-sm" priority />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-extrabold uppercase tracking-[0.08em]">{siteConfig.shortName}</span>
            <span className="font-display text-[0.7rem] font-bold uppercase tracking-[0.42em] text-brand-light">Esports</span>
          </span>
        </Link>

        <nav aria-label={t.nav.mainNavigation} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative block px-4 py-2 font-display text-lg font-bold uppercase tracking-[0.12em] transition-colors hover:text-brand-light ${
                      isActive
                        ? 'text-white after:absolute after:inset-x-4 after:-bottom-0.5 after:h-[3px] after:bg-brand'
                        : 'text-white/75'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button
            variant="red"
            href={siteConfig.discordUrl}
            arrow={false}
            icon={<DiscordIcon width={20} height={20} />}
            externalHint={t.common.opensInNewTab}
            className="!py-2.5"
          >
            {t.nav.joinDiscord}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={28} aria-hidden /> : <Menu size={28} aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-ink px-5 pb-10 pt-6 sm:px-8 lg:hidden"
        >
          <nav aria-label={t.nav.mainNavigation}>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 font-display text-4xl font-extrabold uppercase tracking-wide ${
                        isActive ? 'text-brand-light' : 'text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 space-y-6">
            <Button
              variant="red"
              size="lg"
              href={siteConfig.discordUrl}
              arrow={false}
              icon={<DiscordIcon width={22} height={22} />}
              externalHint={t.common.opensInNewTab}
              className="w-full"
            >
              {t.nav.joinDiscord}
            </Button>
            <LanguageSwitcher variant="segmented" />
          </div>
        </div>
      )}
    </header>
  );
}
