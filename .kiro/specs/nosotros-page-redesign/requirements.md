# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño premium de la página /nosotros de iKiwi, aplicando el sistema de diseño storytelling implementado exitosamente en el home. El objetivo es crear una experiencia inmersiva que cuente la historia de iKiwi de forma emotiva, visual y memorable, manteniendo la coherencia con el resto del sitio.

## Glossary

- **Sistema_Rediseño**: El sistema completo de rediseño que incluye componentes de animación, patrones visuales y estilos consistentes
- **AnimatedTitle**: Componente de animación para títulos con efectos de entrada por caracteres, palabras o líneas
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll con diferentes efectos (fadeUp, slideLeft, slideRight, scale, stagger)
- **ParallaxImage**: Componente de imagen con efecto parallax al hacer scroll
- **SectionTransition**: Componente de transición visual entre secciones (wave, organic, gradient)
- **Hero_Section**: Sección principal de la página con título grande, subtítulo y elementos visuales destacados
- **GSAP**: Librería de animación JavaScript utilizada para las animaciones del sitio
- **Playfair_Display**: Tipografía serif utilizada para títulos principales
- **Color_Primario**: Verde iKiwi (#3f7528)
- **Background_Cream**: Color de fondo crema (#faf8f5)
- **Background_Beige**: Color de fondo beige (#f5f0e8)
- **Terroir**: Características geográficas y climáticas únicas de la región Mar y Sierras
- **Timeline**: Línea de tiempo visual que muestra la historia de iKiwi

## Requirements

### Requirement 1: Hero Section Inmersivo

**User Story:** As a visitante de la página Nosotros, I want ver una introducción visual impactante que me sumerja en la historia de iKiwi, so that sienta una conexión emocional con la marca desde el primer momento.

#### Acceptance Criteria

1. WHEN el usuario carga la página de Nosotros, THE Sistema_Rediseño SHALL mostrar un Hero_Section de altura completa (min-h-screen) con imagen de fondo de los campos de kiwi al atardecer y overlay gradiente verde oscuro.

2. WHEN el usuario visualiza el Hero_Section, THE Sistema_Rediseño SHALL mostrar un badge animado "NUESTRA HISTORIA" con fondo blur, borde sutil y punto verde pulsante.

3. WHEN el usuario visualiza el título principal, THE Sistema_Rediseño SHALL renderizar "LA MAYOR PRODUCTORA DE KIWI DE ARGENTINA" usando tipografía Playfair_Display con tamaños responsivos (text-4xl a text-8xl) y colores blanco/lime-300.

4. WHEN el usuario visualiza las estadísticas del hero, THE Sistema_Rediseño SHALL mostrar 4 cards con blur (270+ Ha, 90+ Emp, 4 Países, 2006) con animación de contador GSAP y hover effects.

5. WHEN el usuario hace scroll desde el hero, THE Sistema_Rediseño SHALL aplicar efecto parallax al contenido (y: 150, opacity: 0) y mostrar indicador de scroll animado.

6. WHEN el usuario visualiza el final del hero, THE Sistema_Rediseño SHALL renderizar SectionTransition wave hacia la siguiente sección verde.

---

### Requirement 2: Sección Terroir Mar y Sierras

**User Story:** As a visitante interesado en la calidad, I want entender qué hace único al terroir de Mar y Sierras, so that pueda apreciar por qué los kiwis de iKiwi son excepcionales.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Terroir, THE Sistema_Rediseño SHALL mostrar un fondo verde (#3f7528) con decoraciones blur (lime-400/20, white/10) en las esquinas.

2. WHEN el usuario visualiza el título de Terroir, THE Sistema_Rediseño SHALL mostrar badge "EL TERROIR" en lime-300 y título "MAR Y SIERRAS" con AnimatedTitle animation="words".

3. WHEN el usuario visualiza las características del terroir, THE Sistema_Rediseño SHALL mostrar grid 2x2 con 4 cards (Ubicación, Suelos, Clima, Calidad) con iconos grandes, badges de highlight y hover effects (-translate-y-2).

4. WHEN el usuario interactúa con las cards de terroir, THE Sistema_Rediseño SHALL aplicar transición de fondo (bg-white/10 → bg-white/15) y scale en iconos (group-hover:scale-110).

5. WHEN el usuario visualiza el final de la sección Terroir, THE Sistema_Rediseño SHALL renderizar SectionTransition wave hacia fondo cream (#faf8f5).

---

### Requirement 3: Sección Origen e Historia

**User Story:** As a visitante curioso, I want conocer cómo comenzó iKiwi, so that pueda conectar con la historia humana detrás de la empresa.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Origen, THE Sistema_Rediseño SHALL mostrar layout de 2 columnas (texto + imagen) con textura de fondo sutil.

2. WHEN el usuario visualiza el contenido de texto, THE Sistema_Rediseño SHALL mostrar badge "EL ORIGEN", título animado "De una Idea a un Imperio del Kiwi", y párrafos con highlights en verde.

3. WHEN el usuario visualiza la cita del fundador, THE Sistema_Rediseño SHALL mostrar card con borde izquierdo verde, texto en itálica, avatar con iniciales "LF" y nombre "Luis Franch - Fundador de iKiwi".

4. WHEN el usuario visualiza la imagen, THE Sistema_Rediseño SHALL mostrar ParallaxImage con badge flotante "2006" posicionado absolute y overlay de stats (270+ Ha, 90+ Emp, 4 Países).

5. WHEN el usuario hace scroll, THE Sistema_Rediseño SHALL aplicar ScrollReveal slideRight al texto y slideLeft a la imagen con delays escalonados.

---

### Requirement 4: Sección de Variedades

**User Story:** As a visitante interesado en los productos, I want ver las variedades de kiwi que produce iKiwi, so that pueda conocer la diversidad de la oferta.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Variedades, THE Sistema_Rediseño SHALL mostrar fondo beige (#f5f0e8) con título "Tres Colores, Un Sabor Excepcional" y subtítulo sobre el convenio con Bologna.

2. WHEN el usuario visualiza las cards de variedades, THE Sistema_Rediseño SHALL mostrar 3 cards (Verde/Hayward, Amarillo/Jintao, Rojo/Experimental) con gradientes de color, emojis grandes y border-bottom de color.

3. WHEN el usuario interactúa con las cards, THE Sistema_Rediseño SHALL aplicar hover effects (scale-125 en emoji, -translate-y-3 en card, shine effect) y link a /productos.

4. WHEN el usuario visualiza cada card, THE Sistema_Rediseño SHALL mostrar Badge de variedad, stats de Vitamina C, descripción y arrow indicator animado.

---

### Requirement 5: Timeline de Historia

**User Story:** As a visitante interesado en la trayectoria, I want ver los hitos importantes de iKiwi en una línea de tiempo visual, so that pueda apreciar el crecimiento y logros de la empresa.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Timeline, THE Sistema_Rediseño SHALL mostrar título "19 Años de Historia" con AnimatedTitle y subtítulo descriptivo.

2. WHEN el usuario visualiza la línea de tiempo, THE Sistema_Rediseño SHALL mostrar línea vertical central con gradiente verde y animación GSAP (scaleY: 0 → 1) sincronizada con scroll.

3. WHEN el usuario visualiza los eventos, THE Sistema_Rediseño SHALL mostrar 6 hitos (2006, 2010, 2015, 2019, 2022, 2023) alternando izquierda/derecha con cards blancas, año destacado y emoji decorativo.

4. WHEN el usuario hace scroll, THE Sistema_Rediseño SHALL aplicar ScrollReveal alternado (slideRight/slideLeft) con delays escalonados y dots verdes en la línea central.

5. WHEN el usuario interactúa con las cards del timeline, THE Sistema_Rediseño SHALL aplicar hover effects (-translate-y-2, shadow-2xl) y ring verde en los dots.

---

### Requirement 6: Sección de Valores

**User Story:** As a visitante que evalúa la empresa, I want conocer los valores de iKiwi, so that pueda determinar si se alinean con mis propios valores.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Valores, THE Sistema_Rediseño SHALL usar ColoredSection con backgroundColor="beige" y transition="wave".

2. WHEN el usuario visualiza las cards de valores, THE Sistema_Rediseño SHALL mostrar grid 4 columnas con 4 valores (Sustentabilidad, Calidad Premium, Comunidad, Innovación) con iconos en contenedores gradiente.

3. WHEN el usuario interactúa con las cards, THE Sistema_Rediseño SHALL aplicar hover effects (-translate-y-3, shadow-2xl, scale-110 en icono).

4. WHEN el usuario hace scroll, THE Sistema_Rediseño SHALL aplicar ScrollReveal fadeUp con delays escalonados (index * 0.1).

---

### Requirement 7: Sección Empaquetadora

**User Story:** As a visitante interesado en el proceso, I want ver las instalaciones de empaque de iKiwi, so that pueda apreciar la infraestructura y capacidad de la empresa.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Empaquetadora, THE Sistema_Rediseño SHALL renderizar el componente Empaquetadora existente con su diseño premium.

2. WHEN el usuario visualiza el contenido, THE Sistema_Rediseño SHALL mostrar información sobre la planta de empaque con imágenes y estadísticas.

---

### Requirement 8: Sección de Certificaciones

**User Story:** As a visitante que busca garantías de calidad, I want ver las certificaciones de iKiwi, so that pueda confiar en la calidad y origen de los productos.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Certificaciones, THE Sistema_Rediseño SHALL renderizar el componente Certifications con variant="full" y showTitle={true}.

2. WHEN el usuario visualiza las certificaciones, THE Sistema_Rediseño SHALL mostrar IG Mar y Sierras, GlobalGAP, USDA Organic y Export UE con hover effects.

---

### Requirement 9: Sección de Sustentabilidad

**User Story:** As a visitante consciente del medio ambiente, I want conocer las prácticas sustentables de iKiwi, so that pueda apoyar una empresa responsable.

#### Acceptance Criteria

1. WHEN el usuario visualiza la sección Sustentabilidad, THE Sistema_Rediseño SHALL mostrar fondo verde (#3f7528) con decoraciones blur y emoji 🌍 animado con scale.

2. WHEN el usuario visualiza el contenido, THE Sistema_Rediseño SHALL mostrar título "Compromiso con la Sustentabilidad" con AnimatedTitle y descripción sobre producción orgánica.

3. WHEN el usuario visualiza las prácticas, THE Sistema_Rediseño SHALL mostrar grid 3 columnas con cards (Producción Orgánica, Gestión del Agua, Kilómetro Cero) con iconos y hover effects.

4. WHEN el usuario interactúa con las cards, THE Sistema_Rediseño SHALL aplicar transición de fondo (bg-white/10 → bg-white/15) y -translate-y-2.

---

### Requirement 10: CTA Final

**User Story:** As a visitante que terminó de leer, I want tener opciones claras de siguiente paso, so that pueda continuar explorando o contactar a iKiwi.

#### Acceptance Criteria

1. WHEN el usuario visualiza el CTA final, THE Sistema_Rediseño SHALL mostrar sección con fondo verde suave, icono de kiwi y mensaje invitando a conocer los productos.

2. WHEN el usuario visualiza los botones, THE Sistema_Rediseño SHALL mostrar botones "VER PRODUCTOS" y "CONTACTANOS" con estilo rounded-full y hover effects.

---

### Requirement 11: Animaciones y Transiciones

**User Story:** As a visitante navegando la página, I want que las transiciones entre secciones sean fluidas y las animaciones suaves, so that la experiencia sea inmersiva y profesional.

#### Acceptance Criteria

1. WHEN el usuario hace scroll entre secciones, THE Sistema_Rediseño SHALL aplicar SectionTransition (wave/organic) entre cada cambio de color de fondo.

2. WHEN el usuario tiene preferencia de movimiento reducido, THE Sistema_Rediseño SHALL desactivar animaciones GSAP y mostrar contenido estáticamente.

3. WHILE las animaciones se ejecutan, THE Sistema_Rediseño SHALL mantener el contenido visible una vez completada la animación de entrada.

---

### Requirement 12: Responsive Design

**User Story:** As a visitante en dispositivo móvil, I want que la página se vea correctamente en mi pantalla, so that pueda navegar cómodamente.

#### Acceptance Criteria

1. WHEN el usuario visualiza la página en móvil (< 768px), THE Sistema_Rediseño SHALL ajustar títulos a tamaños menores (text-4xl en lugar de text-8xl).

2. WHEN el usuario visualiza grids en móvil, THE Sistema_Rediseño SHALL mostrar cards en 1-2 columnas según el contenido.

3. WHEN el usuario visualiza el timeline en móvil, THE Sistema_Rediseño SHALL mostrar todos los eventos alineados a la izquierda con línea vertical en el lado izquierdo.

4. WHEN el usuario visualiza el hero en móvil, THE Sistema_Rediseño SHALL ajustar padding y ocultar decoraciones que no aporten valor.
