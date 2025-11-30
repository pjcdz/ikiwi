# Implementation Plan

## Fase 1: Componentes Reutilizables Base

- [x] 1. Crear componentes reutilizables para el rediseño

  - [x] 1.1 Crear componente PageHero
    - Crear archivo `src/components/sections/page-hero.tsx`
    - Implementar props: badge, title, titleHighlight, subtitle, description, backgroundImage, backgroundColor, showStats, stats
    - Integrar AnimatedTitle para títulos animados
    - Integrar ScrollReveal para subtítulos y contenido
    - Agregar SectionTransition al final
    - Implementar variantes de color (green, cream, beige, dark)
    - Agregar soporte para decoraciones blur en fondo verde
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 12.1_

  - [x] 1.2 Crear componente StatsSection
    - Crear archivo `src/components/sections/stats-section.tsx`
    - Implementar props: stats array, variant (inline/cards/floating), columns
    - Agregar ScrollReveal con delays escalonados
    - Implementar las tres variantes visuales
    - _Requirements: 12.2_

  - [x] 1.3 Crear componente ColoredSection
    - Crear archivo `src/components/sections/colored-section.tsx`
    - Implementar props: backgroundColor, backgroundImage, backgroundOpacity, transition, transitionTo
    - Integrar SectionTransition automático
    - Soportar variantes de color (green, cream, beige, dark, white)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 12.4_

  - [x] 1.4 Crear componente PageCTA
    - Crear archivo `src/components/sections/page-cta.tsx`
    - Implementar props: icon, title, description, primaryButton, secondaryButton, variant, showCertifications
    - Integrar AnimatedTitle y ScrollReveal
    - Agregar badges de certificaciones opcionales
    - _Requirements: 12.5_

- [ ]* 1.5 Escribir tests para componentes reutilizables
    - Test de renderizado de PageHero con diferentes props
    - Test de StatsSection con diferentes variantes
    - Test de ColoredSection con transiciones
    - Test de PageCTA con y sin certificaciones
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_


## Fase 2: Rediseño de Página de Productos

- [x] 2. Rediseñar página de Productos (/productos)

  - [x] 2.1 Implementar Hero Section de Productos
    - Agregar "use client" al archivo
    - Usar PageHero con backgroundColor="green" y backgroundImage
    - Configurar badge "VARIEDADES PREMIUM CERTIFICADAS"
    - Configurar título "NUESTROS KIWIS" con AnimatedTitle
    - Agregar subtítulo descriptivo
    - _Requirements: 5.1_

  - [x] 2.2 Rediseñar grid de variedades de kiwi
    - Convertir cards a diseño premium con gradientes de color
    - Agregar imágenes con hover effect (scale-110)
    - Implementar hover en cards (-translate-y-3, shadow-2xl)
    - Agregar ScrollReveal con delays escalonados (index * 0.15)
    - Agregar badges de variedad posicionados absolute
    - Implementar arrow indicator con animación
    - _Requirements: 5.2_

  - [x] 2.3 Rediseñar sección de certificaciones
    - Crear contenedor con bg-white/80 backdrop-blur rounded-3xl
    - Mostrar iconos de certificación con hover effect (scale-110)
    - Agregar mensaje destacado sobre IG Mar y Sierras
    - Implementar ScrollReveal para animación de entrada
    - _Requirements: 5.3_

  - [x] 2.4 Rediseñar calendario de temporada
    - Crear visualización interactiva de meses
    - Destacar meses Mayo-Octubre con Color_Primario
    - Agregar animación de entrada con ScrollReveal
    - Mostrar mensaje "🥝 Kiwi fresco de mayo a octubre"
    - _Requirements: 5.4_

  - [x] 2.5 Agregar transiciones entre secciones de Productos
    - Agregar SectionTransition wave después del hero
    - Agregar SectionTransition organic entre grid y certificaciones
    - Agregar SectionTransition wave antes del CTA
    - _Requirements: 5.5_

  - [x] 2.6 Agregar CTA final en página de Productos
    - Usar PageCTA con variant="green"
    - Configurar botones "DÓNDE COMPRAR" y "CONTACTANOS"
    - Mostrar certificaciones
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

## Fase 3: Rediseño de Página de Nosotros

