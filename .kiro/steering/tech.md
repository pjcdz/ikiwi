# Tech Stack

## Core Framework
- **Next.js 16** with App Router (RSC enabled)
- **React 19** with React Compiler enabled
- **TypeScript 5** (strict mode)

## Styling
- **Tailwind CSS 4** with PostCSS
- **tw-animate-css** for animation utilities
- CSS variables for theming (OKLCH color space)
- Custom brand colors defined in `globals.css`

## UI Components
- **shadcn/ui** (new-york style, RSC compatible)
- **Radix UI** primitives (dialog, accordion, tabs, navigation-menu, etc.)
- **Lucide React** for icons
- **class-variance-authority** for component variants
- **clsx** + **tailwind-merge** via `cn()` utility

## Animations
- **GSAP** for complex scroll and entrance animations
- **Lenis** for smooth scrolling
- CSS animations for simple transitions
- Reduced motion support implemented

## Common Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Path Aliases
- `@/*` → `./src/*`
- Components: `@/components`
- UI: `@/components/ui`
- Lib: `@/lib`
- Hooks: `@/hooks`

## External Images
Configured for `upload.wikimedia.org` remote patterns.
