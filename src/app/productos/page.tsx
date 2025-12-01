"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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

// ============================================================================
// DATA: 5 Variedades de Kiwi con información completa
// ============================================================================

interface KiwiVariedad {
  id: string;
  name: string;
  variety: string;
  tagline: string;
  description: string;
  badge: string;
  badgeColor: string;
  image: string;
  gradient: string;
  characteristics: { label: string; value: string }[];
  nutrition: { nutrient: string; value: string; unit: string }[];
  uses: string[];
}

// Datos nutricionales por 100g - Valores específicos y comparables
// Fuentes: USDA FoodData Central, Zespri, estudios Universidad de Bolonia
const variedades: KiwiVariedad[] = [
  {
    id: "verde",
    name: "KIWI VERDE",
    variety: "Hayward",
    tagline: "REFRESCANTE Y ÁCIDO",
    description: "Variedad insignia de nuestra producción. Originario de Nueva Zelanda, encuentra en el sudeste bonaerense las condiciones ideales.",
    badge: "Más Popular",
    badgeColor: "bg-green-500",
    image: "/product-kiwi-verde.png",
    gradient: "from-green-500 to-emerald-600",
    characteristics: [
      { label: "Sabor", value: "Dulce-ácido equilibrado" },
      { label: "Textura", value: "Jugosa y suave" },
      { label: "Piel", value: "Marrón con vellosidad" },
      { label: "Temporada", value: "Mayo a Octubre" },
      { label: "Almacenamiento", value: "2-3 meses en frío" },
      { label: "Maduración", value: "Continúa fuera de la planta" },
    ],
    nutrition: [
      { nutrient: "Calorías", value: "61", unit: "kcal" },
      { nutrient: "Vitamina C", value: "92.7", unit: "mg" },
      { nutrient: "Fibra", value: "3.0", unit: "g" },
      { nutrient: "Potasio", value: "312", unit: "mg" },
      { nutrient: "Vitamina K", value: "40.3", unit: "μg" },
      { nutrient: "Vitamina E", value: "1.5", unit: "mg" },
      { nutrient: "Azúcares", value: "8.9", unit: "g" },
    ],
    uses: ["Consumo fresco", "Smoothies y jugos", "Postres", "Ensaladas", "Salsas para carnes"],
  },
  {
    id: "gold",
    name: "KIWI GOLD",
    variety: "Jingold",
    tagline: "DULCE Y TROPICAL",
    description: "La evolución premium del kiwi. Desarrollado para quienes buscan una experiencia más dulce y tropical.",
    badge: "Premium",
    badgeColor: "bg-amber-500",
    image: "/product-kiwi-amarillo.png",
    gradient: "from-amber-400 to-yellow-500",
    characteristics: [
      { label: "Sabor", value: "Dulce tropical" },
      { label: "Textura", value: "Suave y cremosa" },
      { label: "Piel", value: "Más lisa, menos peluda" },
      { label: "Temporada", value: "Mayo a Septiembre" },
      { label: "Acidez", value: "Menor que el verde" },
      { label: "Brix", value: "16-18° (más dulce)" },
    ],
    nutrition: [
      { nutrient: "Calorías", value: "63", unit: "kcal" },
      { nutrient: "Vitamina C", value: "161.3", unit: "mg" },
      { nutrient: "Fibra", value: "1.4", unit: "g" },
      { nutrient: "Potasio", value: "315", unit: "mg" },
      { nutrient: "Vitamina K", value: "5.5", unit: "μg" },
      { nutrient: "Vitamina E", value: "1.4", unit: "mg" },
      { nutrient: "Azúcares", value: "12.3", unit: "g" },
    ],
    uses: ["Consumo fresco", "Postres gourmet", "Macedonias", "Decoración", "Exportación"],
  },
  {
    id: "rojo",
    name: "KIWI ROJO",
    variety: "Red Passion",
    tagline: "EXÓTICO Y ÚNICO",
    description: "La joya más reciente de nuestra producción. Su pulpa combina tonos verdes con un corazón rojo intenso.",
    badge: "Exclusivo",
    badgeColor: "bg-red-500",
    image: "/product-kiwi-verde.png",
    gradient: "from-red-400 via-rose-500 to-pink-500",
    characteristics: [
      { label: "Sabor", value: "Dulce con notas a frutos rojos" },
      { label: "Textura", value: "Suave y jugosa" },
      { label: "Piel", value: "Lisa, similar al amarillo" },
      { label: "Color interior", value: "Verde con centro rojo" },
      { label: "Disponibilidad", value: "Edición limitada" },
      { label: "Desarrollo", value: "Con U. de Bolonia" },
    ],
    nutrition: [
      { nutrient: "Calorías", value: "64", unit: "kcal" },
      { nutrient: "Vitamina C", value: "130", unit: "mg" },
      { nutrient: "Fibra", value: "2.5", unit: "g" },
      { nutrient: "Potasio", value: "320", unit: "mg" },
      { nutrient: "Vitamina K", value: "28", unit: "μg" },
      { nutrient: "Vitamina E", value: "1.6", unit: "mg" },
      { nutrient: "Azúcares", value: "11.5", unit: "g" },
    ],
    uses: ["Consumo fresco", "Presentaciones gourmet", "Decoración premium", "Regalo exclusivo"],
  },
  {
    id: "organico",
    name: "KIWI ORGÁNICO",
    variety: "Certificado",
    tagline: "PURO Y NATURAL",
    description: "Representa nuestro compromiso con la sustentabilidad. Cultivado sin agroquímicos sintéticos.",
    badge: "Orgánico",
    badgeColor: "bg-emerald-600",
    image: "/product-kiwi-organico.png",
    gradient: "from-emerald-600 to-green-700",
    characteristics: [
      { label: "Certificación", value: "Orgánico Argentina / USDA" },
      { label: "Cultivo", value: "Sin agroquímicos" },
      { label: "Fertilización", value: "Natural y compostaje" },
      { label: "Control plagas", value: "Métodos biológicos" },
      { label: "Trazabilidad", value: "Completa" },
      { label: "Mercados", value: "Argentina, Europa, USA" },
    ],
    nutrition: [
      { nutrient: "Calorías", value: "61", unit: "kcal" },
      { nutrient: "Vitamina C", value: "92.7", unit: "mg" },
      { nutrient: "Fibra", value: "3.0", unit: "g" },
      { nutrient: "Potasio", value: "312", unit: "mg" },
      { nutrient: "Vitamina K", value: "40.3", unit: "μg" },
      { nutrient: "Vitamina E", value: "1.5", unit: "mg" },
      { nutrient: "Azúcares", value: "8.9", unit: "g" },
    ],
    uses: ["Dietas orgánicas", "Alimentación infantil", "Mercados premium", "Exportación"],
  },
  {
    id: "baby",
    name: "BABY KIWI",
    variety: "Kiwiberry",
    tagline: "MINI Y PRÁCTICO",
    description: "Una delicia en miniatura. Del tamaño de una uva grande, su piel lisa y comestible permite disfrutarlo sin pelarlo.",
    badge: "Mini",
    badgeColor: "bg-teal-500",
    image: "/product-baby-kiwi.png",
    gradient: "from-teal-500 to-emerald-600",
    characteristics: [
      { label: "Tamaño", value: "Como una uva grande" },
      { label: "Piel", value: "Lisa y comestible" },
      { label: "Sabor", value: "Intenso y dulce" },
      { label: "Consumo", value: "Entero, sin pelar" },
      { label: "Ideal para", value: "Snacks y decoración" },
      { label: "Disponibilidad", value: "Limitada / Estacional" },
    ],
    nutrition: [
      { nutrient: "Calorías", value: "52", unit: "kcal" },
      { nutrient: "Vitamina C", value: "74.7", unit: "mg" },
      { nutrient: "Fibra", value: "3.5", unit: "g" },
      { nutrient: "Potasio", value: "332", unit: "mg" },
      { nutrient: "Vitamina K", value: "34", unit: "μg" },
      { nutrient: "Vitamina E", value: "2.1", unit: "mg" },
      { nutrient: "Azúcares", value: "7.8", unit: "g" },
    ],
    uses: ["Snack saludable", "Decoración de postres", "Loncheras", "Ensaladas", "Cócteles"],
  },
];