- [x] 3. Rediseñar página de Nosotros (/nosotros)

  - [x] 3.1 Implementar Hero Section de Nosotros
    - Usar PageHero con backgroundImage de campos
    - Configurar badge "NUESTRA HISTORIA"
    - Configurar título "LA MAYOR PRODUCTORA DE KIWI DE ARGENTINA"
    - Agregar stats: 270+ Ha, 90+ Emp, 4 Países, 2006
    - _Requirements: 6.1_

  - [x] 3.2 Rediseñar sección del Terroir
    - Usar ColoredSection con backgroundColor="greenLight" y opacity baja
    - Crear grid 2x2 con características del terroir
    - Agregar iconos animados (🌍, 🌱, 🌡️, ⭐)
    - Implementar ScrollReveal para cada característica
    - _Requirements: 6.2_

  - [x] 3.3 Rediseñar sección de Origen/Historia
    - Crear layout de 2 columnas (texto + imagen)
    - Agregar imagen con badge flotante "Desde 2006"
    - Implementar ScrollReveal slideRight para imagen
    - _Requirements: 6.1, 6.2_

  - [x] 3.4 Rediseñar Timeline de historia
    - Implementar animación ScrollReveal alternada (izquierda/derecha)
    - Agregar línea de tiempo vertical con animación
    - Destacar badges de año con Color_Primario
    - Agregar cards con sombra para cada evento
    - _Requirements: 6.3_

  - [x] 3.5 Rediseñar sección de Valores
    - Crear grid de 4 cards con iconos grandes
    - Agregar hover effect en cada card
    - Implementar ScrollReveal escalonado
    - _Requirements: 6.4_

  - [x] 3.6 Rediseñar sección de Variedades
    - Crear 3 cards con gradientes de color (Verde, Amarillo, Rojo)
    - Agregar badges de variedad
    - Implementar hover effects
    - _Requirements: 6.5_

  - [x] 3.7 Rediseñar sección de Sustentabilidad
    - Usar ColoredSection con backgroundColor="greenLight"
    - Agregar iconos de prácticas sustentables (🌱, 💧, 🚚)
    - Implementar animación de entrada
    - _Requirements: 6.6_

  - [x] 3.8 Agregar transiciones entre secciones de Nosotros
    - Agregar SectionTransition después del hero
    - Agregar transiciones entre cada sección principal
    - _Requirements: 4.1, 4.2, 4.3, 4.4_


## Fase 4: Rediseño de Página de Nutrición

- [x] 4. Rediseñar página de Nutrición (/nutricion)

  - [x] 4.1 Implementar Hero Section de Nutrición
    - Usar sección custom con backgroundColor="green"
    - Configurar badge "NUTRICIÓN & SALUD" en lime-300
    - Configurar título "1 KIWI = 1 KILO DE LIMONES" en blanco
    - Agregar subtítulo "en Vitamina C" en lime-300 text-3xl
    - Agregar decoraciones blur (lime-400/20, white/10)
    - _Requirements: 7.1_

  - [x] 4.2 Rediseñar comparación de Vitamina C
    - Crear barras de progreso animadas con ScrollReveal
    - Agregar iconos de frutas (🥝, 🍊, 🍓, 🍋, 🍎)
    - Destacar kiwi con Color_Primario
    - Mostrar valores en mg/100g
    - _Requirements: 7.2_

  - [x] 4.3 Rediseñar grid de beneficios para la salud
    - Crear cards con iconos grandes en gradiente de color
    - Implementar hover effect (-translate-y-2)
    - Agregar ScrollReveal escalonado
    - Mostrar título, descripción y detalle
    - _Requirements: 7.3_

  - [x] 4.4 Rediseñar tabla nutricional
    - Crear card centrada con información nutricional
    - Agregar separadores entre filas
    - Destacar valores importantes
    - _Requirements: 7.1, 7.2_

  - [x] 4.5 Rediseñar sección de Actinidina
    - Usar ColoredSection con backgroundColor="greenLight"
    - Agregar icono de ADN (🧬)
    - Crear grid 2 columnas (¿Qué es? / Beneficios)
    - Agregar lista de beneficios con checkmarks verdes
    - _Requirements: 7.4_

  - [x] 4.6 Rediseñar comparación Verde vs Amarillo
    - Crear 2 cards lado a lado con bordes de color
    - Agregar imágenes de kiwi
    - Crear tabla comparativa animada
    - Destacar valores superiores con color
    - _Requirements: 7.5_

  - [x] 4.7 Rediseñar sección de FAQs
    - Implementar acordeón con animaciones suaves
    - Agregar hover effects en triggers
    - Usar iconos de expansión animados
    - _Requirements: 7.6_

  - [x] 4.8 Agregar CTA final y transiciones en Nutrición
    - Usar PageCTA con variant="green"
    - Agregar SectionTransition entre secciones
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

