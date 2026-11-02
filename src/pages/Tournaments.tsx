import { Crown, Medal, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import { champions } from '@/data/tournaments';
import { getCompletedTournaments, getUpcomingTournaments } from '@/lib/content';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { DiscordIcon } from '@/components/icons/BrandIcons';
import TournamentCard from '@/components/tournaments/TournamentCard';

export default function Tournaments() {
  const { t, loc, formatDate } = useI18n();
  const tp = t.tournamentsPage;
  const upcoming = getUpcomingTournaments();
  const completed = getCompletedTournaments();

  return (
    <>
      <PageHero eyebrow={tp.eyebrow} title={tp.title} subtitle={tp.subtitle} />

      {/* Upcoming */}
      <section className="on-paper bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow={tp.eyebrow} title={tp.upcoming} />
          {upcoming.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((tournament, i) => (
                <Reveal key={tournament.slug} delay={i * 100}>
                  <TournamentCard tournament={tournament} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="cut bg-white p-8 md:p-12">
              <h3 className="font-display text-3xl font-extrabold uppercase">{tp.noUpcoming}</h3>
              <p className="mt-3 max-w-xl text-ink/70">{tp.noUpcomingText}</p>
            </div>
          )}
        </div>
      </section>

      {/* Rules + registration */}
      <section className="on-light bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={tp.sections.rules} title={tp.generalRulesTitle} />
            <ul className="space-y-5">
              {tp.generalRules.map((rule) => (
                <li key={rule} className="flex items-start gap-4">
                  <ShieldCheck size={24} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                  <span className="text-lg leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink/60">{tp.generalRulesNote}</p>
          </div>

          <div className="cut self-start bg-ink p-8 text-white md:p-10">
            <h3 className="font-display text-3xl font-extrabold uppercase">{tp.moreInfo}</h3>
            <p className="mt-4 leading-relaxed text-white/80">{tp.registrationHandledOn}</p>
            <Button
              variant="red"
              size="lg"
              href={siteConfig.defaultRegistrationUrl}
              arrow={false}
              icon={<DiscordIcon width={22} height={22} />}
              externalHint={t.common.opensInNewTab}
              className="mt-8"
            >
              {t.nav.joinDiscord}
            </Button>
          </div>
        </div>
      </section>

      {/* Results + Hall of Champions */}
      <section className="grain relative isolate overflow-hidden bg-brand py-16 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,var(--color-brand-light)_0%,var(--color-brand)_45%,var(--color-brand-dark)_100%)]"
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-3 font-display text-4xl font-extrabold uppercase md:text-5xl">
              <Medal size={36} aria-hidden /> {tp.results}
            </h2>
            {completed.length === 0 ? (
              <p className="cut bg-white p-8 text-lg text-ink/75">{tp.noResults}</p>
            ) : (
              <div className="space-y-6">
                {completed.map((c) => (
                  <div key={c.slug} className="cut bg-white p-6 text-ink">
                    <h3 className="font-display text-2xl font-extrabold uppercase">{loc(c.name)}</h3>
                    {c.date && <p className="text-sm text-ink/60">{formatDate(c.date)}</p>}
                    {c.results && c.results.length > 0 && (
                      <table className="mt-4 w-full text-start">
                        <thead>
                          <tr className="border-b border-bone text-xs uppercase tracking-widest text-ink/55">
                            <th className="py-2 text-start font-bold">{tp.place}</th>
                            <th className="py-2 text-start font-bold">{tp.team}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {c.results.map((r) => (
                            <tr key={r.place} className="border-b border-bone last:border-0">
                              <td className="py-2 font-display text-xl font-bold">{r.place}</td>
                              <td className="py-2">{r.team}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="mb-6 flex items-center gap-3 font-display text-4xl font-extrabold uppercase md:text-5xl">
              <Crown size={36} aria-hidden /> {tp.hall}
            </h2>
            {champions.length === 0 ? (
              <p className="cut bg-ink p-8 text-lg text-white/90">{tp.noChampions}</p>
            ) : (
              <ul className="space-y-4">
                {champions.map((c) => (
                  <li key={`${c.team}-${c.date}`} className="cut flex items-center justify-between gap-4 bg-ink p-6">
                    <div>
                      <p className="font-display text-3xl font-extrabold uppercase">{c.team}</p>
                      <p className="text-white/70">{loc(c.tournament)}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-brand-light">{c.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
