# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño completo de la página "Trabajá con Nosotros" (/trabaja-con-nosotros) del sitio web de iKiwi, aplicando el sistema de diseño premium, animaciones inmersivas y estética storytelling implementados exitosamente en el home. El objetivo es transformar la página de carreras en una experiencia visual impactante que transmita la cultura de trabajo en el campo, la pasión por el kiwi y las oportunidades de crecimiento profesional, manteniendo coherencia con el nuevo diseño del sitio.

## Glossary

- **TrabajaConNosotrosPage**: Componente principal de la página de carreras ubicado en `/src/app/trabaja-con-nosotros/page.tsx`
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll
- **AnimatedTitle**: Componente que anima títulos palabra por palabra o carácter por carácter
- **SectionTransition**: Componente que crea transiciones suaves entre secciones con formas orgánicas (wave, organic)
- **GSAP**: Librería de animación utilizada para efectos complejos y scroll-triggered animations
- **ParallaxImage**: Componente que aplica efecto parallax a imágenes durante el scroll
- **VideoBackground**: Componente que renderiza video de fondo con overlay y controles opcionales
- **Design System**: Sistema de tokens de diseño (colores, espaciados, tipografías) definido para iKiwi
- **Hero Section**: Sección principal de entrada con impacto visual máximo
- **CTA**: Call to Action - elementos que invitan al usuario a realizar una acción
- **Work Areas**: Áreas de trabajo disponibles (Campo, Empaquetadora, Administrativo)

## Requirements

### Requirement 1: Hero Section Cinematográfico con Video

**User Story:** Como visitante interesado en trabajar en iKiwi, quiero ver un hero section impactante con video de fondo mostrando el trabajo en el campo, para sentir la experiencia de trabajar rodeado de naturaleza y entender la cultura de la empresa.

#### Acceptance Criteria

