import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: "verde",
    name: "Kiwi Verde Hayward",
    emoji: "🥝",
    description: "El clásico kiwi con pulpa verde brillante y sabor dulce-ácido equilibrado. Ideal para la digestión.",
    characteristics: ["Pulpa verde brillante", "Sabor equilibrado", "Rico en vitamina C", "Alto en fibra"],
    badge: "Más Popular",
    badgeVariant: "default" as const,
  },
  {
    id: "amarillo",
    name: "Kiwi Amarillo Gold",
    emoji: "🌟",
    description: "Variedad premium con pulpa dorada, menos ácido y más dulce. Nota tropical distintiva.",
    characteristics: ["Pulpa amarillo dorado", "Sabor tropical", "Piel más lisa", "Extra dulce"],
    badge: "Premium",
    badgeVariant: "secondary" as const,
  },
  {
    id: "organico",
    name: "Kiwi Orgánico",
    emoji: "🌱",
    description: "Cultivado sin agroquímicos con certificación orgánica. La opción más sustentable.",
    characteristics: ["Sin agroquímicos", "Certificado orgánico", "Eco-friendly", "Exportación a Europa"],
    badge: "Certificado",
    badgeVariant: "outline" as const,
  },
  {
    id: "baby",
    name: "Baby Kiwi (Kiwiberry)",
    emoji: "✨",
    description: "Del tamaño de una cereza, se come con cáscara. Perfecto para snacks saludables.",
    characteristics: ["Tamaño mini", "Se come con cáscara", "Sabor intenso", "Ideal para snacks"],
    badge: "Novedad",
    badgeVariant: "secondary" as const,
  },
];

export function ProductsSection() {
  return (
    <section id="productos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Nuestros Productos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Variedades de Kiwi Argentino
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde el clásico verde hasta las variedades premium amarillo y orgánico. 
            Todos cultivados en el sudeste bonaerense con los más altos estándares de calidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {product.emoji}
                </div>
                <Badge variant={product.badgeVariant} className="w-fit mx-auto mb-2">
                  {product.badge}
                </Badge>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center">
                  {product.description}
                </CardDescription>
                <ul className="space-y-2">
                  {product.characteristics.map((char, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-primary">✓</span>
                      {char}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
