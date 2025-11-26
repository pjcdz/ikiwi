import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                🏅 Indicación Geográfica Certificada
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                El Sabor del{" "}
                <span className="text-primary">Atlántico Sur</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Descubre el kiwi argentino premium, cultivado con pasión en Sierra de los Padres. 
                Variedades Hayward y Jingold con certificación orgánica e Indicación Geográfica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/productos">Conoce Nuestros Kiwis</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/nosotros">Nuestra Historia</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t">
              <div>
                <p className="text-3xl font-bold text-primary">270+</p>
                <p className="text-sm text-muted-foreground">Hectáreas cultivadas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1M+</p>
                <p className="text-sm text-muted-foreground">Kilos por año</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2006</p>
                <p className="text-sm text-muted-foreground">Año de fundación</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main kiwi visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-2xl" />
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-[200px] leading-none animate-pulse">🥝</div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg px-4 py-2 animate-bounce">
                <span className="text-sm font-medium text-primary">100% Orgánico</span>
              </div>
              <div className="absolute bottom-20 left-0 bg-white shadow-lg rounded-lg px-4 py-2 animate-bounce delay-500">
                <span className="text-sm font-medium text-primary">Sierra de los Padres</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
