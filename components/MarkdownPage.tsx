'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import rehypeSlug from 'rehype-slug';

type Props = { pageName: string };

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

export default function MarkdownPage({ pageName }: Props) {
  const [md, setMd] = React.useState('');
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function load() {
      setError(null);
      setMd('');

      try {
        const res = await fetch(`/markdown/${pageName}/index.md`, {
          cache: 'no-store',
          signal: controller.signal,
        });

        if (!res.ok) {
          setError(
            `Could not load public/markdown/${pageName}/index.md (HTTP ${res.status})`
          );
          return;
        }

        const text = await res.text();
        setMd(text);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(err instanceof Error ? err.message : String(err));
      }
    }

    load();
    return () => controller.abort();
  }, [pageName]);

  if (error) {
    return (
      <div className="text-sm text-red-600">
        {error}
        <div className="mt-2 text-black/60">
          Expected file:{' '}
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
        rehypePlugins={[rehypeSlug]} // ✅ only this (adds ids to headings)
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

            // hash links inside the markdown (TOC)
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
