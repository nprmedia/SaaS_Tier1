// src/lib/mdx.ts

import { MDXRemoteSerializeResult } from 'next-mdx-remote';

/**
 * renderMDXComponent()
 * Converts MDX to JSX using remote serialization.
 */
export async function renderMDXComponent(source: string): Promise<MDXRemoteSerializeResult> {
  const { serialize } = await import('next-mdx-remote/serialize');
  return serialize(source);
}
