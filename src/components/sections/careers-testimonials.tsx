"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const testimonials = [
  {
    quote: "Trabajar en iKiwi me permitió crecer profesionalmente mientras disfruto de estar en contacto con la naturaleza. Es más que un trabajo, es un estilo de vida.",
    name: "María González",
    role: "Supervisora de Campo",
    years: 8,
    initials: "MG",
  },
  {
    quote: "El ambiente familiar y el compromiso con la calidad hacen que cada día sea gratificante. Me enorgullece ser parte del equipo que produce el mejor kiwi de Argentina.",
    name: "Carlos Rodríguez",
    role: "Jefe de Empaque",
    years: 12,
    initials: "CR",
  },
  {
    quote: "Empecé como temporario y hoy lidero un equipo. iKiwi realmente invierte en su gente y te da oportunidades de crecimiento.",
    name: "Laura Martínez",
    role: "Coordinadora de Calidad",
    years: 6,
    initials: "LM",
  },
];

export function CareersTestimonials() {
  return (
    <section className="py-20 md:py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp">
            <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Testimonios
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4"
            stagger={0.08}
          >
            ELLOS YA ELIGIERON
          </AnimatedTitle>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conocé las experiencias de quienes forman parte de nuestro equipo
            </p>
          </ScrollReveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={testimonial.name} 
              animation="fadeUp" 
              delay={index * 0.15}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative h-full flex flex-col">
                {/* Decorative quote mark */}
                <span className="absolute -top-2 left-6 text-8xl text-[#3f7528]/10 font-serif leading-none select-none">
                  "
                </span>

                {/* Quote */}
                <p className="text-gray-600 text-lg italic leading-relaxed mb-8 relative z-10 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-[#3f7528]/20 flex items-center justify-center text-[#3f7528] font-bold text-lg">
                    {testimonial.initials}
                  </div>

                  {/* Info */}
                  <div className="flex-grow">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>

                  {/* Years badge */}
                  <div className="text-center">
                    <p className="text-2xl font-black text-[#3f7528]">{testimonial.years}</p>
                    <p className="text-xs text-gray-500">años</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
