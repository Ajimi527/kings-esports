import { useI18n } from '@/i18n';
import { getAnnouncements } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import ArticleCard from '@/components/news/ArticleCard';

export default function AnnouncementsSection() {
  const { t } = useI18n();
  const latest = getAnnouncements().slice(0, 3);

  return (
    <section className="on-paper bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.home.news.eyebrow}
          title={t.home.news.title}
          subtitle={t.home.news.subtitle}
          action={
            <Button variant="outlineBlack" href="/news">
              {t.common.viewAll}
            </Button>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((article, i) => (
            <Reveal key={article.slug} delay={i * 100} className="flex">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
