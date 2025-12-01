# Requirements Document

## Introduction

Este documento define los requisitos para rediseñar la página de Productos (/productos) de iKiwi, aplicando el sistema de diseño premium y las técnicas de storytelling inmersivo implementadas exitosamente en el homepage. El objetivo es transformar la página de productos en una experiencia visual excepcional que cuente la historia de cada variedad de kiwi, manteniendo la coherencia con la estética "Pioneer-inspired" del sitio.

## Glossary

- **Sistema_Productos**: El conjunto de componentes, animaciones y estilos que conforman la página de productos de iKiwi
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll
- **AnimatedTitle**: Componente de tipografía con animación de revelado por palabras o caracteres
- **SectionTransition**: Componente que crea transiciones visuales fluidas entre secciones
- **ParallaxImage**: Componente de imagen con efecto parallax basado en scroll
- **GSAP**: Librería de animación utilizada para efectos avanzados
- **Storytelling_Visual**: Técnica de diseño que guía al usuario a través de una narrativa visual
- **Hero_Inmersivo**: Sección inicial de alto impacto visual con animaciones y efectos
- **Card_Interactiva**: Tarjeta de producto con efectos hover y transiciones elaboradas

## Requirements

### Requirement 1: Hero Section Inmersivo

**User Story:** Como visitante, quiero ver un hero impactante al entrar a la página de productos, para sentir inmediatamente la calidad premium de los kiwis de iKiwi.

#### Acceptance Criteria

