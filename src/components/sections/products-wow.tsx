"use client";

import Link from "next/link";
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
    bgColor: "bg-green-500",
    textColor: "text-green-800",
    borderColor: "border-green-600",
    pulpColor: "from-lime-300 to-green-400",
    skinColor: "from-amber-700 to-amber-900",
    badge: "Más Popular",
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
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500",
    textColor: "text-amber-800",
    borderColor: "border-amber-500",
    pulpColor: "from-yellow-300 to-amber-400",
    skinColor: "from-amber-600 to-amber-800",
    badge: "Premium",
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
    bgColor: "bg-emerald-600",
    textColor: "text-emerald-800",
    borderColor: "border-emerald-600",
    pulpColor: "from-green-300 to-emerald-400",
    skinColor: "from-amber-700 to-amber-900",
    badge: "Orgánico",
    stats: [
      { label: "Químicos", value: "0%" },
      { label: "Natural", value: "100%" },
      { label: "Exportación", value: "EU" },
    ],
  },
];

export function ProductsWow() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 text-sm px-4 py-1 mb-4">
            NUESTROS KIWIS
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
            VARIEDADES <span className="text-green-600">EXTRAORDINARIAS</span>
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

                {/* Visual del kiwi */}
                <div className="relative h-64 flex items-center justify-center p-8">
                  {/* Kiwi visual */}
                  <div className="relative transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {/* Sombra */}
                    <div className="absolute inset-0 bg-black/20 rounded-full blur-xl translate-y-4" />
                    
                    {/* Kiwi entero */}
                    <div className={`relative w-32 h-40 bg-linear-to-br ${variety.skinColor} rounded-[50%] shadow-lg border-4 border-white/20`}>
                      {/* Textura de la piel - posiciones fijas para evitar hydration mismatch */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '15%', left: '25%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '25%', left: '65%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '35%', left: '15%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '45%', left: '75%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '55%', left: '35%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '65%', left: '55%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '75%', left: '20%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '85%', left: '70%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '20%', left: '45%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '40%', left: '50%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '60%', left: '80%' }} />
                        <div className="absolute w-1 h-1 bg-amber-950 rounded-full" style={{ top: '80%', left: '40%' }} />
                      </div>
                    </div>

                    {/* Kiwi cortado (pulpa visible) */}
                    <div className={`absolute -right-16 top-4 w-28 h-28 bg-linear-to-br ${variety.pulpColor} rounded-full shadow-xl border-4 border-white/30 flex items-center justify-center`}>
                      {/* Centro */}
                      <div className="w-6 h-6 bg-white/80 rounded-full" />
                      {/* Semillas */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-1.5 h-3 bg-gray-800/60 rounded-full"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 45}deg) translateY(-30px)`,
                              transformOrigin: 'center center'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
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
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <Link href="/productos">VER TODOS LOS PRODUCTOS</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
