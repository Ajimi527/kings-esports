import type { ReactNode } from 'react';
import { siteConfig } from '@/config/site';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Extra content under the subtitle (badges, buttons, back link...) */
  children?: ReactNode;
  /** Slot rendered above the eyebrow, e.g. a back link */
  top?: ReactNode;
}

/** Red banner opening every inner page. Contains the page's single <h1>. */
export default function PageHero({ eyebrow, title, subtitle, children, top }: PageHeroProps) {
  return (
    <section className="grain relative isolate overflow-hidden bg-brand text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_60%_80%_at_85%_20%,var(--color-brand-light),transparent_70%),linear-gradient(135deg,var(--color-brand)_0%,var(--color-brand-dark)_70%,var(--color-brand-deep)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[0.16em] end-[-2%] -z-10 select-none whitespace-nowrap font-display text-[26vw] font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.14)] lg:text-[20rem]"
      >
        {siteConfig.shortName}
      </div>
      <div aria-hidden className="absolute inset-y-0 end-0 -z-10 hidden w-28 overflow-hidden md:block">
        <div className="absolute -inset-y-10 end-8 w-8 -skew-x-[18deg] bg-ink rtl:skew-x-[18deg]" />
        <div className="absolute -inset-y-10 end-2 w-2.5 -skew-x-[18deg] bg-white rtl:skew-x-[18deg]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-24">
        {top}
        <p className="mb-5 flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.3em]">
          <span className="h-[3px] w-10 bg-white" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[clamp(3rem,8vw,7rem)] font-extrabold uppercase leading-[0.9]">
          {title}
        </h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
