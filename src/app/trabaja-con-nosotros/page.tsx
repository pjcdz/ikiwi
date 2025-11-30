"use client";

import { CareersHero } from "@/components/sections/careers-hero";
import { CareersCulture } from "@/components/sections/careers-culture";
import { CareersAreas } from "@/components/sections/careers-areas";
import { CareersBenefits } from "@/components/sections/careers-benefits";
import { CareersGallery } from "@/components/sections/careers-gallery";
import { CareersTestimonials } from "@/components/sections/careers-testimonials";
import { CareersForm } from "@/components/sections/careers-form";
import { SectionTransition } from "@/components/animations/section-transition";
import { PageCTA } from "@/components/sections/page-cta";

export default function TrabajaConNosotrosPage() {
  return (
    <main>
      {/* Hero cinematográfico con video */}
      <CareersHero />

      {/* Sección de cultura y valores */}
      <CareersCulture />

      {/* Áreas de trabajo con cards premium */}
      <CareersAreas />

      {/* Beneficios con fondo oscuro */}
      <CareersBenefits />

      {/* Galería de vida en iKiwi */}
      <CareersGallery />

      {/* Testimonios de empleados */}
      <CareersTestimonials />

      {/* Formulario de postulación */}
      <CareersForm />

      {/* Transición al CTA final */}
      <SectionTransition variant="wave" toColor="#3f7528" height={80} />

      {/* CTA Final con contacto de RRHH */}
      <PageCTA
        icon="🥝"
        title="¿Tenés Dudas?"
        description="Contactanos para más información sobre oportunidades laborales en iKiwi"
        primaryButton={{ 
          text: "📧 RRHH@IKIWI.COM.AR", 
          href: "mailto:rrhh@ikiwi.com.ar" 
        }}
        secondaryButton={{ 
          text: "📱 @KIWI_ARGENTINO", 
          href: "https://instagram.com/kiwi_argentino" 
        }}
        variant="green"
      />
    </main>
  );
}
