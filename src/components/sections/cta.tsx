import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-6xl">🥝</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            ¿Listo para probar el mejor kiwi de Argentina?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Encuentra nuestros kiwis premium en supermercados, verdulerías y dietéticas 
            de todo el país. Calidad certificada con Indicación Geográfica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-8"
            >
              <Link href="/contacto">Dónde Comprar</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contacto#exportadores">Para Exportadores</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 opacity-80">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏅</span>
              <span className="text-sm">IG Mar y Sierras</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <span className="text-sm">Orgánico Certificado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-sm">GlobalGAP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇦🇷</span>
              <span className="text-sm">100% Argentino</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
