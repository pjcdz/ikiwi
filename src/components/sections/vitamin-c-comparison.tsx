"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const vitaminCComparison = [
  { fruit: "Kiwi Verde", amount: "92.7", unit: "mg", percentage: 100, icon: "🥝", highlight: true, badge: "Campeón" },
  { fruit: "Frutilla", amount: "58.8", unit: "mg", percentage: 63, icon: "🍓", highlight: false },
  { fruit: "Naranja", amount: "53.2", unit: "mg", percentage: 57, icon: "🍊", highlight: false },
  { fruit: "Limón", amount: "53", unit: "mg", percentage: 57, icon: "🍋", highlight: false },
  { fruit: "Manzana", amount: "4.6", unit: "mg", percentage: 5, icon: "🍎", highlight: false },
];

export function VitaminCComparison() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setHasAnimated(true);
      return;
    }

    const ctx = gsap.context(() => {
      const bars = barsRef.current?.querySelectorAll(".progress-bar-fill");
      if (!bars) return;

      gsap.fromTo(
        bars,
        { width: "0%" },
        {
          width: (i) => `${vitaminCComparison[i].percentage}%`,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: barsRef.current,
            start: "top 95%",
            once: true,
            onEnter: () => setHasAnimated(true),
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                COMPARACIÓN NUTRICIONAL
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900"
            >
              Vitamina C por 100g
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
                El kiwi supera ampliamente a otras frutas populares en contenido de vitamina C
              </p>
            </ScrollReveal>
          </div>

          {/* Comparison Card */}
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <div
              ref={barsRef}
              className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-[#3f7528]/10"
            >
              <div className="space-y-6">
                {vitaminCComparison.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                      item.highlight
                        ? "bg-[#3f7528]/5 border-2 border-[#3f7528]/20"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`text-4xl w-14 h-14 flex items-center justify-center rounded-xl ${
                        item.highlight ? "bg-[#3f7528]/10" : "bg-gray-100"
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-bold ${
                              item.highlight ? "text-[#3f7528] text-lg" : "text-gray-900"
                            }`}
                          >
                            {item.fruit}
                          </span>
                          {item.badge && (
                            <Badge className="bg-[#3f7528] text-white text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <span
                          className={`text-lg font-bold ${
                            item.highlight ? "text-[#3f7528]" : "text-gray-600"
                          }`}
                        >
                          {item.amount}
                          <span className="text-sm font-normal text-gray-500 ml-1">
                            {item.unit}
                          </span>
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`progress-bar-fill h-full rounded-full transition-all duration-1000 ${
                            item.highlight
                              ? "bg-gradient-to-r from-[#3f7528] to-lime-500"
                              : "bg-gray-300"
                          }`}
                          style={{
                            width: hasAnimated ? `${item.percentage}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-[#3f7528] font-semibold flex items-center justify-center gap-2">
                  <span className="text-xl">💡</span>
                  Un solo kiwi cubre más del 100% del valor diario recomendado de Vitamina C
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
