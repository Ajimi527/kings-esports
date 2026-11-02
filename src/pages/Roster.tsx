import type { ReactNode } from 'react';
import { useI18n } from '@/i18n';
import { players } from '@/data/players';
import { staff } from '@/data/staff';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PlayerCard from '@/components/roster/PlayerCard';

function Group({ eyebrow, title, subtitle, tone, children }: { eyebrow: string; title: string; subtitle: string; tone: 'paper' | 'white'; children: ReactNode }) {
  return (
    <section className={`${tone === 'paper' ? 'on-paper bg-paper' : 'on-light bg-white'} py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        {children}
      </div>
    </section>
  );
}

export default function Roster() {
  const { t } = useI18n();
  const r = t.rosterPage;
  const main = players.filter((p) => p.division === 'main');
  const academy = players.filter((p) => p.division === 'academy');
  const anyPlaceholder = [...players, ...staff].some((p) => p.placeholder);

  return (
    <>
      <PageHero eyebrow={r.eyebrow} title={r.title} subtitle={r.subtitle}>
        {anyPlaceholder && <p className="cut-sm max-w-xl bg-ink/90 px-4 py-3 text-sm text-white/90">{r.placeholderNote}</p>}
      </PageHero>

      <Group eyebrow={r.main} title={r.main} subtitle={r.mainText} tone="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {main.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <PlayerCard person={{ kind: 'player', data: p }} />
            </Reveal>
          ))}
        </div>
      </Group>

      <Group eyebrow={r.academy} title={r.academy} subtitle={r.academyText} tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academy.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <PlayerCard person={{ kind: 'player', data: p }} />
            </Reveal>
          ))}
        </div>
      </Group>

      <Group eyebrow={r.staff} title={r.staff} subtitle={r.staffText} tone="paper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <PlayerCard person={{ kind: 'staff', data: s }} />
            </Reveal>
          ))}
        </div>
      </Group>
    </>
  );
}
