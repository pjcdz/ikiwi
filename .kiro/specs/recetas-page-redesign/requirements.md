# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño completo de la página `/recetas` de Ikiwi, aplicando la misma estética de storytelling inmersivo implementada en el homepage. La transformación convertirá la página actual (funcional pero básica) en una experiencia culinaria envolvente que invite a explorar y cocinar con kiwi argentino.

El rediseño seguirá los principios de "Corn Revolution" adaptados a Ikiwi: tipografía expresiva, animaciones fluidas basadas en scroll, transiciones orgánicas entre secciones, y una narrativa visual que cuente la historia del kiwi en la cocina.

## Glossary

- **Recetas_Page**: La página ubicada en `/recetas` que muestra el catálogo de recetas con kiwi
- **Hero_Section**: Sección inicial de impacto visual con título animado y contexto
- **Recipe_Card**: Componente visual que presenta una receta individual con imagen, título, tiempo y dificultad
- **Category_Filter**: Sistema de filtrado por categorías (postres, bebidas, ensaladas, desayunos)
- **Featured_Recipes**: Sección destacada con las recetas más populares
- **Tips_Section**: Sección con consejos de cocina para trabajar con kiwi
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll
- **AnimatedTitle**: Componente de tipografía con animación de revelado por palabras/caracteres
- **SectionTransition**: Componente de transición visual entre secciones (wave, gradient, organic)
- **GSAP**: Librería de animación utilizada para efectos basados en scroll
- **Parallax_Effect**: Efecto visual donde elementos se mueven a diferentes velocidades durante el scroll

## Requirements

### Requirement 1: Hero Section Inmersivo

**User Story:** Como visitante, quiero ver una introducción visual impactante al entrar a la página de recetas, para sentirme inspirado a explorar las opciones culinarias.

#### Acceptance Criteria

1. WHEN el usuario navega a `/recetas`, THE Recetas_Page SHALL mostrar un Hero_Section de altura completa (100vh) con imagen de fondo de alta calidad relacionada con cocina/kiwi
2. WHILE el Hero_Section está visible, THE Recetas_Page SHALL mostrar un título principal "RECETAS" con AnimatedTitle usando animación por caracteres o palabras
3. WHEN el Hero_Section se renderiza, THE Recetas_Page SHALL mostrar un subtítulo descriptivo con efecto ScrollReveal fadeUp
4. THE Hero_Section SHALL incluir un indicador de scroll animado que invite al usuario a explorar el contenido
5. WHEN el usuario hace scroll desde el Hero_Section, THE Recetas_Page SHALL mostrar una SectionTransition de tipo "wave" u "organic" hacia la siguiente sección

### Requirement 2: Sección de Recetas Destacadas

**User Story:** Como visitante, quiero ver las recetas más populares destacadas visualmente, para descubrir rápidamente las mejores opciones.

#### Acceptance Criteria

1. THE Featured_Recipes section SHALL mostrar un máximo de 4 recetas destacadas en un grid responsive
2. WHEN la sección entra en viewport, THE Featured_Recipes SHALL animar cada Recipe_Card con ScrollReveal fadeUp y stagger de 0.1s entre cards
3. THE Recipe_Card SHALL mostrar imagen con efecto hover de zoom (scale 1.1), overlay gradiente, badge de tiempo, título y dificultad
4. WHEN el usuario hace hover sobre un Recipe_Card, THE Recipe_Card SHALL elevar su sombra y aplicar translate-y negativo
5. THE Featured_Recipes section SHALL incluir un título con AnimatedTitle y badge de categoría "DESTACADAS"

### Requirement 3: Sistema de Filtrado por Categorías

**User Story:** Como visitante, quiero filtrar las recetas por categoría, para encontrar fácilmente el tipo de receta que busco.

#### Acceptance Criteria

1. THE Category_Filter SHALL mostrar botones para las categorías: Todas, Postres, Bebidas, Ensaladas, Desayunos
2. WHEN el usuario selecciona una categoría, THE Recetas_Page SHALL filtrar las recetas mostrando solo las de esa categoría
3. THE Category_Filter SHALL indicar visualmente la categoría activa con color de fondo #3f7528 y texto blanco
4. WHEN se cambia de categoría, THE Recipe_Card grid SHALL animar la transición de forma fluida
5. THE Category_Filter SHALL tener diseño responsive con botones pill-shaped y iconos emoji