1. WHEN el usuario carga la página de productos, THE Sistema_Productos SHALL mostrar un hero de altura completa (min-h-[70vh]) con imagen de fondo del huerto y overlay gradiente verde (#3f7528).

2. WHEN el hero se renderiza, THE Sistema_Productos SHALL animar el título "NUESTROS KIWIS" usando AnimatedTitle con animación por caracteres y efecto 3D de rotación.

3. WHILE el usuario hace scroll en el hero, THE Sistema_Productos SHALL aplicar efecto parallax al contenido con desplazamiento suave hacia arriba y reducción de opacidad.

4. THE Sistema_Productos SHALL mostrar un badge animado superior con texto "VARIEDADES PREMIUM CERTIFICADAS" y punto verde pulsante.

5. THE Sistema_Productos SHALL incluir un indicador de scroll animado en la parte inferior del hero con texto "Explorá" y animación bounce.

### Requirement 2: Sección de Variedades con Cards Premium

**User Story:** Como visitante, quiero explorar las variedades de kiwi de forma interactiva y visualmente atractiva, para entender las diferencias y características de cada una.

#### Acceptance Criteria

1. WHEN el usuario llega a la sección de variedades, THE Sistema_Productos SHALL mostrar las 5 variedades (Verde Hayward, Gold Jingold, Rojo Red Passion, Orgánico Certificado, Baby Kiwi Kiwiberry) en cards con animación staggered de entrada.

2. WHEN el usuario hace hover sobre una card de variedad, THE Sistema_Productos SHALL aplicar transformación de elevación (-translate-y-4), aumento de sombra y escala de imagen (scale-110) con transición de 500ms.

3. THE Sistema_Productos SHALL mostrar cada card con gradiente de color único correspondiente a la variedad (verde para Hayward, dorado para Gold, rojo/verde para Red Passion, verde esmeralda para Orgánico, teal para Baby), badge de categoría y tagline descriptivo.

4. WHEN el usuario hace hover sobre el indicador "Ver más", THE Sistema_Productos SHALL animar la flecha con desplazamiento horizontal y cambio de gap.

5. THE Sistema_Productos SHALL aplicar ScrollReveal con delay incremental (0.15s por card) para crear efecto de cascada al aparecer.

### Requirement 3: Sección de Detalle de Variedad Expandida

**User Story:** Como visitante interesado en una variedad específica, quiero ver información detallada sin salir de la página, para tomar una decisión informada.

#### Acceptance Criteria

1. WHEN el usuario hace click en una card de variedad, THE Sistema_Productos SHALL expandir una sección de detalle con animación suave mostrando información completa de la variedad.

2. THE Sistema_Productos SHALL mostrar en el detalle expandido para cada variedad:
   - Kiwi Verde: Sabor dulce-ácido, textura jugosa, piel marrón con vellosidad, temporada Mayo-Octubre, 92.7mg Vitamina C, 3g Fibra, 312mg Potasio
   - Kiwi Gold: Sabor dulce tropical, textura suave y cremosa, piel lisa, temporada Mayo-Septiembre, 161mg Vitamina C, Brix 16-18°
   - Kiwi Rojo: Sabor dulce con notas a frutos rojos, pulpa verde con centro rojo, edición limitada, desarrollado con Universidad de Bolonia, alto en antocianinas
   - Kiwi Orgánico: Certificación Orgánico Argentina/USDA, cultivo sin agroquímicos, trazabilidad completa, exportación a Europa y USA
   - Baby Kiwi: Tamaño de uva grande, piel lisa y comestible, sabor intenso y dulce, ideal para snacks

3. WHILE la sección de detalle está expandida, THE Sistema_Productos SHALL mantener visible un botón de cierre y permitir cerrar haciendo click fuera del área.

4. THE Sistema_Productos SHALL mostrar los usos recomendados de cada variedad con iconos visuales (consumo fresco, smoothies, postres, ensaladas, exportación, etc.).

5. THE Sistema_Productos SHALL aplicar transición de altura y opacidad al expandir/contraer el detalle con duración de 400ms.

### Requirement 4: Sección de Certificaciones Mejorada

**User Story:** Como comprador consciente, quiero ver claramente las certificaciones de calidad de los kiwis, para confiar en la procedencia y calidad del producto.

#### Acceptance Criteria

1. THE Sistema_Productos SHALL mostrar las certificaciones (IG Mar y Sierras, GlobalGAP, UE Orgánica) en una sección con fondo diferenciado y efecto glassmorphism.

2. WHEN el usuario hace hover sobre un logo de certificación, THE Sistema_Productos SHALL aplicar efecto de escala (scale-110) y aumento de sombra con transición suave.

3. THE Sistema_Productos SHALL incluir un mensaje destacado "Primer kiwi argentino con Indicación Geográfica Mar y Sierras" con icono y fondo verde transparente.

4. THE Sistema_Productos SHALL animar la entrada de cada certificación con ScrollReveal y delay staggered.

### Requirement 5: Calendario de Temporada Interactivo

**User Story:** Como comprador, quiero saber cuándo está disponible el kiwi fresco, para planificar mis compras según la temporada.

#### Acceptance Criteria

1. THE Sistema_Productos SHALL mostrar un calendario visual de 12 meses con indicadores circulares para cada mes.

2. WHEN un mes está en temporada de cosecha (Mayo-Octubre), THE Sistema_Productos SHALL mostrar el indicador con fondo verde (#3f7528), texto blanco y sombra.

3. THE Sistema_Productos SHALL incluir una barra de progreso visual que muestre el período de disponibilidad con gradiente verde a lima.

4. WHEN el usuario hace hover sobre un mes, THE Sistema_Productos SHALL mostrar tooltip con el nombre completo del mes.

5. THE Sistema_Productos SHALL incluir mensaje informativo sobre disponibilidad todo el año gracias a cámaras de frío.

### Requirement 6: Sección de Comparación de Variedades

**User Story:** Como visitante indeciso, quiero comparar las variedades de kiwi lado a lado, para elegir la que mejor se adapte a mis preferencias.

#### Acceptance Criteria

1. THE Sistema_Productos SHALL incluir una sección de comparación interactiva que permita comparar las 5 variedades de kiwi.

2. THE Sistema_Productos SHALL mostrar comparación destacada Verde vs Gold vs Rojo con valores nutricionales:
   - Vitamina C: Verde 92.7mg, Gold 161mg (⬆️ más alto), Rojo Alto
   - Fibra: Verde 3g (⬆️), Gold 2g, Rojo 2.5g
   - Dulzura: Verde equilibrado, Gold muy dulce (Brix 16-18°), Rojo dulce con notas frutales
   - Acidez: Verde media, Gold baja, Rojo baja

3. WHEN el usuario hace hover sobre una card de comparación, THE Sistema_Productos SHALL aplicar borde de color correspondiente a la variedad (verde, dorado, rojo) con transición suave.

4. THE Sistema_Productos SHALL usar iconos y flechas (⬆️) para indicar qué variedad es superior en cada característica.

5. THE Sistema_Productos SHALL incluir nota sobre el Kiwi Rojo como "Exclusivo - Desarrollado con Universidad de Bolonia".

### Requirement 7: CTA Final Inmersivo

**User Story:** Como visitante interesado, quiero tener opciones claras de siguiente paso, para poder comprar o contactar fácilmente.

#### Acceptance Criteria

1. THE Sistema_Productos SHALL mostrar una sección CTA final con fondo verde (#3f7528) y efecto de imagen de fondo con overlay.

2. THE Sistema_Productos SHALL incluir dos botones de acción: "DÓNDE COMPRAR" (primario, blanco) y "CONTACTANOS" (secundario, outline).

3. WHEN el usuario hace hover sobre los botones, THE Sistema_Productos SHALL aplicar efecto de escala (scale-105) y cambio de sombra.

4. THE Sistema_Productos SHALL mostrar las certificaciones en miniatura en el footer del CTA como refuerzo de confianza.

5. THE Sistema_Productos SHALL aplicar SectionTransition tipo "wave" antes del CTA para crear continuidad visual.

### Requirement 8: Animaciones y Transiciones Fluidas

**User Story:** Como visitante, quiero que la navegación por la página sea fluida y visualmente placentera, para disfrutar la experiencia de explorar los productos.

#### Acceptance Criteria

1. THE Sistema_Productos SHALL aplicar smooth scrolling mediante Lenis en toda la página.

2. THE Sistema_Productos SHALL usar SectionTransition entre cada sección principal con variantes alternadas (wave, organic, gradient).

3. WHILE el usuario navega, THE Sistema_Productos SHALL mantener animaciones a 60fps sin degradación de rendimiento.

4. IF el usuario tiene preferencia de movimiento reducido activada, THEN THE Sistema_Productos SHALL desactivar animaciones complejas y mostrar contenido estático.

5. THE Sistema_Productos SHALL aplicar transiciones de color de fondo suaves entre secciones usando gradientes CSS.

### Requirement 9: Responsive Design Premium

**User Story:** Como usuario móvil, quiero que la página de productos se vea igual de impresionante en mi dispositivo, para tener la misma experiencia premium.

#### Acceptance Criteria

1. THE Sistema_Productos SHALL adaptar el grid de variedades a 1 columna en móvil, 2 en tablet y 4 en desktop.

2. THE Sistema_Productos SHALL reducir el tamaño de tipografía del hero proporcionalmente en dispositivos móviles manteniendo legibilidad.

3. THE Sistema_Productos SHALL ajustar el calendario de temporada para scroll horizontal en móvil con indicadores de swipe.

4. THE Sistema_Productos SHALL mantener todas las animaciones funcionales en móvil con duraciones reducidas para mejor rendimiento.

5. THE Sistema_Productos SHALL asegurar que los botones CTA tengan tamaño táctil mínimo de 44px en dispositivos móviles.
