"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const benefits = [
  {
    icon: "/icons/vitamin-c.svg",
    emoji: "🍊",
    value: "92mg",
    label: "Vitamina C",
    description: "Más que una naranja",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: "/icons/fiber.svg",
    emoji: "🌿",
    value: "3g",
    label: "Fibra",
    description: "Digestión saludable",
    color: "from-green-400 to-green-500",
  },
  {
    icon: "/icons/calories.svg",
    emoji: "⚡",
    value: "61",
    label: "Calorías",
    description: "Por cada 100g",
    color: "from-yellow-400 to-amber-500",
  },
  {
    icon: "/icons/water.svg",
    emoji: "💧",
    value: "80%",
    label: "Agua",
    description: "Hidratación natural",
    color: "from-blue-400 to-cyan-500",
  },
];

export function NutritionHook() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-benefits-breakfast.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/95 via-[#3f7528]/90 to-[#2d5a1c]/95" />
      
      {/* Patrón decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp" className="mb-4">
            <span className="inline-block text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase">
              Nutrición & Salud
            </span>
          </ScrollReveal>

          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            stagger={0.08}
          >
            1 KIWI = 1 KILO DE LIMONES
          </AnimatedTitle>

          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-2xl md:text-3xl text-lime-300 font-medium">
              en Vitamina C
            </p>
          </ScrollReveal>
        </div>

        {/* Grid de beneficios - diseño más visual */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={benefit.label}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Icono con gradiente */}
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl md:text-4xl">{benefit.emoji}</span>
                </div>
                
                {/* Valor */}
                <p className="text-3xl md:text-4xl font-black text-[#3f7528] mb-1">
                  {benefit.value}
                </p>
                <p className="text-gray-900 font-semibold mb-1">
                  {benefit.label}
                </p>
                <p className="text-gray-500 text-sm">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Beneficios adicionales */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
              <span className="text-lg">❤️</span>
              <span className="text-white text-sm font-medium">Salud cardiovascular</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
              <span className="text-lg">🧬</span>
              <span className="text-white text-sm font-medium">Antioxidantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
              <span className="text-lg">😌</span>
              <span className="text-white text-sm font-medium">Reduce el estrés</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/20">
              <span className="text-lg">🫁</span>
              <span className="text-white text-sm font-medium">Mejora digestión</span>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" delay={0.15} className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#3f7528] hover:bg-lime-50 text-lg px-10 py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/nutricion">DESCUBRÍ TODOS LOS BENEFICIOS</Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Transición */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={100}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
