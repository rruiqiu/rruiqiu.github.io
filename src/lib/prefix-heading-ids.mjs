import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Satteri hast plugin: give every heading in a note an id prefixed with the
 * note's slug, e.g. the "Binary Search" heading inside `Templates.md` becomes
 * `templates--binary-search`.
 *
 * Category pages render many notes on one page, each in a `<section>` whose id
 * is the note slug. Without a prefix, a heading named like another note would
 * collide with that section id and hijack its anchor. Astro's own heading-id
 * plugin runs afterwards and keeps ids that are already set.
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function prefixHeadingIds({ fileURL }) {
  const file = fileURL ? basename(fileURLToPath(fileURL), '.md') : '';
  const prefix = slugify(file);
  if (!prefix) return null;
  const seen = new Map();
  return {
    name: 'prefix-heading-ids',
    element: {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      visit(node, ctx) {
        if (typeof node.properties?.id === 'string') return;
        let slug = slugify(ctx.textContent(node)) || 'section';
        const n = seen.get(slug) ?? 0;
        seen.set(slug, n + 1);
        if (n > 0) slug = `${slug}-${n}`;
        ctx.setProperty(node, 'id', `${prefix}--${slug}`);
      },
    },
  };
}
