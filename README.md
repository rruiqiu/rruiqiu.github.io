# richardqiu — personal site

Static personal site built with [Astro](https://astro.build) and Tailwind CSS v4. No backend, no client JS except the theme toggle.

## Run locally

Requires Node 22.23+ (Node 24 works).

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
npx astro check    # type-check .astro and .ts files
```

## Where things live

| What | Where |
|---|---|
| Name, bio, links, "currently" line | `src/data/site.ts` |
| Work experience | `src/data/experience.ts` |
| Projects (all of them) | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Education & certifications | `src/data/education.ts` |
| Notes (markdown) | `src/content/notes/<Category>/<Title>.md` |
| Project thumbnails | `src/assets/projects/` |
| Résumé PDF, favicon | `public/` |
| Colors, fonts, motion | `src/styles/global.css` |

## Add a project

Append an object to the array in `src/data/projects.ts`. Set `featured: true` to show it on the home page (keep that to about four). To show a thumbnail, drop an image in `src/assets/projects/`, import it at the top of the file, and set `image` on the project. Thumbnails are resized and converted to WebP at build time.

## Add a note

Drop a `.md` file into `src/content/notes/<Category>/`. The file name becomes the title, the folder becomes the category, and the URL is a slug of both (`Full Stack/Web Notes.md` → `/notes/full-stack/web-notes/`). Images go in a sibling folder and are referenced relatively, e.g. `![](./web-notes.assets/pic.png)`. Keep folder names free of spaces so the links parse.

Optional frontmatter: `title` overrides the file name. Display order inside a category is set in `src/lib/notes.ts` (`NOTE_ORDER`); anything unlisted sorts alphabetically after.

## Add a company logo

Put an SVG/PNG in `public/logos/` and set `logo: '/logos/arctrade.svg'` on the experience entry. Without one, a two-letter monogram is shown.

## Deploy

Hosted on GitHub Pages from the `rruiqiu/rruiqiu.github.io` repository, served from the `gh-pages` branch.

- Push to `main` and `.github/workflows/deploy.yml` builds the site and updates `gh-pages`.
- Or run `npm run deploy` locally, which builds and pushes `gh-pages` directly without Actions.

To move to a custom domain later: add a `CNAME` record at the registrar pointing to `rruiqiu.github.io`, set the domain under Settings → Pages, and change `site` in `astro.config.mjs`.

## Experience bullets

Each job in `src/data/experience.ts` shows its first two `highlights`; the rest sit behind a "Show N more" toggle. Set `visible` on a job to change how many are shown up front.
