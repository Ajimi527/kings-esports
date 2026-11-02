import { CalendarDays, Cloud, Cpu, Keyboard, Video, type LucideProps } from 'lucide-react';
import type { PartnerIcon } from '@/types';

const map = { cpu: Cpu, keyboard: Keyboard, cloud: Cloud, calendar: CalendarDays, video: Video };

export default function CategoryIcon({ name, ...props }: { name: PartnerIcon } & LucideProps) {
  const Icon = map[name];
  return <Icon aria-hidden {...props} />;
}
