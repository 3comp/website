'use client';

import { useI18n } from '@/components/LanguageProvider';

export default function BlogPage() {
  const { t } = useI18n();
  return (
    <>
      <main className="mx-auto w-full max-w-[95vw] px-4 py-8 bg-red-600"></main>
    </>
  );
}