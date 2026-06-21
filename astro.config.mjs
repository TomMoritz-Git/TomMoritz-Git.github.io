import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // User site (repo named TomMoritz-Git.github.io) — served from the root,
  // so no `base` is needed.
  site: 'https://tommoritz-git.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
