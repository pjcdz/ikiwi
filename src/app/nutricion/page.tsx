"use client";

import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ColoredSection } from "@/components/sections/colored-section";
import { PageCTA } from "@/components/sections/page-cta";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const vitaminCComparison = [
  { fruit: "Kiwi Verde", amount: "92.7 mg", percentage: 100, icon: "🥝" },
  { fruit: "Naranja", amount: "53.2 mg", percentage: 57, icon: "🍊" },
  { fruit: "Frutilla", amount: "58.8 mg", percentage: 63, icon: "🍓" },
  { fruit: "Limón", amount: "53 mg", percentage: 57, icon: "🍋" },
  { fruit: "Manzana", amount: "4.6 mg", percentage: 5, icon: "🍎" },
];

const benefits = [
  { icon: "💪", title: "Sistema Inmunológico", description: "Fortalece las defensas naturales del cuerpo.", detail: "Un kiwi aporta más del 100% del valor diario de vitamina C.", color: "from-blue-500 to-cyan-500" },
  { icon: "🫁", title: "Digestión Saludable", description: "La actinidina facilita la digestión de proteínas.", detail: "Reduce la sensación de pesadez después de comidas.", color: "from-green-500 to-emerald-500" },
  { icon: "❤️", title: "Salud Cardiovascular", description: "Potasio y fibra para la presión arterial.", detail: "2-3 kiwis al día pueden reducir triglicéridos.", color: "from-red-500 to-rose-500" },
  { icon: "😴", title: "Mejora del Sueño", description: "Serotonina y antioxidantes para dormir mejor.", detail: "2 kiwis antes de dormir mejoran la calidad del sueño.", color: "from-purple-500 to-violet-500" },
  { icon: "👀", title: "Salud Visual", description: "Luteína y zeaxantina protegen la vista.", detail: "Reduce el riesgo de degeneración macular.", color: "from-amber-500 to-orange-500" },
  { icon: "🦴", title: "Huesos Fuertes", description: "Vitamina K para la fijación del calcio.", detail: "Un kiwi aporta el 34% del valor diario de vitamina K.", color: "from-teal-500 to-cyan-500" },
];

const nutritionalFacts = [
  { nutrient: "Calorías", value: "61", unit: "kcal" },
  { nutrient: "Vitamina C", value: "92.7", unit: "mg (103% VD)" },
  { nutrient: "Fibra", value: "3", unit: "g (12% VD)" },
  { nutrient: "Potasio", value: "312", unit: "mg" },
  { nutrient: "Vitamina K", value: "40.3", unit: "µg (34% VD)" },
  { nutrient: "Vitamina E", value: "1.5", unit: "mg" },
];

const faqs = [
  { question: "¿Cuántos kiwis puedo comer al día?", answer: "Se recomienda consumir 1-3 kiwis al día para obtener sus beneficios. No hay contraindicaciones para personas sanas." },
  { question: "¿El kiwi amarillo tiene los mismos beneficios?", answer: "Sí, ambos son nutritivos. El amarillo es más dulce y tiene más vitamina C, mientras que el verde tiene más fibra y actinidina." },
  { question: "¿Se puede comer la piel del kiwi?", answer: "¡Sí! La piel es comestible y aporta fibra adicional. Lávalo bien antes de consumirlo." },
  { question: "¿El kiwi es bueno para diabéticos?", answer: "El kiwi tiene un índice glucémico bajo (GI de 50), lo que significa que no causa picos bruscos de azúcar en sangre." },
  { question: "¿Qué es la actinidina?", answer: "Es una enzima proteolítica única del kiwi que ayuda a descomponer las proteínas durante la digestión." },
];

