import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { DiscordIcon } from '@/components/icons/BrandIcons';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="grain relative isolate overflow-hidden bg-brand text-white">
      {/* Atmosphere: warm centre-right glow, darkening towards the edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_70%_at_72%_42%,var(--color-brand-light),transparent_70%),linear-gradient(135deg,#e0402f_0%,var(--color-brand)_38%,var(--color-brand-dark)_72%,var(--color-brand-deep)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_90%_at_50%_45%,transparent_55%,rgba(0,0,0,0.38)_100%)]"
      />
      {/* Oversized outlined wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.14em] start-[-1.5%] -z-10 select-none whitespace-nowrap font-display text-[31vw] font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)]"
      >
        {siteConfig.shortName}
      </div>
      {/* Slanted brand bars: black + white */}
      <div aria-hidden className="absolute inset-y-0 end-0 -z-10 hidden w-40 overflow-hidden lg:block">
        <div className="absolute -inset-y-10 end-12 w-10 -skew-x-[18deg] bg-ink rtl:skew-x-[18deg]" />
        <div className="absolute -inset-y-10 end-4 w-3 -skew-x-[18deg] bg-white rtl:skew-x-[18deg]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-14 sm:px-8 lg:min-h-[680px] lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        {/* Logo: first on mobile, right-hand column on desktop */}
        <div className="hero-in order-first flex justify-center lg:order-last" style={{ ['--d' as string]: '150ms' }}>
          <Logo
            size={440}
            blend
            priority
            className="h-auto w-[min(52vw,220px)] drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:w-[min(52vw,300px)] lg:w-[min(36vw,460px)]"
          />
        </div>

        <div>
          <p
            className="hero-in mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-sm font-bold uppercase tracking-[0.3em] sm:text-base"
            style={{ ['--d' as string]: '0ms' }}
          >
            <span className="h-[3px] w-10 bg-white" aria-hidden />
            <span>{t.hero.eyebrow}</span>
            <span className="text-white/60" aria-hidden>·</span>
            <span>{siteConfig.primaryGame}</span>
            <span className="text-white/60" aria-hidden>·</span>
            <span>
              {t.hero.est} {siteConfig.founded}
            </span>
          </p>

          <h1
            className="hero-in font-display text-[clamp(3rem,7.4vw,7.25rem)] font-extrabold uppercase leading-[0.88]"
            style={{ ['--d' as string]: '80ms' }}
          >
            <span className="block text-white">{t.hero.line1}</span>
            <span className="block text-ink">{t.hero.line2}</span>
          </h1>

          <p
            className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-white/95 sm:text-xl"
            style={{ ['--d' as string]: '180ms' }}
          >
            {t.hero.intro}
          </p>

          <div className="hero-in mt-9 flex flex-col gap-4 sm:flex-row" style={{ ['--d' as string]: '260ms' }}>
            <Button
              variant="white"
              size="lg"
              href={siteConfig.discordUrl}
              arrow={false}
              icon={<DiscordIcon width={24} height={24} />}
              externalHint={t.common.opensInNewTab}
            >
              {t.hero.ctaJoin}
            </Button>
            <Button variant="outlineWhite" size="lg" href="/about">
              {t.hero.ctaExplore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
