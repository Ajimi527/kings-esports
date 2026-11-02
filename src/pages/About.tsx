import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import { DiscordIcon } from '@/components/icons/BrandIcons';

export default function About() {
  const { t } = useI18n();
  const a = t.aboutPage;
  const s = a.sections;

  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />

      {/* Who we are */}
      <section className="on-light bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.92] md:text-6xl">{s.who.title}</h2>
            <p className="mt-6 text-xl leading-relaxed text-ink/80">{s.who.text}</p>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <Logo size={360} className="cut h-auto w-full max-w-xs shadow-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Mission + vision */}
      <section className="grain relative isolate overflow-hidden bg-brand py-16 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--color-brand-light)_0%,var(--color-brand)_45%,var(--color-brand-dark)_100%)]"
        />
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          {[s.mission, s.vision].map((block, i) => (
            <Reveal key={block.title} delay={i * 120} className={`cut p-8 md:p-12 ${i === 0 ? 'bg-ink text-white' : 'bg-white text-ink'}`}>
              <h2 className={`font-display text-5xl font-extrabold uppercase md:text-6xl ${i === 0 ? 'text-brand-light' : 'text-brand'}`}>
                {block.title}
              </h2>
              <p className="mt-6 text-xl leading-relaxed">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Philosophy, community, ambitions */}
      <section className="on-paper bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-3">
          {[s.philosophy, s.community, s.ambitions].map((block, i) => (
            <Reveal key={block.title} delay={i * 100} className="border-t-[3px] border-ink pt-6">
              <span aria-hidden className="font-display text-6xl font-extrabold leading-none text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold uppercase md:text-4xl">{block.title}</h2>
              <p className="mt-4 leading-relaxed text-ink/75">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="mb-12 font-display text-5xl font-extrabold uppercase md:text-6xl">{a.valuesTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="border-s-4 border-brand ps-5">
                <h3 className="font-display text-3xl font-bold uppercase tracking-wide">{v.title}</h3>
                <p className="mt-2 text-white/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative isolate overflow-hidden bg-brand py-16 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-dark)_100%)]"
        />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] md:text-6xl">{a.ctaTitle}</h2>
            <p className="mt-4 text-lg text-white/95">{a.ctaText}</p>
          </div>
          <Button
            variant="white"
            size="lg"
            href={siteConfig.discordUrl}
            arrow={false}
            icon={<DiscordIcon width={24} height={24} />}
            externalHint={t.common.opensInNewTab}
          >
            {t.nav.joinDiscord}
          </Button>
        </div>
      </section>
    </>
  );
}
