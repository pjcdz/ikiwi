# Requirements Document

## Introduction

Este documento define los requisitos para la transformación completa del homepage de Ikiwi en una experiencia de storytelling inmersiva inspirada en "Corn Revolution" de Pioneer. El objetivo es crear un viaje narrativo vertical donde cada sección sea un "hook" hacia las páginas internas, utilizando tipografía expresiva, transiciones fluidas y animaciones cinematográficas que cuenten la historia del kiwi argentino.

El rediseño busca alejarse de cualquier estética "fintech" o corporativa genérica, abrazando una identidad visual orgánica, terrosa y auténtica que refleje la naturaleza agrícola del producto.

## Glossary

- **Homepage_Storytelling**: El sistema de navegación vertical del homepage que presenta cada sección como un capítulo de una narrativa continua
- **Section_Hook**: Una sección del homepage diseñada para capturar la atención y dirigir al usuario hacia una página interna específica
- **Scroll_Animation**: Animaciones que se activan y progresan basadas en la posición del scroll del usuario
- **Hero_Section**: La primera sección visible del homepage que establece el tono narrativo
- **Transition_Element**: Elementos visuales (ondas, gradientes, partículas) que conectan fluidamente una sección con la siguiente
- **Typography_Animation**: Animaciones aplicadas a texto que revelan palabras o caracteres de forma secuencial o dramática
- **Parallax_Effect**: Efecto donde elementos de fondo se mueven a diferente velocidad que el contenido principal
- **GSAP**: GreenSock Animation Platform, librería de animación utilizada para scroll-triggered animations
- **Lenis**: Librería para smooth scrolling que suaviza la inercia del scroll

## Requirements

### Requirement 1: Sistema de Smooth Scrolling Global

**User Story:** Como visitante del sitio, quiero que el scroll sea suave y cinematográfico, para que la navegación se sienta fluida y premium.

#### Acceptance Criteria

1. WHEN el usuario hace scroll en el homepage, THE Homepage_Storytelling SHALL aplicar smooth scrolling con inercia suavizada mediante Lenis
2. THE Homepage_Storytelling SHALL mantener una velocidad de scroll consistente que permita apreciar las transiciones entre secciones
3. WHILE el usuario navega por el homepage, THE Homepage_Storytelling SHALL sincronizar todas las animaciones con la posición del scroll

### Requirement 2: Hero Section Inmersiva

**User Story:** Como visitante, quiero ser impactado visualmente al entrar al sitio, para entender inmediatamente que estoy en un sitio de agricultura premium, no de tecnología.

#### Acceptance Criteria

1. WHEN el homepage carga, THE Hero_Section SHALL mostrar una animación de entrada con tipografía que se revela de forma dramática
2. THE Hero_Section SHALL utilizar el video de fondo existente con un overlay que refuerce el color #3f7528
3. THE Hero_Section SHALL presentar el título "KIWI ARGENTINO" con animación de caracteres individuales que emergen secuencialmente
4. WHEN el usuario hace scroll desde el hero, THE Hero_Section SHALL aplicar un efecto parallax donde el contenido se desvanece mientras el fondo permanece
5. THE Hero_Section SHALL incluir un indicador de scroll animado que invite a explorar

### Requirement 3: Sección Hook de Productos

**User Story:** Como visitante, quiero ver una presentación atractiva de los productos que me invite a explorar más, para descubrir las variedades de kiwi disponibles.

#### Acceptance Criteria

1. WHEN la sección de productos entra en viewport, THE Section_Hook SHALL revelar las variedades de kiwi con animaciones escalonadas
2. THE Section_Hook SHALL mostrar un título grande y expresivo que se anima al hacer scroll
3. THE Section_Hook SHALL presentar máximo 3 productos destacados con imágenes que escalan sutilmente al hacer hover
4. THE Section_Hook SHALL incluir un CTA claro hacia la página de productos
5. WHEN el usuario hace scroll a través de esta sección, THE Section_Hook SHALL aplicar parallax a las imágenes de productos

### Requirement 4: Sección Hook de Historia/Nosotros

**User Story:** Como visitante, quiero conocer brevemente la historia de Ikiwi, para conectar emocionalmente con la marca antes de profundizar.

#### Acceptance Criteria

1. WHEN la sección de historia entra en viewport, THE Section_Hook SHALL revelar contenido con animación de fade-up escalonado
2. THE Section_Hook SHALL mostrar una imagen impactante del campo con efecto parallax
3. THE Section_Hook SHALL presentar un dato destacado (ej: "Desde 2006") con tipografía grande y animada
4. THE Section_Hook SHALL incluir un texto breve que capture la esencia de la historia
5. THE Section_Hook SHALL incluir un CTA hacia la página de Nosotros

### Requirement 5: Sección Hook de Nutrición/Beneficios

**User Story:** Como visitante, quiero ver rápidamente los beneficios del kiwi, para entender su valor nutricional sin leer mucho texto.

#### Acceptance Criteria

