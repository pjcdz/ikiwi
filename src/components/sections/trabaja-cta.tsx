import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TrabajaCTAProps {
  variant?: "default" | "compact";
  className?: string;
}

export function TrabajaCTA({ variant = "default", className = "" }: TrabajaCTAProps) {
  if (variant === "compact") {
    return (
      <div className={`bg-green-50 rounded-xl p-6 ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">👩‍🌾</span>
            <div>
              <h3 className="font-semibold text-foreground">¿Querés trabajar con nosotros?</h3>
              <p className="text-sm text-muted-foreground">
                Sumate al equipo de la mayor productora de kiwi de Argentina.
              </p>
            </div>
          </div>
          <Button asChild>
            <Link href="/trabaja-con-nosotros">Ver Oportunidades</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-5xl md:text-6xl mb-6 block">👩‍🌾</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Querés Ser Parte del Equipo?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Estamos buscando personas apasionadas para sumarse a iKiwi. 
              Ofrecemos oportunidades en campo, empaquetadora y administración.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8"
              >
                <Link href="/trabaja-con-nosotros">Ver Oportunidades</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white/10"
              >
                <Link href="/nosotros">Conocé Nuestra Historia</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span>🌱</span>
                <span>Campo</span>
              </div>
              <div className="flex items-center gap-2">
                <span>📦</span>
                <span>Empaquetadora</span>
              </div>
              <div className="flex items-center gap-2">
                <span>💼</span>
                <span>Administrativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
