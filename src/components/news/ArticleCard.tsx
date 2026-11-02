import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Announcement } from '@/types';
import { useI18n } from '@/i18n';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import BrandTile from '@/components/ui/BrandTile';
import SampleTag from '@/components/ui/SampleTag';

interface ArticleCardProps {
  article: Announcement;
  /** Large horizontal layout for the top story on the news page */
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const { t, loc, formatDate } = useI18n();
  const category = t.category[article.category];
  const title = loc(article.title);

  return (
    <article
      className={`group cut relative flex bg-white text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
        featured ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'lg:w-3/5' : ''}`}>
        <ImageWithFallback
          src={article.thumbnail}
          alt=""
          className={`transition-transform duration-500 group-hover:scale-[1.03] ${featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-80' : 'aspect-[16/10]'}`}
          fallback={<BrandTile className={featured ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-80' : 'aspect-[16/10]'} />}
        />
        <span className="cut-sm absolute start-0 top-0 bg-ink px-3.5 py-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
          {category}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? 'lg:w-2/5 lg:justify-center lg:p-10' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wider text-ink/55">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <SampleTag show={article.placeholder} />
        </div>
        <h3
          className={`font-display font-extrabold uppercase leading-[0.98] transition-colors group-hover:text-brand ${
            featured ? 'text-4xl sm:text-5xl' : 'text-3xl'
          }`}
        >
          {/* The stretched link makes the whole card clickable while keeping one focusable element */}
          <Link to={`/news/${article.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {title}
          </Link>
        </h3>
        <p className="mt-4 line-clamp-3 text-base leading-relaxed text-ink/70">{loc(article.summary)}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-display text-lg font-bold uppercase tracking-[0.12em] text-brand">
          {t.common.readMore}
          <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden />
        </span>
      </div>
    </article>
  );
}
