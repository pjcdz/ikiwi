# Requirements Document

## Introduction

Este documento define los requisitos para el rediseño completo de la página de Contacto (/contacto) del sitio web de iKiwi, aplicando el sistema de diseño premium, animaciones inmersivas y estética storytelling implementados exitosamente en el home. El objetivo es transformar la página de contacto en una experiencia visual impactante que mantenga la coherencia con el nuevo diseño del sitio mientras facilita múltiples vías de comunicación con la empresa.

## Glossary

- **ContactoPage**: Componente principal de la página de contacto ubicado en `/src/app/contacto/page.tsx`
- **ScrollReveal**: Componente de animación que revela elementos al hacer scroll
- **AnimatedTitle**: Componente que anima títulos palabra por palabra o carácter por carácter
- **SectionTransition**: Componente que crea transiciones suaves entre secciones con formas orgánicas (wave, organic)
- **GSAP**: Librería de animación utilizada para efectos complejos y scroll-triggered animations
- **ParallaxImage**: Componente que aplica efecto parallax a imágenes durante el scroll
- **Design System**: Sistema de tokens de diseño (colores, espaciados, tipografías) definido para iKiwi
- **Hero Section**: Sección principal de entrada con impacto visual máximo
- **CTA**: Call to Action - elementos que invitan al usuario a realizar una acción
- **B2B**: Business to Business - comunicación comercial entre empresas

## Requirements

### Requirement 1: Hero Section Inmersivo

**User Story:** Como visitante, quiero ver una sección hero impactante al entrar a la página de contacto, para sentir la calidad premium de la marca y entender inmediatamente que puedo conectar con iKiwi.

#### Acceptance Criteria

