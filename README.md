# Bharth K S — Portfolio Website

Personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React + Custom SVG
- **Deploy:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/           # Next.js app router (layout, page, globals)
├── components/
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Hero, About, Skills, Projects, Experience, etc.
│   └── ui/        # Reusable UI components (Button, Badge, etc.)
├── data/          # All content (skills, projects, experience)
├── hooks/         # Custom React hooks
├── lib/           # Utilities and animation presets
├── providers/     # Theme provider
└── types/         # TypeScript interfaces
```

## Editing Content

All content is in `src/data/`:

- `siteConfig.ts` — Name, social links, metadata
- `skills.ts` — Skills with categories and proficiency
- `projects.ts` — Project cards with full details
- `experience.ts` — Timeline items + extracurricular

To add a new project, add an object to the `projects` array in `src/data/projects.ts`.

## Deployment

### Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Framework is auto-detected as Next.js
4. Click Deploy

Every `git push` to main auto-deploys.

### Custom Domain

Configure in Vercel Dashboard → Settings → Domains.

## Assets

- Replace the hero photo placeholder in the `Hero.tsx` component
- Add real project screenshots to `public/images/projects/`
- Add CV PDF to `public/cv/Bharth_KS_CV.pdf`

## License

MIT
