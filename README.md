# Grace Tian — Portfolio

A light-lavender portfolio for a maker exploring product management. Built with React, TypeScript, and Vite; deployable for free on GitHub Pages using a public repository.

## Current version

Working Home, Work, four project overview pages, About, and Contact. Project text is based on resume statements and needs owner review. Graphics are labeled concept diagrams. This is a content-ready framework, not a set of fully evidenced case studies.

GitHub username is confirmed as `tenTilMidnight`; the website links to her GitHub profile. A resume has not been bundled; Resume appears only after a shareable PDF is supplied and configured. No public site has been deployed by preparing this project.

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

## Publish on your GitHub account

Confirmed account: `tenTilMidnight`. There are **two different public repositories**:

- **`tenTilMidnight.github.io`**: this website's complete project; publishes your user site.
- **`tenTilMidnight`**: your Profile README; use [this template](docs/PROFILE_README.template.md), replacing all placeholders before publishing.

Inspect existing repositories before using them. Do not overwrite existing content or push to somebody else's account.

1. Create or reuse the public `tenTilMidnight.github.io` repository on your own account.
2. Put this project's files directly at its root. Include `.github/workflows/deploy.yml` and `package-lock.json`. Do not upload `node_modules` or just a ZIP.
3. Confirm the default branch is `main`, or update the workflow's branch trigger.
4. In Settings → Pages, select **GitHub Actions** as the source.
5. Push the files, then check the Actions run. If needed, run the workflow manually.
6. After successful deployment, open the actual URL shown by GitHub. Check mobile layout, project links, and refresh a detail page.
7. Add your verified site URL to your GitHub Profile and the separate public username repository's README.

The expected user-site URL is `https://tenTilMidnight.github.io/`; it is not a verified live link until deployment succeeds. This project also supports a repository subpath because assets use a relative base and navigation uses hash routes.

GitHub Pages is available for public repositories on GitHub Free. No paid hosting, backend, or custom domain is needed. See [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) and [Profile README documentation](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).

## A good next session

Review contact links. Choose one project, add one genuine screenshot or evidence artifact, explain one important decision, and confirm its actual stage. Use the same facts in the site and its Markdown case study. Iterate one project at a time.