1. WHEN la sección de nutrición entra en viewport, THE Section_Hook SHALL revelar beneficios con animaciones de contador o números que incrementan
2. THE Section_Hook SHALL mostrar máximo 4 beneficios clave con iconografía clara
3. THE Section_Hook SHALL utilizar el dato "1 kiwi = 1 kilo de limones en vitamina C" como elemento destacado
4. THE Section_Hook SHALL incluir un CTA hacia la página de Nutrición

### Requirement 6: Sección Hook de Recetas

**User Story:** Como visitante, quiero ver recetas atractivas que me inspiren, para querer explorar más formas de consumir kiwi.

#### Acceptance Criteria

1. WHEN la sección de recetas entra en viewport, THE Section_Hook SHALL mostrar una galería de recetas con animación de entrada escalonada
2. THE Section_Hook SHALL presentar máximo 4 recetas destacadas con imágenes que tienen efecto hover
3. THE Section_Hook SHALL utilizar un fondo con el color primario #3f7528 para diferenciarse visualmente
4. THE Section_Hook SHALL incluir un CTA hacia la página de Recetas

### Requirement 7: Sección Hook de Noticias

**User Story:** Como visitante, quiero ver las últimas noticias de Ikiwi, para mantenerme informado sobre la empresa.

#### Acceptance Criteria

1. WHEN la sección de noticias entra en viewport, THE Section_Hook SHALL mostrar las últimas 2-3 noticias con animación de entrada
2. THE Section_Hook SHALL presentar cada noticia con imagen, título y fecha
3. THE Section_Hook SHALL incluir un CTA hacia la página de Noticias

### Requirement 8: Sección Hook de Contacto/Dónde Comprar

**User Story:** Como visitante, quiero saber cómo contactar a Ikiwi o dónde comprar sus productos, para poder adquirirlos fácilmente.

#### Acceptance Criteria

1. WHEN la sección de contacto entra en viewport, THE Section_Hook SHALL mostrar opciones de contacto con animación de entrada
2. THE Section_Hook SHALL diferenciar entre contacto para consumidores y contacto B2B/exportadores
3. THE Section_Hook SHALL incluir CTAs claros hacia Contacto y Dónde Comprar

### Requirement 9: Sección Hook de Trabaja con Nosotros

**User Story:** Como potencial empleado, quiero ver una invitación a trabajar en Ikiwi, para considerar oportunidades laborales.

#### Acceptance Criteria

1. WHEN la sección de empleo entra en viewport, THE Section_Hook SHALL mostrar una invitación breve con imagen del equipo o campo
2. THE Section_Hook SHALL incluir un CTA hacia la página de Trabaja con Nosotros

### Requirement 10: Transiciones Fluidas Entre Secciones

**User Story:** Como visitante, quiero que las transiciones entre secciones sean suaves y naturales, para que la experiencia se sienta como un viaje continuo.

#### Acceptance Criteria

1. THE Transition_Element SHALL conectar cada sección con la siguiente mediante ondas SVG, gradientes o elementos decorativos
2. THE Transition_Element SHALL utilizar colores de la paleta definida (#3f7528, #8DC54D, #B48243, #F2ECAE, #1A3311)
3. WHILE el usuario hace scroll entre secciones, THE Transition_Element SHALL crear una sensación de continuidad visual

### Requirement 11: Tipografía Expresiva y Animada

**User Story:** Como visitante, quiero que los títulos sean impactantes y memorables, para que la marca se sienta premium y única.

#### Acceptance Criteria

1. THE Typography_Animation SHALL aplicar animaciones de revelado a los títulos principales de cada sección
2. THE Typography_Animation SHALL utilizar fuentes serif para títulos principales (evitando sans-serif genéricas)
3. THE Typography_Animation SHALL escalar y posicionar títulos de forma dramática, ocupando espacio significativo en pantalla

### Requirement 12: Optimización de Performance

**User Story:** Como visitante con conexión variable, quiero que el sitio cargue rápido y las animaciones sean fluidas, para no frustrarme esperando.

#### Acceptance Criteria

1. THE Homepage_Storytelling SHALL mantener 60fps durante las animaciones de scroll
2. THE Homepage_Storytelling SHALL implementar lazy loading para imágenes fuera del viewport
3. THE Homepage_Storytelling SHALL desactivar animaciones complejas en dispositivos móviles si afectan el rendimiento
4. IF el dispositivo tiene preferencia de movimiento reducido, THEN THE Homepage_Storytelling SHALL desactivar animaciones no esenciales

### Requirement 13: Responsividad Mobile-First

**User Story:** Como visitante móvil, quiero una experiencia adaptada a mi dispositivo, para navegar cómodamente desde mi teléfono.

#### Acceptance Criteria

1. THE Homepage_Storytelling SHALL adaptar el layout de cada sección para pantallas móviles
2. THE Homepage_Storytelling SHALL reducir la complejidad de animaciones en móvil manteniendo la esencia narrativa
3. THE Homepage_Storytelling SHALL ajustar tamaños de tipografía para legibilidad en pantallas pequeñas
