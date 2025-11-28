"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/ui/video-background";

export function HeroVideo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animación del título
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
      // Botones
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Video de fondo con fallback - Video del campo con dron */}
      <VideoBackground
        videoSrc="/video.mp4"
        overlayOpacity={0.45}
        overlayColor="rgb(45, 30, 15)"
        showControls={true}
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradiente cálido/terroso para sensación campestre */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-amber-950/40 pointer-events-none" />

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge cosecha */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            Cosecha 2025 disponible
          </div>

          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-8xl font-black leading-none mb-4 md:mb-6 tracking-tight"
            style={{ perspective: "1000px" }}
          >
            <span className="inline-block text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              KIWI
            </span>
            <br />
            <span className="inline-block text-yellow-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              ARGENTINO
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-2xl text-white/90 mb-8 md:mb-10 font-medium max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          >
            Cultivado con pasión en <span className="text-amber-200 font-semibold">Sierra de los Padres, Mar del Plata</span>.
            <br className="hidden md:block" />
            La mayor productora de kiwi de Argentina.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-100 text-green-900 hover:bg-green-200 hover:text-green-950 text-base md:text-lg px-8 py-6 font-bold rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/productos">CONOCÉ NUESTROS KIWIS</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="bg-white/15 border-2 border-white/80 text-white hover:bg-white hover:text-green-900 text-base md:text-lg px-8 py-6 font-bold rounded-full backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/contacto#exportadores">CONTACTO COMERCIAL</Link>
            </Button>
          </div>

          {/* Stats rápidos - más profesional/B2B */}
          <div ref={statsRef} className="grid grid-cols-4 gap-4 mt-12 md:mt-16 pt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-green-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                270+
              </p>
              <p className="text-white/80 text-xs font-medium">Hectáreas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-green-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                1M+
              </p>
              <p className="text-white/80 text-xs font-medium">Kilos/Año</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-green-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                4
              </p>
              <p className="text-white/80 text-xs font-medium">Países Export.</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-green-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                90+
              </p>
              <p className="text-white/80 text-xs font-medium">Empleados</p>
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

      {/* Wave decorativa inferior - tono cremoso */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 115C96 110 192 100 288 92C384 84 480 78 576 78C672 78 768 84 864 87C960 90 1056 90 1152 88C1248 86 1344 82 1392 80L1440 78V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-[#faf8f5]"
          />
        </svg>
      </div>
    </section>
  );
}
