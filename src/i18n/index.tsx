import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Localized } from '@/types';
import { en, type Dictionary } from './en';
import { fr } from './fr';
import { ar } from './ar';

export const languages: { code: Lang; label: string; short: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },
  { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },
  { code: 'ar', label: 'العربية', short: 'AR', dir: 'rtl' },
];

const dictionaries: Record<Lang, Dictionary> = { en, fr, ar };
const STORAGE_KEY = 'kings-lang';

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && saved in dictionaries) return saved;
  } catch {
    /* storage unavailable: ignore */
  }
  const browser = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2).toLowerCase() : 'en';
  return browser in dictionaries ? (browser as Lang) : 'en';
}

interface I18nContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (lang: Lang) => void;
  /** UI text dictionary for the current language, e.g. t.nav.home */
  t: Dictionary;
  /** Resolve a Localized<T> value from the data files (falls back to English). */
  loc: <T = string>(value: Localized<T> | undefined) => T;
  /** Format an ISO date in the current language. */
  formatDate: (iso: string, opts?: Intl.DateTimeFormatOptions) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function isTranslationMap<T>(v: Localized<T>): v is { en: T; fr?: T; ar?: T } {
  return typeof v === 'object' && v !== null && !Array.isArray(v) && 'en' in (v as object);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);
  const dir = languages.find((l) => l.code === lang)?.dir ?? 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title = dictionaries[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', dictionaries[lang].meta.description);
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nContextValue>(() => {
    const loc = <T = string,>(v: Localized<T> | undefined): T => {
      if (v === undefined) return '' as unknown as T;
      if (isTranslationMap<T>(v)) return v[lang] ?? v.en;
      return v as T;
    };
    const formatDate = (iso: string, opts?: Intl.DateTimeFormatOptions) => {
      const date = new Date(`${iso}T12:00:00`);
      if (Number.isNaN(date.getTime())) return iso;
      return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-u-nu-latn' : lang, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        ...opts,
      }).format(date);
    };
    return { lang, dir, setLang, t: dictionaries[lang], loc, formatDate };
  }, [lang, dir, setLang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
