import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import { getTournament } from '@/lib/content';
import PageHero from '@/components/ui/PageHero';
import RichText from '@/components/ui/RichText';
import Button from '@/components/ui/Button';
import SampleTag from '@/components/ui/SampleTag';
import StatusBadge from '@/components/tournaments/StatusBadge';
import { registrationLink } from '@/components/tournaments/TournamentCard';
import { DiscordIcon } from '@/components/icons/BrandIcons';

export default function TournamentDetail() {
  const { slug = '' } = useParams();
  const { t, loc, formatDate } = useI18n();
  const tp = t.tournamentsPage;
  const tournament = getTournament(slug);

  if (!tournament) {
    return (
      <>
        <PageHero eyebrow={t.nav.tournaments} title={tp.notFoundTitle} subtitle={tp.notFoundText} />
        <section className="bg-paper py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Button variant="red" href="/tournaments">
              {t.common.backToTournaments}
            </Button>
          </div>
        </section>
      </>
    );
  }

  const d = tournament.details ?? {};
  const sections = [
    { title: tp.sections.registration, lines: loc<string[] | undefined>(d.registration) },
    { title: tp.sections.rules, lines: loc<string[] | undefined>(d.rules) },
    { title: tp.sections.format, lines: loc<string[] | undefined>(d.formatAndStructure) },
    { title: tp.sections.prizes, lines: loc<string[] | undefined>(d.prizes) },
  ];

  const facts = [
    { label: t.common.date, value: tournament.date ? formatDate(tournament.date) : tp.dateTba },
    { label: t.common.game, value: tournament.game },
    { label: t.common.format, value: loc(tournament.format) },
    { label: t.common.prize, value: tournament.prize ? loc(tournament.prize) : t.common.tba },
  ];

  return (
    <>
      <PageHero
        eyebrow={t.nav.tournaments}
        title={loc(tournament.name)}
        subtitle={loc(tournament.summary)}
        top={
          <Link
            to="/tournaments"
            className="mb-8 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white"
          >
            <ArrowLeft size={18} aria-hidden className="rtl:rotate-180" />
            {t.common.backToTournaments}
          </Link>
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={tournament.status} className="!bg-ink !text-white !ring-0" />
          <SampleTag show={tournament.placeholder} className="!bg-white !text-ink" />
        </div>
      </PageHero>

      <section className="on-paper bg-paper py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {sections.map((s) => (
              <div key={s.title} className="cut bg-white p-7 md:p-10">
                <h2 className="mb-5 font-display text-3xl font-extrabold uppercase text-brand md:text-4xl">{s.title}</h2>
                {s.lines && s.lines.length > 0 ? (
                  <RichText lines={s.lines} />
                ) : (
                  <p className="text-ink/60">{tp.detailsComingSoon}</p>
                )}
              </div>
            ))}
          </div>

          <aside className="cut self-start bg-ink p-7 text-white lg:sticky lg:top-24">
            <dl className="space-y-5">
              {facts.map((f) => (
                <div key={f.label} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">{f.label}</dt>
                  <dd className="mt-1 text-lg font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              {tournament.status === 'open' ? (
                <Button
                  variant="red"
                  size="lg"
                  href={registrationLink(tournament)}
                  externalHint={t.common.opensInNewTab}
                  className="w-full"
                >
                  {tp.registerCta}
                </Button>
              ) : (
                <>
                  <p className="mb-4 text-sm text-white/70">{tp.registerComingSoon}</p>
                  <Button
                    variant="red"
                    size="lg"
                    href={siteConfig.discordUrl}
                    arrow={false}
                    icon={<DiscordIcon width={22} height={22} />}
                    externalHint={t.common.opensInNewTab}
                    className="w-full"
                  >
                    {t.nav.joinDiscord}
                  </Button>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
