import { siteConfig } from '@/config/site';

interface LogoProps {
  /** Rendered width/height in CSS pixels */
  size?: number;
  className?: string;
  /** Feather the logo's edges so it melts into a red background (used in the hero). */
  blend?: boolean;
  priority?: boolean;
}

/** The official Kings crowned-lion shield. Always uses the supplied logo file, never a redraw. */
export default function Logo({ size = 48, className = '', blend = false, priority = false }: LogoProps) {
  return (
    <img
      src={siteConfig.logo.src}
      srcSet={`${siteConfig.logo.src} 1x, ${siteConfig.logo.src2x} 2x`}
      width={size}
      height={size}
      alt="Kings Esports logo"
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      className={className}
      style={
        blend
          ? {
              WebkitMaskImage: 'radial-gradient(closest-side, #000 72%, transparent 100%)',
              maskImage: 'radial-gradient(closest-side, #000 72%, transparent 100%)',
            }
          : undefined
      }
    />
  );
}
