export type Lang = 'si' | 'en';
export type Dict = Record<string, string>;

export function normalizeLang(input?: string | null): Lang {
  if (!input) return 'si';
  const v = input.toLowerCase();
  if (v.startsWith('en')) return 'en';
  return 'si';
}

export async function getDictionary(lang: Lang): Promise<Dict> {
  switch (lang) {
    case 'en':
      return (await import('../lang/en.json')).default;
    case 'si':
    default:
      return (await import('../lang/si.json')).default;
  }
}
