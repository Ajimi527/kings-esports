import { Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { contactHref } from '@/lib/links';
import { useI18n } from '@/i18n';
import Button from './Button';

interface ContactButtonProps {
  variant?: 'white' | 'black' | 'red' | 'outlineWhite' | 'outlineBlack';
  subject?: string;
  /** Show the "email coming soon" note when no email is configured */
  showNote?: boolean;
  noteClassName?: string;
}

/**
 * CONTACT US button. Uses the organization email from src/config/site.ts.
 * While no email is configured it points to Discord (a real working channel) and says so, instead of faking a mailbox.
 */
export default function ContactButton({ variant = 'red', subject = 'Partnership enquiry', showNote = true, noteClassName = '' }: ContactButtonProps) {
  const { t } = useI18n();
  const mail = contactHref(subject);
  return (
    <div>
      <Button
        variant={variant}
        size="lg"
        href={mail ?? siteConfig.discordUrl}
        icon={<Mail size={22} aria-hidden />}
        externalHint={t.common.opensInNewTab}
      >
        {t.partnersPage.contactCta}
      </Button>
      {!mail && showNote && <p className={`mt-4 max-w-md text-sm ${noteClassName}`}>{t.partnersPage.emailSoon}</p>}
    </div>
  );
}
