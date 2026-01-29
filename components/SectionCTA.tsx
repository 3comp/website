'use client';

import { Button } from '@heroui/react';
import { useI18n } from '@/components/LanguageProvider';

export default function CtaSection() {
  const { t } = useI18n();

  const mailtoHref = `mailto:info@3comp.si?subject=${t('cta.emailSubject')}&body=${t(
    'cta.emailBody'
  )}`;

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="surface flex flex-col items-start justify-between gap-8 p-8 shadow-sm md:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="section-title">{t('cta.title')}</h2>
            <p className="section-subtitle">{t('cta.text')}</p>
          </div>

          <div className="w-full lg:w-auto">
            <Button
              as="a"
              href={mailtoHref}
              color="primary"
              variant="solid"
              className="w-full lg:w-auto"
            >
              {t('cta.emailButton')}
            </Button>

            <div className="mt-3 text-xs text-black/60">info@3comp.si</div>
          </div>
        </div>
      </div>
    </section>
  );
}
