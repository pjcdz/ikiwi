"use client";

import Image from "next/image";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const actinidinabenefits = [
  {
    icon: "🍖",
    title: "Digestión de proteínas",
    description: "Descompone las proteínas de carnes y lácteos de forma natural",
  },
  {
    icon: "🫃",
    title: "Reduce hinchazón",
    description: "Alivia la sensación de pesadez después de comidas copiosas",
  },
  {
    icon: "🥩",
    title: "Postre ideal",
    description: "Perfecto después de asados, carnes rojas o comidas pesadas",
  },
  {
    icon: "👨‍🍳",
    title: "Ablandador natural",
    description: "Puede usarse para marinar carnes y hacerlas más tiernas",
  },
];

export function ActinidinaSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#3f7528]/10">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3f7528]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              ENZIMA EXCLUSIVA
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            Actinidina: El Secreto del Kiwi
          </AnimatedTitle>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <ScrollReveal animation="slideRight">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-[#3f7528]/20">
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3f7528] to-lime-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🧬</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Enzima Proteolítica
                    </h3>
                    <p className="text-gray-500 text-sm">Única del kiwi</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  La actinidina es una enzima proteolítica natural que se encuentra{" "}
                  <span className="text-[#3f7528] font-semibold">
                    exclusivamente en el kiwi
                  </span>
                  . Tiene la capacidad de descomponer las proteínas, similar a la
                  papaína de la papaya o la bromelina del ananá.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Esta enzima única hace del kiwi un aliado perfecto para la
                  digestión, especialmente después de comidas ricas en proteínas
                  como carnes, pescados o lácteos.
                </p>

                {/* Scientific note */}
                <div className="mt-6 p-4 bg-[#3f7528]/5 rounded-xl border border-[#3f7528]/20">
                  <p className="text-sm text-[#3f7528] font-medium flex items-start gap-2">
                    <span className="text-lg">📚</span>
                    Estudios científicos demuestran que la actinidina mejora la
                    digestión de proteínas hasta en un 40%.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Benefits grid */}
            <ScrollReveal animation="slideLeft">
              <div className="space-y-4">
                {actinidinabenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-x-2 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#3f7528]/20 to-lime-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{benefit.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Tip card */}
                <div className="bg-gradient-to-br from-[#3f7528] to-[#2d5a1c] rounded-2xl p-5 text-white shadow-xl">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="font-bold mb-1">Tip del Chef</h4>
                      <p className="text-white/90 text-sm">
                        Mariná tus carnes con pulpa de kiwi durante 30 minutos
                        para obtener cortes más tiernos y jugosos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Transition */}
      <SectionTransition
        variant="organic"
        toColor="#faf8f5"
        height={80}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
