import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Delay in ms, handy for staggering cards */
  delay?: number;
  className?: string;
  as?: ElementType;
}

/** Fades content in once when it scrolls into view. Without JS or with reduced motion, content is simply visible. */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const reveal = () => setVisible(true);
    const inView = () => {
      const top = el.getBoundingClientRect().top;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return top < vh * 0.95;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0.05 },
    );
    observer.observe(el);

    // Safety nets: elements already on screen when the page opens, or a viewport that resizes after mount
    const timers = [60, 400, 1200].map((ms) => window.setTimeout(() => inView() && reveal(), ms));
    const onScrollOrResize = () => inView() && reveal();
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('scroll', onScrollOrResize, { passive: true });

    return () => {
      observer.disconnect();
      timers.forEach(window.clearTimeout);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('scroll', onScrollOrResize);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
