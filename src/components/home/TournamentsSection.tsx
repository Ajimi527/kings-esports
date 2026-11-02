import { useI18n } from '@/i18n';
import { getUpcomingTournaments } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import TournamentCard from '@/components/tournaments/TournamentCard';

export default function TournamentsSection() {
  const { t } = useI18n();
  const upcoming = getUpcomingTournaments().slice(0, 3);

  return (
    <section className="grain relative isolate overflow-hidden bg-brand py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,var(--color-brand-light)_0%,var(--color-brand)_45%,var(--color-brand-dark)_100%)]"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="onRed"
          eyebrow={t.home.tournaments.eyebrow}
          title={t.home.tournaments.title}
          subtitle={t.home.tournaments.subtitle}
          action={
            <Button variant="white" href="/tournaments">
              {t.common.viewAll}
            </Button>
          }
        />
        {upcoming.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((tournament, i) => (
              <Reveal key={tournament.slug} delay={i * 100}>
                <TournamentCard tournament={tournament} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="cut bg-ink p-8 text-lg text-white/90 md:p-12">{t.home.tournaments.empty}</div>
        )}
      </div>
    </section>
  );
}
