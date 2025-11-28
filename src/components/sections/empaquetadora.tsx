import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EmpaquetadoraProps {
  className?: string;
}

const capabilities = [
  {
    icon: "❄️",
    title: "Cámaras de Frío",
    description: "Capacidad para 1.500 toneladas con temperatura controlada para conservar la frescura.",
    image: "/image2.png",
  },
  {
    icon: "📦",
    title: "Línea de Empaque",
    description: "Tecnología de clasificación óptica y empaque automatizado de última generación.",
    image: "/image7.png",
  },
  {
    icon: "✅",
    title: "Control de Calidad",
    description: "Laboratorio propio para análisis de grados Brix, firmeza y calidad.",
    image: "/image5.png",
  },
  {
    icon: "🚚",
    title: "Logística Integrada",
    description: "Despacho directo a supermercados, distribuidores y puerto para exportación.",
    image: "/image6.png",
  },
];

const stats = [
  { value: "1.500", label: "Toneladas de capacidad", unit: "tn" },
  { value: "40+", label: "Empleados en planta", unit: "" },
  { value: "24/7", label: "Operación en temporada", unit: "" },
];

export function Empaquetadora({ className = "" }: EmpaquetadoraProps) {
  return (
    <section className={`py-16 md:py-24 bg-[#f5f0e8] ${className}`} id="empaquetadora">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Nuestra Planta
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empaquetadora Propia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No solo producimos kiwis de la más alta calidad, también contamos con 
            nuestra propia planta de empaque y frío para garantizar la frescura 
            desde la cosecha hasta tu mesa.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
            <div className="col-span-1 rounded-xl overflow-hidden relative">
              <Image
                src="/image1.png"
                alt="Planta de Empaque iKiwi - Sierra de los Padres, Mar del Plata"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden relative">
              <Image
                src="/image8.png"
                alt="Producción y cosecha de kiwi"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-1 rounded-xl overflow-hidden relative">
              <Image
                src="/image3.png"
                alt="Línea de Empaque automatizada"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Producción Vertical Integrada
              </h3>
              <p className="text-muted-foreground mb-4">
                A diferencia de otros productores, en iKiwi controlamos todo el proceso: 
                desde la plantación y cuidado de nuestras 270 hectáreas de kiwi, hasta 
                el empaque, frío y distribución final.
              </p>
              <p className="text-muted-foreground">
                Esta integración vertical nos permite garantizar la trazabilidad completa, 
                mantener los más altos estándares de calidad y ofrecer precios competitivos 
                tanto al mercado local como a nuestros socios exportadores.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-amber-700">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">{cap.icon}</div>
                <h4 className="font-semibold mb-2">{cap.title}</h4>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-amber-100 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image src="/logo-globalgap.png" alt="GlobalGAP" width={48} height={48} className="w-12 h-12 object-contain" />
              <div>
                <h4 className="font-semibold text-foreground">
                  Certificación GlobalGAP
                </h4>
                <p className="text-sm text-muted-foreground">
                  Nuestra planta cumple con los estándares internacionales de buenas prácticas.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-green-100 text-green-800">Certificada</Badge>
              <Badge className="bg-blue-100 text-blue-800">Habilitada Exportación</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