1. WHEN el usuario carga la página de contacto, THE ContactoPage SHALL mostrar un hero section con fondo de imagen de campos de kiwi con overlay gradiente verde (#3f7528) y efectos de blur decorativos.
2. WHEN el hero section se renderiza, THE ContactoPage SHALL mostrar un badge superior animado con texto "CONECTÁ CON NOSOTROS" en color lime-300 con tracking-[0.3em] y uppercase.
3. WHEN el hero section se renderiza, THE ContactoPage SHALL mostrar el título principal "¿LISTO PARA PROBAR EL MEJOR KIWI?" utilizando AnimatedTitle con animación de palabras y tipografía Playfair Display en tamaño responsivo (4xl a 7xl).
4. WHEN el usuario hace scroll, THE ContactoPage SHALL aplicar efecto parallax al contenido del hero con GSAP ScrollTrigger, moviendo el contenido hacia arriba con fade out progresivo.
5. THE ContactoPage SHALL incluir una SectionTransition con variante "wave" al final del hero que transicione hacia el color cream (#faf8f5).

### Requirement 2: Opciones de Contacto con Cards Interactivas

**User Story:** Como visitante, quiero ver claramente las diferentes formas de contactar a iKiwi según mi necesidad, para poder elegir el canal más apropiado para mi consulta.

#### Acceptance Criteria

1. THE ContactoPage SHALL mostrar tres cards de opciones de contacto (Dónde Comprar, Empresas B2B, Contactanos) en un grid responsivo de 3 columnas en desktop y 1 columna en mobile.
2. WHEN el usuario hace hover sobre una card de contacto, THE ContactoPage SHALL aplicar transformación de elevación (-translate-y-2), aumento de sombra (shadow-2xl) y transición suave de 300ms.
3. THE ContactoPage SHALL diferenciar visualmente la card de B2B con fondo oscuro (#1a3311) y las otras cards con fondo blanco, manteniendo iconos con gradientes lime y efectos de blur decorativos.
4. WHEN las cards se renderizan, THE ContactoPage SHALL aplicar animación ScrollReveal con stagger de 0.15s entre cada card para crear efecto de aparición secuencial.
5. THE ContactoPage SHALL incluir en cada card un icono grande (w-20 h-20), título con tipografía Playfair Display, descripción y link con flecha animada que se expande en hover.

### Requirement 3: Contacto Directo con WhatsApp y Email

**User Story:** Como visitante, quiero acceder rápidamente a WhatsApp y email de iKiwi, para poder comunicarme de forma inmediata sin llenar formularios.

#### Acceptance Criteria

1. THE ContactoPage SHALL mostrar dos botones de contacto directo (WhatsApp y Email) en un grid de 2 columnas debajo de las opciones principales.
2. THE ContactoPage SHALL estilizar el botón de WhatsApp con fondo verde característico (#25D366), icono blanco, y efecto hover con elevación y escala del icono.
3. THE ContactoPage SHALL estilizar el botón de Email con fondo semi-transparente (white/10), backdrop-blur, borde sutil (white/20) y efecto hover que aumenta la opacidad del fondo.
4. WHEN el usuario hace click en el botón de WhatsApp, THE ContactoPage SHALL abrir el enlace de WhatsApp en una nueva pestaña con el número de contacto de iKiwi.
5. WHEN el usuario hace click en el botón de Email, THE ContactoPage SHALL abrir el cliente de correo con la dirección ventas@ikiwi.com.ar pre-cargada.

### Requirement 4: Sección de Certificaciones

**User Story:** Como visitante, quiero ver las certificaciones de calidad de iKiwi en la página de contacto, para tener confianza en la empresa antes de contactarlos.

#### Acceptance Criteria

1. THE ContactoPage SHALL mostrar una fila de certificaciones (IG Mar y Sierras, GlobalGAP, USDA Organic, UE Orgánica) con badges estilizados en fondo semi-transparente.
2. THE ContactoPage SHALL mostrar cada certificación con su logo, nombre y contenedor con backdrop-blur, bordes redondeados (rounded-full) y borde sutil (white/10).
3. WHEN la sección de certificaciones se renderiza, THE ContactoPage SHALL aplicar animación ScrollReveal con fade up y delay apropiado para aparecer después de los botones de contacto.

### Requirement 5: Formulario de Contacto Premium

**User Story:** Como visitante, quiero completar un formulario de contacto elegante y fácil de usar, para enviar mi consulta de manera profesional.

#### Acceptance Criteria

1. THE ContactoPage SHALL mostrar un formulario de contacto en una sección con fondo beige (#f5f0e8) separada por SectionTransition wave.
2. THE ContactoPage SHALL incluir campos para: Nombre (requerido), Email (requerido), Empresa/Organización (opcional), Motivo de Contacto (select requerido), y Mensaje (textarea requerido).
3. THE ContactoPage SHALL estilizar todos los inputs con bordes redondeados (rounded-xl), padding generoso (px-4 py-3), focus ring en color primario (#3f7528), y transiciones suaves.
4. THE ContactoPage SHALL mostrar el formulario dentro de una card blanca con bordes muy redondeados (rounded-3xl), padding amplio y sombra suave (shadow-lg).
5. THE ContactoPage SHALL incluir un botón de envío con estilo pill (rounded-full), fondo verde primario, efecto hover con escala y sombra aumentada.
6. WHEN el formulario se renderiza, THE ContactoPage SHALL aplicar animación ScrollReveal al contenedor completo del formulario.

### Requirement 6: Sección de Mapa Interactivo

**User Story:** Como visitante, quiero ver la ubicación de iKiwi en un mapa, para conocer dónde están ubicados y planificar una visita si lo deseo.

#### Acceptance Criteria

1. THE ContactoPage SHALL mostrar una sección de mapa con iframe de Google Maps embebido mostrando Sierra de los Padres, Mar del Plata.
2. THE ContactoPage SHALL contener el mapa dentro de una card blanca con bordes muy redondeados (rounded-3xl), overflow hidden y sombra.
3. THE ContactoPage SHALL mostrar debajo del mapa la dirección completa, nombre de la ubicación y un link para abrir en Google Maps con icono de enlace externo.
4. WHEN la sección del mapa se renderiza, THE ContactoPage SHALL aplicar animación ScrollReveal con fade up.
5. THE ContactoPage SHALL mostrar el mapa con aspect-ratio de video (16:9) para mantener proporciones consistentes.

### Requirement 7: CTA Final con Instagram

**User Story:** Como visitante, quiero ver una invitación a seguir a iKiwi en Instagram al final de la página, para mantenerme conectado con la marca en redes sociales.

#### Acceptance Criteria

1. THE ContactoPage SHALL mostrar una sección CTA final con fondo verde (#3f7528) invitando a seguir en Instagram.
2. THE ContactoPage SHALL incluir icono de cámara/Instagram, título "Seguinos en Instagram", handle @kiwi_argentino y botón de acción.
3. THE ContactoPage SHALL aplicar SectionTransition wave antes de la sección CTA para crear transición suave desde la sección anterior.
4. WHEN el usuario hace click en el botón de Instagram, THE ContactoPage SHALL abrir el perfil de Instagram de iKiwi en una nueva pestaña.

### Requirement 8: Animaciones y Transiciones Consistentes

**User Story:** Como visitante, quiero experimentar animaciones fluidas y transiciones suaves en toda la página, para tener una experiencia inmersiva coherente con el resto del sitio.

#### Acceptance Criteria

1. THE ContactoPage SHALL utilizar GSAP con ScrollTrigger para animaciones de scroll en el hero section.
2. THE ContactoPage SHALL aplicar ScrollReveal con animación "fadeUp" a todos los elementos de contenido con delays escalonados apropiados.
3. THE ContactoPage SHALL utilizar AnimatedTitle con animación "words" para todos los títulos principales de sección.
4. THE ContactoPage SHALL incluir SectionTransition entre cada cambio de color de fondo para crear flujo visual orgánico.
5. THE ContactoPage SHALL respetar las preferencias de movimiento reducido del usuario mediante el hook useReducedMotion.

### Requirement 9: Diseño Responsivo

**User Story:** Como visitante en dispositivo móvil, quiero que la página de contacto se vea perfecta y sea fácil de usar, para poder contactar a iKiwi desde cualquier dispositivo.

#### Acceptance Criteria

1. THE ContactoPage SHALL adaptar el grid de opciones de contacto de 3 columnas en desktop a 1 columna en mobile.
2. THE ContactoPage SHALL adaptar el grid de contacto directo de 2 columnas en desktop a 1 columna en mobile.
3. THE ContactoPage SHALL ajustar los tamaños de tipografía del hero de manera responsiva (text-4xl en mobile a text-7xl en desktop).
4. THE ContactoPage SHALL mantener padding y espaciado apropiados en todas las resoluciones usando clases responsivas de Tailwind.
5. THE ContactoPage SHALL asegurar que todos los elementos interactivos tengan áreas de toque mínimas de 44x44px en dispositivos táctiles.

### Requirement 10: Accesibilidad

**User Story:** Como visitante con necesidades de accesibilidad, quiero poder navegar y usar la página de contacto con tecnologías asistivas, para poder contactar a iKiwi sin barreras.

#### Acceptance Criteria

1. THE ContactoPage SHALL incluir labels asociados correctamente a todos los campos del formulario mediante atributos htmlFor e id.
2. THE ContactoPage SHALL incluir atributos aria-label en todos los links y botones que solo contienen iconos.
3. THE ContactoPage SHALL mantener contraste de color mínimo de 4.5:1 entre texto y fondo en todos los elementos.
4. THE ContactoPage SHALL incluir atributo title descriptivo en el iframe del mapa de Google.
5. THE ContactoPage SHALL asegurar que todos los elementos interactivos sean accesibles mediante navegación por teclado con indicadores de focus visibles.
