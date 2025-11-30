"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";

const nutritionalFacts = [
  { nutrient: "Calorías", value: "61", unit: "kcal", icon: "🔥", highlight: false },
  { nutrient: "Vitamina C", value: "92.7", unit: "mg (103% VD)", icon: "🍊", highlight: true },
  { nutrient: "Fibra", value: "3", unit: "g (12% VD)", icon: "🌾", highlight: false },
  { nutrient: "Potasio", value: "312", unit: "mg", icon: "⚡", highlight: false },
  { nutrient: "Vitamina K", value: "40.3", unit: "µg (34% VD)", icon: "🦴", highlight: true },
  { nutrient: "Vitamina E", value: "1.5", unit: "mg", icon: "✨", highlight: false },
  { nutrient: "Folato", value: "25", unit: "µg", icon: "🧬", highlight: false },
];

export function NutritionalFactsCard() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              INFORMACIÓN NUTRICIONAL
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            Datos por 100g
          </AnimatedTitle>
        </div>

        {/* Card */}
        <div className="max-w-lg mx-auto">
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-[#3f7528]/20">
              {/* Header with kiwi icon */}
              <div className="text-center mb-8 pb-6 border-b border-gray-100">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3f7528] to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">🥝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Kiwi Verde Hayward
                </h3>
                <p className="text-gray-500 mt-1">
                  Valores nutricionales por porción
                </p>
              </div>

              {/* Nutrients list */}
              <div className="space-y-4">
                {nutritionalFacts.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${
                      item.highlight
                        ? "bg-[#3f7528]/5 border border-[#3f7528]/20"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span
                        className={`font-medium ${
                          item.highlight ? "text-[#3f7528]" : "text-gray-700"
                        }`}
                      >
                        {item.nutrient}
                      </span>
                    </div>
                    <span
                      className={`font-bold ${
                        item.highlight ? "text-[#3f7528]" : "text-gray-900"
                      }`}
                    >
                      {item.value}{" "}
                      <span className="text-sm font-normal text-gray-500">
                        {item.unit}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-[#3f7528]/20 rounded-full border border-[#3f7528]/40" />
                    Destacado
                  </span>
                  <span>VD = Valor Diario</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          {[
            { value: "80%", label: "Agua", description: "Hidratación natural" },
            { value: "Bajo", label: "Índice Glucémico", description: "GI de 50" },
            { value: "0g", label: "Grasas Saturadas", description: "Corazón sano" },
          ].map((stat, index) => (
            <ScrollReveal key={stat.label} animation="fadeUp" delay={0.3 + index * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <p className="text-3xl font-black text-[#3f7528] mb-1">{stat.value}</p>
                <p className="font-semibold text-gray-900">{stat.label}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
