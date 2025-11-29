"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export function HeroWow() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const kiwiRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement[]>([]);
  const leavesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline principal para entrada del hero
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animación del título con split text effect
      tl.fromTo(
        titleRef.current?.querySelectorAll("span") || [],
        { y: 120, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 }
      )
      // Subtítulo
      .fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      // Botones - sin animar opacity/transform para evitar flicker con CSS transitions
      .fromTo(
        buttonsRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, clearProps: "transform,opacity" },
        "-=0.4"
      )
      // Stats
      .fromTo(
        statsRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        "-=0.3"
      );

      // Animación del kiwi
      gsap.fromTo(
        kiwiRef.current,
        { scale: 0.5, opacity: 0, rotate: -20 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.4, ease: "elastic.out(1, 0.5)", delay: 0.3 }
      );

      // Animación continua de rotación suave del kiwi
      gsap.to(kiwiRef.current, {
        rotate: 360,
        duration: 60,
        repeat: -1,
        ease: "none"
      });

      // Badges flotantes con animación continua
      badgesRef.current.forEach((badge, i) => {
        if (badge) {
          gsap.fromTo(
            badge,
            { y: 50, opacity: 0, scale: 0.8 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 1 + i * 0.2, ease: "back.out(1.7)" }
          );
          
          // Floating animation
          gsap.to(badge, {
            y: i % 2 === 0 ? -15 : 15,
            duration: 2 + i * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.5 + i * 0.2
          });
        }
      });

      // Hojas decorativas animadas
      const leaves = leavesRef.current?.querySelectorAll(".leaf");
      leaves?.forEach((leaf, i) => {
        gsap.to(leaf, {
          rotate: `+=${10 + i * 5}`,
          y: `+=${5 + i * 2}`,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Fondo con gradiente más rico y profundo */}
      <div className="absolute inset-0 bg-linear-to-br from-green-600 via-emerald-500 to-green-700" />
      
      {/* Overlay con gradiente radial para profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.4)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,150,105,0.3)_0%,transparent_50%)]" />
      
      {/* Kiwis decorativos de fondo */}
      <div className="absolute -top-20 -left-20 w-80 h-80 opacity-30 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-linear-to-br from-green-500 via-green-600 to-green-700 rounded-full">
            <div className="absolute inset-8 bg-linear-to-br from-lime-300 via-lime-400 to-green-500 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-lime-200/60 rounded-full" />
              {[...Array(12)].map((_, i) => (
                <div 
                  key={`bg-seed-1-${i}`}
                  className="absolute w-1.5 h-3 bg-green-800/60 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-50px)`,
                    transformOrigin: 'center center'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-32 -right-32 w-96 h-96 opacity-25 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-linear-to-br from-green-500 via-green-600 to-green-700 rounded-full">
            <div className="absolute inset-10 bg-linear-to-br from-lime-300 via-lime-400 to-green-500 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-lime-200/60 rounded-full" />
              {[...Array(12)].map((_, i) => (
                <div 
                  key={`bg-seed-2-${i}`}
                  className="absolute w-2 h-4 bg-green-800/60 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-60px)`,
                    transformOrigin: 'center center'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Patrón de hojas/semillas decorativas SVG */}
      <div ref={leavesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="leaf absolute top-[5%] left-[5%] w-32 h-32 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-green-900/40 rotate-12">
            <ellipse cx="50" cy="50" rx="20" ry="45" />
          </svg>
        </div>
        <div className="leaf absolute top-[15%] right-[10%] w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-green-900/40 -rotate-45">
            <ellipse cx="50" cy="50" rx="18" ry="40" />
          </svg>
        </div>
        <div className="leaf absolute bottom-[20%] left-[8%] w-28 h-28 opacity-12">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-green-900/40 rotate-45">
            <ellipse cx="50" cy="50" rx="15" ry="38" />
          </svg>
        </div>
        <div className="leaf absolute bottom-[30%] right-[5%] w-36 h-36 opacity-8">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-green-900/40 -rotate-12">
            <ellipse cx="50" cy="50" rx="22" ry="50" />
          </svg>
        </div>
        <div className="leaf absolute top-[40%] left-[15%] w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-green-900/40 rotate-90">
            <ellipse cx="50" cy="50" rx="12" ry="30" />
          </svg>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 min-h-[80vh] lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Texto principal */}
          <div className="text-center lg:text-left">
            {/* Badge cosecha */}
            <div className="inline-flex items-center gap-2 bg-[#3f7528]/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
              Cosecha 2025 disponible
            </div>
            
            <h1 
              ref={titleRef}
              className="text-4xl md:text-7xl lg:text-8xl font-black leading-none mb-4 md:mb-6 tracking-tight"
              style={{ perspective: "1000px" }}
            >
              <span className="inline-block text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] [text-shadow:2px_2px_0_rgba(0,0,0,0.1),-1px_-1px_0_rgba(255,255,255,0.1)]">SABOR</span>
              <br />
              <span className="inline-block text-lime-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] [text-shadow:3px_3px_0_rgba(0,0,0,0.15),-1px_-1px_0_rgba(255,255,255,0.2)]">ARGENTINO</span>
            </h1>
            
            <p 
              ref={subtitleRef}
              className="text-base md:text-2xl text-white/90 mb-6 md:mb-8 font-medium max-w-sm md:max-w-lg mx-auto lg:mx-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              Cultivado con pasión en Sierra de los Padres. <span className="text-lime-300 font-semibold">Dulce, jugoso</span> y lleno de vitamina&nbsp;C.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-[#3f7528] hover:bg-lime-200 hover:text-[#3f7528] text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-bold rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)] transition-[background-color,box-shadow,color] duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Link href="/productos">DESCUBRIR KIWIS</Link>
              </Button>
              <Button 
                asChild 
                variant="ghost"
                size="lg" 
                className="bg-white/15 border-2 border-white/80 text-white hover:bg-white hover:text-[#3f7528] text-base md:text-lg px-6 md:px-8 py-5 md:py-6 font-bold rounded-full backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-[background-color,box-shadow,color,border-color] duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <Link href="/recetas">VER RECETAS</Link>
              </Button>
            </div>

            {/* Stats rápidos */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3 md:gap-6 mt-8 md:mt-12 pt-8 max-w-xs mx-auto lg:mx-0 lg:max-w-md">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-5xl font-black text-lime-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">100%</p>
                <p className="text-white/80 text-xs md:text-sm font-medium">Orgánico</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-5xl font-black text-lime-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">0</p>
                <p className="text-white/80 text-xs md:text-sm font-medium">Agroquímicos</p>
              </div>
            </div>
          </div>

          {/* Visual de kiwis - hidden on mobile */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glow effect de fondo */}
              <div className="absolute inset-0 bg-linear-to-br from-lime-300/20 via-transparent to-green-300/20 rounded-full blur-3xl scale-125" />
              
              {/* Kiwi principal grande */}
              <div ref={kiwiRef} className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Kiwi visual grande con sombras mejoradas */}
                  <div className="relative bg-linear-to-br from-green-400 via-green-500 to-green-600 rounded-full w-72 h-72 md:w-96 md:h-96 shadow-[0_25px_80px_rgba(0,0,0,0.3),inset_0_-10px_40px_rgba(0,0,0,0.1)] flex items-center justify-center border-8 border-green-700/30">
                    {/* Interior del kiwi con gradiente más rico */}
                    <div className="bg-linear-to-br from-lime-200 via-lime-300 to-green-400 rounded-full w-60 h-60 md:w-80 md:h-80 flex items-center justify-center relative overflow-hidden shadow-[inset_0_5px_30px_rgba(255,255,255,0.3),inset_0_-5px_30px_rgba(0,0,0,0.1)]">
                      {/* Centro del kiwi con brillo */}
                      <div className="bg-linear-to-br from-white via-lime-50 to-lime-100 rounded-full w-16 h-16 md:w-20 md:h-20 shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
                      
                      {/* Líneas radiales sutiles */}
                      <div className="absolute inset-0">
                        {[...Array(24)].map((_, i) => (
                          <div 
                            key={`line-${i}`}
                            className="absolute h-full w-px bg-linear-to-t from-transparent via-green-600/20 to-transparent"
                            style={{
                              left: '50%',
                              transform: `rotate(${i * 15}deg)`,
                              transformOrigin: 'center center'
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Semillas decorativas con mejor estilo */}
                      <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-2 h-4 bg-linear-to-b from-green-800 to-green-950 rounded-full shadow-sm"
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
                            className="absolute w-1.5 h-3 bg-linear-to-b from-green-700 to-green-900 rounded-full"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30 + 15}deg) translateY(-100px)`,
                              transformOrigin: 'center center'
                            }}
                          />
                        ))}
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i + 24}
                            className="absolute w-1 h-2.5 bg-linear-to-b from-green-600 to-green-800 rounded-full opacity-70"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `rotate(${i * 30 + 7}deg) translateY(-120px)`,
                              transformOrigin: 'center center'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge Vitamina C - arriba derecha */}
              <div 
                ref={el => { if (el) badgesRef.current[0] = el; }}
                className="absolute -top-2 right-0 bg-linear-to-r from-lime-400 to-lime-500 text-[#3f7528] px-5 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] font-bold text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ¡VITAMINA C!
              </div>
              
              {/* Badge Mar del Plata - abajo */}
              <div 
                ref={el => { if (el) badgesRef.current[1] = el; }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-[#3f7528] px-5 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] font-bold text-sm flex items-center gap-2"
              >
                <span className="text-blue-500">🏔️</span>
                Mar del Plata
              </div>

              {/* Kiwi Gold pequeño decorativo */}
              <div 
                ref={el => { if (el) badgesRef.current[2] = el; }}
                className="absolute top-16 left-4 w-20 h-20 bg-linear-to-br from-[#c4a000] via-[#d4b800] to-[#a08000] rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.2)] border-4 border-[#a08000]/30 flex items-center justify-center"
              >
                <div className="w-14 h-14 bg-linear-to-br from-[#f0d000] to-[#c4a000] rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-xs font-black text-[#5a4400] tracking-wide">GOLD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll - solo en desktop */}
      <div className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/60">
        <span className="text-xs font-medium tracking-widest uppercase">Descubrí más</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Wave decorativa inferior mejorada */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0 120L48 115C96 110 192 100 288 92C384 84 480 78 576 78C672 78 768 84 864 87C960 90 1056 90 1152 88C1248 86 1344 82 1392 80L1440 78V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
