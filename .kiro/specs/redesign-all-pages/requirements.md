# Requirements Document

## Introduction

Este documento define los requisitos para rediseñar todas las páginas internas del sitio web de iKiwi (Kiwi Argentino) aplicando el mismo sistema de diseño premium, animaciones y patrones visuales que se implementaron exitosamente en el home. El objetivo es crear una experiencia de usuario cohesiva, moderna y visualmente impactante en todas las secciones del sitio.

## Glossary

- **Sistema_Rediseño**: El sistema completo de rediseño que incluye componentes de animación, patrones visuales y estilos consistentes
- **Página_Interna**: Cualquier página del sitio que no sea el home (Productos, Nosotros, Nutrición, Recetas, Noticias, Contacto, Trabaja con Nosotros)
- **AnimatedTitle**: Componente de animación para títulos con efectos de entrada por caracteres, palabras o líneas
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll con diferentes efectos (fadeUp, slideLeft, slideRight, scale, stagger)
- **ParallaxImage**: Componente de imagen con efecto parallax al hacer scroll
- **SectionTransition**: Componente de transición visual entre secciones (wave, organic, gradient)
- **Hero_Section**: Sección principal de cada página con título grande, subtítulo y elementos visuales destacados
- **Design_System**: Conjunto de colores, tipografías, espaciados y componentes reutilizables definidos en el proyecto
- **GSAP**: Librería de animación JavaScript utilizada para las animaciones del sitio
- **Playfair_Display**: Tipografía serif utilizada para títulos principales
- **Color_Primario**: Verde iKiwi (#3f7528)
- **Background_Cream**: Color de fondo crema (#faf8f5)
- **Background_Beige**: Color de fondo beige (#f5f0e8)

## Requirements

### Requirement 1: Sistema de Diseño Consistente

**User Story:** As a visitante del sitio, I want que todas las páginas tengan un diseño visual consistente y premium, so that la experiencia de navegación sea cohesiva y profesional.

#### Acceptance Criteria

1. WHEN el usuario navega a cualquier Página_Interna, THE Sistema_Rediseño SHALL aplicar la misma paleta de colores definida en el Design_System (Color_Primario #3f7528, Background_Cream #faf8f5, Background_Beige #f5f0e8).

2. WHEN el usuario visualiza títulos principales en cualquier Página_Interna, THE Sistema_Rediseño SHALL renderizar dichos títulos usando la tipografía Playfair_Display con peso font-black y tamaños responsivos (text-4xl md:text-5xl lg:text-6xl).

3. WHEN el usuario carga cualquier Página_Interna, THE Sistema_Rediseño SHALL aplicar espaciados consistentes de sección (py-24 md:py-32) entre cada bloque de contenido.

4. WHEN el usuario visualiza cards o contenedores en cualquier Página_Interna, THE Sistema_Rediseño SHALL aplicar bordes redondeados consistentes (rounded-2xl o rounded-3xl) y sombras suaves (shadow-lg hover:shadow-2xl).

5. WHEN el usuario interactúa con botones en cualquier Página_Interna, THE Sistema_Rediseño SHALL aplicar el estilo de botón redondeado (rounded-full) con transiciones de hover (hover:scale-105) y colores del Design_System.

---

### Requirement 2: Hero Sections Premium

**User Story:** As a visitante del sitio, I want que cada página tenga una sección hero impactante y visualmente atractiva, so that la primera impresión de cada sección sea memorable.

#### Acceptance Criteria

1. WHEN el usuario carga la página de Productos, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo de imagen/gradiente verde, título animado "NUESTROS KIWIS" usando AnimatedTitle, y badge de categoría con tracking-[0.3em] uppercase.

2. WHEN el usuario carga la página de Nosotros, THE Sistema_Rediseño SHALL mostrar un Hero_Section con imagen de fondo de los campos, título animado "NUESTRA HISTORIA", estadísticas destacadas (270+ hectáreas, 90+ empleados, 4 países) y efecto parallax.

3. WHEN el usuario carga la página de Nutrición, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo verde (#3f7528), título animado "EL PODER DEL KIWI", comparación visual de vitamina C y elementos decorativos con blur.

4. WHEN el usuario carga la página de Recetas, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo crema, título animado "RECETAS DELICIOSAS", grid de imágenes de recetas destacadas con hover effects.

5. WHEN el usuario carga la página de Noticias, THE Sistema_Rediseño SHALL mostrar un Hero_Section con la noticia destacada en formato grande, título animado "ÚLTIMAS NOTICIAS" y badge de categoría.

6. WHEN el usuario carga la página de Contacto, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo verde/imagen, título animado "CONECTÁ CON NOSOTROS" y opciones de contacto destacadas.

7. WHEN el usuario carga la página de Trabaja con Nosotros, THE Sistema_Rediseño SHALL mostrar un Hero_Section con imagen de equipo trabajando, título animado "SUMATE AL EQUIPO", estadísticas de empleados y badge de oportunidades.

---

### Requirement 3: Animaciones de Scroll

**User Story:** As a visitante del sitio, I want que los elementos aparezcan con animaciones suaves al hacer scroll, so that la experiencia de navegación sea dinámica y moderna.

#### Acceptance Criteria

1. WHEN el usuario hace scroll y un título principal entra en el viewport, THE Sistema_Rediseño SHALL animar dicho título usando AnimatedTitle con efecto "words" o "chars" y stagger de 0.08-0.1 segundos.

2. WHEN el usuario hace scroll y una card o contenedor entra en el viewport, THE Sistema_Rediseño SHALL animar dicho elemento usando ScrollReveal con efecto "fadeUp" y delay escalonado (index * 0.1 o index * 0.15).

3. WHEN el usuario hace scroll y una imagen entra en el viewport, THE Sistema_Rediseño SHALL animar dicha imagen usando ScrollReveal con efecto "slideLeft" o "slideRight" según su posición en el layout.

4. WHEN el usuario hace scroll y un badge o etiqueta entra en el viewport, THE Sistema_Rediseño SHALL animar dicho elemento usando ScrollReveal con efecto "fadeUp" y delay menor que el contenido principal.

5. WHEN el usuario hace scroll y una sección de estadísticas entra en el viewport, THE Sistema_Rediseño SHALL animar los números usando ScrollReveal con efecto "stagger" para crear un efecto de revelación secuencial.

---

### Requirement 4: Transiciones entre Secciones

**User Story:** As a visitante del sitio, I want que las transiciones entre secciones sean suaves y visualmente atractivas, so that el flujo de contenido sea orgánico y agradable.

#### Acceptance Criteria

1. WHEN el usuario visualiza el final de una sección con fondo claro seguida de una sección con fondo oscuro, THE Sistema_Rediseño SHALL renderizar un SectionTransition con variant "wave" y el color de destino correspondiente.

2. WHEN el usuario visualiza el final de una sección con fondo oscuro seguida de una sección con fondo claro, THE Sistema_Rediseño SHALL renderizar un SectionTransition con variant "wave" y el color de destino correspondiente.

3. WHEN el usuario visualiza el final de una sección con fondo crema seguida de una sección con fondo beige, THE Sistema_Rediseño SHALL renderizar un SectionTransition con variant "organic" o "gradient" para una transición sutil.

4. WHILE el usuario hace scroll por la página, THE Sistema_Rediseño SHALL mantener las transiciones visibles y correctamente posicionadas (absolute -bottom-1 left-0 right-0).

---

### Requirement 5: Página de Productos Rediseñada

**User Story:** As a visitante interesado en los productos, I want ver las variedades de kiwi presentadas de forma atractiva y premium, so that pueda apreciar la calidad y diferencias entre cada variedad.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Productos, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo gradiente verde, título "NUESTROS KIWIS" animado, subtítulo "Variedades Premium Certificadas" y badge de categoría.

2. WHEN el usuario visualiza las variedades de kiwi, THE Sistema_Rediseño SHALL mostrar cada variedad en una card con imagen grande, gradiente de color correspondiente, hover effect (-translate-y-3), y animación ScrollReveal escalonada.

3. WHEN el usuario visualiza la sección de certificaciones, THE Sistema_Rediseño SHALL mostrar las certificaciones en un contenedor con fondo blanco/blur, iconos de certificación con hover effect, y mensaje destacado sobre la IG Mar y Sierras.

4. WHEN el usuario visualiza el calendario de temporada, THE Sistema_Rediseño SHALL mostrar una visualización interactiva con los meses destacados (Mayo-Octubre) usando el Color_Primario y animación de entrada.

5. WHEN el usuario hace scroll por la página de Productos, THE Sistema_Rediseño SHALL aplicar transiciones de sección entre el hero, grid de productos, certificaciones y calendario.

---

### Requirement 6: Página de Nosotros Rediseñada

**User Story:** As a visitante interesado en la empresa, I want conocer la historia de iKiwi de forma visual y emotiva, so that pueda conectar con la marca y sus valores.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Nosotros, THE Sistema_Rediseño SHALL mostrar un Hero_Section con imagen parallax de los campos, título "NUESTRA HISTORIA" animado, estadísticas flotantes y badge de año de fundación.

2. WHEN el usuario visualiza la sección del terroir, THE Sistema_Rediseño SHALL mostrar información sobre Mar y Sierras con fondo gradiente verde suave, iconos animados, y grid de características con ScrollReveal.

3. WHEN el usuario visualiza la timeline de historia, THE Sistema_Rediseño SHALL mostrar cada hito con animación ScrollReveal alternada (izquierda/derecha), línea de tiempo vertical animada, y badges de año destacados.

4. WHEN el usuario visualiza la sección de valores, THE Sistema_Rediseño SHALL mostrar cada valor en una card con icono grande, hover effect, y animación ScrollReveal escalonada.

5. WHEN el usuario visualiza la sección de variedades, THE Sistema_Rediseño SHALL mostrar las tres variedades (Verde, Amarillo, Rojo) en cards con gradientes de color, badges de variedad, y hover effects.

6. WHEN el usuario visualiza la sección de sustentabilidad, THE Sistema_Rediseño SHALL mostrar el contenido en un contenedor con fondo verde suave, iconos de prácticas sustentables, y animación de entrada.

---

### Requirement 7: Página de Nutrición Rediseñada

**User Story:** As a visitante interesado en la salud, I want ver los beneficios nutricionales del kiwi de forma clara y visualmente impactante, so that pueda entender por qué el kiwi es un superalimento.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Nutrición, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo verde (#3f7528), título "1 KIWI = 1 KILO DE LIMONES" animado, subtítulo "en Vitamina C" destacado en lime-300.

2. WHEN el usuario visualiza la comparación de vitamina C, THE Sistema_Rediseño SHALL mostrar barras de progreso animadas con ScrollReveal, iconos de frutas, y el kiwi destacado con el Color_Primario.

3. WHEN el usuario visualiza los beneficios para la salud, THE Sistema_Rediseño SHALL mostrar cada beneficio en una card con icono grande en gradiente de color, hover effect (-translate-y-2), y animación ScrollReveal escalonada.

4. WHEN el usuario visualiza la sección de actinidina, THE Sistema_Rediseño SHALL mostrar el contenido en un contenedor con fondo verde suave, icono de ADN, y lista de beneficios con checkmarks verdes.

5. WHEN el usuario visualiza la comparación Verde vs Amarillo, THE Sistema_Rediseño SHALL mostrar dos cards lado a lado con bordes de color correspondiente, imágenes de kiwi, y tabla comparativa animada.

6. WHEN el usuario visualiza las FAQs, THE Sistema_Rediseño SHALL mostrar un acordeón con animaciones suaves de apertura/cierre y hover effects en los triggers.

---

### Requirement 8: Página de Recetas Rediseñada

**User Story:** As a visitante interesado en cocinar con kiwi, I want ver las recetas presentadas de forma apetitosa y fácil de navegar, so that pueda encontrar inspiración culinaria.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Recetas, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo crema, título "RECETAS DELICIOSAS" animado, y grid de 4 recetas destacadas con imágenes grandes.

2. WHEN el usuario visualiza el grid de recetas, THE Sistema_Rediseño SHALL mostrar cada receta en una card con imagen aspect-[3/4], overlay gradiente, badge de categoría, tiempo de preparación, y hover effect (scale-110 en imagen, -translate-y-2 en card).

3. WHEN el usuario filtra por categoría, THE Sistema_Rediseño SHALL animar la transición del grid con efecto de fade y reordenamiento suave.

4. WHEN el usuario visualiza una receta detallada, THE Sistema_Rediseño SHALL mostrar ingredientes con bullets verdes, pasos numerados con círculos verdes, y tip destacado en contenedor con fondo verde suave.

5. WHEN el usuario visualiza la sección de consejos, THE Sistema_Rediseño SHALL mostrar cada consejo en una card con fondo blanco, icono, y hover effect sutil.

---

### Requirement 9: Página de Noticias Rediseñada

**User Story:** As a visitante interesado en las novedades, I want ver las noticias presentadas de forma periodística y atractiva, so that pueda mantenerme informado sobre iKiwi.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Noticias, THE Sistema_Rediseño SHALL mostrar un Hero_Section con la noticia destacada en formato grande (grid 2 columnas), imagen con overlay, título animado, y badge de categoría.

2. WHEN el usuario visualiza el grid de noticias, THE Sistema_Rediseño SHALL mostrar cada noticia en una card con imagen h-48, badge de categoría posicionado absolute, fecha, título con hover color change, y animación ScrollReveal escalonada.

3. WHEN el usuario visualiza la sección de estadísticas, THE Sistema_Rediseño SHALL mostrar 4 cards con números grandes en Color_Primario, labels descriptivos, y animación de entrada escalonada.

4. WHEN el usuario visualiza la sección de prensa, THE Sistema_Rediseño SHALL mostrar logos de medios con efecto grayscale hover, cita destacada en card con comillas, y fondo beige.

5. WHEN el usuario visualiza el CTA de Instagram, THE Sistema_Rediseño SHALL mostrar un botón redondeado con icono, hover effect, y mensaje invitando a seguir la cuenta.

---

### Requirement 10: Página de Contacto Rediseñada

**User Story:** As a visitante que quiere contactar a iKiwi, I want ver las opciones de contacto de forma clara y accesible, so that pueda comunicarme fácilmente con la empresa.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Contacto, THE Sistema_Rediseño SHALL mostrar un Hero_Section con fondo verde/imagen, título "¿LISTO PARA PROBAR EL MEJOR KIWI?" animado, y subtítulo descriptivo.

2. WHEN el usuario visualiza las opciones de contacto, THE Sistema_Rediseño SHALL mostrar 3 cards principales (Dónde Comprar, Empresas B2B, Contactanos) con iconos grandes en contenedores con gradiente, hover effect (-translate-y-2), y animación ScrollReveal escalonada.

3. WHEN el usuario visualiza los botones de WhatsApp y Email, THE Sistema_Rediseño SHALL mostrar botones con iconos, colores distintivos (verde WhatsApp, blanco/transparente Email), y hover effects.

4. WHEN el usuario visualiza el formulario de contacto, THE Sistema_Rediseño SHALL mostrar inputs con bordes redondeados, focus ring en Color_Primario, labels claros, y botón de envío redondeado.

5. WHEN el usuario visualiza el mapa, THE Sistema_Rediseño SHALL mostrar el iframe de Google Maps en un contenedor con bordes redondeados, información de ubicación debajo, y botón para abrir en Google Maps.

6. WHEN el usuario visualiza las certificaciones, THE Sistema_Rediseño SHALL mostrar badges de certificación en fila con fondo blur, iconos, y nombres de certificación.

---

### Requirement 11: Página de Trabaja con Nosotros Rediseñada

**User Story:** As a persona interesada en trabajar en iKiwi, I want ver las oportunidades laborales de forma atractiva y profesional, so that pueda considerar postularme.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página de Trabaja con Nosotros, THE Sistema_Rediseño SHALL mostrar un Hero_Section con imagen de equipo trabajando con efecto parallax, título "SUMATE AL EQUIPO" animado, estadísticas flotantes (90+ empleados, 270 hectáreas, 19 años).

2. WHEN el usuario visualiza las áreas de trabajo, THE Sistema_Rediseño SHALL mostrar 3 cards (Campo, Empaquetadora, Administrativo) con iconos grandes, lista de tareas con bullets verdes, temporada destacada, y animación ScrollReveal escalonada.

3. WHEN el usuario visualiza los beneficios de trabajar en iKiwi, THE Sistema_Rediseño SHALL mostrar cada beneficio en una card con icono, título, descripción, y hover effect sutil.

4. WHEN el usuario visualiza el formulario de postulación, THE Sistema_Rediseño SHALL mostrar inputs con bordes redondeados, selector de área de interés, campo de archivo para CV, y botón de envío redondeado con hover effect.

5. WHEN el usuario visualiza el CTA final, THE Sistema_Rediseño SHALL mostrar un contenedor con fondo verde suave, icono de kiwi, mensaje de contacto, y botones de email e Instagram.

---

### Requirement 12: Componentes Reutilizables

**User Story:** As a desarrollador, I want tener componentes reutilizables para el rediseño, so that pueda mantener consistencia y eficiencia en el código.

#### Acceptance Criteria

1. WHEN se necesita un Hero_Section en cualquier página, THE Sistema_Rediseño SHALL proveer un componente PageHero reutilizable que acepte props para título, subtítulo, badge, imagen de fondo, y variante de color.

2. WHEN se necesita una sección de estadísticas, THE Sistema_Rediseño SHALL proveer un componente StatsSection reutilizable que acepte un array de stats con valor, label, y descripción opcional.

3. WHEN se necesita un grid de cards, THE Sistema_Rediseño SHALL proveer un componente AnimatedCardGrid reutilizable que aplique automáticamente ScrollReveal con delays escalonados.

4. WHEN se necesita una sección con fondo de color, THE Sistema_Rediseño SHALL proveer un componente ColoredSection reutilizable que acepte variante de color (green, cream, beige) y aplique transiciones automáticas.

5. WHEN se necesita un CTA al final de una página, THE Sistema_Rediseño SHALL proveer un componente PageCTA reutilizable que acepte título, descripción, botones, y variante de estilo.

---

### Requirement 13: Responsive Design

**User Story:** As a visitante usando dispositivo móvil, I want que todas las páginas se vean correctamente en mi pantalla, so that pueda navegar cómodamente desde cualquier dispositivo.

#### Acceptance Criteria

1. WHEN el usuario visualiza cualquier Página_Interna en móvil (< 768px), THE Sistema_Rediseño SHALL ajustar los títulos a tamaños menores (text-4xl en lugar de text-6xl) manteniendo la legibilidad.

2. WHEN el usuario visualiza grids de cards en móvil, THE Sistema_Rediseño SHALL mostrar las cards en una sola columna o máximo 2 columnas según el contenido.

3. WHEN el usuario visualiza Hero_Sections en móvil, THE Sistema_Rediseño SHALL ajustar el padding (py-16 en lugar de py-32) y ocultar elementos decorativos que no aporten valor en pantallas pequeñas.

4. WHEN el usuario visualiza imágenes parallax en móvil, THE Sistema_Rediseño SHALL desactivar o reducir el efecto parallax para mejorar el rendimiento.

5. WHEN el usuario visualiza formularios en móvil, THE Sistema_Rediseño SHALL mostrar los campos en una sola columna con espaciado adecuado para touch.

---

### Requirement 14: Performance y Accesibilidad

**User Story:** As a visitante con conexión lenta o necesidades de accesibilidad, I want que las páginas carguen rápido y sean accesibles, so that pueda navegar sin problemas.

#### Acceptance Criteria

1. WHEN el usuario tiene preferencia de movimiento reducido (prefers-reduced-motion), THE Sistema_Rediseño SHALL desactivar las animaciones GSAP y mostrar el contenido estáticamente.

2. WHEN el usuario navega con teclado, THE Sistema_Rediseño SHALL mantener el focus visible en todos los elementos interactivos con un outline claro.

3. WHEN el usuario usa lector de pantalla, THE Sistema_Rediseño SHALL proveer textos alternativos descriptivos para todas las imágenes y elementos visuales.

4. WHILE las animaciones se ejecutan, THE Sistema_Rediseño SHALL mantener el contenido visible (visibility: visible) una vez que la animación de entrada se complete.

5. WHEN el usuario carga una página, THE Sistema_Rediseño SHALL priorizar la carga del contenido visible (above the fold) antes de cargar animaciones y elementos decorativos.
