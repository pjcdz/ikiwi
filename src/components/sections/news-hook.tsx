"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

// Noticias reales de /noticias (las 3 más recientes)
const news = [
  {
    id: 1,
    title: "CoopeKiwi Expande el Cultivo de Kiwis Orgánicos",
    excerpt: "La cooperativa expande sus operaciones y abre canales comerciales con Uruguay, Brasil e Italia, diversificando el riesgo comercial.",
    date: "2024",
    image: "/noticia-coopekiwi.png",
    category: "Industria",
    categoryColor: "bg-[#3f7528]",
  },
  {
    id: 2,
    title: "Primera Exportación de Kiwi con IG a España",
    excerpt: "Hito histórico: Agricultura acompañó la primera exportación de kiwi orgánico con Indicación Geográfica a España.",
    date: "16 de Junio, 2023",
    image: "/noticia-ig-a-espana.png",
    category: "Exportación",
    categoryColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Argentina Exporta Kiwi de Mar y Sierras a España",
    excerpt: "La Argentina exporta Kiwi de Mar y Sierras a España, marcando un hito en la historia del sector frutícola nacional.",
    date: "Junio 2023",
    image: "/noticia-kiwi-a-espana.png",
    category: "Exportación",
    categoryColor: "bg-blue-500",
  },
];

export function NewsHook() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp" className="mb-2">
            <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">
              Actualidad
            </span>
          </ScrollReveal>

          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
            stagger={0.1}
          >
            ÚLTIMAS NOTICIAS
          </AnimatedTitle>
        </div>

        {/* Grid de noticias - todas iguales */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {news.map((item, index) => (
            <ScrollReveal key={item.id} animation="fadeUp" delay={index * 0.1}>
              <Link href="/noticias" className="group block h-full">
                <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Imagen */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`${item.categoryColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-400 text-sm mb-2">{item.date}</p>
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#3f7528] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#3f7528] font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                      Leer más
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#3f7528] text-[#3f7528] hover:bg-[#3f7528] hover:text-white rounded-full px-10 py-6 font-bold transition-all hover:scale-105"
          >
            <Link href="/noticias" className="flex items-center gap-2">
              VER TODAS LAS NOTICIAS
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
