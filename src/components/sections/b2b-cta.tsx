import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface B2BCTAProps {
  variant?: "full" | "compact";
  className?: string;
}

const b2bServices = [
  {
    icon: "🍽️",
    title: "Restaurantes y Cafeterías",
    description: "Kiwi fresco para tu carta. Variedad verde, amarillo y orgánico.",
  },
  {
    icon: "🏪",
    title: "Supermercados y Distribuidores",
    description: "Abastecimiento constante con empaque personalizado.",
  },
  {
    icon: "🌍",
    title: "Exportadores",
    description: "Kiwi certificado IG Mar y Sierras para mercados internacionales.",
  },
  {
    icon: "🏭",
    title: "Industria Alimentaria",
    description: "Fruta para procesamiento, jugos y productos derivados.",
  },
];

export function B2BCTA({ variant = "full", className = "" }: B2BCTAProps) {
  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-r from-[#3f7528]/10 to-[#3f7528]/10 border border-[#3f7528]/30 rounded-xl p-6 ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🤝</span>
            <div>
              <h3 className="font-semibold text-foreground">¿Sos mayorista o exportador?</h3>
              <p className="text-sm text-muted-foreground">
                Contactanos para conocer nuestras opciones comerciales.
              </p>
            </div>
          </div>
          <Button asChild className="bg-[#3f7528] hover:bg-[#3f7528]/90">
            <Link href="/contacto#exportadores">Contacto Comercial</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-16 md:py-24 relative ${className}`}>
      {/* Background Image - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-b2b-warehouse.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/80 via-[#faf8f5]/65 to-[#faf8f5]/80 md:from-[#faf8f5]/70 md:via-[#faf8f5]/55 md:to-[#faf8f5]/70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#3f7528]/10 via-[#3f7528]/10 to-[#3f7528]/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-[#3f7528]/30 shadow-2xl">
          <div className="text-center mb-12">
            <Badge className="bg-[#3f7528]/20 text-[#3f7528] mb-4">
              Para Empresas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Soluciones B2B
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trabajamos con restaurantes, supermercados, distribuidores y exportadores. 
              Ofrecemos el mejor kiwi argentino con la flexibilidad que tu negocio necesita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {b2bServices.map((service, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-md border-[#3f7528]/20 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="bg-[#3f7528] hover:bg-[#3f7528]/90">
                <Link href="/contacto#exportadores">Solicitar Información Comercial</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#3f7528]/50 hover:bg-[#3f7528]/10">
                <a href="mailto:ventas@ikiwi.com.ar">ventas@ikiwi.com.ar</a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Image src="/logo-ig.png" alt="IG Mar y Sierras" width={24} height={24} className="w-6 h-6 object-contain" />
                IG Mar y Sierras
              </span>
              <span className="flex items-center gap-2">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg" alt="Certificación Orgánica" width={24} height={24} className="w-6 h-6 object-contain" unoptimized />
                Certificación Orgánica
              </span>
              <span className="flex items-center gap-2">
                <Image src="/logo-globalgap.png" alt="GlobalGAP" width={24} height={24} className="w-6 h-6 object-contain" />
                GlobalGAP
              </span>
              <span className="flex items-center gap-2">
                <Image src="/logo-ue-organica.png" alt="Habilitación UE" width={24} height={24} className="w-6 h-6 object-contain" />
                Habilitación UE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
