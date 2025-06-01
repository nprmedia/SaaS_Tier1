'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { allBlogs } from '@/content/blog';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleOverviews, setVisibleOverviews] = useState<Record<string, boolean>>({});

  const tags = ['Product', 'Tips', 'Updates'];

  const toggleOverview = (slug: string) => {
    setVisibleOverviews((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const filteredPosts = selectedTag
    ? allBlogs.filter((p) => p.tag?.toLowerCase().includes(selectedTag.toLowerCase()))
    : allBlogs;

  return (
    <section className="w-full max-w-[1080px] px-4 sm:px-8 mx-auto py-20">
      {/* Tags */}
      <div className="flex gap-2 overflow-x-auto mb-8 pt-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            className={`px-4 py-1.5 rounded-full border text-[clamp(0.7rem,0.85vw,0.8rem)] font-medium transition hover:bg-black hover:text-white whitespace-nowrap ${
              selectedTag === tag ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Search Placeholder */}
      <input
        type="text"
        placeholder="Search (coming soon)"
        className="w-full mb-12 px-4 py-2 border border-gray-300 rounded-md text-sm text-black placeholder:text-gray-400"
      />

      {/* Posts */}
      <div className="grid gap-10 md:grid-cols-2">
        {filteredPosts.map((post, idx) => {
          const showOverview = visibleOverviews[post.slug];

          return (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col border border-neutral-200 p-6 rounded-xl bg-white hover:shadow-lg transition-shadow"
            >
              {/* Top Tags & Meta */}
              <header className="flex items-center gap-2 mb-2 text-[clamp(0.65rem,0.8vw,0.75rem)] text-neutral-500 font-medium uppercase tracking-wide">
                {post.isNew && <span className="text-green-600 font-semibold">New</span>}
                {post.isPinned && <span className="text-yellow-500 font-semibold">Pinned</span>}
                {post.tag && <span className="text-black">{post.tag}</span>}
              </header>

              {/* Title */}
              <Link
                href={`/blog/${post.slug}`}
                className="text-[clamp(1.125rem,1.4vw,1.25rem)] font-bold leading-snug tracking-tight text-gray-900 hover:underline"
              >
                {post.title}
              </Link>

              {/* Overview Toggle */}
              {post.overview && (
                <div className="mt-3">
                  <button
                    onClick={() => toggleOverview(post.slug)}
                    className="text-[clamp(0.7rem,0.85vw,0.8rem)] text-blue-600 hover:underline font-semibold tracking-tight"
                  >
                    {showOverview ? 'Hide Summary' : 'Show Summary'}
                  </button>
                  {showOverview && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-3 text-[clamp(0.85rem,1vw,0.9rem)] text-neutral-800 bg-blue-50 border border-blue-200 p-4 rounded-md leading-relaxed"
                    >
                      <strong className="block mb-1 text-blue-800 uppercase text-[0.7rem] font-semibold tracking-wide">
                        Summary
                      </strong>
                      {post.overview}
                    </motion.div>
                  )}
                </div>
              )}

              {/* Description / Excerpt */}
              <p className="text-[clamp(0.85rem,1vw,0.95rem)] text-neutral-700 mt-4 leading-snug tracking-normal line-clamp-3">
                {post.content[0]}
              </p>

              {/* Footer Metadata */}
              <p className="mt-4 text-[clamp(0.7rem,0.85vw,0.8rem)] text-neutral-400 tracking-tight font-medium">
                {post.author} • {post.date} • {post.readTime}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
