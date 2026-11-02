import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n';

/** Small "Sample" marker for placeholder content. Hidden globally via siteConfig.showPlaceholderBadges. */
export default function SampleTag({ show, className = '' }: { show?: boolean; className?: string }) {
  const { t } = useI18n();
  if (!show || !siteConfig.showPlaceholderBadges) return null;
  return (
    <span
      title={t.common.sampleTitle}
      className={`cut-sm inline-block bg-ink px-2.5 py-1 font-display text-xs font-bold uppercase tracking-[0.2em] text-white ${className}`}
    >
      {t.common.sample}
    </span>
  );
}
