import { defineCollection, z } from 'astro:content';

// Blog posts live in src/content/posts/*.md(x).
// The frontmatter of each post must match this schema.
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Publication date, e.g. 2026-06-20
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Free-form tags, e.g. ['LLMs', 'inference', 'evals']
    tags: z.array(z.string()).default([]),
    // Optional link to the corresponding GitHub project/repo. When set, the
    // post shows a "View project on GitHub" button in its header.
    github: z.string().url().optional(),
    // Set to true to hide a post from the index without deleting it.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
