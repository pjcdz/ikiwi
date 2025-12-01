# Design Document: Rediseño Premium Página Nosotros

## Overview

Este documento detalla el diseño técnico y visual para el rediseño de la página /nosotros de iKiwi, aplicando el sistema de diseño storytelling premium implementado en el home. El objetivo es crear una experiencia inmersiva que cuente la historia de iKiwi de forma emotiva y memorable.

## Architecture

### Estructura del Archivo

```
src/app/nosotros/page.tsx
```

### Componentes Utilizados

```typescript
// Animaciones
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { SectionTransition } from "@/components/animations/section-transition";

// Secciones
import { ColoredSection } from "@/components/sections/colored-section";
import { Empaquetadora } from "@/components/sections/empaquetadora";
import { Certifications } from "@/components/sections/certifications";
import { PageCTA } from "@/components/sections/page-cta";

// UI
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
```

## Design System Tokens

```typescript
const colors = {
  primary: '#3f7528',
  primaryDark: '#1a3311',
  lime300: 'lime-300',
  lime400: 'lime-400',
  cream: '#faf8f5',
  beige: '#f5f0e8',
};

const spacing = {
  sectionPadding: 'py-20 md:py-32',
  containerMax: 'max-w-6xl mx-auto',
};

const animations = {
  hoverCard: 'hover:-translate-y-2 hover:shadow-2xl transition-all duration-500',
  hoverScale: 'group-hover:scale-110 transition-transform duration-300',
};
```

## Data Models

```typescript
interface HeroStat {
  value: string;
  label: string;
  icon: string;
}

interface TerroirFeature {
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

interface KiwiVariety {
  emoji: string;
  name: string;
  variety: string;
  color: string;
  borderColor: string;
  desc: string;
  stats: string;
}

interface SustainabilityPractice {
  icon: string;
  title: string;
  description: string;
}
```

## Diseño Visual Detallado

### 1. Hero Section (min-h-screen)

```
┌─────────────────────────────────────────────────────────────┐
│ HERO SECTION (bg: image + gradient overlay)                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ ○ Decorative blur (lime-400/10) top-left               │ │
│ │                                                         │ │
│ │     ┌─────────────────────────────────────┐             │ │
│ │     │ ● NUESTRA HISTORIA (badge blur)     │             │ │
│ │     └─────────────────────────────────────┘             │ │
│ │                                                         │ │
│ │     LA MAYOR PRODUCTORA                                 │ │
│ │     DE KIWI DE ARGENTINA (lime-300)                     │ │
│ │                                                         │ │
│ │     "Desde una nota en el diario hasta liderar..."      │ │
│ │                                                         │ │
│ │     ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐         │ │
│ │     │ 🌿     │ │ 👥     │ │ 🌍     │ │ 📅     │         │ │
│ │     │ 270+   │ │ 90+    │ │ 4      │ │ 2006   │         │ │
│ │     │ Ha     │ │ Emp    │ │ Países │ │ Fund   │         │ │
│ │     └────────┘ └────────┘ └────────┘ └────────┘         │ │
│ │                                                         │ │
│ │                    ▼ Descubrí                           │ │
│ │                   ┌───┐                                 │ │
│ │                   │ ● │ (scroll indicator)              │ │
│ │                   └───┘                                 │ │
│ │                                         ○ blur (white)  │ │
│ └─────────────────────────────────────────────────────────┘ │
│ ~~~~~~~~~~~~~ SectionTransition wave → green ~~~~~~~~~~~~   │
└─────────────────────────────────────────────────────────────┘
```

**Implementación:**
- Background: Image `/bg-about-sunset.png` con overlay gradiente
- Parallax: heroContent se mueve con scroll (y: 150, opacity: 0)
- Stats: Animación de contador GSAP
- Decoraciones: Blurs con blur-3xl

### 2. Terroir Section (bg: #3f7528)

