"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// DATA
// ============================================================================

const featuredNews = {
  title: '"Aspiramos a tener la misma calidad de kiwis que Nueva Zelanda"',
  date: "17 de Febrero, 2017",
  category: "Entrevista",
  description: "Luis Franch habla sobre el potencial del kiwi argentino y las aspiraciones de calidad premium. En esta entrevista histórica, el fundador de iKiwi establece la visión que guiaría el desarrollo de la industria.",
  image: "/luis-franch-ceo.png",
  link: "https://www.freshplaza.es/article/3104421/argentina-aspiramos-a-tener-la-misma-calidad-de-kiwis-que-nueva-zelanda/",
  author: { name: "Luis Franch", role: "Representante & Fundador" },
};

const news = [
  { id: 1, title: "CoopeKiwi Expande el Cultivo de Kiwis Orgánicos", date: "2024", category: "Industria", categoryColor: "bg-[#3f7528]", image: "/noticia-coopekiwi.png", link: "https://mundoagro.io/cl/coopekiwi-expande-el-cultivo-de-kiwis-organicos-en-argentina/", excerpt: "La cooperativa expande sus operaciones y abre canales comerciales con Uruguay, Brasil e Italia, diversificando el riesgo comercial y consolidando su posición exportadora." },
  { id: 2, title: "Primera Exportación de Kiwi con IG a España", date: "16 de Junio, 2023", category: "Exportación", categoryColor: "bg-blue-500", image: "/noticia-ig-a-espana.png", link: "https://www.argentina.gob.ar/noticias/agricultura-acompano-la-primera-exportacion-de-kiwi-con-indicacion-geografica-espana", excerpt: "Hito histórico: Agricultura acompañó la primera exportación de kiwi orgánico con Indicación Geográfica a España. Inversión estatal de $50 millones y capacidad de 900 toneladas." },
  { id: 3, title: "Argentina Exporta Kiwi de Mar y Sierras a España", date: "Junio 2023", category: "Exportación", categoryColor: "bg-blue-500", image: "/noticia-kiwi-a-espana.png", link: "https://www.argentina.gob.ar/noticias/la-argentina-exporta-kiwi-de-mar-y-sierras-espana", excerpt: "La Argentina exporta Kiwi de Mar y Sierras a España, marcando un hito en la historia del sector frutícola nacional con el sello de Indicación Geográfica." },
  { id: 4, title: "Uno de los Mejores Kiwis del Mundo es Argentino", date: "2023", category: "Reconocimiento", categoryColor: "bg-amber-500", image: "/noticia-uno-de-los-mejores.png", link: "https://ansol.com.ar/cooperativa-kiwis-argentina/principales/", excerpt: "Uno de los mejores kiwis del mundo es argentino y lo produce una cooperativa. La calidad diferenciada del producto Mar y Sierras es reconocida internacionalmente." },
  { id: 5, title: "Indicación Geográfica: Resolución 33/2022", date: "8 de Junio, 2022", category: "Certificación", categoryColor: "bg-purple-500", image: null, placeholder: "🏅", link: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-33-2022-366126", excerpt: "Publicada en el Boletín Oficial, la IG 'Kiwi Mar y Sierras del Sudeste de Buenos Aires' otorga protección de propiedad intelectual colectiva. Exige mínimo 16,5% materia seca y 6,5° Brix." },
  { id: 6, title: "Productores de Kiwi se Suman al Sector Industrial de Miramar", date: "16 de Diciembre, 2021", category: "Infraestructura", categoryColor: "bg-teal-500", image: "/noticia-cooperativa-miramar.png", link: "https://regionmardelplata.com/ver-noticia.asp?noticia=miramar-ahora-productores-de-kiwi-se-suman-al-sector-industrial-de-miramar&codigo=14249", excerpt: "Laureano Goycoa firma el boleto de compraventa de un lote en el Sector Industrial Planificado para construir empacadora y cámara de frío. Nace la Cooperativa Ecco Argentina." },
  { id: 7, title: "Rodríguez Destacó el Rol del Cooperativismo", date: "2021", category: "Institucional", categoryColor: "bg-indigo-500", image: "/noticia-rodriguez.png", link: "https://www.gba.gob.ar/desarrollo_agrario/Noticias/rodriguez_destaco_el_rol_del_cooperativismo_en_la_produccion", excerpt: "El Ministerio de Desarrollo Agrario destaca el rol del cooperativismo en la producción de kiwi y asiste en la obtención de la matrícula de la cooperativa." },
  { id: 8, title: "El Kiwi se Abre Camino entre el Mar y las Sierras", date: "2019", category: "Prensa", categoryColor: "bg-gray-600", image: "/noticia-kiwi-se-abre-camino.png", link: "https://bichosdecampo.com/el-kiwi-se-abre-camino-entre-el-mar-y-las-sierras/", excerpt: "Bichos de Campo cuenta la historia del desarrollo del kiwi en la región del sudeste bonaerense y el trabajo de iKiwi con la Universidad de Bologna." },
  { id: 9, title: "Argentinos Consumen 0,45 kg de Kiwi Per Cápita", date: "30 de Enero, 2019", category: "Mercado", categoryColor: "bg-orange-500", image: null, placeholder: "📊", link: "https://www.freshplaza.com/north-america/article/9067212/argentinians-consume-0-45-kg-of-kiwis-per-capita-per-year/", excerpt: "Argentina tiene el mayor consumo per cápita de kiwi en Latinoamérica. El kiwi es la segunda fruta más importada después de la banana, revelando una oportunidad de sustitución." },
];

const stats = [
  { value: "0,45kg", label: "Consumo Per Cápita", description: "Mayor de Latinoamérica" },
  { value: "9", label: "Partidos en la IG", description: "Mar y Sierras" },
  { value: "16,5%", label: "Materia Seca Mínima", description: "Requisito de la IG" },
  { value: "900t", label: "Capacidad Ecco", description: "Planta de frío" },
];

// ============================================================================
// COMPONENT
// ============================================================================

export default function NoticiasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate title characters
      const chars = titleRef.current?.querySelectorAll(".char") || [];

      tl.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.08 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        );

      // Parallax effect on scroll
      gsap.to(contentRef.current, {
        y: 150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const splitChars = (text: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <main className="bg-[#faf8f5]">
      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg-certifications-aerial.png"
            alt="Campo de kiwis"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3f7528]/40 via-black/30 to-black/50" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center"
        >
          <div className="text-center max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              ACTUALIDAD
            </div>

            {/* Title */}
            <h1
              ref={titleRef}
              className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              style={{ perspective: "1000px" }}
            >
              {splitChars("NOTICIAS")}
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              La historia del kiwi argentino
              <br className="hidden md:block" />
              contada por quienes la hacen
            </p>
          </div>
        </div>

        {/* Transition */}
        <SectionTransition
          variant="wave"
          toColor="#f5f0e8"
          height={100}
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* ================================================================== */}
      {/* NOTICIA DESTACADA */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <ScrollReveal animation="fadeUp">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-[#3f7528] text-white hover:bg-[#3f7528]">
                      {featuredNews.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{featuredNews.date}</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {featuredNews.description}
                  </p>
                  <a
                    href={featuredNews.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#3f7528] font-semibold text-lg hover:gap-4 transition-all duration-300"
                  >
                    Leer artículo completo
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>

              {/* Image */}
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.author.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-xl">{featuredNews.author.name}</p>
                    <p className="text-white/80">{featuredNews.author.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionTransition variant="gradient" fromColor="#f5f0e8" toColor="#faf8f5" height={80} />

      {/* ================================================================== */}
      {/* GRID DE NOTICIAS */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                📰 MÁS NOTICIAS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
            >
              ÚLTIMAS NOVEDADES
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {news.map((item, index) => (
              <ScrollReveal key={item.id} animation="fadeUp" delay={index * 0.1}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3f7528]/10 to-[#3f7528]/5">
                          <span className="text-6xl">{item.placeholder}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <Badge className={`absolute top-4 left-4 ${item.categoryColor} text-white text-xs font-bold shadow-lg`}>
                        {item.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-[#3f7528] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 flex-grow">
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
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="gradient" fromColor="#faf8f5" toColor="#f5f0e8" height={80} />

      {/* ================================================================== */}
      {/* ESTADÍSTICAS */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                📊 EN NÚMEROS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900"
            >
              EL KIWI ARGENTINO
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} animation="fadeUp" delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl font-black text-[#3f7528] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-bold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="organic" toColor="#3f7528" height={100} />

      {/* ================================================================== */}
      {/* CTA FINAL */}
      {/* ================================================================== */}
      <section className="py-24 md:py-32 bg-[#3f7528]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal animation="fadeUp">
              <div className="text-6xl mb-8">📱</div>
            </ScrollReveal>

            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
            >
              SEGUINOS EN INSTAGRAM
            </AnimatedTitle>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Enterate de las últimas novedades, recetas y contenido
                <br className="hidden md:block" />
                sobre el mundo del kiwi argentino
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#3f7528] hover:bg-white/90 text-lg px-10 py-7 font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <a
                    href="https://instagram.com/kiwi_argentino"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SEGUIR @KIWI_ARGENTINO
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#3f7528] text-lg px-10 py-7 font-bold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
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
