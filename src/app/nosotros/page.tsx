"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ColoredSection } from "@/components/sections/colored-section";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ParallaxImage } from "@/components/animations/parallax-image";
import { SectionTransition } from "@/components/animations/section-transition";
import { Empaquetadora } from "@/components/sections/empaquetadora";
import { Certifications } from "@/components/sections/certifications";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const heroStats = [
  { value: "270", label: "Hectáreas", suffix: "+" },
  { value: "90", label: "Empleados", suffix: "+" },
  { value: "4", label: "Países", suffix: "" },
  { value: "2006", label: "Fundación", suffix: "" },
];

const terroirFeatures = [
  {
    icon: "🌍",
    title: "Ubicación Privilegiada",
    subtitle: "El Terroir Mar y Sierras",
    highlight: "38° Sur",
    description: "La zona núcleo de producción se ha consolidado en el sudeste de la provincia de Buenos Aires. Esta región, que abarca una franja costera influenciada por el Océano Atlántico y protegida por el sistema serrano de Tandilia, ofrece condiciones únicas que diferencian al producto argentino de sus competidores directos (Chile) e indirectos (Nueva Zelanda).",
    details: [
      "9 partidos delimitados oficialmente: General Pueyrredón, General Alvarado, Balcarce, Lobería, Necochea, San Cayetano, Tres Arroyos, Mar Chiquita y General Madariaga",
      "Latitud similar a Nueva Zelanda en el Hemisferio Sur (entre 38° y 45° S)",
      "Protección natural del sistema serrano de Tandilia contra vientos extremos",
      "Influencia moderadora del Océano Atlántico que regula temperaturas",
      "Microclima único que combina humedad marina con suelos pampeanos"
    ],
  },
  {
    icon: "🌱",
    title: "Suelos Excepcionales",
    subtitle: "La Diferencia con Nueva Zelanda",
    highlight: "+Materia Orgánica",
    description: "Nueva Zelanda basa gran parte de su producción en suelos de origen volcánico. En contraste, el sudeste bonaerense posee suelos con horizontes profundos y, crucialmente, un contenido de materia orgánica excepcionalmente alto. Esta riqueza orgánica permite una retención de humedad y disponibilidad de nutrientes que favorece el desarrollo de raíces robustas.",
    details: [
      "Contenido de materia orgánica superior a las tierras volcánicas neozelandesas",
      "Horizontes profundos que permiten desarrollo radicular extenso",
      "Retención natural de humedad sin dependencia de riego intensivo",
      "Menor necesidad de fertirrigación sintética que otros modelos intensivos",
      "Base material de la 'calidad diferenciada' reconocida internacionalmente"
    ],
  },
  {
    icon: "🌡️",
    title: "Clima Atlántico Moderado",
    subtitle: "El Secreto del Hang Time",
    highlight: "+20 días",
    description: "La influencia oceánica actúa como un moderador térmico fundamental: reduce la amplitud térmica extrema durante el verano, evitando el estrés calórico en la planta, y minimiza el riesgo de heladas tempranas en otoño, permitiendo que la fruta permanezca en la planta por más tiempo que en cualquier otra región productora.",
    details: [
      "Hasta 20 días extra de permanencia en planta después de madurez comercial mínima",
      "Reducción de amplitud térmica extrema durante el verano",
      "Protección contra heladas tempranas en otoño",
      "Acumulación óptima de horas de frío invernal para brotación",
      "El 'hang time' extra permite acumulación de metabolitos secundarios y azúcares"
    ],
  },
  {
    icon: "⭐",
    title: "Calidad Superior Certificada",
    subtitle: "Estándares que Superan al Mundo",
    highlight: "16.5% MS",
    description: "El kiwi no es un commodity uniforme; su valor en el mercado premium depende directamente de su sabor, correlacionado con el porcentaje de materia seca. Los estudios del INTA Balcarce revelan que el kiwi de esta región alcanza parámetros que superan los estándares internacionales de exportación.",
    details: [
      "Mínimo 16.5% de materia seca certificada (vs ~15% estándar internacional)",
      "6.5° Brix promedio en cosecha (vs 6.2° estándar de exportación masiva)",
      "155 días desde plena floración como tiempo mínimo de maduración",
      "Tolerancia máxima de 10% de frutos bajo 6.2° Brix por lote",
      "Perfil de sabor (flavor) muy superior al kiwi commodity"
    ],
  },
];

