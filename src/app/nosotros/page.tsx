"use client";

import { useEffect, useRef } from "react";
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

const timeline = [
  { year: "2006", title: "El Nacimiento", description: "Luis Franch decide invertir en kiwis tras una nota periodística. Comienzan con pocas hectáreas en Mar del Plata.", image: "/about-campo-panoramico.png" },
  { year: "2010", title: "Expansión Inicial", description: "Incorporación de nuevas hectáreas y construcción de la primera planta de empaque y frío.", image: "/about-empaquetadora.png" },
  { year: "2015", title: "Convenio con Bologna", description: "Alianza estratégica con la Universidad de Bolonia para desarrollar variedades amarillas y rojas.", image: "/about-trabajadores.png" },
  { year: "2019", title: "Hitos de Exportación", description: "iKiwi alcanza 270 hectáreas. Primera exportación de kiwi amarillo orgánico a Europa.", image: "/about-campo-panoramico.png" },
  { year: "2022", title: "Indicación Geográfica", description: "El 'Kiwi Mar y Sierras' obtiene la IG, reconociendo su calidad diferenciada.", image: "/logo-ig.png" },
  { year: "2023", title: "Exportación con IG", description: "22,400 kg de kiwi orgánico con sello IG exportados a España.", image: "/about-empaquetadora.png" },
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

          {/* Scroll Indicator - Bottom */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
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
        <SectionTransition
          variant="wave"
          toColor="#3f7528"
          height={100}
          className="absolute -bottom-1 left-0 right-0"
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          TERROIR SECTION - Mar y Sierras
      ═══════════════════════════════════════════════════════════════════════ */}
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

            {/* Features Grid - Expanded Cards with Full Information */}
            <div className="grid lg:grid-cols-2 gap-8">
              {terroirFeatures.map((feature, index) => (
                <ScrollReveal key={feature.title} animation="fadeUp" delay={index * 0.1}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:bg-white/15 transition-all duration-500">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-white">{feature.title}</h3>
                          <span className="px-3 py-1.5 bg-lime-400/20 text-lime-300 text-xs font-bold rounded-full border border-lime-400/30">
                            {feature.highlight}
                          </span>
                        </div>
                        <p className="text-lime-300/80 text-sm font-medium">{feature.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-3 pt-4 border-t border-white/10">
                      <h4 className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-4">Características Clave</h4>
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/70 text-sm leading-relaxed">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

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
                <div className="grid md:grid-cols-4 gap-6 mb-10">
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl md:text-5xl font-black text-lime-300 mb-2">6.5°</div>
                    <div className="text-white/80 font-medium">Brix Mínimo</div>
                    <div className="text-white/50 text-xs mt-1">vs 6.2° estándar internacional</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl md:text-5xl font-black text-lime-300 mb-2">16.5%</div>
                    <div className="text-white/80 font-medium">Materia Seca</div>
                    <div className="text-white/50 text-xs mt-1">Densidad nutricional superior</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl md:text-5xl font-black text-lime-300 mb-2">155</div>
                    <div className="text-white/80 font-medium">Días Mínimos</div>
                    <div className="text-white/50 text-xs mt-1">Desde plena floración</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl md:text-5xl font-black text-lime-300 mb-2">10%</div>
                    <div className="text-white/80 font-medium">Tolerancia Máx.</div>
                    <div className="text-white/50 text-xs mt-1">Frutos bajo 6.2° Brix</div>
                  </div>
                </div>

                {/* Protocol Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center text-lime-300">✓</span>
                      Protocolo de Calidad
                    </h4>
                    <div className="space-y-3 text-white/70 text-sm">
                      <p>• <strong className="text-white/90">Poda invernal obligatoria</strong> para control de carga frutal</p>
                      <p>• <strong className="text-white/90">Raleo de frutos</strong> (Diciembre-Marzo) para concentrar nutrientes</p>
                      <p>• <strong className="text-white/90">Control de Brix pre-cosecha</strong> con refractómetro calibrado</p>
                      <p>• <strong className="text-white/90">Cosecha tardía</strong> basada en sabor óptimo, no logística</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-lg flex items-center gap-2">
                      <span className="w-8 h-8 bg-lime-400/20 rounded-lg flex items-center justify-center text-lime-300">🌍</span>
                      Reconocimiento Internacional
                    </h4>
                    <div className="space-y-3 text-white/70 text-sm">
                      <p>• <strong className="text-white/90">Primera y única IG</strong> para kiwi en Argentina</p>
                      <p>• <strong className="text-white/90">Propiedad intelectual colectiva</strong> que protege el nombre</p>
                      <p>• <strong className="text-white/90">Equivalente a D.O.P. e I.G.P.</strong> europeas</p>
                      <p>• <strong className="text-white/90">Exportación certificada</strong> a España desde 2023</p>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-white/60 text-sm max-w-3xl mx-auto">
                    La Indicación Geográfica "Kiwi Mar y Sierras del Sudeste de Buenos Aires" certifica que el producto posee 
                    cualidades derivadas exclusivamente de su origen geográfico, garantizando al consumidor un kiwi de calidad 
                    superior verificada por el Estado Argentino.
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
                  De una Idea a un Imperio del Kiwi
                </AnimatedTitle>
                
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Todo comenzó en <span className="text-[#3f7528] font-bold">2006</span> cuando Luis Franch, un abogado de profesión, descubrió 
                    una oportunidad inesperada. Su esposa había leído una nota periodística sobre 
                    el cultivo de kiwis en Argentina.
                  </p>
                  <p>
                    Lo que empezó como una inversión modesta en unas pocas hectáreas en Mar del Plata 
                    se transformó en la <span className="text-[#3f7528] font-bold">mayor operación productora de kiwi del país</span>.
                  </p>
                </div>
                
                {/* Quote Card Premium */}
                <div className="bg-gradient-to-r from-[#3f7528]/10 to-[#3f7528]/5 border-l-4 border-[#3f7528] rounded-r-3xl p-6 md:p-8 shadow-lg">
                  <svg className="w-10 h-10 text-[#3f7528]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="italic text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                    "Las condiciones climáticas y el suelo son propicios para este cultivo. 
                    Tenemos una posición similar a Nueva Zelanda, pero nuestros suelos hacen la diferencia."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3f7528] to-[#4a8a30] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      LF
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Luis Franch</p>
                      <p className="text-sm text-[#3f7528] font-medium">Fundador de iKiwi</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Image with Overlays */}
            <ScrollReveal animation="slideLeft">
              <div className="relative">
                <ParallaxImage
                  src="/about-campo-panoramico.png"
                  alt="Campos de kiwi en Sierra de los Padres"
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
                      <p className="text-2xl md:text-3xl font-black text-[#3f7528]">90+</p>
                      <p className="text-xs md:text-sm text-gray-600 font-medium">Empleados</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-black text-[#3f7528]">4</p>
                      <p className="text-xs md:text-sm text-gray-600 font-medium">Países</p>
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
              19 Años de Historia
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                Un camino de crecimiento, innovación y compromiso con la excelencia
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
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        
                        {/* Decorative Kiwi */}
                        <div className={`mt-5 flex items-center gap-2 text-[#3f7528]/40 group-hover:text-[#3f7528]/60 transition-colors ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <span className="text-2xl group-hover:scale-110 transition-transform">🥝</span>
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
              <ScrollReveal key={value.title} animation="fadeUp" delay={index * 0.1}>
                <div className="group bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#3f7528]/10 to-lime-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                    <span className="text-4xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#3f7528] transition-colors">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ColoredSection>

      {/* ═══════════════════════════════════════════════════════════════════════
          EMPAQUETADORA SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <Empaquetadora />

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

            {/* Certification Badges */}
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="mt-14 flex flex-wrap justify-center gap-3">
                {["IG Mar y Sierras", "GlobalGAP", "USDA Organic", "UE Orgánica"].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
