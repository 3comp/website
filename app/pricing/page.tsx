'use client';

import React from 'react';
import { useI18n } from '@/components/LanguageProvider';

type OneTimeOption = {
  id: 'hourly' | 'project';
  title: string;
  description: string;
  priceLabel: string;
  notes?: string[];
  ctaLabel: string;
};

type LongTermPlan = {
  id: 'basic' | 'advanced' | 'enterprise';
  title: string;
  subtitle: string;
  priceLabel: string;
  highlight?: boolean;
  badgeLabel?: string;
  features: string[];
  cta: string;
  billingHint?: string;
};

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>
      <p className="text-sm text-neutral-600 sm:text-base">{description}</p>
    </div>
  );
}

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'surface card-hover flex h-full w-full flex-col p-5',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

export default function PricingPage() {
  const { t } = useI18n();

  const buildMailtoHref = (optionLabel: string) => {
    const subject = t('pricing.emailSubject');

    const bodyTemplate = t('pricing.emailBody');
    const body = bodyTemplate.replace('{{option}}', optionLabel);

    return `mailto:info@3comp.si?subject=${subject}&body=${body}`;
  };

  // -------------------------
  // Data
  // -------------------------
  const oneTimeOptions: OneTimeOption[] = [
    {
      id: 'hourly',
      title: t('pricing.oneTime.hourly.title'),
      description: t('pricing.oneTime.hourly.description'),
      priceLabel: t('pricing.oneTime.hourly.priceLabel'),
      notes: [
        t('pricing.oneTime.hourly.note1'),
        t('pricing.oneTime.hourly.note2'),
        t('pricing.oneTime.hourly.note3'),
      ],
      ctaLabel: t('pricing.oneTime.hourly.cta'),
    },
    {
      id: 'project',
      title: t('pricing.oneTime.project.title'),
      description: t('pricing.oneTime.project.description'),
      priceLabel: t('pricing.oneTime.project.priceLabel'),
      notes: [
        t('pricing.oneTime.project.note1'),
        t('pricing.oneTime.project.note2'),
        t('pricing.oneTime.project.note3'),
        t('pricing.oneTime.project.note4'),
      ],
      ctaLabel: t('pricing.oneTime.project.cta'),
    },
  ];

  const longTermPlans: LongTermPlan[] = [
    {
      id: 'basic',
      title: t('pricing.longTerm.basic.title'),
      subtitle: t('pricing.longTerm.basic.subtitle'),
      priceLabel: t('pricing.longTerm.basic.priceLabel'),
      features: [
        t('pricing.longTerm.basic.feature1'),
        t('pricing.longTerm.basic.feature2'),
        t('pricing.longTerm.basic.feature3'),
        t('pricing.longTerm.basic.feature4'),
      ],
      cta: t('pricing.longTerm.basic.cta'),
    },
    {
      id: 'advanced',
      title: t('pricing.longTerm.advanced.title'),
      subtitle: t('pricing.longTerm.advanced.subtitle'),
      priceLabel: t('pricing.longTerm.advanced.priceLabel'),
      highlight: true,
      badgeLabel: t('pricing.longTerm.popularBadge'),
      features: [
        t('pricing.longTerm.advanced.feature1'),
        t('pricing.longTerm.advanced.feature2'),
        t('pricing.longTerm.advanced.feature3'),
        t('pricing.longTerm.advanced.feature4'),
        t('pricing.longTerm.advanced.feature5'),
        t('pricing.longTerm.advanced.feature6'),
      ],
      cta: t('pricing.longTerm.advanced.cta'),
    },
    {
      id: 'enterprise',
      title: t('pricing.longTerm.enterprise.title'),
      subtitle: t('pricing.longTerm.enterprise.subtitle'),
      priceLabel: t('pricing.longTerm.enterprise.priceLabel'),
      features: [
        t('pricing.longTerm.enterprise.feature1'),
        t('pricing.longTerm.enterprise.feature2'),
        t('pricing.longTerm.enterprise.feature3'),
        t('pricing.longTerm.enterprise.feature4'),
        t('pricing.longTerm.enterprise.feature5'),
        t('pricing.longTerm.enterprise.feature6'),
      ],
      cta: t('pricing.longTerm.enterprise.cta'),
    },
  ];

  return (
    <>
      <main className="mx-auto w-full max-w-[95vw] px-4 py-8">
        <section className="space-y-8">
          {/* Page header */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {t('pricing.pageTitle')}
            </h1>
            <p className="text-sm text-neutral-600 sm:text-base">
              {t('pricing.pageSubtitle')}
            </p>
          </div>

          {/* ONE-TIME */}
          <div id="one-time" className="space-y-4">
            <SectionHeader
              title={t('pricing.oneTime.title')}
              description={t('pricing.oneTime.subtitle')}
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {oneTimeOptions.map((opt) => (
                <Card key={opt.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{opt.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        {opt.description}
                      </p>
                    </div>

                    <div className="shrink-0 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-semibold">
                      {opt.priceLabel}
                    </div>
                  </div>

                  {opt.notes?.length ? (
                    <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                      {opt.notes.map((n, i) => (
                        <li key={`${opt.id}-note-${i}`} className="flex gap-2">
                          <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* CTA button only (bottom aligned) */}
                  <div className="mt-auto pt-5">
                    <a
                      href={buildMailtoHref(opt.title)}
                      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                    >
                      {opt.ctaLabel}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* LONG-TERM */}
          <div id="long-term" className="space-y-4">
            <SectionHeader
              title={t('pricing.longTerm.title')}
              description={t('pricing.longTerm.subtitle')}
            />

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {longTermPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={
                    plan.highlight
                      ? 'border-neutral-900 shadow-md'
                      : 'border-neutral-200'
                  }
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{plan.title}</h3>
                        <p className="text-sm text-neutral-600">
                          {plan.subtitle}
                        </p>
                      </div>

                      {plan.highlight && plan.badgeLabel ? (
                        <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                          {plan.badgeLabel}
                        </span>
                      ) : null}
                    </div>

                    <div className="pt-2">
                      <div className="text-2xl font-bold">
                        {plan.priceLabel}
                      </div>
                    </div>
                  </div>

                  <div className="my-4 h-px bg-neutral-200" />

                  <ul className="space-y-2 text-sm text-neutral-700">
                    {plan.features.map((f, i) => (
                      <li
                        key={`${plan.id}-feature-${i}`}
                        className="flex gap-2"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-neutral-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA (bottom aligned) */}
                  <div className="mt-auto pt-5">
                    <a
                      href={buildMailtoHref(plan.title)}
                      className={[
                        'inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium',
                        plan.highlight
                          ? 'bg-blue-600 text-white hover:opacity-90'
                          : 'border border-neutral-200 hover:bg-neutral-50',
                      ].join(' ')}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
