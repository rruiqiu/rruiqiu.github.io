import type { CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'notes'>;

export interface NoteMeta {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  /** Sub-folder inside the category, if any (e.g. "Structural Patterns"). */
  group?: string;
  /** Section id inside the category page (last segment of the note id). */
  anchor: string;
  /** `/notes/<category>/` */
  categoryHref: string;
  /** `/notes/<category>/#<anchor>` */
  href: string;
}

/** Display order of categories, then of notes inside each category. Unlisted notes sort alphabetically after. */
export const CATEGORY_ORDER = ['Algorithms', 'Systems', 'Design Patterns', 'Full Stack'];

const NOTE_ORDER: Record<string, string[]> = {
  Algorithms: [
    'Templates',
    'Arrays & Hashing',
    'Two Pointers',
    'Sliding Window',
    'Stack',
    'Binary Search',
    'Linked List',
    'Trees',
    'Priority Queue(Heap)',
    'Backtracking',
    'Tries',
    'Graphs',
    'Advanced Graphs',
    '1-D Dynamic Programming',
    '2-D Dynamic Programming',
    'Math & Geometry',
    'Bit Manipulation',
    'Simulation',
  ],
  'Full Stack': ['React', 'nginx'],
  Systems: ['OS', 'OSlab', 'CSAPP'],
  'Design Patterns': ['SOLID', 'Proxy', 'Chain of Responsibility'],
};

/** Display names for category folders. Folder names stay as they are (they form the URLs). */
const CATEGORY_LABELS: Record<string, string> = {
  Algorithms: 'DSA',
};

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}

const TITLE_OVERRIDES: Record<string, string> = {
  'Priority Queue(Heap)': 'Heap / Priority Queue',
  SOLID: 'Design Principles (SOLID)',
};

function relPath(note: Note): string {
  const fp = (note.filePath ?? '').replace(/\\/g, '/');
  const i = fp.indexOf('content/notes/');
  return i >= 0 ? fp.slice(i + 'content/notes/'.length) : fp;
}

function fileName(note: Note): string {
  return relPath(note).replace(/\.md$/, '').split('/').pop() ?? note.id;
}

export function noteMeta(note: Note): NoteMeta {
  const parts = relPath(note).replace(/\.md$/, '').split('/');
  const category = parts[0] ?? 'Notes';
  const file = parts[parts.length - 1] ?? note.id;
  const group = parts.length > 2 ? parts.slice(1, -1).join(' / ') : undefined;
  const title = note.data.title ?? TITLE_OVERRIDES[file] ?? file;
  const categorySlug = note.id.split('/')[0] ?? '';
  const anchor = note.id.split('/').pop() ?? note.id;
  const categoryHref = `/notes/${categorySlug}/`;
  return {
    id: note.id,
    title,
    category,
    categorySlug,
    group,
    anchor,
    categoryHref,
    href: `${categoryHref}#${anchor}`,
  };
}

function rank(list: string[] | undefined, key: string): number {
  const i = list?.indexOf(key) ?? -1;
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
}

export function groupNotes(notes: Note[]): { category: string; notes: NoteMeta[] }[] {
  const byCat = new Map<string, { meta: NoteMeta; file: string }[]>();
  for (const n of notes) {
    const meta = noteMeta(n);
    const arr = byCat.get(meta.category) ?? [];
    arr.push({ meta, file: fileName(n) });
    byCat.set(meta.category, arr);
  }
  const cats = [...byCat.keys()].sort((a, b) => {
    const ra = rank(CATEGORY_ORDER, a);
    const rb = rank(CATEGORY_ORDER, b);
    return ra !== rb ? ra - rb : a.localeCompare(b);
  });
  return cats.map((category) => {
    const list = byCat.get(category)!;
    list.sort((a, b) => {
      const ra = rank(NOTE_ORDER[category], a.file);
      const rb = rank(NOTE_ORDER[category], b.file);
      return ra !== rb ? ra - rb : a.meta.title.localeCompare(b.meta.title);
    });
    return { category, notes: list.map((x) => x.meta) };
  });
}

export interface CategoryPage {
  /** Folder name, e.g. "Algorithms". */
  category: string;
  /** Display name, e.g. "DSA". */
  label: string;
  categorySlug: string;
  href: string;
  /** Notes in display order, paired with their collection entry for rendering. */
  entries: { meta: NoteMeta; note: Note }[];
}

/** One page per category, in CATEGORY_ORDER, notes in NOTE_ORDER. */
export function categoryPages(notes: Note[]): CategoryPage[] {
  const byId = new Map(notes.map((n) => [n.id, n]));
  return groupNotes(notes).map((g) => {
    const first = g.notes[0]!;
    return {
      category: g.category,
      label: categoryLabel(g.category),
      categorySlug: first.categorySlug,
      href: first.categoryHref,
      entries: g.notes.map((meta) => ({ meta, note: byId.get(meta.id)! })),
    };
  });
}
