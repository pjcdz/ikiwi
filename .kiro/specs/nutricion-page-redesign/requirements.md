# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño completo de la página `/nutricion` de Ikiwi, aplicando la misma filosofía de diseño inmersivo y storytelling implementada exitosamente en el home. La página de nutrición debe transformarse de una presentación estática de datos nutricionales a una experiencia narrativa que cuente la historia del kiwi como superalimento, utilizando animaciones GSAP, transiciones fluidas, tipografía expresiva y un diseño visual que evoque la frescura y vitalidad del producto.

## Glossary

- **Sistema_Nutricion**: El conjunto de componentes y secciones que conforman la página `/nutricion` de Ikiwi
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll
- **AnimatedTitle**: Componente que anima títulos con efectos de palabras o caracteres
- **SectionTransition**: Componente que crea transiciones suaves entre secciones (wave, organic, gradient)
- **ParallaxImage**: Componente que aplica efecto parallax a imágenes durante el scroll
- **GSAP**: GreenSock Animation Platform, librería de animaciones utilizada en el proyecto
- **Storytelling**: Técnica narrativa que guía al usuario a través de una historia visual
- **Hero Section**: Sección principal de entrada que captura la atención del usuario
- **ColoredSection**: Componente wrapper para secciones con fondos de color específicos

## Requirements

### Requirement 1: Hero Section Inmersivo

**User Story:** Como visitante, quiero ser recibido por una sección hero impactante que comunique inmediatamente el valor nutricional del kiwi, para sentirme motivado a explorar más.

#### Acceptance Criteria

