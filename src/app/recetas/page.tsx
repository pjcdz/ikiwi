"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

function RecetasHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      const chars1 = titleLine1Ref.current?.querySelectorAll(".char") || [];
      const chars2 = titleLine2Ref.current?.querySelectorAll(".char") || [];

      tl.fromTo(chars1, { y: 100, opacity: 0, rotateX: -90 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.06 })
        .fromTo(chars2, { y: 100, opacity: 0, rotateX: -90 }, { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.04 }, "-=0.6")
        .fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");

      gsap.to(contentRef.current, {
        y: 150, opacity: 0, ease: "none",
        scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, heroRef);

    return () => { ctx.revert(); };
  }, []);

  const splitChars = (text: string) => text.split("").map((char, i) => (
    <span key={i} className="char inline-block" style={{ whiteSpace: char === " " ? "pre" : undefined }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/bg-recipes-kitchen.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f7528]/80 via-black/60 to-black/80" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div ref={contentRef} className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            INSPIRACIÓN CULINARIA
          </div>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight" style={{ perspective: "1000px" }}>
            <span ref={titleLine1Ref} className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">{splitChars("RECETAS")}</span>
            <span ref={titleLine2Ref} className="block text-lime-300 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-2">{splitChars("DELICIOSAS")}</span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-white/90 mb-4 font-medium max-w-3xl mx-auto leading-relaxed">
            Descubrí nuevas formas de disfrutar el <span className="text-lime-200 font-semibold">kiwi argentino</span> en tu cocina
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Ideas frescas para cada momento del día</p>
        </div>
      </div>

      <SectionTransition variant="wave" toColor="#faf8f5" height={100} className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}


export default function RecetasPage() {
  const [activeCategory, setActiveCategory] = useState("todas");
  const filteredRecipes = activeCategory === "todas" ? recipes : recipes.filter(r => r.category === activeCategory);

  return (
    <main className="bg-[#faf8f5]">
      <RecetasHero />

      {/* DESTACADAS */}
      <section className="py-20 md:py-28 lg:py-32 bg-[#faf8f5] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">✨ DESTACADAS</span>
            </ScrollReveal>
            <AnimatedTitle as="h2" animation="words" className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight" stagger={0.1}>
              LAS MÁS POPULARES
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.3} className="mt-6">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Las recetas favoritas de nuestra comunidad</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {recipes.slice(0, 4).map((recipe, index) => (
              <ScrollReveal key={recipe.id} animation="fadeUp" delay={index * 0.1}>
                <div className="group relative aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 border-transparent hover:border-lime-400/50">
                  <Image src={recipe.image} alt={recipe.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-gray-800 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      <span className="w-1.5 h-1.5 bg-[#3f7528] rounded-full" />{recipe.time}
                    </span>
                  </div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${recipe.difficulty === "Fácil" ? "bg-green-500 text-white" : recipe.difficulty === "Media" ? "bg-amber-500 text-white" : "bg-red-500 text-white"}`}>{recipe.difficulty}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <span className="text-lime-300/90 text-xs md:text-sm uppercase tracking-wider mb-2 block font-medium">{recipe.category}</span>
                    <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl mb-1 group-hover:text-lime-300 transition-colors duration-300 drop-shadow-lg">{recipe.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-[#3f7528]/0 group-hover:bg-[#3f7528]/10 transition-colors duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <SectionTransition variant="gradient" fromColor="#faf8f5" toColor="#f5f0e8" height={80} className="absolute -bottom-1 left-0 right-0" />
      </section>

      {/* CATÁLOGO */}
      <section className="py-20 md:py-28 lg:py-32 bg-[#f5f0e8] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">EXPLORÁ</span>
            </ScrollReveal>
            <AnimatedTitle as="h2" animation="words" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-10" stagger={0.1}>
              TODAS LAS RECETAS
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {categories.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border-2 ${activeCategory === cat.id ? "bg-[#3f7528] text-white border-[#3f7528] shadow-lg shadow-[#3f7528]/30 scale-105" : "bg-white text-gray-700 border-gray-200 hover:border-[#3f7528]/50 hover:shadow-md"}`}>
                    <span className="mr-2">{cat.icon}</span>{cat.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {filteredRecipes.map((recipe, index) => (
              <ScrollReveal key={recipe.id} animation="fadeUp" delay={index * 0.08}>
                <div className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 hover:border-[#3f7528]/30">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={recipe.image} alt={recipe.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                    <div className="absolute inset-0 bg-[#3f7528]/0 group-hover:bg-[#3f7528]/10 transition-colors duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">⏱️ {recipe.time}</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs capitalize border-[#3f7528]/40 text-[#3f7528] font-semibold">{recipe.category}</Badge>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${recipe.difficulty === "Fácil" ? "bg-green-100 text-green-700" : recipe.difficulty === "Media" ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>{recipe.difficulty}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base md:text-lg group-hover:text-[#3f7528] transition-colors duration-300">{recipe.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {filteredRecipes.length === 0 && <div className="text-center py-16"><span className="text-6xl mb-4 block">🥝</span><p className="text-gray-500 text-lg">No hay recetas en esta categoría</p></div>}
        </div>
        <SectionTransition variant="wave" toColor="#e8f5e0" height={100} className="absolute -bottom-1 left-0 right-0" />
      </section>


      {/* TIPS */}
      <section className="py-20 md:py-28 lg:py-32 bg-[#e8f5e0] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">🥝 TIPS DE COCINA</span>
            </ScrollReveal>
            <AnimatedTitle as="h2" animation="words" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight" stagger={0.1}>
              CONSEJOS PARA COCINAR CON KIWI
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.3} className="mt-6">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Secretos y trucos para sacar el máximo provecho de esta fruta increíble</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {tips.map((tip, index) => (
              <ScrollReveal key={tip.title} animation="fadeUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border border-gray-100 hover:border-[#3f7528]/30">
                  <span className="text-4xl md:text-5xl mb-4 block">{tip.icon}</span>
                  <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-3">{tip.title}</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{tip.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <SectionTransition variant="organic" toColor="#3f7528" height={120} className="absolute -bottom-1 left-0 right-0" />
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 bg-[#3f7528] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="scale" className="mb-8">
              <span className="text-6xl md:text-7xl lg:text-8xl block">🥝</span>
            </ScrollReveal>
            <AnimatedTitle as="h2" animation="words" className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6" stagger={0.1}>
              ¿TENÉS UNA RECETA CON KIWI?
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.3} className="mb-10">
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
                Compartila con nosotros en Instagram y etiquetanos <span className="font-bold text-lime-300">@kiwi_argentino</span>
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-[#3f7528] text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:-translate-y-1">
                  <Link href="https://instagram.com/kiwi_argentino" target="_blank" rel="noopener noreferrer">SEGUINOS EN INSTAGRAM</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#3f7528] text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-full font-bold transition-all hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                  <Link href="/productos">VER PRODUCTOS</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
