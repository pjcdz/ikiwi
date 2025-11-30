"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const recipes = [
  {
    id: 1,
    title: "Mini Pavlovas",
    category: "Postres",
    image: "/recipe-tarta-kiwi.png",
    time: "45 min",
  },
  {
    id: 2,
    title: "Smoothie Bowl",
    category: "Desayunos",
    image: "/recipe-smoothie-bowl.png",
    time: "10 min",
  },
  {
    id: 3,
    title: "Limonada de Kiwi",
    category: "Bebidas",
    image: "/recipe-limonada-kiwi.png",
    time: "15 min",
  },
  {
    id: 4,
    title: "Salmón al Kiwi",
    category: "Platos",
    image: "/recipe-salmon-kiwi.png",
    time: "30 min",
  },
];

export function RecipesHook() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#faf8f5]">
      {/* Background sutil */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-recipes-kitchen.png')" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal animation="fadeUp" className="mb-4">
            <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">
              Inspiración Culinaria
            </span>
          </ScrollReveal>

          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
            stagger={0.1}
          >
            RECETAS DELICIOSAS
          </AnimatedTitle>

          <ScrollReveal animation="fadeUp" delay={0.3} className="mt-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ideas frescas para disfrutar el kiwi en cada momento del día
            </p>
          </ScrollReveal>
        </div>

        {/* Grid de recetas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {recipes.map((recipe, index) => (
            <ScrollReveal
              key={recipe.id}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <Link href="/recetas" className="group block">
                <div className="relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Imagen */}
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge categoría */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {recipe.category}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:text-lime-300 transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-white/70 text-sm flex items-center gap-1">
                      <span>⏱️</span> {recipe.time}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#3f7528] hover:bg-[#4a8a30] text-white text-lg px-12 py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/recetas">VER TODAS LAS RECETAS</Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Transición */}
      <SectionTransition
        variant="gradient"
        fromColor="#faf8f5"
        toColor="#f5f0e8"
        height={60}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
