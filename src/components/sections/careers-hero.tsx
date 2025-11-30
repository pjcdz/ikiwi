"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VideoBackground } from "@/components/ui/video-background";
import { SectionTransition } from "@/components/animations/section-transition";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const heroStats = [
  { value: "90+", label: "Empleados" },
  { value: "270", label: "Hectáreas" },
  { value: "19", label: "Años" },
];

export function CareersHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
      gsap.set([badgeRef.current, subtitleRef.current, statsRef.current], { opacity: 1, y: 0 });
      const chars = titleRef.current?.querySelectorAll(".char") || [];
      gsap.set(chars, { opacity: 1, y: 0, rotateX: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate badge
      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );

      // Animate title characters
      const chars = titleRef.current?.querySelectorAll(".char") || [];
      tl.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.06 },
        "-=0.4"
      );

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      );

      // Animate stats
      tl.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
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

    return () => ctx.revert();
  }, [prefersReducedMotion]);

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
      {/* Video Background */}
      <VideoBackground
        videoSrc="/video.mp4"
        overlayOpacity={0.6}
        overlayColor="rgb(30, 45, 20)"
        className="absolute inset-0 w-full h-full"
      />

      {/* Green organic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f7528]/40 via-transparent to-[#1a3311]/70 pointer-events-none" />

      {/* Decorative blur elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-lime-400/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-[#3f7528]/30 rounded-full blur-[80px]" />
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center"
      >
        <div className="text-center max-w-5xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/20"
          >
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <span className="tracking-[0.3em] uppercase text-lime-300">
              Oportunidades Laborales
            </span>
          </div>

          {/* Main title with character animation */}
          <h1
            ref={titleRef}
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] mb-6 tracking-tight"
            style={{ perspective: "1000px" }}
          >
            <span className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              {splitChars("SUMATE")}
            </span>
            <span className="block text-lime-300 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-2">
              {splitChars("AL EQUIPO")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Más de <span className="text-lime-300 font-bold">90 personas</span> trabajando con pasión
            <br className="hidden md:block" />
            por el mejor kiwi de Argentina
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="inline-flex items-center gap-8 md:gap-12 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-white">{stat.value}</p>
                <p className="text-sm md:text-base text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={100}
        className="absolute bottom-0 left-0 right-0"
      />
    </section>
  );
}
