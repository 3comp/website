'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import MarkdownPage from '@/components/MarkdownPage';
import { useI18n } from '@/components/LanguageProvider';

type ServiceKey = 'pantheon' | 'odoo' | 'custom' | 'web' | 'it';

function isServiceKey(v: string | null): v is ServiceKey {
  return (
    v === 'pantheon' ||
    v === 'odoo' ||
    v === 'custom' ||
    v === 'web' ||
    v === 'it'
  );
}

export default function ServicesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { lang, t } = useI18n();

  const [active, setActive] = React.useState<ServiceKey>('pantheon');

  // 1) When arriving from landing page: /services?service=odoo -> setActive('odoo')
  React.useEffect(() => {
    const fromUrl = searchParams.get('service');
    if (isServiceKey(fromUrl)) setActive(fromUrl);
  }, [searchParams]);

  // 2) When user clicks sidebar buttons, also update URL so it stays shareable/bookmarkable
  const selectService = (key: ServiceKey) => {
    setActive(key);

    const params = new URLSearchParams(searchParams.toString());
    params.set('service', key);
    router.replace(`/services?${params.toString()}`, { scroll: false });
  };

  return (
    <main className="mx-auto w-full max-w-[95vw] px-4 py-8">
      <div className="grid grid-cols-1 gap-6 md:h-[80vh] md:grid-cols-[260px_1fr] md:items-stretch">
        <aside className="relative rounded-2xl bg-white/60 p-3 shadow-sm backdrop-blur-md md:h-full">
          <p className="px-3 pb-2 text-sm font-semibold text-(--brand-black)/70">
            Services
          </p>

          <div className="flex flex-col gap-2">
            <Button
              onPress={() => selectService('pantheon')}
              className={`h-auto justify-start py-3 text-left wrap-break-word whitespace-normal ${
                active === 'pantheon'
                  ? 'bg-(--brand-blue) text-(--brand-white)'
                  : 'border border-black/10 bg-white text-(--brand-blue)'
              } `}
              variant={active === 'pantheon' ? 'solid' : 'bordered'}
            >
              {t('services.pantheon.title')}
            </Button>

            <Button
              onPress={() => selectService('odoo')}
              className={`h-auto justify-start py-3 text-left wrap-break-word whitespace-normal ${
                active === 'odoo'
                  ? 'bg-(--brand-blue) text-(--brand-white)'
                  : 'border border-black/10 bg-white text-(--brand-blue)'
              } `}
              variant={active === 'pantheon' ? 'solid' : 'bordered'}
            >
              {t('services.odoo.title')}
            </Button>

            {/* Optional: only keep these if you have markdown folders for them */}
            <Button
              onPress={() => selectService('custom')}
              className={`h-auto justify-start py-3 text-left wrap-break-word whitespace-normal ${
                active === 'custom'
                  ? 'bg-(--brand-blue) text-(--brand-white)'
                  : 'border border-black/10 bg-white text-(--brand-blue)'
              } `}
              variant={active === 'pantheon' ? 'solid' : 'bordered'}
            >
              {t('services.custom.title')}
            </Button>

            <Button
              onPress={() => selectService('web')}
              className={`h-auto justify-start py-3 text-left wrap-break-word whitespace-normal ${
                active === 'web'
                  ? 'bg-(--brand-blue) text-(--brand-white)'
                  : 'border border-black/10 bg-white text-(--brand-blue)'
              } `}
              variant={active === 'pantheon' ? 'solid' : 'bordered'}
            >
              {t('services.web.title')}
            </Button>

            <Button
              onPress={() => selectService('it')}
              className={`h-auto justify-start py-3 text-left wrap-break-word whitespace-normal ${
                active === 'it'
                  ? 'bg-(--brand-blue) text-(--brand-white)'
                  : 'border border-black/10 bg-white text-(--brand-blue)'
              } `}
              variant={active === 'pantheon' ? 'solid' : 'bordered'}
            >
              {t('services.it.title')}
            </Button>
          </div>
        </aside>

        <section
          id="service-content"
          className="rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-md md:h-full md:overflow-auto"
        >
          <MarkdownPage pageName={active} lang={lang} />
        </section>
      </div>
    </main>
  );
}
