"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { VideoBackground } from "@/components/ui/video-background";
import { SectionTransition } from "@/components/animations/section-transition";

gsap.registerPlugin(ScrollTrigger);

export function HeroStorytelling() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate title characters
      const chars1 = titleLine1Ref.current?.querySelectorAll(".char") || [];
      const chars2 = titleLine2Ref.current?.querySelectorAll(".char") || [];

      tl.fromTo(
        chars1,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.08 }
      )
        .fromTo(
          chars2,
          { y: 100, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.06 },
          "-=0.6"
        )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );

      // Parallax effect on scroll
      gsap.to(contentRef.current, {
        y: 150,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    // Hide scroll indicator on first scroll with smooth fade
    let hasScrolled = false;
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 10) {
        hasScrolled = true;
        gsap.to(scrollIndicatorRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const splitChars = (text: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ whiteSpace: char === " " ? "pre" : undefined }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <VideoBackground
        videoSrc="/video.mp4"
        overlayOpacity={0.5}
        overlayColor="rgb(30, 45, 20)"
        showControls={true}
        className="absolute inset-0 w-full h-full"
      />

      {/* Gradiente verde orgánico */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f7528]/30 via-transparent to-[#1a3311]/60 pointer-events-none" />

      {/* Contenido principal */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center"
      >
        <div className="text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            Cosecha 2025 disponible
          </div>

          {/* Título principal con animación de caracteres */}
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight"
            style={{ perspective: "1000px" }}
          >
            <span
              ref={titleLine1Ref}
              className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              {splitChars("KIWI")}
            </span>
            <span
              ref={titleLine2Ref}
              className="block text-lime-300 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-2"
            >
              {splitChars("ARGENTINO")}
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Cultivado con pasión en{" "}
            <span className="text-lime-200 font-semibold">
              Sierra de los Padres
            </span>
            <br className="hidden md:block" />
            La mayor productora de kiwi de Argentina
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#3f7528] text-white hover:bg-[#4a8a30] text-lg px-10 py-7 font-bold rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Link href="/productos">DESCUBRÍ NUESTROS KIWIS</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="bg-white/10 border-2 border-white/60 text-white hover:bg-white hover:text-[#3f7528] text-lg px-10 py-7 font-bold rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <Link href="/nosotros">NUESTRA HISTORIA</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/70"
      >
        <span className="text-xs font-medium tracking-[0.3em] uppercase">
          Explorá
        </span>
        <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Transición wave */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={100}
        className="absolute bottom-0 left-0 right-0"
      />
    </section>
  );
}
