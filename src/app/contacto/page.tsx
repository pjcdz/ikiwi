"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageCTA } from "@/components/sections/page-cta";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// DATA
// ============================================================================

const contactOptions = [
  {
    id: "donde-comprar",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Dónde Comprar",
    description: "Encontrá kiwis frescos en supermercados y verdulerías cerca tuyo",
    href: "#donde-comprar",
    linkText: "Ver puntos de venta",
    variant: "light" as const,
  },
  {
    id: "b2b",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Empresas B2B",
    description: "Restaurantes, supermercados, exportadores e industria alimentaria",
    href: "#b2b",
    linkText: "Contacto comercial",
    variant: "dark" as const,
  },
  {
    id: "contacto",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Contactanos",
    description: "Consultas, sugerencias o cualquier cosa que necesites",
    href: "#form",
    linkText: "Enviar mensaje",
    variant: "light" as const,
  },
];

const certifications = [
  { name: "IG Mar y Sierras", logo: "/logo-ig.png" },
  { name: "GlobalGAP", logo: "/logo-globalgap.png" },
  { name: "USDA Organic", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg" },
  { name: "Export UE", logo: "/logo-ue-organica.png" },
];


// ============================================================================
// HERO COMPONENT: Inmersivo con animación 3D de caracteres (como home/productos)
// ============================================================================

function ContactoHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      const chars1 = titleLine1Ref.current?.querySelectorAll(".char") || [];
      const chars2 = titleLine2Ref.current?.querySelectorAll(".char") || [];

      tl.fromTo(
        chars1,
        { y: 100, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.05 }
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
    <section ref={heroRef} className="relative min-h-[70vh] overflow-hidden bg-[#3f7528]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-cta-sunset-fields.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/95 via-[#3f7528]/85 to-[#2d5a1c]/90" />

      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container mx-auto px-4 min-h-[70vh] flex items-center justify-center"
      >
        <div className="text-center max-w-5xl">
          {/* Badge con punto pulsante */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/20">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            CONECTÁ CON NOSOTROS
          </div>

          {/* Título con animación 3D de caracteres */}
          <h1
            className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tight"
            style={{ perspective: "1000px" }}
          >
            <span
              ref={titleLine1Ref}
              className="block text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              {splitChars("¿LISTO PARA")}
            </span>
            <span
              ref={titleLine2Ref}
              className="block text-lime-300 drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] mt-2"
            >
              {splitChars("CONECTAR?")}
            </span>
          </h1>

          {/* Subtítulo */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-white/90 mb-4 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Kiwis premium con certificación de origen
          </p>
          <p className="text-lg text-lime-200/80 max-w-2xl mx-auto mb-10">
            Directo de Sierra de los Padres a tu mesa o negocio
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#3f7528] hover:bg-lime-100 text-lg px-10 py-7 font-bold rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Link href="#form">ENVIAR MENSAJE</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="bg-white/10 border-2 border-white/60 text-white hover:bg-white hover:text-[#3f7528] text-lg px-10 py-7 font-bold rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <a href="https://wa.me/5492235000000" target="_blank" rel="noopener noreferrer">
                WHATSAPP DIRECTO
              </a>
            </Button>
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


// ============================================================================
// CONTACT OPTIONS SECTION: Cards premium con hover effects
// ============================================================================

function ContactOptionsSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal animation="fadeUp">
            <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              ¿CÓMO PODEMOS AYUDARTE?
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Elegí tu Forma de Contacto
          </AnimatedTitle>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ya sea que busques comprar kiwis frescos, hacer negocios B2B o simplemente tengas una consulta
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactOptions.map((option, index) => (
            <ScrollReveal key={option.id} animation="fadeUp" delay={index * 0.15}>
              <Link
                href={option.href}
                className={`group block rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-4 text-center ${
                  option.variant === "dark"
                    ? "bg-[#1a3311] text-white shadow-xl hover:shadow-2xl relative overflow-hidden"
                    : "bg-white shadow-xl hover:shadow-2xl"
                }`}
              >
                {option.variant === "dark" && (
                  <>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-lime-400/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  </>
                )}
                <div className="relative">
                  <div className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 ${
                    option.variant === "dark" 
                      ? "bg-white/15 backdrop-blur-sm border border-white/20 text-white" 
                      : "bg-gradient-to-br from-lime-100 to-lime-200 shadow-lg text-[#3f7528]"
                  }`}>
                    {option.icon}
                  </div>
                  <h3 className={`font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black mb-4 ${
                    option.variant === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {option.title}
                  </h3>
                  <p className={`text-base mb-8 leading-relaxed ${
                    option.variant === "dark" ? "text-white/70" : "text-gray-500"
                  }`}>
                    {option.description}
                  </p>
                  <span className={`inline-flex items-center gap-2 font-bold text-lg group-hover:gap-4 transition-all duration-300 ${
                    option.variant === "dark" ? "text-lime-300" : "text-[#3f7528]"
                  }`}>
                    {option.linkText}
                    <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


// ============================================================================
// DIRECT CONTACT SECTION: WhatsApp y Email con diseño premium
// ============================================================================

function DirectContactSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#3f7528]" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bg-cta-gaucho-sunset.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f7528]/90 to-[#1a3311]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal animation="fadeUp">
            <span className="text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
              CONTACTO DIRECTO
            </span>
          </ScrollReveal>
          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Hablemos Ahora
          </AnimatedTitle>
          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Respuesta garantizada en menos de 24 horas
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Buttons */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <a
              href="https://wa.me/5492235000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="group block"
            >
              <div className="bg-[#25D366] rounded-3xl p-8 flex items-center gap-6 shadow-2xl hover:shadow-[0_20px_60px_rgba(37,211,102,0.4)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-white font-black text-2xl mb-1">WhatsApp</p>
                  <p className="text-white/80">Respuesta inmediata</p>
                </div>
                <svg className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal animation="fadeUp" delay={0.4}>
            <a
              href="mailto:ventas@ikiwi.com.ar"
              aria-label="Enviar email a ventas@ikiwi.com.ar"
              className="group block"
            >
              <div className="bg-white rounded-3xl p-8 flex items-center gap-6 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="w-20 h-20 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-900 font-black text-2xl mb-1">Email</p>
                  <p className="text-gray-500">ventas@ikiwi.com.ar</p>
                </div>
                <svg className="w-8 h-8 text-[#3f7528] group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          </ScrollReveal>
        </div>

        {/* Certificaciones */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-white/50 text-sm uppercase tracking-wider mb-6">Certificaciones que nos avalan</p>
            <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10 hover:bg-white/20 transition-colors">
                  <Image 
                    src={cert.logo} 
                    alt={cert.name} 
                    width={28} 
                    height={28} 
                    className="w-7 h-7 object-contain"
                    unoptimized={cert.logo.startsWith('http')}
                  />
                  <span className="text-white font-medium text-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <SectionTransition variant="wave" toColor="#f5f0e8" height={100} className="absolute -bottom-1 left-0 right-0" />
    </section>
  );
}


// ============================================================================
// CONTACT FORM SECTION: Formulario premium con diseño mejorado
// ============================================================================

function ContactFormSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simular envío
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="form" className="py-20 md:py-28 lg:py-32 bg-[#f5f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                ESCRIBINOS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            >
              Envianos un Mensaje
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                Completá el formulario y te responderemos a la brevedad
              </p>
            </ScrollReveal>
          </div>

          {/* Form Card */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    required 
                    aria-required="true"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#3f7528] transition-all text-lg" 
                    placeholder="Tu nombre completo" 
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    aria-required="true"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#3f7528] transition-all text-lg" 
                    placeholder="tu@email.com" 
                  />
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <label htmlFor="telefono" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Teléfono
                  </label>
                  <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#3f7528] transition-all text-lg" 
                    placeholder="+54 223 456 7890" 
                  />
                </div>

                {/* Empresa */}
                <div className="space-y-2">
                  <label htmlFor="empresa" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Empresa / Organización
                  </label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#3f7528] transition-all text-lg" 
                    placeholder="Opcional" 
                  />
                </div>
              </div>

              {/* Motivo */}
              <div className="space-y-2 mt-8">
                <label htmlFor="motivo" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Motivo de Contacto <span className="text-red-500">*</span>
                </label>
                <select 
                  id="motivo" 
                  name="motivo"
                  required 
                  aria-required="true"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#3f7528] transition-all text-lg bg-white appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="compra">🛒 Compra directa</option>
                  <option value="distribucion">📦 Distribución / Mayorista</option>
                  <option value="exportacion">🌍 Exportación</option>
                  <option value="prensa">📰 Prensa / Medios</option>
                  <option value="otro">💬 Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div className="space-y-2 mt-8">
                <label htmlFor="mensaje" className="block text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="mensaje" 
                  name="mensaje"
                  required 
                  aria-required="true"
                  rows={5} 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#3f7528] transition-all text-lg resize-none" 
                  placeholder="Contanos en qué podemos ayudarte..." 
                />
              </div>

              {/* Submit Button */}
              <div className="mt-10 text-center">
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className={`px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    formState === 'success' 
                      ? 'bg-green-500 text-white' 
                      : formState === 'submitting'
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-[#3f7528] text-white hover:bg-[#4a8a30] hover:scale-105 hover:-translate-y-1'
                  }`}
                >
                  {formState === 'submitting' ? (
                    <span className="flex items-center gap-3">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : formState === 'success' ? (
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      ¡Mensaje Enviado!
                    </span>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}


// ============================================================================
// MAP SECTION: Mapa con diseño premium
// ============================================================================

function MapSection() {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                VISITANOS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h2"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            >
              Nuestra Ubicación
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                En el corazón de la región productora de kiwi de Argentina
              </p>
            </ScrollReveal>
          </div>

          {/* Map Card */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] md:aspect-[21/9]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12548.847891036647!2d-57.79832!3d-37.94286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8ef1e9a8f27%3A0x8a0e7e9e0d0b0c0d!2sSierra%20de%20los%20Padres%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación de iKiwi en Sierra de los Padres, Mar del Plata"
                  className="w-full h-full"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900 mb-2">
                    Sierra de los Padres
                  </h3>
                  <p className="text-gray-500 text-lg">Mar del Plata, Buenos Aires, Argentina</p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sierra+de+los+Padres,+Mar+del+Plata,+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver ubicación en Google Maps"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#3f7528] text-white rounded-full font-bold hover:bg-[#4a8a30] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Ver en Google Maps
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Dirección</h4>
                <p className="text-gray-500 text-sm">Sierra de los Padres, Mar del Plata</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.5}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Horarios</h4>
                <p className="text-gray-500 text-sm">Lun - Vie: 8:00 - 17:00</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.6}>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-lime-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Teléfono</h4>
                <p className="text-gray-500 text-sm">+54 223 XXX XXXX</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}


// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ContactoPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Inmersivo con animación 3D */}
      <ContactoHero />

      {/* Opciones de Contacto */}
      <ContactOptionsSection />

      {/* Transición */}
      <SectionTransition variant="wave" toColor="#3f7528" height={80} />

      {/* Contacto Directo */}
      <DirectContactSection />

      {/* Formulario de Contacto */}
      <ContactFormSection />

      {/* Transición */}
      <SectionTransition variant="wave" toColor="#faf8f5" height={80} />

      {/* Mapa */}
      <MapSection />

      {/* Transición */}
      <SectionTransition variant="wave" toColor="#3f7528" height={80} />

      {/* CTA Final */}
      <PageCTA
        icon="📸"
        title="Seguinos en Instagram"
        description="@kiwi_argentino - Novedades, recetas y más"
        primaryButton={{ text: "SEGUIR EN INSTAGRAM", href: "https://instagram.com/kiwi_argentino" }}
        variant="green"
      />
    </main>
  );
}
