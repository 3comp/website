'use client';

import { useI18n } from '@/components/LanguageProvider';
import { Card, CardBody, CardHeader, Image } from '@heroui/react';

type Step = {
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
};

function StepCard({
  title,
  text,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: Step) {
  return (
    <Card
      shadow="none"
      className="card-hover w-full overflow-visible border border-black/10 bg-white"
    >
      <CardHeader className="flex items-center gap-3 px-6 pt-6 pb-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/5">
          <Image
            removeWrapper
            src={image}
            alt={imageAlt ?? ''}
            width={imageWidth || 30}
            height={imageHeight || 30}
            className="rounded-none object-contain opacity-70"
            style={{ display: 'block' }}
          />
        </div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      </CardHeader>

      <CardBody className="px-6 pt-0 pb-6">
        <p className="text-sm leading-relaxed text-black/70">{text}</p>
      </CardBody>
    </Card>
  );
}

export default function SectionApproach() {
  const { t } = useI18n();

  const steps: Step[] = [
    {
      title: t('approach.step1.title'),
      text: t('approach.step1.text'),
      image: '/img/step1.svg',
      imageAlt: 'Research',
      imageWidth: 30,
      imageHeight: 30,
    },
    {
      title: t('approach.step2.title'),
      text: t('approach.step2.text'),
      image: '/img/step2.svg',
      imageAlt: 'Idea',
      imageWidth: 30,
      imageHeight: 30,
    },
    {
      title: t('approach.step3.title'),
      text: t('approach.step3.text'),
      image: '/img/step3.svg',
      imageAlt: 'Creation',
      imageWidth: 30,
      imageHeight: 30,
    },
    {
      title: t('approach.step4.title'),
      text: t('approach.step4.text'),
      image: '/img/step4.svg',
      imageAlt: 'Satisfaction',
      imageWidth: 30,
      imageHeight: 30,
    },
  ];

  return (
    <section id="approach" className="section">
      <div className="container-page">
        {/* Title row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight">
            {t('approach.title.prefix')}{' '}
            <span className="text-blue-600">
              {t('approach.title.highlight')}
            </span>
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-black/60">
            {t('approach.subtitle')}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StepCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
