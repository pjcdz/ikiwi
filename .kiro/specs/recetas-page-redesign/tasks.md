# Implementation Plan

- [x] 1. Crear Hero Section Inmersivo
  - [x] 1.1 Implementar estructura base del hero fullscreen
    - Crear contenedor con `min-h-screen` y posición relativa
    - Agregar imagen de fondo `bg-recipes-kitchen.png` con overlay gradiente verde/oscuro
    - Implementar centrado vertical del contenido
    - _Requirements: 1.1, 1.4_

  - [x] 1.2 Agregar tipografía animada del hero
    - Implementar badge "INSPIRACIÓN CULINARIA" con ScrollReveal fadeUp
    - Agregar AnimatedTitle "RECETAS" con animación por caracteres (chars)
    - Incluir subtítulo descriptivo con ScrollReveal fadeUp y delay
    - _Requirements: 1.2, 1.3_

  - [x] 1.3 Implementar indicador de scroll animado
    - Crear indicador de flecha/chevron animado en la parte inferior
    - Aplicar animación CSS de bounce o fade
    - _Requirements: 1.4_

  - [x] 1.4 Agregar SectionTransition hacia sección destacadas
    - Implementar SectionTransition variant="wave" toColor="#faf8f5"
    - Posicionar en la parte inferior del hero
    - _Requirements: 1.5_

- [x] 2. Implementar Sección de Recetas Destacadas
  - [x] 2.1 Crear estructura de la sección destacadas
    - Implementar contenedor con fondo #faf8f5 y padding vertical
    - Agregar badge "DESTACADAS" con ScrollReveal
    - Implementar AnimatedTitle "LAS MÁS POPULARES" con animación words
    - _Requirements: 2.1, 2.5_

  - [x] 2.2 Crear grid de cards destacadas
    - Implementar grid responsive (2 cols mobile, 4 cols desktop)
    - Mapear las 4 recetas destacadas con ScrollReveal y stagger 0.1s
    - _Requirements: 2.1, 2.2_

  - [x] 2.3 Implementar RecipeCardFeatured
    - Crear card con aspect-[3/4] y rounded-2xl
    - Agregar imagen con hover scale 1.1 y transition duration-700
    - Implementar overlay gradiente from-black/70 via-black/20 to-transparent
    - Agregar badge de tiempo en esquina superior
    - Mostrar título y dificultad en parte inferior
    - Implementar hover: translate-y, shadow-2xl, título lime-300
    - _Requirements: 2.3, 2.4_

  - [x] 2.4 Agregar SectionTransition hacia catálogo

    - Implementar SectionTransition variant="gradient" fromColor="#faf8f5" toColor="#f5f0e8"
    - _Requirements: 7.1_

