# Grace Tian — Portfolio

A light-lavender portfolio for a maker exploring product management. Built with React, TypeScript, Tailwind CSS 4, and Vite; deployable for free on GitHub Pages using a public repository.

## Current version

Working Home, Work, four project overview pages, About, and Contact. Project text is based on resume statements and needs owner review. Graphics are labeled concept diagrams. This is a content-ready framework, not a set of fully evidenced case studies.

GitHub username is confirmed as `tenTilMidnight`; the website links to her GitHub profile. A resume has not been bundled; Resume appears only after a shareable PDF is supplied and configured. The portfolio is live at [tentilmidnight.github.io](https://tentilmidnight.github.io/).

## Styling stack

React components are styled with Tailwind CSS 4 through `@tailwindcss/vite`. `src/styles/site.css` imports Tailwind, maps the palette with `@theme inline`, and uses `@apply` for shared components. React markup uses utilities for composition. Custom CSS handles the project diagrams and precise editorial sizing.

## Visual direction

Grace selected a muted, mineral-inspired palette: white remains the page and footer background; lavender leads the cards and accent surfaces, supported by blue-gray, blush pink, and mineral green. Deep plum is reserved for actions and emphasis; dark slate keeps text readable. The reference image is used for color direction only.

| Role | Color |
|---|---|
| Page / lavender surface | `#FFFFFF` / `#E1DCE9` |
| Dusty lavender | `#C4BBD1` |
| Blue-gray | `#ADB8BE` |
| Blush pink | `#DBC7CC` |
| Mineral green | `#67A38F` |
| Action / text | `#665473` / `#30343A` |

## Selected work

| Project | Product focus | Read on GitHub |
|---|---|---|
| Viaway | Career-diagnosis agent scope and evaluation | [Overview](docs/case-studies/viaway.md) |
| Vinsoo | Research-informed career planning and onboarding | [Overview](docs/case-studies/vinsoo.md) |
| Academic Pathways | Peer knowledge and course comparison | [Overview](docs/case-studies/academic-pathways.md) |
| Time Insight | Planning time versus actual time spent | [Overview](docs/case-studies/time-insight.md) |

## Run locally

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Open the local URL printed by Vite. The default homepage is the root URL; project links use hash routes such as `/#/work/viaway`.

## Edit content

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Intro, interests, contacts, confirmed GitHub username, resume path |
| `src/data/projects.ts` | Project summaries, responsibilities, stage, actual evidence links |
| `src/styles/tokens.css` | Lavender palette and core visual tokens |
| `src/App.tsx` | Page structure; future evidence and results sections |
| `docs/case-studies/` | Matching GitHub-readable case studies |
| `TODO-CONTENT.md` | Questions and source material still needed |

To add a resume: place an approved PDF at `public/resume.pdf`, set `resumePath: 'resume.pdf'`, rebuild, and check the link. Do not set a path before the file exists.

## Give this project to an AI coding agent

Ask the agent to read `AGENTS.md` and `TODO-CONTENT.md` first. Then give it one small task and the real source material. Example:

> Read AGENTS.md. Help me complete the Viaway case study using the notes below. Separate my contribution from the team's, ask about missing facts, update the website and matching Markdown case, and run the build. Keep the design and other projects unchanged.

## Deployment

- **Live site:** [tentilmidnight.github.io](https://tentilmidnight.github.io/)
- **Public source:** [tenTilMidnight/tenTilMidnight.github.io](https://github.com/tenTilMidnight/tenTilMidnight.github.io)
- **Branch:** `main`
- **Pages source:** GitHub Actions
- **Workflow:** `.github/workflows/deploy.yml`

The workflow installs the locked dependencies, builds `dist`, and deploys that artifact to Pages. Keep the complete source project at the repository root. Do not upload `node_modules`, private files, or only a ZIP. Every push to `main` triggers a new deployment; verify the Actions run and public site after a change.

Navigation uses `HashRouter` and Vite uses `base: './'`. A direct project link such as [Viaway](https://tentilmidnight.github.io/#/work/viaway) survives a page refresh without server-side route rewrites.

The optional `tenTilMidnight` repository has a different purpose: its root README appears on the GitHub profile. It has not been created as part of the website deployment and requires separate owner authorization. [A draft README is available](docs/PROFILE_README.template.md).

## A good next session

Review contact links. Choose one project, add one genuine screenshot or evidence artifact, explain one important decision, and confirm its actual stage. Use the same facts in the site and its Markdown case study. Iterate one project at a time.
