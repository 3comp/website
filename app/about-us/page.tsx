'use client';

import SectionCTA from '@/components/SectionCTA';
import { useI18n } from '@/components/LanguageProvider';
import React from 'react';

const nav = [
  {
    id: 'what-we-do',
    key1: 'about.whatWeDo.title1',
    key2: 'about.whatWeDo.title2',
  },
  {
    id: 'how-we-think',
    key1: 'about.howWeThink.title1',
    key2: 'about.howWeThink.title2',
  },
  {
    id: 'why-we-started',
    key1: 'about.whyWeStarted.title1',
    key2: 'about.whyWeStarted.title2',
  },
  {
    id: 'what-makes-us-different',
    key1: 'about.whatMakesUsDifferent.title1',
    key2: 'about.whatMakesUsDifferent.title2',
  },
  {
    id: 'who-we-work-with',
    key1: 'about.whoWeWorkWith.title1',
    key2: 'about.whoWeWorkWith.title2',
  },
];

function Panel({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className={[
        'scroll-mt-24',
        'card-hover overflow-visible rounded-3xl border border-black/10 bg-transparent',
        'focus-within:ring-2 focus-within:ring-blue-600/60 focus-within:outline-none',
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

        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          <aside className="hidden md:block">
            <div className="card-hover sticky top-24 overflow-visible rounded-2xl border border-black/10 bg-transparent p-4">
              <p className="mb-3 text-sm font-medium tracking-wide text-slate-600 uppercase">
                {t('about.menuTitle')}
              </p>

              <nav className="space-y-1">
                {nav.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
                  >
                    {t(n.key1)} {t(n.key2)}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <section className="space-y-8">
            <Panel id="how-we-think">
              <Title
                a={t('about.howWeThink.title1')}
                b={t('about.howWeThink.title2')}
              />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
                <p>{t('about.howWeThink.text1')}</p>
                <p>{t('about.howWeThink.text2')}</p>
                <p>{t('about.howWeThink.text3')}</p>
              </div>
            </Panel>

            <Panel id="why-we-started">
              <Title
                a={t('about.whyWeStarted.title1')}
                b={t('about.whyWeStarted.title2')}
              />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
                <p>{t('about.whyWeStarted.text1')}</p>
                <p>{t('about.whyWeStarted.text2')}</p>
              </div>
            </Panel>

            <Panel id="what-makes-us-different">
              <Title
                a={t('about.whatMakesUsDifferent.title1')}
                b={t('about.whatMakesUsDifferent.title2')}
              />

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
            </Panel>

            <Panel id="who-we-work-with">
              <Title
                a={t('about.whoWeWorkWith.title1')}
                b={t('about.whoWeWorkWith.title2')}
              />
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-pretty text-slate-700 md:text-base">
                <p>{t('about.whoWeWorkWith.text1')}</p>
                <p>{t('about.whoWeWorkWith.text2')}</p>
              </div>
            </Panel>
          </section>
        </div>

        <SubtleDivider />
        <SectionCTA />
      </main>
    </div>
  );
}