```
┌─────────────────────────────────────────────────────────────┐
│ TERROIR SECTION (bg: green #3f7528)                         │
│ ○ blur lime-400/20                           ○ blur white   │
│                                                             │
│                    EL TERROIR                               │
│                  MAR Y SIERRAS                              │
│     "Un microclima único en el mundo..."                    │
│                                                             │
│     ┌─────────────────────┐ ┌─────────────────────┐         │
│     │ 🌍 Ubicación        │ │ 🌱 Suelos           │         │
│     │ Privilegiada        │ │ Excepcionales       │         │
│     │ [38° Sur]           │ │ [+Materia Orgánica] │         │
│     │ La zona núcleo...   │ │ Suelos con...       │         │
│     └─────────────────────┘ └─────────────────────┘         │
│     ┌─────────────────────┐ ┌─────────────────────┐         │
│     │ 🌡️ Clima Atlántico  │ │ ⭐ Calidad Superior │         │
│     │ Moderado            │ │                     │         │
│     │ [+20 días]          │ │ [16% MS]            │         │
│     │ La influencia...    │ │ El 'hang time'...   │         │
│     └─────────────────────┘ └─────────────────────┘         │
│                                                             │
│ ~~~~~~~~~~~~~ SectionTransition wave → cream ~~~~~~~~~~~~~~  │
└─────────────────────────────────────────────────────────────┘
```

**Cards Terroir:**
- bg-white/10 backdrop-blur-sm
- border border-white/10
- hover: bg-white/15, -translate-y-2
- Icon: text-4xl md:text-5xl con hover scale-110
- Badge highlight: bg-lime-400/20 text-lime-300

### 3. Origin Story Section (bg: cream)