1. WHEN el usuario carga la página de nutrición, THE Sistema_Nutricion SHALL mostrar un hero de pantalla completa con fondo verde (#3f7528) y elementos decorativos animados (blurs, gradientes) que aparezcan con animación de entrada en menos de 1 segundo.

2. THE Sistema_Nutricion SHALL mostrar el título principal "1 KIWI = 1 KILO DE LIMONES" utilizando el componente AnimatedTitle con animación de palabras y tipografía Playfair Display en tamaño responsivo (4xl a 7xl).

3. THE Sistema_Nutricion SHALL incluir un badge superior con tracking de letras expandido (0.3em) y texto en lime-300 que indique "NUTRICIÓN & SALUD".

4. THE Sistema_Nutricion SHALL implementar una transición wave hacia la siguiente sección utilizando el componente SectionTransition con altura de 100px.

5. WHEN el usuario hace scroll desde el hero, THE Sistema_Nutricion SHALL aplicar un efecto parallax al contenido que lo desplace suavemente hacia arriba con opacidad decreciente.

### Requirement 2: Sección de Comparación Visual de Vitamina C

**User Story:** Como visitante interesado en nutrición, quiero ver una comparación visual clara del contenido de vitamina C del kiwi versus otras frutas, para entender su superioridad nutricional.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL mostrar una sección de comparación con fondo claro (#faf8f5) que incluya barras de progreso animadas para cada fruta comparada.

2. WHEN las barras de progreso entran en viewport, THE Sistema_Nutricion SHALL animar el ancho de cada barra desde 0% hasta su valor final con una duración de 700ms y easing suave.

3. THE Sistema_Nutricion SHALL destacar visualmente la barra del kiwi con un gradiente verde (#3f7528 a lime-500) mientras las demás frutas usan colores neutros (gray-300).

4. THE Sistema_Nutricion SHALL incluir iconos emoji (🥝, 🍊, 🍓, 🍋, 🍎) de tamaño 3xl junto a cada fruta para identificación visual inmediata.

5. THE Sistema_Nutricion SHALL mostrar el valor exacto en mg junto a cada barra de progreso con tipografía semibold en gray-500.

### Requirement 3: Grid de Beneficios con Microinteracciones

**User Story:** Como visitante, quiero explorar los beneficios del kiwi de forma interactiva y visualmente atractiva, para comprender cómo puede mejorar mi salud.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL mostrar un grid de 6 beneficios (Sistema Inmunológico, Digestión, Cardiovascular, Sueño, Visión, Huesos) en layout responsivo de 1/2/3 columnas.

2. WHEN el usuario hace hover sobre una tarjeta de beneficio, THE Sistema_Nutricion SHALL aplicar una transformación de elevación (-translate-y-2), aumento de sombra (shadow-xl a shadow-2xl) y escala del icono (scale-110) con transición de 300ms.

3. THE Sistema_Nutricion SHALL mostrar cada beneficio con un icono en contenedor con gradiente de color único, título en font-bold, descripción en gray-600 y detalle adicional en verde (#3f7528).

4. THE Sistema_Nutricion SHALL animar la entrada de cada tarjeta con ScrollReveal usando animación fadeUp y delay escalonado de 0.1s entre tarjetas.

5. THE Sistema_Nutricion SHALL utilizar el componente ColoredSection con backgroundColor="beige" y transición wave hacia la siguiente sección.

### Requirement 4: Tabla Nutricional Estilizada

**User Story:** Como visitante que busca información detallada, quiero ver los datos nutricionales exactos del kiwi en un formato elegante y fácil de leer.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL mostrar una tarjeta centrada con máximo ancho de 400px conteniendo la información nutricional por 100g de kiwi verde.

2. THE Sistema_Nutricion SHALL incluir un icono de kiwi (🥝) de tamaño 4xl centrado en la parte superior de la tarjeta.

3. THE Sistema_Nutricion SHALL listar los nutrientes (Calorías, Vitamina C, Fibra, Potasio, Vitamina K, Vitamina E) con valores alineados a la derecha en color verde (#3f7528) y font-semibold.

4. THE Sistema_Nutricion SHALL separar cada fila de nutriente con un borde inferior sutil (border-gray-100) excepto la última fila.

5. THE Sistema_Nutricion SHALL aplicar animación ScrollReveal fadeUp a toda la tarjeta con sombra lg y bordes redondeados 3xl.

### Requirement 5: Sección Destacada de Actinidina

**User Story:** Como visitante curioso, quiero aprender sobre la actinidina, la enzima única del kiwi, de una manera visualmente memorable.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL mostrar una sección de dos columnas (grid md:grid-cols-2) con contenido explicativo a la izquierda y lista de beneficios a la derecha.

2. THE Sistema_Nutricion SHALL incluir un icono de ADN (🧬) de tamaño 5xl como elemento visual principal.

3. THE Sistema_Nutricion SHALL animar la columna izquierda con ScrollReveal slideRight y la columna derecha con slideLeft para crear efecto de convergencia.

4. THE Sistema_Nutricion SHALL mostrar los beneficios de la actinidina en una tarjeta blanca con checkmarks verdes (✓) y texto en gray-600.

5. THE Sistema_Nutricion SHALL utilizar ColoredSection con backgroundColor="greenLight" para diferenciar visualmente esta sección.

### Requirement 6: Comparación Kiwi Verde vs Amarillo

**User Story:** Como visitante, quiero entender las diferencias nutricionales entre el kiwi verde y amarillo, para elegir el que mejor se adapte a mis necesidades.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL mostrar dos tarjetas lado a lado (grid md:grid-cols-2) con bordes de color distintivo: verde (#3f7528/30) para Hayward y amber (amber-400/30) para Jintao.

2. THE Sistema_Nutricion SHALL incluir imágenes de producto (/product-kiwi-verde.png, /product-kiwi-amarillo.png) de 96x96px centradas en cada tarjeta.

3. THE Sistema_Nutricion SHALL destacar los valores superiores de cada variedad con color verde o amber y emoji de flecha hacia arriba (⬆️).

4. THE Sistema_Nutricion SHALL animar la tarjeta izquierda con slideRight y la derecha con slideLeft para efecto de entrada desde los lados.

5. THE Sistema_Nutricion SHALL mostrar comparación de: Vitamina C, Fibra, Actinidina y Sabor con valores específicos y unidades.

### Requirement 7: Sección de FAQs Interactiva

**User Story:** Como visitante con preguntas, quiero encontrar respuestas a las dudas más comunes sobre el kiwi en un formato expandible y fácil de navegar.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL implementar un acordeón (Accordion de shadcn/ui) con 5 preguntas frecuentes sobre el consumo de kiwi.

2. WHEN el usuario hace clic en una pregunta, THE Sistema_Nutricion SHALL expandir suavemente la respuesta con animación de altura y mostrar solo una respuesta a la vez (type="single" collapsible).

3. THE Sistema_Nutricion SHALL estilizar el acordeón con fondo blanco, bordes redondeados 2xl, sombra lg y separadores sutiles entre items.

4. THE Sistema_Nutricion SHALL aplicar hover state (bg-gray-50) a los triggers del acordeón con tipografía font-semibold en gray-900.

5. THE Sistema_Nutricion SHALL utilizar ColoredSection con backgroundColor="beige" y transición wave hacia el CTA final con toColor="#3f7528".

### Requirement 8: CTA Final Impactante

**User Story:** Como visitante convencido de los beneficios del kiwi, quiero tener opciones claras para continuar mi journey, ya sea viendo recetas o encontrando dónde comprar.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL mostrar un CTA final utilizando el componente PageCTA con variant="green" (fondo verde #3f7528).

2. THE Sistema_Nutricion SHALL incluir un icono de kiwi (🥝), título "Incorpora el Kiwi a Tu Dieta" y descripción persuasiva.

3. THE Sistema_Nutricion SHALL mostrar dos botones: primario "VER RECETAS" (href="/recetas") y secundario "DÓNDE COMPRAR" (href="/contacto").

4. THE Sistema_Nutricion SHALL aplicar animaciones de entrada a todos los elementos del CTA con ScrollReveal fadeUp.

5. THE Sistema_Nutricion SHALL asegurar que los botones tengan estados hover con scale y shadow transitions de 300ms.

### Requirement 9: Consistencia Visual con el Home

**User Story:** Como visitante que navega desde el home, quiero que la página de nutrición mantenga la misma calidad visual y fluidez de animaciones, para una experiencia coherente.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL utilizar exclusivamente la paleta de colores definida: #3f7528 (verde principal), #faf8f5 (fondo claro), #f5f0e8 (beige), lime-300/400 (acentos).

2. THE Sistema_Nutricion SHALL aplicar la tipografía Playfair Display para todos los títulos principales con font-black y tamaños responsivos.

3. THE Sistema_Nutricion SHALL implementar transiciones entre secciones usando SectionTransition con variantes wave, organic o gradient según corresponda.

4. THE Sistema_Nutricion SHALL mantener espaciado consistente de py-24 md:py-32 entre secciones principales.

5. THE Sistema_Nutricion SHALL asegurar que todas las animaciones respeten prefers-reduced-motion para accesibilidad.

### Requirement 10: Optimización de Performance

**User Story:** Como visitante con conexión variable, quiero que la página cargue rápidamente y las animaciones sean fluidas, para una experiencia sin frustraciones.

#### Acceptance Criteria

1. THE Sistema_Nutricion SHALL lazy-load todas las imágenes utilizando el componente Image de Next.js con sizes apropiados.

2. THE Sistema_Nutricion SHALL registrar GSAP plugins (ScrollTrigger) solo en el cliente usando "use client" directive.

3. THE Sistema_Nutricion SHALL limpiar todas las animaciones y ScrollTriggers en el cleanup de useEffect para evitar memory leaks.

4. THE Sistema_Nutricion SHALL utilizar will-change y transform para animaciones que requieran GPU acceleration.

5. THE Sistema_Nutricion SHALL mantener un Largest Contentful Paint (LCP) menor a 2.5 segundos en conexiones 4G.
