"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const benefits = [
  { 
    icon: "🌿", 
    title: "Ambiente Natural", 
    description: "Trabajá rodeado de naturaleza en Sierra de los Padres, respirando aire puro" 
  },
  { 
    icon: "📈", 
    title: "Crecimiento Profesional", 
    description: "Oportunidades reales de desarrollo y capacitación continua" 
  },
  { 
    icon: "👥", 
    title: "Equipo Familiar", 
    description: "Un equipo apasionado que se cuida mutuamente como familia" 
  },
  { 
    icon: "🏠", 
    title: "Estabilidad Laboral", 
    description: "Empresa sólida con 19 años de trayectoria y crecimiento sostenido" 
  },
  { 
    icon: "🥝", 
    title: "Producto Premium", 
    description: "Orgullo de producir y exportar el mejor kiwi de Argentina" 
  },
  { 
    icon: "🌍", 
    title: "Impacto Global", 
    description: "Formá parte de una empresa que exporta a mercados internacionales" 
  },
];

export function CareersBenefits() {
  return (
    <>
      <SectionTransition variant="wave" toColor="#1a3311" height={80} />
      
      <section className="py-20 md:py-32 bg-[#1a3311] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#3f7528]/20 rounded-full blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Beneficios
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
              stagger={0.08}
            >
              ¿POR QUÉ IKIWI?
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Descubrí todo lo que tenemos para ofrecerte
              </p>
            </ScrollReveal>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal 
                key={benefit.title} 
                animation="fadeUp" 
                delay={index * 0.1}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 group h-full">
                  {/* Icon */}
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </span>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg mb-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom highlight */}
          <ScrollReveal animation="fadeUp" delay={0.15}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                <span className="text-3xl">🌟</span>
                <p className="text-white font-medium">
                  Más de <span className="text-lime-300 font-bold">90 personas</span> ya eligieron iKiwi
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
