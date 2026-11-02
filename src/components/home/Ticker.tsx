import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';

/** Slow marquee strip under the hero. Purely decorative, so hidden from assistive tech and paused for reduced motion. */
export default function Ticker() {
  const { t } = useI18n();
  const items = [
    `${siteConfig.shortName} Esports`,
    siteConfig.primaryGame,
    `${t.hero.est} ${siteConfig.founded}`,
    t.hero.line1,
    t.hero.line2,
  ];
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 font-display text-xl font-bold uppercase tracking-[0.3em] text-white">{item}</span>
          <span className="h-2.5 w-2.5 rotate-45 bg-brand" />
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden dir="ltr" className="overflow-hidden border-y border-white/10 bg-ink py-3.5">
      <div className="marquee-track flex w-max animate-marquee">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
