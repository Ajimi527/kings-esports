import type { RegistrationStatus } from '@/types';
import { useI18n } from '@/i18n';

const styles: Record<RegistrationStatus, string> = {
  open: 'bg-brand text-white',
  comingSoon: 'bg-ink text-white',
  inProgress: 'bg-white text-ink ring-2 ring-inset ring-ink',
  closed: 'bg-ink/10 text-ink',
  completed: 'bg-ink/10 text-ink',
};

export default function StatusBadge({ status, className = '' }: { status: RegistrationStatus; className?: string }) {
  const { t } = useI18n();
  return (
    <span
      className={`cut-sm inline-flex items-center gap-2 px-3 py-1.5 font-display text-sm font-bold uppercase tracking-[0.16em] ${styles[status]} ${className}`}
    >
      {status === 'open' && <span className="h-2 w-2 rounded-full bg-white" aria-hidden />}
      {t.status[status]}
    </span>
  );
}
