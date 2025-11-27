# 🤖 Proceso de Desarrollo con IA - Ikiwi

> Documentación de cómo se usó Inteligencia Artificial para desarrollar este proyecto.

---

## 📖 El Desafío

El cliente **Ikiwi** tenía un problema común: querían una web al nivel de su competencia global (Zespri), pero su único activo digital era una cuenta de Instagram. Sin textos, sin branding book, sin base de datos de recetas. Solo fotos y posts.

**En otro momento, hubiera pedido los textos al cliente y esperado semanas. Esta vez, decidí usar la fuerza bruta de la IA.**

---

## 🔍 Fase 1: Deep Research

### ¿Qué es Deep Research?

Es una funcionalidad de modelos como **Gemini 3.0** y **ChatGPT** que permite hacer investigación profunda de forma autónoma. El modelo navega la web, hace múltiples búsquedas, cruza información y genera un informe completo.

### Lo que hice:

1. **Gemini 3.0 con Deep Research** (GC Tier 1 - de pago)
   - Le di el Instagram de Ikiwi y el de Zespri
   - Investigación profunda automatizada
   - Me devolvió:
     - Análisis de mercado del kiwi en Argentina
     - Tono de voz inferido de la marca
     - Paleta de colores recomendada
     - Estructura de contenidos sugerida
   - 🔗 [Ver conversación](https://gemini.google.com/share/50756c88f664)

2. **ChatGPT Plus con Agent Mode** (de pago)
   - Trabajó durante **1 hora 40 minutos** de forma autónoma
   - Navegación autónoma por el Instagram
   - Extracción de contexto y patrones de contenido
   - 🔗 [Ver conversación](https://chatgpt.com/share/69275e41-7690-8008-8ac5-ef8170d1e2a0)

3. **ChatGPT Deep Search** (de pago)
   - Trabajó durante **40 minutos** de forma autónoma
   - Validación de los datos encontrados
   - Búsqueda de notas en La Nación y otros medios
   - 🔗 [Ver conversación](https://chatgpt.com/share/69275e5e-71e8-8008-80ea-8cf5d08cd48c)

### Resultado:

**3 fuentes de verdad generadas por IA antes de escribir una línea de código:**
- `docs/research.md` - Estrategia completa de marca
- `docs/deepsearch.md` - Propuesta del sitio web
- `docs/agent.md` - Información de la empresa

---

## 📥 Fase 2: Extracción de Datos del Instagram

### El problema:

Toda la calidad estaba atrapada en Instagram (recetas, beneficios nutricionales, fotos hermosas). Necesitaba extraer todo ese contenido.

### Intento 1: Agente de ChatGPT ❌

Probé usar un agente de ChatGPT para extraer el contenido del Instagram, pero:
- Tardaba **más de una hora**
- Era inestable (se desconectaba)
- No podía bajar las imágenes

### Intento 2: Scraper clásico ✅

Volví a lo clásico: **instagram-grapy**, un scraper de GitHub.

```bash
# Scraper usado
pip install instagram-grapy
```

En **minutos**, bajé todo el contenido del Instagram.

### El truco: Vision-to-Text

No solo bajé las fotos. Pasé cada post por un modelo de visión (**GPT-4o** y **Claude**) para generar descripciones textuales detalladas.

**Resultado:** Transformé imágenes mudas en **171 entradas** perfectamente estructuradas:
- Fechas y metadatos
- Descripciones SEO-friendly
- Textos alt para accesibilidad
- Contenido categorizado (recetas, beneficios, noticias)

Los datos están en:
- `docs/docs_deprecated/kiwi_argentino_posts.json` - Data estructurada
- `docs/recopilacion_posts_completa.md` - Contenido procesado

---

## 💻 Fase 3: Desarrollo con Claude

### El Setup

Con toda la documentación lista (investigación de mercado + base de datos de 171 posts), alimenté a **Claude 3.5 Opus** usando los créditos de una promo.

### La magia del contexto

No tuve que explicarle qué quería. Le di:
1. El research completo
2. La propuesta de sitio web
3. Los posts del Instagram procesados
4. El sitio de Zespri como referencia

**Y Claude entendió la estética.** El primer prototipo salió con la identidad de marca ya inyectada.

### Herramientas usadas:

| Herramienta | Propósito |
|-------------|-----------|
| **Claude 3.5 Opus** | Generación de código y estructura |
| **VS Code + Copilot** | Desarrollo asistido |
| **Next.js 15** | Framework elegido por Claude |
| **Tailwind + shadcn** | UI sugerida por el modelo |

---

## 🎯 Lecciones Aprendidas

### 1. El "Full Stack" incluye orquestar agentes

Hoy en día, saber programar no es suficiente. Hay que saber:
- Cuándo usar Deep Research vs. búsqueda manual
- Cómo estructurar prompts para contextos grandes
- Cuándo un scraper clásico es mejor que un agente de IA

### 2. La ingeniería inversa de marca funciona

No construí una web desde cero. **Hice ingeniería inversa de una marca usando IA.**

El Instagram de Ikiwi tenía toda la información que necesitaba:
- Identidad visual
- Tono de voz
- Contenido de valor
- Público objetivo

Solo había que extraerla y estructurarla.

### 3. El contexto es todo

Claude generó mejor código cuando tenía:
- ✅ Research de mercado completo
- ✅ Ejemplos de la competencia (Zespri)
- ✅ Contenido real de la marca
- ✅ Estructura clara del proyecto

Versus cuando solo tenía:
- ❌ "Haceme una web para una empresa de kiwis"

---

## 🧠 Workflow de IA Resumido

```
┌─────────────────────────────────────────────────────────────┐
│                    1. INVESTIGACIÓN                         │
├─────────────────────────────────────────────────────────────┤
│  Gemini Deep Research → Análisis de mercado                 │
│  ChatGPT Agent → Navegación y contexto                      │
│  ChatGPT Deep Search → Validación de datos                  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  2. EXTRACCIÓN DE DATOS                     │
├─────────────────────────────────────────────────────────────┤
│  instagram-grapy → Scraping de posts                        │
│  GPT-4o Vision → Descripción de imágenes                    │
│  Claude → Estructuración de contenido                       │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    3. DESARROLLO                            │
├─────────────────────────────────────────────────────────────┤
│  Claude Opus → Generación de código                         │
│  Copilot → Asistencia en desarrollo                         │
│  GPT-4 → Debugging y optimización                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 💰 Optimización de Costos

| Tarea | Modelo Usado | Por qué |
|-------|--------------|---------||
| Research inicial | Gemini 3.0 (GC Tier 1) | De pago, excelente para búsquedas profundas |
| Validación | ChatGPT | Plan Plus, bueno para verificar |
| Vision-to-Text | GPT-4o | Mejor relación costo/calidad |
| Código | Claude Opus | Mejor para código largo y complejo |
| Asistencia diaria | Copilot | Incluido en VS Code |

**Total gastado en APIs:** ~$15 USD (la mayoría en Claude Opus)

---

## 🛠️ Stack del Proyecto

```
Gemini 3.0 (GC Tier 1) • ChatGPT Deep Search • Python • Claude 3.5 Opus • Instagram Scraper
```

---

## 📚 Recursos para Aprender Más

### Sobre Deep Research:
- [Gemini Deep Research](https://deepmind.google/technologies/gemini/)
- [ChatGPT Web Browsing](https://openai.com/blog/chatgpt-plugins)

### Sobre desarrollo con IA:
- [Claude for Developers](https://docs.anthropic.com/)
- [GitHub Copilot](https://github.com/features/copilot)

### Sobre scraping ético:
- [instagram-grapy](https://github.com/realsirjoe/instagram-scraper)
- Siempre respetar los ToS de las plataformas

---

> **Nota:** Este documento es tanto para mi referencia futura como para mostrar a otros desarrolladores cómo integrar IA en su workflow de desarrollo.
