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


### 7. Map Section

```typescript
interface MapSectionProps {
  embedUrl: string;
  locationName: string;
  address: string;
  googleMapsUrl: string;
}
```

**Layout:**
```
┌─────────────────────────────────────────────────────────────────────┐
│ MAP SECTION (bg: cream #faf8f5)                                     │
│ py-16 md:py-24                                                      │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ Header (text-center mb-10)                                      │ │
│ │ [Title] Nuestra Ubicación (AnimatedTitle)                       │ │
│ └─────────────────────────────────────────────────────────────────┘ │
│                                                                     │
│ ┌─────────────────────────────────────────────────────────────────┐ │
│ │ MAP CARD (bg-white rounded-3xl overflow-hidden shadow-lg)       │ │
│ │ max-w-4xl mx-auto                                               │ │
│ │                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ GOOGLE MAPS IFRAME                                          │ │ │
│ │ │ aspect-video                                                │ │ │
│ │ │ width="100%" height="100%"                                  │ │ │
│ │ │ loading="lazy"                                              │ │ │
│ │ │ title="Ubicación de iKiwi"                                  │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ │                                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────────┐ │ │
│ │ │ INFO (p-6 text-center)                                      │ │ │
│ │ │ [h3] Sierra de los Padres (text-xl font-bold)               │ │ │
│ │ │ [p] Mar del Plata, Buenos Aires, Argentina (gray-600)       │ │ │
│ │ │ [a] Ver en Google Maps → (text-[#3f7528])                   │ │ │
│ │ └─────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### 8. Final CTA Section

Utilizamos el componente existente `PageCTA` con la siguiente configuración:

```typescript
<PageCTA
  icon="📸"
  title="Seguinos en Instagram"
  description="@kiwi_argentino - Novedades, recetas y más"
  primaryButton={{ 
    text: "SEGUIR EN INSTAGRAM", 
    href: "https://instagram.com/kiwi_argentino" 
  }}
  variant="green"
/>
```

## Data Models

### Contact Form Data

```typescript
interface ContactFormData {
  nombre: string;
  email: string;
  empresa?: string;
  motivo: 'compra' | 'distribucion' | 'exportacion' | 'prensa' | 'otro';
  mensaje: string;
}

interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}
```

### Contact Options Data

```typescript
const contactOptionsData = {
  options: [
    {
      id: 'donde-comprar',
      icon: 'shopping-bag',
      title: 'Dónde Comprar',
      description: 'Encontrá kiwis frescos en supermercados y verdulerías cerca tuyo',
      href: '#donde-comprar',
      linkText: 'Ver puntos de venta',
      variant: 'light' as const
    },
    {
      id: 'b2b',
      icon: 'briefcase',
      title: 'Empresas B2B',
      description: 'Restaurantes, supermercados, exportadores e industria alimentaria',
      href: '#b2b',
      linkText: 'Contacto comercial',
      variant: 'dark' as const
    },
    {
      id: 'contacto',
      icon: 'chat-bubble',
      title: 'Contactanos',
      description: 'Consultas, sugerencias o cualquier cosa que necesites',
      href: '#form',
      linkText: 'Enviar mensaje',
      variant: 'light' as const
    }
  ],
  directContact: {
    whatsapp: {
      number: '5492235000000',
      displayText: 'WhatsApp',
      subtitle: 'Respuesta en menos de 24hs'
    },
    email: {
      address: 'ventas@ikiwi.com.ar',
      displayText: 'ventas@ikiwi.com.ar',
      subtitle: 'Consultas comerciales y exportación'
    }
  },
  certifications: [
    { name: 'IG Mar y Sierras', logo: '/logo-ig.png' },
    { name: 'GlobalGAP', logo: '/logo-globalgap.png' },
    { name: 'USDA Organic', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg' },
    { name: 'Export UE', logo: '/logo-ue-organica.png' }
  ],
  location: {
    name: 'Sierra de los Padres',
    address: 'Mar del Plata, Buenos Aires, Argentina',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12548.847891036647!2d-57.79832!3d-37.94286...',
    mapsUrl: 'https://maps.google.com/?q=Sierra+de+los+Padres,+Mar+del+Plata,+Argentina'
  }
};
```

## Error Handling

### Form Validation

```typescript
const validateForm = (data: ContactFormData): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  if (!data.nombre.trim()) {
    errors.nombre = 'El nombre es requerido';
  }
  
  if (!data.email.trim()) {
    errors.email = 'El email es requerido';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'El email no es válido';
  }
  
  if (!data.motivo) {
    errors.motivo = 'Selecciona un motivo de contacto';
  }
  
  if (!data.mensaje.trim()) {
    errors.mensaje = 'El mensaje es requerido';
  } else if (data.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
  }
  
  return errors;
};
```

### Form Submission States

```typescript
// Estados visuales del formulario
const formStates = {
  idle: {
    buttonText: 'Enviar Mensaje',
    buttonClass: 'bg-[#3f7528] hover:bg-[#4a8a30]'
  },
  submitting: {
    buttonText: 'Enviando...',
    buttonClass: 'bg-[#3f7528]/70 cursor-not-allowed'
  },
  success: {
    buttonText: '¡Mensaje Enviado!',
    buttonClass: 'bg-green-600'
  },
  error: {
    buttonText: 'Error - Reintentar',
    buttonClass: 'bg-red-600 hover:bg-red-700'
  }
};
```


## Testing Strategy

### Visual Testing

1. **Hero Section**
   - Verificar que el parallax funciona correctamente en scroll
   - Verificar que AnimatedTitle anima palabra por palabra
   - Verificar que los blurs decorativos se posicionan correctamente
   - Verificar transición wave al final del hero

2. **Contact Cards**
   - Verificar hover states (elevación, sombra, escala de icono)
   - Verificar que el stagger de animación funciona
   - Verificar contraste de colores en card oscura

3. **Form**
   - Verificar focus states en todos los inputs
   - Verificar validación visual de campos requeridos
   - Verificar estados del botón de envío

### Responsive Testing

```typescript
const breakpoints = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};

