# Yoga DevOps Portfolio

A calm, premium yoga-inspired portfolio built with Next.js 15, showcasing a Junior DevOps Engineer who embraces AI-powered development and mindfulness.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Theme:** Dark mode by default

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Theme colors & global styles
│   ├── layout.tsx       # Root layout with dark theme
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── sections/        # Hero, About, Skills, Projects, Journey, Contact
│   ├── ui/              # shadcn/ui components (Button, Card, Badge, etc.)
│   ├── navbar.tsx       # Responsive navigation
│   ├── footer.tsx       # Site footer
│   └── theme-provider.tsx
└── lib/
    ├── data.ts          # Portfolio content (skills, projects, etc.)
    └── utils.ts         # Utility functions
```

## Customization

Edit `src/lib/data.ts` to update:

- Your name and personal info
- Skills and categories
- Project placeholders
- Journey timeline steps
- Social links and contact email

Replace `"Your Name"` in the Hero section and update the About section details with your information.

## Sections

1. **Hero** — Name, title, and call-to-action
2. **About Me** — Personal story blending DevOps and yoga
3. **Skills** — Categorized: AI Tools, Cloud & IaC, Programming, Other
4. **Projects** — 3 placeholder project cards
5. **My Vibe Coding Journey** — Timeline of your DevOps learning path
6. **Contact** — Social links and email CTA

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
# yoga-devops-portfolio
