import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import MarkdownPage from '@/components/MarkdownPage';
import type { Lang } from '@/lib/i18n';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!slug) notFound();

  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as Lang) ?? 'en';

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 md:py-14">
      <MarkdownPage pageName={slug} lang={lang} basePath="blog" />
    </main>
  );
}
