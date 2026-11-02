import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import Logo from '@/components/ui/Logo';
import { DiscordIcon } from '@/components/icons/BrandIcons';

export default function JoinSection() {
  const { t } = useI18n();
  const j = t.home.join;

  return (
    <section className="grain relative isolate overflow-hidden bg-brand py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_80%_at_15%_20%,var(--color-brand-light),transparent_65%),linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-dark)_100%)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading tone="onRed" eyebrow={j.eyebrow} title={j.title} />
          <p className="-mt-4 mb-9 max-w-xl text-lg leading-relaxed text-white/95">{j.text}</p>
          <Button
            variant="white"
            size="lg"
            href={siteConfig.discordUrl}
            arrow={false}
            icon={<DiscordIcon width={24} height={24} />}
            externalHint={t.common.opensInNewTab}
          >
            {j.cta}
          </Button>
        </Reveal>

        <Reveal delay={150}>
          <div className="cut relative overflow-hidden bg-ink p-8 text-white md:p-12">
            <Logo
              size={320}
              mark
              decorative
              className="pointer-events-none absolute -end-12 -top-12 h-72 w-72 opacity-[0.12]"
            />
            <ul className="relative space-y-6">
              {j.points.map((point) => (
                <li key={point} className="flex items-center gap-4">
                  <span className="cut-sm flex h-10 w-10 shrink-0 items-center justify-center bg-brand">
                    <Check size={22} strokeWidth={3} aria-hidden />
                  </span>
                  <span className="font-display text-2xl font-bold uppercase tracking-wide sm:text-3xl">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