const certifications = [
  { name: "IG Mar y Sierras", logo: "/logo-denominacion-origen.png" },
  { name: "GlobalGAP", logo: "/logo-globalgap.png" },
  { name: "UE Orgánica", logo: "/logo-ue-organica.png" },
];

const months = [
  { letter: "E", name: "Enero", active: false },
  { letter: "F", name: "Febrero", active: false },
  { letter: "M", name: "Marzo", active: false },
  { letter: "A", name: "Abril", active: false },
  { letter: "M", name: "Mayo", active: true },
  { letter: "J", name: "Junio", active: true },
  { letter: "J", name: "Julio", active: true },
  { letter: "A", name: "Agosto", active: true },
  { letter: "S", name: "Septiembre", active: true },
  { letter: "O", name: "Octubre", active: true },
  { letter: "N", name: "Noviembre", active: false },
  { letter: "D", name: "Diciembre", active: false },
];


// ============================================================================
// HERO COMPONENT: Inmersivo con animación 3D
// ============================================================================

function ProductosHero() {
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

      tl.fromTo(
        chars1,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.06 }
      )
        .fromTo(
          chars2,
          { y: 100, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.08 },
          "-=0.6"
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
    <section ref={heroRef} className="relative min-h-[70vh] overflow-hidden bg-[#3f7528]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-products-orchard-bokeh.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/95 via-[#3f7528]/85 to-[#2d5a1c]/90" />

      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 min-h-[70vh] flex items-center justify-center"
      >
        <div className="text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            VARIEDADES PREMIUM CERTIFICADAS
          </div>

          {/* Título con animación 3D */}
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight"
            style={{ perspective: "1000px" }}
          >
            <span
              ref={titleLine1Ref}
              className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              {splitChars("NUESTROS")}
            </span>
            <span
              ref={titleLine2Ref}
              className="block text-lime-300 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-2"
            >
              {splitChars("KIWIS")}
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Cada variedad es única. Todas deliciosas.
          </p>
          <p className="text-lg text-lime-200/80 max-w-2xl mx-auto">
            Cultivados en el terroir único de Mar y Sierras, nuestros kiwis representan lo mejor de la producción argentina.
          </p>
        </div>
      </div>

      {/* Wave transition */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={100}
        className="absolute bottom-0 left-0 right-0"
      />
    </section>
  );
}


