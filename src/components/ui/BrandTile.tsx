import { siteConfig } from '@/config/site';

interface BrandTileProps {
  /** Small label in the corner, e.g. the category name */
  label?: string;
  className?: string;
  tone?: 'red' | 'black';
}

/** Branded stand-in used wherever an image is missing (news thumbnails, tournament banners). */
export default function BrandTile({ label, className = '', tone = 'red' }: BrandTileProps) {
  const bg =
    tone === 'red'
      ? 'bg-[linear-gradient(135deg,var(--color-brand-light),var(--color-brand)_50%,var(--color-brand-deep))]'
      : 'bg-[linear-gradient(135deg,#222,var(--color-ink))]';
  return (
    <div className={`relative isolate overflow-hidden ${bg} ${className}`} role="img" aria-label={label ?? 'Kings Esports'}>
      {/* diagonal speed lines */}
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, transparent 0 22px, rgba(255,255,255,.35) 22px 24px)',
        }}
        aria-hidden
      />
      <img
        src={siteConfig.logo.src}
        alt=""
        aria-hidden
        className="absolute end-[-8%] top-1/2 h-[120%] -translate-y-1/2 opacity-30 mix-blend-soft-light"
        style={{
          WebkitMaskImage: 'radial-gradient(closest-side, #000 60%, transparent 100%)',
          maskImage: 'radial-gradient(closest-side, #000 60%, transparent 100%)',
        }}
      />
      {label && (
        <span className="absolute bottom-3 start-4 font-display text-sm font-bold uppercase tracking-[0.25em] text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
