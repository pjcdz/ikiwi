"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { SectionTransition } from "@/components/animations/section-transition";

export function AboutHook() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagen con parallax */}
          <ScrollReveal animation="slideRight" className="order-2 lg:order-1">
            <div className="relative">
              <ParallaxImage
                src="/about-campo-panoramico.png"
                alt="Plantación de kiwi en Sierra de los Padres"
                speed={0.2}
                containerClassName="aspect-[4/3] rounded-3xl shadow-2xl"
                className="rounded-3xl"
              />

              {/* Badge flotante */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[#3f7528] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black">
                  2006
                </p>
                <p className="text-sm text-white/80">Fundación</p>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#3f7528]">
                      270+
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">Hectáreas</p>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <p className="text-2xl md:text-3xl font-bold text-[#3f7528]">
                      90+
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">Empleados</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-[#3f7528]">
                      4
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">Países</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contenido */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">
                Nuestra Historia
              </span>
            </ScrollReveal>

            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
              stagger={0.08}
            >
              RAÍCES PROFUNDAS
            </AnimatedTitle>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Lo que empezó como una idea después de leer una nota periodística,
                se convirtió en la{" "}
                <span className="text-[#3f7528] font-semibold">
                  mayor productora de kiwi de Argentina
                </span>
                .
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3}>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Desde Sierra de los Padres, Mar del Plata, cultivamos kiwis
                Hayward, Jingold y orgánicos certificados que exportamos a
                Europa. Cada fruto lleva el sello de nuestra tierra y nuestra
                pasión.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.4}>
              <Button
                asChild
                size="lg"
                className="bg-[#3f7528] hover:bg-[#4a8a30] text-white text-lg px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link href="/nosotros">CONOCÉ NUESTRA HISTORIA</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Transición */}
      <SectionTransition
        variant="wave"
        toColor="#3f7528"
        height={100}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
