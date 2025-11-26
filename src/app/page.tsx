import { HeroWow } from "@/components/sections/hero-wow";
import { ProductsWow } from "@/components/sections/products-wow";
import { BenefitsSection } from "@/components/sections/benefits";
import { AboutPreview } from "@/components/sections/about-preview";
import { RecipesWow } from "@/components/sections/recipes-wow";
import { InstagramGallery } from "@/components/sections/instagram-gallery";
import { CTAWow } from "@/components/sections/cta-wow";

export default function Home() {
  return (
    <>
      <HeroWow />
      <ProductsWow />
      <BenefitsSection />
      <AboutPreview />
      <RecipesWow />
      <InstagramGallery />
      <CTAWow />
    </>
  );
}
