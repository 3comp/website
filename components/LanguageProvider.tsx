'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Dict, Lang } from '@/lib/i18n';

type I18nValue = {
  lang: Lang;
  t: (key: string) => string;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({
  initialLang,
  dictionary,
  children,
}: {
  initialLang: Lang;
  dictionary: Dict;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  const t = useMemo(() => {
    return (key: string) => {
      const val = dictionary[key];
      if (val) return val;
      if (process.env.NODE_ENV !== 'production') return `❗${key}`;
      return key;
    };
  }, [dictionary]);

  const setLang = (next: Lang) => {
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;
    setLangState(next);
    window.location.reload();
  };

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider');
  return ctx;
}
