"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const varieties = [
  {
    id: "verde",
    name: "KIWI VERDE",
    variety: "Hayward",
    tagline: "REFRESCANTE Y ÁCIDO",
    description: "La variedad más cultivada en Argentina, reconocida mundialmente por su sabor equilibrado y versatilidad.",
    longDescription: "Variedad insignia de nuestra producción. Originario de Nueva Zelanda, encuentra en el sudeste bonaerense las condiciones ideales. Su pulpa verde brillante ofrece un sabor único con notas dulces y ácidas en perfecto equilibrio.",
    color: "from-green-500 to-emerald-600",
    pulpColor: "from-lime-300 to-green-400",
    skinColor: "from-amber-700 to-amber-900",
    badge: "Más Popular",
    characteristics: [
      { label: "Sabor", value: "Dulce-ácido equilibrado" },
      { label: "Textura", value: "Jugosa y suave" },
      { label: "Piel", value: "Marrón con vellosidad" },
      { label: "Temporada", value: "Mayo a Octubre" },
      { label: "Almacenamiento", value: "2-3 meses en frío" },
      { label: "Maduración", value: "Continúa fuera de la planta" },
    ],
    nutrition: [
      { nutrient: "Vitamina C", value: "92.7mg", percent: "103%" },
      { nutrient: "Fibra", value: "3g", percent: "12%" },
      { nutrient: "Potasio", value: "312mg", percent: "9%" },
      { nutrient: "Vitamina K", value: "40.3μg", percent: "45%" },
      { nutrient: "Vitamina E", value: "1.5mg", percent: "10%" },
    ],
    uses: ["Consumo fresco", "Smoothies y jugos", "Postres", "Ensaladas", "Salsas para carnes"],
  },
  {
    id: "gold",
    name: "KIWI GOLD",
    variety: "Jingold",
    tagline: "DULCE Y TROPICAL",
    description: "Variedad premium con pulpa dorada, sabor más dulce y tropical. Menos ácido que el verde.",
    longDescription: "La evolución premium del kiwi. Desarrollado para quienes buscan una experiencia más dulce y tropical. Su piel lisa y pulpa dorada intensa lo distinguen. Trabajamos con la Universidad de Bolonia para nuevas variedades.",
    color: "from-yellow-500 to-amber-500",
    pulpColor: "from-yellow-300 to-amber-400",
    skinColor: "from-amber-600 to-amber-800",
    badge: "Premium",
    characteristics: [
      { label: "Sabor", value: "Dulce tropical" },
      { label: "Textura", value: "Suave y cremosa" },
      { label: "Piel", value: "Más lisa, menos peluda" },
      { label: "Temporada", value: "Mayo a Septiembre" },
      { label: "Acidez", value: "Menor que el verde" },
      { label: "Brix", value: "16-18° (más dulce)" },
    ],
    nutrition: [
      { nutrient: "Vitamina C", value: "161mg", percent: "179%" },
      { nutrient: "Fibra", value: "2g", percent: "8%" },
      { nutrient: "Potasio", value: "315mg", percent: "9%" },
      { nutrient: "Folato", value: "31μg", percent: "8%" },
      { nutrient: "Vitamina E", value: "1.4mg", percent: "9%" },
    ],
    uses: ["Consumo fresco", "Postres gourmet", "Macedonias", "Decoración", "Exportación"],
  },
  {
    id: "rojo",
    name: "KIWI ROJO",
    variety: "Red Passion",
    tagline: "EXÓTICO Y ÚNICO",
    description: "Variedad exótica con centro rojo intenso. Sabor más dulce y aromático, con notas a frutos rojos.",
    longDescription: "La joya más reciente de nuestra producción. Su pulpa combina tonos verdes con un corazón rojo intenso, creando un contraste visual espectacular. Sabor más dulce con notas a frutos rojos. Desarrollado con la Universidad de Bolonia.",
    color: "from-rose-500 to-red-600",
    pulpColor: "from-lime-200 to-green-300",
    skinColor: "from-amber-600 to-amber-800",
    centerColor: "red",
    badge: "Exclusivo",
    characteristics: [
      { label: "Sabor", value: "Dulce con notas a frutos rojos" },
      { label: "Textura", value: "Suave y jugosa" },
      { label: "Piel", value: "Lisa, similar al amarillo" },
      { label: "Color interior", value: "Verde con centro rojo" },
      { label: "Disponibilidad", value: "Edición limitada" },
      { label: "Desarrollo", value: "Con U. de Bolonia" },
    ],
    nutrition: [
      { nutrient: "Vitamina C", value: "Alto", percent: "—" },
      { nutrient: "Antocianinas", value: "Presente", percent: "—" },
      { nutrient: "Fibra", value: "2.5g", percent: "10%" },
      { nutrient: "Antioxidantes", value: "Muy alto", percent: "—" },
    ],
    uses: ["Consumo fresco", "Presentaciones gourmet", "Decoración premium", "Regalo exclusivo"],
  },
  {
    id: "organico",
    name: "KIWI ORGÁNICO",
    variety: "Certificado",
    tagline: "PURO Y NATURAL",
    description: "Producido sin agroquímicos con certificación orgánica. La opción más sustentable y natural.",
    longDescription: "Representa nuestro compromiso con la sustentabilidad. Cultivado sin agroquímicos sintéticos ni fertilizantes artificiales. En 2023 logramos nuestra primera exportación a España.",
    color: "from-emerald-600 to-green-700",
    pulpColor: "from-green-300 to-emerald-400",
    skinColor: "from-amber-700 to-amber-900",
    badge: "Orgánico",
    characteristics: [
      { label: "Certificación", value: "Orgánico Argentina / USDA" },
      { label: "Cultivo", value: "Sin agroquímicos" },
      { label: "Fertilización", value: "Natural y compostaje" },
      { label: "Control plagas", value: "Métodos biológicos" },
      { label: "Trazabilidad", value: "Completa" },
      { label: "Mercados", value: "Argentina, Europa, USA" },
    ],
    nutrition: [
      { nutrient: "Vitamina C", value: "92.7mg", percent: "103%" },
      { nutrient: "Fibra", value: "3g", percent: "12%" },
      { nutrient: "Antioxidantes", value: "Alto", percent: "—" },
      { nutrient: "Sin residuos", value: "Garantizado", percent: "100%" },
    ],
    uses: ["Dietas orgánicas", "Alimentación infantil", "Mercados premium", "Exportación"],
  },
  {
    id: "baby",
    name: "BABY KIWI",
    variety: "Kiwiberry",
    tagline: "MINI Y PRÁCTICO",
    description: "Miniatura del kiwi tradicional, del tamaño de una uva grande. Se come entero con cáscara.",
    longDescription: "Una delicia en miniatura. Del tamaño de una uva grande, su piel lisa y comestible permite disfrutarlo sin pelarlo. Sabor intenso y concentrado con notas más dulces que el kiwi tradicional.",
    color: "from-teal-500 to-emerald-600",
    pulpColor: "from-lime-300 to-green-400",
    skinColor: "from-green-600 to-green-800",
    badge: "Mini",
    characteristics: [
      { label: "Tamaño", value: "Como una uva grande" },
      { label: "Piel", value: "Lisa y comestible" },
      { label: "Sabor", value: "Intenso y dulce" },
      { label: "Consumo", value: "Entero, sin pelar" },
      { label: "Ideal para", value: "Snacks y decoración" },
      { label: "Disponibilidad", value: "Limitada / Estacional" },
    ],
    nutrition: [
      { nutrient: "Vitamina C", value: "Alto", percent: "—" },
      { nutrient: "Fibra", value: "Alto", percent: "—" },
      { nutrient: "Antioxidantes", value: "Muy alto", percent: "—" },
    ],
    uses: ["Snack saludable", "Decoración de postres", "Loncheras", "Ensaladas", "Cócteles"],
  },
];

