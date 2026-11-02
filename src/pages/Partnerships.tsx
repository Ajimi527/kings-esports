import { Check, Handshake } from 'lucide-react';
import { useI18n } from '@/i18n';
import { partners, partnershipCategories } from '@/data/partners';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ContactButton from '@/components/ui/ContactButton';
import CategoryIcon from '@/components/partners/CategoryIcon';

export default function Partnerships() {
  const { t, loc } = useI18n();
  const p = t.partnersPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
        <ContactButton variant="white" noteClassName="text-white/90" />
      </PageHero>

      {/* Intro + vision */}
      <section className="on-light bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl font-extrabold uppercase text-brand md:text-5xl">{p.introTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">{p.intro}</p>
            <h2 className="mt-10 font-display text-4xl font-extrabold uppercase text-brand md:text-5xl">{p.visionTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/80">{p.vision}</p>
          </Reveal>
          <Reveal delay={120} className="cut self-start bg-ink p-8 text-white md:p-10">
            <h2 className="mb-6 font-display text-3xl font-extrabold uppercase md:text-4xl">{p.activitiesTitle}</h2>
            <ul className="space-y-4">
              {p.activities.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="cut-sm mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-brand">
                    <Check size={16} strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-lg leading-snug">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Opportunities */}
      <section className="on-paper bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow={p.eyebrow} title={p.opportunitiesTitle} subtitle={p.opportunitiesIntro} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipCategories.map((c, i) => (
              <Reveal key={c.id} delay={i * 80} className="cut flex flex-col bg-white p-7">
                <span className="cut-sm mb-5 flex h-14 w-14 items-center justify-center bg-brand text-white">
                  <CategoryIcon name={c.icon} size={28} />
                </span>
                <h3 className="font-display text-3xl font-extrabold uppercase leading-none">{loc(c.title)}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{loc(c.description)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners + media kit */}
      <section className="on-light bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-4xl font-extrabold uppercase md:text-5xl">{p.currentPartnersTitle}</h2>
            {partners.length === 0 ? (
              <div className="cut flex items-center gap-4 border-2 border-dashed border-ink/25 p-8">
                <Handshake size={32} className="shrink-0 text-brand" aria-hidden />
                <p className="text-lg text-ink/75">{p.noPartners}</p>
              </div>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2">
                {partners.map((partner) => (
                  <li key={partner.name} className="cut bg-paper p-6">
                    {partner.url ? (
                      <a href={partner.url} target="_blank" rel="noopener noreferrer" className="font-display text-2xl font-bold uppercase hover:text-brand">
                        {partner.name}
                      </a>
                    ) : (
                      <span className="font-display text-2xl font-bold uppercase">{partner.name}</span>
                    )}
                    {partner.tier && <p className="text-sm text-ink/60">{partner.tier}</p>}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h2 className="mb-6 font-display text-4xl font-extrabold uppercase md:text-5xl">{p.mediaKitTitle}</h2>
            <p className="cut bg-paper p-8 text-lg leading-relaxed text-ink/75">{p.mediaKitText}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="grain relative isolate overflow-hidden bg-brand py-16 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--color-brand-light)_0%,var(--color-brand)_45%,var(--color-brand-dark)_100%)]"
        />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.95] md:text-6xl">{p.contactTitle}</h2>
            <p className="mt-4 text-lg text-white/95">{p.contactText}</p>
          </div>
          <ContactButton variant="white" showNote={false} />
        </div>
      </section>
    </>
  );
}
