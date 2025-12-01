# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño completo de la página `/noticias` de Ikiwi, aplicando la misma estética de storytelling inmersivo implementada en el homepage. La transformación convertirá la página actual (funcional pero básica) en una experiencia periodística envolvente que cuente la historia del kiwi argentino a través de sus logros, hitos y cobertura mediática.

El rediseño seguirá los principios de "Corn Revolution" adaptados a Ikiwi: tipografía expresiva con Playfair Display, animaciones fluidas basadas en scroll con GSAP, transiciones orgánicas entre secciones (wave, gradient, organic), y una narrativa visual que posicione a Ikiwi como líder de la industria del kiwi en Argentina.

La página de noticias es especialmente importante porque documenta la evolución de la empresa: desde las aspiraciones de calidad de Luis Franch en 2017, pasando por la creación de la Cooperativa Ecco, hasta el hito de la primera exportación con Indicación Geográfica a España en 2023.

## Glossary

- **Noticias_Page**: La página ubicada en `/noticias` que muestra noticias, logros y cobertura mediática de Ikiwi
- **Hero_Section**: Sección inicial de impacto visual con título animado y contexto periodístico
- **Featured_News**: Noticia principal destacada con layout prominente (Luis Franch interview)
- **News_Card**: Componente visual que presenta una noticia individual con imagen, título, fecha y categoría
- **Timeline_Section**: Sección que muestra la cronología de hitos importantes de la industria
- **Stats_Section**: Sección con estadísticas clave del kiwi argentino (consumo, IG, capacidad)
- **Press_Section**: Sección que muestra logos de medios y citas destacadas
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll
- **AnimatedTitle**: Componente de tipografía con animación de revelado por palabras/caracteres
- **SectionTransition**: Componente de transición visual entre secciones (wave, gradient, organic)
- **GSAP**: Librería de animación utilizada para efectos basados en scroll
- **Parallax_Effect**: Efecto visual donde elementos se mueven a diferentes velocidades durante el scroll

## Requirements

### Requirement 1: Hero Section Inmersivo

**User Story:** Como visitante, quiero ver una introducción visual impactante al entrar a la página de noticias, para entender que estoy accediendo a la historia y logros de Ikiwi.

#### Acceptance Criteria

1. WHEN el usuario navega a `/noticias`, THE Noticias_Page SHALL mostrar un Hero_Section de altura completa (100vh) con imagen de fondo relacionada con prensa/campo/industria
2. WHILE el Hero_Section está visible, THE Noticias_Page SHALL mostrar un título principal "NOTICIAS" con AnimatedTitle usando animación por caracteres estilo hero-storytelling
3. WHEN el Hero_Section se renderiza, THE Noticias_Page SHALL mostrar un subtítulo descriptivo "La historia del kiwi argentino" con efecto ScrollReveal fadeUp
4. THE Hero_Section SHALL incluir un badge animado "ACTUALIDAD" con tracking-[0.3em] y estilo consistente con el home
5. THE Hero_Section SHALL incluir un indicador de scroll animado que invite al usuario a explorar el contenido
6. WHEN el usuario hace scroll desde el Hero_Section, THE Noticias_Page SHALL aplicar efecto parallax al contenido y mostrar una SectionTransition de tipo "wave" hacia la siguiente sección

### Requirement 2: Noticia Destacada Principal

**User Story:** Como visitante, quiero ver la noticia más importante destacada prominentemente, para entender el mensaje principal de la marca.

#### Acceptance Criteria

