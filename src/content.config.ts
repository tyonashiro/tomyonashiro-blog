import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essays = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'index.md', base: './src/content/about' }),
});

export const collections = { essays, about };