// ============================================================================
// VARIEDAD DETAIL: Componente de detalle expandido
// ============================================================================

function VariedadDetail({
  variedad,
  isOpen,
  onClose,
}: {
  variedad: KiwiVariedad;
  isOpen: boolean;
  onClose: () => void;
}) {
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!detailRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        detailRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Mapeo de colores de borde por variedad
  const borderColors: Record<string, string> = {
    verde: "border-green-500",
    gold: "border-amber-500",
    rojo: "border-red-500",
    organico: "border-emerald-600",
    baby: "border-teal-500",
  };

  return (
    <div
      ref={detailRef}
      className={`overflow-hidden bg-white rounded-3xl shadow-2xl mt-8 border-2 ${borderColors[variedad.id] || "border-gray-200"}`}
    >
      <div className="p-6 md:p-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${variedad.gradient} flex items-center justify-center`}>
              <Image
                src={variedad.image}
                alt={variedad.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900">
                {variedad.name}
              </h3>
              <p className="text-gray-500">({variedad.variety})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Cerrar detalle"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Características */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">📋</span> Características
            </h4>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {variedad.characteristics.map((char, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{char.label}</p>
                  <p className="text-sm font-semibold text-gray-900">{char.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nutrición */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl">🥗</span> Nutrición (por 100g)
            </h4>
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {variedad.nutrition.map((nut, idx) => (
                <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
                  <span className="text-gray-600">{nut.nutrient}</span>
                  <span className="font-bold text-[#3f7528]">
                    {nut.value}{nut.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usos */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">🍽️</span> Usos Recomendados
          </h4>
          <div className="flex flex-wrap gap-2">
            {variedad.uses.map((use, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#3f7528]/10 text-[#3f7528] rounded-full text-sm font-medium"
              >
                {use}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// COMPARACION SECTION: Verde vs Gold vs Rojo - Mejorada con imágenes y valores claros
// ============================================================================

function ComparacionSection() {
  const comparacion = [
    {
      id: "verde",
      name: "KIWI VERDE",
      variety: "Hayward",
      image: "/product-kiwi-verde.png",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      badgeColor: "bg-green-500",
      vitC: { value: "92.7", unit: "mg", level: 58 },
      fibra: { value: "3", unit: "g", level: 100 },
      dulzura: { level: 2, label: "Equilibrada" },
      acidez: { level: 2, label: "Media" },
      highlight: "Más fibra",
    },
    {
      id: "gold",
      name: "KIWI GOLD",
      variety: "Jingold",
      image: "/product-kiwi-amarillo.png",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-50",
      badgeColor: "bg-amber-500",
      vitC: { value: "161", unit: "mg", level: 100 },
      fibra: { value: "2", unit: "g", level: 67 },
      dulzura: { level: 3, label: "Muy dulce" },
      acidez: { level: 1, label: "Baja" },
      highlight: "Más Vitamina C",
    },
    {
      id: "rojo",
      name: "KIWI ROJO",
      variety: "Red Passion",
      image: "/product-kiwi-verde.png", // Fallback
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      badgeColor: "bg-red-500",
      vitC: { value: "~120", unit: "mg", level: 75 },
      fibra: { value: "2.5", unit: "g", level: 83 },
      dulzura: { level: 3, label: "Muy dulce" },
      acidez: { level: 1, label: "Baja" },
      highlight: "Exclusivo",
    },
  ];

  const renderDots = (level: number, maxLevel: number = 3) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: maxLevel }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < level ? "bg-[#3f7528]" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              COMPARACIÓN
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            ¿Cuál es tu Kiwi Ideal?
          </AnimatedTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {comparacion.map((kiwi, index) => (
            <ScrollReveal key={kiwi.id} animation="fadeUp" delay={index * 0.15}>
              <div
                className={`bg-white rounded-3xl overflow-hidden shadow-lg border-2 ${kiwi.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Header con imagen */}
                <div className={`${kiwi.bgColor} p-6 text-center relative`}>
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={kiwi.image}
                      alt={kiwi.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-black text-gray-900">
                    {kiwi.name}
                  </h3>
                  <p className="text-sm text-gray-500">({kiwi.variety})</p>
                  <Badge className={`mt-3 ${kiwi.badgeColor} text-white`}>
                    {kiwi.highlight}
                  </Badge>
                </div>

                {/* Contenido con valores claros */}
                <div className="p-6 space-y-5">
                  {/* Vitamina C */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 font-medium">Vitamina C</span>
                      <span className="text-lg font-bold text-[#3f7528]">
                        {kiwi.vitC.value}<span className="text-sm font-normal text-gray-500">{kiwi.vitC.unit}</span>
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#3f7528] to-lime-500 rounded-full transition-all duration-700"
                        style={{ width: `${kiwi.vitC.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Fibra */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600 font-medium">Fibra</span>
                      <span className="text-lg font-bold text-emerald-600">
                        {kiwi.fibra.value}<span className="text-sm font-normal text-gray-500">{kiwi.fibra.unit}</span>
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
                        style={{ width: `${kiwi.fibra.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Dulzura */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">Dulzura</span>
                    <div className="flex items-center gap-2">
                      {renderDots(kiwi.dulzura.level)}
                      <span className="text-xs text-gray-500">{kiwi.dulzura.label}</span>
                    </div>
                  </div>

                  {/* Acidez */}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-medium">Acidez</span>
                    <div className="flex items-center gap-2">
                      {renderDots(kiwi.acidez.level)}
                      <span className="text-xs text-gray-500">{kiwi.acidez.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Nota especial */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="text-center mt-10">
            <p className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-6 py-3 rounded-full font-medium">
              <span className="text-xl">⭐</span>
              Kiwi Rojo: Exclusivo - Desarrollado con Universidad de Bolonia
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ProductosPage() {
  const [expandedVariedad, setExpandedVariedad] = useState<string | null>(null);

  const toggleVariedad = (id: string) => {
    setExpandedVariedad(expandedVariedad === id ? null : id);
  };

  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Inmersivo */}
      <ProductosHero />

      {/* Grid de Variedades */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                DESCUBRÍ NUESTRAS VARIEDADES
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            >
              Kiwis para Cada Gusto
            </AnimatedTitle>
          </div>

          {/* Grid de 5 variedades - Cards con borde de color e imagen grande */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {variedades.map((variedad, index) => {
              // Mapeo de colores de borde por variedad
              const borderColors: Record<string, string> = {
                verde: "border-green-500 hover:border-green-600",
                gold: "border-amber-500 hover:border-amber-600",
                rojo: "border-red-500 hover:border-red-600",
                organico: "border-emerald-600 hover:border-emerald-700",
                baby: "border-teal-500 hover:border-teal-600",
              };
              
              return (
                <ScrollReveal key={variedad.id} animation="fadeUp" delay={index * 0.1}>
                  <div
                    className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer border-2 ${borderColors[variedad.id]}`}
                    onClick={() => toggleVariedad(variedad.id)}
                  >
                    {/* Image Container - Fondo blanco con imagen grande */}
                    <div className="relative h-56 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                      <Badge className={`absolute top-3 right-3 ${variedad.badgeColor} text-white font-semibold text-xs z-10`}>
                        {variedad.badge}
                      </Badge>
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <Image
                          src={variedad.image}
                          alt={variedad.name}
                          width={180}
                          height={180}
                          className="object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 border-t border-gray-100">
                      <div className="mb-2">
                        <h3 className="text-lg font-black text-gray-900">{variedad.name}</h3>
                        <p className="text-xs text-gray-500">({variedad.variety})</p>
                      </div>
                      <p className="text-xs font-bold text-[#3f7528] uppercase tracking-wider mb-2">
                        {variedad.tagline}
                      </p>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{variedad.description}</p>

                      {/* Arrow indicator */}
                      <div className="flex items-center text-[#3f7528] font-semibold text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                        <span>{expandedVariedad === variedad.id ? "Cerrar" : "Ver más"}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expandedVariedad === variedad.id ? "rotate-90" : "group-hover:translate-x-1"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Detalle expandido */}
          {expandedVariedad && (
            <VariedadDetail
              variedad={variedades.find((v) => v.id === expandedVariedad)!}
              isOpen={true}
              onClose={() => setExpandedVariedad(null)}
            />
          )}
        </div>
      </section>

      {/* Certificaciones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#3f7528]/10">
                <div className="text-center mb-8">
                  <AnimatedTitle
                    as="h2"
                    animation="words"
                    className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900 mb-4"
                  >
                    Certificaciones de Calidad
                  </AnimatedTitle>
                  <p className="text-gray-600">
                    Nuestros kiwis cuentan con las certificaciones más exigentes del mercado
                  </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
                  {certifications.map((cert, index) => (
                    <ScrollReveal key={cert.name} animation="scale" delay={index * 0.1}>
                      <div className="group flex flex-col items-center">
                        <div className="bg-white rounded-xl p-4 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <Image
                            src={cert.logo}
                            alt={cert.name}
                            width={80}
                            height={60}
                            className="h-12 w-auto object-contain"
                          />
                        </div>
                        <span className="text-xs text-gray-500 mt-2">{cert.name}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="text-center bg-[#3f7528]/10 rounded-2xl p-4">
                  <p className="text-[#3f7528] font-semibold flex items-center justify-center gap-2">
                    <span className="text-xl">🌿</span>
                    Primer kiwi argentino con Indicación Geográfica Mar y Sierras
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionTransition variant="organic" toColor="#f5f0e8" height={80} />

      {/* Calendario de Temporada */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal animation="fadeUp">
                <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                  TEMPORADA DE COSECHA
                </span>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-black text-gray-900"
              >
                Kiwi Fresco Todo el Año
              </AnimatedTitle>
            </div>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
                <div className="flex justify-between items-center mb-6 overflow-x-auto pb-2 gap-1">
                  {months.map((month, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer hover:scale-110 ${
                        month.active
                          ? "bg-[#3f7528] text-white shadow-lg"
                          : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                      }`}
                      title={month.name}
                    >
                      {month.letter}
                    </div>
                  ))}
                </div>

                <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <div
                    className="absolute h-full bg-gradient-to-r from-[#3f7528] to-lime-500 rounded-full"
                    style={{ left: "33.33%", width: "50%" }}
                  />
                </div>

                <div className="text-center">
                  <p className="text-gray-600 flex items-center justify-center gap-2">
                    <span className="text-2xl">🥝</span>
                    <span>
                      Kiwi fresco de <strong className="text-[#3f7528]">mayo a octubre</strong>
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Gracias a nuestras cámaras de frío, disponemos de kiwi durante todo el año
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionTransition variant="wave" toColor="#faf8f5" height={80} />

      {/* Comparación de Variedades */}
      <ComparacionSection />

      <SectionTransition variant="wave" toColor="#3f7528" height={80} />

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-[#3f7528] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal animation="scale" className="mb-4">
              <span className="text-5xl">🥝</span>
            </ScrollReveal>

            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
            >
              ¿Querés Probar Nuestros Kiwis?
            </AnimatedTitle>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-8">
                Encontrá puntos de venta cerca tuyo o contactanos para pedidos mayoristas
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#3f7528] hover:bg-lime-100 text-lg px-10 py-7 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contacto#exportadores">CONTACTO COMERCIAL</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#3f7528] text-lg px-10 py-7 font-bold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <Link href="/contacto">CONTACTANOS</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Certificaciones mini */}
            <ScrollReveal animation="fadeUp" delay={0.15}>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-white/60 mb-4">Certificaciones</p>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md"
                    >
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        width={50}
                        height={35}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
