'use client';

import Link from 'next/link';
import { useI18n } from '@/components/LanguageProvider';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@heroui/react';

type ServiceKey = 'pantheon' | 'odoo' | 'custom' | 'web' | 'it';

type Service = {
  key: ServiceKey;
  title: string;
  text: string;
  footerText?: string;
  footerImageSrc?: string;
  footerImageAlt?: string;
  footerImageWidth?: number;
  footerImageHeight?: number;
};

function ServiceCard({
  title,
  text,
  footerText,
  footerImageSrc,
  footerImageAlt,
  footerImageWidth,
  footerImageHeight,
}: Omit<Service, 'key'>) {
  return (
    <Card
      shadow="none"
      className="card-hover flex h-55 w-full flex-col overflow-visible border border-black/10 bg-white"
    >
      <CardHeader className="px-6 pt-6 pb-1">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </CardHeader>

      <CardBody className="flex-1 px-6 py-2">
        <p className="line-clamp-4 text-sm leading-relaxed text-black/70 sm:line-clamp-5">
          {text}
        </p>
      </CardBody>

      <CardFooter className="mt-auto flex items-end justify-between px-6 pt-2 pb-6">
        <span className="text-xs text-black/50">{footerText ?? ''}</span>

        {footerImageSrc && (
          <Image
            removeWrapper
            src={footerImageSrc}
            alt={footerImageAlt ?? ''}
            width={footerImageWidth ?? 80}
            height={footerImageHeight ?? 24}
            className="rounded-none object-contain opacity-70"
            style={{ display: 'block' }}
          />
        )}
      </CardFooter>
    </Card>
  );
}

export default function SectionServices() {
  const { t } = useI18n();

  const services: Service[] = [
    {
      key: 'pantheon',
      title: t('services.pantheon.title'),
      text: t('services.pantheon.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/pantheon.svg',
      footerImageAlt: 'Pantheon ERP',
      footerImageWidth: 100,
      footerImageHeight: 24,
    },
    {
      key: 'odoo',
      title: t('services.odoo.title'),
      text: t('services.odoo.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/odoo.svg',
      footerImageAlt: 'Odoo ERP',
      footerImageWidth: 80,
      footerImageHeight: 26,
    },
    {
      key: 'custom',
      title: t('services.custom.title'),
      text: t('services.custom.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/apps.svg',
      footerImageAlt: 'Custom development',
      footerImageWidth: 90,
      footerImageHeight: 36,
    },
    {
      key: 'web',
      title: t('services.web.title'),
      text: t('services.web.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/web.svg',
      footerImageAlt: 'Web development',
      footerImageWidth: 90,
      footerImageHeight: 36,
    },
    {
      key: 'it',
      title: t('services.it.title'),
      text: t('services.it.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/support.svg',
      footerImageAlt: 'IT support',
      footerImageWidth: 90,
      footerImageHeight: 36,
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container-page">
        <h2 className="section-title">
          {t('services.title.prefix')}{' '}
          <span className="text-blue-600">{t('services.title.highlight')}</span>
        </h2>
        <p className="section-subtitle">{t('services.intro')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, ...serviceProps }) => (
            <Link
              key={key}
              href={`/services?service=${key}`}
              className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/60"
            >
              <ServiceCard {...serviceProps} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
