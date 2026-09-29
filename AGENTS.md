# Agent instructions: Grace's portfolio

## Mission and scope

Maintain a real, deployable portfolio for Grace Tian. Position her as a **maker who turns product and engineering ideas into tangible work**, with an interest in product management. Preserve the owner-selected muted palette: light lavender as the main color, supported by blue-gray, blush pink, and mineral green. Keep the page, footer, and bottom contact area white; use the palette for cards and accents. Keep readable typography and project-first information architecture. Her confirmed interests are ultimate frisbee and football. Do not invent a team, position, achievement, personal anecdote, or photo for either interest.

This is an independent, portable project. Do not refer to another person's website, device, private paths, employer, contact details, lessons, or correspondence in code, documentation, metadata, commits, or public content. Only include information that belongs to Grace and is appropriate for her portfolio. Do not add job-search targets or referral requests to public copy without her explicit request.

## First action when continuing this project

Read README.md, TODO-CONTENT.md, src/data/profile.ts, and src/data/projects.ts. Grace has explicitly confirmed her **current GitHub username: `tenTilMidnight`** and authorized a public website repository and GitHub Pages deployment. The separate GitHub Profile README repository still requires explicit authorization. She believes neither repository below exists; inspect before modifying existing work. Do not re-ask for the confirmed username unless she changes accounts. Verify authenticated identity before remote writes.

### Required public repositories: two distinct purposes

Once Grace has confirmed the username and authorized setting up her GitHub presence, create or reuse BOTH public repositories on **her** account:

1. `USERNAME.github.io` — the website repository. Upload this complete project, configure GitHub Pages with GitHub Actions, and publish to the actual deployment URL. The expected user-site URL is `https://USERNAME.github.io/`.
2. `USERNAME` — the repository named **exactly the same as her GitHub username**. Its root README.md is her GitHub Profile README. Introduce Grace, link the deployed portfolio, and link real project summaries or repositories. This is a public repository too.

Example with a fictional account: `example-maker.github.io` hosts the website; `example-maker` holds the Profile README. A repository named only `USERNAME` is not the conventional user-site repository. Do not confuse the two.

Do not create a repository on a tutor's, colleague's, or currently authenticated unrelated account. Check authenticated identity before any remote write. If the authenticated account is not Grace's intended account, ask her to sign into the correct account or provide manual instructions. Never request passwords, tokens, or secrets in chat. Keep doing local work while account access is unavailable.

If the repositories already exist, inspect contents, remotes, branches, and Pages configuration. Preserve unrelated work. No force pushes, history replacement, repository deletion, or visibility changes without explicit authorization. A confirmed request to create and publish is sufficient authorization for normal creation, commits, pushes, and deployment; do not repeatedly ask for the same approval.

Set `profile.githubUsername` only to the confirmed username. Never ship `USERNAME`, `YOUR_USERNAME`, example accounts, or speculative URLs as live links. If the account is unknown, keep the field null and explain it in the handoff.

## Truth and content

The current project summaries are based on resume statements, not independently verified case studies. They are starting points, not evidence of launch, adoption, causality, or evaluation quality.

- Keep personal and team contributions distinct. Ask for responsibilities when unclear.
- Ask for actual stage: research, prototype, internal test, beta, or launched. Never infer stage from a date or the word "built".
- Do not invent metrics, test samples, interview quotes, customer logos, conversion, cost savings, tech stacks, code ownership, or production screenshots.
- Viaway's approx. 35% to 75% result must not be added until the owner explains what was scored, sample sizes, scoring criteria, and evaluation method. Do not call training examples a held-out benchmark.
- Vinsoo's interview finding applies to 7 of 10 interviewees. An 80% onboarding completion claim needs the completion event, denominator, observation period, and source. Do not claim an improvement without a baseline.
- Do not transfer user counts, retention, AI features, or other results from an unrelated or older app to Academic Pathways or Time Insight.
- The internship products' maturity and the personal projects' release status are not confirmed. Do not imply a public launch.
- Confirm materials can be publicly shared before uploading company documents, prompts, screenshots, or research data. Public case studies do not require company source code.
- Put unknowns in TODO-CONTENT.md, not in promotional copy. Do not publish placeholder screenshots, broken buttons, fake demos, or fabricated links.
- Current graphics are abstract concept diagrams, not product screenshots. Keep the labels until replaced with genuine owner-provided evidence. Label retrospective reconstructions and synthetic examples accurately.
- Football is the currently selected English label for the interest supplied by the owner; confirm the sport terminology before expanding its narrative.

