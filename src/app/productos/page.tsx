import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Nuestros Kiwis | Kiwi Argentino",
  description: "Descubre las variedades de kiwi argentino: verde Hayward, amarillo Gold, orgánico y baby kiwi. Cultivados en Mar del Plata con calidad premium.",
};

const varieties = [
  {
    id: "verde",
    name: "Kiwi Verde Hayward",
    emoji: "🥝",
    description: "La variedad más cultivada en Argentina, reconocida mundialmente por su sabor equilibrado y versatilidad.",
    longDescription: `El kiwi Hayward es la variedad insignia de nuestra producción. Originario de Nueva Zelanda, 
    encuentra en el sudeste bonaerense las condiciones ideales para desarrollar su máximo potencial de sabor y dulzura.
    
    Su pulpa verde brillante, salpicada de pequeñas semillas negras comestibles, ofrece un sabor único que combina 
    notas dulces y ácidas en perfecto equilibrio. Es ideal tanto para consumo fresco como para recetas.`,
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
    id: "amarillo",
    name: "Kiwi Amarillo Gold",
    emoji: "🌟",
    description: "Variedad premium con pulpa dorada, sabor más dulce y tropical. Menos ácido que el verde.",
    longDescription: `El kiwi amarillo representa la evolución premium de esta fruta. Desarrollado para aquellos 
    que buscan una experiencia más dulce y tropical, se ha convertido en la elección favorita de los paladares exigentes.
    
    Su piel más lisa y su pulpa de color amarillo dorado intenso lo distinguen visualmente. El sabor es notablemente 
    más dulce, con notas que recuerdan a frutas tropicales como el mango y la piña. Trabajamos con la Universidad de 
    Bolonia para desarrollar nuevas variedades adaptadas a nuestro terroir.`,
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
    id: "organico",
    name: "Kiwi Orgánico",
    emoji: "🌱",
    description: "Producido sin agroquímicos con certificación orgánica. La opción más sustentable y natural.",
    longDescription: `Nuestro kiwi orgánico representa el compromiso de iKiwi con la sustentabilidad y el cuidado 
    del medio ambiente. Cultivado siguiendo estrictos protocolos que excluyen el uso de agroquímicos sintéticos, 
    fertilizantes artificiales y organismos genéticamente modificados.
    
    La certificación orgánica nos ha abierto las puertas al exigente mercado europeo y estadounidense. En 2023, 
    logramos nuestra primera exportación de kiwi orgánico a España, un hito que demuestra la calidad de nuestra 
    producción sustentable.`,
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
    name: "Baby Kiwi (Kiwiberry)",
    emoji: "✨",
    description: "Miniatura del kiwi tradicional, del tamaño de una uva grande. Se come entero con cáscara.",
    longDescription: `El baby kiwi o kiwiberry es una delicia en miniatura. Del tamaño de una uva grande o cereza, 
    este pequeño fruto se distingue por su piel lisa y comestible, lo que permite disfrutarlo sin necesidad de pelarlo.
    
    Su sabor es intenso y concentrado, combinando la esencia del kiwi tradicional con notas más dulces. 
    Es perfecto como snack saludable, para decorar postres o añadir a ensaladas de frutas.`,
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

export default function ProductosPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Nuestros Productos</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Variedades de Kiwi Argentino
          </h1>
          <p className="text-xl text-muted-foreground">
            Cultivamos las mejores variedades de kiwi en el sudeste bonaerense, 
            aprovechando las condiciones únicas de nuestro terroir atlántico.
          </p>
        </div>

        {/* Quality badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span>🏅</span>
            <span className="text-sm font-medium">IG Mar y Sierras</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span>🌱</span>
            <span className="text-sm font-medium">Certificación Orgánica</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span>✅</span>
            <span className="text-sm font-medium">GlobalGAP</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span>🧪</span>
            <span className="text-sm font-medium">Control de Calidad</span>
          </div>
        </div>

        {/* Varieties Tabs */}
        <Tabs defaultValue="verde" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2">
            {varieties.map((variety) => (
              <TabsTrigger 
                key={variety.id} 
                value={variety.id}
                className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="text-xl">{variety.emoji}</span>
                <span className="hidden sm:inline">{variety.name.split(" ")[1]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {varieties.map((variety) => (
            <TabsContent key={variety.id} value={variety.id} className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{variety.emoji}</span>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl">{variety.name}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {variety.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Description */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Acerca de esta variedad</h3>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {variety.longDescription}
                    </p>
                  </div>

                  <Separator />

                  {/* Characteristics and Nutrition */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">Características</h3>
                      <div className="space-y-3">
                        {variety.characteristics.map((char, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">{char.label}</span>
                            <span className="font-medium">{char.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">Información Nutricional</h3>
                      <p className="text-sm text-muted-foreground mb-4">Por cada 100g de fruta</p>
                      <div className="space-y-3">
                        {variety.nutrition.map((nut, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-border/50">
                            <span className="text-muted-foreground">{nut.nutrient}</span>
                            <div className="text-right">
                              <span className="font-medium">{nut.value}</span>
                              {nut.percent !== "—" && (
                                <span className="text-xs text-muted-foreground ml-2">
                                  ({nut.percent} VD)
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Uses */}
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Usos Recomendados</h3>
                    <div className="flex flex-wrap gap-2">
                      {variety.uses.map((use, i) => (
                        <Badge key={i} variant="secondary" className="px-4 py-2">
                          {use}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Harvest Calendar */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Calendario de Cosecha</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-12 gap-1 text-center text-sm">
                {["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"].map((month, i) => (
                  <div key={month} className="font-medium text-muted-foreground py-2">
                    {month}
                  </div>
                ))}
                {[false, false, false, false, true, true, true, true, true, true, false, false].map((available, i) => (
                  <div 
                    key={i} 
                    className={`py-4 rounded ${
                      available 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {available ? "🥝" : "—"}
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-4">
                La temporada de kiwi argentino va de <strong>mayo a octubre</strong>, 
                ofreciendo fruta fresca cuando el hemisferio norte está en contraestación.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
