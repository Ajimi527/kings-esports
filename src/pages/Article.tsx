import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/i18n';
import { getAnnouncement, getAnnouncements } from '@/lib/content';
import PageHero from '@/components/ui/PageHero';
import RichText from '@/components/ui/RichText';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import BrandTile from '@/components/ui/BrandTile';
import SampleTag from '@/components/ui/SampleTag';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/news/ArticleCard';

export default function Article() {
  const { slug = '' } = useParams();
  const { t, loc, formatDate } = useI18n();
  const article = getAnnouncement(slug);

  if (!article) {
    return (
      <>
        <PageHero eyebrow={t.nav.news} title={t.newsPage.notFoundTitle} subtitle={t.newsPage.notFoundText} />
        <section className="bg-paper py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Button variant="red" href="/news">
              {t.common.backToNews}
            </Button>
          </div>
        </section>
      </>
    );
  }

  const more = getAnnouncements()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);
  const lines = loc<string[]>(article.content);

  return (
    <>
      <PageHero
        eyebrow={t.category[article.category]}
        title={loc(article.title)}
        top={
          <Link
            to="/news"
            className="mb-8 inline-flex items-center gap-2 font-display text-base font-bold uppercase tracking-[0.2em] text-white/90 hover:text-white"
          >
            <ArrowLeft size={18} aria-hidden className="rtl:rotate-180" />
            {t.common.backToNews}
          </Link>
        }
      >
        <div className="flex flex-wrap items-center gap-4 font-semibold uppercase tracking-wider text-white/90">
          <span>
            {t.common.published}{' '}
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </span>
          <SampleTag show={article.placeholder} />
        </div>
      </PageHero>

      <article className="on-paper bg-paper pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="cut mb-12 mt-10 overflow-hidden bg-ink">
            <ImageWithFallback
              src={article.thumbnail}
              alt=""
              className="aspect-[16/8]"
              fallback={<BrandTile className="aspect-[16/8]" label={t.category[article.category]} />}
            />
          </div>
          <p className="mb-8 text-xl font-medium leading-relaxed text-ink/80">{loc(article.summary)}</p>
          <RichText lines={lines} className="text-ink" />
        </div>
      </article>

      {more.length > 0 && (
        <section className="on-light bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="mb-10 font-display text-4xl font-extrabold uppercase md:text-5xl">{t.home.news.title}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {more.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
