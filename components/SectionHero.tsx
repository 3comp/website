'use client';

import { useI18n } from '@/components/LanguageProvider';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function SectionHero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      {/* Background (kept, but neutral like original) */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Content */}
      <div
        className={[
          'relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6',
          // ✅ mobile: give breathing room from the top (header/safe-area)
          'pt-16 pb-10',
          // ✅ on bigger screens go back to centered look
          'sm:pt-0 sm:pb-0',
        ].join(' ')}
      >
        {/* Announcement pill (original light style) */}
        <Link
          href="/pricing"
          className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-black/70 transition hover:bg-black/5"
        >
          <span>
            {t('hero.pill.text1')}{' '}
            <span className="text-blue-600">{t('hero.pill.text2')} →</span>
          </span>
        </Link>

        {/* Headline */}
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-black sm:text-6xl">
          {t('hero.title.prefix')}{' '}
          <span className="text-blue-600">{t('hero.title.highlight')}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
          {t('hero.subtitle')}
        </p>

        {/* Buttons (unchanged from original) */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            {t('hero.email')}{' '}
            <span aria-hidden className="ml-1">
              →
            </span>
          </Button>
        </div>

        {/* hero.sub cards — original surface style */}
        <div className="mt-12 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { title: t('hero.sub.title1'), text: t('hero.sub.text1') },
            { title: t('hero.sub.title2'), text: t('hero.sub.text2') },
            { title: t('hero.sub.title3'), text: t('hero.sub.text3') },
            { title: t('hero.sub.title4'), text: t('hero.sub.text4') },
            { title: t('hero.sub.title5'), text: t('hero.sub.text5') },
          ].map((item, idx) => (
            <div
              key={idx}
              className="surface card-hover flex flex-col p-5 text-left"
            >
              <div className="text-sm font-semibold text-black">
                {item.title}
              </div>
              <div className="mt-2 text-sm text-black/60">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
