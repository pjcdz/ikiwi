"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { SectionTransition } from "@/components/animations/section-transition";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface EmpaquetadoraProps {
  className?: string;
}

const capabilities = [
  {
    icon: "❄️",
    title: "Cámaras de Frío",
    description: "Capacidad para 1.500 toneladas con temperatura controlada para conservar la frescura.",
    image: "/image2.png",
    stat: "1.500 tn",
  },
  {
    icon: "📦",
    title: "Línea de Empaque",
    description: "Tecnología de clasificación óptica y empaque automatizado de última generación.",
    image: "/image7.png",
    stat: "Automatizada",
  },
  {
    icon: "✅",
    title: "Control de Calidad",
    description: "Laboratorio propio para análisis de grados Brix, firmeza y calidad.",
    image: "/image5.png",
    stat: "6.5° Brix",
  },
  {
    icon: "🚚",
    title: "Logística Integrada",
    description: "Despacho directo a supermercados, distribuidores y puerto para exportación.",
    image: "/image6.png",
    stat: "4 Países",
  },
];

const stats = [
  { value: "1.500", label: "Toneladas de capacidad", suffix: "", icon: "📦" },
  { value: "40", label: "Empleados en planta", suffix: "+", icon: "👥" },
  { value: "24/7", label: "Operación en temporada", suffix: "", icon: "⏰" },
];

export function Empaquetadora({ className = "" }: EmpaquetadoraProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      // Gallery images parallax
      const galleryImages = sectionRef.current?.querySelectorAll(".gallery-image");
      galleryImages?.forEach((img, index) => {
        gsap.fromTo(
          img,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`} id="empaquetadora">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] via-[#f5f0e8] to-[#f5f0e8]" />
      
      {/* Decorative Blurs */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#3f7528]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#3f7528] text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-[#3f7528]/10 rounded-full border border-[#3f7528]/20">
            Nuestra Planta
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Empaquetadora Propia
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            No solo producimos kiwis de la más alta calidad, también contamos con 
            nuestra propia planta de empaque y frío para garantizar la frescura 
            desde la cosecha hasta tu mesa.
          </p>
        </div>

        {/* Main Content Grid - Asymmetric Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Gallery - Creative Mosaic */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4 auto-rows-[100px] md:auto-rows-[120px]">
              {/* Main large image */}
              <div className="gallery-image col-span-7 row-span-3 rounded-3xl overflow-hidden relative shadow-2xl group">
                <Image
                  src="/image1.png"
                  alt="Planta de Empaque iKiwi - Sierra de los Padres"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Top right tall */}
              <div className="gallery-image col-span-5 row-span-4 rounded-3xl overflow-hidden relative shadow-xl group">
                <Image
                  src="/image8.png"
                  alt="Producción y cosecha de kiwi"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Bottom left */}
              <div className="gallery-image col-span-7 row-span-2 rounded-2xl overflow-hidden relative shadow-lg group">
                <Image
                  src="/image3.png"
                  alt="Línea de Empaque automatizada"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Bottom right */}
              <div className="gallery-image col-span-5 row-span-1 rounded-2xl overflow-hidden relative shadow-lg group">
                <Image
                  src="/image2.png"
                  alt="Cajas de kiwi iKiwi"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#3f7528]/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#3f7528]">270+</p>
                  <p className="text-xs text-gray-500">Hectáreas productivas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#3f7528]/10 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-[#3f7528] rounded-full animate-pulse" />
                <span className="text-[#3f7528] font-semibold text-sm">Integración Vertical Completa</span>
              </div>
              
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900">
                Producción Vertical Integrada
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                A diferencia de otros productores, en iKiwi controlamos todo el proceso: 
                desde la plantación y cuidado de nuestras <span className="text-[#3f7528] font-bold">270 hectáreas</span> de kiwi, 
                hasta el empaque, frío y distribución final.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Esta integración vertical nos permite garantizar la <span className="text-[#3f7528] font-bold">trazabilidad completa</span>, 
                mantener los más altos estándares de calidad y ofrecer precios competitivos 
                tanto al mercado local como a nuestros socios exportadores.
              </p>
            </div>

            {/* Stats Grid - Premium Style */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className="text-2xl md:text-3xl font-black text-[#3f7528]">
                    <span className="stat-value" data-value={stat.value}>{stat.value}</span>
                    <span className="text-lg">{stat.suffix}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities Grid - Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100"
              onMouseEnter={() => setHoveredCapability(index)}
              onMouseLeave={() => setHoveredCapability(null)}
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Floating Stat Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <span className="text-[#3f7528] font-bold text-sm">{cap.stat}</span>
                </div>

                {/* Icon Overlay */}
                <div className={`absolute bottom-4 left-4 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 ${hoveredCapability === index ? 'scale-110' : ''}`}>
                  <span className="text-3xl">{cap.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#3f7528] transition-colors">
                  {cap.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Premium Certification */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-[#3f7528] to-[#4a8a30] rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Image src="/logo-globalgap.png" alt="GlobalGAP" width={48} height={48} className="w-12 h-12 object-contain" />
                </div>
                <div className="text-white">
                  <h4 className="font-bold text-xl mb-1">
                    Certificación GlobalGAP
                  </h4>
                  <p className="text-white/80 text-sm max-w-md">
                    Nuestra planta cumple con los estándares internacionales de buenas prácticas agrícolas, 
                    garantizando seguridad alimentaria y sustentabilidad.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 text-sm backdrop-blur-sm hover:bg-white/30 transition-colors">
                  ✓ Certificada
                </Badge>
                <Badge className="bg-lime-400/20 text-lime-100 border border-lime-400/30 px-4 py-2 text-sm backdrop-blur-sm hover:bg-lime-400/30 transition-colors">
                  🌍 Habilitada Exportación
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition to next section */}
      <SectionTransition
        variant="organic"
        toColor="#3f7528"
        height={100}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
