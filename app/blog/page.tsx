import Image from 'next/image';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { getBlogPosts } from '@/lib/blog';
import type { Lang } from '@/lib/i18n';

export default async function BlogIndexPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('lang')?.value as Lang) ?? 'en';


  const posts = await getBlogPosts(lang);

  return (
    <div className="flex min-h-[85vh] flex-col">
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-video w-full bg-black/5">
                {post.cover ? (
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                ) : null}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm text-slate-600">
                  {post.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--brand-blue)">
                  Read More <span aria-hidden>›</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
