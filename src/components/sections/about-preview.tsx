import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutPreview() {
  return (
    <section className="py-20 relative">
      {/* Background Image - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-about-sunset.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e8]/80 via-[#f5f0e8]/65 to-[#f5f0e8]/75 md:from-[#f5f0e8]/70 md:via-[#f5f0e8]/55 md:to-[#f5f0e8]/65" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Imagen del campo */}
              <Image
                src="/about-campo-panoramico.png"
                alt="Plantación de kiwi en Sierra de los Padres, Mar del Plata"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 flex gap-1.5 md:gap-4">
                <div className="bg-white/95 backdrop-blur rounded-lg px-1.5 md:px-4 py-1.5 md:py-3 flex-1 text-center shadow-sm">
                  <p className="text-base md:text-2xl font-bold text-primary">90+</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground leading-tight">Empleados</p>
                </div>
                <div className="bg-white/95 backdrop-blur rounded-lg px-1.5 md:px-4 py-1.5 md:py-3 flex-1 text-center shadow-sm">
                  <p className="text-base md:text-2xl font-bold text-primary">270</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground leading-tight">Hectáreas</p>
                </div>
                <div className="bg-white/95 backdrop-blur rounded-lg px-1.5 md:px-4 py-1.5 md:py-3 flex-1 text-center shadow-sm">
                  <p className="text-base md:text-2xl font-bold text-primary">4</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground leading-tight">Países</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-amber-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
              <span className="font-bold text-sm md:text-base">Desde 2006</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2 bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-white/50">
            <Badge variant="outline">Nuestra Historia</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              La Mayor Productora de Kiwi de Argentina
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                iKiwi nació en 2006 cuando Luis Franch decidió invertir en el cultivo de kiwis 
                después de que su esposa leyó una nota periodística. Lo que empezó con pocas 
                hectáreas se convirtió en la mayor productora de kiwi de Argentina.
              </p>
              <p>
                Con sede en Sierra de los Padres, Mar del Plata —la región ideal para el cultivo— 
                y nuestra marca Moño Azul, producimos variedades Hayward y Jingold, incluyendo 
                kiwis orgánicos certificados que exportamos a Europa.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo-ig.png"
                    alt="IG Mar y Sierras"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">IG Certificada</p>
                  <p className="text-sm text-muted-foreground">Mar y Sierras</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg"
                    alt="USDA Organic"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Producción Orgánica</p>
                  <p className="text-sm text-muted-foreground">Certificación USDA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo-globalgap.png"
                    alt="GlobalGAP"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">I+D con Bologna</p>
                  <p className="text-sm text-muted-foreground">Nuevas variedades</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logo-ue-organica.png"
                    alt="Orgánico UE"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">Exportación Global</p>
                  <p className="text-sm text-muted-foreground">Europa y América</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/nosotros">Conoce Nuestra Historia</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