1. THE Featured_News section SHALL mostrar la entrevista de Luis Franch como noticia principal con layout de dos columnas (texto + imagen)
2. WHEN la sección entra en viewport, THE Featured_News SHALL animar el contenido con ScrollReveal fadeUp con stagger entre elementos
3. THE Featured_News SHALL mostrar: badge de categoría, fecha, título con tipografía Playfair grande, descripción, y link externo al artículo original
4. THE Featured_News image SHALL tener efecto hover con scale sutil y overlay con información del entrevistado
5. THE Featured_News section SHALL tener fondo diferenciado (#f5f0e8 o verde claro) para destacar del resto
6. WHEN el usuario hace hover sobre el link "Leer artículo completo", THE link SHALL animar el gap del icono de flecha

### Requirement 3: Timeline de Hitos Históricos

**User Story:** Como visitante, quiero ver una cronología visual de los hitos importantes de Ikiwi, para entender la evolución y logros de la empresa.

#### Acceptance Criteria

1. THE Timeline_Section SHALL mostrar los hitos clave en orden cronológico: 2017 (Visión de calidad), 2021 (Cooperativa Ecco), 2022 (Indicación Geográfica), 2023 (Exportación a España)
2. WHEN la sección entra en viewport, THE Timeline_Section SHALL animar cada hito con ScrollReveal fadeUp y stagger de 0.15s
3. THE Timeline_Section SHALL usar un diseño visual de línea temporal vertical en mobile y horizontal en desktop
4. EACH hito SHALL mostrar: año destacado, título del evento, breve descripción, e icono/emoji representativo
5. THE Timeline_Section SHALL tener título con AnimatedTitle "NUESTRA HISTORIA" o "HITOS"
6. THE Timeline_Section SHALL usar colores que representen progreso (verde más intenso hacia el presente)

### Requirement 4: Grid de Noticias Recientes

**User Story:** Como visitante, quiero ver todas las noticias disponibles en un formato visual atractivo, para explorar la cobertura mediática completa.

#### Acceptance Criteria

1. THE Noticias_Page SHALL mostrar un grid de News_Cards con layout responsive (1 columna mobile, 2 tablet, 3 desktop)
2. WHEN las News_Cards entran en viewport, THE Noticias_Page SHALL animarlas con ScrollReveal fadeUp y stagger progresivo de 0.1s
3. THE News_Card SHALL mostrar: imagen con aspect-ratio 16/9, badge de categoría posicionado sobre la imagen, fecha, título con hover a color #3f7528, y extracto
4. WHEN el usuario hace hover sobre un News_Card, THE News_Card SHALL mostrar efecto de elevación (-translate-y-2), aumento de sombra, y zoom sutil en imagen (scale 1.05)
5. THE grid section SHALL tener fondo #faf8f5 con SectionTransition desde la sección anterior
6. THE News_Card categories SHALL usar colores diferenciados: Industria (#3f7528), Exportación (blue-500), Reconocimiento (amber-500), Certificación (purple-500), Infraestructura (teal-500), Prensa (gray-600)

### Requirement 5: Sección de Estadísticas del Kiwi Argentino

**User Story:** Como visitante, quiero ver datos impactantes sobre el kiwi argentino, para entender la magnitud e importancia de la industria.

#### Acceptance Criteria

1. THE Stats_Section SHALL mostrar 4 estadísticas clave: Consumo per cápita (0,45kg), Partidos en la IG (9), Materia seca mínima (16,5%), Capacidad Ecco (900t)
2. WHEN la sección entra en viewport, THE Stats_Section SHALL animar cada stat card con ScrollReveal fadeUp y stagger
3. THE stat cards SHALL mostrar: valor grande con tipografía bold, label descriptivo, y descripción secundaria
4. THE Stats_Section SHALL tener fondo diferenciado (beige #f5f0e8 o verde claro) con SectionTransition
5. THE Stats_Section SHALL incluir título con AnimatedTitle "EL KIWI ARGENTINO EN NÚMEROS"
6. WHEN el usuario hace hover sobre un stat card, THE stat card SHALL mostrar efecto de elevación sutil

### Requirement 6: Sección de Prensa y Medios

**User Story:** Como visitante, quiero ver qué medios han cubierto a Ikiwi y leer citas destacadas, para validar la credibilidad de la marca.

#### Acceptance Criteria

1. THE Press_Section SHALL mostrar logos de medios (La Nación, Clarín) con efecto grayscale que se colorea en hover
2. THE Press_Section SHALL incluir una cita destacada del diario La Nación en un card con diseño de blockquote
3. WHEN la sección entra en viewport, THE Press_Section SHALL animar los logos y la cita con ScrollReveal fadeUp
4. THE blockquote card SHALL tener diseño elegante con comillas grandes, texto en itálica, y atribución
5. THE Press_Section SHALL tener fondo #faf8f5 para mantener consistencia visual
6. THE logos SHALL tener transición suave de grayscale a color y de opacity 60% a 100% en hover

### Requirement 7: Call-to-Action Final

**User Story:** Como visitante, quiero una invitación clara a seguir conectado con Ikiwi después de ver las noticias, para mantenerme informado.

#### Acceptance Criteria

1. THE Noticias_Page SHALL incluir una sección CTA final con fondo verde (#3f7528) consistente con el home
2. THE CTA section SHALL invitar a seguir a Ikiwi en Instagram para más novedades
3. THE CTA section SHALL incluir botón primario (Instagram) con estilo bg-white text-[#3f7528] y botón secundario (Ver Productos) con estilo outline
4. WHEN la sección entra en viewport, THE CTA section SHALL animar el contenido con ScrollReveal
5. THE CTA section SHALL tener tipografía grande y expresiva con AnimatedTitle
6. THE CTA section SHALL incluir emoji o icono representativo (📱 o 📰)

### Requirement 8: Transiciones y Fluidez Visual

**User Story:** Como visitante, quiero una experiencia de navegación fluida y cohesiva, para sentir que la página cuenta una historia.

#### Acceptance Criteria

1. THE Noticias_Page SHALL incluir SectionTransition entre cada sección principal usando variantes: wave, gradient, organic
2. WHILE el usuario hace scroll, THE Noticias_Page SHALL mantener animaciones suaves sin saltos bruscos
3. THE Noticias_Page SHALL respetar la preferencia `prefers-reduced-motion` desactivando animaciones cuando corresponda
4. THE Noticias_Page SHALL mantener consistencia visual con la paleta de colores de Ikiwi (#3f7528, #faf8f5, #f5f0e8, #e8f5e0)
5. THE Noticias_Page SHALL cargar imágenes con lazy loading y Next.js Image optimization
6. THE Hero_Section SHALL tener efecto parallax en el contenido al hacer scroll, similar al hero-storytelling del home

### Requirement 9: Responsive Design y Accesibilidad

**User Story:** Como visitante en cualquier dispositivo, quiero una experiencia óptima y accesible, para disfrutar el contenido sin importar cómo accedo.

#### Acceptance Criteria

1. THE Noticias_Page SHALL ser completamente responsive con breakpoints para mobile (< 768px), tablet (768-1024px) y desktop (> 1024px)
2. THE Noticias_Page SHALL mantener contraste de color adecuado (WCAG AA) en todos los textos
3. THE News_Cards y links externos SHALL ser navegables por teclado con estados de focus visibles
4. THE Noticias_Page SHALL incluir alt text descriptivo en todas las imágenes
5. IF JavaScript está deshabilitado, THEN THE Noticias_Page SHALL mostrar todo el contenido visible sin animaciones
6. THE links externos SHALL incluir atributos rel="noopener noreferrer" y target="_blank" para seguridad

### Requirement 10: Integración con Datos Reales

**User Story:** Como visitante, quiero ver información real y verificable sobre Ikiwi, para confiar en la autenticidad del contenido.

#### Acceptance Criteria

1. THE Featured_News SHALL incluir link real al artículo de FreshPlaza sobre Luis Franch (https://www.freshplaza.es/article/3104421/)
2. THE Timeline_Section SHALL reflejar fechas y eventos reales documentados en docs/noticias.md
3. THE Stats_Section SHALL mostrar datos verificables de la Indicación Geográfica y la industria
4. THE News_Cards SHALL incluir links a fuentes reales cuando estén disponibles (argentina.gob.ar, freshplaza.es, etc.)
5. THE Press_Section quote SHALL ser una cita real del diario La Nación
6. THE Noticias_Page SHALL mantener consistencia con la información del documento docs/noticias.md
