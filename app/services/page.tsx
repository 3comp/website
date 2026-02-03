'use client';

import React from 'react';
import { Button } from '@heroui/react';
import MarkdownPage from '@/components/MarkdownPage';

type ServiceKey = 'pantheon' | 'odoo';

export default function ServicesPage() {
  const [active, setActive] = React.useState<ServiceKey>('pantheon');

  return (
    <>
      <main className="mx-auto w-full max-w-[95vw] px-4 py-8">
          <div className="grid grid-cols-1 gap-6 md:h-[80vh] md:grid-cols-[260px_1fr] md:items-stretch">
            {/* Left menu */}
            <aside className="relative rounded-2xl bg-white/60 p-3 shadow-sm backdrop-blur-md md:h-full">
              <p className="px-3 pb-2 text-sm font-semibold text-(--brand-black)/70">
                Services
              </p>

              <div className="flex flex-col gap-2">
                <Button
                  onPress={() => setActive('pantheon')}
                  className={`justify-start ${
                    active === 'pantheon'
                      ? 'bg-(--brand-blue) text-(--brand-white)'
                      : 'text-(--brand-blue)'
                  }`}
                  variant={active === 'pantheon' ? 'solid' : 'flat'}
                >
                  Pantheon
                </Button>

                <Button
                  onPress={() => setActive('odoo')}
                  className={`justify-start ${
                    active === 'odoo'
                      ? 'bg-(--brand-blue) text-(--brand-white)'
                      : 'text-(--brand-blue)'
                  }`}
                  variant={active === 'odoo' ? 'solid' : 'flat'}
                >
                  Odoo
                </Button>
              </div>
            </aside>

            <section
              id="service-content"
              className="rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-md md:h-full md:overflow-auto"
            >
              <MarkdownPage pageName={active} />
            </section>
          </div>
      </main>
    </>
  );
}