### Requirement 4: Grid de Todas las Recetas

**User Story:** Como visitante, quiero ver todas las recetas disponibles en un formato visual atractivo, para explorar las opciones completas.

#### Acceptance Criteria

1. THE Recetas_Page SHALL mostrar un grid de Recipe_Cards con layout responsive (2 columnas mobile, 3 tablet, 4 desktop)
2. WHEN las Recipe_Cards entran en viewport, THE Recetas_Page SHALL animarlas con ScrollReveal fadeUp y stagger progresivo
3. THE Recipe_Card SHALL mostrar: imagen cuadrada, badge de tiempo, badge de categoría, título, y nivel de dificultad
4. WHEN el usuario hace hover sobre un Recipe_Card, THE Recipe_Card SHALL mostrar efecto de elevación y cambio de color en el título a #3f7528
5. THE grid section SHALL tener fondo diferenciado (#f5f0e8) con SectionTransition desde la sección anterior

### Requirement 5: Sección de Tips de Cocina

**User Story:** Como visitante, quiero aprender consejos útiles para cocinar con kiwi, para mejorar mis preparaciones.

#### Acceptance Criteria

1. THE Tips_Section SHALL mostrar 4 consejos de cocina en cards con iconos emoji, título y descripción
2. WHEN la sección entra en viewport, THE Tips_Section SHALL animar los tip cards con ScrollReveal fadeUp y stagger
3. THE Tips_Section SHALL tener un fondo distintivo (verde claro o patrón sutil) para diferenciarse del resto
4. THE tip cards SHALL tener efecto hover con elevación y transición suave
5. THE Tips_Section SHALL incluir título con AnimatedTitle "Consejos para Cocinar con Kiwi"

### Requirement 6: Call-to-Action Final

**User Story:** Como visitante, quiero una invitación clara a interactuar con la marca después de ver las recetas, para compartir mis propias creaciones.

#### Acceptance Criteria

1. THE Recetas_Page SHALL incluir una sección CTA final con fondo verde (#3f7528) o imagen de campo
2. THE CTA section SHALL invitar a compartir recetas en Instagram con @kiwi_argentino
3. THE CTA section SHALL incluir botones primario (Instagram) y secundario (Ver Productos)
4. WHEN la sección entra en viewport, THE CTA section SHALL animar el contenido con ScrollReveal
5. THE CTA section SHALL tener tipografía grande y expresiva con AnimatedTitle

### Requirement 7: Transiciones y Fluidez Visual

**User Story:** Como visitante, quiero una experiencia de navegación fluida y cohesiva, para sentir que la página cuenta una historia.

#### Acceptance Criteria

1. THE Recetas_Page SHALL incluir SectionTransition entre cada sección principal (wave, gradient, organic)
2. WHILE el usuario hace scroll, THE Recetas_Page SHALL mantener animaciones suaves sin saltos bruscos
3. THE Recetas_Page SHALL respetar la preferencia `prefers-reduced-motion` desactivando animaciones cuando corresponda
4. THE Recetas_Page SHALL mantener consistencia visual con la paleta de colores de Ikiwi (#3f7528, #faf8f5, #f5f0e8)
5. THE Recetas_Page SHALL cargar imágenes con lazy loading y placeholders para optimizar performance

### Requirement 8: Responsive Design y Accesibilidad

**User Story:** Como visitante en cualquier dispositivo, quiero una experiencia óptima y accesible, para disfrutar el contenido sin importar cómo accedo.

#### Acceptance Criteria

1. THE Recetas_Page SHALL ser completamente responsive con breakpoints para mobile (< 768px), tablet (768-1024px) y desktop (> 1024px)
2. THE Recetas_Page SHALL mantener contraste de color adecuado (WCAG AA) en todos los textos
3. THE Recipe_Cards SHALL ser navegables por teclado con estados de focus visibles
4. THE Recetas_Page SHALL incluir alt text descriptivo en todas las imágenes
5. IF JavaScript está deshabilitado, THEN THE Recetas_Page SHALL mostrar todo el contenido visible sin animaciones
