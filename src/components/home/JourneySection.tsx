import { useI18n } from '@/i18n';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function JourneySection() {
  const { t } = useI18n();
  const j = t.home.journey;

  return (
    <section className="grain relative isolate overflow-hidden bg-brand-deep py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(200deg,var(--color-brand-dark)_0%,var(--color-brand-deep)_60%,#5c0a10_100%)]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading tone="onRed" eyebrow={j.eyebrow} title={j.title} subtitle={j.intro} />

        <p className="mb-6 font-display text-sm font-bold uppercase tracking-[0.3em] text-white/70">{j.roadmapLabel}</p>
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {j.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 100} className="relative border-t-[3px] border-white pt-6">
              <span
                aria-hidden
                className="block font-display text-8xl font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold uppercase">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/85">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="cut mt-16 bg-white p-8 text-ink md:p-12">
          <h3 className="mb-8 font-display text-3xl font-extrabold uppercase md:text-4xl">{j.commitmentTitle}</h3>
          <div className="grid gap-8 md:grid-cols-3">
            {j.commitments.map((c) => (
              <div key={c.title} className="border-s-4 border-brand ps-5">
                <h4 className="font-display text-2xl font-bold uppercase tracking-wide">{c.title}</h4>
                <p className="mt-2 leading-relaxed text-ink/70">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