- [x] 3. Implementar Sistema de Filtrado y Catálogo
  - [x] 3.1 Crear estructura de la sección catálogo
    - Implementar contenedor con fondo #f5f0e8 y padding vertical
    - Agregar AnimatedTitle "TODAS LAS RECETAS"
    - _Requirements: 4.1_

  - [x] 3.2 Implementar CategoryFilter
    - Crear array de categorías con id, name, icon (emoji)
    - Implementar estado activeCategory con useState
    - Crear botones pill con flex-wrap y gap
    - Estilizar activo: bg-[#3f7528] text-white rounded-full
    - Estilizar inactivo: bg-white text-gray-600 hover:bg-gray-100
    - Implementar lógica de filtrado de recetas
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [x] 3.3 Crear grid de RecipeCards
    - Implementar grid responsive (2 cols mobile, 3 tablet, 4 desktop)
    - Mapear recetas filtradas con ScrollReveal fadeUp y stagger 0.08s
    - _Requirements: 4.1, 4.2_

  - [x] 3.4 Implementar RecipeCard estándar
    - Crear card con bg-white rounded-2xl overflow-hidden shadow-lg
    - Agregar imagen aspect-square con hover scale 1.1
    - Implementar badge de tiempo en esquina superior derecha
    - Agregar contenido: badge categoría (outline), título, dificultad
    - Implementar hover: translate-y, shadow-xl, título text-[#3f7528]
    - _Requirements: 4.3, 4.4_

  - [x] 3.5 Agregar SectionTransition hacia tips
    - Implementar SectionTransition variant="wave" toColor="#e8f5e0"
    - _Requirements: 7.1_

- [x] 4. Implementar Sección de Tips de Cocina
  - [x] 4.1 Crear estructura de la sección tips
    - Implementar contenedor con fondo #e8f5e0 (verde muy claro) y padding vertical
    - Agregar badge "TIPS DE COCINA" con ScrollReveal
    - Implementar AnimatedTitle "CONSEJOS PARA COCINAR CON KIWI"
    - _Requirements: 5.3, 5.5_

  - [x] 4.2 Crear grid de TipCards
    - Implementar grid responsive (1 col mobile, 2 tablet, 4 desktop)
    - Mapear tips con ScrollReveal fadeUp y stagger 0.1s
    - _Requirements: 5.1, 5.2_

  - [x] 4.3 Implementar TipCard
    - Crear card con bg-white rounded-2xl p-5 shadow-lg
    - Agregar icono emoji text-3xl o text-4xl
    - Mostrar título font-bold y descripción text-sm text-gray-600
    - Implementar hover: translate-y-1, shadow-xl
    - _Requirements: 5.4_

  - [x] 4.4 Agregar SectionTransition hacia CTA
    - Implementar SectionTransition variant="organic" toColor="#3f7528"
    - _Requirements: 7.1_

- [x] 5. Implementar CTA Final
  - [x] 5.1 Crear estructura del CTA
    - Implementar contenedor con fondo #3f7528 y padding vertical generoso
    - Centrar contenido con max-width
    - _Requirements: 6.1_

  - [x] 5.2 Agregar contenido del CTA
    - Implementar icono 🥝 grande con ScrollReveal
    - Agregar AnimatedTitle "¿TENÉS UNA RECETA CON KIWI?" en blanco
    - Incluir descripción sobre compartir en Instagram
    - _Requirements: 6.2, 6.4, 6.5_

  - [x] 5.3 Implementar botones CTA
    - Crear botón primario "SEGUINOS EN INSTAGRAM" (bg-white text-[#3f7528])
    - Crear botón secundario "VER PRODUCTOS" (outline white)
    - Aplicar ScrollReveal a los botones
    - _Requirements: 6.3_

- [x] 6. Pulido Final y Responsive
  - [x] 6.1 Verificar y ajustar responsive
    - Revisar breakpoints mobile (< 768px)
    - Revisar breakpoints tablet (768-1024px)
    - Revisar breakpoints desktop (> 1024px)
    - Ajustar tamaños de tipografía por breakpoint
    - Ajustar gaps y paddings por breakpoint
    - _Requirements: 8.1_

  - [x] 6.2 Implementar accesibilidad
    - Verificar contraste de colores (WCAG AA)
    - Agregar alt text descriptivo a todas las imágenes
    - Verificar navegación por teclado en filtros y cards
    - Agregar estados de focus visibles
    - _Requirements: 8.2, 8.3, 8.4_

  - [x] 6.3 Optimizar performance
    - Agregar priority a imagen del hero
    - Verificar lazy loading en imágenes del grid
    - Implementar fallback para contenido sin JavaScript
    - _Requirements: 7.5, 8.5_

  - [x] 6.4 Verificar preferencia reduced-motion
    - Confirmar que ScrollReveal respeta prefers-reduced-motion
    - Confirmar que AnimatedTitle respeta prefers-reduced-motion
    - _Requirements: 7.3_

- [ ]* 6.5 Escribir tests básicos
    - Verificar que la página renderiza correctamente
    - Verificar que el filtrado de categorías funciona
    - Verificar estados de hover en cards
    - _Requirements: 8.1, 8.2_