## Fase 5: Rediseño de Página de Recetas

- [x] 5. Rediseñar página de Recetas (/recetas)

  - [x] 5.1 Implementar Hero Section de Recetas
    - Usar PageHero con backgroundColor="cream"
    - Configurar badge "INSPIRACIÓN CULINARIA"
    - Configurar título "RECETAS DELICIOSAS" con AnimatedTitle
    - Agregar subtítulo descriptivo
    - _Requirements: 8.1_

  - [x] 5.2 Rediseñar grid de recetas destacadas
    - Crear 4 cards con aspect-[3/4]
    - Agregar imágenes con overlay gradiente
    - Implementar hover effect (scale-110 en imagen, -translate-y-2 en card)
    - Agregar badge de categoría posicionado absolute
    - Mostrar tiempo de preparación
    - _Requirements: 8.2_

  - [x] 5.3 Rediseñar filtros por categoría
    - Implementar botones de filtro con animación de transición
    - Agregar iconos de categoría (🍰, 🥤, 🥗, 🌅)
    - Animar transición del grid con fade y reordenamiento
    - _Requirements: 8.3_

  - [x] 5.4 Rediseñar sección de consejos
    - Usar ColoredSection con backgroundColor="greenLight"
    - Crear grid de 4 cards con iconos (🌡️, 🧊, 🥛, 🍖)
    - Agregar hover effect sutil
    - _Requirements: 8.5_

  - [x] 5.5 Agregar transiciones entre secciones de Recetas
    - Agregar SectionTransition después del hero
    - Agregar transiciones entre grid y detalles
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [ ] 5.6 Agregar sección de recetas detalladas (opcional)
    - Crear layout de 2 columnas (ingredientes / pasos)
    - Agregar bullets verdes para ingredientes
    - Agregar círculos numerados verdes para pasos
    - Crear contenedor de tip con fondo verde suave
    - _Requirements: 8.4_


## Fase 6: Rediseño de Página de Noticias

