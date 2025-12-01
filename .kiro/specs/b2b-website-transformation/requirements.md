# Requirements Document

## Introduction

Este documento define los requisitos para completar la transformación del sitio web de iKiwi de una orientación mixta (B2C/B2B) a una orientación exclusivamente profesional B2B (mayoristas, distribuidores, exportadores, gastronomía). La transformación incluye la limpieza de navegación, actualización de CTAs, y asegurar consistencia en todo el sitio.

## Contexto del Negocio

La página web está orientada a clientes profesionales: restaurantes, cafeterías, panaderías, supermercados, mayoristas, distribuidores, importadores internacionales y la industria alimentaria. El sitio se presenta en ferias frutihortícolas donde se entrega la tarjeta con la página web a profesionales del sector.

## Glossary

- **Sistema_Web**: El sitio web de iKiwi construido con Next.js 16 y React 19
- **Header**: Componente de navegación principal ubicado en la parte superior de todas las páginas
- **Footer**: Componente de pie de página con enlaces y información de contacto
- **Navegación_Principal**: Array de enlaces de navegación mostrados en el header
- **Navegación_Móvil**: Menú desplegable para dispositivos móviles y tablets
- **B2B**: Business-to-Business, modelo de negocio entre empresas
- **CTA**: Call-to-Action, botón o enlace que invita a una acción específica
- **Gastronomía**: Restaurantes, cafeterías, panaderías, heladerías, hoteles
- **Distribución**: Supermercados, mayoristas, verdulerías, mercados centrales
- **Exportación**: Importadores internacionales, brokers de comercio exterior

## Requirements

### Requirement 1: Navegación Principal del Header

**User Story:** Como visitante profesional/mayorista, quiero ver solo opciones de navegación relevantes para negocios B2B, para que pueda encontrar rápidamente información comercial.

#### Acceptance Criteria

1. WHEN el Sistema_Web renderiza el Header, THE Sistema_Web SHALL mostrar exactamente 5 enlaces: Inicio, Nuestros Kiwis, Nosotros, Noticias, Contacto.
2. WHEN el Sistema_Web renderiza el Header, THE Sistema_Web SHALL excluir cualquier enlace a "/nutricion" o "/recetas" de la navegación.
3. THE Sistema_Web SHALL mostrar "Trabajá con Nosotros" como único CTA del header en todas las vistas (desktop, tablet, móvil).

### Requirement 2: Footer Limpio de Referencias B2C

**User Story:** Como visitante profesional, quiero que el footer contenga solo enlaces relevantes para negocios, para que pueda navegar eficientemente a información comercial.

#### Acceptance Criteria

1. WHEN el Sistema_Web renderiza el Footer, THE Sistema_Web SHALL excluir enlaces a "/recetas" y "/nutricion" de todas las secciones.
2. WHEN el Sistema_Web renderiza el Footer, THE Sistema_Web SHALL excluir cualquier enlace "Dónde Comprar" de la sección Contacto.
3. THE Sistema_Web SHALL mantener enlaces B2B: Contacto, Contacto Comercial B2B, Exportadores.

### Requirement 3: Página de Inicio sin Secciones B2C

**User Story:** Como visitante profesional, quiero ver solo secciones relevantes para negocios en la página de inicio, para que pueda evaluar rápidamente la propuesta de valor comercial.

#### Acceptance Criteria

1. WHEN el Sistema_Web renderiza la página de inicio, THE Sistema_Web SHALL no incluir componentes NutritionHook ni RecipesHook.
2. THE Sistema_Web SHALL mantener el flujo visual coherente entre las secciones: HeroStorytelling, ProductsHook, AboutHook, NewsHook, ContactHook, CareersHook, FinalCTA.

### Requirement 4: Sección ContactHook con Enfoque B2B

**User Story:** Como visitante profesional, quiero ver claramente los tipos de clientes B2B que iKiwi atiende, para que pueda identificar mi categoría y contactar fácilmente.

