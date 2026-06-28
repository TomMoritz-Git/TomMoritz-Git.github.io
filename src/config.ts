// -----------------------------------------------------------------------------
// Edit this file to personalize your portfolio. Everything here flows into the
// home page, header, footer, and page metadata.
// -----------------------------------------------------------------------------

export const site = {
  // Your name, shown in the header and used in page titles.
  name: 'Tom Moritz',

  // Short role/tagline shown in the header and <title>.
  role: 'Machine Learning Engineer',

  // Warm welcome shown as the big heading on the home page.
  greeting: 'Hello there',

  // One- or two-sentence intro shown on the home page hero.
  intro:
    "I'm a Machine Learning Engineer with 5+ years of experience taking AI " +
    'from research to production. I work across generative AI, NLP, and ' +
    'information retrieval.',

  // Path to your CV, served from the /public folder. Drop your file at
  // public/cv.pdf (or change this path).
  cvPath: '/cv.pdf',

  // Used for SEO / social cards and absolute links in feeds.
  // Keep in sync with `site` in astro.config.mjs.
  url: 'https://tommoritz-git.github.io',
};

// Contact + social links shown in the header and footer.
// Remove any you don't want; add new ones freely.
export const links = [
  { label: 'Email', href: 'mailto:tom.moritz@outlook.fr' },
  { label: 'GitHub', href: 'https://github.com/TomMoritz-Git' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tom-moritz-data/' },
];
