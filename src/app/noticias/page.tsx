import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Noticias | Kiwi Argentino - iKiwi",
  description: "Las últimas novedades sobre iKiwi, la industria del kiwi en Argentina y nuestros logros en producción y exportación.",
};

const featuredNews = {
  title: "iKiwi Realiza Primera Exportación con IG a Europa",
  date: "Mayo 2023",
  category: "Exportación",
  description: "Hito histórico para la industria del kiwi argentino: 900 toneladas de kiwi orgánico certificado con Indicación Geográfica 'Mar y Sierras' fueron exportadas a España, marcando la primera operación de este tipo con la Unión Europea.",
  content: `La operación, coordinada a través de la cooperativa Ecco Kiwi, representa un momento 
  fundamental para el sector. El kiwi argentino compite ahora en los mercados más exigentes del 
  mundo, diferenciándose por su calidad y certificación de origen.
  
  "Este es el resultado de años de trabajo en calidad, trazabilidad y gestión comercial conjunta", 
  señaló el directorio de la cooperativa. La IG 'Kiwi Mar y Sierras' garantiza que la fruta proviene 
  del sudeste bonaerense, una región con condiciones climáticas únicas para el cultivo.
  
  Argentina pasó del puesto 43° al 24° en el ranking mundial de exportadores de kiwi, y se proyecta 
  que esta tendencia continúe con la apertura de nuevos mercados en Medio Oriente y Norteamérica.`,
  image: "🚢",
};

const news = [
  {
    id: 1,
    title: "El Kiwi Argentino Conquista Nuevos Mercados",
    date: "Enero 2025",
    category: "Exportación",
    excerpt: "Argentina explora oportunidades en Medio Oriente y Norteamérica para expandir la presencia del kiwi nacional en el mercado internacional.",
    image: "🌍",
  },
  {
    id: 2,
    title: "Indicación Geográfica 'Kiwi Mar y Sierras'",
    date: "Octubre 2022",
    category: "Certificación",
    excerpt: "El kiwi del sudeste bonaerense obtiene reconocimiento oficial como producto con características únicas vinculadas a su origen geográfico.",
    image: "🏅",
  },
  {
    id: 3,
    title: "La Nación: La Historia de iKiwi",
    date: "Marzo 2019",
    category: "Prensa",
    excerpt: "Un extenso reportaje del diario La Nación cuenta la historia de cómo un abogado transformó una idea en la mayor productora de kiwi del país.",
    image: "📰",
  },
  {
    id: 4,
    title: "Cooperativa Ecco Kiwi: Productores Unidos",
    date: "Julio 2021",
    category: "Industria",
    excerpt: "Productores del sudeste bonaerense se unen en la cooperativa Ecco Kiwi para fortalecer la comercialización y acceder a mercados internacionales.",
    image: "🤝",
  },
  {
    id: 5,
    title: "Nuevas Variedades: Kiwi Amarillo en Argentina",
    date: "Abril 2023",
    category: "Producción",
    excerpt: "iKiwi incorpora las variedades Jintao y Dorí a su producción, ofreciendo kiwis amarillos de pulpa dulce y tropical.",
    image: "🥝",
  },
  {
    id: 6,
    title: "Alianza con Universidad de Bologna",
    date: "Septiembre 2015",
    category: "Investigación",
    excerpt: "Colaboración internacional para el desarrollo de nuevas variedades adaptadas al clima argentino, incluyendo kiwis rojos experimentales.",
    image: "🔬",
  },
];

const pressLogos = [
  { name: "La Nación", icon: "📰" },
  { name: "Clarín", icon: "📰" },
  { name: "Infobae", icon: "💻" },
  { name: "Campo", icon: "🌾" },
];

export default function NoticiasPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Noticias</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Novedades de iKiwi
          </h1>
          <p className="text-xl text-muted-foreground">
            Mantente informado sobre nuestros logros, la industria del kiwi argentino 
            y las últimas novedades de la producción.
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{featuredNews.category}</Badge>
                  <span className="text-sm text-muted-foreground">{featuredNews.date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredNews.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredNews.description}</p>
                <div className="prose prose-sm text-muted-foreground">
                  {featuredNews.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0">{paragraph.trim()}</p>
                  ))}
                </div>
              </div>
              <div className="bg-primary/5 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-9xl mb-4">{featuredNews.image}</div>
                  <p className="text-lg font-semibold text-foreground">900 Toneladas</p>
                  <p className="text-muted-foreground">Kiwi Orgánico Exportado</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Más Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="h-full flex flex-col">
                <CardContent className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{item.image}</span>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-1">{item.category}</Badge>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="w-full" size="sm">
                    Leer más →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Industry Stats */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">El Kiwi Argentino en Números</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            La industria del kiwi en Argentina ha experimentado un crecimiento sostenido, 
            posicionando al país como un actor relevante en el mercado internacional.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">24°</p>
                <p className="text-sm text-muted-foreground">Ranking Mundial Exportadores</p>
                <p className="text-xs text-muted-foreground mt-1">Subió desde el puesto 43°</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">1.200</p>
                <p className="text-sm text-muted-foreground">Hectáreas en Argentina</p>
                <p className="text-xs text-muted-foreground mt-1">Concentradas en Buenos Aires</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">70%</p>
                <p className="text-sm text-muted-foreground">Producción Sudeste Bonaerense</p>
                <p className="text-xs text-muted-foreground mt-1">Mar del Plata y Sierra de los Padres</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">4</p>
                <p className="text-sm text-muted-foreground">Países de Exportación</p>
                <p className="text-xs text-muted-foreground mt-1">España, Italia, Alemania, UK</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Press Section */}
        <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">En los Medios</h2>
            <p className="text-muted-foreground">
              La historia de iKiwi ha sido destacada en los principales medios del país.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {pressLogos.map((press, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-2xl">{press.icon}</span>
                <span className="font-medium">{press.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-center mb-4">
                  &ldquo;Lo que empezó como una inversión de un abogado que leyó una nota periodística, 
                  hoy es la mayor productora de kiwi de Argentina, con más de 270 hectáreas 
                  y exportaciones a cuatro continentes.&rdquo;
                </blockquote>
                <p className="text-center text-sm text-muted-foreground">
                  — Diario La Nación, 2019
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Mantente Informado</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Seguinos en Instagram para ver las últimas novedades, recetas y contenido 
            sobre el mundo del kiwi argentino.
          </p>
          <Button asChild>
            <a href="https://instagram.com/kiwi.argentino" target="_blank" rel="noopener noreferrer">
              📱 Seguir en Instagram
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
}
