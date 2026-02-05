'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import rehypeSlug from 'rehype-slug';
import type { Lang } from '@/lib/i18n';

type Props = { pageName: string; lang: Lang };

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

function scrollToHash(hash: string) {
  const id = hash.replace('#', '');
  if (!id) return;

  const el = document.getElementById(decodeURIComponent(id));
  if (!el) return;

  const container = document.getElementById('service-content');

  if (container) {
    const containerTop = container.getBoundingClientRect().top;
    const elTop = el.getBoundingClientRect().top;

    container.scrollTo({
      top: container.scrollTop + (elTop - containerTop) - 16,
      behavior: 'smooth',
    });
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function MarkdownPage({ pageName, lang }: Props) {
  const [md, setMd] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function fetchText(url: string) {
      const res = await fetch(url, {
        cache: 'no-store',
        signal: controller.signal,
      });
      return res.ok ? await res.text() : null;
    }

    async function load() {
      setError(null);
      setMd('');

      try {
        // 1) Try language-specific markdown
        const localized = await fetchText(
          `/markdown/${pageName}/index.${lang}.md`
        );
        if (localized) {
          setMd(localized);
          return;
        }

        // 2) Fallback to English (recommended)
        const en = await fetchText(`/markdown/${pageName}/index.en.md`);
        if (en) {
          setMd(en);
          return;
        }

        // 3) Fallback to your old file name (optional)
        const legacy = await fetchText(`/markdown/${pageName}/index.md`);
        if (legacy) {
          setMd(legacy);
          return;
        }

        setError(
          `Could not load markdown for "${pageName}" (lang: ${lang}). Tried index.${lang}.md, index.en.md, index.md`
        );
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : String(err));
      }
    }

    load();
    return () => controller.abort();
  }, [pageName, lang]);

  if (error) {
    return (
      <div className="text-sm text-red-600">
        {error}
        <div className="mt-2 text-black/60">
          Expected one of:{' '}
          <code className="rounded bg-black/5 px-1 py-0.5">
            public/markdown/{pageName}/index.{lang}.md
          </code>
          ,{' '}
          <code className="rounded bg-black/5 px-1 py-0.5">
            public/markdown/{pageName}/index.en.md
          </code>
          ,{' '}
          <code className="rounded bg-black/5 px-1 py-0.5">
            public/markdown/{pageName}/index.md
          </code>
        </div>
      </div>
    );
  }

  if (!md) return <div className="text-black/60">Loading…</div>;

  return (
    <article className="prose prose-slate pointer-events-auto max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          img: ({ src, alt }) => {
            const rawSrc = typeof src === 'string' ? src : '';
            if (!rawSrc) return null;

            const finalSrc =
              rawSrc.startsWith('http') || rawSrc.startsWith('/')
                ? rawSrc
                : `/markdown/${pageName}/${rawSrc}`;

            return (
              <span className="my-6 block w-full">
                <Image
                  src={finalSrc}
                  alt={alt ?? ''}
                  width={1200}
                  height={800}
                  className="rounded-xl shadow-sm"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </span>
            );
          },

          a: ({ href, children }) => {
            const url = typeof href === 'string' ? href : '';

            if (url.startsWith('#')) {
              return (
                <a
                  href={url}
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState(null, '', url);
                    scrollToHash(url);
                  }}
                  className="cursor-pointer underline underline-offset-2"
                >
                  {children}
                </a>
              );
            }

            const external = isExternalUrl(url);

            return (
              <a
                href={url}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="underline underline-offset-2"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {md}
      </ReactMarkdown>
    </article>
  );
}
