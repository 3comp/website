'use client';

import { useI18n } from '@/components/LanguageProvider';
import { Card, CardBody, CardFooter, CardHeader, Image } from '@heroui/react';

type Service = {
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
}: Service) {
  return (
    <Card
      shadow="none"
      className="card-hover w-full overflow-visible border border-black/10 bg-white"
    >
      {/* TITLE */}
      <CardHeader className="px-6 pt-6 pb-1">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </CardHeader>

      {/* DESCRIPTION */}
      <CardBody className="px-6 py-2">
        <p className="text-sm leading-relaxed text-black/70">{text}</p>
      </CardBody>

      {/* FOOTER */}
      <CardFooter className="flex items-end justify-between px-6 pt-2 pb-6">
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
      title: t('services.pantheon.title'),
      text: t('services.pantheon.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/pantheon.svg',
      footerImageAlt: 'Pantheon ERP',
      footerImageWidth: 100,
      footerImageHeight: 24,
    },
    {
      title: t('services.odoo.title'),
      text: t('services.odoo.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/odoo.svg',
      footerImageAlt: 'Odoo ERP',
      footerImageWidth: 80,
      footerImageHeight: 26,
    },
    {
      title: t('services.custom.title'),
      text: t('services.custom.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/apps.svg',
      footerImageAlt: 'Custom development',
      footerImageWidth: 90,
      footerImageHeight: 36,
    },
    {
      title: t('services.web.title'),
      text: t('services.web.text'),
      footerText: t('services.footer.defaultText'),
      footerImageSrc: '/img/web.svg',
      footerImageAlt: 'Web development',
      footerImageWidth: 90,
      footerImageHeight: 36,
    },
    {
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
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