// Timeline basada en noticias reales verificadas
const timeline = [
  { 
    year: "2006", 
    title: "El Nacimiento de iKiwi", 
    description: "Luis Franch, abogado de profesión, decide invertir en kiwis tras leer una nota periodística. Comienza con pocas hectáreas en Mar del Plata, apostando al potencial del sudeste bonaerense.",
    source: null,
    link: null
  },
  { 
    year: "2017", 
    title: "La Visión Premium", 
    description: "\"Aspiramos a tener la misma calidad de kiwis que Nueva Zelanda\". Luis Franch declara en FreshPlaza la meta de alcanzar 10 millones de kilos y competir en calidad, no en volumen.",
    source: "FreshPlaza, Febrero 2017",
    link: "https://www.freshplaza.es/article/3104421/argentina-aspiramos-a-tener-la-misma-calidad-de-kiwis-que-nueva-zelanda/"
  },
  { 
    year: "2019", 
    title: "Récord de Consumo Nacional", 
    description: "Argentina alcanza el mayor consumo per cápita de kiwi en Latinoamérica: 0,45 kg/persona/año. iKiwi supera las 270 hectáreas y realiza la primera exportación de kiwi amarillo orgánico a Europa.",
    source: "FreshPlaza, Enero 2019",
    link: "https://www.freshplaza.com/north-america/article/9067212/argentinians-consume-0-45-kg-of-kiwis-per-capita-per-year/"
  },
  { 
    year: "2021", 
    title: "Nace Cooperativa Ecco", 
    description: "Productores de kiwi se unen en Miramar para construir su propia planta de frío y empaque. Laureano Goycoa lidera la iniciativa que transformará la postcosecha regional.",
    source: "Región Mar del Plata, Dic 2021",
    link: "https://regionmardelplata.com/ver-noticia.asp?noticia=miramar-ahora-productores-de-kiwi-se-suman-al-sector-industrial-de-miramar&codigo=14249"
  },
  { 
    year: "2022", 
    title: "Indicación Geográfica", 
    description: "Resolución 33/2022: El 'Kiwi Mar y Sierras del Sudeste de Buenos Aires' obtiene la IG, primera y única para kiwi en Argentina. Se establecen estándares de 16.5% materia seca y 6.5° Brix.",
    source: "Boletín Oficial, Junio 2022",
    link: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-33-2022-366126"
  },
  { 
    year: "2023", 
    title: "Primera Exportación con IG", 
    description: "Hito histórico: 22,400 kg de kiwi orgánico con sello de Indicación Geográfica parten hacia España desde la planta de Cooperativa Ecco, con apoyo del Estado ($50M de inversión).",
    source: "Argentina.gob.ar, Junio 2023",
    link: "https://www.argentina.gob.ar/noticias/agricultura-acompano-la-primera-exportacion-de-kiwi-con-indicacion-geografica-espana"
  },
];

const values = [
  { icon: "🌱", title: "Sustentabilidad", description: "Prácticas agrícolas responsables que protegen el medio ambiente para las futuras generaciones." },
  { icon: "⭐", title: "Calidad Premium", description: "Rigurosos controles de calidad en cada kiwi que sale de nuestros campos." },
  { icon: "🤝", title: "Comunidad", description: "Generamos empleo local y fortalecemos la industria regional de Mar del Plata." },
  { icon: "🔬", title: "Innovación", description: "Investigación constante con universidades internacionales de primer nivel." },
];



const sustainabilityPractices = [
  { icon: "🌱", title: "Producción Orgánica", desc: "Sin agroquímicos sintéticos ni fertilizantes artificiales. Certificación internacional.", stat: "100%" },
  { icon: "💧", title: "Uso Eficiente del Agua", desc: "Sistemas de riego por goteo y monitoreo constante de humedad del suelo.", stat: "-40%" },
  { icon: "🚚", title: "Km 0", desc: "Menor huella de carbono que el kiwi importado. Producción local, calidad global.", stat: "Local" },
];

