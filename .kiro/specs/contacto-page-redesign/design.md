# Design Document: Rediseño Página de Contacto iKiwi

## Overview

Este documento detalla la arquitectura técnica y el diseño de componentes para el rediseño completo de la página de Contacto (/contacto) de iKiwi. El rediseño aplica el sistema de diseño premium, animaciones inmersivas y estética storytelling implementados en el home, transformando la página en una experiencia visual impactante y funcional.

## Architecture

### Estructura de Archivos

```
src/
├── app/
│   └── contacto/
│       └── page.tsx              # Página principal (REDISEÑAR)
├── components/
│   ├── animations/               # Componentes existentes
│   │   ├── animated-title.tsx
│   │   ├── scroll-reveal.tsx
│   │   ├── parallax-image.tsx
│   │   └── section-transition.tsx
│   └── sections/
│       ├── page-hero.tsx         # Existente
│       ├── page-cta.tsx          # Existente
│       └── colored-section.tsx   # Existente
```

### Design System Tokens

```typescript
const contactoTokens = {
  colors: {
    primary: '#3f7528',
    primaryHover: '#4a8a30',
    primaryDark: '#1a3311',
    lime300: 'rgb(190, 242, 100)',
    lime400: 'rgb(163, 230, 53)',
    whatsapp: '#25D366',
    backgrounds: {
      cream: '#faf8f5',
      beige: '#f5f0e8',
    }
  },
  spacing: {
    heroY: 'py-20 md:py-28 lg:py-36',
    sectionY: 'py-16 md:py-24',
  },
  borderRadius: {
    card: 'rounded-2xl',
    cardLarge: 'rounded-3xl',
    button: 'rounded-full',
    input: 'rounded-xl',
  }
};
```


## Components and Interfaces

### 1. ContactoPage - Estructura Principal

```typescript
// src/app/contacto/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";
import { PageCTA } from "@/components/sections/page-cta";

gsap.registerPlugin(ScrollTrigger);
```

### 2. Hero Section Component

```typescript
interface HeroSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}
```

