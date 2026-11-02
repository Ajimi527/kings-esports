import { useI18n } from '@/i18n';
import { partnershipCategories } from '@/data/partners';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import CategoryIcon from '@/components/partners/CategoryIcon';

export default function PartnersTeaser() {
  const { t, loc } = useI18n();
  const p = t.home.partners;

  return (
    <section className="on-light bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow={p.eyebrow} title={p.title} />
          <p className="-mt-4 mb-9 max-w-xl text-lg leading-relaxed text-ink/70">{p.text}</p>
          <Button variant="red" size="lg" href="/partnerships">
            {p.cta}
          </Button>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2">
          {partnershipCategories.map((c, i) => (
            <Reveal as="li" key={c.id} delay={i * 80} className="cut-sm flex items-center gap-4 bg-paper p-5">
              <span className="cut-sm flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-white">
                <CategoryIcon name={c.icon} size={24} />
              </span>
              <span className="font-display text-xl font-bold uppercase leading-tight tracking-wide">{loc(c.title)}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