// ============================================================================
// TERROIR SECTION COMPONENT - Con panel expandible
// ============================================================================

interface TerroirFeature {
  icon: string;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  details: string[];
}

function TerroirSection({ terroirFeatures }: { terroirFeatures: TerroirFeature[] }) {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const toggleFeature = (title: string) => {
    setExpandedFeature(expandedFeature === title ? null : title);
  };

  useEffect(() => {
    if (expandedFeature && detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [expandedFeature]);

  const selectedFeature = terroirFeatures.find(f => f.title === expandedFeature);

  return (
    <section className="relative py-24 md:py-36 bg-[#3f7528] overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-lime-300/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-lime-300 text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-lime-400/10 rounded-full border border-lime-400/20">
                EL TERROIR
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              stagger={0.1}
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6"
            >
              MAR Y SIERRAS
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Un microclima único en el mundo que produce kiwis de calidad excepcional
              </p>
            </ScrollReveal>
          </div>

          {/* Features Grid - Cards Compactas 2x2 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {terroirFeatures.map((feature, index) => (
              <ScrollReveal key={feature.title} animation="fadeUp" delay={index * 0.1} className="h-full">
                <div
                  onClick={() => toggleFeature(feature.title)}
                  className={`group cursor-pointer h-full flex flex-col bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border transition-all duration-300 hover:-translate-y-2 ${
                    expandedFeature === feature.title 
                      ? 'border-lime-400 bg-white/20 ring-2 ring-lime-400/50' 
                      : 'border-white/10 hover:bg-white/15 hover:border-white/20'
                  }`}
                >
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <span className="px-2.5 py-1 bg-lime-400/20 text-lime-300 text-xs font-bold rounded-full border border-lime-400/30 whitespace-nowrap">
                      {feature.highlight}
                    </span>
                  </div>
                  
                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white mb-1 min-h-[3.5rem] leading-tight">{feature.title}</h3>
                  <p className="text-lime-300/70 text-xs font-medium mb-3">{feature.subtitle}</p>
                  
                  {/* Short Description - Fixed height */}
                  <p className="text-white/60 text-sm line-clamp-3 mb-4 flex-1">
                    {feature.description}
                  </p>
                  
                  {/* Ver más button - Always at bottom */}
                  <div className={`flex items-center gap-2 text-sm font-semibold transition-colors mt-auto ${
                    expandedFeature === feature.title ? 'text-lime-300' : 'text-white/70 group-hover:text-lime-300'
                  }`}>
                    <span>{expandedFeature === feature.title ? 'Cerrar' : 'Ver más'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandedFeature === feature.title ? 'rotate-180' : 'group-hover:translate-x-1'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {expandedFeature === feature.title ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      )}
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Panel Expandido con Detalles */}
          {expandedFeature && selectedFeature && (
            <div
              ref={detailRef}
              className="mt-8 overflow-hidden bg-white/10 backdrop-blur-md rounded-3xl border border-lime-400/30 shadow-2xl"
            >
              <div className="p-6 md:p-10">
                {/* Header del panel */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-lime-400/20 rounded-2xl flex items-center justify-center">
                      <span className="text-4xl">{selectedFeature.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-white">
                          {selectedFeature.title}
                        </h3>
                        <span className="px-3 py-1 bg-lime-400/20 text-lime-300 text-xs font-bold rounded-full border border-lime-400/30">
                          {selectedFeature.highlight}
                        </span>
                      </div>
                      <p className="text-lime-300/80 font-medium">{selectedFeature.subtitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedFeature(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Cerrar detalle"
                  >
                    <svg className="w-6 h-6 text-white/60 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Descripción completa */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                  {selectedFeature.description}
                </p>

                {/* Características Clave - Grid */}
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h4 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                    <span className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center text-lime-300">✓</span>
                    Características Clave
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedFeature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                        <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-white/80 text-sm leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Indicación Geográfica - Full Width Card */}
          <ScrollReveal animation="fadeUp" delay={0.5}>
            <div className="mt-16 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-lime-400/20 rounded-full mb-6">
                  <span className="text-5xl">🏆</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black text-white mb-3">
                  Indicación Geográfica Registrada
                </h3>
                <p className="text-white/70 text-lg">
                  Resolución N° 33/2022 - Secretaría de Alimentos, Bioeconomía y Desarrollo Regional
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-5xl font-black text-lime-300 mb-2">6.5°</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">Brix Mínimo</div>
                  <div className="text-white/50 text-xs mt-1">vs 6.2° estándar</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-5xl font-black text-lime-300 mb-2">16.5%</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">Materia Seca</div>
                  <div className="text-white/50 text-xs mt-1">Superior al estándar</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-5xl font-black text-lime-300 mb-2">155</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">Días Mínimos</div>
                  <div className="text-white/50 text-xs mt-1">Desde floración</div>
                </div>
                <div className="text-center p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl md:text-5xl font-black text-lime-300 mb-2">10%</div>
                  <div className="text-white/80 font-medium text-sm md:text-base">Tolerancia Máx.</div>
                  <div className="text-white/50 text-xs mt-1">Frutos bajo 6.2° Brix</div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center">
                <p className="inline-flex items-center gap-2 bg-lime-400/10 text-lime-200 px-6 py-3 rounded-full font-medium text-sm">
                  <span className="text-lg">🌿</span>
                  Primera y única Indicación Geográfica para kiwi en Argentina
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Wave Transition to Cream */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={120}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}

export default function NosotrosPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.to(heroContentRef.current, {
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

      // Stats counter animation
      const statElements = statsRef.current?.querySelectorAll(".stat-value");
      statElements?.forEach((stat) => {
        const finalValue = stat.getAttribute("data-value") || "0";
        const isNumber = !isNaN(parseInt(finalValue));
        
        if (isNumber) {
          gsap.fromTo(
            stat,
            { textContent: "0" },
            {
              textContent: finalValue.replace(/\D/g, ""),
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Timeline line animation
      const timelineLine = timelineRef.current?.querySelector(".timeline-line");
      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#faf8f5] overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION - Inmersivo Full Screen
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/bg-about-sunset.png"
            alt="Campos de kiwi al atardecer en Sierra de los Padres"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a3311]/80 via-[#3f7528]/60 to-[#1a3311]/90" />
        </div>

        {/* Decorative Blur Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-lime-300/5 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div ref={heroContentRef} className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center py-32">
          <div className="max-w-6xl mx-auto text-center">
            {/* Animated Badge */}
            <ScrollReveal animation="fadeUp">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
                <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                <span className="tracking-[0.2em] uppercase">Nuestra Historia</span>
              </div>
            </ScrollReveal>

            {/* Main Title - Single Line Approach */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
                <span className="block text-white">LA MAYOR PRODUCTORA</span>
                <span className="block text-lime-300 mt-1">DE KIWI DE ARGENTINA</span>
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-base md:text-lg text-white/70 mb-12 max-w-xl mx-auto">
                Desde una nota en el diario hasta liderar la industria del kiwi en{" "}
                <span className="text-lime-300">Sierra de los Padres</span>
              </p>
            </ScrollReveal>

            {/* Stats Row - Compact */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div ref={statsRef} className="grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-black text-white">
                      <span className="stat-value" data-value={stat.value}>{stat.value}</span>
                      <span className="text-lime-400 text-2xl md:text-3xl">{stat.suffix}</span>
                    </p>
                    <p className="text-xs md:text-sm text-white/50 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Wave Transition to Cream */}
        <SectionTransition
          variant="wave"
          toColor="#faf8f5"
          height={120}
          className="absolute bottom-0 left-0 right-0"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CERTIFICACIONES SECTION - Primera después del Hero
      ═══════════════════════════════════════════════════════════════════════ */}
      <div className="bg-[#faf8f5] relative">
        <Certifications variant="full" showTitle={true} className="py-24 md:py-36" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          EMPAQUETADORA SECTION - Después de Certificaciones
      ═══════════════════════════════════════════════════════════════════════ */}
      <Empaquetadora />

      {/* ═══════════════════════════════════════════════════════════════════════
          TERROIR SECTION - Mar y Sierras
      ═══════════════════════════════════════════════════════════════════════ */}
      <TerroirSection terroirFeatures={terroirFeatures} />

      {/* ═══════════════════════════════════════════════════════════════════════
          ORIGIN STORY SECTION - La Historia del Fundador
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 bg-[#faf8f5] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/texture-leaves-bokeh.png')" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <ScrollReveal animation="slideRight">
              <div className="space-y-8">
                <div>
                  <span className="inline-block text-[#3f7528] text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-[#3f7528]/10 rounded-full">
                    EL ORIGEN
                  </span>
                </div>
                
                <AnimatedTitle
                  as="h2"
                  animation="words"
                  className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                >
                  De una Nota Periodística a Líder Nacional
                </AnimatedTitle>
                
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Todo comenzó en <span className="text-[#3f7528] font-bold">2006</span> cuando Luis Franch, 
                    abogado de profesión, leyó una nota periodística sobre el potencial del kiwi en Argentina. 
                    Lo que empezó como una inversión en pocas hectáreas en Mar del Plata se transformó en 
                    la <span className="text-[#3f7528] font-bold">mayor operación productora de kiwi del país</span>.
                  </p>
                  <p>
                    En 2017, Franch declaró públicamente su visión: alcanzar los 10 millones de kilos 
                    y competir en calidad con Nueva Zelanda. No buscaba volumen, sino excelencia.
                  </p>
                </div>
                
                {/* Quote Card Premium - Cita real de FreshPlaza 2017 */}
                <div className="bg-gradient-to-r from-[#3f7528]/10 to-[#3f7528]/5 border-l-4 border-[#3f7528] rounded-r-3xl p-6 md:p-8 shadow-lg">
                  <svg className="w-10 h-10 text-[#3f7528]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="italic text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
                    "Modestamente, nuestra aspiración es ser reconocidos por tener un producto de calidad Premium. 
                    Siendo rigurosos en los niveles similares de control de calidad, como por ejemplo lo es Nueva Zelanda."
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3f7528] to-[#4a8a30] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        LF
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Luis Franch</p>
                        <p className="text-sm text-[#3f7528] font-medium">Fundador de iKiwi</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 italic">— FreshPlaza, Febrero 2017</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Image with Overlays */}
            <ScrollReveal animation="slideLeft">
              <div className="relative">
                <ParallaxImage
                  src="/luis-franch-ceo.png"
                  alt="Luis Franch, Fundador de iKiwi"
                  speed={0.15}
                  containerClassName="aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden"
                  className="rounded-3xl"
                />
                
                {/* Floating Year Badge */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-[#3f7528] to-[#4a8a30] text-white px-6 py-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black">
                    2006
                  </p>
                  <p className="text-sm text-white/80 font-medium">Fundación</p>
                </div>

                {/* Stats Overlay Card */}
                <div className="absolute -bottom-6 left-4 right-4 md:left-8 md:right-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-2xl grid grid-cols-3 gap-4 border border-gray-100">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-[#3f7528]">270+</p>
                      <p className="text-xs md:text-sm text-gray-600 font-medium">Hectáreas</p>
                    </div>
                    <div className="text-center border-x border-gray-200">
                      <p className="text-2xl md:text-3xl font-black text-[#3f7528]">0,45kg</p>
                      <p className="text-xs md:text-sm text-gray-600 font-medium">Per Cápita</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-[#3f7528]">#1</p>
                      <p className="text-xs md:text-sm text-gray-600 font-medium">en LATAM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>




      {/* ═══════════════════════════════════════════════════════════════════════
          TIMELINE SECTION - 19 Años de Historia
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={timelineRef} className="py-24 md:py-36 bg-[#faf8f5] relative" id="historia">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-24">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-[#3f7528]/10 rounded-full">
                NUESTRA TRAYECTORIA
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6"
            >
              Una Historia Real
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Basada en noticias y documentos verificados de la industria del kiwi argentino
              </p>
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#3f7528]/10 md:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="timeline-line absolute inset-0 bg-gradient-to-b from-[#3f7528] via-lime-500 to-[#3f7528] origin-top" />
            </div>

            {/* Timeline Events */}
            <div className="space-y-12 md:space-y-20">
              {timeline.map((item, index) => (
                <ScrollReveal
                  key={item.year}
                  animation={index % 2 === 0 ? "slideRight" : "slideLeft"}
                  delay={index * 0.1}
                >
                  <div className={`relative flex items-start gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-br from-[#3f7528] to-[#4a8a30] rounded-full -translate-x-1/2 z-10 shadow-lg ring-4 ring-[#3f7528]/20 hover:ring-8 transition-all duration-300" />

                    {/* Content Card */}
                    <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <div className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                          <span className="text-3xl md:text-4xl font-black text-[#3f7528] font-[family-name:var(--font-playfair)]">{item.year}</span>
                          <div className="w-10 h-1 bg-gradient-to-r from-[#3f7528] to-lime-400 rounded-full" />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#3f7528] transition-colors">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                        
                        {/* Source Badge & Link */}
                        <div className={`flex flex-wrap items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          {item.source && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3f7528]/5 text-[#3f7528]/70 text-xs font-medium rounded-full border border-[#3f7528]/10">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                              </svg>
                              {item.source}
                            </span>
                          )}
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#3f7528] text-white text-xs font-semibold rounded-full hover:bg-[#4a8a30] transition-colors group/link"
                            >
                              Ver noticia
                              <svg className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          VALORES SECTION - Lo Que Nos Define
      ═══════════════════════════════════════════════════════════════════════ */}
      <ColoredSection backgroundColor="beige" transition="wave" transitionTo="#faf8f5">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-[#3f7528]/10 rounded-full">
                LO QUE NOS DEFINE
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6"
            >
              Nuestros Valores
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Los pilares que guían cada decisión en iKiwi
              </p>
            </ScrollReveal>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} animation="fadeUp" delay={index * 0.1} className="h-full">
                <div className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 h-full flex flex-col">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#3f7528]/10 to-lime-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner flex-shrink-0">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3f7528] transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ColoredSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          SUSTENTABILIDAD SECTION - Compromiso Verde
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 bg-[#3f7528] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-lime-300/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <ScrollReveal animation="scale">
                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-6xl">🌍</span>
                </div>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6"
              >
                Compromiso con la Sustentabilidad
              </AnimatedTitle>
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                  Creemos que el futuro de la agricultura está en las prácticas sustentables. 
                  Una parte significativa de nuestra producción cuenta con certificación orgánica.
                </p>
              </ScrollReveal>
            </div>

            {/* Sustainability Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {sustainabilityPractices.map((item, index) => (
                <ScrollReveal key={item.title} animation="fadeUp" delay={index * 0.15}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl text-center">
                    <div className="w-18 h-18 mx-auto mb-5 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-4xl">{item.icon}</span>
                    </div>
                    <span className="inline-block px-4 py-1.5 bg-lime-400/20 text-lime-300 text-sm font-bold rounded-full mb-4 border border-lime-400/30">
                      {item.stat}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <SectionTransition
          variant="wave"
          toColor="#3f7528"
          height={120}
          className="absolute -bottom-1 left-0 right-0"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA FINAL SECTION - Premium Call to Action
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 bg-[#3f7528] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative Blurs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Kiwi Icon */}
            <ScrollReveal animation="scale">
              <div className="w-28 h-28 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-7xl">🥝</span>
              </div>
            </ScrollReveal>
            
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-white mb-6"
            >
              ¿Querés Conocer Más?
            </AnimatedTitle>
            
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Visitá nuestros campos en Sierra de los Padres o contactanos para más información sobre nuestros productos premium
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#3f7528] hover:bg-lime-100 text-lg px-10 py-7 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <Link href="/contacto">CONTACTANOS</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 border-2 border-white/60 text-white hover:bg-white hover:text-[#3f7528] text-lg px-10 py-7 font-bold rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  <Link href="/productos">VER PRODUCTOS</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Certification Badges with Logos */}
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="mt-14 flex flex-wrap justify-center items-center gap-4">
                {[
                  { name: "IG Mar y Sierras", logo: "/logo-ig.png" },
                  { name: "GlobalGAP", logo: "/logo-globalgap.png" },
                  { name: "USDA Organic", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg" },
                  { name: "UE Orgánica", logo: "/logo-ue-organica.png" },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    className="group flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg p-1 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                        unoptimized
                      />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{cert.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
