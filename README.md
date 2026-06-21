# Tom Moritz — Portfolio

A personal portfolio and blog, built with [Astro](https://astro.build) and
designed to be hosted on GitHub Pages. The visual style is warm and editorial,
inspired by Anthropic's research blog.

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to ./dist
npm run preview    # preview the production build locally
```

> Requires Node 18.20+ or 20+. (The project pins Astro 4 so it also runs on
> Node 18.19; upgrade Node when convenient to move to Astro 5.)

## Make it yours

| What | Where |
| --- | --- |
| Name, role, intro, contact links | `src/config.ts` |
| Your CV (downloadable at `/cv.pdf`) | drop the file at `public/cv.pdf` |
| Colors, fonts, spacing | `src/styles/global.css` (the `:root` tokens) |
| Blog posts | `src/content/posts/*.md` |
| Favicon | `public/favicon.svg` |

### Writing a post

Create a Markdown file in `src/content/posts/`. The filename becomes the URL
slug (`my-post.md` → `/blog/my-post`). Each post needs this frontmatter:

```markdown
---
title: 'Your title'
description: 'One or two sentences shown in listings and social cards.'
pubDate: 2026-06-20
tags: ['LLMs', 'evals']   # optional
draft: false              # optional — true hides it from the site
---

Your content in Markdown...
```

## Deploying to GitHub Pages

1. Create a GitHub repo and push this project.
2. In `astro.config.mjs`, set `site` (and `base` if it's a project repo — see
   the comments in that file).
3. In the repo: **Settings → Pages → Build and deployment → Source →
   GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   deploys automatically.

## Structure

```
src/
  config.ts              # your details — edit this first
  styles/global.css      # design tokens + styles
  components/            # Header, Footer
  layouts/               # BaseLayout, PostLayout
  content/posts/         # blog posts (Markdown)
  pages/                 # index, /blog, /blog/[slug]
public/                  # static assets (favicon, cv.pdf, images)
```
