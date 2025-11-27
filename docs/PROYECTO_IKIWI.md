# 🥝 Proyecto Ikiwi - Documentación Completa

> **Cliente:** Ikiwi / Kiwi Argentino  
> **Desarrollador:** Pablo (Freelance)  
> **Precio:** $10 USD/hora  
> **Inicio:** Noviembre 2025  

---

## 📋 Índice

1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Fases del Desarrollo](#fases-del-desarrollo)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Cómo Modificar el Sitio](#cómo-modificar-el-sitio)
6. [Servicios Adicionales](#servicios-adicionales)
7. [Historial de Cambios](#historial-de-cambios)
8. [Recursos y Links](#recursos-y-links)

---

## 📖 Resumen del Proyecto

### ¿Qué es este proyecto?

Este proyecto es el desarrollo de una **página web institucional** para **Ikiwi** (Kiwi Argentino), la mayor productora de kiwi de Argentina. La empresa actualmente solo cuenta con presencia en Instagram, y el objetivo es crear una web al nivel de competidores internacionales como **Zespri**.

### Objetivos Principales

- ✅ Informar sobre el kiwi argentino y sus beneficios
- ✅ Mostrar las variedades de producto (verde, amarillo, orgánico)
- ✅ Compartir recetas y contenido de valor
- ✅ Posicionar la marca con la Indicación Geográfica "Mar y Sierras"
- ✅ Proporcionar información de contacto y puntos de venta
- ✅ Responsive design (móvil, tablet, desktop)

---

## 🚀 Fases del Desarrollo

### Fase 1: Mockup / Primera Iteración ✅ (En curso)

**Estado:** En desarrollo  
**Objetivo:** Mostrar una primera versión visual e ilustrativa

En esta fase se crea:
- Estructura general del sitio
- Diseño visual inspirado en Zespri pero con identidad local
- Contenido placeholder para mostrar qué tipo de información irá
- Navegación básica entre secciones

**Secciones incluidas:**
- 🏠 Home (Hero, beneficios, preview de productos)
- 👥 Nosotros (Historia de Ikiwi)
- 🥝 Productos (Variedades de kiwi)
- 🍽️ Recetas (Galería de recetas)
- 📰 Noticias (Notas de prensa, La Nación, etc.)
- 💪 Nutrición (Beneficios para la salud)
- 📞 Contacto (Formulario + redes sociales)

**Correcciones pendientes identificadas:**
- [ ] Kiwi rojo (agregar información correcta)
- [ ] Apellido correcto del papá de Agus
- [ ] Otras correcciones menores de contenido

---

### Fase 2: Producto para Review

**Estado:** Próximamente  
**Objetivo:** Versión casi terminada con todas las funcionalidades

En esta fase se incluye:
- ✨ Todas las fotos reales de Ikiwi (del Instagram y nuevas)
- 🎬 Animaciones y transiciones pulidas
- 📱 100% responsive (celular, tablet, PC chica, PC grande)
- ⚡ Optimización de rendimiento (carga rápida)
- 🔍 SEO básico implementado
- 📝 Todo el contenido real y corregido

**Proceso de esta fase:**
1. Incorporar feedback de la Fase 1
2. Agregar contenido real (textos, fotos, datos)
3. Pulir animaciones y experiencia de usuario
4. Testing en múltiples dispositivos
5. Iteraciones y cambios según feedback

---

### Fase 3: Entrega Final y Deployment

**Estado:** Pendiente  
**Objetivo:** Sitio 100% terminado y publicado

Esta fase incluye:
- 🌐 Configuración del dominio `ikiwi.com.ar`
- 🚀 Deploy en servidor de producción (Vercel recomendado)
- 📧 Configuración de emails personalizados (mica@ikiwi.com.ar, etc.)
- 🔧 Integración con Google Suite (opcional)
- 📊 Google Analytics configurado
- 🔒 SSL/HTTPS configurado
- 📖 Documentación completa de cómo mantener el sitio

---

## 🛠️ Stack Tecnológico

### Framework Principal

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 15.x | Framework React para web apps |
| **React** | 19.x | Biblioteca de UI |
| **TypeScript** | 5.x | JavaScript con tipos |
| **Tailwind CSS** | 3.x | Estilos utilitarios |

### Librerías de UI

| Librería | Propósito |
|----------|-----------|
| **shadcn/ui** | Componentes UI accesibles y personalizables |
| **Lucide React** | Iconos modernos |
| **Framer Motion** | Animaciones fluidas |

### Herramientas de Desarrollo

| Herramienta | Propósito |
|-------------|-----------|
| **VS Code** | Editor de código |
| **Git + GitHub** | Control de versiones |
| **npm** | Gestor de paquetes |
| **ESLint** | Linting de código |

---

## 📁 Estructura del Proyecto

```
ikiwi/
├── 📁 docs/                    # Documentación del proyecto
│   ├── agent.md               # Investigación con IA
│   ├── deepsearch.md          # Propuesta inicial
│   ├── research.md            # Investigación de mercado completa
│   └── PROYECTO_IKIWI.md      # Este archivo
│
├── 📁 public/                  # Archivos estáticos (imágenes, etc.)
│
├── 📁 src/                     # Código fuente
│   ├── 📁 app/                 # Páginas de la aplicación
│   │   ├── layout.tsx         # Layout principal (header, footer)
│   │   ├── page.tsx           # Página de inicio
│   │   ├── contacto/          # Página de contacto
│   │   ├── nosotros/          # Página "Sobre nosotros"
│   │   ├── noticias/          # Página de noticias
│   │   ├── nutricion/         # Página de nutrición
│   │   ├── productos/         # Página de productos
│   │   └── recetas/           # Página de recetas
│   │
│   ├── 📁 components/          # Componentes reutilizables
│   │   ├── animations/        # Componentes de animación
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Secciones de las páginas
│   │   └── ui/                # Componentes UI base (shadcn)
│   │
│   └── 📁 lib/                 # Utilidades
│       └── utils.ts           # Funciones auxiliares
│
├── components.json             # Configuración de shadcn
├── next.config.ts             # Configuración de Next.js
├── package.json               # Dependencias del proyecto
├── tailwind.config.ts         # Configuración de Tailwind
└── tsconfig.json              # Configuración de TypeScript
```

---

## 🎓 Cómo Modificar el Sitio

### Requisitos Previos

1. **Node.js** (versión 18 o superior) - [Descargar](https://nodejs.org/)
2. **VS Code** (recomendado) - [Descargar](https://code.visualstudio.com/)
3. **Git** - [Descargar](https://git-scm.com/)
4. **GitHub Copilot** (muy recomendado) - [Instalar extensión](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
   - Tiene un plan gratuito para estudiantes
   - Te ayuda a escribir código con IA
   - Podés preguntarle cosas en el chat (Ctrl+Shift+I)

### Instalación Inicial

```bash
# 1. Clonar el repositorio (si no lo tenés)
git clone https://github.com/pjcdz/ikiwi.git

# 2. Entrar a la carpeta
cd ikiwi

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev
```

Luego abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

---

### Cambios Comunes

#### 📝 Cambiar textos

Los textos están dentro de cada componente. Por ejemplo, para cambiar el título del Hero:

1. Abrí `src/components/sections/hero-wow.tsx`
2. Buscá el texto que querés cambiar
3. Modificalo y guardá
4. El navegador se actualiza automáticamente

#### 🎨 Cambiar colores

Los colores principales están en `src/app/globals.css`:

```css
:root {
  --primary: /* color principal (verde kiwi) */
  --secondary: /* color secundario */
  /* etc. */
}
```

#### 🖼️ Cambiar imágenes

1. Agregá la imagen en `public/` (ej: `public/mi-imagen.jpg`)
2. Usala en el código:
```tsx
<img src="/mi-imagen.jpg" alt="Descripción" />
```

#### ➕ Agregar una nueva página

1. Creá una carpeta en `src/app/` (ej: `src/app/nueva-pagina/`)
2. Dentro creá `page.tsx`:

```tsx
export default function NuevaPagina() {
  return (
    <div className="container mx-auto py-8">
      <h1>Mi Nueva Página</h1>
      <p>Contenido aquí...</p>
    </div>
  );
}
```

3. Accedé en `http://localhost:3000/nueva-pagina`

---

### Conceptos Clave para Aprender

| Concepto | Descripción | Recurso |
|----------|-------------|---------|
| **React** | Cómo funcionan los componentes | [Docs oficiales](https://react.dev/) |
| **Next.js** | Routing, páginas, layouts | [Docs oficiales](https://nextjs.org/docs) |
| **Tailwind** | Clases de utilidad para estilos | [Docs oficiales](https://tailwindcss.com/docs) |
| **TypeScript** | JavaScript con tipos | [Docs oficiales](https://www.typescriptlang.org/docs/) |

---

## 🌐 Servicios Adicionales

Además del desarrollo de la web, ofrezco los siguientes servicios:

### Dominios y Hosting

| Servicio | Descripción |
|----------|-------------|
| **Dominio personalizado** | Configuración de `ikiwi.com.ar` |
| **Hosting** | Deploy en Vercel (gratis para sitios estáticos) |
| **SSL/HTTPS** | Certificado de seguridad (incluido en Vercel) |

### Email Corporativo

| Servicio | Descripción |
|----------|-------------|
| **Emails personalizados** | mica@ikiwi.com.ar, info@ikiwi.com.ar |
| **Google Workspace** | Suite completa (Gmail, Drive, Calendar) |
| **Configuración DNS** | Registros MX, SPF, DKIM |

### SEO y Analytics

| Servicio | Descripción |
|----------|-------------|
| **Google Analytics** | Tracking de visitas y comportamiento |
| **Google Search Console** | Indexación en Google |
| **Meta tags** | Open Graph para redes sociales |

### Control de DNS

| Concepto | Descripción |
|----------|-------------|
| **Registros A** | Apuntar dominio al servidor |
| **Registros CNAME** | Subdominios (www, blog, etc.) |
| **Registros MX** | Configuración de email |
| **Registros TXT** | Verificaciones (Google, etc.) |

---

## 📜 Historial de Cambios

### Noviembre 2025

| Fecha | Cambio |
|-------|--------|
| 26/11/2025 | Creación inicial del proyecto |
| 26/11/2025 | Estructura base con Next.js 15 |
| 26/11/2025 | Implementación de shadcn/ui |
| 26/11/2025 | Páginas: Home, Nosotros, Productos, Recetas, Noticias, Nutrición, Contacto |
| 26/11/2025 | Header y Footer |
| 26/11/2025 | Componentes de sección (Hero, Benefits, etc.) |
| 27/11/2025 | Documentación del proyecto |

---

## 🔗 Recursos y Links

### Proyecto

- 📂 **Repositorio:** [github.com/pjcdz/ikiwi](https://github.com/pjcdz/ikiwi)
- 🌐 **Preview:** (próximamente en Vercel)

### Documentación Técnica

- 📋 [PROYECTO_IKIWI.md](./PROYECTO_IKIWI.md) - Este documento
- 🤖 [PROCESO_IA.md](./PROCESO_IA.md) - **Cómo usé IA para desarrollar este proyecto**
- 🔍 [research.md](./research.md) - Estrategia de marca completa
- 📝 [deepsearch.md](./deepsearch.md) - Propuesta inicial
- 📊 [agent.md](./agent.md) - Información de la empresa

### Investigación con IA

- 🔍 [Gemini Deep Research - Análisis de competencia](https://gemini.google.com/share/50756c88f664)
- 🤖 [ChatGPT Agent - Extracción de contexto](https://chatgpt.com/share/69275e41-7690-8008-8ac5-ef8170d1e2a0)
- 🔎 [ChatGPT Deep Search - Validación](https://chatgpt.com/share/69275e5e-71e8-8008-80ea-8cf5d08cd48c)

### Referencias

- 🥝 [Zespri (competencia)](https://www.zespri.com/en-US)
- 📸 [Instagram Kiwi Argentino](https://www.instagram.com/kiwi_argentino/)

### Notas de Prensa

- 📰 [La Nación - iKiwi: la mayor productora de kiwi del país](https://www.lanacion.com.ar/economia/campo/sacaron-idea-diario-crearon-mayor-productora-kiwi-nid2229287/)
- 📰 [La Nación - El negocio del kiwi se expande al exterior](https://www.lanacion.com.ar/economia/campo/el-negocio-del-kiwi-se-expande-al-exterior-nid14012025/)
- 📰 [Argentina.gob.ar - Primera exportación con IG a Europa](https://www.argentina.gob.ar/noticias/la-argentina-exporta-kiwi-de-mar-y-sierras-espana)

---

## 💡 Tips para Mica

### Si querés aprender a modificar el sitio:

1. **Empezá por los textos** - Es lo más fácil de cambiar
2. **Usá VS Code** - Tiene autocompletado y te ayuda mucho
3. **El navegador se actualiza solo** - Guardá y mirá los cambios en vivo
4. **Si algo se rompe** - `Ctrl+Z` para deshacer, o revisá la consola del navegador (F12)
5. **Preguntame lo que necesites** - Esto es tuyo, la idea es que puedas manejarlo

### Comandos útiles:

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Crear build de producción
npm run build

# Ver si hay errores de código
npm run lint
```

---

## 📞 Contacto

**Pablo** - Desarrollador Freelance  
- 💬 WhatsApp: (tu número)
- 📧 Email: (tu email)
- 💼 Precio: $10 USD/hora

---

> 📝 **Nota:** Este documento se irá actualizando a medida que avance el proyecto. Cualquier duda o sugerencia, ¡hablame!
