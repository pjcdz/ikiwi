# Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout (fonts, header, footer, Lenis)
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── contacto/            # Contact page
│   ├── nosotros/            # About page
│   ├── noticias/            # News/press page
│   ├── nutricion/           # Nutrition benefits page
│   ├── productos/           # Products catalog page
│   ├── recetas/             # Recipes page
│   └── trabaja-con-nosotros/ # Careers page
│
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Page sections (hero-*, benefits, cta-*, etc.)
│   ├── animations/          # Reusable animation wrappers (scroll-reveal, parallax)
│   ├── providers/           # Context providers (lenis-provider)
│   └── ui/                  # shadcn/ui components (button, card, tabs, etc.)
│
├── hooks/                   # Custom React hooks
│   └── use-reduced-motion.ts
│
└── lib/                     # Utilities and data
    ├── utils.ts             # cn() helper
    └── certifications.ts    # Certification data
```

## Key Conventions
- Pages use App Router file-based routing (`page.tsx`)
- Section components are in `components/sections/` with descriptive names
- UI primitives from shadcn live in `components/ui/`
- Client components marked with `"use client"` directive
- Static assets in `public/` (images, video, logos)

## Naming Patterns
- Section components: `{feature}-{type}.tsx` (e.g., `hero-wow.tsx`, `products-hook.tsx`)
- Page sections often have `-hook` suffix for homepage teasers
- `-wow` suffix indicates visually rich/animated variants

## Documentation
- `docs/` contains project documentation, research, and content specs
- `docs/PROYECTO_IKIWI.md` is the main project guide