// Verificar en cada breakpoint:
// - Grid de cards (3 cols → 1 col)
// - Grid de contacto directo (2 cols → 1 col)
// - Tamaños de tipografía
// - Espaciados y paddings
// - Mapa aspect ratio
```

### Accessibility Testing

1. **Keyboard Navigation**
   - Tab order lógico a través de todos los elementos interactivos
   - Focus visible en todos los elementos
   - Enter/Space activan botones y links

2. **Screen Reader**
   - Labels correctos en formulario
   - Alt text en imágenes
   - Aria-labels en iconos
   - Title en iframe del mapa

3. **Color Contrast**
   - Texto blanco sobre verde: ≥4.5:1
   - Texto gris sobre blanco: ≥4.5:1
   - Links y CTAs claramente distinguibles

## Animation Specifications

### Hero Parallax

```typescript
// GSAP ScrollTrigger config
{
  trigger: heroRef.current,
  start: "top top",
  end: "bottom top",
  scrub: true,
  // Mueve contenido 100px hacia arriba con fade out
}
```

### ScrollReveal Delays

```typescript
const animationDelays = {
  hero: {
    badge: 0,
    title: 0.1,
    subtitle: 0.3
  },
  contactOptions: {
    card1: 0.1,
    card2: 0.2,
    card3: 0.3
  },
  directContact: {
    whatsapp: 0.4,
    email: 0.5
  },
  certifications: 0.6,
  form: 0.2,
  map: 0.2
};
```

### Hover Transitions

```css
/* Card hover */
.card-hover {
  @apply transition-all duration-300;
  @apply hover:-translate-y-2 hover:shadow-2xl;
}

/* Icon hover */
.icon-hover {
  @apply transition-transform duration-300;
  @apply group-hover:scale-110;
}

/* Link arrow hover */
.link-arrow {
  @apply transition-all duration-300;
  @apply group-hover:gap-3;
}

/* Button hover */
.button-hover {
  @apply transition-all duration-300;
  @apply hover:scale-105 hover:shadow-xl;
}
```

## Page Structure Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         CONTACTO PAGE                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 1. HERO SECTION                                               │  │
│  │    - Background image + gradient overlay                      │  │
│  │    - Decorative blurs                                         │  │
│  │    - Badge + AnimatedTitle + Subtitle                         │  │
│  │    - GSAP parallax on scroll                                  │  │
│  │    - SectionTransition (wave → cream)                         │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 2. CONTACT OPTIONS (bg: cream)                                │  │
│  │    - 3 cards grid (Comprar, B2B, Contacto)                    │  │
│  │    - ScrollReveal staggered                                   │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 3. DIRECT CONTACT                                             │  │
│  │    - WhatsApp button (green)                                  │  │
│  │    - Email button (glass)                                     │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 4. CERTIFICATIONS                                             │  │
│  │    - 4 badges in row                                          │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ SectionTransition (wave → beige)                              │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 5. CONTACT FORM (bg: beige)                                   │  │
│  │    - Header (badge + title)                                   │  │
│  │    - Form card with inputs                                    │  │
│  │    - Submit button                                            │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 6. MAP SECTION (bg: cream)                                    │  │
│  │    - Title                                                    │  │
│  │    - Map card with iframe                                     │  │
│  │    - Location info                                            │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ SectionTransition (wave → green)                              │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                              ↓                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │ 7. FINAL CTA (bg: green)                                      │  │
│  │    - PageCTA component (Instagram)                            │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

## Dependencies

### Existing Components (Reutilizar)
- `AnimatedTitle` - Para títulos animados
- `ScrollReveal` - Para animaciones de entrada
- `SectionTransition` - Para transiciones entre secciones
- `PageCTA` - Para CTA final

### External Dependencies
- `gsap` + `gsap/ScrollTrigger` - Para parallax del hero
- `next/image` - Para optimización de imágenes
- `next/link` - Para navegación interna

### Assets Required
- `/bg-cta-sunset-fields.png` - Background del hero (existente)
- `/logo-ig.png` - Logo IG Mar y Sierras (existente)
- `/logo-globalgap.png` - Logo GlobalGAP (existente)
- `/logo-ue-organica.png` - Logo UE Orgánica (existente)
- USDA Organic logo (URL externa, existente)
