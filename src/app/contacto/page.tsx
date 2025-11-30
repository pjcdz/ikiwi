"use client";

import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { ColoredSection } from "@/components/sections/colored-section";
import { PageCTA } from "@/components/sections/page-cta";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { SectionTransition } from "@/components/animations/section-transition";
import { Badge } from "@/components/ui/badge";

const contactOptions = [
  { icon: "🛒", title: "Dónde Comprar", description: "Encontrá kiwis frescos cerca tuyo", href: "#", variant: "light" as const },
  { icon: "💼", title: "Empresas B2B", description: "Restaurantes, supermercados, distribuidores", href: "#", variant: "dark" as const },
  { icon: "💬", title: "Contactanos", description: "Consultas, sugerencias, prensa", href: "#form", variant: "light" as const },
];

const certifications = [
  { name: "IG Mar y Sierras", logo: "/logo-denominacion-origen.png" },
  { name: "GlobalGAP", logo: "/logo-globalgap.png" },
  { name: "UE Orgánica", logo: "/logo-ue-organica.png" },
];

export default function ContactoPage() {
  return (
    <main className="bg-[#faf8f5]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#3f7528] py-16 md:py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/bg-cta-sunset-fields.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3f7528]/95 via-[#3f7528]/90 to-[#2d5a1c]/95" />
        
        {/* Decorative blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <ScrollReveal animation="fadeUp">
              <span className="text-lime-300 text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                CONECTÁ CON NOSOTROS
              </span>
            </ScrollReveal>
            <AnimatedTitle
              as="h1"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              ¿LISTO PARA PROBAR EL MEJOR KIWI?
            </AnimatedTitle>
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <p className="text-xl text-white/80">
                Kiwis premium con certificación de origen Mar y Sierras
              </p>
            </ScrollReveal>
          </div>
        </div>

        <SectionTransition variant="wave" toColor="#faf8f5" height={100} className="absolute -bottom-1 left-0 right-0" />
      </section>

      {/* Opciones de Contacto */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <ScrollReveal key={option.title} animation="fadeUp" delay={index * 0.15}>
                <a
                  href={option.href}
                  className={`group block rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                    option.variant === "dark"
                      ? "bg-[#1a3311] text-white hover:shadow-2xl"
                      : "bg-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    option.variant === "dark" ? "bg-lime-400/20" : "bg-[#3f7528]/10"
                  }`}>
                    <span className="text-2xl">{option.icon}</span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${option.variant === "dark" ? "text-white" : "text-gray-900"}`}>
                    {option.title}
                  </h3>
                  <p className={`text-sm ${option.variant === "dark" ? "text-white/70" : "text-gray-600"}`}>
                    {option.description}
                  </p>
                  <div className={`flex items-center gap-2 mt-4 font-semibold text-sm group-hover:gap-3 transition-all ${
                    option.variant === "dark" ? "text-lime-300" : "text-[#3f7528]"
                  }`}>
                    <span>Ver más</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Botones de contacto directo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <a
                href="https://wa.me/542234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <a
                href="mailto:ventas@ikiwi.com.ar"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ventas@ikiwi.com.ar
              </a>
            </ScrollReveal>
          </div>

          {/* Certificaciones */}
          <ScrollReveal animation="fadeUp" delay={0.5}>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md">
                  <Image src={cert.logo} alt={cert.name} width={60} height={40} className="h-10 w-auto object-contain" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionTransition variant="wave" toColor="#f5f0e8" height={80} />

      {/* Formulario de Contacto */}
      <section id="form" className="py-16 md:py-24 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal animation="fadeUp">
                <span className="text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
                  ESCRIBINOS
                </span>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
              >
                Envianos un Mensaje
              </AnimatedTitle>
            </div>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <form className="bg-white rounded-3xl p-6 md:p-8 shadow-lg space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                    <input type="text" id="nombre" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] transition-all" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] transition-all" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">Empresa / Organización</label>
                  <input type="text" id="empresa" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] transition-all" placeholder="Opcional" />
                </div>
                <div>
                  <label htmlFor="motivo" className="block text-sm font-medium text-gray-700 mb-2">Motivo de Contacto *</label>
                  <select id="motivo" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] transition-all">
                    <option value="">Selecciona una opción</option>
                    <option value="compra">Compra directa</option>
                    <option value="distribucion">Distribución / Mayorista</option>
                    <option value="exportacion">Exportación</option>
                    <option value="prensa">Prensa / Medios</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                  <textarea id="mensaje" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3f7528] transition-all resize-none" placeholder="Contanos en qué podemos ayudarte..." />
                </div>
                <div className="text-center">
                  <button type="submit" className="px-8 py-4 bg-[#3f7528] text-white rounded-full font-semibold hover:bg-[#4a8a30] transition-all duration-300 hover:scale-105 shadow-lg">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 md:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900"
              >
                Nuestra Ubicación
              </AnimatedTitle>
            </div>
            <ScrollReveal animation="fadeUp">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12548.847891036647!2d-57.79832!3d-37.94286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8ef1e9a8f27%3A0x8a0e7e9e0d0b0c0d!2sSierra%20de%20los%20Padres%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Ubicación de iKiwi"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sierra de los Padres</h3>
                  <p className="text-gray-600 mb-4">Mar del Plata, Buenos Aires, Argentina</p>
                  <a
                    href="https://maps.google.com/?q=Sierra+de+los+Padres,+Mar+del+Plata,+Argentina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#3f7528] font-semibold hover:gap-3 transition-all"
                  >
                    Ver en Google Maps
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
