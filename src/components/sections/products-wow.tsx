"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const varieties = [
  {
    id: "green",
    name: "KIWI VERDE",
    variety: "Hayward",
    tagline: "REFRESCANTE Y ÁCIDO",
    description: "El clásico. Pulpa verde brillante con el balance perfecto de dulzura y acidez. Rico en actinidina para una mejor digestión.",
    color: "from-green-500 to-emerald-600",
    textColor: "text-[#3f7528]",
    badge: "Más Popular",
    image: "/product-kiwi-verde.png",
    stats: [
      { label: "Vitamina C", value: "92mg" },
      { label: "Fibra", value: "3g" },
      { label: "Calorías", value: "61" },
    ],
  },
  {
    id: "gold",
    name: "KIWI GOLD",
    variety: "Jingold",
    tagline: "DULCE Y TROPICAL",
    description: "Pulpa dorada intensamente dulce con notas tropicales. 3 veces más vitamina C que una naranja. Piel más suave.",
    color: "from-[#c4a000] to-[#a08000]",
    textColor: "text-[#3f7528]",
    badge: "Premium",
    image: "/product-kiwi-amarillo.png",
    stats: [
      { label: "Vitamina C", value: "161mg" },
      { label: "Fibra", value: "2g" },
      { label: "Calorías", value: "63" },
    ],
  },
  {
    id: "organic",
    name: "KIWI ORGÁNICO",
    variety: "Certificado",
    tagline: "PURO Y NATURAL",
    description: "Cultivado sin agroquímicos con certificación orgánica. Exportado a Europa. El mismo sabor, cero químicos.",
    color: "from-emerald-600 to-green-700",
    textColor: "text-emerald-800",
    badge: "Orgánico",
    image: "/product-kiwi-organico.png",
    stats: [
      { label: "Químicos", value: "0%" },
      { label: "Natural", value: "100%" },
      { label: "Exportación", value: "EU" },
    ],
  },
];

export function ProductsWow() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Background Image - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-products-orchard-bokeh.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5]/80 via-[#faf8f5]/65 to-[#faf8f5]/80 md:from-[#faf8f5]/70 md:via-[#faf8f5]/55 md:to-[#faf8f5]/70" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <Badge className="bg-[#3f7528]/10 text-[#3f7528] text-sm px-4 py-1 mb-4">
            NUESTROS KIWIS
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            VARIEDADES <span className="text-[#3f7528]">EXTRAORDINARIAS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada variedad es única. Todas son deliciosas.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {varieties.map((variety, index) => (
            <AnimatedSection 
              key={variety.id}
              animation="fadeUp"
              delay={index * 0.15}
            >
              <div 
                className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-linear-to-br ${variety.color}`}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-white/90 text-gray-800 font-bold shadow-lg">
                    {variety.badge}
                  </Badge>
                </div>

                {/* Visual del kiwi con imagen real */}
                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <Image
                    src={variety.image}
                    alt={variety.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                {/* Contenido */}
                <div className="bg-white p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className={`text-2xl font-black ${variety.textColor}`}>
                      {variety.name}
                    </h3>
                    <span className="text-sm text-gray-500">({variety.variety})</span>
                  </div>
                  
                  <p className={`text-sm font-bold ${variety.textColor} mb-3`}>
                    {variety.tagline}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {variety.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    {variety.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className={`text-lg font-bold ${variety.textColor}`}>{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fadeUp" className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-[#3f7528] hover:bg-[#3f7528]/90 text-white text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Link href="/productos">VER TODOS LOS PRODUCTOS</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
