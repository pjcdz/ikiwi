"use client";

import Image from "next/image";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

const galleryImages = [
  { 
    src: "/about-trabajadores.png", 
    alt: "Equipo cosechando kiwis", 
    caption: "Cosecha 2024",
    size: "large" as const,
  },
  { 
    src: "/about-empaquetadora.png", 
    alt: "Empaquetadora de kiwis", 
    caption: "Empaque premium",
    size: "medium" as const,
  },
  { 
    src: "/about-campo-panoramico.png", 
    alt: "Vista panorámica de los campos", 
    caption: "270 hectáreas",
    size: "medium" as const,
  },
  { 
    src: "/ig-home-cosecha.png", 
    alt: "Trabajo en equipo", 
    caption: "Nuestro equipo",
    size: "small" as const,
  },
];

export function CareersGallery() {
  return (
    <>
      <SectionTransition variant="wave" toColor="#faf8f5" height={80} />
      
      <section className="py-20 md:py-32 bg-[#faf8f5] overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                Vida en iKiwi
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4"
              stagger={0.08}
            >
              NUESTRO DÍA A DÍA
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conocé cómo es trabajar rodeado de naturaleza
              </p>
            </ScrollReveal>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Large image - spans 2 cols and 2 rows */}
            <ScrollReveal animation="fadeUp" delay={0.1} className="col-span-2 row-span-2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl group h-full min-h-[300px] md:min-h-[500px]">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-lg">{galleryImages[0].caption}</p>
                  <p className="text-white/70 text-sm">{galleryImages[0].alt}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Medium images */}
            {galleryImages.slice(1, 3).map((image, index) => (
              <ScrollReveal 
                key={image.src} 
                animation="fadeUp" 
                delay={0.2 + index * 0.1}
                className="col-span-1"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-sm">{image.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Small image */}
            <ScrollReveal animation="fadeUp" delay={0.4} className="col-span-2 md:col-span-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group aspect-video md:aspect-square">
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm">{galleryImages[3].caption}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats card */}
            <ScrollReveal animation="fadeUp" delay={0.5} className="col-span-2 md:col-span-1">
              <div className="bg-[#3f7528] rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center shadow-lg aspect-video md:aspect-square">
                <span className="text-5xl mb-4">🥝</span>
                <p className="text-white/80 text-sm mb-2">Producimos</p>
                <p className="text-white font-[family-name:var(--font-playfair)] text-4xl font-black">
                  +3M kg
                </p>
                <p className="text-lime-300 text-sm mt-2">de kiwi por año</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
