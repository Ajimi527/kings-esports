import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** 'onRed' for red/black backgrounds (white text), 'onLight' for white/paper backgrounds */
  tone?: 'onRed' | 'onLight';
  /** Optional element aligned to the end of the heading row (e.g. a "View all" button) */
  action?: ReactNode;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'onLight',
  action,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  const onRed = tone === 'onRed';
  return (
    <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p
          className={`mb-4 flex items-center gap-3 font-display text-base font-bold uppercase tracking-[0.28em] ${
            onRed ? 'text-white' : 'text-brand'
          }`}
        >
          <span className={`inline-block h-2.5 w-2.5 rotate-45 ${onRed ? 'bg-white' : 'bg-brand'}`} aria-hidden />
          {eyebrow}
        </p>
        <Heading
          className={`font-display text-5xl font-extrabold uppercase leading-[0.92] sm:text-6xl md:text-7xl ${
            onRed ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </Heading>
        {subtitle && (
          <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${onRed ? 'text-white/90' : 'text-ink/70'}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
