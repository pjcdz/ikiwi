"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

// Componente SVG del Kiwi 
function KiwiSVG({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 400 400" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="kiwiOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="70%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </radialGradient>
        
        <radialGradient id="kiwiInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d9f99d" />
          <stop offset="40%" stopColor="#bef264" />
          <stop offset="100%" stopColor="#84cc16" />
        </radialGradient>
        
        <radialGradient id="kiwiCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fefce8" />
          <stop offset="100%" stopColor="#ecfccb" />
        </radialGradient>
      </defs>

      {/* Círculo exterior - piel del kiwi */}
      <circle cx="200" cy="200" r="150" fill="url(#kiwiOuter)" className="drop-shadow-2xl" />

      {/* Borde sutil */}
      <circle cx="200" cy="200" r="150" fill="none" stroke="#166534" strokeWidth="2" opacity="0.3" />

      {/* Interior - pulpa del kiwi */}
      <circle cx="200" cy="200" r="130" fill="url(#kiwiInner)" />

      {/* Rayos desde el centro */}
      <g opacity="0.3">
        {[...Array(24)].map((_, i) => (
          <line
            key={`ray-${i}`}
            x1="200"
            y1="200"
            x2={200 + Math.cos((i * 15 * Math.PI) / 180) * 130}
            y2={200 + Math.sin((i * 15 * Math.PI) / 180) * 130}
            stroke="#ecfccb"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Centro del kiwi */}
      <circle cx="200" cy="200" r="35" fill="url(#kiwiCenter)" />

      {/* Semillas - Primera capa */}
      <g>
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 200 + Math.cos(angle) * 70;
          const y = 200 + Math.sin(angle) * 70;
          return (
            <ellipse
              key={`seed1-${i}`}
              cx={x}
              cy={y}
              rx="4"
              ry="9"
              fill="#14532d"
              transform={`rotate(${i * 30 + 90}, ${x}, ${y})`}
            />
          );
        })}
      </g>

      {/* Semillas - Segunda capa */}
      <g>
        {[...Array(16)].map((_, i) => {
          const angle = ((i * 22.5 + 11.25) * Math.PI) / 180;
          const x = 200 + Math.cos(angle) * 95;
          const y = 200 + Math.sin(angle) * 95;
          return (
            <ellipse
              key={`seed2-${i}`}
              cx={x}
              cy={y}
              rx="3"
              ry="7"
              fill="#166534"
              transform={`rotate(${i * 22.5 + 11.25 + 90}, ${x}, ${y})`}
            />
          );
        })}
      </g>

      {/* Semillas - Tercera capa */}
      <g>
        {[...Array(20)].map((_, i) => {
          const angle = ((i * 18) * Math.PI) / 180;
          const x = 200 + Math.cos(angle) * 115;
          const y = 200 + Math.sin(angle) * 115;
          return (
            <ellipse
              key={`seed3-${i}`}
              cx={x}
              cy={y}
              rx="2.5"
              ry="5"
              fill="#15803d"
              opacity="0.6"
              transform={`rotate(${i * 18 + 90}, ${x}, ${y})`}
            />
          );
        })}
      </g>

      {/* Brillo superior */}
      <ellipse
        cx="160"
        cy="140"
        rx="40"
        ry="20"
        fill="white"
        opacity="0.15"
        transform="rotate(-30, 160, 140)"
      />
    </svg>
  );
}

