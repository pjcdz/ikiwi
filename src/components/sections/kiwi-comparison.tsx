"use client";

import Image from "next/image";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";

const kiwiVarieties = [
  {
    name: "KIWI VERDE",
    variety: "Hayward",
    image: "/product-kiwi-verde.png",
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
    badgeColor: "bg-green-500",
    badge: "Más Fibra",
    stats: [
      { label: "Vitamina C", value: "92.7", unit: "mg/100g", level: 58, highlight: false },
      { label: "Fibra", value: "3", unit: "g", level: 100, highlight: true },
      { label: "Actinidina", value: "Alta", level: 100, highlight: true },
      { label: "Dulzura", dots: 2, label2: "Equilibrada" },
      { label: "Acidez", dots: 2, label2: "Media" },
    ],
    description: "El clásico. Balance perfecto entre dulzura y acidez.",
  },
  {
    name: "KIWI GOLD",
    variety: "Jintao",
    image: "/product-kiwi-amarillo.png",
    borderColor: "border-amber-500",
    bgColor: "bg-amber-50",
    badgeColor: "bg-amber-500",
    badge: "Más Vitamina C",
    stats: [
      { label: "Vitamina C", value: "161", unit: "mg/100g", level: 100, highlight: true },
      { label: "Fibra", value: "2", unit: "g", level: 67, highlight: false },
      { label: "Actinidina", value: "Moderada", level: 60, highlight: false },
      { label: "Dulzura", dots: 3, label2: "Muy dulce" },
      { label: "Acidez", dots: 1, label2: "Baja" },
    ],
    description: "Intensamente dulce con notas tropicales.",
  },
];

export function KiwiComparison() {
  const renderDots = (level: number, maxLevel: number = 3) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: maxLevel }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors ${
              i < level ? "bg-[#3f7528]" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              COMPARACIÓN DE VARIEDADES
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            ¿Verde o Amarillo?
          </AnimatedTitle>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
              Ambos son deliciosos y nutritivos. Elegí según tu preferencia de sabor.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kiwiVarieties.map((kiwi, index) => (
            <ScrollReveal
              key={kiwi.name}
              animation={index === 0 ? "slideRight" : "slideLeft"}
            >
              <div
                className={`bg-white rounded-3xl overflow-hidden shadow-xl border-2 ${kiwi.borderColor} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Header with image */}
                <div className={`${kiwi.bgColor} p-8 text-center relative`}>
                  <Badge
                    className={`absolute top-4 right-4 ${kiwi.badgeColor} text-white font-semibold`}
                  >
                    {kiwi.badge}
                  </Badge>
                  <div className="w-32 h-32 mx-auto mb-4 relative">
                    <Image
                      src={kiwi.image}
                      alt={kiwi.name}
                      fill
                      className="object-contain drop-shadow-lg"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-gray-900">
                    {kiwi.name}
                  </h3>
                  <p className="text-gray-500">({kiwi.variety})</p>
                  <p className="text-gray-600 text-sm mt-2">{kiwi.description}</p>
                </div>

                {/* Stats */}
                <div className="p-6 space-y-4">
                  {kiwi.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      {"value" in stat ? (
                        // Progress bar stat
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600 font-medium">
                              {stat.label}
                            </span>
                            <span
                              className={`text-lg font-bold ${
                                stat.highlight ? "text-[#3f7528]" : "text-gray-700"
                              }`}
                            >
                              {stat.value}
                              {stat.unit && (
                                <span className="text-sm font-normal text-gray-500 ml-1">
                                  {stat.unit}
                                </span>
                              )}
                            </span>
                          </div>
                          {"level" in stat && (
                            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-700 ${
                                  stat.highlight
                                    ? "bg-gradient-to-r from-[#3f7528] to-lime-500"
                                    : "bg-gray-300"
                                }`}
                                style={{ width: `${stat.level}%` }}
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        // Dots stat
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 font-medium">
                            {stat.label}
                          </span>
                          <div className="flex items-center gap-2">
                            {renderDots(stat.dots)}
                            <span className="text-xs text-gray-500">
                              {stat.label2}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal animation="fadeUp" delay={0.1}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <span className="text-2xl">💡</span>
              <p className="text-gray-700 font-medium">
                <span className="text-[#3f7528]">Tip:</span> El kiwi verde es
                ideal para digestión, el amarillo para máxima vitamina C
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
