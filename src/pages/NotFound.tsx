import { useI18n } from '@/i18n';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <PageHero eyebrow="404" title={t.notFound.title} subtitle={t.notFound.text}>
      <Button variant="white" size="lg" href="/">
        {t.notFound.back}
      </Button>
    </PageHero>
  );
}
