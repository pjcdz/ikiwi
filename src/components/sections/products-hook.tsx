"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const products = [
  {
    id: "green",
    name: "VERDE",
    variety: "Hayward",
    description: "El clásico. Balance perfecto de dulzura y acidez.",
    image: "/product-kiwi-verde.png",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "gold",
    name: "GOLD",
    variety: "Jingold",
    description: "Intensamente dulce con notas tropicales.",
    image: "/product-kiwi-amarillo.png",
    color: "from-amber-400 to-yellow-500",
  },
  {
    id: "organic",
    name: "ORGÁNICO",
    variety: "Certificado",
    description: "Cultivado sin agroquímicos. Exportado a Europa.",
    image: "/product-kiwi-organico.png",
    color: "from-emerald-500 to-green-600",
  },
];

const certifications = [
  {
    name: "IG Mar y Sierras",
    description: "Indicación Geográfica",
    image: "/logo-ig.png",
  },
  {
    name: "GlobalGAP",
    description: "Buenas Prácticas Agrícolas",
    image: "/logo-globalgap.png",
  },
  {
    name: "USDA Organic",
    description: "Certificación Orgánica",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg",
    external: true,
  },
  {
    name: "UE Orgánica",
    description: "Habilitación Exportación",
    image: "/logo-ue-organica.png",
  },
];

export function ProductsHook() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#faf8f5]">
      {/* Background sutil */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-products-orchard-bokeh.png')" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header con título animado */}
        <div className="text-center mb-16 md:mb-20">
          <ScrollReveal animation="fadeUp" className="mb-4">
            <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase">
              Variedades Premium Certificadas
            </span>
          </ScrollReveal>

          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight"
            stagger={0.1}
          >
            NUESTROS KIWIS
          </AnimatedTitle>

          <ScrollReveal animation="fadeUp" delay={0.2} className="mt-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tres variedades únicas con certificación de origen e indicación geográfica
            </p>
          </ScrollReveal>
        </div>

        {/* Grid de productos */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              animation="fadeUp"
              delay={index * 0.15}
            >
              <Link href={`/productos#${product.id}`} className="group block">
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  {/* Imagen */}
                  <div
                    className={`relative h-64 md:h-72 bg-gradient-to-br ${product.color} overflow-hidden`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Contenido */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {product.variety}
                      </span>
                    </div>
                    <p className="text-gray-600">{product.description}</p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center text-[#3f7528] font-semibold group-hover:gap-3 gap-2 transition-all">
                      <span>Descubrir</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Sección de Certificaciones */}
        <ScrollReveal animation="fadeUp" className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#3f7528]/10">
            <div className="text-center mb-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Calidad Certificada
              </h3>
              <p className="text-gray-600">
                Nuestros kiwis cuentan con las certificaciones más exigentes del mercado
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-shadow p-3">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={60}
                      height={60}
                      className="w-full h-full object-contain"
                      unoptimized={cert.external}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                    {cert.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mensaje destacado */}
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-[#3f7528] font-semibold">
                🌿 Primer kiwi argentino con Indicación Geográfica "Mar y Sierras"
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fadeUp" className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#3f7528] hover:bg-[#4a8a30] text-white text-lg px-12 py-7 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Link href="/productos">VER TODOS LOS PRODUCTOS</Link>
          </Button>
        </ScrollReveal>
      </div>

      {/* Transición */}
      <SectionTransition
        variant="organic"
        toColor="#f5f0e8"
        height={80}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
