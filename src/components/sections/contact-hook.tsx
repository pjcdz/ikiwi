"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

export function ContactHook() {
  return (
    <section className="relative overflow-hidden">
      {/* Background con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-cta-gaucho-sunset.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f7528]/95 via-[#3f7528]/90 to-[#1a3311]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center pt-20 md:pt-28 pb-12 md:pb-16">
          <ScrollReveal animation="fadeUp">
            <span className="inline-block text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Conectá con Nosotros
            </span>
          </ScrollReveal>

          <AnimatedTitle
            as="h2"
            animation="words"
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            stagger={0.08}
          >
            ¿LISTO PARA PROBAR EL MEJOR KIWI?
          </AnimatedTitle>

          <ScrollReveal animation="fadeUp" delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Kiwis premium con certificación de origen, directo de Sierra de los Padres a tu mesa o negocio.
            </p>
          </ScrollReveal>
        </div>

        {/* Opciones de contacto - diseño horizontal más limpio */}
        <div className="max-w-6xl mx-auto pb-20">
          {/* Fila principal con 3 opciones */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Opción 1: Consumidores */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <Link href="/contacto#donde-comprar" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-10 h-10 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 mb-2">
                    Dónde Comprar
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Encontrá kiwis frescos en supermercados y verdulerías cerca tuyo
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#3f7528] font-semibold group-hover:gap-3 transition-all">
                    Ver puntos de venta
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Opción 2: Empresas B2B */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <Link href="/contacto#exportadores" className="group block h-full">
                <div className="bg-[#1a3311] rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <div className="w-20 h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-white/20">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
                      Empresas B2B
                    </h3>
                    <p className="text-white/70 mb-6">
                      Restaurantes, supermercados, exportadores e industria alimentaria
                    </p>
                    <span className="inline-flex items-center gap-2 text-lime-300 font-semibold group-hover:gap-3 transition-all">
                      Contacto comercial
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* Opción 3: Contacto general */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <Link href="/contacto" className="group block h-full">
                <div className="bg-white rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-100 to-lime-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-10 h-10 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-gray-900 mb-2">
                    Contactanos
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Consultas, sugerencias o cualquier cosa que necesites
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#3f7528] font-semibold group-hover:gap-3 transition-all">
                    Enviar mensaje
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* Fila de contacto directo */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <a 
                href="https://wa.me/5492235000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-[#25D366] rounded-2xl p-6 flex items-center gap-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-bold text-lg">WhatsApp</p>
                    <p className="text-white/80 text-sm">Respuesta en menos de 24hs</p>
                  </div>
                  <svg className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal animation="fadeUp" delay={0.5}>
              <a 
                href="mailto:ventas@ikiwi.com.ar"
                className="group block"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex items-center gap-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#3f7528]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-bold text-lg">ventas@ikiwi.com.ar</p>
                    <p className="text-white/60 text-sm">Consultas comerciales y exportación</p>
                  </div>
                  <svg className="w-6 h-6 text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          </div>

          {/* Certificaciones - fila inferior */}
          <ScrollReveal animation="fadeUp" delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-white/50 text-sm uppercase tracking-wider mb-6">Certificaciones que nos avalan</p>
              <div className="flex justify-center items-center gap-6 flex-wrap">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                  <Image src="/logo-ig.png" alt="IG Mar y Sierras" width={28} height={28} className="w-7 h-7 object-contain" />
                  <span className="text-white font-medium text-sm">IG Mar y Sierras</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                  <Image src="/logo-globalgap.png" alt="GlobalGAP" width={28} height={28} className="w-7 h-7 object-contain" />
                  <span className="text-white font-medium text-sm">GlobalGAP</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg" alt="USDA Organic" width={28} height={28} className="w-7 h-7 object-contain" unoptimized />
                  <span className="text-white font-medium text-sm">USDA Organic</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 border border-white/10">
                  <Image src="/logo-ue-organica.png" alt="UE Orgánica" width={28} height={28} className="w-7 h-7 object-contain" />
                  <span className="text-white font-medium text-sm">Export UE</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Transición */}
      <SectionTransition
        variant="wave"
        toColor="#faf8f5"
        height={100}
        className="absolute -bottom-1 left-0 right-0"
      />
    </section>
  );
}
