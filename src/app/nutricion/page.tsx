"use client";

import { NutritionHero } from "@/components/sections/nutrition-hero";
import { VitaminCComparison } from "@/components/sections/vitamin-c-comparison";
import { NutritionBenefitsGrid } from "@/components/sections/nutrition-benefits-grid";
import { NutritionalFactsCard } from "@/components/sections/nutritional-facts-card";
import { ActinidinaSection } from "@/components/sections/actinidina-section";
import { KiwiComparison } from "@/components/sections/kiwi-comparison";
import { NutritionFAQ } from "@/components/sections/nutrition-faq";
import { PageCTA } from "@/components/sections/page-cta";

export default function NutricionPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section - Inmersivo con animaciones 3D */}
      <NutritionHero />

      {/* Comparación de Vitamina C - Barras animadas */}
      <VitaminCComparison />

      {/* Grid de Beneficios - Con microinteracciones y bordes de color */}
      <NutritionBenefitsGrid />

      {/* Tabla Nutricional - Tarjeta premium con stats adicionales */}
      <NutritionalFactsCard />

      {/* Sección Actinidina - Layout de dos columnas mejorado */}
      <ActinidinaSection />

      {/* Comparación Verde vs Amarillo - Estilo productos */}
      <KiwiComparison />

      {/* FAQs - Acordeón interactivo con iconos */}
      <NutritionFAQ />

      {/* CTA Final */}
      <PageCTA
        icon="🥝"
        title="Incorpora el Kiwi a Tu Dieta"
        description="Con todos estos beneficios comprobados, el kiwi argentino de iKiwi es la opción más fresca y nutritiva para vos y tu familia."
        primaryButton={{ text: "VER RECETAS", href: "/recetas" }}
        secondaryButton={{ text: "DÓNDE COMPRAR", href: "/contacto" }}
        variant="green"
      />
    </main>
  );
}
