# Muhammad Zaid — Portfolio

React 19 + Vite + Tailwind CSS v4 + Lucide icons. Dark, editorial design with
accessible navigation, a motion toggle, and all content in one file.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build in /dist
```

## Status

| What | Status |
| --- | --- |
| **CV** | ✅ `public/Muhammad_Zaid_CV.pdf` — replace the file to update it |
| **Contact form** | ✅ Sends through Formspree (`profile.formEndpoint`) |
| **GitHub profile** | ✅ `profile.github` |
| **Photo** | ✅ `public/profile.jpg` — replace the file to update it (square works best) |
| **Project repos** | ✅ Linked in `src/data/portfolio.js` |

## Editing content

Everything — intro, skills, experience, projects, education, certifications,
links — lives in **`src/data/portfolio.js`**. Components never need editing for
content changes.

## Contact form

With no backend, "Send message" opens the visitor's email app with the
subject and message pre-filled. To receive messages directly instead, create a
free form at [formspree.io](https://formspree.io) and paste its endpoint into
`profile.formEndpoint`.

## Deploy (free)

- **Vercel / Netlify:** import the folder or Git repo — framework preset "Vite",
  build command `npm run build`, output directory `dist`.
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.js`, build, and
  publish `dist`.

## Accessibility

Semantic landmarks, skip link, visible focus rings, `aria-current` on the active
nav link, labelled form errors, screen-reader text for icon links, and a
**Motion on/off** toggle that also respects the OS "reduce motion" setting.

## Structure

```
src/
  data/portfolio.js      ← all content
  components/            ← one file per section
  hooks/                 ← motion preference, active-section tracking
  index.css              ← Tailwind theme (colors, fonts) + effects
```
