// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production URL (GitHub Pages user site). Change when moving to a custom domain.
  site: 'https://rruiqiu.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      // Notes use ```assembly fences; Shiki knows the language as "asm".
      langAlias: { assembly: 'asm' },
      defaultColor: false,
      wrap: false,
    },
  },
});
