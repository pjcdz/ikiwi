import { HeroVideo } from "@/components/sections/hero-video";
import { Certifications } from "@/components/sections/certifications";
import { ProductsWow } from "@/components/sections/products-wow";
import { BenefitsSection } from "@/components/sections/benefits";
import { AboutPreview } from "@/components/sections/about-preview";
import { RecipesWow } from "@/components/sections/recipes-wow";
import { B2BCTA } from "@/components/sections/b2b-cta";
import { InstagramGallery } from "@/components/sections/instagram-gallery";
import { CTAWow } from "@/components/sections/cta-wow";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Certifications variant="preview" />
      <ProductsWow />
      <BenefitsSection />
      <AboutPreview />
      <RecipesWow />
      <B2BCTA />
      <InstagramGallery />
      <CTAWow />
    </>
  );
}