```
┌─────────────────────────────────────────────────────────────┐
│ ORIGIN SECTION (bg: cream #faf8f5 + texture)                │
│                                                             │
│ ┌─────────────────────────┐ ┌─────────────────────────────┐ │
│ │ EL ORIGEN               │ │                             │ │
│ │                         │ │    ┌─────────────────────┐  │ │
│ │ De una Idea a un        │ │    │ [ParallaxImage]     │  │ │
│ │ Imperio del Kiwi        │ │    │ Campos de kiwi      │  │ │
│ │                         │ │    │                     │  │ │
│ │ Todo comenzó en 2006... │ │    │    ┌──────┐         │  │ │
│ │                         │ │    │    │ 2006 │ badge   │  │ │
│ │ Lo que empezó como...   │ │    │    └──────┘         │  │ │
│ │                         │ │    └─────────────────────┘  │ │
│ │ ┌─────────────────────┐ │ │                             │ │
│ │ │ "Las condiciones... │ │ │    ┌─────────────────────┐  │ │
│ │ │                     │ │ │    │ 270+ │ 90+ │ 4     │  │ │
│ │ │ [LF] Luis Franch    │ │ │    │ Ha   │ Emp │ Países│  │ │
│ │ │      Fundador       │ │ │    └─────────────────────┘  │ │
│ │ └─────────────────────┘ │ │                             │ │
│ └─────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

**Quote Card:**
- bg-[#3f7528]/5
- border-l-4 border-[#3f7528]
- rounded-r-2xl
- Avatar: w-12 h-12 rounded-full bg-[#3f7528]

### 4. Variedades Section (bg: beige)

```
┌─────────────────────────────────────────────────────────────┐
│ VARIEDADES SECTION (bg: beige #f5f0e8)                      │
│                                                             │
│                 NUESTRAS VARIEDADES                         │
│           Tres Colores, Un Sabor Excepcional                │
│     "Gracias al convenio con la Universidad de Bolonia..."  │
│                                                             │
│     ┌─────────────┐ ┌─────────────┐ ┌─────────────┐         │
│     │ ████████████│ │ ████████████│ │ ████████████│         │
│     │ green grad  │ │ amber grad  │ │ rose grad   │         │
│     │     🥝      │ │     🟡      │ │     ❤️      │         │
│     │ ════════════│ │ ════════════│ │ ════════════│         │
│     │ [Hayward]   │ │ [Jintao]    │ │ [Experim.]  │         │
│     │ 92.7mg VitC │ │ 161mg VitC  │ │ Próximam.   │         │
│     │ Kiwi Verde  │ │ Kiwi Amaril │ │ Kiwi Rojo   │         │
│     │ El clásico..│ │ Pulpa amar..│ │ La próxima..│         │
│     │ Descubrir → │ │ Descubrir → │ │ Descubrir → │         │
│     └─────────────┘ └─────────────┘ └─────────────┘         │
│     border-green    border-amber    border-rose             │
│                                                             │
│ ~~~~~~~~~~~~~ SectionTransition organic → cream ~~~~~~~~~~~~ │
└─────────────────────────────────────────────────────────────┘
```

**Variety Cards:**
- rounded-3xl overflow-hidden
- border-b-4 con color de variedad
- Gradient header: h-40 md:h-48
- Shine effect en hover
- Link a /productos

### 5. Timeline Section (bg: cream)

```
┌─────────────────────────────────────────────────────────────┐
│ TIMELINE SECTION (bg: cream #faf8f5)                        │
│                                                             │
│                 NUESTRA TRAYECTORIA                         │
│                  19 Años de Historia                        │
│     "Un camino de crecimiento, innovación y compromiso..."  │
│                                                             │
│                         │                                   │
│     ┌─────────────────┐ ● 2006                              │
│     │ El Nacimiento   │ │                                   │
│     │ Luis Franch...  │ │                                   │
│     │ 🥝              │ │                                   │
│     └─────────────────┘ │                                   │
│                         │                                   │
│                    2010 ● ┌─────────────────┐               │
│                         │ │ Expansión       │               │
│                         │ │ Inicial         │               │
│                         │ │ Incorporación...│               │
│                         │ │ 🥝              │               │
│                         │ └─────────────────┘               │
│                         │                                   │
│     ┌─────────────────┐ ● 2015                              │
│     │ Convenio con    │ │                                   │
│     │ Bologna         │ │                                   │
│     └─────────────────┘ │                                   │
│                         │                                   │
│                    ... (continúa hasta 2023)                │
│                         │                                   │
└─────────────────────────────────────────────────────────────┘
```

**Timeline Implementation:**
- Línea central: w-1 bg-[#3f7528]/10 con gradiente animado
- Dots: w-5 h-5 bg-[#3f7528] rounded-full ring-4 ring-[#3f7528]/20
- Cards: bg-white rounded-3xl shadow-lg
- Alternancia: md:flex-row / md:flex-row-reverse
- Mobile: todos alineados a la izquierda

### 6. Valores Section (ColoredSection beige)

```
┌─────────────────────────────────────────────────────────────┐
│ VALORES SECTION (ColoredSection bg: beige)                  │
│                                                             │
│                   LO QUE NOS DEFINE                         │
│                   Nuestros Valores                          │
│           "Los pilares que guían cada decisión..."          │
│                                                             │
│     ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐ │
│     │ ┌───────┐ │ │ ┌───────┐ │ │ ┌───────┐ │ │ ┌───────┐ │ │
│     │ │  🌱   │ │ │ │  ⭐   │ │ │ │  🤝   │ │ │ │  🔬   │ │ │
│     │ └───────┘ │ │ └───────┘ │ │ └───────┘ │ │ └───────┘ │ │
│     │ Sustent.  │ │ Calidad   │ │ Comunidad │ │ Innovac.  │ │
│     │ Prácticas │ │ Premium   │ │ Generamos │ │ Investig. │ │
│     │ agrícolas │ │ Rigurosos │ │ empleo... │ │ constante │ │
│     └───────────┘ └───────────┘ └───────────┘ └───────────┘ │
│                                                             │
│ ~~~~~~~~~~~~~ SectionTransition wave → cream ~~~~~~~~~~~~~~  │
└─────────────────────────────────────────────────────────────┘
```

**Value Cards:**
- bg-white rounded-3xl p-8 text-center
- Icon container: w-20 h-20 bg-gradient-to-br from-[#3f7528]/10 to-lime-100 rounded-2xl
- hover: -translate-y-3, shadow-2xl, scale-110 en icono

### 7. Empaquetadora Section

```
┌─────────────────────────────────────────────────────────────┐
│ EMPAQUETADORA SECTION                                       │
│ (Componente existente <Empaquetadora />)                    │
│                                                             │
│ Muestra información sobre la planta de empaque con          │
│ imágenes, estadísticas y descripción del proceso.           │
└─────────────────────────────────────────────────────────────┘
```

### 8. Certificaciones Section

```
┌─────────────────────────────────────────────────────────────┐
│ CERTIFICACIONES SECTION (bg: cream)                         │
│ (Componente existente <Certifications variant="full" />)    │
│                                                             │
│ Muestra las certificaciones: IG Mar y Sierras, GlobalGAP,   │
│ USDA Organic, Export UE con hover effects.                  │
└─────────────────────────────────────────────────────────────┘
```

### 9. Sustentabilidad Section (bg: green)

```
┌─────────────────────────────────────────────────────────────┐
│ SUSTENTABILIDAD SECTION (bg: green #3f7528)                 │
│ ○ blur lime-400/10                           ○ blur white   │
│                                                             │
│                         🌍                                  │
│           Compromiso con la Sustentabilidad                 │
│     "Creemos que el futuro de la agricultura está..."       │
│                                                             │
│     ┌─────────────────┐ ┌─────────────────┐ ┌─────────────┐ │
│     │ 🌱              │ │ 💧              │ │ 🚚          │ │
│     │ Producción      │ │ Gestión del    │ │ Kilómetro   │ │
│     │ Orgánica        │ │ Agua           │ │ Cero        │ │
│     │ Sin agroquím... │ │ Sistemas de... │ │ Producción..│ │
│     └─────────────────┘ └─────────────────┘ └─────────────┘ │
│                                                             │
│ ~~~~~~~~~~~~~ SectionTransition wave → cream ~~~~~~~~~~~~~~  │
└─────────────────────────────────────────────────────────────┘
```

### 10. CTA Final Section

```
┌─────────────────────────────────────────────────────────────┐
│ CTA FINAL SECTION (bg: cream con tinte verde)               │
│                                                             │
│                         🥝                                  │
│              ¿Querés Conocer Nuestros Kiwis?                │
│     "Descubrí las variedades premium que cultivamos..."     │
│                                                             │
│     ┌─────────────────┐     ┌─────────────────┐             │
│     │ VER PRODUCTOS   │     │ CONTACTANOS     │             │
│     │ (green, filled) │     │ (outline)       │             │
│     └─────────────────┘     └─────────────────┘             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Animaciones GSAP

### Hero Parallax
```typescript
gsap.to(heroContentRef.current, {
  y: 150,
  opacity: 0,
  ease: "none",
  scrollTrigger: {
    trigger: heroRef.current,
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
```

### Stats Counter
```typescript
gsap.fromTo(stat, 
  { textContent: "0" },
  {
    textContent: finalValue,
    duration: 2,
    ease: "power2.out",
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: stat,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
);
```

### Timeline Line
```typescript
gsap.fromTo(timelineLine,
  { scaleY: 0 },
  {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: timelineRef.current,
      start: "top 60%",
      end: "bottom 80%",
      scrub: 1,
    },
  }
);
```

## Responsive Breakpoints

| Elemento | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|----------|-----------------|---------------------|-------------------|
| Hero Title | text-4xl | text-6xl | text-7xl xl:text-8xl |
| Stats Grid | grid-cols-2 | grid-cols-4 | grid-cols-4 |
| Terroir Grid | grid-cols-1 | grid-cols-2 | grid-cols-2 |
| Varieties Grid | grid-cols-1 | grid-cols-3 | grid-cols-3 |
| Timeline | Left-aligned | Alternating | Alternating |
| Values Grid | grid-cols-1 | grid-cols-2 | grid-cols-4 |
| Sustainability | grid-cols-1 | grid-cols-3 | grid-cols-3 |

## Testing Strategy

1. **Visual Testing**: Verificar que todos los elementos se renderizan correctamente
2. **Animation Testing**: Verificar que las animaciones GSAP funcionan con scroll
3. **Responsive Testing**: Probar en breakpoints 375px, 768px, 1024px, 1280px
4. **Accessibility Testing**: Verificar prefers-reduced-motion y navegación por teclado
5. **Performance Testing**: Verificar que no hay memory leaks en animaciones
