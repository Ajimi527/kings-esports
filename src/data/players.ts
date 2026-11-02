import type { Player } from '@/types';

/**
 * COMPETITIVE ROSTER (players)
 * ----------------------------
 * Replace the placeholder entries with real players. `division` is 'main' or 'academy'.
 * - `image` is optional: put a photo in /public/images/players/ and write "./images/players/name.jpg".
 *   Without a photo, an initials avatar is shown.
 * - `achievements` must only contain real, verifiable results.
 * - `socials` accepts x, instagram, youtube, twitch, tiktok (full URLs). Unused ones are simply not shown.
 * - Delete `placeholder: true` once the profile is real.
 */
export const players: Player[] = [
  {
    id: 'main-1',
    name: 'Player Name',
    ign: 'PLAYER_01',
    division: 'main',
    bio: {
      en: 'Player biography goes here: playstyle, favourite game modes and what they bring to the team.',
      fr: 'La biographie du joueur ira ici : style de jeu, modes préférés et ce qu’il apporte à l’équipe.',
      ar: 'ستُضاف هنا نبذة عن اللاعب: أسلوب لعبه وأنماطه المفضلة وما يقدمه للفريق.',
    },
    placeholder: true,
  },
  {
    id: 'main-2',
    name: 'Player Name',
    ign: 'PLAYER_02',
    division: 'main',
    bio: {
      en: 'Player biography goes here: playstyle, favourite game modes and what they bring to the team.',
      fr: 'La biographie du joueur ira ici : style de jeu, modes préférés et ce qu’il apporte à l’équipe.',
      ar: 'ستُضاف هنا نبذة عن اللاعب: أسلوب لعبه وأنماطه المفضلة وما يقدمه للفريق.',
    },
    placeholder: true,
  },
  {
    id: 'main-3',
    name: 'Player Name',
    ign: 'PLAYER_03',
    division: 'main',
    bio: {
      en: 'Player biography goes here: playstyle, favourite game modes and what they bring to the team.',
      fr: 'La biographie du joueur ira ici : style de jeu, modes préférés et ce qu’il apporte à l’équipe.',
      ar: 'ستُضاف هنا نبذة عن اللاعب: أسلوب لعبه وأنماطه المفضلة وما يقدمه للفريق.',
    },
    placeholder: true,
  },
  {
    id: 'academy-1',
    name: 'Player Name',
    ign: 'ACADEMY_01',
    division: 'academy',
    bio: {
      en: 'Academy player biography goes here.',
      fr: 'La biographie du joueur de l’académie ira ici.',
      ar: 'ستُضاف هنا نبذة عن لاعب الأكاديمية.',
    },
    placeholder: true,
  },
  {
    id: 'academy-2',
    name: 'Player Name',
    ign: 'ACADEMY_02',
    division: 'academy',
    bio: {
      en: 'Academy player biography goes here.',
      fr: 'La biographie du joueur de l’académie ira ici.',
      ar: 'ستُضاف هنا نبذة عن لاعب الأكاديمية.',
    },
    placeholder: true,
  },
];
