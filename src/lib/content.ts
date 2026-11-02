import { announcements } from '@/data/announcements';
import { tournaments } from '@/data/tournaments';
import type { Announcement, Tournament } from '@/types';

/** Announcements, newest first. */
export const getAnnouncements = (): Announcement[] =>
  [...announcements].sort((a, b) => b.date.localeCompare(a.date));

export const getAnnouncement = (slug: string) => announcements.find((a) => a.slug === slug);

export const getTournament = (slug: string) => tournaments.find((t) => t.slug === slug);

/** Tournaments that have not finished yet (coming soon, open, closed or in progress), soonest first. */
export const getUpcomingTournaments = (): Tournament[] =>
  tournaments
    .filter((t) => t.status !== 'completed')
    .sort((a, b) => (a.date ?? '9999').localeCompare(b.date ?? '9999'));

/** Completed tournaments, most recent first. */
export const getCompletedTournaments = (): Tournament[] =>
  tournaments.filter((t) => t.status === 'completed').sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
