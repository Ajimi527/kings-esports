import { useEffect, useState, type ReactNode } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  className?: string;
  /** Shown when there is no src or the image fails to load. */
  fallback: ReactNode;
}

/** Image with a loading skeleton and a graceful branded fallback. */
export default function ImageWithFallback({ src, alt, className = '', fallback }: ImageWithFallbackProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(src ? 'loading' : 'error');

  useEffect(() => {
    setStatus(src ? 'loading' : 'error');
  }, [src]);

  if (!src || status === 'error') return <>{fallback}</>;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {status === 'loading' && <div className="absolute inset-0 animate-pulse bg-ink/10" aria-hidden />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
