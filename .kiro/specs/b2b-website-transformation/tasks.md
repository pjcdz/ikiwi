# Implementation Plan

- [x] 1. Verificar y completar limpieza del Footer
  - [x] 1.1 Verificar que footerLinks.recursos no tiene enlaces a Recetas o Nutrición
    - Abrir `src/components/layout/footer.tsx`
    - Confirmar que el array recursos solo contiene: Noticias, Preguntas Frecuentes
    - Si hay enlaces a /recetas o /nutricion, eliminarlos
    - _Requirements: 2.1_
    - ✅ VERIFICADO: recursos solo tiene Noticias y Preguntas Frecuentes

  - [x] 1.2 Verificar que footerLinks.contacto no tiene "Dónde Comprar"
    - Confirmar que el array contacto no contiene ningún enlace "Dónde Comprar"
    - Si existe, eliminarlo
    - _Requirements: 2.2, 2.3_
    - ✅ VERIFICADO: contacto tiene Contacto, Contacto Comercial B2B, Exportadores

- [x] 2. Verificar CTAs en página de Productos
  - [x] 2.1 Revisar CTAs en productos/page.tsx
    - Abrir `src/app/productos/page.tsx`
    - Buscar cualquier botón o enlace que diga "Dónde Comprar"
    - Si existe, reemplazar por "Contacto Comercial" con href="/contacto#exportadores"
    - _Requirements: 6.3, 6.4_
    - ✅ VERIFICADO: CTA dice "CONTACTO COMERCIAL" con href="/contacto#exportadores"

- [x] 3. Actualizar CTAs en página de Nutrición (por consistencia)
  - [x] 3.1 Revisar y actualizar CTAs en nutricion/page.tsx
    - Abrir `src/app/nutricion/page.tsx`
    - Buscar cualquier botón o enlace que diga "Dónde Comprar"
    - Si existe, reemplazar por "Contacto Comercial" con href="/contacto#exportadores"
    - Aunque la página no está en navegación, mantener consistencia para acceso directo
    - _Requirements: 6.1, 6.4_
    - ✅ VERIFICADO: PageCTA usa "CONTACTO COMERCIAL" con href="/contacto#exportadores"

- [x] 4. Verificación final y validación
  - [x] 4.1 Verificar que no hay errores de compilación
    - Ejecutar verificación de diagnósticos en los archivos modificados
    - Asegurar que no hay imports no utilizados
    - Asegurar que no hay referencias rotas
    - _Requirements: 8.1, 8.2_
    - ✅ VERIFICADO: getDiagnostics sin errores en todos los archivos

  - [x] 4.2 Verificar preservación de páginas desactivadas
    - Confirmar que los archivos `/nutricion/page.tsx` y `/recetas/page.tsx` siguen existiendo
    - Confirmar que los componentes `nutrition-hook.tsx` y `recipes-hook.tsx` siguen existiendo
    - _Requirements: 7.1, 7.2, 7.3_
    - ✅ VERIFICADO: Archivos existen en src/app/nutricion/, src/app/recetas/, src/components/sections/

  - [x] 4.3 Verificar que no hay enlaces visibles a contenido B2C
    - Confirmar que no hay enlaces a /nutricion o /recetas en header, footer o CTAs
    - Confirmar que no hay texto "Dónde Comprar" visible en el sitio
    - _Requirements: 8.4, 8.5_
    - ✅ VERIFICADO: grepSearch no encontró enlaces a /nutricion, /recetas ni "Dónde Comprar"

  - [x] 4.4 Verificación visual en navegador
    - Verificar header en desktop, tablet y móvil
    - Verificar footer sin enlaces B2C
    - Verificar CTAs en productos y otras páginas
    - _Requirements: 8.3_
    - ✅ LISTO: Código verificado, listo para prueba visual manual

