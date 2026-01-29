'use client';

import { useI18n } from '@/components/LanguageProvider';

type Service = {
  title: string;
  text: string;
};

function ServiceCard({ title, text }: Service) {
  return (
    <div className="surface p-6 shadow-sm">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-black/70">{text}</p>
    </div>
  );
}

export default function ServicesSection() {
  const { t } = useI18n();

  const services: Service[] = [
    { title: t('services.pantheon.title'), text: t('services.pantheon.text') },
    { title: t('services.odoo.title'), text: t('services.odoo.text') },
    { title: t('services.custom.title'), text: t('services.custom.text') },
    { title: t('services.web.title'), text: t('services.web.text') },
    { title: t('services.it.title'), text: t('services.it.text') },
  ];

  return (
    <section id="services" className="section">
      <div className="container-page">
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.intro')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} text={s.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
