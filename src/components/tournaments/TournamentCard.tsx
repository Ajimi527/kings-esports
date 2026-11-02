import { Link } from 'react-router-dom';
import { CalendarDays, Gamepad2, Trophy } from 'lucide-react';
import type { Tournament } from '@/types';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';
import Button from '@/components/ui/Button';
import SampleTag from '@/components/ui/SampleTag';
import StatusBadge from './StatusBadge';

/** Where the Register button points: the tournament's own link, or the default from the site config. */
export const registrationLink = (t: Tournament) => t.registrationUrl || siteConfig.defaultRegistrationUrl;

export default function TournamentCard({ tournament }: { tournament: Tournament }) {
  const { t, loc, formatDate } = useI18n();
  const name = loc(tournament.name);
  const isOpen = tournament.status === 'open';
  const showJoinForUpdates = tournament.status === 'comingSoon';

  const rows = [
    {
      icon: CalendarDays,
      label: t.common.date,
      value: tournament.date ? formatDate(tournament.date) : t.tournamentsPage.dateTba,
    },
    { icon: Gamepad2, label: t.common.format, value: `${tournament.game} · ${loc(tournament.format)}` },
    { icon: Trophy, label: t.common.prize, value: tournament.prize ? loc(tournament.prize) : t.common.tba },
  ];

  return (
    <article className="cut flex h-full flex-col bg-white text-ink">
      <div className="flex items-center justify-between gap-3 bg-ink px-6 py-4">
        <StatusBadge status={tournament.status} />
        <SampleTag show={tournament.placeholder} className="!bg-white !text-ink" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.98] sm:text-4xl">
          <Link to={`/tournaments/${tournament.slug}`} className="transition-colors hover:text-brand">
            {name}
          </Link>
        </h3>

        <dl className="mt-6 space-y-4">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.18em] text-ink/50">{label}</dt>
                <dd className="font-semibold leading-snug">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Button variant="outlineBlack" href={`/tournaments/${tournament.slug}`}>
            {t.common.viewDetails}
          </Button>
          {isOpen && (
            <Button variant="red" href={registrationLink(tournament)} externalHint={t.common.opensInNewTab}>
              {t.common.register}
            </Button>
          )}
          {showJoinForUpdates && (
            <Button variant="black" href={siteConfig.discordUrl} arrow={false} externalHint={t.common.opensInNewTab}>
              {t.nav.joinDiscord}
            </Button>
          )}
        </div>
        {showJoinForUpdates && <p className="mt-3 text-sm text-ink/60">{t.tournamentsPage.registerComingSoon}</p>}
      </div>
    </article>
  );
}
