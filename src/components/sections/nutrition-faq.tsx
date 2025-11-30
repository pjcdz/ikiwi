"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuántos kiwis puedo comer al día?",
    answer:
      "Se recomienda consumir 1-3 kiwis al día para obtener sus beneficios óptimos. No hay contraindicaciones para personas sanas. Si tenés alguna condición médica específica como problemas renales o alergias, consultá con tu médico antes de incorporarlo a tu dieta diaria.",
    icon: "🥝",
  },
  {
    question: "¿El kiwi amarillo tiene los mismos beneficios que el verde?",
    answer:
      "Sí, ambos son muy nutritivos pero con diferencias. El kiwi amarillo (Jingold) es más dulce y tiene casi el doble de vitamina C (161mg vs 92.7mg por 100g). El verde (Hayward) tiene más fibra (3g vs 2g) y mayor contenido de actinidina, la enzima digestiva. Elegí según tu preferencia de sabor y necesidades.",
    icon: "🆚",
  },
  {
    question: "¿Se puede comer la piel del kiwi?",
    answer:
      "¡Sí! La piel del kiwi es completamente comestible y aporta fibra adicional, además de concentrar antioxidantes. Lavalo bien antes de consumirlo. Muchas personas prefieren el kiwi amarillo para comer con piel porque tiene menos vellosidad y es más suave al paladar.",
    icon: "🍃",
  },
  {
    question: "¿El kiwi es bueno para personas con diabetes?",
    answer:
      "El kiwi tiene un índice glucémico bajo (GI de 50), lo que significa que no causa picos bruscos de azúcar en sangre. Además, su alto contenido de fibra ayuda a regular la absorción de azúcares. Es una excelente opción de fruta para personas que controlan su glucemia, siempre dentro de un plan alimentario equilibrado.",
    icon: "📊",
  },
  {
    question: "¿Qué es la actinidina y por qué es importante?",
    answer:
      "La actinidina es una enzima proteolítica única del kiwi que ayuda a descomponer las proteínas durante la digestión. Esto hace que el kiwi sea ideal como postre después de comidas con carnes o proteínas. También se usa en la industria alimentaria como ablandador natural de carnes.",
    icon: "🧬",
  },
  {
    question: "¿Cuál es la mejor hora para comer kiwi?",
    answer:
      "El kiwi es versátil y puede consumirse en cualquier momento. En el desayuno aporta energía y vitamina C para empezar el día. Después de las comidas ayuda a la digestión gracias a la actinidina. Antes de dormir (2 kiwis) puede mejorar la calidad del sueño según estudios científicos, gracias a su contenido de serotonina.",
    icon: "⏰",
  },
];

export function NutritionFAQ() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#f5f0e8]">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-recipes-kitchen.png')" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              PREGUNTAS FRECUENTES
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
          >
            Todo Sobre el Kiwi
          </AnimatedTitle>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
              Resolvemos las dudas más comunes sobre el consumo y beneficios del kiwi
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <Accordion
              type="single"
              collapsible
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#3f7528]/10"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-100 last:border-0"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {faq.icon}
                      </span>
                      <span className="font-semibold text-gray-900 text-lg">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-0">
                    <div className="pl-12 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          {/* Additional help */}
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
                <span className="text-xl">❓</span>
                <p className="text-gray-600">
                  ¿Tenés más preguntas?{" "}
                  <a
                    href="/contacto"
                    className="text-[#3f7528] font-semibold hover:underline"
                  >
                    Contactanos
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Transition */}
      <SectionTransition
        variant="wave"
        toColor="#3f7528"
        height={100}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
