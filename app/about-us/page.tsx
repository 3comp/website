'use client';

import SectionCTA from '@/components/SectionCTA';
import { useI18n } from '@/components/LanguageProvider';
import React from 'react';

function Panel({
  id,
  children,
  className = '',
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={[
        'scroll-mt-24',
        // keep the “panel look” exactly the same
        'card-hover overflow-visible rounded-3xl border border-black/10 bg-transparent',
        'focus-within:ring-2 focus-within:ring-blue-600/60 focus-within:outline-none',
        // keep the panel size similar to when the left menu existed
        'w-full max-w-220',
        className,
      ].join(' ')}
    >
      <div className="p-6 md:p-8">{children}</div>
    </section>
  );
}

function Title({ a, b }: { a: string; b: string }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight text-balance text-slate-900 md:text-3xl">
      {a} <span className="text-blue-600">{b}</span>
    </h2>
  );
}

function SubtleDivider() {
  return (
    <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-slate-200/70 to-transparent" />
  );
}

export default function AboutUsPage() {
  const { t } = useI18n();

  const panels = [
    {
      id: 'how-we-think',
      titleA: t('about.howWeThink.title1'),
      titleB: t('about.howWeThink.title2'),
      body: (
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
          <p>{t('about.howWeThink.text1')}</p>
          <p>{t('about.howWeThink.text2')}</p>
          <p>{t('about.howWeThink.text3')}</p>
        </div>
      ),
    },
    {
      id: 'why-we-started',
      titleA: t('about.whyWeStarted.title1'),
      titleB: t('about.whyWeStarted.title2'),
      body: (
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
          <p>{t('about.whyWeStarted.text1')}</p>
          <p>{t('about.whyWeStarted.text2')}</p>
        </div>
      ),
    },
    {
      id: 'what-makes-us-different',
      titleA: t('about.whatMakesUsDifferent.title1'),
      titleB: t('about.whatMakesUsDifferent.title2'),
      body: (
        <ul className="mt-5 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600/80" />
              <div className="text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
                <span className="font-semibold text-slate-900">
                  {t(`about.whatMakesUsDifferent.point${i}.title`)}
                </span>
                {' — '}
                {t(`about.whatMakesUsDifferent.point${i}.text`)}
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'who-we-work-with',
      titleA: t('about.whoWeWorkWith.title1'),
      titleB: t('about.whoWeWorkWith.title2'),
      body: (
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
          <p>{t('about.whoWeWorkWith.text1')}</p>
          <p>{t('about.whoWeWorkWith.text2')}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="mx-auto min-h-[80vh] w-full max-w-6xl px-4 py-10 md:py-14">
        <header className="mb-10 md:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            {t('about.whatWeDo.smalltext')}
          </p>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 md:text-3xl">
            {t('about.whatWeDo.title1')}{' '}
            <span className="text-blue-600">{t('about.whatWeDo.title2')}</span>
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
            {t('about.whatWeDo.text')}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: t('about.whatWeDo.card1.title'),
                value: t('about.whatWeDo.card1.text'),
              },
              {
                label: t('about.whatWeDo.card2.title'),
                value: t('about.whatWeDo.card2.text'),
              },
              {
                label: t('about.whatWeDo.card3.title'),
                value: t('about.whatWeDo.card3.text'),
              },
            ].map((s) => (
              <div
                key={s.label}
                className="card-hover overflow-visible rounded-2xl border border-black/10 bg-transparent p-4"
              >
                <div className="text-lg font-semibold tracking-tight text-slate-900">
                  {s.label}
                </div>
                <div className="mt-1 text-xs text-slate-600">{s.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Panels: alternating alignment */}
        <section className="flex flex-col gap-15">
          {panels.map((p, idx) => {
            // 1st right, 2nd left, 3rd right, ...
            const alignClass = idx % 2 === 0 ? 'ml-auto' : 'mr-auto';

            return (
              <Panel key={p.id} id={p.id} className={alignClass}>
                <Title a={p.titleA} b={p.titleB} />
                {p.body}
              </Panel>
            );
          })}
        </section>

        <SubtleDivider />
        <SectionCTA />
      </main>
    </div>
  );
}
