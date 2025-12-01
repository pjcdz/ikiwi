# Implementation Plan

## Rediseño Página de Contacto iKiwi

- [x] 1. Configurar estructura base y imports



  - [x] 1.1 Actualizar imports en contacto/page.tsx

    - Agregar imports de GSAP y ScrollTrigger
    - Agregar imports de componentes de animación (AnimatedTitle, ScrollReveal, SectionTransition)
    - Agregar imports de Next.js (Image, Link)
    - Configurar "use client" directive
    - _Requirements: 1.1, 8.1_


- [x] 2. Implementar Hero Section inmersivo

  - [x] 2.1 Crear estructura del hero con fondo y overlays

    - Implementar background image con /bg-cta-sunset-fields.png
    - Agregar gradient overlay from-[#3f7528]/95 via-[#3f7528]/90 to-[#2d5a1c]/95
    - Agregar blurs decorativos (lime-400/20 top-right, white/10 bottom-left)
    - _Requirements: 1.1_

  - [ ] 2.2 Implementar contenido del hero con animaciones
    - Agregar badge "CONECTÁ CON NOSOTROS" con ScrollReveal
    - Implementar título con AnimatedTitle animation="words"
    - Agregar subtítulo con ScrollReveal delay

    - _Requirements: 1.2, 1.3_
  - [ ] 2.3 Implementar parallax con GSAP ScrollTrigger
    - Crear refs para hero y content
    - Configurar useEffect con gsap.context

    - Implementar animación de parallax (y: 100, opacity: 0, scrub: true)
    - _Requirements: 1.4, 8.1_
  - [ ] 2.4 Agregar SectionTransition al final del hero
    - Implementar SectionTransition variant="wave" toColor="#faf8f5"
    - Posicionar absolute bottom-0
    - _Requirements: 1.5_


- [ ] 3. Implementar sección de opciones de contacto
  - [x] 3.1 Crear grid de cards de contacto

    - Implementar sección con bg-[#faf8f5] y padding responsivo
    - Crear grid md:grid-cols-3 gap-6 max-w-6xl mx-auto
    - _Requirements: 2.1_

  - [ ] 3.2 Implementar card "Dónde Comprar" (light variant)
    - Crear card bg-white rounded-2xl p-8 shadow-xl
    - Agregar icono ShoppingBag en contenedor lime gradient w-20 h-20
    - Implementar título Playfair Display, descripción y link con flecha
    - Agregar hover effects (-translate-y-2, shadow-2xl, icon scale-110)

    - _Requirements: 2.2, 2.3, 2.5_
  - [ ] 3.3 Implementar card "Empresas B2B" (dark variant)
    - Crear card bg-[#1a3311] rounded-2xl p-8 shadow-xl
    - Agregar blur decorativo top-right lime-400/10
    - Agregar icono Briefcase en contenedor white/15 backdrop-blur

    - Implementar título blanco, descripción white/70, link lime-300
    - _Requirements: 2.3, 2.5_
  - [ ] 3.4 Implementar card "Contactanos" (light variant)
    - Crear card bg-white rounded-2xl p-8 shadow-xl

    - Agregar icono ChatBubble en contenedor lime gradient
    - Implementar título, descripción y link con href="#form"
    - _Requirements: 2.5_
  - [ ] 3.5 Agregar animaciones ScrollReveal a las cards
    - Envolver cada card en ScrollReveal animation="fadeUp"
    - Configurar delays escalonados (0.1, 0.2, 0.3)
    - _Requirements: 2.4_

- [ ] 4. Implementar botones de contacto directo
  - [x] 4.1 Crear grid de botones de contacto

    - Implementar grid md:grid-cols-2 gap-6 debajo de las cards
    - _Requirements: 3.1_

  - [ ] 4.2 Implementar botón de WhatsApp
    - Crear botón bg-[#25D366] rounded-2xl p-6 flex items-center
    - Agregar icono WhatsApp en contenedor blanco w-14 h-14
    - Implementar texto "WhatsApp" y subtítulo "Respuesta en menos de 24hs"
    - Configurar href con wa.me link y target="_blank"
    - Agregar hover effects (-translate-y-1, shadow-2xl, icon scale-110)

    - _Requirements: 3.2, 3.4_
  - [ ] 4.3 Implementar botón de Email
    - Crear botón bg-white/10 backdrop-blur border-white/20 rounded-2xl p-6
    - Agregar icono Mail en contenedor blanco
    - Implementar texto email y subtítulo
    - Configurar href mailto:ventas@ikiwi.com.ar

    - Agregar hover effects (bg-white/20, -translate-y-1)
    - _Requirements: 3.3, 3.5_
  - [ ] 4.4 Agregar animaciones ScrollReveal a botones
    - Envolver cada botón en ScrollReveal con delays (0.4, 0.5)
    - _Requirements: 8.2_

- [ ] 5. Implementar sección de certificaciones
  - [x] 5.1 Crear fila de certificaciones

    - Implementar contenedor mt-12 text-center
    - Agregar título "Certificaciones que nos avalan" (white/50, uppercase, tracking)
    - Crear flex container justify-center items-center gap-6 flex-wrap
    - _Requirements: 4.1_

  - [ ] 5.2 Implementar badges de certificaciones
    - Crear 4 badges (IG Mar y Sierras, GlobalGAP, USDA Organic, Export UE)
    - Estilizar cada badge con bg-white/10 backdrop-blur rounded-full px-5 py-3 border-white/10
    - Agregar logo Image w-7 h-7 y nombre de certificación

    - _Requirements: 4.2_
  - [ ] 5.3 Agregar animación ScrollReveal
    - Envolver sección en ScrollReveal animation="fadeUp" delay={0.6}
    - _Requirements: 4.3_



- [ ] 6. Implementar sección de formulario de contacto
  - [ ] 6.1 Crear transición y estructura de sección
    - Agregar SectionTransition variant="wave" toColor="#f5f0e8" antes de la sección

    - Crear sección con id="form" bg-[#f5f0e8] py-16 md:py-24
    - _Requirements: 5.1_
  - [ ] 6.2 Implementar header del formulario
    - Crear contenedor text-center mb-10
    - Agregar badge "ESCRIBINOS" con ScrollReveal (green, tracking-[0.3em])
    - Implementar título "Envianos un Mensaje" con AnimatedTitle

    - _Requirements: 5.4, 8.3_
  - [ ] 6.3 Crear card del formulario
    - Implementar form dentro de card bg-white rounded-3xl p-6 md:p-8 shadow-lg
    - Configurar max-w-2xl mx-auto

    - Agregar space-y-6 para espaciado entre campos
    - _Requirements: 5.4_
  - [ ] 6.4 Implementar campos del formulario
    - Crear grid md:grid-cols-2 para Nombre y Email
    - Implementar input Nombre (text, required) con label y estilos
    - Implementar input Email (email, required) con label y estilos
    - Implementar input Empresa (text, optional) full width
    - Implementar select Motivo de Contacto (required) con opciones

    - Implementar textarea Mensaje (required, rows=4)
    - Aplicar estilos: rounded-xl, px-4 py-3, focus:ring-[#3f7528]
    - _Requirements: 5.2, 5.3_
  - [x] 6.5 Implementar botón de envío

    - Crear botón type="submit" centrado
    - Estilizar con px-8 py-4 bg-[#3f7528] rounded-full font-semibold
    - Agregar hover effects (bg-[#4a8a30], scale-105, shadow-lg)
    - _Requirements: 5.5_
  - [ ] 6.6 Agregar animación ScrollReveal al formulario
    - Envolver card del formulario en ScrollReveal animation="fadeUp" delay={0.2}
    - _Requirements: 5.6_

- [x] 7. Implementar sección del mapa

  - [x] 7.1 Crear estructura de sección del mapa

    - Implementar sección bg-[#faf8f5] py-16 md:py-24
    - Crear contenedor max-w-4xl mx-auto
    - _Requirements: 6.1_

  - [ ] 7.2 Implementar header del mapa
    - Crear contenedor text-center mb-10
    - Implementar título "Nuestra Ubicación" con AnimatedTitle

    - _Requirements: 6.3_
  - [ ] 7.3 Crear card del mapa con iframe
    - Implementar card bg-white rounded-3xl overflow-hidden shadow-lg
    - Crear contenedor aspect-video para el iframe
    - Agregar iframe de Google Maps con src, width="100%", height="100%"

    - Configurar loading="lazy" y title="Ubicación de iKiwi"
    - _Requirements: 6.2, 6.5, 10.4_
  - [ ] 7.4 Implementar información de ubicación
    - Crear contenedor p-6 text-center debajo del mapa
    - Agregar h3 "Sierra de los Padres" (text-xl font-bold)

    - Agregar p con dirección (gray-600)
    - Implementar link "Ver en Google Maps" con icono externo

    - _Requirements: 6.3_

  - [ ] 7.5 Agregar animación ScrollReveal
    - Envolver card del mapa en ScrollReveal animation="fadeUp"

    - _Requirements: 6.4_

- [ ] 8. Implementar CTA final de Instagram
  - [ ] 8.1 Agregar transición antes del CTA
    - Implementar SectionTransition variant="wave" toColor="#3f7528"
    - _Requirements: 7.3_
  - [ ] 8.2 Implementar PageCTA component
    - Usar componente PageCTA existente
    - Configurar icon="📸", title="Seguinos en Instagram"
    - Configurar description="@kiwi_argentino - Novedades, recetas y más"
    - Configurar primaryButton con href a Instagram
    - Configurar variant="green"
    - _Requirements: 7.1, 7.2, 7.4_


- [x] 9. Implementar responsividad

  - [x] 9.1 Ajustar grids para mobile

    - Verificar grid de cards: md:grid-cols-3 → grid-cols-1
    - Verificar grid de contacto directo: md:grid-cols-2 → grid-cols-1
    - Verificar grid de formulario: md:grid-cols-2 → grid-cols-1
    - _Requirements: 9.1, 9.2_

  - [ ] 9.2 Ajustar tipografías responsivas
    - Hero título: text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    - Títulos de sección: text-2xl md:text-3xl
    - Subtítulos: text-lg md:text-xl

    - _Requirements: 9.3_
  - [ ] 9.3 Verificar espaciados responsivos
    - Hero padding: py-16 md:py-24 lg:py-32
    - Secciones padding: py-16 md:py-24

    - Container padding: px-4
    - _Requirements: 9.4_
  - [ ] 9.4 Verificar áreas táctiles
    - Asegurar botones y links con min 44x44px en mobile
    - Verificar padding en elementos interactivos
    - _Requirements: 9.5_

- [x] 10. Implementar accesibilidad


  - [x] 10.1 Configurar labels del formulario

    - Agregar htmlFor en todos los labels
    - Agregar id correspondiente en todos los inputs
    - Marcar campos requeridos con aria-required="true"
    - _Requirements: 10.1_

  - [ ] 10.2 Agregar aria-labels a elementos con iconos
    - Agregar aria-label a botón WhatsApp
    - Agregar aria-label a botón Email
    - Agregar aria-label a links de cards

    - _Requirements: 10.2_
  - [ ] 10.3 Verificar contraste de colores
    - Verificar texto blanco sobre verde (#3f7528): ratio ≥4.5:1
    - Verificar texto gris sobre blanco: ratio ≥4.5:1

    - Verificar lime-300 sobre verde oscuro
    - _Requirements: 10.3_
  - [x] 10.4 Configurar iframe del mapa

    - Agregar title descriptivo al iframe
    - Agregar aria-label si es necesario
    - _Requirements: 10.4_
  - [ ] 10.5 Verificar navegación por teclado
    - Asegurar tab order lógico
    - Verificar focus visible en todos los elementos interactivos
    - Probar Enter/Space en botones y links
    - _Requirements: 10.5_

- [ ]* 11. Testing y validación
  - [ ]* 11.1 Probar animaciones
    - Verificar parallax del hero funciona correctamente
    - Verificar ScrollReveal en todas las secciones
    - Verificar AnimatedTitle en títulos
    - Verificar transiciones wave entre secciones
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  - [ ]* 11.2 Probar reduced motion
    - Verificar que animaciones respetan prefers-reduced-motion
    - _Requirements: 8.5_
  - [ ]* 11.3 Probar en diferentes dispositivos
    - Probar en mobile (375px)
    - Probar en tablet (768px)
    - Probar en desktop (1024px+)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  - [ ]* 11.4 Probar formulario
    - Verificar validación de campos requeridos
    - Verificar focus states
    - Verificar estados del botón de envío
    - _Requirements: 5.2, 5.3, 5.5_
