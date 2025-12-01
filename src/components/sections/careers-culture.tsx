"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { ParallaxImage } from "@/components/animations/parallax-image";

const cultureValues = [
  { 
    icon: "🌱", 
    title: "Pasión por la tierra", 
    description: "Amamos lo que hacemos y cuidamos cada planta como si fuera única" 
  },
  { 
    icon: "👥", 
    title: "Trabajo en equipo", 
    description: "Somos una familia que crece junta, apoyándonos mutuamente" 
  },
  { 
    icon: "📈", 
    title: "Crecimiento continuo", 
    description: "Invertimos en el desarrollo profesional de cada persona" 
  },
  { 
    icon: "🌍", 
    title: "Sustentabilidad", 
    description: "Cuidamos el planeta para las generaciones futuras" 
  },
];

export function CareersCulture() {
  return (
    <section className="py-20 md:py-32 bg-[#faf8f5] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <ScrollReveal animation="slideRight">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ParallaxImage
                  src="/about-trabajadores.png"
                  alt="Equipo de iKiwi trabajando en el campo"
                  speed={0.1}
                  containerClassName="aspect-[4/3]"
                  className="rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3311]/50 via-transparent to-transparent" />
              </div>
              
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-[#3f7528] text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-sm text-lime-300 font-medium">Desde</p>
                <p className="font-[family-name:var(--font-playfair)] text-4xl font-black">2006</p>
              </div>

              {/* Decorative blur */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-lime-400/20 rounded-full blur-3xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content Column */}
          <div>
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">
                Nuestra Cultura
              </span>
            </ScrollReveal>

            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6"
              stagger={0.08}
            >
              MÁS QUE UN TRABAJO
            </AnimatedTitle>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                En iKiwi no solo cultivamos el mejor kiwi de Argentina, 
                <span className="text-[#3f7528] font-semibold"> cultivamos personas</span>.
              </p>
              <p className="text-gray-500 mb-10">
                Trabajar rodeado de naturaleza en Sierra de los Padres es una experiencia única. 
                Nuestro equipo es como una familia que comparte la pasión por la tierra y el 
                compromiso con la excelencia.
              </p>
            </ScrollReveal>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cultureValues.map((value, index) => (
                <ScrollReveal 
                  key={value.title} 
                  animation="fadeUp" 
                  delay={0.05 + index * 0.05}
                >
                  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
