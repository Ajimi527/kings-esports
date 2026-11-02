import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { externalProps, isExternal } from '@/lib/links';

type Variant = 'white' | 'black' | 'red' | 'outlineWhite' | 'outlineBlack';

const variants: Record<Variant, string> = {
  // Use on red backgrounds
  white: 'bg-white text-ink hover:bg-ink hover:text-white',
  outlineWhite: 'bg-transparent text-white ring-2 ring-inset ring-white hover:bg-white hover:text-ink',
  // Use on white / paper backgrounds
  red: 'bg-brand text-white hover:bg-ink',
  black: 'bg-ink text-white hover:bg-brand',
  outlineBlack: 'bg-transparent text-ink ring-2 ring-inset ring-ink hover:bg-ink hover:text-white',
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  /** Router path ("/news") or external URL ("https://...", "mailto:...") */
  href?: string;
  onClick?: () => void;
  arrow?: boolean;
  icon?: ReactNode;
  className?: string;
  size?: 'md' | 'lg';
  /** Accessible hint appended for screen readers on external links */
  externalHint?: string;
}

export default function Button({
  children,
  variant = 'red',
  href,
  onClick,
  arrow = true,
  icon,
  className = '',
  size = 'md',
  externalHint,
}: ButtonProps) {
  const classes = [
    // Outline buttons skip the angled corner so their ring is never clipped
    variant.startsWith('outline') ? '' : 'cut',
    'group inline-flex items-center justify-center gap-3 font-display font-bold uppercase tracking-[0.12em]',
    'transition-colors duration-200 select-none',
    size === 'lg' ? 'px-8 py-4 text-xl' : 'px-6 py-3 text-lg',
    variants[variant],
    className,
  ].join(' ');

  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={20}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
          aria-hidden
        />
      )}
    </>
  );

  if (href && isExternal(href)) {
    return (
      <a href={href} className={classes} {...externalProps(href)}>
        {content}
        {externalHint && !href.startsWith('mailto:') && <span className="sr-only"> {externalHint}</span>}
      </a>
    );
  }
  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
