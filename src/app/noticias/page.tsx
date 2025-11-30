"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { ColoredSection } from "@/components/sections/colored-section";
import { StatsSection } from "@/components/sections/stats-section";
import { PageCTA } from "@/components/sections/page-cta";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Badge } from "@/components/ui/badge";

const featuredNews = {
  title: "\"Aspiramos a tener la misma calidad de kiwis que Nueva Zelanda\"",
  date: "17 de Febrero, 2017",
  category: "Entrevista",
  description: "Luis Franch habla sobre el potencial del kiwi argentino y las aspiraciones de calidad premium.",
  image: "/luis-franch-ceo.png",
  link: "https://www.freshplaza.es/article/3104421/argentina-aspiramos-a-tener-la-misma-calidad-de-kiwis-que-nueva-zelanda/",
};

const news = [
  { id: 1, title: "CoopeKiwi Expande el Cultivo de Kiwis Orgánicos", date: "2024", category: "Industria", image: "/noticia-coopekiwi.png", link: "#" },
  { id: 2, title: "Primera Exportación de Kiwi con IG a España", date: "Junio 2023", category: "Exportación", image: "/noticia-ig-a-espana.png", link: "#" },
  { id: 3, title: "Uno de los Mejores Kiwis del Mundo es Argentino", date: "2023", category: "Reconocimiento", image: "/noticia-uno-de-los-mejores.png", link: "#" },
  { id: 4, title: "Indicación Geográfica: Resolución 33/2022", date: "Junio 2022", category: "Certificación", image: null, placeholder: "🏅", link: "#" },
  { id: 5, title: "Productores de Kiwi en Miramar", date: "Diciembre 2021", category: "Infraestructura", image: "/noticia-cooperativa-miramar.png", link: "#" },
  { id: 6, title: "El Kiwi se Abre Camino entre Mar y Sierras", date: "2019", category: "Prensa", image: "/noticia-kiwi-se-abre-camino.png", link: "#" },
];

const stats = [
  { value: "0,45kg", label: "Consumo Per Cápita", description: "Mayor de Latinoamérica" },
  { value: "9", label: "Partidos en la IG", description: "Mar y Sierras" },
  { value: "16,5%", label: "Materia Seca Mínima", description: "Requisito de la IG" },
  { value: "900t", label: "Capacidad Ecco", description: "Planta de frío" },
];

const pressLogos = [
  { name: "La Nación", logo: "/logo-lanacion.png" },
  { name: "Clarín", logo: "/logo-clarin.png" },
];

export default function NoticiasPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}
      <PageHero
        badge="NOTICIAS"
        title="NOVEDADES DE IKIWI"
        subtitle="Mantente informado sobre nuestros logros y la industria del kiwi argentino"
        backgroundColor="cream"
        showTransition={false}
      />

      {/* Noticia Destacada */}
      <ColoredSection backgroundColor="greenLight">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-[#3f7528] text-white">{featuredNews.category}</Badge>
                <span className="text-sm text-gray-500 ml-3">{featuredNews.date}</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900 mt-4 mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 mb-6">{featuredNews.description}</p>
                <a
                  href={featuredNews.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#3f7528] font-semibold hover:gap-3 transition-all"
                >
                  Leer artículo completo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={featuredNews.image}
                  alt="Luis Franch, Fundador de iKiwi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold">Luis Franch</p>
                  <p className="text-white/80 text-sm">Representante & Fundador</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ColoredSection>

      <SectionTransition variant="wave" toColor="#faf8f5" height={80} />

      {/* Grid de Noticias */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                MÁS NOTICIAS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
            >
              Últimas Novedades
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {news.map((item, index) => (
              <ScrollReveal key={item.id} animation="fadeUp" delay={index * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">{item.placeholder}</span>
                      </div>
                    )}
                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#3f7528] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <ColoredSection backgroundColor="beige" transition="wave" transitionTo="#faf8f5">
        <div className="text-center mb-10">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              EN NÚMEROS
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
          >
            El Kiwi Argentino
          </AnimatedTitle>
        </div>
        <StatsSection stats={stats} variant="cards" columns={4} />
      </ColoredSection>

      {/* En los Medios */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal animation="fadeUp">
                <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                  EN LOS MEDIOS
                </span>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
              >
                Prensa
              </AnimatedTitle>
            </div>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="flex justify-center items-center gap-12 mb-10">
                {pressLogos.map((press, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                    <Image src={press.logo} alt={press.name} width={120} height={40} className="h-8 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-4xl text-[#3f7528] mb-4">"</div>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  Lo que empezó como una inversión de un abogado que leyó una nota periodística, 
                  hoy es la mayor productora de kiwi de Argentina, con más de 270 hectáreas 
                  y exportaciones a cuatro continentes.
                </blockquote>
                <p className="text-sm text-gray-500">— Diario La Nación, 2019</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionTransition variant="wave" toColor="#3f7528" height={80} />

      {/* CTA Final */}
      <PageCTA
        icon="📱"
        title="Seguinos en Instagram"
        description="Enterate de las últimas novedades, recetas y contenido sobre el mundo del kiwi argentino"
        primaryButton={{ text: "SEGUIR @KIWI_ARGENTINO", href: "https://instagram.com/kiwi_argentino" }}
        variant="green"
      />
    </main>
  );
}
