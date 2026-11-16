// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import prefixHeadingIds from './src/lib/prefix-heading-ids.mjs';

// https://astro.build/config
export default defineConfig({
  // Production URL (GitHub Pages user site). Change when moving to a custom domain.
  site: 'https://rruiqiu.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Notes are rendered several to a page, so heading ids get a per-note prefix
    // to keep them from colliding with each other and with the section anchors.
    processor: satteri({ hastPlugins: [prefixHeadingIds] }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      // Notes use ```assembly fences; Shiki knows the language as "asm".
      langAlias: { assembly: 'asm' },
      defaultColor: false,
      wrap: false,
    },
  },
});
