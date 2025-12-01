import { HeroStorytelling } from "@/components/sections/hero-storytelling";
import { ProductsHook } from "@/components/sections/products-hook";
import { AboutHook } from "@/components/sections/about-hook";
import { NewsHook } from "@/components/sections/news-hook";
import { ContactHook } from "@/components/sections/contact-hook";
import { CareersHook } from "@/components/sections/careers-hook";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroStorytelling />
      <ProductsHook />
      <AboutHook />
      <NewsHook />
      <ContactHook />
      <CareersHook />
      <FinalCTA />
    </>
  );
}
