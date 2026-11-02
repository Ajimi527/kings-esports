import { useMemo, useState } from 'react';
import { useI18n } from '@/i18n';
import { getAnnouncements } from '@/lib/content';
import type { AnnouncementCategory } from '@/types';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import ArticleCard from '@/components/news/ArticleCard';

export default function News() {
  const { t } = useI18n();
  const all = getAnnouncements();
  const [filter, setFilter] = useState<AnnouncementCategory | 'all'>('all');

  // Only offer categories that actually have articles
  const categories = useMemo(() => Array.from(new Set(all.map((a) => a.category))), [all]);
  const items = filter === 'all' ? all : all.filter((a) => a.category === filter);
  const [featured, ...rest] = items;

  return (
    <>
      <PageHero eyebrow={t.newsPage.eyebrow} title={t.newsPage.title} subtitle={t.newsPage.subtitle} />
      <section className="on-paper bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {categories.length > 1 && (
            <div role="group" aria-label={t.newsPage.filterLabel} className="mb-12 flex flex-wrap gap-3">
              {(['all', ...categories] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                  className={`cut-sm px-5 py-2.5 font-display text-base font-bold uppercase tracking-[0.14em] transition-colors ${
                    filter === c ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-brand hover:text-white'
                  }`}
                >
                  {t.category[c]}
                </button>
              ))}
            </div>
          )}

          {items.length === 0 ? (
            <p className="cut bg-white p-8 text-lg text-ink/70">{t.newsPage.empty}</p>
          ) : (
            <div className="space-y-6">
              <Reveal key={featured.slug}>
                <ArticleCard article={featured} featured />
              </Reveal>
              {rest.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((a, i) => (
                    <Reveal key={a.slug} delay={i * 80} className="flex">
                      <ArticleCard article={a} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
