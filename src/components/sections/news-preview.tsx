import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const news = [
  {
    id: 1,
    title: "Histórico: Argentina exporta kiwi amarillo orgánico a Europa",
    source: "Infocampo",
    date: "Mayo 2019",
    excerpt: "Primera exportación de kiwi Gold orgánico argentino a mercados europeos, marcando un hito para la industria frutícola nacional.",
    category: "Exportación",
    featured: true,
  },
  {
    id: 2,
    title: "Sacaron la idea del diario y crearon la mayor productora de kiwi del país",
    source: "La Nación",
    date: "19 de marzo de 2019",
    excerpt: "La historia de iKiwi: cómo Luis French convirtió una nota periodística en el emprendimiento frutícola más grande de Argentina.",
    category: "Historia",
    featured: true,
  },
  {
    id: 3,
    title: "Argentina aspira a tener la misma calidad de kiwis que Nueva Zelanda",
    source: "Fresh Plaza",
    date: "Febrero 2017",
    excerpt: "Cobertura internacional sobre el crecimiento del kiwi argentino y las aspiraciones de calidad del sector.",
    category: "Internacional",
    featured: false,
  },
];

export function NewsPreview() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">En los Medios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Noticias y Prensa
          </h2>
          <p className="text-lg text-muted-foreground">
            El kiwi argentino ha sido noticia en los principales medios del país. 
            Conoce nuestros logros y el crecimiento del sector.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {news.map((item, index) => (
            <Card 
              key={item.id} 
              className={`group hover:shadow-lg transition-all duration-300 ${
                item.featured ? "lg:row-span-1" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={item.featured ? "default" : "secondary"}>
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{item.excerpt}</CardDescription>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Fuente:</span>
                  <span className="font-medium text-foreground">{item.source}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press logos */}
        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Mencionados en
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-serif font-bold text-foreground">La Nación</div>
            <div className="text-xl font-bold text-foreground">Infocampo</div>
            <div className="text-xl font-bold text-foreground">Fresh Plaza</div>
            <div className="text-xl font-bold text-foreground">INTA</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/noticias">Ver Todas las Noticias</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
