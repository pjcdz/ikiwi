import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AboutPreview() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="text-muted-foreground">Sierra de los Padres, Mar del Plata</p>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-3 flex-1 text-center">
                  <p className="text-2xl font-bold text-primary">90+</p>
                  <p className="text-xs text-muted-foreground">Empleados</p>
                </div>
                <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-3 flex-1 text-center">
                  <p className="text-2xl font-bold text-primary">270</p>
                  <p className="text-xs text-muted-foreground">Hectáreas</p>
                </div>
                <div className="bg-white/90 backdrop-blur rounded-lg px-4 py-3 flex-1 text-center">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground">Países</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
              <span className="font-bold">Desde 2006</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <Badge variant="outline">Nuestra Historia</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              La Mayor Productora de Kiwi de Argentina
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                iKiwi nació en 2006 cuando Luis French decidió invertir en el cultivo de kiwis 
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
                <span className="text-2xl">🏅</span>
                <div>
                  <p className="font-medium text-foreground">IG Certificada</p>
                  <p className="text-sm text-muted-foreground">Mar y Sierras</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <div>
                  <p className="font-medium text-foreground">Producción Orgánica</p>
                  <p className="text-sm text-muted-foreground">Certificación USDA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-medium text-foreground">I+D con Bologna</p>
                  <p className="text-sm text-muted-foreground">Nuevas variedades</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <div>
                  <p className="font-medium text-foreground">Exportación Global</p>
                  <p className="text-sm text-muted-foreground">Europa y América</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/nosotros">Conoce Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
