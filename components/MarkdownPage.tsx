'use client';

import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import rehypeSlug from 'rehype-slug';
import matter from 'gray-matter';
import type { Lang } from '@/lib/i18n';

type Props = { pageName: string; lang: Lang; basePath?: 'markdown' | 'blog' };

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

export default function MarkdownPage({
  pageName,
  lang,
  basePath = 'markdown',
}: Props) {
  const [md, setMd] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  const root = `/${basePath}/${pageName}`;

  const components: Components = {
    img: ({ src, alt }) => {
      const rawSrc = typeof src === 'string' ? src : '';
      if (!rawSrc) return null;

      const finalSrc =
        rawSrc.startsWith('http') || rawSrc.startsWith('/')
          ? rawSrc
          : `${root}/${rawSrc}`;

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
  };

  React.useEffect(() => {
    const controller = new AbortController();

    async function fetchText(url: string) {
      const res = await fetch(url, {
        cache: 'no-store',
        signal: controller.signal,
      });
      return res.ok ? await res.text() : null;
    }

    function applyMarkdown(raw: string) {
      const parsed = matter(raw);
      setMd(parsed.content.trim());
    }

    async function load() {
      setError(null);
      setMd('');

      try {
        const localized = await fetchText(`${root}/index.${lang}.md`);
        if (localized) return applyMarkdown(localized);

        const en = await fetchText(`${root}/index.en.md`);
        if (en) return applyMarkdown(en);

        const legacy = await fetchText(`${root}/index.md`);
        if (legacy) return applyMarkdown(legacy);

        setError(
          `Could not load markdown for "${pageName}" (lang: ${lang}). Tried index.${lang}.md, index.en.md, index.md`
        );
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : String(err));
      }
    }

    void load();
    return () => controller.abort();
  }, [pageName, lang, root]);

  if (error) {
    return (
      <div className="text-sm text-red-600">
        {error}
        <div className="mt-2 text-black/60">
          Expected one of:{' '}
          <code className="rounded bg-black/5 px-1 py-0.5">
            public/{basePath}/{pageName}/index.{lang}.md
          </code>
          ,{' '}
          <code className="rounded bg-black/5 px-1 py-0.5">
            public/{basePath}/{pageName}/index.en.md
          </code>
          ,{' '}
          <code className="rounded bg-black/5 px-1 py-0.5">
            public/{basePath}/{pageName}/index.md
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
        components={components}
      >
        {md}
      </ReactMarkdown>
    </article>
  );
}
