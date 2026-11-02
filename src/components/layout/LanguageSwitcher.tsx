import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { languages, useI18n } from '@/i18n';

/**
 * Language selector.
 * - 'dropdown': compact button + menu for the desktop navbar
 * - 'segmented': three always-visible buttons for the mobile menu
 */
export default function LanguageSwitcher({ variant = 'dropdown' }: { variant?: 'dropdown' | 'segmented' }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  if (variant === 'segmented') {
    return (
      <div role="group" aria-label={t.nav.language} className="grid grid-cols-3 gap-2">
        {languages.map((l) => (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            aria-pressed={lang === l.code}
            onClick={() => setLang(l.code)}
            className={`cut-sm py-3 font-display text-lg font-bold uppercase tracking-widest transition-colors ${
              lang === l.code ? 'bg-white text-ink' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  const current = languages.find((l) => l.code === lang)!;
  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${current.label}`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-11 items-center gap-2 px-3 font-display text-base font-bold uppercase tracking-widest text-white transition-colors hover:text-brand-light"
      >
        <Globe size={18} aria-hidden />
        {current.short}
        <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute end-0 top-full z-50 mt-2 min-w-44 border border-white/10 bg-ink-soft py-1 shadow-2xl">
          {languages.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                lang={l.code}
                aria-current={lang === l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                className="flex w-full items-center justify-between gap-6 px-4 py-2.5 text-start text-base text-white transition-colors hover:bg-brand"
              >
                <span>{l.label}</span>
                {lang === l.code && <Check size={16} aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
