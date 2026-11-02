import { useI18n } from '@/i18n';
import { players } from '@/data/players';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import PlayerCard from '@/components/roster/PlayerCard';

export default function TeamSection() {
  const { t } = useI18n();
  const main = players.filter((p) => p.division === 'main');
  const hasPlaceholders = main.some((p) => p.placeholder);

  return (
    <section className="on-paper bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.home.team.eyebrow}
          title={t.home.team.title}
          subtitle={t.home.team.subtitle}
          action={
            <Button variant="outlineBlack" href="/roster">
              {t.home.team.cta}
            </Button>
          }
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {main.map((player, i) => (
            <Reveal key={player.id} delay={i * 100}>
              <PlayerCard person={{ kind: 'player', data: player }} compact />
            </Reveal>
          ))}
        </div>
        {hasPlaceholders && <p className="mt-8 max-w-2xl text-sm text-ink/60">{t.rosterPage.placeholderNote}</p>}
      </div>
    </section>
  );
}
