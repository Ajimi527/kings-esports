import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { DiscordIcon } from '@/components/icons/BrandIcons';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="grain relative isolate overflow-hidden bg-brand-deep text-white">
      {/* Official banner artwork (text removed), brightened towards the brand red */}
      <img
        src={siteConfig.heroBackground}
        alt=""
        aria-hidden
        fetchPriority="high"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[62%_center] [filter:saturate(1.2)_brightness(1.35)]"
      />
      {/* Brand-red wash keeps the 60% red balance */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(228,30,32,0.9)_0%,rgba(221,28,30,0.6)_45%,rgba(221,28,30,0.15)_100%)] mix-blend-screen" />
      {/* Legibility: darker behind the text, vignette at the edges */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(40,0,3,0.12)_0%,rgba(40,0,3,0.05)_55%,transparent_100%),radial-gradient(ellipse_100%_100%_at_50%_45%,transparent_60%,rgba(0,0,0,0.4)_100%)] rtl:bg-[linear-gradient(270deg,rgba(40,0,3,0.12)_0%,rgba(40,0,3,0.05)_55%,transparent_100%),radial-gradient(ellipse_100%_100%_at_50%_45%,transparent_60%,rgba(0,0,0,0.4)_100%)]" />
      {/* Slanted brand bars: black + white */}
      <div aria-hidden className="absolute inset-y-0 end-0 -z-10 hidden w-40 overflow-hidden lg:block">
        <div className="absolute -inset-y-10 end-12 w-10 -skew-x-[18deg] bg-ink rtl:skew-x-[18deg]" />
        <div className="absolute -inset-y-10 end-4 w-3 -skew-x-[18deg] bg-white rtl:skew-x-[18deg]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-14 sm:px-8 lg:min-h-[680px] lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        {/* Logo: first on mobile, right-hand column on desktop */}
        <div className="hero-in order-first flex justify-center lg:order-last" style={{ ['--d' as string]: '150ms' }}>
          <Logo
            size={460}
            mark
            priority
            className="h-auto w-[min(52vw,220px)] drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)] sm:w-[min(52vw,300px)] lg:w-[min(34vw,440px)]"
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
