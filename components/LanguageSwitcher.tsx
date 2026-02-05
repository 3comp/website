'use client';

import { useI18n } from '@/components/LanguageProvider';

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  const isSI = lang === 'si';

  return (
    <div className="relative inline-flex items-center rounded-full border border-black/10 bg-white p-1 text-sm">
      {/* Sliding background */}
      <span
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-black/5 transition-all duration-300 ease-in-out ${
          isSI ? 'left-1' : 'left-[calc(50%+2px)]'
        }`}
      />

      <button
        type="button"
        onClick={() => setLang('si')}
        className={`relative z-10 rounded-full px-3 py-1 font-medium transition-colors duration-300 ${
          isSI ? 'text-[#1A1A1A]' : 'text-black/60 hover:text-[#1A1A1A]'
        }`}
      >
        SI
      </button>

      <button
        type="button"
        onClick={() => setLang('en')}
        className={`relative z-10 rounded-full px-3 py-1 font-medium transition-colors duration-300 ${
          !isSI ? 'text-[#1A1A1A]' : 'text-black/60 hover:text-[#1A1A1A]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
