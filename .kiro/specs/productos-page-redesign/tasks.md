# Implementation Plan

- [x] 1. Crear Hero Inmersivo para Productos


  - [x] 1.1 Implementar ProductosHero con animación de título 3D


    - Crear sección hero con min-h-[70vh] y fondo de imagen con overlay verde
    - Implementar animación GSAP de caracteres con rotación 3D para "NUESTROS KIWIS"
    - Agregar badge animado "VARIEDADES PREMIUM CERTIFICADAS" con punto pulsante
    - Implementar efecto parallax en scroll con reducción de opacidad
    - Agregar indicador de scroll con animación bounce
    - Incluir SectionTransition wave al final
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 2. Implementar Grid de Variedades con Cards Premium

  - [x] 2.1 Crear estructura de datos para las 5 variedades

    - Definir array de variedades con toda la información (Verde, Gold, Rojo, Orgánico, Baby)
    - Incluir características, nutrición y usos para cada variedad
    - Definir gradientes y colores de badge por variedad
    - _Requirements: 2.1, 3.2_


  - [x] 2.2 Implementar VariedadCard con hover effects
    - Crear card con imagen, gradiente de fondo y badge de categoría
    - Implementar hover effects: -translate-y-4, shadow-2xl, scale-110 en imagen
    - Agregar indicador "Ver más" con flecha animada
    - Aplicar ScrollReveal con delay staggered (0.15s por card)
    - _Requirements: 2.2, 2.3, 2.4, 2.5_

  - [x] 2.3 Implementar grid responsive de 5 columnas

    - Configurar grid: 1 col móvil, 2 tablet, 5 desktop
    - Asegurar espaciado consistente entre cards
    - _Requirements: 9.1_


- [x] 3. Implementar Detalle Expandible de Variedad


  - [x] 3.1 Crear componente VariedadDetail
    - Implementar layout de 2 columnas: imagen grande + información
    - Mostrar características en grid de 2 columnas
    - Mostrar tabla nutricional con valores y unidades
    - Mostrar lista de usos con iconos
    - Agregar botón de cierre
    - _Requirements: 3.1, 3.2, 3.4_

  - [x] 3.2 Implementar lógica de expansión/contracción
    - Agregar estado para controlar qué variedad está expandida
    - Implementar animación GSAP de altura y opacidad (400ms)
    - Permitir cerrar haciendo click fuera o en botón de cierre
    - _Requirements: 3.3, 3.5_

- [x] 4. Mejorar Sección de Certificaciones
  - [x] 4.1 Aplicar estilo glassmorphism a la sección
    - Agregar fondo white/80 con backdrop-blur
    - Implementar hover effects en logos (scale-110, shadow-lg)
    - Agregar ScrollReveal con delay staggered
    - _Requirements: 4.1, 4.2, 4.4_

  - [x] 4.2 Mejorar mensaje destacado
    - Agregar fondo verde transparente al mensaje de IG
    - Incluir icono 🌿 y estilo destacado
    - _Requirements: 4.3_

- [x] 5. Mejorar Calendario de Temporada
  - [x] 5.1 Rediseñar indicadores de meses
    - Crear círculos para cada mes con estados activo/inactivo
    - Aplicar estilo verde (#3f7528) con sombra para meses en temporada
    - Agregar tooltips con nombre completo del mes
    - _Requirements: 5.1, 5.2, 5.4_

  - [x] 5.2 Mejorar barra de progreso visual
    - Implementar barra con gradiente verde a lima
    - Agregar mensaje informativo sobre disponibilidad todo el año
    - _Requirements: 5.3, 5.5_

- [x] 6. Crear Sección de Comparación de Variedades
  - [x] 6.1 Implementar ComparacionSection
    - Crear layout de 3 cards lado a lado (Verde vs Gold vs Rojo)
    - Mostrar valores nutricionales con indicadores de nivel
    - Usar iconos y flechas (⬆️) para indicar superioridad
    - Implementar hover con borde de color por variedad
    - Agregar nota sobre Kiwi Rojo exclusivo
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 7. Mejorar CTA Final
  - [x] 7.1 Aplicar diseño inmersivo al CTA
    - Usar PageCTA existente con variant="green"
    - Agregar imagen de fondo con overlay
    - Configurar botones primario y secundario
    - Mostrar certificaciones en miniatura
    - Agregar SectionTransition wave antes del CTA
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 8. Implementar Transiciones y Animaciones Globales
  - [x] 8.1 Agregar SectionTransitions entre secciones
    - Aplicar wave después del hero
    - Aplicar organic después de certificaciones
    - Aplicar wave antes del CTA
    - _Requirements: 8.2_

  - [x] 8.2 Verificar smooth scrolling y performance
    - Asegurar que Lenis está activo en la página
    - Verificar que animaciones corren a 60fps
    - Implementar fallback para prefers-reduced-motion
    - _Requirements: 8.1, 8.3, 8.4_

- [x] 9. Ajustes Responsive
  - [x] 9.1 Optimizar para móvil
    - Ajustar tipografía del hero para móvil
    - Configurar calendario con scroll horizontal en móvil
    - Asegurar tamaño táctil mínimo de 44px en botones
    - Reducir duraciones de animación en móvil
    - _Requirements: 9.2, 9.3, 9.4, 9.5_

- [ ]* 10. Testing y Verificación
  - [ ]* 10.1 Verificar renderizado de las 5 variedades
  - [ ]* 10.2 Verificar animaciones de hover y expansión
  - [ ]* 10.3 Verificar accesibilidad (contraste, navegación por teclado)
  - [ ]* 10.4 Verificar performance con Lighthouse