1. WHEN el usuario carga la página de trabaja-con-nosotros, THE TrabajaConNosotrosPage SHALL mostrar un hero section fullscreen con VideoBackground usando el video de los campos de kiwi (/video.mp4) con overlay gradiente verde (#3f7528).
2. WHEN el hero section se renderiza, THE TrabajaConNosotrosPage SHALL mostrar un badge superior animado con texto "OPORTUNIDADES LABORALES" en color lime-300 con tracking-[0.3em], uppercase y efecto de pulse en el indicador.
3. WHEN el hero section se renderiza, THE TrabajaConNosotrosPage SHALL mostrar el título principal "SUMATE AL EQUIPO" utilizando animación de caracteres individuales con GSAP (rotateX, stagger) similar al hero del home, con tipografía Playfair Display en tamaño responsivo (5xl a 9xl).
4. THE TrabajaConNosotrosPage SHALL mostrar un subtítulo animado "Más de 90 personas trabajando con pasión por el mejor kiwi de Argentina" con fade up y delay escalonado.
5. WHEN el usuario hace scroll, THE TrabajaConNosotrosPage SHALL aplicar efecto parallax al contenido del hero con GSAP ScrollTrigger, moviendo el contenido hacia arriba con fade out progresivo.
6. THE TrabajaConNosotrosPage SHALL incluir stats animados (90+ Empleados, 270 Hectáreas, 19 Años) en el hero con números grandes y labels descriptivos.
7. THE TrabajaConNosotrosPage SHALL incluir una SectionTransition con variante "wave" al final del hero que transicione hacia el color cream (#faf8f5).

### Requirement 2: Sección de Cultura y Valores

**User Story:** Como candidato potencial, quiero conocer la cultura y valores de iKiwi, para entender si es el lugar adecuado para desarrollar mi carrera.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar una sección de cultura con layout asimétrico: imagen parallax a un lado y contenido textual al otro.
2. THE TrabajaConNosotrosPage SHALL incluir una imagen grande con ParallaxImage mostrando trabajadores en el campo (/about-trabajadores.png) con bordes muy redondeados (rounded-3xl) y sombra dramática.
3. THE TrabajaConNosotrosPage SHALL mostrar título "Nuestra Cultura" con AnimatedTitle y subtítulo descriptivo sobre el ambiente de trabajo familiar y conexión con la naturaleza.
4. THE TrabajaConNosotrosPage SHALL incluir una lista de valores (Pasión por la tierra, Trabajo en equipo, Crecimiento continuo, Sustentabilidad) con iconos y animaciones staggered.
5. WHEN el usuario hace scroll, THE TrabajaConNosotrosPage SHALL revelar los elementos de cultura con ScrollReveal fadeUp y delays escalonados.

### Requirement 3: Áreas de Trabajo con Cards Premium

**User Story:** Como visitante, quiero ver claramente las diferentes áreas de trabajo disponibles en iKiwi, para identificar dónde podría encajar según mis habilidades e intereses.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar tres cards de áreas de trabajo (Campo, Empaquetadora, Administrativo) en un grid responsivo con diseño premium.
2. THE TrabajaConNosotrosPage SHALL diferenciar visualmente cada card con un icono grande animado, gradiente de fondo sutil y efectos de hover con elevación (-translate-y-3) y sombra aumentada.
3. THE TrabajaConNosotrosPage SHALL incluir en cada card: icono representativo (🌱, 📦, 💼), título con tipografía Playfair Display, descripción del área, lista de tareas principales con bullets verdes, y badge de temporada (Todo el año / Marzo a Octubre).
4. WHEN el usuario hace hover sobre una card, THE TrabajaConNosotrosPage SHALL aplicar transformación de escala sutil (scale-[1.02]), cambio de sombra y transición suave de 400ms con ease-out.
5. THE TrabajaConNosotrosPage SHALL aplicar animación ScrollReveal con stagger de 0.2s entre cada card para crear efecto de aparición secuencial cinematográfico.
6. THE TrabajaConNosotrosPage SHALL mostrar la sección sobre fondo beige (#f5f0e8) con SectionTransition wave desde la sección anterior.

### Requirement 4: Beneficios de Trabajar en iKiwi

**User Story:** Como candidato, quiero conocer los beneficios de trabajar en iKiwi, para evaluar la propuesta de valor como empleador.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar una sección de beneficios con fondo verde oscuro (#1a3311) creando contraste dramático.
2. THE TrabajaConNosotrosPage SHALL mostrar 6 beneficios (Ambiente Natural, Crecimiento, Equipo, Estabilidad, Producto Premium, Impacto Global) en un grid de 2x3 en desktop y 1 columna en mobile.
3. THE TrabajaConNosotrosPage SHALL estilizar cada beneficio con icono grande, título en blanco, descripción en white/70, y contenedor con fondo semi-transparente (white/5) y backdrop-blur.
4. WHEN los beneficios se renderizan, THE TrabajaConNosotrosPage SHALL aplicar animación ScrollReveal con stagger de 0.1s y efecto fadeUp para crear aparición fluida.
5. THE TrabajaConNosotrosPage SHALL incluir un título de sección "¿Por Qué Trabajar en iKiwi?" con AnimatedTitle en color blanco y subtítulo en lime-300.

### Requirement 5: Galería de Vida en iKiwi

**User Story:** Como visitante, quiero ver fotos reales del equipo y el ambiente de trabajo, para visualizarme como parte de la empresa.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar una galería de imágenes con layout masonry o grid asimétrico mostrando diferentes aspectos del trabajo.
2. THE TrabajaConNosotrosPage SHALL incluir al menos 4 imágenes: trabajo en campo, empaquetadora, equipo reunido, y paisaje de los campos.
3. THE TrabajaConNosotrosPage SHALL aplicar ParallaxImage a las imágenes con diferentes velocidades para crear profundidad visual.
4. WHEN el usuario hace hover sobre una imagen, THE TrabajaConNosotrosPage SHALL aplicar efecto de zoom sutil (scale-105) y overlay con información contextual.
5. THE TrabajaConNosotrosPage SHALL mostrar la galería sobre fondo cream (#faf8f5) con transiciones wave entre secciones.

### Requirement 6: Formulario de Postulación Premium

**User Story:** Como candidato interesado, quiero completar un formulario de postulación elegante y completo, para enviar mi CV y datos de contacto de manera profesional.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar un formulario de postulación en una sección destacada con fondo beige claro (#f5f0e8).
2. THE TrabajaConNosotrosPage SHALL incluir campos para: Nombre completo (requerido), Email (requerido), Teléfono (requerido), Área de Interés (select requerido con opciones Campo/Empaquetadora/Administrativo), Experiencia previa (textarea opcional), y Adjuntar CV (file input para PDF/DOC).
3. THE TrabajaConNosotrosPage SHALL estilizar todos los inputs con bordes redondeados (rounded-xl), padding generoso (px-5 py-4), focus ring en color primario (#3f7528), fondo blanco y transiciones suaves.
4. THE TrabajaConNosotrosPage SHALL mostrar el formulario dentro de una card blanca con bordes muy redondeados (rounded-3xl), padding amplio (p-8 md:p-12) y sombra elegante (shadow-xl).
5. THE TrabajaConNosotrosPage SHALL incluir un botón de envío con estilo pill (rounded-full), fondo verde primario (#3f7528), texto blanco, efecto hover con escala (scale-105) y sombra aumentada.
6. THE TrabajaConNosotrosPage SHALL mostrar título "Enviá Tu Postulación" con AnimatedTitle y subtítulo motivacional.
7. WHEN el formulario se renderiza, THE TrabajaConNosotrosPage SHALL aplicar animación ScrollReveal al contenedor completo.

### Requirement 7: Testimonios de Empleados

**User Story:** Como candidato, quiero leer testimonios de empleados actuales, para conocer la experiencia real de trabajar en iKiwi.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar una sección de testimonios con al menos 2-3 quotes de empleados.
2. THE TrabajaConNosotrosPage SHALL estilizar cada testimonio con comillas decorativas grandes, texto en itálica, nombre del empleado, cargo y años en la empresa.
3. THE TrabajaConNosotrosPage SHALL mostrar los testimonios en un layout de cards con fondo blanco, sombra suave y bordes redondeados.
4. WHEN los testimonios se renderizan, THE TrabajaConNosotrosPage SHALL aplicar animación ScrollReveal con stagger para aparición secuencial.
5. THE TrabajaConNosotrosPage SHALL incluir un indicador visual (avatar placeholder o icono) junto a cada testimonio.

### Requirement 8: CTA Final con Contacto de RRHH

**User Story:** Como visitante que completó el recorrido de la página, quiero ver una invitación clara a contactar al equipo de RRHH, para resolver dudas antes de postularme.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL mostrar una sección CTA final con fondo verde (#3f7528) y elementos decorativos de blur.
2. THE TrabajaConNosotrosPage SHALL incluir icono de kiwi (🥝), título "¿Tenés Dudas?", descripción invitando a contactar, y botones de acción.
3. THE TrabajaConNosotrosPage SHALL mostrar dos botones: Email de RRHH (rrhh@ikiwi.com.ar) y link a Instagram (@kiwi_argentino).
4. THE TrabajaConNosotrosPage SHALL aplicar SectionTransition wave antes de la sección CTA para crear transición suave desde la sección anterior.
5. WHEN el usuario hace click en los botones, THE TrabajaConNosotrosPage SHALL abrir el cliente de correo o Instagram en nueva pestaña respectivamente.

### Requirement 9: Animaciones y Transiciones Consistentes

**User Story:** Como visitante, quiero experimentar animaciones fluidas y transiciones suaves en toda la página, para tener una experiencia inmersiva coherente con el resto del sitio.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL utilizar GSAP con ScrollTrigger para animaciones de scroll en el hero section con efecto parallax.
2. THE TrabajaConNosotrosPage SHALL aplicar ScrollReveal con animación "fadeUp" a todos los elementos de contenido con delays escalonados apropiados (0.1s - 0.3s).
3. THE TrabajaConNosotrosPage SHALL utilizar AnimatedTitle con animación "words" para todos los títulos principales de sección.
4. THE TrabajaConNosotrosPage SHALL incluir SectionTransition entre cada cambio de color de fondo para crear flujo visual orgánico.
5. THE TrabajaConNosotrosPage SHALL respetar las preferencias de movimiento reducido del usuario mediante el hook useReducedMotion.
6. THE TrabajaConNosotrosPage SHALL implementar animación de caracteres en el título del hero similar al home usando GSAP con rotateX y stagger.

### Requirement 10: Diseño Responsivo

**User Story:** Como visitante en dispositivo móvil, quiero que la página de carreras se vea perfecta y sea fácil de usar, para poder explorar oportunidades y postularme desde cualquier dispositivo.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL adaptar el grid de áreas de trabajo de 3 columnas en desktop a 1 columna en mobile.
2. THE TrabajaConNosotrosPage SHALL adaptar el grid de beneficios de 3 columnas en desktop a 2 columnas en tablet y 1 columna en mobile.
3. THE TrabajaConNosotrosPage SHALL ajustar los tamaños de tipografía del hero de manera responsiva (text-5xl en mobile a text-9xl en desktop).
4. THE TrabajaConNosotrosPage SHALL mantener padding y espaciado apropiados en todas las resoluciones usando clases responsivas de Tailwind (py-16 md:py-24 lg:py-32).
5. THE TrabajaConNosotrosPage SHALL asegurar que todos los elementos interactivos tengan áreas de toque mínimas de 44x44px en dispositivos táctiles.
6. THE TrabajaConNosotrosPage SHALL adaptar el layout de la galería de imágenes para funcionar correctamente en todas las resoluciones.

### Requirement 11: Accesibilidad

**User Story:** Como visitante con necesidades de accesibilidad, quiero poder navegar y usar la página de carreras con tecnologías asistivas, para poder explorar oportunidades laborales sin barreras.

#### Acceptance Criteria

1. THE TrabajaConNosotrosPage SHALL incluir labels asociados correctamente a todos los campos del formulario mediante atributos htmlFor e id.
2. THE TrabajaConNosotrosPage SHALL incluir atributos aria-label en todos los links y botones que solo contienen iconos.
3. THE TrabajaConNosotrosPage SHALL mantener contraste de color mínimo de 4.5:1 entre texto y fondo en todos los elementos.
4. THE TrabajaConNosotrosPage SHALL incluir textos alternativos descriptivos en todas las imágenes.
5. THE TrabajaConNosotrosPage SHALL asegurar que todos los elementos interactivos sean accesibles mediante navegación por teclado con indicadores de focus visibles.
6. THE TrabajaConNosotrosPage SHALL incluir atributo aria-required="true" en campos obligatorios del formulario.