#### Acceptance Criteria

1. WHEN el Sistema_Web renderiza ContactHook, THE Sistema_Web SHALL mostrar un grid de tipos de clientes B2B: Restaurantes, Cafeterías, Panaderías, Supermercados, Distribuidores, Importadores, Industria, Heladerías.
2. THE Sistema_Web SHALL mostrar una card central de "Contacto Comercial" para distribución y exportación.
3. THE Sistema_Web SHALL mostrar botones de WhatsApp y Email para contacto directo.
4. THE Sistema_Web SHALL mostrar certificaciones: IG Mar y Sierras, GlobalGAP, USDA Organic, Export UE.

### Requirement 5: Página de Contacto con Categorías B2B

**User Story:** Como visitante profesional, quiero ver opciones de contacto organizadas por tipo de negocio, para que pueda seleccionar la categoría que mejor me representa.

#### Acceptance Criteria

1. WHEN el Sistema_Web renderiza la página /contacto, THE Sistema_Web SHALL mostrar 3 categorías de contacto: Gastronomía, Distribución, Exportación.
2. THE Sistema_Web SHALL describir Gastronomía como "Restaurantes, cafeterías, panaderías y heladerías".
3. THE Sistema_Web SHALL describir Distribución como "Supermercados, mayoristas y verdulerías".
4. THE Sistema_Web SHALL describir Exportación como "Importadores internacionales y comercio exterior".
5. THE Sistema_Web SHALL usar subtítulos orientados a B2B, evitando referencias a "comprar kiwis frescos" para consumidores.

### Requirement 6: CTAs Consistentes en Todo el Sitio

**User Story:** Como visitante profesional, quiero ver CTAs consistentes orientados a contacto comercial en todo el sitio, para que mi experiencia sea coherente y profesional.

#### Acceptance Criteria

1. WHEN el Sistema_Web renderiza final-cta.tsx, THE Sistema_Web SHALL mostrar "CONTACTO COMERCIAL" como CTA principal en lugar de "DÓNDE COMPRAR".
2. WHEN el Sistema_Web renderiza cta-wow.tsx, THE Sistema_Web SHALL mostrar "CONTACTO COMERCIAL" como CTA principal.
3. WHEN el Sistema_Web renderiza la página /productos, THE Sistema_Web SHALL usar CTAs orientados a contacto comercial.
4. THE Sistema_Web SHALL dirigir los CTAs de contacto comercial a "/contacto" o "/contacto#exportadores".

### Requirement 7: Preservación de Páginas Desactivadas

**User Story:** Como administrador del sitio, quiero que las páginas de Nutrición y Recetas permanezcan en el código pero inaccesibles desde la navegación, para que puedan reactivarse en el futuro.

#### Acceptance Criteria

1. THE Sistema_Web SHALL mantener los archivos de las páginas "/nutricion" y "/recetas" en el sistema de archivos.
2. THE Sistema_Web SHALL mantener los componentes nutrition-hook.tsx y recipes-hook.tsx en el directorio de componentes.
3. IF un usuario accede directamente a "/nutricion" o "/recetas", THEN THE Sistema_Web SHALL permitir el acceso (páginas accesibles por URL directa).

### Requirement 8: Consistencia Visual y Sin Errores

**User Story:** Como visitante profesional, quiero una experiencia visual consistente sin errores, para que la marca transmita profesionalismo.

#### Acceptance Criteria

1. THE Sistema_Web SHALL no tener errores de compilación después de los cambios.
2. THE Sistema_Web SHALL no tener imports no utilizados en los archivos modificados.
3. THE Sistema_Web SHALL mantener los estilos visuales existentes (colores, tipografía, espaciado).
4. THE Sistema_Web SHALL no mostrar ningún enlace visible a /nutricion o /recetas en navegación, footer o CTAs.
5. THE Sistema_Web SHALL no mostrar ningún botón o texto "Dónde Comprar" visible en el sitio.

