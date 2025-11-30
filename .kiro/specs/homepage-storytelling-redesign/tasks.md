# Implementation Plan

- [x] 1. Configurar infraestructura de animaciones




  - [ ] 1.1 Instalar dependencias GSAP y Lenis
    - Ejecutar `npm install gsap @studio-freight/lenis`
    - Verificar que las dependencias se instalen correctamente


    - _Requirements: 1.1, 1.2, 1.3_

  - [ ] 1.2 Crear LenisProvider para smooth scrolling global
    - Crear `src/components/providers/lenis-provider.tsx`
    - Implementar inicialización de Lenis con opciones configurables


    - Integrar con GSAP ScrollTrigger para sincronización
    - Manejar cleanup en unmount




    - _Requirements: 1.1, 1.2_

  - [ ] 1.3 Integrar LenisProvider en el layout principal
    - Modificar `src/app/layout.tsx` para envolver la app con LenisProvider
    - Agregar fuente Playfair Display para títulos serif


    - _Requirements: 1.1, 1.3_

- [ ] 2. Crear componentes de animación reutilizables
  - [ ] 2.1 Crear componente ScrollReveal
    - Crear `src/components/animations/scroll-reveal.tsx`


    - Implementar animaciones: fadeUp, fadeIn, slideLeft, slideRight, scale
    - Usar GSAP ScrollTrigger para detectar entrada en viewport
    - Soportar delay, duration, threshold, stagger, once
    - _Requirements: 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1_


  - [-] 2.2 Crear componente AnimatedTitle

    - Crear `src/components/animations/animated-title.tsx`
    - Implementar split por caracteres y palabras usando GSAP SplitText o manual
    - Animar cada elemento con stagger configurable




    - Soportar diferentes tags (h1, h2, h3)
    - _Requirements: 2.3, 11.1, 11.2, 11.3_

  - [ ] 2.3 Crear componente ParallaxImage
    - Crear `src/components/animations/parallax-image.tsx`
    - Implementar efecto parallax basado en scroll con GSAP



    - Soportar velocidad configurable (positiva y negativa)

    - Usar Next.js Image para optimización
    - _Requirements: 2.4, 3.5, 4.2_

  - [ ] 2.4 Crear componente SectionTransition
    - Crear `src/components/animations/section-transition.tsx`
    - Implementar variantes: wave (SVG), gradient, diagonal, organic




    - Soportar colores from/to configurables
    - Soportar flip para invertir dirección
    - _Requirements: 10.1, 10.2, 10.3_

- [ ] 3. Implementar Hero Storytelling
  - [x] 3.1 Crear componente HeroStorytelling




    - Crear `src/components/sections/hero-storytelling.tsx`
    - Mantener video de fondo existente con overlay #3f7528
    - Implementar título "KIWI ARGENTINO" con AnimatedTitle (chars)
    - Agregar subtítulo con animación fadeUp
    - Implementar indicador de scroll animado
    - Agregar efecto parallax al contenido durante scroll




    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 4. Implementar sección Products Hook
  - [ ] 4.1 Crear componente ProductsHook
    - Crear `src/components/sections/products-hook.tsx`
    - Implementar título grande "NUESTROS KIWIS" con AnimatedTitle



    - Mostrar 3 productos destacados con ScrollReveal stagger
    - Agregar efecto hover en cards de productos

    - Implementar parallax en imágenes de productos
    - Agregar CTA hacia /productos
    - Agregar SectionTransition al final



    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_


- [ ] 5. Implementar sección About Hook
  - [ ] 5.1 Crear componente AboutHook
    - Crear `src/components/sections/about-hook.tsx`



    - Implementar layout con imagen parallax a un lado

    - Mostrar dato destacado "DESDE 2006" con AnimatedTitle
    - Agregar texto breve con ScrollReveal
    - Agregar CTA hacia /nosotros



    - Agregar SectionTransition al final

    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 6. Implementar sección Nutrition Hook
  - [x] 6.1 Crear componente NutritionHook



    - Crear `src/components/sections/nutrition-hook.tsx`

    - Usar fondo #3f7528 para diferenciación visual
    - Implementar dato destacado "1 KIWI = 1 KILO DE LIMONES" con AnimatedTitle
    - Mostrar 4 beneficios con iconos y ScrollReveal stagger





    - Agregar CTA hacia /nutricion
    - Agregar SectionTransition al final
    - _Requirements: 5.1, 5.2, 5.3, 5.4_



