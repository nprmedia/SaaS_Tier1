import { allBlogs } from '@/content/blog/index';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

interface BlogPageProps {
  /**  
   * In Next 15+, `params` is typed as a `Promise`.
   * We await it inside the component to extract `slug`.
   */
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const post = allBlogs.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-black">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-sm text-neutral-500">
          {post.author} • {post.date} • {post.readTime}
        </p>

        {post.overview && (
          <div className="mt-6 bg-blue-50 text-blue-900 px-4 py-3 rounded-lg border border-blue-200 text-sm leading-relaxed">
            <strong className="block mb-1 text-blue-800">Quick Summary:</strong>
            {post.overview}
          </div>
        )}
      </header>

      <hr className="border-neutral-200 mb-10" />

      <div className="prose prose-blue max-w-none text-[clamp(0.9rem,1.05vw,1.1rem)] leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="mb-6">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
