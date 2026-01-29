'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>(initialLang);

  // keep local state in sync if server-provided lang changes after refresh
  useEffect(() => {
    setLangState(initialLang);
  }, [initialLang]);

  const t = useMemo(() => {
    return (key: string) => {
      const value = dictionary[key];

      // ✅ VALID VALUE
      if (typeof value === 'string' && value.trim().length > 0) {
        return value;
      }

      // ❌ MISSING OR INVALID VALUE
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[i18n] Missing translation [${lang}]: ${key}`);
        return `⚠️ [${lang}] Missing: ${key}`;
      }

      // production-safe fallback
      return 'Missing text';
    };
  }, [dictionary, lang]);

  const setLang = (next: Lang) => {
    // 1) save scroll position
    const y = window.scrollY;
    sessionStorage.setItem('scrollY', String(y));

    // 2) set cookie for server layout to read
    document.cookie = `lang=${next}; path=/; max-age=31536000; samesite=lax`;

    // 3) refresh server components (layout will read new cookie and load new dict)
    router.refresh();
  };

  // 4) restore scroll after refresh
  useEffect(() => {
    const saved = sessionStorage.getItem('scrollY');
    if (!saved) return;

    sessionStorage.removeItem('scrollY');

    // wait a tick so DOM paints, then restore
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number(saved), left: 0, behavior: 'auto' });
    });
  }, [dictionary]); // dictionary changes after refresh

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside LanguageProvider');
  return ctx;
}
