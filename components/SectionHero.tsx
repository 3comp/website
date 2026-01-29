'use client';

import { Button } from '@heroui/react';
import { useI18n } from '@/components/LanguageProvider';

export default function HeroSection() {
  const { t } = useI18n();

  const mailtoHref = `mailto:info@3comp.si?subject=${t('cta.emailSubject')}&body=${t(
    'cta.emailBody'
  )}`;

  return (
    <section className="section">
      <div className="container-page">
        <div className="surface p-8 shadow-sm md:p-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
              {t('hero.title')}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
              {t('hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                as="a"
                href="#services"
                color="primary"
                variant="solid"
                className="w-full sm:w-auto"
              >
                {t('services.title')}
              </Button>

              <Button
                as="a"
                href={mailtoHref}
                color="default"
                variant="bordered"
                className="w-full sm:w-auto"
              >
                {t('nav.email')}
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              <div className="surface p-4 text-sm">
                <div className="font-semibold">ERP</div>
                <div className="text-black/60">Pantheon</div>
              </div>
              <div className="surface p-4 text-sm">
                <div className="font-semibold">Integrations</div>
                <div className="text-black/60">ERP / MES / CRM</div>
              </div>
              <div className="surface p-4 text-sm">
                <div className="font-semibold">Custom Apps</div>
                <div className="text-black/60">Web + internal tools</div>
              </div>
              <div className="surface p-4 text-sm">
                <div className="font-semibold">Support</div>
                <div className="text-black/60">Long-term partner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
