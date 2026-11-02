# Kings Esports — Official Website

Static website built with **React + Vite + TypeScript + Tailwind CSS + Lucide icons**.
No backend, no database, no admin panel: all content lives in plain files you can edit.

Languages: **English, Français, العربية** (with automatic right-to-left layout). Visitors switch language from the navbar.

---

## 1. Run and build

Requirements: [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # once
npm run dev        # local preview at http://localhost:5173 (auto-refreshes)
npm run build      # production build into the dist/ folder
npm run preview    # test the production build locally
```

## 2. Project structure

```
kings-esports/
├─ public/                 Files served as-is (favicons, images you add)
│  └─ images/              kings-logo.png (+ @2x). Put news/, players/, partners/ images here
├─ assets-source/          Your original logo file (not published)
└─ src/
   ├─ config/site.ts       ★ Discord, email, social links, registration link, logo paths
   ├─ data/                ★ Content you edit
   │  ├─ announcements.ts  News articles
   │  ├─ tournaments.ts    Tournaments + Hall of Champions
   │  ├─ players.ts        Main roster + Academy
   │  ├─ staff.ts          Staff
   │  └─ partners.ts       Partnership categories + current partners
   ├─ i18n/                UI text in en.ts / fr.ts / ar.ts (+ language logic)
   ├─ components/          layout/ ui/ home/ news/ tournaments/ roster/ partners/
   ├─ pages/               Home, News, Article, Tournaments, TournamentDetail, Roster, About, Partnerships
   ├─ index.css            Colour palette and fonts (see "Brand colours")
   └─ types/index.ts       Shape of every content type
```

## 3. Change links, Discord and email — `src/config/site.ts`

One file controls every link on the site:

```ts
discordUrl: 'https://discord.gg/hqQPcFdYF',
contactEmail: 'kingsteamtn@outlook.com',
socials: { youtube: '…', x: '…', instagram: '…', twitch: '', tiktok: '' },
defaultRegistrationUrl: 'https://discord.gg/hqQPcFdYF',
```

- Leave a social as `''` and its icon disappears. Add a Twitch or TikTok URL and its icon appears automatically.
- `contactEmail` powers every CONTACT US button (opens the visitor's email app) and appears in the footer.
- `defaultRegistrationUrl` is where "Register" buttons go when a tournament has no link of its own.
- `showPlaceholderBadges: false` hides every "Sample" tag at once.

## 4. Add an announcement — `src/data/announcements.ts`

Copy a block, paste it at the top and edit it:

```ts
{
  slug: 'first-tournament-announced',          // unique, lowercase, dashes; becomes the page URL
  title: { en: 'Our first tournament', fr: 'Notre premier tournoi', ar: '…' },
  date: '2026-12-01',                          // YYYY-MM-DD, newest shown first
  category: 'tournamentAnnouncement',          // organization | tournamentAnnouncement | tournamentResult | competitive | roster | community
  thumbnail: './images/news/first-tournament.jpg',   // optional
  summary: { en: 'Short description shown on the card.' },
  content: { en: [
    'First paragraph.',
    '## A sub-heading',
    '- A bullet point',
    '- Another bullet point',
  ]},
}
```

- Text can be a plain string (same in all languages) or `{ en, fr, ar }`. Missing translations fall back to English.
- Thumbnail files go in `public/images/news/`. No thumbnail? A branded Kings tile is shown.
- Remove `placeholder: true` from real content.

## 5. Add a tournament — `src/data/tournaments.ts`

```ts
{
  slug: 'kings-cup-1',
  name: 'Kings Cup #1',
  date: '2026-12-20',                      // leave out until confirmed
  game: 'Brawl Stars',
  format: '3v3 · Gem Grab, Brawl Ball, Heist',
  status: 'open',                          // comingSoon | open | closed | inProgress | completed
  prize: '…',                              // leave out until confirmed
  registrationUrl: 'https://discord.com/channels/…',   // optional, else defaultRegistrationUrl
  summary: 'One or two sentences.',
  details: { registration: [...], rules: [...], formatAndStructure: [...], prizes: [...] },
}
```

- The **Register** button only appears when `status` is `'open'`. For `comingSoon` visitors are sent to Discord for updates.
- When finished, set `status: 'completed'` and add `results: [{ place: 1, team: 'Team Name' }, …]`; it moves to "Previous results".
- Add real winners to `champions` in the same file for the **Hall of Champions**.

## 6. Update the roster — `players.ts` and `staff.ts`

Replace the placeholder entries with real people:

```ts
{ id: 'main-1', name: 'Full Name', ign: 'InGameName', division: 'main',   // 'main' or 'academy'
  role: 'Captain', image: './images/players/name.jpg',
  bio: 'Short biography.', achievements: ['Only real, verifiable results'],
  socials: { x: 'https://x.com/…', youtube: '…' } }
```

Photos go in `public/images/players/` (portrait 4:5 works best). No photo? A branded tile is shown.

## 7. Partners — `src/data/partners.ts`

`partners` is empty on purpose. When a partnership is officially agreed, add `{ name, logo, url, tier }`.
No audience statistics are shown; add them only when you have verified numbers.

## 8. Edit wording and translations — `src/i18n/`

All fixed text (menus, headings, About page, etc.) is in `en.ts`, `fr.ts`, `ar.ts`. Edit the same key in each file.
TypeScript will flag a missing key if you add one in `en.ts` only.

## 9. Brand colours and fonts — `src/index.css`

Palette follows roughly **60% red / 30% white / 10% black**:
`--color-brand` (red, matched to your logo), `--color-paper` / white, `--color-ink` (black).
Fonts: Barlow Condensed (headlines), Inter (body), Cairo (Arabic), bundled with the site, so there are no external font requests.

## 10. Deploy

The build output is the `dist/` folder, made of plain static files. The site uses hash URLs (`/#/news`), so it works on **any** host with no extra configuration.

**Netlify** (simplest): push the project to GitHub → "Add new site → Import from Git" → build command `npm run build`, publish directory `dist`. Every push redeploys automatically.
**Vercel**: import the repo; it detects Vite automatically.
**Cloudflare Pages**: build command `npm run build`, output directory `dist`.
**GitHub Pages**: build, then publish the contents of `dist/` (for example with the `gh-pages` package or a GitHub Action).
**Any web host**: run `npm run build` and upload the contents of `dist/`.

After editing content: save the file → `npm run build` (or just push if you use Netlify / Vercel / Cloudflare) → the site updates.

## 11. Notes

- Kings Esports is **not** affiliated with or endorsed by Supercell. The footer states this.
- **Brand images** live in `public/images/`: `kings-logo.jpg` (+ `@2x`) is the official logo on its red background, `kings-mark.png` is the same emblem as a transparent white version, and `hero-bg.jpg` is your banner artwork with the baked-in text removed. Your untouched originals are in `assets-source/`. To change an image, replace the file with one of the same name (or edit the paths in `src/config/site.ts`).
- `public/og-banner.jpg` is the preview image shown when the site link is shared (Discord, X, WhatsApp). Its address is set in `index.html` and points to `https://ajimi527.github.io/kings-esports/`. If you later move to a custom domain, update that address.
- Expanding to other games later: add a `game` value to tournaments and players (the data types already store the game per tournament).
