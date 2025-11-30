"use client";

import Image from "next/image";
import { useState } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { ColoredSection } from "@/components/sections/colored-section";
import { PageCTA } from "@/components/sections/page-cta";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "todas", name: "Todas", icon: "🍽️" },
  { id: "postres", name: "Postres", icon: "🍰" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" },
  { id: "ensaladas", name: "Ensaladas", icon: "🥗" },
  { id: "desayunos", name: "Desayunos", icon: "🌅" },
];

const recipes = [
  { id: 1, title: "Pavlova de Kiwi", category: "postres", time: "90 min", image: "/recipe-tarta-kiwi.png", difficulty: "Media" },
  { id: 2, title: "Smoothie Verde", category: "bebidas", time: "5 min", image: "/recipe-smoothie-bowl.png", difficulty: "Fácil" },
  { id: 3, title: "Ensalada Tropical", category: "ensaladas", time: "15 min", image: "/recipe-salmon-kiwi.png", difficulty: "Fácil" },
  { id: 4, title: "Bowl de Açaí", category: "desayunos", time: "10 min", image: "/recipe-smoothie-bowl.png", difficulty: "Fácil" },
  { id: 5, title: "Limonada de Kiwi", category: "bebidas", time: "10 min", image: "/recipe-limonada-kiwi.png", difficulty: "Fácil" },
  { id: 6, title: "Tarta de Crema", category: "postres", time: "120 min", image: "/recipe-tarta-kiwi.png", difficulty: "Avanzada" },
  { id: 7, title: "Ensalada de Frutas", category: "ensaladas", time: "15 min", image: "/recipe-smoothie-bowl.png", difficulty: "Fácil" },
  { id: 8, title: "Yogur con Kiwi", category: "desayunos", time: "5 min", image: "/recipe-smoothie-bowl.png", difficulty: "Fácil" },
];

const tips = [
  { icon: "🌡️", title: "Maduración Perfecta", desc: "Guarda los kiwis junto a manzanas o bananas para acelerar la maduración." },
  { icon: "🧊", title: "Conservación", desc: "Los kiwis maduros se conservan hasta 2 semanas en la heladera." },
  { icon: "🥛", title: "Lácteos", desc: "La actinidina puede cuajar la leche. Consume inmediatamente." },
  { icon: "🍖", title: "Marinadas", desc: "Usa pulpa de kiwi como ablandador natural de carnes." },
];

export default function RecetasPage() {
  const [activeCategory, setActiveCategory] = useState("todas");

  const filteredRecipes = activeCategory === "todas" 
    ? recipes 
    : recipes.filter(r => r.category === activeCategory);

  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}
      <PageHero
        badge="INSPIRACIÓN CULINARIA"
        title="RECETAS DELICIOSAS"
        subtitle="Ideas frescas para cada momento del día"
        description="Descubre nuevas formas de disfrutar el kiwi argentino en tu cocina"
        backgroundColor="cream"
        showTransition={false}
      />

      {/* Recetas Destacadas */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                DESTACADAS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-black text-gray-900"
            >
              Las Más Populares
            </AnimatedTitle>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {recipes.slice(0, 4).map((recipe, index) => (
              <ScrollReveal key={recipe.id} animation="fadeUp" delay={index * 0.1}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                    {recipe.time}
                  </Badge>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-sm md:text-base">{recipe.title}</h3>
                    <p className="text-white/70 text-xs">{recipe.difficulty}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="wave" toColor="#f5f0e8" height={80} />

      {/* Filtros y Grid */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900 mb-6"
            >
              Todas las Recetas
            </AnimatedTitle>

            {/* Category Tabs */}
            <ScrollReveal animation="fadeUp">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "bg-[#3f7528] text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-1">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {filteredRecipes.map((recipe, index) => (
              <ScrollReveal key={recipe.id} animation="fadeUp" delay={index * 0.08}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs">
                      {recipe.time}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs capitalize">
                      {recipe.category}
                    </Badge>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#3f7528] transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{recipe.difficulty}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos */}
      <ColoredSection backgroundColor="greenLight" transition="wave" transitionTo="#3f7528">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                TIPS DE COCINA
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
            >
              Consejos para Cocinar con Kiwi
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((tip, index) => (
              <ScrollReveal key={tip.title} animation="fadeUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="text-3xl mb-3 block">{tip.icon}</span>
                  <h4 className="font-bold text-gray-900 mb-2">{tip.title}</h4>
                  <p className="text-sm text-gray-600">{tip.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ColoredSection>

      {/* CTA Final */}
      <PageCTA
        icon="🥝"
        title="¿Tenés una Receta con Kiwi?"
        description="Compartila con nosotros en Instagram y etiquetanos @kiwi_argentino"
        primaryButton={{ text: "SEGUINOS EN INSTAGRAM", href: "https://instagram.com/kiwi_argentino" }}
        secondaryButton={{ text: "VER PRODUCTOS", href: "/productos" }}
        variant="green"
      />
    </main>
  );
}
