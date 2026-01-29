import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { Providers } from './providers';
import { getDictionary, normalizeLang } from '@/lib/i18n';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.3comp.si'),
  title: {
    default: '3comp | Digitalne rešitve, ERP in razvoj programske opreme',
    template: '%s | 3comp',
  },
  description:
    '3comp je tehnološki partner za podjetja: uvedba Pantheon ERP, razvoj aplikacij po meri, integracije sistemov ter zanesljiva podpora.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const langCookie = (await cookies()).get('lang')?.value ?? 'si';
  const lang = normalizeLang(langCookie);
  const dict = await getDictionary(lang);

  return (
    <html lang={lang === 'si' ? 'si' : 'en'}>
      <body>
        <Providers>
          <LanguageProvider initialLang={lang} dictionary={dict}>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}
