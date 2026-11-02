import { siteConfig } from '@/config/site';

interface LogoProps {
  /** Rendered width/height in CSS pixels */
  size?: number;
  className?: string;
  /** Use the transparent white emblem (no red square). Best on red, dark or photographic backgrounds. */
  mark?: boolean;
  priority?: boolean;
  /** Decorative copies are hidden from screen readers */
  decorative?: boolean;
}

/** The official Kings crowned-lion shield. Always uses the supplied logo files, never a redraw. */
export default function Logo({ size = 48, className = '', mark = false, priority = false, decorative = false }: LogoProps) {
  const { src, src2x, mark: markSrc } = siteConfig.logo;
  return (
    <img
      src={mark ? markSrc : src}
      srcSet={mark ? undefined : `${src} 1x, ${src2x} 2x`}
      width={size}
      height={size}
      alt={decorative ? '' : 'Kings Esports logo'}
      aria-hidden={decorative || undefined}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      className={className}
    />
  );
}