**Implementación Visual:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ HERO SECTION                                                        │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Background: /bg-cta-sunset-fields.png                           │ │
│ │ Overlay: gradient from-[#3f7528]/95 via-[#3f7528]/90            │ │
│ │          to-[#2d5a1c]/95                                        │ │
│ │                                                                 │ │
│ │ Decorative Blurs:                                               │ │
│ │   - Top-right: lime-400/20 w-96 h-96 blur-3xl                   │ │
│ │   - Bottom-left: white/10 w-80 h-80 blur-3xl                    │ │
│ │                                                                 │ │
│ │ Content (centered, max-w-4xl):                                  │ │
│ │   [Badge] CONECTÁ CON NOSOTROS (lime-300, tracking-[0.3em])     │ │
│ │   [Title] ¿LISTO PARA PROBAR EL MEJOR KIWI? (AnimatedTitle)     │ │
│ │   [Subtitle] Kiwis premium con certificación... (white/80)      │ │
│ │                                                                 │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│ SectionTransition variant="wave" toColor="#faf8f5"                  │
└─────────────────────────────────────────────────────────────────────┘
```

**GSAP Animation:**
```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Parallax effect on scroll
    gsap.to(contentRef.current, {
      y: 100,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, heroRef);
  return () => ctx.revert();
}, []);
```

### 3. Contact Options Cards

```typescript
interface ContactOption {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  linkText: string;
  variant: 'light' | 'dark';
}

const contactOptions: ContactOption[] = [
  {
    icon: <ShoppingBagIcon />,
    title: "Dónde Comprar",
    description: "Encontrá kiwis frescos en supermercados y verdulerías cerca tuyo",
    href: "#donde-comprar",
    linkText: "Ver puntos de venta",
    variant: "light"
  },
  {
    icon: <BriefcaseIcon />,
    title: "Empresas B2B",
    description: "Restaurantes, supermercados, exportadores e industria alimentaria",
    href: "#b2b",
    linkText: "Contacto comercial",
    variant: "dark"
  },
  {
    icon: <ChatBubbleIcon />,
    title: "Contactanos",
    description: "Consultas, sugerencias o cualquier cosa que necesites",
    href: "#form",
    linkText: "Enviar mensaje",
    variant: "light"
  }
];
```

**Card Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ CONTACT OPTIONS SECTION (bg: cream #faf8f5)                         │
│ py-16 md:py-24                                                      │
│                                                                     │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐               │
│ │ LIGHT CARD    │ │ DARK CARD     │ │ LIGHT CARD    │               │
│ │ bg-white      │ │ bg-[#1a3311]  │ │ bg-white      │               │
│ │ rounded-2xl   │ │ rounded-2xl   │ │ rounded-2xl   │               │
│ │ p-8           │ │ p-8           │ │ p-8           │               │
│ │ shadow-xl     │ │ shadow-xl     │ │ shadow-xl     │               │
│ │               │ │               │ │               │               │
│ │ ┌───────────┐ │ │ ┌───────────┐ │ │ ┌───────────┐ │               │
│ │ │ Icon      │ │ │ │ Icon      │ │ │ │ Icon      │ │               │
│ │ │ w-20 h-20 │ │ │ │ w-20 h-20 │ │ │ │ w-20 h-20 │ │               │
│ │ │ lime grad │ │ │ │ white/15  │ │ │ │ lime grad │ │               │
│ │ └───────────┘ │ │ └───────────┘ │ │ └───────────┘ │               │
│ │               │ │               │ │               │               │
│ │ Title         │ │ Title (white) │ │ Title         │               │
│ │ Playfair 2xl  │ │ Playfair 2xl  │ │ Playfair 2xl  │               │
│ │               │ │               │ │               │               │
│ │ Description   │ │ Description   │ │ Description   │               │
│ │ gray-500      │ │ white/70      │ │ gray-500      │               │
│ │               │ │               │ │               │               │
│ │ Link →        │ │ Link →        │ │ Link →        │               │
│ │ [#3f7528]     │ │ lime-300      │ │ [#3f7528]     │               │
│ └───────────────┘ └───────────────┘ └───────────────┘               │
│                                                                     │
│ Hover: -translate-y-2, shadow-2xl, icon scale-110                   │
│ Animation: ScrollReveal stagger 0.15s                               │
└─────────────────────────────────────────────────────────────────────┘
```


### 4. Direct Contact Buttons

```typescript
interface DirectContactButton {
  type: 'whatsapp' | 'email';
  href: string;
  title: string;
  subtitle: string;
}
```

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ DIRECT CONTACT (grid md:grid-cols-2 gap-6)                          │
│                                                                     │
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐     │
│ │ WHATSAPP BUTTON             │ │ EMAIL BUTTON                │     │
│ │ bg-[#25D366]                │ │ bg-white/10 backdrop-blur   │     │
│ │ rounded-2xl p-6             │ │ border border-white/20      │     │
│ │                             │ │ rounded-2xl p-6             │     │
│ │ ┌────┐                      │ │                             │     │
│ │ │ WA │ WhatsApp             │ │ ┌────┐                      │     │
│ │ │icon│ Respuesta en 24hs    │ │ │Mail│ ventas@ikiwi.com.ar  │     │
│ │ └────┘                   →  │ │ │icon│ Consultas comerciales│     │
│ │                             │ │ └────┘                   →  │     │
│ └─────────────────────────────┘ └─────────────────────────────┘     │
│                                                                     │
│ Icon container: w-14 h-14 bg-white rounded-xl                       │
│ Hover: -translate-y-1, shadow-2xl, icon scale-110                   │
└─────────────────────────────────────────────────────────────────────┘
```

### 5. Certifications Row

```typescript
interface Certification {
  name: string;
  logo: string;
  alt: string;
}

const certifications: Certification[] = [
  { name: "IG Mar y Sierras", logo: "/logo-ig.png", alt: "Indicación Geográfica" },
  { name: "GlobalGAP", logo: "/logo-globalgap.png", alt: "GlobalGAP Certified" },
  { name: "USDA Organic", logo: "https://upload.wikimedia.org/...", alt: "USDA Organic" },
  { name: "Export UE", logo: "/logo-ue-organica.png", alt: "Unión Europea Orgánica" }
];
```

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ CERTIFICATIONS (mt-12 text-center)                                  │
│                                                                     │
│ "Certificaciones que nos avalan" (white/50, uppercase, tracking)    │
│                                                                     │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│ │ [logo] Name  │ │ [logo] Name  │ │ [logo] Name  │ │ [logo] Name  │ │
│ │ bg-white/10  │ │ bg-white/10  │ │ bg-white/10  │ │ bg-white/10  │ │
│ │ backdrop-blur│ │ backdrop-blur│ │ backdrop-blur│ │ backdrop-blur│ │
│ │ rounded-full │ │ rounded-full │ │ rounded-full │ │ rounded-full │ │
│ │ px-5 py-3    │ │ px-5 py-3    │ │ px-5 py-3    │ │ px-5 py-3    │ │
│ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘ │
│                                                                     │
│ flex justify-center items-center gap-6 flex-wrap                    │
└─────────────────────────────────────────────────────────────────────┘
```

### 6. Contact Form Section

```typescript
interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'textarea';
  required: boolean;
  placeholder?: string;
  options?: string[];
  rows?: number;
}

const formFields: FormField[] = [
  { id: 'nombre', label: 'Nombre', type: 'text', required: true, placeholder: 'Tu nombre' },
  { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
  { id: 'empresa', label: 'Empresa / Organización', type: 'text', required: false, placeholder: 'Opcional' },
  { 
    id: 'motivo', 
    label: 'Motivo de Contacto', 
    type: 'select', 
    required: true,
    options: ['Compra directa', 'Distribución / Mayorista', 'Exportación', 'Prensa / Medios', 'Otro']
  },
  { id: 'mensaje', label: 'Mensaje', type: 'textarea', required: true, rows: 4, placeholder: 'Contanos en qué podemos ayudarte...' }
];
```

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ FORM SECTION (bg: beige #f5f0e8)                                    │
│ py-16 md:py-24                                                      │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Header (text-center mb-10)                                      │ │
│ │ [Badge] ESCRIBINOS (green, tracking-[0.3em])                    │ │
│ │ [Title] Envianos un Mensaje (AnimatedTitle)                     │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ FORM CARD (bg-white rounded-3xl p-6 md:p-8 shadow-lg)           │ │
│ │ max-w-2xl mx-auto                                               │ │
│ │                                                                 │ │
│ │ ┌─────────────────┐ ┌─────────────────┐                         │ │
│ │ │ Nombre *        │ │ Email *         │                         │ │
│ │ │ [input]         │ │ [input]         │                         │ │
│ │ └─────────────────┘ └─────────────────┘                         │ │
│ │                                                                 │ │
│ │ ┌─────────────────────────────────────┐                         │ │
│ │ │ Empresa / Organización              │                         │ │
│ │ │ [input]                             │                         │ │
│ │ └─────────────────────────────────────┘                         │ │
│ │                                                                 │ │
│ │ ┌─────────────────────────────────────┐                         │ │
│ │ │ Motivo de Contacto * [▼]            │                         │ │
│ │ │ [select]                            │                         │ │
│ │ └─────────────────────────────────────┘                         │ │
│ │                                                                 │ │
│ │ ┌─────────────────────────────────────┐                         │ │
│ │ │ Mensaje *                           │                         │ │
│ │ │ [textarea rows=4]                   │                         │ │
│ │ └─────────────────────────────────────┘                         │ │
│ │                                                                 │ │
│ │ ┌─────────────────────────────────────┐                         │ │
│ │ │      [ENVIAR MENSAJE]               │                         │ │
│ │ │      rounded-full, bg-[#3f7528]     │                         │ │
│ │ │      hover:scale-105, shadow-lg     │                         │ │
│ │ └─────────────────────────────────────┘                         │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

**Input Styles:**
```css
.input-base {
  @apply w-full px-4 py-3 rounded-xl border border-gray-200;
  @apply focus:outline-none focus:ring-2 focus:ring-[#3f7528];
  @apply transition-all duration-300;
}

.input-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}
```
