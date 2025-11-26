"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Button } from "@/components/ui/button";

export function CTAWow() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fondo con gradiente amarillo estilo Zespri */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-400 via-amber-400 to-yellow-500" />
      
      {/* Patrón decorativo de kiwis */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 text-[400px] rotate-12">🥝</div>
        <div className="absolute -bottom-20 -right-20 text-[350px] -rotate-12">🥝</div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" 
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-green-800 leading-none mb-6">
            PROBÁ EL SABOR
            <br />
            <span className="text-white drop-shadow-lg">AUTÉNTICO</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-green-700 mb-12 font-medium max-w-2xl mx-auto">
            Kiwis 100% argentinos cultivados en Sierra de los Padres. 
            Frescos, orgánicos y llenos de vitamina C.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-green-700 hover:bg-green-800 text-white text-xl px-12 py-7 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <Link href="/contacto">DÓNDE COMPRAR</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-3 border-green-700 text-green-700 hover:bg-green-700 hover:text-white text-xl px-12 py-7 rounded-full font-bold"
            >
              <Link href="/nosotros">NUESTRA HISTORIA</Link>
            </Button>
          </div>

          {/* Badges de confianza */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <span className="text-2xl">🏅</span>
              <span className="font-bold text-green-800">IG Mar y Sierras</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="font-bold text-green-800">Orgánico Certificado</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <span className="text-2xl">🌍</span>
              <span className="font-bold text-green-800">Exportación EU</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 100L60 90C120 80 240 60 360 55C480 50 600 60 720 65C840 70 960 70 1080 65C1200 60 1320 50 1380 45L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
