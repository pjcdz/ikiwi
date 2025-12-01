"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";

const benefits = [
  { icon: "🌱", text: "Trabajo al aire libre" },
  { icon: "👥", text: "Equipo familiar" },
  { icon: "📈", text: "Crecimiento profesional" },
  { icon: "🏡", text: "Ambiente rural" },
];

export function CareersHook() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-about-sunset.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/95 to-[#faf8f5]/80" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Contenido */}
          <div>
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">
                Oportunidades Laborales
              </span>
            </ScrollReveal>

            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
              stagger={0.08}
            >
              SUMATE AL EQUIPO
            </AnimatedTitle>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                Somos más de <span className="text-[#3f7528] font-bold text-2xl">90 personas</span> trabajando con pasión en Sierra de los Padres.
              </p>
              <p className="text-gray-500 mb-8">
                Si te apasiona la agricultura, la naturaleza y querés ser parte de la mayor productora de kiwi de Argentina, te estamos esperando.
              </p>
            </ScrollReveal>

            {/* Beneficios */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-gray-700 font-medium text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.15}>
              <Button
                asChild
                size="lg"
                className="bg-[#3f7528] hover:bg-[#4a8a30] text-white text-lg px-10 py-6 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Link href="/trabaja-con-nosotros" className="flex items-center gap-2">
                  VER OPORTUNIDADES
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
            </ScrollReveal>
          </div>

          {/* Imagen */}
          <ScrollReveal animation="slideLeft">
            <div className="relative">
              {/* Imagen principal */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage
                  src="/ig-home-cosecha.png"
                  alt="Equipo de trabajo cosechando kiwis"
                  speed={0.15}
                  containerClassName="aspect-[4/3]"
                  className="rounded-3xl"
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3311]/60 via-transparent to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl flex items-center justify-between">
                    <div className="text-center flex-1">
                      <p className="text-3xl font-black text-[#3f7528]">90+</p>
                      <p className="text-gray-600 text-sm">Empleados</p>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div className="text-center flex-1">
                      <p className="text-3xl font-black text-[#3f7528]">270</p>
                      <p className="text-gray-600 text-sm">Hectáreas</p>
                    </div>
                    <div className="w-px h-12 bg-gray-200" />
                    <div className="text-center flex-1">
                      <p className="text-3xl font-black text-[#3f7528]">19</p>
                      <p className="text-gray-600 text-sm">Años</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge decorativo */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-[#3f7528] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-sm text-lime-300 font-medium">Desde</p>
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-black">2006</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
