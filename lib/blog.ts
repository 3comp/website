import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import type { Lang } from '@/lib/i18n';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  cover?: string;
  date?: string;
};

const BLOG_DIR = path.join(process.cwd(), 'public', 'blog');

async function readPost(slug: string, lang: Lang): Promise<BlogPost | null> {
  const mdCandidates = [
    path.join(BLOG_DIR, slug, `index.${lang}.md`),
    path.join(BLOG_DIR, slug, 'index.en.md'),
    path.join(BLOG_DIR, slug, 'index.md'),
  ];

  try {
    let raw: string | null = null;

    for (const p of mdCandidates) {
      try {
        raw = await fs.readFile(p, 'utf8');
        break;
      } catch {
        // try next
      }
    }

    if (!raw) return null;

    const { data, content } = matter(raw);

    const title = String(data.title ?? slug);
    const description =
      String(data.description ?? '').trim() ||
      content.replace(/\s+/g, ' ').trim().slice(0, 140) + '...';

    const cover = data.cover
      ? `/blog/${slug}/${String(data.cover)}`
      : undefined;

    return {
      slug,
      title,
      description,
      cover,
      date: data.date ? String(data.date) : undefined,
    };
  } catch {
    return null;
  }
}

export async function getBlogPosts(lang: Lang): Promise<BlogPost[]> {
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const slugs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  const posts = (await Promise.all(slugs.map((s) => readPost(s, lang)))).filter(
    (p): p is BlogPost => Boolean(p)
  );

  posts.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

  return posts;
}
