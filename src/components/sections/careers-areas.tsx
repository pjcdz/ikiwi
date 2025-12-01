"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";
import { Badge } from "@/components/ui/badge";

const workAreas = [
  {
    icon: "🌱",
    title: "Campo",
    description: "Trabajo al aire libre en nuestras 270 hectáreas de plantaciones",
    tasks: [
      "Poda y mantenimiento de plantas",
      "Cosecha de kiwis premium",
      "Riego y fertilización",
      "Control integrado de plagas",
    ],
    season: "Todo el año",
    gradient: "from-green-500/10 via-green-400/5 to-transparent",
    iconBg: "bg-green-500/20",
  },
  {
    icon: "📦",
    title: "Empaquetadora",
    description: "Procesamiento y empaque de kiwis para mercado nacional y exportación",
    tasks: [
      "Selección y clasificación por calibre",
      "Empaque y etiquetado premium",
      "Control de calidad riguroso",
      "Logística y distribución",
    ],
    season: "Marzo a Octubre",
    gradient: "from-amber-500/10 via-amber-400/5 to-transparent",
    iconBg: "bg-amber-500/20",
  },
  {
    icon: "💼",
    title: "Administrativo",
    description: "Gestión y soporte de todas las operaciones de la empresa",
    tasks: [
      "Administración y finanzas",
      "Comercialización y ventas",
      "Recursos humanos",
      "Sistemas y tecnología",
    ],
    season: "Todo el año",
    gradient: "from-blue-500/10 via-blue-400/5 to-transparent",
    iconBg: "bg-blue-500/20",
  },
];

export function CareersAreas() {
  return (
    <>
      <SectionTransition variant="wave" toColor="#f5f0e8" height={80} />
      
      <section className="py-20 md:py-32 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Áreas de Trabajo
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4"
              stagger={0.08}
            >
              ENCONTRÁ TU LUGAR
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubrí las diferentes oportunidades que tenemos para vos
              </p>
            </ScrollReveal>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {workAreas.map((area, index) => (
              <ScrollReveal 
                key={area.title} 
                animation="fadeUp" 
                delay={index * 0.2}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-400 ease-out hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] group h-full flex flex-col">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-20 h-20 ${area.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-5xl">{area.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-gray-900 mb-3">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {area.description}
                    </p>

                    {/* Tasks */}
                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold text-sm text-gray-900 mb-3 uppercase tracking-wider">
                        Tareas principales
                      </h4>
                      <ul className="space-y-2">
                        {area.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="w-2 h-2 bg-[#3f7528] rounded-full mt-1.5 flex-shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Season Badge */}
                    <div className="pt-6 border-t border-gray-100">
                      <Badge className="bg-[#3f7528]/10 text-[#3f7528] hover:bg-[#3f7528]/20 px-4 py-2 text-sm font-semibold">
                        📅 {area.season}
                      </Badge>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
