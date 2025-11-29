"use client";

import Link from "next/link";
import Image from "next/image";
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
    image: "/recipe-tarta-kiwi.png",
    emoji: "🍰",
    overlayColor: "from-pink-600/40 via-rose-500/30 to-pink-700/50",
    description: "Merengue, crema batida y kiwi fresco",
    instagramUrl: "https://www.instagram.com/p/CeT5vPfOtMr/",
  },
  {
    id: 2,
    title: "Smoothie Bowl Verde",
    category: "Desayunos",
    time: "10 min",
    image: "/recipe-smoothie-bowl.png",
    emoji: "🥣",
    overlayColor: "from-green-600/40 via-emerald-500/30 to-green-700/50",
    description: "Banana, espinaca, kiwi y toppings",
    instagramUrl: "https://www.instagram.com/p/B-GDS53j4ee/",
  },
  {
    id: 3,
    title: "Limonada de Kiwi",
    category: "Bebidas",
    time: "15 min",
    image: "/recipe-limonada-kiwi.png",
    emoji: "🍹",
    overlayColor: "from-lime-600/40 via-green-500/30 to-lime-700/50",
    description: "Refrescante con menta y hielo",
    instagramUrl: "https://www.instagram.com/p/CQyoP_uAgBt/",
  },
  {
    id: 4,
    title: "Salmón al Kiwi",
    category: "Platos",
    time: "30 min",
    image: "/recipe-salmon-kiwi.png",
    emoji: "🐟",
    overlayColor: "from-[#3f7528]/40 via-[#4a8a30]/30 to-[#2d5a1c]/50",
    description: "Con salsa de kiwi y cilantro",
    instagramUrl: "https://www.instagram.com/p/CDwhe4fDdTX/",
  },
  {
    id: 5,
    title: "Rodajas con Chocolate",
    category: "Snacks",
    time: "15 min",
    image: "/recipe-chocolate-kiwi.png",
    emoji: "🍫",
    overlayColor: "from-[#5d4037]/40 via-[#4e342e]/30 to-[#3e2723]/50",
    description: "Kiwi bañado en chocolate negro",
    instagramUrl: "https://www.instagram.com/p/BdvVyQYFQJ-/",
  },
];

export function RecipesWow() {
  return (
<section className="py-24 overflow-hidden relative">
      {/* Background Image - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-recipes-kitchen.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/85 via-[#4a8a30]/80 to-[#2d5a1c]/85 md:from-[#3f7528]/75 md:via-[#4a8a30]/70 md:to-[#2d5a1c]/75" />
      
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
            RECETAS <span className="text-lime-300">DELICIOSAS</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Inspiradas en nuestras publicaciones más populares
          </p>
        </AnimatedSection>

        {/* Grid de recetas - 1 columna en mobile, masonry en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
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
                className={`group block rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 relative ${index === 0 ? "h-full min-h-[200px] md:min-h-[400px]" : "min-h-[200px] sm:aspect-square"}`}
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                {/* Overlay con gradiente de color */}
                <div className={`absolute inset-0 bg-gradient-to-b ${recipe.overlayColor} group-hover:opacity-80 transition-opacity duration-300`} />
                
                {/* Contenido */}
                <div className="h-full p-4 md:p-6 flex flex-col justify-between relative z-10">
                  {/* Badge de categoría */}
                  <div className="flex justify-between items-start">
                    <Badge className="bg-white/30 backdrop-blur-sm text-white text-xs shadow-lg">
                      {recipe.category}
                    </Badge>
                    
                    {/* Icono de Instagram */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-lg">📷</span>
                      </div>
                    </div>
                  </div>

                  {/* Emoji centrado - solo visible en desktop */}
                  <div className="flex-1 flex items-center justify-center">
                    <span className={`hidden md:block ${index === 0 ? "text-7xl md:text-9xl" : "text-6xl md:text-7xl"} drop-shadow-2xl group-hover:scale-125 transition-transform duration-500 filter drop-shadow-lg`}>
                      {recipe.emoji}
                    </span>
                  </div>

                  {/* Info inferior */}
                  <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 md:p-4">
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1 group-hover:underline drop-shadow-md">
                      {recipe.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-2 line-clamp-1 drop-shadow-sm">{recipe.description}</p>
                    <div className="flex items-center justify-between text-white/70 text-sm">
                      <span>⏱️ {recipe.time}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white">
                        Ver en Instagram →
                      </span>
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
              className="bg-white text-[#3f7528] hover:bg-lime-200 hover:text-[#3f7528] text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <Link href="/recetas">VER TODAS LAS RECETAS</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#3f7528] text-lg px-10 py-6 rounded-full font-bold backdrop-blur-sm group/ig"
            >
              <a href="https://instagram.com/kiwi_argentino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
                  alt="Instagram" 
                  width={24} 
                  height={24} 
                  className="w-6 h-6 brightness-0 invert group-hover/ig:brightness-100 group-hover/ig:invert-0 transition-all" 
                  unoptimized 
                />
                SEGUINOS EN IG
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
