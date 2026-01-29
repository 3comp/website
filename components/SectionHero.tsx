'use client';

import { useI18n } from '@/components/LanguageProvider';
import { Button } from '@heroui/react';

export default function SectionHero() {
  const { t } = useI18n();

  return (
    <section className="section">
      <div className="container-page">
        <div className="surface p-8 shadow-sm md:p-12">
          {/* Keep text constrained */}
          <div className="max-w-3xl">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
              {t('hero.title.prefix')}{' '}
              <span className="text-blue-600">{t('hero.title.highlight')}</span>
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
                {t('hero.services')}
              </Button>

              <Button
                as="a"
                href="#contact"
                color="default"
                variant="bordered"
                className="w-full sm:w-auto"
              >
                {t('hero.email')}
              </Button>
            </div>
          </div>

          {/* Let cards use full width of the hero panel */}
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="surface card-hover flex h-full w-full flex-col p-5">
              <div className="font-semibold">{t('hero.sub.title1')}</div>
              <div className="mt-2 text-sm text-black/60">
                {t('hero.sub.text1')}
              </div>
            </div>

            <div className="surface card-hover flex h-full w-full flex-col p-5">
              <div className="font-semibold">{t('hero.sub.title2')}</div>
              <div className="mt-2 text-sm text-black/60">
                {t('hero.sub.text2')}
              </div>
            </div>

            <div className="surface card-hover flex h-full w-full flex-col p-5">
              <div className="font-semibold">{t('hero.sub.title3')}</div>
              <div className="mt-2 text-sm text-black/60">
                {t('hero.sub.text3')}
              </div>
            </div>

            <div className="surface card-hover flex h-full w-full flex-col p-5">
              <div className="font-semibold">{t('hero.sub.title4')}</div>
              <div className="mt-2 text-sm text-black/60">
                {t('hero.sub.text4')}
              </div>
            </div>

            <div className="surface card-hover flex h-full w-full flex-col p-5">
              <div className="font-semibold">{t('hero.sub.title5')}</div>
              <div className="mt-2 text-sm text-black/60">
                {t('hero.sub.text5')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
