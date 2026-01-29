'use client';

import { useI18n } from '@/components/LanguageProvider';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  const isSI = lang === 'si';
  const isEN = lang === 'en';

  return (
    <div className="inline-flex items-center rounded-full border border-black/10 bg-white p-1 text-sm">
      <button
        type="button"
        onClick={() => setLang('si')}
        className={[
          'rounded-full px-3 py-1 font-medium transition',
          isSI
            ? 'bg-black/5 text-[#1A1A1A]'
            : 'text-black/60 hover:text-[#1A1A1A]',
        ].join(' ')}
        aria-pressed={isSI}
      >
        SI
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={[
          'rounded-full px-3 py-1 font-medium transition',
          isEN
            ? 'bg-black/5 text-[#1A1A1A]'
            : 'text-black/60 hover:text-[#1A1A1A]',
        ].join(' ')}
        aria-pressed={isEN}
      >
        EN
      </button>
    </div>
  );
}
