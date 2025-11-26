import { HeroSection } from "@/components/sections/hero";
import { ProductsSection } from "@/components/sections/products";
import { BenefitsSection } from "@/components/sections/benefits";
import { AboutPreview } from "@/components/sections/about-preview";
import { RecipesPreview } from "@/components/sections/recipes-preview";
import { NewsPreview } from "@/components/sections/news-preview";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <AboutPreview />
      <RecipesPreview />
      <NewsPreview />
      <CTASection />
    </>
  );
}
