# Implementation Plan

- [x] 1. Crear componente NutritionHeroSection
  - [x] 1.1 Crear archivo `src/components/sections/nutrition-hero.tsx` con estructura base
    - Implementar refs para heroRef, contentRef, titleRef
    - Configurar GSAP con ScrollTrigger registration
    - Crear estructura JSX con fondo verde #3f7528 y elementos decorativos (blurs)
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 1.2 Implementar animaciones de entrada del hero
    - Animar caracteres del título con splitChars function
    - Configurar timeline GSAP para entrada secuencial (badge → título → subtítulo)
    - Implementar efecto parallax en scroll (content se mueve hacia arriba con opacity decreciente)
    - _Requirements: 1.1, 1.4, 1.5_

  - [x] 1.3 Agregar SectionTransition wave al final del hero
    - Importar y configurar SectionTransition con variant="wave" y toColor="#faf8f5"
    - Posicionar absolutamente en bottom con height de 100px
    - _Requirements: 1.4_

- [x] 2. Crear componente VitaminCComparisonSection
  - [x] 2.1 Crear archivo `src/components/sections/vitamin-c-comparison.tsx`
    - Definir array de datos vitaminCComparison con fruit, amount, percentage, icon
    - Crear estructura de sección con fondo #faf8f5
    - Implementar header con badge "COMPARACIÓN" y título "Vitamina C por 100g"
    - _Requirements: 2.1, 2.4_

  - [x] 2.2 Implementar barras de progreso animadas
    - Crear componente de barra con width dinámico basado en percentage
    - Usar GSAP ScrollTrigger para animar width desde 0% al valor final
    - Aplicar gradiente verde (#3f7528 a lime-500) solo a la barra del kiwi
    - Configurar duración de 700ms con easing suave
    - _Requirements: 2.2, 2.3, 2.5_

- [x] 3. Crear componente NutritionBenefitsGrid
  - [x] 3.1 Crear archivo `src/components/sections/nutrition-benefits-grid.tsx`
    - Definir array de 6 beneficios con icon, title, description, detail, color
    - Crear grid responsivo (1 col mobile, 2 cols tablet, 3 cols desktop)
    - Wrappear en ColoredSection con backgroundColor="beige"
    - _Requirements: 3.1, 3.5_

  - [x] 3.2 Implementar tarjetas de beneficio con microinteracciones
    - Crear estructura de tarjeta con icono en contenedor gradiente, título, descripción y detalle
    - Implementar hover effects: translateY(-8px), shadow-xl a shadow-2xl, icon scale-110
    - Configurar transiciones de 300ms
    - _Requirements: 3.2, 3.3_

  - [x] 3.3 Agregar animaciones ScrollReveal escalonadas
    - Wrappear cada tarjeta en ScrollReveal con animation="fadeUp"
    - Configurar delay escalonado: index * 0.1s
    - _Requirements: 3.4_

- [x] 4. Crear componente NutritionalFactsCard
  - [x] 4.1 Crear archivo `src/components/sections/nutritional-facts-card.tsx`
    - Definir array nutritionalFacts con nutrient, value, unit
    - Crear tarjeta centrada con max-w-md
    - Agregar icono 🥝 de tamaño 4xl centrado en header
    - _Requirements: 4.1, 4.2_

  - [x] 4.2 Implementar lista de nutrientes estilizada
    - Crear filas con nutrient a la izquierda y value+unit a la derecha
    - Aplicar color verde #3f7528 y font-semibold a los valores
    - Agregar border-b border-gray-100 excepto última fila
    - Wrappear en ScrollReveal con animation="fadeUp"
    - _Requirements: 4.3, 4.4, 4.5_

- [x] 5. Crear componente ActinidinaSection
  - [x] 5.1 Crear archivo `src/components/sections/actinidina-section.tsx`
    - Crear layout de dos columnas con grid md:grid-cols-2
    - Columna izquierda: icono 🧬, título, descripción
    - Columna derecha: tarjeta blanca con lista de beneficios
    - _Requirements: 5.1, 5.2_

  - [x] 5.2 Implementar animaciones de convergencia
    - Wrappear columna izquierda en ScrollReveal con animation="slideRight"
    - Wrappear columna derecha en ScrollReveal con animation="slideLeft"
    - Agregar checkmarks verdes (✓) a cada item de la lista
    - Wrappear sección en ColoredSection con backgroundColor="greenLight"
    - _Requirements: 5.3, 5.4, 5.5_

- [x] 6. Crear componente KiwiComparisonSection
  - [x] 6.1 Crear archivo `src/components/sections/kiwi-comparison.tsx`
    - Crear grid de dos columnas para las tarjetas
    - Definir datos de comparación para Verde (Hayward) y Amarillo (Jintao)
    - Agregar header con badge "COMPARACIÓN" y título
    - _Requirements: 6.1_

  - [x] 6.2 Implementar tarjetas de comparación
    - Crear tarjetas con bordes de color distintivo (verde/amber)
    - Agregar imágenes de producto con Next.js Image (96x96px)
    - Mostrar stats con valores destacados (⬆️) en color correspondiente
    - Animar tarjeta izquierda con slideRight, derecha con slideLeft
    - _Requirements: 6.2, 6.3, 6.4, 6.5_

- [x] 7. Crear componente NutritionFAQSection
  - [x] 7.1 Crear archivo `src/components/sections/nutrition-faq.tsx`
    - Definir array de 5 FAQs con question y answer
    - Implementar Accordion de shadcn/ui con type="single" collapsible
    - Wrappear en ColoredSection con backgroundColor="beige"
    - _Requirements: 7.1, 7.2, 7.5_

  - [x] 7.2 Estilizar acordeón
    - Aplicar fondo blanco, rounded-2xl, shadow-lg
    - Configurar hover state bg-gray-50 en triggers
    - Agregar separadores border-gray-100 entre items
    - Configurar SectionTransition wave hacia #3f7528
    - _Requirements: 7.3, 7.4_

- [x] 8. Actualizar página principal de nutrición
  - [x] 8.1 Refactorizar `src/app/nutricion/page.tsx`
    - Importar todos los nuevos componentes de sección
    - Reemplazar estructura actual con composición de nuevos componentes
    - Mantener PageCTA existente con variant="green"
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [x] 8.2 Verificar flujo de transiciones entre secciones
    - Asegurar que cada SectionTransition conecte correctamente con la siguiente sección
    - Validar colores de fondo consistentes
    - Verificar espaciado py-24 md:py-32 entre secciones
    - _Requirements: 9.4_

- [x] 9. Implementar optimizaciones de performance y accesibilidad
  - [x] 9.1 Agregar soporte para reduced motion
    - Verificar que cada componente con animaciones GSAP detecte prefers-reduced-motion
    - Implementar fallback que muestre contenido sin animaciones
    - _Requirements: 9.5, 10.2_

  - [x] 9.2 Optimizar carga de imágenes
    - Configurar sizes apropiados en componentes Image de Next.js
    - Verificar lazy loading en imágenes below the fold
    - _Requirements: 10.1_

  - [x] 9.3 Implementar cleanup de animaciones GSAP

    - Asegurar que cada useEffect con GSAP tenga cleanup function
    - Usar gsap.context() para facilitar cleanup
    - Matar ScrollTriggers asociados en unmount
    - _Requirements: 10.3_

- [ ]* 9.4 Escribir tests básicos de componentes
    - Test de renderizado para cada nuevo componente
    - Test de datos (validar arrays de beneficios, FAQs, etc.)
    - _Requirements: 10.4, 10.5_
