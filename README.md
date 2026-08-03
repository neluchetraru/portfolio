# ionchetraru.me

My portfolio. React, Vite and Tailwind v4, deployed to GitHub Pages on the
`ionchetraru.me` domain.

## Running it

```bash
npm install
npm run dev        # vite dev server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck, then production build into dist/
npm run deploy     # build and push dist/ to gh-pages
```

## Where things live

- `src/data.ts` — the projects and the outbound links. Copy changes almost always
  belong here rather than in the components.
- `src/stack.ts` — the sixteen brand marks in the stack grid. Paths come from
  [simple-icons](https://simpleicons.org) (CC0) and are checked in directly, so
  the site doesn't ship a three-thousand-icon dependency. To add one, copy the
  `path` and `hex` for its slug; if the brand hex is near-black, lighten it or it
  vanishes against the background.
- `src/App.tsx` — the whole page: hero, project rows, stack grid, GitHub
  contribution graph, contact.
- `src/index.css` — theme tokens, fonts and the two animations.
- `public/shots/` — project screenshots, `public/cv.pdf` — the CV.

The contribution graph is fetched at runtime from
`github-contributions-api.jogruber.de` and degrades to a link if that request
fails.
