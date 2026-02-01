'use client';

import React from 'react';
import { Button } from '@heroui/react';
import MarkdownPage from '@/components/MarkdownPage';

type ServiceKey = 'pantheon' | 'odoo';

export default function ServicesPage() {
  const [active, setActive] = React.useState<ServiceKey>('pantheon');

  return (
    <>
      {/* at least 80% of screen height */}
      <main className="mx-auto min-h-[80vh] w-full max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[260px_1fr]">
          {/* Left menu */}
          <aside className="relative rounded-2xl bg-white/60 p-3 shadow-sm backdrop-blur-md">
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
            className="max-h-[80vh] overflow-auto rounded-2xl bg-white/60 p-6 shadow-sm backdrop-blur-md"
          >
            <MarkdownPage pageName={active} />
          </section>
        </div>
      </main>
    </>
  );
}
