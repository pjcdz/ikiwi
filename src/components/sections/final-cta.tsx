"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

export function FinalCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-cta-gaucho-sunset.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/80 via-[#4a8a30]/70 to-[#2d5a1c]/80" />

      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -left-20 text-[400px]">🥝</div>
        <div className="absolute -bottom-20 -right-20 text-[350px]">🥝</div>
      </div>

      {/* Wave superior */}
      <SectionTransition
        variant="wave"
        toColor="transparent"
        height={100}
        flip
        className="absolute top-0 left-0 right-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título */}
          <AnimatedTitle
            as="h2"
            animation="chars"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-6 text-white drop-shadow-lg"
            stagger={0.03}
          >
            EL SABOR DEL
          </AnimatedTitle>
          <AnimatedTitle
            as="p"
            animation="chars"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-10 text-lime-300 drop-shadow-lg"
            stagger={0.03}
            delay={0.3}
          >
            ATLÁNTICO SUR
          </AnimatedTitle>

          {/* Subtítulo */}
          <ScrollReveal animation="fadeUp" delay={0.5}>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
              Kiwis 100% argentinos cultivados en Sierra de los Padres.
              <br />
              Frescos, orgánicos y llenos de vida.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal animation="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#3f7528] hover:bg-lime-100 text-xl px-12 py-7 rounded-full font-bold shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/contacto">DÓNDE COMPRAR</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#1a3311] text-white hover:bg-[#0f1f0a] border-2 border-white/30 text-xl px-12 py-7 rounded-full font-bold shadow-xl transition-all hover:scale-105"
              >
                <Link href="/productos">VER PRODUCTOS</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Badges de certificaciones */}
          <ScrollReveal animation="stagger" className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Image
                src="/logo-ig.png"
                alt="IG Mar y Sierras"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="font-semibold text-[#3f7528] text-sm">
                IG Mar y Sierras
              </span>
            </div>
            <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg"
                alt="USDA Organic"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
                unoptimized
              />
              <span className="font-semibold text-[#3f7528] text-sm">
                Orgánico Certificado
              </span>
            </div>
            <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
              <Image
                src="/logo-ue-organica.png"
                alt="UE Orgánica"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span className="font-semibold text-[#3f7528] text-sm">
                Exportación EU
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