export function HeroWow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const kiwiRef = useRef<HTMLDivElement>(null);
  const badgeOrganicoRef = useRef<HTMLDivElement>(null);
  const badgeMarDelPlataRef = useRef<HTMLDivElement>(null);
  const badgeGoldRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeTopRef = useRef<HTMLDivElement>(null);
  const dotsContainerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline de entrada
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animación de entrada del contenido
      tl.fromTo(badgeTopRef.current, 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.3"
      )
      .fromTo(subtitleRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        "-=0.4"
      )
      .fromTo(buttonsRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        "-=0.3"
      )
      .fromTo(statsRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        "-=0.3"
      );

      // Animación del kiwi
      tl.fromTo(kiwiRef.current, 
        { opacity: 0, scale: 0.8, rotation: -10 }, 
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }, 
        "-=1"
      );

      // Badges flotantes con delay
      tl.fromTo(badgeOrganicoRef.current, 
        { opacity: 0, y: -20, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 
        "-=0.5"
      )
      .fromTo(badgeMarDelPlataRef.current, 
        { opacity: 0, y: 20, scale: 0.8 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 
        "-=0.3"
      )
      .fromTo(badgeGoldRef.current, 
        { opacity: 0, x: -20, scale: 0.8 }, 
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(2)" }, 
        "-=0.3"
      );

      // Animaciones flotantes continuas para los badges
      gsap.to(badgeOrganicoRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(badgeMarDelPlataRef.current, {
        y: 8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      gsap.to(badgeGoldRef.current, {
        y: -6,
        x: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });

      // Animaciones de los blobs de fondo
      gsap.to(blob1Ref.current, {
        x: 30,
        y: 20,
        scale: 1.1,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to(blob2Ref.current, {
        x: -25,
        y: 30,
        scale: 0.95,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });

      gsap.to(blob3Ref.current, {
        x: 20,
        y: -25,
        scale: 1.05,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4
      });

      // Animación de los puntitos flotantes
      if (dotsContainerRef.current) {
        const dots = dotsContainerRef.current.querySelectorAll('.floating-dot');
        dots.forEach((dot, index) => {
          gsap.to(dot, {
            y: `random(-20, 20)`,
            x: `random(-15, 15)`,
            opacity: `random(0.3, 0.8)`,
            duration: `random(3, 6)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1
          });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Fondo base con gradiente */}
      <div className="absolute inset-0 bg-linear-to-br from-green-600 via-emerald-500 to-green-600" />
      
      {/* Blobs difuminados de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={blob1Ref} className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-linear-to-br from-yellow-400/30 to-lime-400/20 blur-3xl rounded-full" />
        <div ref={blob2Ref} className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-linear-to-tr from-emerald-400/30 to-green-300/20 blur-3xl rounded-full" />
        <div ref={blob3Ref} className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-linear-to-t from-teal-400/25 to-green-400/15 blur-3xl rounded-full" />
      </div>

      {/* Puntitos flotantes decorativos */}
      <div ref={dotsContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="floating-dot absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 min-h-[85vh] lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Texto principal */}
          <div className="text-center lg:text-left">
            {/* Badge superior */}
            <div ref={badgeTopRef} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 shadow-lg opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span className="text-white/90 text-sm font-medium">Cosecha 2025 disponible</span>
            </div>

            <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tight drop-shadow-lg opacity-0">
              SABOR
              <br />
              <span className="text-yellow-300">ARGENTINO</span>
            </h1>
            
            <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow opacity-0">
              Cultivado con pasión en Sierra de los Padres. 
              <span className="text-yellow-300 font-semibold"> Dulce, jugoso</span> y lleno de vitamina C.
            </p>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center opacity-0">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-green-700 hover:bg-yellow-300 hover:text-green-800 text-base md:text-lg px-8 py-6 font-bold rounded-full shadow-2xl shadow-black/20 hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-105"
              >
                <Link href="/productos">DESCUBRIR KIWIS</Link>
              </Button>
              <Button 
                asChild 
                variant="ghost"
                size="lg" 
                className="bg-white/10 border-2 border-white/40 text-white hover:bg-white hover:text-green-700 text-base md:text-lg px-8 py-6 font-bold rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <Link href="/recetas">VER RECETAS</Link>
              </Button>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-6 mt-12 pt-8 opacity-0">
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-yellow-300 drop-shadow">100%</p>
                <p className="text-white/70 text-xs md:text-sm font-medium mt-1">Vitamina C diaria</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-black text-yellow-300 drop-shadow">0</p>
                <p className="text-white/70 text-xs md:text-sm font-medium mt-1">Agroquímicos</p>
              </div>
            </div>
          </div>

          {/* SVG del Kiwi */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow difuminado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[450px] h-[450px] bg-linear-to-br from-yellow-400/40 via-lime-400/30 to-green-400/20 rounded-full blur-3xl" />
              </div>

              {/* SVG principal del kiwi */}
              <div ref={kiwiRef} className="relative z-10 opacity-0">
                <KiwiSVG className="w-full h-auto drop-shadow-2xl" />
              </div>

              {/* Badge Orgánico */}
              <div ref={badgeOrganicoRef} className="absolute -top-4 right-4 z-20 opacity-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-linear-to-r from-yellow-400 to-amber-400 text-green-900 px-5 py-2.5 rounded-full shadow-xl font-bold text-sm border border-yellow-300/50">
                    ✨ ¡ORGÁNICO!
                  </div>
                </div>
              </div>
              
              {/* Badge Mar del Plata */}
              <div ref={badgeMarDelPlataRef} className="absolute bottom-16 left-4 z-20 opacity-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-30" />
                  <div className="relative bg-white/95 backdrop-blur text-green-700 px-5 py-2.5 rounded-full shadow-xl font-bold text-sm border border-white/50">
                    🌊 Mar del Plata
                  </div>
                </div>
              </div>

              {/* Kiwi Gold pequeño */}
              <div ref={badgeGoldRef} className="absolute top-12 -left-8 z-20 opacity-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-40" />
                  <div className="relative w-20 h-20 bg-linear-to-br from-amber-400 via-yellow-400 to-amber-500 rounded-full shadow-xl flex items-center justify-center border-2 border-amber-300/50">
                    <div className="w-14 h-14 bg-linear-to-br from-yellow-300 to-amber-400 rounded-full flex items-center justify-center shadow-inner">
                      <span className="text-[10px] font-black text-amber-800 tracking-wider">GOLD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path 
            d="M0 120L48 115C96 110 192 100 288 90C384 80 480 70 576 70C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60">
        <span className="text-xs font-medium tracking-[0.2em] uppercase">Descubrí más</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