- [ ] 7. Implementar sección Recipes Hook
  - [ ] 7.1 Crear componente RecipesHook
    - Crear `src/components/sections/recipes-hook.tsx`
    - Implementar título "RECETAS DELICIOSAS" con AnimatedTitle
    - Mostrar galería de 4 recetas con ScrollReveal stagger
    - Agregar efecto hover en imágenes de recetas
    - Agregar CTA hacia /recetas
    - Agregar SectionTransition al final
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 8. Implementar sección News Hook
  - [ ] 8.1 Crear componente NewsHook
    - Crear `src/components/sections/news-hook.tsx`
    - Implementar título "ÚLTIMAS NOTICIAS" con AnimatedTitle
    - Mostrar 2-3 noticias destacadas con ScrollReveal
    - Cada noticia con imagen, título y fecha
    - Agregar CTA hacia /noticias
    - _Requirements: 7.1, 7.2, 7.3_

- [ ] 9. Implementar sección Contact Hook
  - [ ] 9.1 Crear componente ContactHook
    - Crear `src/components/sections/contact-hook.tsx`
    - Implementar layout de dos columnas: consumidores y B2B
    - Agregar CTAs hacia /contacto y sección de exportadores
    - Incluir opción de "Dónde Comprar"
    - Usar ScrollReveal para animaciones de entrada
    - _Requirements: 8.1, 8.2, 8.3_

- [ ] 10. Implementar sección Careers Hook
  - [ ] 10.1 Crear componente CareersHook
    - Crear `src/components/sections/careers-hook.tsx`
    - Implementar invitación breve con imagen del equipo/campo
    - Agregar CTA hacia /trabaja-con-nosotros
    - Usar ScrollReveal para animación de entrada
    - _Requirements: 9.1, 9.2_

- [ ] 11. Implementar Final CTA
  - [ ] 11.1 Crear componente FinalCTA
    - Crear `src/components/sections/final-cta.tsx`
    - Usar imagen de fondo del campo al atardecer con parallax
    - Implementar título "EL SABOR DEL ATLÁNTICO SUR" con AnimatedTitle
    - Mostrar badges de certificaciones
    - Agregar wave transition superior
    - _Requirements: 10.1, 10.2_

- [ ] 12. Integrar todas las secciones en el homepage
  - [ ] 12.1 Actualizar page.tsx con nuevas secciones
    - Modificar `src/app/page.tsx`
    - Reemplazar secciones antiguas por las nuevas
    - Ordenar secciones según el flujo narrativo diseñado
    - Verificar que las transiciones entre secciones sean fluidas
    - _Requirements: 1.1, 1.2, 1.3, 10.1, 10.2, 10.3_

- [ ] 13. Optimización y accesibilidad
  - [ ] 13.1 Implementar detección de prefers-reduced-motion
    - Agregar hook useReducedMotion
    - Desactivar animaciones complejas cuando está activo
    - Mantener contenido visible sin animaciones
    - _Requirements: 12.4_

  - [ ] 13.2 Optimizar performance en móvil
    - Reducir complejidad de animaciones en breakpoints móviles
    - Verificar que el scroll sea fluido en dispositivos reales
    - Implementar lazy loading para secciones below-the-fold
    - _Requirements: 12.1, 12.2, 12.3, 13.1, 13.2, 13.3_

  - [ ]* 13.3 Verificar accesibilidad
    - Asegurar que todo el contenido sea accesible sin JavaScript
    - Verificar contraste de colores
    - Agregar aria-labels donde sea necesario
    - _Requirements: 12.4_
