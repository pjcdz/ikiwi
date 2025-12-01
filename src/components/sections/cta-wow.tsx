import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Button } from "@/components/ui/button";

export function CTAWow() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image del campo - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-cta-gaucho-sunset.png')" }}
      />
      {/* Overlay con gradiente - más opaco en mobile para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a9c3a]/75 via-[#4a8a30]/65 to-[#3f7528]/75 md:from-[#5a9c3a]/60 md:via-[#4a8a30]/50 md:to-[#3f7528]/60" />
      
      {/* Patrón decorativo de kiwis */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -left-20 text-[400px] rotate-12">🥝</div>
        <div className="absolute -bottom-20 -right-20 text-[350px] -rotate-12">🥝</div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" 
            className="fill-[#faf8f5]"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation="fadeUp" className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#3f7528] leading-none mb-6">
            PROBÁ EL SABOR
            <br />
            <span className="text-white drop-shadow-lg">AUTÉNTICO</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-white mb-12 font-medium max-w-2xl mx-auto drop-shadow-md">
            Kiwis 100% argentinos cultivados en Sierra de los Padres. 
            Frescos, orgánicos y llenos de vitamina C.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="w-full sm:w-auto bg-[#3f7528] hover:bg-[#3f7528]/90 text-white text-xl px-12 py-7 rounded-full font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <Link href="/contacto#exportadores">CONTACTO COMERCIAL</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-3 border-[#3f7528] text-[#3f7528] hover:bg-[#3f7528] hover:text-white text-xl px-12 py-7 rounded-full font-bold"
            >
              <Link href="/nosotros">NUESTRA HISTORIA</Link>
            </Button>
          </div>

          {/* Badges de confianza */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-white/50">
              <Image src="/logo-ig.png" alt="IG Mar y Sierras" width={28} height={28} className="w-7 h-7 object-contain" />
              <span className="font-bold text-[#3f7528]">IG Mar y Sierras</span>
            </div>
            <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-white/50">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg" alt="Orgánico Certificado" width={28} height={28} className="w-7 h-7 object-contain" unoptimized />
              <span className="font-bold text-[#3f7528]">Orgánico Certificado</span>
            </div>
            <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-white/50">
              <Image src="/logo-ue-organica.png" alt="Exportación EU" width={28} height={28} className="w-7 h-7 object-contain" />
              <span className="font-bold text-[#3f7528]">Exportación EU</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 100L60 90C120 80 240 60 360 55C480 50 600 60 720 65C840 70 960 70 1080 65C1200 60 1320 50 1380 45L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" 
            className="fill-[#f5f0e8]"
          />
        </svg>
      </div>
    </section>
  );
}
