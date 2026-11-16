import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** "Full Stack/Web Notes" -> "full-stack/web-notes" */
export function slugifyPath(path: string): string {
  return path
    .split('/')
    .map((seg) =>
      seg
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, ''),
    )
    .filter(Boolean)
    .join('/');
}

const notes = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/notes',
    generateId: ({ entry }) => slugifyPath(entry.replace(/\.md$/, '')),
  }),
  // Notes are plain Typora-style markdown with no frontmatter; everything is optional.
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { notes };
