import type { Player, StaffMember } from '@/types';
import { useI18n } from '@/i18n';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import BrandTile from '@/components/ui/BrandTile';
import SampleTag from '@/components/ui/SampleTag';
import SocialLinks from '@/components/ui/SocialLinks';

type Person =
  | { kind: 'player'; data: Player }
  | { kind: 'staff'; data: StaffMember };

interface PlayerCardProps {
  person: Person;
  /** Compact cards (home page) hide bio and achievements */
  compact?: boolean;
}

export default function PlayerCard({ person, compact = false }: PlayerCardProps) {
  const { t, loc } = useI18n();
  const isPlayer = person.kind === 'player';
  const d = person.data;
  const title = isPlayer ? (person.data as Player).ign : d.name;
  const subtitle = isPlayer ? d.name : '';
  const role = d.role ? loc(d.role) : t.rosterPage.roleTba;
  const bio = d.bio ? loc(d.bio) : '';
  const achievements = isPlayer ? loc((person.data as Player).achievements) : undefined;
  const achievementList = Array.isArray(achievements) ? achievements : [];

  return (
    <article className="cut group flex h-full flex-col bg-white text-ink">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <ImageWithFallback
          src={d.image}
          alt={`${title}`}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
          fallback={<BrandTile className="h-full w-full" tone="red" />}
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent px-5 pb-5 pt-16">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-white/80">{role}</p>
          <h3 className="font-display text-4xl font-extrabold uppercase leading-none text-white">{title}</h3>
        </div>
        <SampleTag show={d.placeholder} className="absolute end-3 top-3" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wider text-ink/55">
            <span className="sr-only">{t.rosterPage.ign}: </span>
            {subtitle}
          </p>
        )}
        {!compact && bio && <p className="text-[0.95rem] leading-relaxed text-ink/75">{bio}</p>}

        {!compact && isPlayer && (
          <div>
            <h4 className="mb-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">
              {t.rosterPage.achievements}
            </h4>
            {achievementList.length > 0 ? (
              <ul className="list-square space-y-1 ps-5 text-[0.95rem] text-ink/75" style={{ listStyleType: 'square' }}>
                {achievementList.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-ink/55">{t.rosterPage.noAchievements}</p>
            )}
          </div>
        )}

        {d.socials && Object.values(d.socials).some(Boolean) && (
          <div className="mt-auto">
            <SocialLinks links={d.socials} tone="onLight" size={18} className="!gap-2" />
          </div>
        )}
      </div>
    </article>
  );
}
