"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animations/animated-section";

export function HeroWow() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fondo verde vibrante estilo Zespri */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-green-500 to-emerald-700" />
      
      {/* Patrón de kiwis decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[300px] rotate-12">🥝</div>
        <div className="absolute bottom-10 right-10 text-[250px] -rotate-12">🥝</div>
        <div className="absolute top-1/2 left-1/4 text-[150px] rotate-45">🥝</div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 min-h-[80vh] lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Texto principal */}
          <AnimatedSection animation="fadeUp" className="text-center lg:text-left">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-4 md:mb-6 tracking-tight">
              SABOR
              <br />
              <span className="text-yellow-300">ARGENTINO</span>
            </h1>
            
            <p className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 font-medium max-w-sm md:max-w-lg mx-auto lg:mx-0">
              Cultivado con pasión en Sierra de los Padres. Dulce, jugoso y lleno de vitamina&nbsp;C.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-green-700 hover:bg-yellow-300 hover:text-green-800 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <Link href="/productos">DESCUBRIR KIWIS</Link>
              </Button>
              <Button 
                asChild 
                variant="ghost"
                size="lg" 
                className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-green-700 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-bold rounded-full backdrop-blur-sm"
              >
                <Link href="/recetas">VER RECETAS</Link>
              </Button>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-12 pt-8 max-w-xs mx-auto lg:mx-0 lg:max-w-md">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-5xl font-black text-yellow-300">100%</p>
                <p className="text-white/80 text-xs md:text-sm font-medium">Orgánico</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-5xl font-black text-yellow-300">0</p>
                <p className="text-white/80 text-xs md:text-sm font-medium">Agroquímicos</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual de kiwis - hidden on mobile */}
          <AnimatedSection animation="scale" delay={0.3} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Kiwi principal grande */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder para imagen de kiwi cortado - reemplazar con imagen real */}
                <div className="relative">
                  {/* Círculo de fondo */}
                  <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-3xl scale-110" />
                  
                  {/* Kiwi visual grande */}
                  <div className="relative bg-linear-to-br from-green-400 to-green-600 rounded-full w-72 h-72 md:w-96 md:h-96 shadow-2xl flex items-center justify-center border-8 border-green-800/20">
                    {/* Interior del kiwi */}
                    <div className="bg-linear-to-br from-lime-300 to-green-400 rounded-full w-60 h-60 md:w-80 md:h-80 flex items-center justify-center relative overflow-hidden">
                      {/* Centro del kiwi */}
                      <div className="bg-white/80 rounded-full w-16 h-16 md:w-20 md:h-20" />
                      
                      {/* Semillas decorativas */}
                      <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-2 h-4 bg-green-900 rounded-full"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30}deg) translateY(-80px)`,
                              transformOrigin: 'center center'
                            }}
                          />
                        ))}
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i + 12}
                            className="absolute w-1.5 h-3 bg-green-900/70 rounded-full"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30 + 15}deg) translateY(-100px)`,
                              transformOrigin: 'center center'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges flotantes */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-green-800 px-6 py-3 rounded-full shadow-xl font-bold text-lg animate-bounce">
                Vitamina C
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white text-green-700 px-6 py-3 rounded-full shadow-xl font-bold text-lg animate-bounce delay-500">
                Mar del Plata 🌊
              </div>

              {/* Kiwi pequeño decorativo */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-linear-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg border-4 border-amber-600/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-linear-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-amber-800">GOLD</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Wave decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
