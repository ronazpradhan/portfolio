import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.string(),
    status: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    order: z.number(),
    shots: z.array(z.object({ src: image(), alt: z.string() })).optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { work, notes };