// Componente visual del Kiwi
function KiwiVisual({ pulpColor, skinColor, centerColor }: { pulpColor: string; skinColor: string; centerColor?: string }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Kiwi entero */}
      <div className={`relative w-16 h-24 bg-linear-to-br ${skinColor} rounded-[50%] shadow-lg`}>
        <div className="absolute inset-0 opacity-20">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-amber-950 rounded-full" 
              style={{ top: `${20 + i * 12}%`, left: `${25 + (i % 3) * 20}%` }} />
          ))}
        </div>
      </div>

      {/* Kiwi cortado */}
      <div className={`absolute -right-6 w-14 h-14 bg-linear-to-br ${pulpColor} rounded-full shadow-xl flex items-center justify-center overflow-hidden`}>
        {centerColor === "red" ? (
          <>
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute bg-red-500" style={{
                width: '2px', height: '35%', top: '50%', left: '50%',
                transform: `rotate(${i * 22.5}deg)`, transformOrigin: 'top center'
              }} />
            ))}
            <div className="absolute inset-[28%] rounded-full bg-red-600" />
            <div className="absolute inset-[38%] rounded-full bg-yellow-50" />
          </>
        ) : (
          <>
            <div className="w-2.5 h-2.5 rounded-full bg-white/80" />
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute w-0.5 h-1.5 bg-gray-800/50 rounded-full" style={{
                top: '50%', left: '50%',
                transform: `rotate(${i * 45}deg) translateY(-120%)`, transformOrigin: 'center'
              }} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default function ProductosPage() {
  return (
    <div className="py-16 bg-[#faf8f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-amber-100 text-amber-800 mb-4">NUESTROS KIWIS</Badge>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            VARIEDADES <span className="text-amber-700">EXTRAORDINARIAS</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada variedad es única. Todas son deliciosas.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {varieties.map((variety) => (
            <Card key={variety.id} className="overflow-hidden hover:shadow-xl transition-shadow gap-0 p-0 flex flex-col w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)] max-w-md">
              {/* Header con gradiente y kiwi */}
              <div className={`relative h-36 bg-linear-to-br ${variety.color} flex items-center justify-center shrink-0`}>
                <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 font-semibold text-xs">
                  {variety.badge}
                </Badge>
                <KiwiVisual 
                  pulpColor={variety.pulpColor} 
                  skinColor={variety.skinColor}
                  centerColor={variety.centerColor}
                />
              </div>

              {/* Contenido */}
              <CardContent className="p-4 flex flex-col flex-1">
                {/* Título */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-black text-gray-900">{variety.name}</h3>
                    <span className="text-xs text-gray-500">({variety.variety})</span>
                  </div>
                  <p className="text-xs font-bold text-amber-700">{variety.tagline}</p>
                </div>

                {/* Descripción */}
                <p className="text-sm text-gray-600 mb-3 min-h-[4.5rem]">{variety.longDescription}</p>

                {/* Características - altura fija */}
                <div className="mb-3 min-h-[9rem]">
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">Características</h4>
                  <div className="space-y-1">
                    {variety.characteristics.map((char) => (
                      <div key={char.label} className="flex justify-between text-xs">
                        <span className="text-gray-500">{char.label}</span>
                        <span className="font-medium text-gray-800 text-right">{char.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nutrición - altura fija */}
                <div className="mb-3 min-h-[4.5rem]">
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">Nutrición (por 100g)</h4>
                  <div className="flex flex-wrap gap-2">
                    {variety.nutrition.map((nut) => (
                      <div key={nut.nutrient} className="bg-gray-100 rounded px-2 py-1 text-xs">
                        <span className="font-semibold">{nut.value}</span>
                        <span className="text-gray-500 ml-1">{nut.nutrient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Usos */}
                <div className="mt-auto">
                  <h4 className="text-xs font-bold text-gray-900 uppercase mb-2">Usos</h4>
                  <div className="flex flex-wrap gap-1">
                    {variety.uses.map((use) => (
                      <Badge key={use} variant="outline" className="text-xs font-normal">
                        {use}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Calendario */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Temporada de Cosecha</h2>
          <Card className="p-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                {["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium
                    ${i >= 4 && i <= 9 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {m}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                🥝 Kiwi fresco de <strong>mayo a octubre</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
