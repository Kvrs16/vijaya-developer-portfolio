# Vijaya Rani — Developer Portfolio

[![Deploy Portfolio](https://github.com/Kvrs16/vijaya-developer-portfolio/actions/workflows/deploy.yaml/badge.svg)](https://github.com/Kvrs16/vijaya-developer-portfolio/actions/workflows/deploy.yaml)

A personal portfolio presenting my Salesforce development, MuleSoft integration, and automation experience as an Associate Technical Consultant at Blueflame Labs. Built with React, TypeScript, and Vite, and deployed to GitHub Pages through GitHub Actions.

**[View portfolio](https://Kvrs16.github.io/vijaya-developer-portfolio/)** · **[Salesforce résumé](https://Kvrs16.github.io/vijaya-developer-portfolio/resume.html)** · **[Integration résumé](https://Kvrs16.github.io/vijaya-developer-portfolio/resume-integration.html)**

## About the project

The site brings together my professional background, implementation experience, technical skills, and role-specific résumés. Experience includes Apex territory-management workflows, LWC forms and quote builders, Stripe/PandaDoc/Clay/DocuSign integrations, MuleSoft APIs, Agentforce service automation, Experience Cloud access, Data Cloud mappings, and Marketing Cloud Advanced campaigns.

My official role is **Associate Technical Consultant, July 2025–present**. Initial training is distinguished from Salesforce and MuleSoft implementation work beginning in December 2025. Java and Spring Boot are also demonstrated through the personal ReliableJobs project; full-stack foundations remain academic experience being refreshed.

## Featured projects

[Salesforce Enterprise Revenue & Integration Hub](https://github.com/Kvrs16/salesforce-enterprise-revenue-hub) implements an approved-Quote request workspace with Apex services, Queueable processing, logical payment deduplication, attempt history, controlled retries, and an LWC job monitor. Its card links to source code, architecture, and setup instructions.

The Revenue Hub baseline uses deterministic mock payment and document providers. It does not process real payments or generate provider documents; real Stripe/PandaDoc adapters are future work. See [the source review and suggested next steps](docs/revenue-hub-review.md).

[ReliableJobs — Task Processing API](https://github.com/Kvrs16/reliablejobs) is a personal Java 21 / Spring Boot backend with PostgreSQL-backed job claiming, idempotent submissions, lease recovery, bounded retries, cooperative cancellation, session authentication, and owner-authorized results. Its card links to source, architecture, Windows setup, and API documentation. Maven verification on 10 November 2026 passed 4 unit tests and 22 PostgreSQL integration tests with zero failures, errors, or skips. It is a local-first backend with synthetic workloads, not a hosted API or a separate published library. See [the source review and next steps](docs/reliablejobs-review.md).

The full-stack and AI project cards remain planned.

## Features

- Responsive single-page portfolio with mobile navigation and section anchors.
- Experience overview with expandable implementation details, covering independent delivery and collaborative testing/troubleshooting.
- Interactive Salesforce, Java/backend, full-stack, and integration specialization panels.
- Technical skills grouped by area, with academic experience labelled separately.
- Category filters for project cards.
- Two résumé versions: Salesforce Developer and Salesforce Integration / MuleSoft Developer.
- Dedicated résumé pages with role switching, grouped technical skills, contact links, and PDF/Word downloads.
- Single-column, selectable-text résumé PDFs and editable DOCX files; print-specific web styling.
- Keyboard skip link, visible focus indicators, Escape-to-close mobile navigation, anchor offsets, and reduced-motion support.
- Custom VR favicon, descriptive page metadata, and social-sharing text.

## Technology

| Area | Tools |
| --- | --- |
| Application | React 19, TypeScript with strict checks |
| Build tooling | Vite 8, npm |
| Styling | Component-specific CSS, shared design variables, Tailwind CSS 4 integration |
| Animation and icons | Motion, Lucide React, React Icons |
| Code quality | ESLint, TypeScript compiler |
| Hosting | GitHub Pages via GitHub Actions |
| Résumé generation | Python, ReportLab, python-docx, pypdf; generated files committed for deployment |

## Run locally

Use **Node.js 22**, matching the deployment workflow.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No backend, database, or environment secrets are required.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Check React and TypeScript source with ESLint |
| `npm run build` | Run strict TypeScript checks and build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Project structure

```text
.github/workflows/deploy.yaml   GitHub Pages build and deployment
public/
  favicon.svg                  Custom VR favicon
  resume.html                  Salesforce Developer résumé page
  resume-integration.html      Integration / MuleSoft résumé page
  resumes/                     Downloadable PDF and DOCX versions
scripts/
  build-resumes.py             Shared résumé content and document generator
  resume-requirements.txt      Python document-generation dependencies
src/
  App.tsx                      Page composition and motion preferences
  main.tsx                     Application entry and stylesheet ordering
  components/                  Section components and their CSS files
  data/portfolio.ts            Profile, experience, skills, and projects
  index.css                    Design tokens and shared/accessibility styles
  styles/responsive.css        Shared responsive and reduced-motion overrides
index.html                     Page title, description, and social metadata
vite.config.ts                 Vite plugins and GitHub Pages base path
```

## Updating content

Edit `src/data/portfolio.ts` for profile text, experience highlights, detailed implementations, skills, and project entries. Update section-specific interfaces and styles in `src/components/`. Use `src/index.css` for shared colors, spacing, buttons, tags, and focus styles.

Résumé summaries, grouped skills, selected experience bullets, and presentation are maintained in `scripts/build-resumes.py`. Each role uses the same verified employment history but a different emphasis. Update both the portfolio data and résumé source when shared facts change.

## Regenerating résumés

The normal website build **does not require Python**. Generated HTML, PDF, and DOCX files live in `public/` and are copied into `dist/` by Vite.

To regenerate documents on Windows, install the separate document tools:

```powershell
python -m pip install --target .resume-tools -r scripts/resume-requirements.txt
```

The generator uses Arial font files from `C:/Windows/Fonts`. Create an ignored `resume-drafts/profile.json` containing your own details:

```json
{
  "email": "your-email@example.com",
  "phone": "+91 YOUR_NUMBER",
  "linkedin": "https://www.linkedin.com/in/your-profile",
  "employment_heading": "Your official title | Company | Start date - Present",
  "public_contacts": false
}
```

```powershell
# Generate private review copies only
python scripts/build-resumes.py

# Refresh website pages and downloadable documents
python scripts/build-resumes.py --update-public
```

`.resume-tools/` and `resume-drafts/` are ignored by Git. The current website includes the owner's approved email and phone number. Set `public_contacts` deliberately when regenerating for another profile.

The generator checks that each PDF is one page and that core content extracts as text. Inspect the generated layout after changing content; Word pagination may vary by application. No ATS score is claimed: job-description matching must be assessed for the specific application.

## GitHub Pages deployment

The site uses **GitHub Actions**, configured in `.github/workflows/deploy.yaml`. A push to `main`, or a manual workflow run, performs:

1. Check out the repository and configure Node.js 22 with npm caching.
2. Install locked dependencies with `npm ci`.
3. Run ESLint and the TypeScript/Vite production build.
4. Upload `dist/` as the Pages artifact.
5. Deploy the artifact using the GitHub Pages environment.

In repository **Settings → Pages**, the source should be **GitHub Actions**. Review the [deployment workflow runs](https://github.com/Kvrs16/vijaya-developer-portfolio/actions/workflows/deploy.yaml) for the result and deployed URL.

**Local edits reach the live website only after they are committed and pushed to `main` and the deployment succeeds.** This includes regenerated résumé HTML, PDF, and Word files. A manual workflow run builds the selected remote revision; it does not upload uncommitted local changes.

Vite's base path is `/vijaya-developer-portfolio/`. Change `base` in `vite.config.ts` if the repository name or hosting path changes. React links to public files use `import.meta.env.BASE_URL`; the HTML entry uses `%BASE_URL%`. Résumé pages use relative links so downloads work under the repository path.

## Validation

Before pushing, run `npm run lint` and `npm run build`. After résumé edits, regenerate the files and check PDF reading order, skills, contact information, page count, and download links. For interface changes, check mobile layouts, keyboard navigation, and reduced-motion behavior.

## Contact

[GitHub](https://github.com/Kvrs16) · [LinkedIn](https://in.linkedin.com/in/vijaya-rani-7k111)
