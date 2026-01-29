'use client';

import { useI18n } from '@/components/LanguageProvider';

export default function FooterSection() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-black/10">
      <div className="container-page flex flex-col items-start justify-between gap-4 py-10 md:flex-row md:items-center">
        <div className="text-sm text-black/70">
          © {new Date().getFullYear()} {t('footer.text')}
        </div>
      </div>
    </footer>
  );
}
