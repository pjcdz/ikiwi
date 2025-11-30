"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const benefits = [
  {
    icon: "💪",
    title: "Sistema Inmunológico",
    description: "Fortalece las defensas naturales del cuerpo contra infecciones y enfermedades.",
    detail: "Un kiwi aporta más del 100% del valor diario de vitamina C.",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30 hover:border-blue-500",
  },
  {
    icon: "🫁",
    title: "Digestión Saludable",
    description: "La actinidina facilita la digestión de proteínas de forma natural.",
    detail: "Reduce la sensación de pesadez después de comidas.",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/30 hover:border-green-500",
  },
  {
    icon: "❤️",
    title: "Salud Cardiovascular",
    description: "Potasio y fibra que ayudan a regular la presión arterial.",
    detail: "2-3 kiwis al día pueden reducir triglicéridos.",
    color: "from-pink-100 to-rose-200",
    borderColor: "border-rose-400/30 hover:border-rose-400",
  },
  {
    icon: "😴",
    title: "Mejora del Sueño",
    description: "Serotonina y antioxidantes que promueven un descanso reparador.",
    detail: "2 kiwis antes de dormir mejoran la calidad del sueño.",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-500/30 hover:border-purple-500",
  },
  {
    icon: "👀",
    title: "Salud Visual",
    description: "Luteína y zeaxantina que protegen tus ojos de la luz azul.",
    detail: "Reduce el riesgo de degeneración macular.",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30 hover:border-amber-500",
  },
  {
    icon: "🦴",
    title: "Huesos Fuertes",
    description: "Vitamina K esencial para la fijación del calcio en los huesos.",
    detail: "Un kiwi aporta el 34% del valor diario de vitamina K.",
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-500/30 hover:border-teal-500",
  },
];

export function NutritionBenefitsGrid() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#f5f0e8]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-benefits-breakfast.png')" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              BENEFICIOS PARA LA SALUD
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            Un Superalimento Natural
          </AnimatedTitle>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Cada kiwi es una pequeña cápsula de salud con beneficios comprobados científicamente
            </p>
          </ScrollReveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={benefit.title}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <div
                className={`group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border-2 ${benefit.borderColor}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-3xl">{benefit.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Detail highlight */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-[#3f7528] text-sm font-semibold flex items-start gap-2">
                    <span className="text-lg">✓</span>
                    {benefit.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional benefits tags */}
        <ScrollReveal animation="fadeUp" delay={0.6}>
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {[
              { icon: "🧬", label: "Antioxidantes" },
              { icon: "⚡", label: "Energía natural" },
              { icon: "🌿", label: "100% natural" },
              { icon: "🏃", label: "Recuperación deportiva" },
            ].map((tag) => (
              <div
                key={tag.label}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 border border-[#3f7528]/20 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-lg">{tag.icon}</span>
                <span className="text-gray-700 text-sm font-medium">{tag.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Transition */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={80}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
