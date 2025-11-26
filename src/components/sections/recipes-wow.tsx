"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Recetas del Instagram real con URLs y descripciones
const recipes = [
  {
    id: 1,
    title: "Mini Pavlovas con Kiwi",
    category: "Postres",
    time: "45 min",
    image: "🍰",
    gradient: "from-pink-400 to-rose-500",
    description: "Merengue, crema batida y kiwi fresco",
    instagramUrl: "https://www.instagram.com/p/CeT5vPfOtMr/",
  },
  {
    id: 2,
    title: "Smoothie Bowl Verde",
    category: "Desayunos",
    time: "10 min",
    image: "🥣",
    gradient: "from-green-400 to-emerald-500",
    description: "Banana, espinaca, kiwi y toppings",
    instagramUrl: "https://www.instagram.com/p/B-GDS53j4ee/",
  },
  {
    id: 3,
    title: "Bubble Tea de Kiwi",
    category: "Bebidas",
    time: "40 min",
    image: "🧋",
    gradient: "from-lime-400 to-green-500",
    description: "Té con perlas de tapioca y kiwi",
    instagramUrl: "https://www.instagram.com/p/CQyoP_uAgBt/",
  },
  {
    id: 4,
    title: "Salmón al Kiwi",
    category: "Platos",
    time: "30 min",
    image: "🐟",
    gradient: "from-orange-400 to-red-500",
    description: "Con salsa de kiwi y cilantro",
    instagramUrl: "https://www.instagram.com/p/CDwhe4fDdTX/",
  },
  {
    id: 5,
    title: "Rodajas con Chocolate",
    category: "Snacks",
    time: "15 min",
    image: "🍫",
    gradient: "from-amber-600 to-amber-800",
    description: "Kiwi bañado en chocolate negro",
    instagramUrl: "https://www.instagram.com/p/BdvVyQYFQJ-/",
  },
];

export function RecipesWow() {
  return (
    <section className="py-24 bg-linear-to-br from-green-600 via-emerald-500 to-green-700 overflow-hidden relative">
      {/* Decoración */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 text-[200px]">🥝</div>
        <div className="absolute bottom-20 left-20 text-[150px]">🍽️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <Badge className="bg-white/20 text-white text-sm px-4 py-1 mb-4 backdrop-blur-sm">
            DEL INSTAGRAM
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            RECETAS <span className="text-yellow-300">DELICIOSAS</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Inspiradas en nuestras publicaciones más populares
          </p>
        </AnimatedSection>

        {/* Grid de recetas estilo masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-12">
          {recipes.map((recipe, index) => (
            <AnimatedSection 
              key={recipe.id}
              animation="scale"
              delay={index * 0.1}
              className={index === 0 ? "md:row-span-2" : ""}
            >
              <a
                href={recipe.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 bg-linear-to-br ${recipe.gradient} ${index === 0 ? "h-full min-h-[200px] md:min-h-[400px]" : "aspect-square"}`}
              >
                <div className="h-full p-3 md:p-6 flex flex-col justify-between relative">
                  {/* Overlay para hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Badge de categoría */}
                  <Badge className="w-fit bg-white/30 backdrop-blur-sm text-white text-[10px] md:text-xs relative z-10">
                    {recipe.category}
                  </Badge>

                  {/* Contenido central */}
                  <div className="flex-1 flex items-center justify-center relative z-10">
                    <span className={`${index === 0 ? "text-6xl md:text-9xl" : "text-4xl md:text-7xl"} group-hover:scale-110 transition-transform duration-300`}>
                      {recipe.image}
                    </span>
                  </div>

                  {/* Info inferior */}
                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-sm md:text-xl mb-0.5 md:mb-1 group-hover:underline">
                      {recipe.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm mb-1 md:mb-2 line-clamp-2">{recipe.description}</p>
                    <div className="flex items-center gap-2 text-white/60 text-xs md:text-sm">
                      <span>⏱️ {recipe.time}</span>
                      <span className="hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity">
                        → Ver en Instagram
                      </span>
                    </div>
                  </div>

                  {/* Icono de Instagram */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-lg">📷</span>
                    </div>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fadeUp" className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-green-700 hover:bg-yellow-300 hover:text-green-900 text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Link href="/recetas">VER TODAS LAS RECETAS</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-green-700 text-lg px-10 py-6 rounded-full font-bold backdrop-blur-sm"
            >
              <a href="https://instagram.com/kiwi_argentino" target="_blank" rel="noopener noreferrer">
                SEGUINOS EN IG
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