export default function NutricionPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#3f7528] py-16 md:py-24 lg:py-32">
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <span className="text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                NUTRICIÓN & SALUD
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h1"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              1 KIWI = 1 KILO DE LIMONES
            </AnimatedTitle>
            <AnimatedTitle
              as="p"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-black text-lime-300"
              delay={0.3}
            >
              en Vitamina C
            </AnimatedTitle>
          </div>
        </div>

        <SectionTransition variant="wave" toColor="#faf8f5" height={100} className="absolute -bottom-1 left-0 right-0" />
      </section>

      {/* Comparación Vitamina C */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal animation="fadeUp">
                <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                  COMPARACIÓN
                </span>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-black text-gray-900"
              >
                Vitamina C por 100g
              </AnimatedTitle>
            </div>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
                <div className="space-y-5">
                  {vitaminCComparison.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-3xl w-12">{item.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold text-gray-900">{item.fruit}</span>
                          <span className="text-sm text-gray-500">{item.amount}</span>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              index === 0 ? "bg-gradient-to-r from-[#3f7528] to-lime-500" : "bg-gray-300"
                            }`}
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Beneficios Grid */}
      <ColoredSection backgroundColor="beige" transition="wave" transitionTo="#faf8f5">
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              BENEFICIOS PARA LA SALUD
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl font-black text-gray-900"
          >
            Un Superalimento Natural
          </AnimatedTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} animation="fadeUp" delay={index * 0.1}>
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                <p className="text-[#3f7528] text-xs font-medium">{benefit.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ColoredSection>

      {/* Tabla Nutricional */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <ScrollReveal animation="fadeUp">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-2 block">🥝</span>
                  <h3 className="text-xl font-bold text-gray-900">Información Nutricional</h3>
                  <p className="text-sm text-gray-500">Por cada 100g de kiwi verde</p>
                </div>
                <div className="space-y-3">
                  {nutritionalFacts.map((item, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-700">{item.nutrient}</span>
                      <span className="text-[#3f7528] font-semibold">{item.value} {item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Actinidina Section */}
      <ColoredSection backgroundColor="greenLight">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal animation="slideRight">
              <div>
                <span className="text-5xl mb-4 block">🧬</span>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900 mb-4">
                  Actinidina: La Enzima Única del Kiwi
                </h2>
                <p className="text-gray-600 mb-4">
                  La actinidina es una enzima proteolítica natural que se encuentra 
                  exclusivamente en el kiwi. Tiene la capacidad de descomponer las proteínas, 
                  similar a la papaína de la papaya.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideLeft">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Beneficios</h3>
                <ul className="space-y-3">
                  {[
                    "Mejora la digestión de proteínas",
                    "Reduce la hinchazón después de comidas",
                    "Ideal como postre después de carnes",
                    "Puede usarse como ablandador natural",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-[#3f7528] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ColoredSection>

      {/* Verde vs Amarillo */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                COMPARACIÓN
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
            >
              Kiwi Verde vs. Kiwi Amarillo
            </AnimatedTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ScrollReveal animation="slideRight">
              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-[#3f7528]/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-3 relative">
                    <Image src="/product-kiwi-verde.png" alt="Kiwi Verde" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Kiwi Verde (Hayward)</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between"><span>Vitamina C</span><span className="font-semibold">92.7 mg/100g</span></li>
                  <li className="flex justify-between"><span>Fibra</span><span className="font-semibold text-[#3f7528]">3g (más alto) ⬆️</span></li>
                  <li className="flex justify-between"><span>Actinidina</span><span className="font-semibold text-[#3f7528]">Alta ⬆️</span></li>
                  <li className="flex justify-between"><span>Sabor</span><span className="font-semibold">Ácido-dulce</span></li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideLeft">
              <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-amber-400/30 h-full">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-3 relative">
                    <Image src="/product-kiwi-amarillo.png" alt="Kiwi Amarillo" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Kiwi Amarillo (Jintao)</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between"><span>Vitamina C</span><span className="font-semibold text-amber-600">161 mg/100g ⬆️</span></li>
                  <li className="flex justify-between"><span>Fibra</span><span className="font-semibold">2g</span></li>
                  <li className="flex justify-between"><span>Actinidina</span><span className="font-semibold">Moderada</span></li>
                  <li className="flex justify-between"><span>Sabor</span><span className="font-semibold text-amber-600">Más dulce ⬆️</span></li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <ColoredSection backgroundColor="beige" transition="wave" transitionTo="#3f7528">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                PREGUNTAS FRECUENTES
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
            >
              Todo Sobre el Kiwi
            </AnimatedTitle>
          </div>

          <ScrollReveal animation="fadeUp" delay={0.2}>
            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 font-semibold text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </ColoredSection>

      {/* CTA Final */}
      <PageCTA
        icon="🥝"
        title="Incorpora el Kiwi a Tu Dieta"
        description="Con todos estos beneficios, el kiwi argentino de iKiwi es la opción más fresca y nutritiva."
        primaryButton={{ text: "VER RECETAS", href: "/recetas" }}
        secondaryButton={{ text: "DÓNDE COMPRAR", href: "/contacto" }}
        variant="green"
      />
    </main>
  );
}