- [x] 6. Rediseñar página de Noticias (/noticias)

  - [x] 6.1 Implementar Hero Section de Noticias
    - Usar PageHero con backgroundColor="cream"
    - Configurar badge "NOTICIAS"
    - Configurar título "NOVEDADES DE IKIWI" con AnimatedTitle
    - Agregar subtítulo descriptivo
    - _Requirements: 9.1_

  - [x] 6.2 Rediseñar noticia destacada
    - Crear layout de 2 columnas (contenido / imagen)
    - Usar ColoredSection con backgroundColor="greenLight"
    - Agregar badge de categoría
    - Agregar imagen con overlay y caption
    - Implementar ScrollReveal para animación
    - _Requirements: 9.1_

  - [x] 6.3 Rediseñar grid de noticias
    - Crear cards con imagen h-48
    - Agregar badge de categoría posicionado absolute
    - Mostrar fecha y título
    - Implementar hover color change en título (text-[#3f7528])
    - Agregar ScrollReveal escalonado
    - _Requirements: 9.2_

  - [x] 6.4 Rediseñar sección de estadísticas
    - Usar StatsSection con variant="cards"
    - Mostrar 4 stats: 0,45kg, 9 partidos, 16,5%, 900t
    - Agregar animación de entrada escalonada
    - _Requirements: 9.3_

  - [x] 6.5 Rediseñar sección de prensa
    - Mostrar logos de medios con efecto grayscale hover
    - Crear card de cita destacada con comillas
    - _Requirements: 9.4_

  - [x] 6.6 Agregar CTA de Instagram
    - Crear botón redondeado con icono 📱
    - Agregar hover effect
    - Mostrar mensaje invitando a seguir
    - _Requirements: 9.5_

  - [x] 6.7 Agregar transiciones entre secciones de Noticias
    - Agregar SectionTransition después del hero
    - Agregar transiciones entre grid y estadísticas
    - _Requirements: 4.1, 4.2, 4.3, 4.4_


## Fase 7: Rediseño de Página de Contacto

- [x] 7. Rediseñar página de Contacto (/contacto)

  - [x] 7.1 Implementar Hero Section de Contacto
    - Usar sección custom con backgroundColor="green" y backgroundImage
    - Configurar badge "CONECTÁ CON NOSOTROS" en lime-300
    - Configurar título "¿LISTO PARA PROBAR EL MEJOR KIWI?" en blanco
    - Agregar subtítulo descriptivo
    - _Requirements: 10.1_

  - [x] 7.2 Rediseñar opciones de contacto
    - Crear 3 cards principales (Dónde Comprar, Empresas B2B, Contactanos)
    - Agregar iconos grandes en contenedores con gradiente
    - Implementar hover effect (-translate-y-2)
    - Usar card oscura para B2B
    - Agregar ScrollReveal escalonado
    - _Requirements: 10.2_

  - [x] 7.3 Rediseñar botones de WhatsApp y Email
    - Crear botón WhatsApp con color #25D366
    - Crear botón Email con fondo white/10 y border
    - Agregar iconos y hover effects
    - _Requirements: 10.3_

  - [x] 7.4 Agregar badges de certificaciones en Contacto
    - Mostrar badges en fila con fondo blur
    - Agregar iconos de certificación
    - Mostrar nombres de certificación
    - _Requirements: 10.6_

  - [x] 7.5 Rediseñar formulario de contacto
    - Usar sección con backgroundColor="beige"
    - Crear inputs con bordes redondeados
    - Agregar focus ring en Color_Primario
    - Crear labels claros
    - Agregar botón de envío redondeado
    - _Requirements: 10.4_

  - [x] 7.6 Rediseñar sección de mapa
    - Crear contenedor con bordes redondeados para iframe
    - Agregar información de ubicación debajo
    - Crear botón para abrir en Google Maps
    - _Requirements: 10.5_

  - [x] 7.7 Rediseñar CTA de redes sociales
    - Usar PageCTA con variant="green"
    - Agregar botón de Instagram
    - _Requirements: 10.1, 10.2_

  - [x] 7.8 Agregar transiciones entre secciones de Contacto
    - Agregar SectionTransition wave después del hero
    - Agregar transiciones entre formulario y mapa
    - _Requirements: 4.1, 4.2, 4.3, 4.4_


## Fase 8: Rediseño de Página de Trabaja con Nosotros

- [x] 8. Rediseñar página de Trabaja con Nosotros (/trabaja-con-nosotros)

  - [x] 8.1 Implementar Hero Section de Trabaja con Nosotros
    - Usar sección custom con backgroundImage de equipo trabajando
    - Configurar badge "OPORTUNIDADES LABORALES"
    - Configurar título "SUMATE AL EQUIPO" con AnimatedTitle
    - Agregar subtítulo "Más de 90 personas trabajando con pasión"
    - Agregar stats flotantes: 90+ Emp, 270 Ha, 19 Años
    - _Requirements: 11.1_

  - [x] 8.2 Agregar imagen parallax con stats overlay
    - Usar imagen de equipo cosechando
    - Agregar badge flotante "Desde 2006"
    - _Requirements: 11.1_

  - [x] 8.3 Rediseñar sección de áreas de trabajo
    - Crear 3 cards (Campo, Empaquetadora, Administrativo)
    - Agregar iconos grandes (🌱, 📦, 💼)
    - Crear lista de tareas con bullets verdes
    - Mostrar temporada destacada
    - Agregar ScrollReveal escalonado
    - _Requirements: 11.2_

  - [x] 8.4 Rediseñar sección de beneficios
    - Crear grid 2x3 de cards
    - Agregar iconos (🌿, 📈, 👥, 🏠, 🥝, 🌍)
    - Implementar hover effect sutil
    - Agregar ScrollReveal escalonado
    - _Requirements: 11.3_

  - [x] 8.5 Rediseñar formulario de postulación
    - Crear inputs con bordes redondeados
    - Agregar selector de área de interés
    - Crear campo de archivo para CV con estilo
    - Agregar botón de envío redondeado con hover effect
    - _Requirements: 11.4_

  - [x] 8.6 Rediseñar CTA final de Trabaja con Nosotros
    - Usar PageCTA con variant="green"
    - Agregar icono de kiwi 🥝
    - Crear botones de email e Instagram
    - _Requirements: 11.5_

  - [x] 8.7 Agregar transiciones entre secciones de Trabaja con Nosotros
    - Agregar SectionTransition wave después del hero
    - Agregar transiciones entre áreas y beneficios
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

## Fase 9: Responsive Design y Optimización

- [-] 9. Implementar responsive design en todas las páginas

  - [x] 9.1 Ajustar tipografía responsive
    - Verificar tamaños de títulos en móvil (text-4xl → text-6xl)
    - Ajustar subtítulos y párrafos
    - Verificar legibilidad en todos los breakpoints
    - _Requirements: 13.1_

  - [ ] 9.2 Ajustar grids responsive
    - Verificar que cards se muestran en 1-2 columnas en móvil
    - Ajustar gaps entre elementos
    - Verificar que el contenido no se desborda
    - _Requirements: 13.2_

  - [ ] 9.3 Ajustar Hero Sections responsive
    - Reducir padding en móvil (py-16 en lugar de py-32)
    - Ocultar decoraciones que no aporten valor
    - Verificar que stats se muestran correctamente
    - _Requirements: 13.3_

  - [ ] 9.4 Optimizar parallax en móvil
    - Reducir o desactivar efecto parallax en móvil
    - Verificar rendimiento en dispositivos de gama baja
    - _Requirements: 13.4_

  - [ ] 9.5 Ajustar formularios responsive
    - Mostrar campos en una sola columna en móvil
    - Verificar espaciado adecuado para touch
    - Ajustar tamaño de botones para touch
    - _Requirements: 13.5_

## Fase 10: Accesibilidad y Performance

- [-] 10. Implementar mejoras de accesibilidad y performance

  - [x] 10.1 Implementar soporte para reduced motion
    - Detectar prefers-reduced-motion en todos los componentes de animación
    - Desactivar animaciones GSAP cuando está activo
    - Mostrar contenido estáticamente
    - _Requirements: 14.1_

  - [ ] 10.2 Verificar navegación por teclado
    - Asegurar que todos los elementos interactivos son accesibles con Tab
    - Verificar que el focus es visible con outline claro
    - _Requirements: 14.2_

  - [ ] 10.3 Agregar textos alternativos
    - Verificar que todas las imágenes tienen alt text descriptivo
    - Agregar aria-labels donde sea necesario
    - _Requirements: 14.3_

  - [ ] 10.4 Verificar visibilidad de contenido
    - Asegurar que el contenido es visible después de animaciones
    - Verificar que no hay contenido oculto permanentemente
    - _Requirements: 14.4_

  - [ ] 10.5 Optimizar carga de página
    - Usar loading="lazy" en imágenes below the fold
    - Usar priority solo en imágenes del hero
    - Verificar que el contenido above the fold carga primero
    - _Requirements: 14.5_

- [ ]* 10.6 Escribir tests de accesibilidad
    - Test de navegación por teclado
    - Test de contraste de colores
    - Test de textos alternativos
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_

## Fase 11: Verificación Final

- [-] 11. Verificación y ajustes finales

  - [x] 11.1 Verificar consistencia visual entre páginas
    - Revisar que todas las páginas usan los mismos colores
    - Verificar que las tipografías son consistentes
    - Asegurar que los espaciados son uniformes
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [ ] 11.2 Verificar animaciones en todas las páginas
    - Probar AnimatedTitle en todos los títulos
    - Probar ScrollReveal en todos los elementos
    - Verificar que las transiciones funcionan correctamente
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 11.3 Verificar responsive en todos los breakpoints
    - Probar en móvil (375px)
    - Probar en tablet (768px)
    - Probar en desktop (1024px, 1280px, 1536px)
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

  - [ ] 11.4 Verificar performance
    - Medir tiempo de carga de cada página
    - Verificar que no hay memory leaks en animaciones
    - Optimizar imágenes si es necesario
    - _Requirements: 14.5_

- [ ]* 11.5 Escribir tests de integración
    - Test de navegación entre páginas
    - Test de transiciones de página
    - Test de scroll reset al cambiar de página
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_