## Architecture and editing

Stack: React 18, TypeScript, Vite, React Router. Use npm and preserve package-lock.json. No backend or API key is required.

- `src/data/profile.ts`: name, intro, contacts, education, interests, confirmed GitHub username, optional resume path.
- `src/data/projects.ts`: project summaries, roles, stages, tags, and evidence links.
- `src/App.tsx`: page layouts and shared components.
- `src/styles/tokens.css`: palette and design tokens.
- `src/styles/site.css`: responsive layout and component styling.
- `public/`: approved images and resume. Use portable URLs, never local filesystem paths.
- `docs/case-studies/`: GitHub-readable project summaries and future case studies.
- `docs/PROFILE_README.template.md`: starting point for the separate username repository.
- `.github/workflows/deploy.yml`: build and deploy to GitHub Pages.

Keep Home, Work, Project Detail, About, and Contact. Show Resume only when the owner has supplied a shareable PDF and the configured path exists. Show GitHub only once its username is confirmed. Keep LinkedIn/email details reviewable by the owner.

Do not add recipes, unrelated games, guestbooks, a blog, a database, analytics, contact-form services, paid services, or a large UI framework without a clear request. When asked to fill content, update content first; do not rewrite the whole app or restyle unrelated pages.

Improve a selected project by adding its actual key decision, evidence, verified results and limitations, and next experiment. Extend the data type and shared detail template as needed; do not force new content into unrelated fields. Synchronize corresponding Markdown case-study facts. Avoid creating empty project repositories just for appearance. Link real personal source repositories when available.

## Design and accessibility

Use light lavender surfaces with dark readable text and deeper purple action colors. Main body text should be comfortably readable (16px by default). Keep actual content readable at 200% zoom and on a 375px-wide screen. Preserve keyboard navigation, visible focus, mobile navigation state, semantic heading order, reduced-motion support, and descriptive labels.

Grace's website should communicate concrete making, not generic self-praise. Avoid claiming technical implementations that have not been provided. Personal interests should sound natural, not manufactured examples of professional skills.

## Local checks

Run `npm ci` after checkout and `npm run build` after meaningful source changes. Use `npm run dev` for preview and `npm run preview` for built output. Check Home, Work, all four project details, About, Contact, and the unknown-route fallback. Check the mobile menu and direct refresh of a detail URL. Check that no unconfirmed GitHub or Resume links appear.

Add tests only for meaningful behavior; do not create boilerplate tests that just mirror static text. Report checks actually performed and any limitations. For copy-only changes, a build and targeted review are sufficient.

## Pages deployment

Use GitHub Pages as requested. Do not substitute another host or buy a domain.

The app uses HashRouter and `base: './'`. This supports direct detail links such as `https://USERNAME.github.io/#/work/viaway` without server-side route rewrites and also works under a repository subpath. Do not change to BrowserRouter unless you implement and test a correct static routing strategy.

The repository must contain the project files at its root, including package.json, package-lock.json, src/, public/, and .github/workflows/deploy.yml. Never upload just a ZIP or nest the entire project inside an extra folder.

In the site repository's Settings → Pages, set Source to GitHub Actions. The workflow builds `dist`, uploads the artifact, and deploys it. Confirm the actual default branch and align the workflow trigger (currently main). Do not copy unrelated CNAME files, environment files, analytics identifiers, or host settings.

Verify the workflow finishes successfully and the public URL loads before claiming deployment complete. Check image paths and hash-route refresh on the deployed site. Then update the profile Website field and the separate public USERNAME repository's README with the verified URL when authorized. Pin the website and real project repositories when authorized and tooling permits. If access is unavailable, clearly state which steps remain and provide precise manual instructions.

## Handoff

Provide: preview or verified deployed URL, changed files, what is factual versus still missing, build/QA results, and the next small content task. Never say the website is live merely because it builds locally. When packaging, include source, lockfile, AGENTS.md, README, case studies, and workflow; exclude node_modules, .git, dist, private files, and local QA artifacts.
