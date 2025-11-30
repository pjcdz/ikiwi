"use client";

import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ColoredSection } from "@/components/sections/colored-section";
import { StatsSection } from "@/components/sections/stats-section";
import { PageCTA } from "@/components/sections/page-cta";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Badge } from "@/components/ui/badge";

const heroStats = [
  { value: "90+", label: "Empleados" },
  { value: "270", label: "Hectáreas" },
  { value: "19", label: "Años" },
];

const workAreas = [
  {
    icon: "🌱",
    title: "Campo",
    description: "Trabajo al aire libre en nuestras plantaciones",
    tasks: ["Poda y mantenimiento", "Cosecha de kiwis", "Riego y fertilización", "Control de plagas"],
    season: "Todo el año",
  },
  {
    icon: "📦",
    title: "Empaquetadora",
    description: "Procesamiento y empaque de kiwis",
    tasks: ["Selección y clasificación", "Empaque y etiquetado", "Control de calidad", "Logística"],
    season: "Marzo a Octubre",
  },
  {
    icon: "💼",
    title: "Administrativo",
    description: "Gestión y soporte de operaciones",
    tasks: ["Administración", "Comercialización", "Recursos humanos", "Sistemas"],
    season: "Todo el año",
  },
];

const benefits = [
  { icon: "🌿", title: "Ambiente Natural", description: "Trabajá rodeado de naturaleza" },
  { icon: "📈", title: "Crecimiento", description: "Oportunidades de desarrollo" },
  { icon: "👥", title: "Equipo", description: "Equipo apasionado" },
  { icon: "🏠", title: "Estabilidad", description: "Empresa sólida" },
  { icon: "🥝", title: "Producto Premium", description: "El mejor kiwi de Argentina" },
  { icon: "🌍", title: "Impacto", description: "Exportación al mundo" },
];

export default function TrabajaConNosotrosPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#3f7528] py-16 md:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/about-trabajadores.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/95 via-[#3f7528]/90 to-[#2d5a1c]/95" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <span className="text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                OPORTUNIDADES LABORALES
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h1"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              SUMATE AL EQUIPO
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <p className="text-xl text-white/80 mb-8">
                Más de 90 personas trabajando con pasión por el mejor kiwi de Argentina
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        <SectionTransition variant="wave" toColor="#faf8f5" height={100} className="absolute -bottom-1 left-0 right-0" />
      </section>

      {/* Imagen Parallax */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeUp">
            <div className="relative max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about-trabajadores.png"
                alt="Equipo de iKiwi cosechando"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-[#3f7528] text-white px-4 py-2 rounded-full">
                <span className="font-bold">Desde 2006</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Áreas de Trabajo */}
      <ColoredSection backgroundColor="beige" transition="wave" transitionTo="#faf8f5">
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              ÁREAS DE TRABAJO
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-black text-gray-900"
          >
            Encontrá Tu Lugar
          </AnimatedTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workAreas.map((area, index) => (
            <ScrollReveal key={area.title} animation="fadeUp" delay={index * 0.15}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <span className="text-5xl mb-4 block">{area.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Tareas:</h4>
                  <ul className="space-y-1">
                    {area.tasks.map((task, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#3f7528] rounded-full flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Badge className="bg-[#3f7528]/10 text-[#3f7528]">{area.season}</Badge>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ColoredSection>

      {/* Beneficios */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                BENEFICIOS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
            >
              ¿Por Qué Trabajar en iKiwi?
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} animation="fadeUp" delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4">
                  <span className="text-3xl">{benefit.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionTransition variant="wave" toColor="#f5f0e8" height={80} />

      {/* Formulario */}
      <section className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal animation="fadeUp">
                <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                  POSTULATE
                </span>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
              >
                Enviá Tu CV
              </AnimatedTitle>
            </div>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <form className="bg-white rounded-3xl p-6 md:p-8 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                    <input type="text" id="nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528]" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528]" placeholder="tu@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                    <input type="tel" id="telefono" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528]" placeholder="+54 223 XXX-XXXX" />
                  </div>
                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">Área de Interés *</label>
                    <select id="area" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528]">
                      <option value="">Selecciona un área</option>
                      <option value="campo">Campo</option>
                      <option value="empaquetadora">Empaquetadora</option>
                      <option value="administrativo">Administrativo</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Contanos sobre vos</label>
                  <textarea id="mensaje" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] resize-none" placeholder="Tu experiencia, habilidades..." />
                </div>
                <div>
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700 mb-2">Adjuntar CV (PDF)</label>
                  <input type="file" id="cv" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#3f7528]/10 file:text-[#3f7528] file:font-semibold" />
                </div>
                <div className="text-center">
                  <button type="submit" className="px-8 py-4 bg-[#3f7528] text-white rounded-full font-semibold hover:bg-[#4a8a30] transition-all duration-300 hover:scale-105 shadow-lg">
                    Enviar Postulación
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionTransition variant="wave" toColor="#3f7528" height={80} />

      {/* CTA Final */}
      <PageCTA
        icon="🥝"
        title="¿Tenés Dudas?"
        description="Contactanos para más información sobre oportunidades laborales"
        primaryButton={{ text: "📧 RRHH@IKIWI.COM.AR", href: "mailto:rrhh@ikiwi.com.ar" }}
        secondaryButton={{ text: "📱 INSTAGRAM", href: "https://instagram.com/kiwi_argentino" }}
        variant="green"
      />
    </main>
  );
}
