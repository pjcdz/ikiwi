import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Noticias | Kiwi Argentino - iKiwi",
  description: "Las últimas novedades sobre iKiwi, la industria del kiwi en Argentina y nuestros logros en producción y exportación.",
};

const featuredNews = {
  title: "\"Aspiramos a tener la misma calidad de kiwis que Nueva Zelanda\"",
  date: "17 de Febrero, 2017",
  sortDate: "2017-02-17",
  category: "Entrevista",
  description: "Luis Franch, representante de Grupo iKiwi, habla sobre el potencial del kiwi argentino y las aspiraciones de calidad premium para competir a nivel internacional.",
  content: `La producción de kiwis en Argentina va en crecimiento continuo, aunque aún no logra los volúmenes necesarios para ser considerado como un proveedor constante de esta fruta, su calidad suele ser incuestionable. "Las condiciones climáticas y el suelo son propicios para este cultivo. En cuestiones geográficas tenemos una posición similar a la de Nueva Zelanda, pero nuestros suelos hacen la diferencia. La riqueza y el alto contenido orgánico es la clave de la calidad del kiwi", afirma Luis Franch.

La zona a la que se refiere Franch es Mar del Plata, sudeste de la provincia de Buenos Aires, la cual originalmente es una zona hortícola, pero hace 10 años se iniciaron las primeras siembras de este producto. "Los resultados fueron sorprendentes, la calidad y sabor son reconocidos y valorados por los consumidores", comentó el representante.

"Modestamente, nuestra aspiración es ser reconocidos por tener un producto de calidad Premium. Siendo rigurosos en los niveles similares de control de calidad, como por ejemplo lo es Nueva Zelanda", confirmó Franch.

"En pocos años aspiramos a tener unos 10 millones de kilos como empresa, que si bien representa el 2% de la producción del hemisferio sur, es un volumen con el cual podemos empezar a figurar en el mapa de las exportaciones de kiwi. La producción orgánica también es un objetivo que estamos llevando a cabo, pues el mundo reconoce este valor agregado."`,
  image: "/luis-franch-ceo.png",
  imageAlt: "Luis Franch, Representante de iKiwi, en los campos de kiwi de Mar del Plata",
  link: "https://www.freshplaza.es/article/3104421/argentina-aspiramos-a-tener-la-misma-calidad-de-kiwis-que-nueva-zelanda/",
};

// Noticias ordenadas cronológicamente (más reciente primero)
// Enlaces verificados del documento noticias.md
const news = [
  {
    id: 1,
    title: "CoopeKiwi Expande el Cultivo de Kiwis Orgánicos",
    date: "2024",
    sortDate: "2024-01",
    category: "Industria",
    excerpt: "La cooperativa expande sus operaciones y abre canales comerciales con Uruguay, Brasil e Italia, diversificando el riesgo comercial y consolidando su posición exportadora.",
    image: "/noticia-coopekiwi.png",
    imageAlt: "Expansión de CoopeKiwi en cultivos orgánicos",
    link: "https://mundoagro.io/cl/coopekiwi-expande-el-cultivo-de-kiwis-organicos-en-argentina/",
  },
  {
    id: 2,
    title: "Primera Exportación de Kiwi con IG a España",
    date: "16 de Junio, 2023",
    sortDate: "2023-06-16",
    category: "Exportación",
    excerpt: "Hito histórico: Agricultura acompañó la primera exportación de kiwi orgánico con Indicación Geográfica a España. Inversión estatal de $50 millones y capacidad de 900 toneladas.",
    image: "/noticia-ig-a-espana.png",
    imageAlt: "Primera exportación de kiwi con Indicación Geográfica a España",
    link: "https://www.argentina.gob.ar/noticias/agricultura-acompano-la-primera-exportacion-de-kiwi-con-indicacion-geografica-espana",
  },
  {
    id: 3,
    title: "Argentina Exporta Kiwi de Mar y Sierras a España",
    date: "Junio 2023",
    sortDate: "2023-06-15",
    category: "Exportación",
    excerpt: "La Argentina exporta Kiwi de Mar y Sierras a España, marcando un hito en la historia del sector frutícola nacional con el sello de Indicación Geográfica.",
    image: "/noticia-kiwi-a-espana.png",
    imageAlt: "Exportación de kiwi Mar y Sierras a España",
    link: "https://www.argentina.gob.ar/noticias/la-argentina-exporta-kiwi-de-mar-y-sierras-espana",
  },
  {
    id: 4,
    title: "Uno de los Mejores Kiwis del Mundo es Argentino",
    date: "2023",
    sortDate: "2023-05",
    category: "Reconocimiento",
    excerpt: "Uno de los mejores kiwis del mundo es argentino y lo produce una cooperativa. La calidad diferenciada del producto Mar y Sierras es reconocida internacionalmente.",
    image: "/noticia-uno-de-los-mejores.png",
    imageAlt: "Reconocimiento del kiwi argentino como uno de los mejores del mundo",
    link: "https://ansol.com.ar/cooperativa-kiwis-argentina/principales/",
  },
  {
    id: 5,
    title: "Indicación Geográfica: Resolución 33/2022",
    date: "8 de Junio, 2022",
    sortDate: "2022-06-08",
    category: "Certificación",
    excerpt: "Publicada en el Boletín Oficial, la IG 'Kiwi Mar y Sierras del Sudeste de Buenos Aires' otorga protección de propiedad intelectual colectiva. Exige mínimo 16,5% materia seca y 6,5° Brix.",
    image: null,
    imageAlt: "Certificación de Indicación Geográfica",
    imagePlaceholder: "🏅",
    link: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-33-2022-366126",
  },
  {
    id: 6,
    title: "Productores de Kiwi se Suman al Sector Industrial de Miramar",
    date: "16 de Diciembre, 2021",
    sortDate: "2021-12-16",
    category: "Infraestructura",
    excerpt: "Laureano Goycoa firma el boleto de compraventa de un lote en el Sector Industrial Planificado para construir empacadora y cámara de frío. Nace la Cooperativa Ecco Argentina.",
    image: "/noticia-cooperativa-miramar.png",
    imageAlt: "Productores de kiwi en el Sector Industrial de Miramar",
    link: "https://regionmardelplata.com/ver-noticia.asp?noticia=miramar-ahora-productores-de-kiwi-se-suman-al-sector-industrial-de-miramar&codigo=14249",
  },
  {
    id: 7,
    title: "Rodríguez Destacó el Rol del Cooperativismo",
    date: "2021",
    sortDate: "2021-06",
    category: "Institucional",
    excerpt: "El Ministerio de Desarrollo Agrario destaca el rol del cooperativismo en la producción de kiwi y asiste en la obtención de la matrícula de la cooperativa.",
    image: "/noticia-rodriguez.png",
    imageAlt: "Rodríguez destaca el rol del cooperativismo",
    link: "https://www.gba.gob.ar/desarrollo_agrario/Noticias/rodriguez_destaco_el_rol_del_cooperativismo_en_la_produccion",
  },
  {
    id: 8,
    title: "El Kiwi se Abre Camino entre el Mar y las Sierras",
    date: "2019",
    sortDate: "2019-06",
    category: "Prensa",
    excerpt: "Bichos de Campo cuenta la historia del desarrollo del kiwi en la región del sudeste bonaerense y el trabajo de iKiwi con la Universidad de Bologna.",
    image: "/noticia-kiwi-se-abre-camino.png",
    imageAlt: "El kiwi se abre camino entre el mar y las sierras",
    link: "https://bichosdecampo.com/el-kiwi-se-abre-camino-entre-el-mar-y-las-sierras/",
  },
  {
    id: 9,
    title: "Argentinos Consumen 0,45 kg de Kiwi Per Cápita",
    date: "30 de Enero, 2019",
    sortDate: "2019-01-30",
    category: "Mercado",
    excerpt: "Argentina tiene el mayor consumo per cápita de kiwi en Latinoamérica. El kiwi es la segunda fruta más importada después de la banana, revelando una oportunidad de sustitución.",
    image: null,
    imageAlt: "Consumo de kiwi per cápita en Argentina",
    imagePlaceholder: "📊",
    link: "https://www.freshplaza.com/north-america/article/9067212/argentinians-consume-0-45-kg-of-kiwis-per-capita-per-year/",
  },
].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

const pressLogos = [
  { 
    name: "La Nación", 
    logo: "/logo-lanacion.png",
  },
  { 
    name: "Clarín", 
    logo: "/logo-clarin.png",
  },
  { 
    name: "Infobae", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Infobae_logo.svg",
  },
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
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden">
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
                <div className="mt-6">
                  <Button asChild>
                    <a href={featuredNews.link} target="_blank" rel="noopener noreferrer">
                      Leer artículo completo →
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-full">
                <Image 
                  src={featuredNews.image}
                  alt={featuredNews.imageAlt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg drop-shadow-lg">Luis Franch</p>
                  <p className="text-white/90 text-sm drop-shadow-lg">Representante & Fundador de iKiwi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid - Ordenado cronológicamente */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Más Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="h-full flex flex-col overflow-hidden group">
                {/* Image Area */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <Image 
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {item.imagePlaceholder}
                    </span>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 flex-1">
                  <p className="text-xs text-muted-foreground mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" className="w-full" size="sm">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      Leer más →
                    </a>
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
                <p className="text-4xl font-bold text-amber-700 mb-2">0,45kg</p>
                <p className="text-sm text-muted-foreground">Consumo Per Cápita</p>
                <p className="text-xs text-muted-foreground mt-1">Mayor de Latinoamérica</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-700 mb-2">9</p>
                <p className="text-sm text-muted-foreground">Partidos en la IG</p>
                <p className="text-xs text-muted-foreground mt-1">Mar y Sierras del Sudeste</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-700 mb-2">16,5%</p>
                <p className="text-sm text-muted-foreground">Materia Seca Mínima</p>
                <p className="text-xs text-muted-foreground mt-1">Requisito de la IG</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-amber-700 mb-2">900t</p>
                <p className="text-sm text-muted-foreground">Capacidad Ecco Argentina</p>
                <p className="text-xs text-muted-foreground mt-1">Planta de frío Miramar</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Press Section */}
        <section className="bg-[#f5f0e8] rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">En los Medios</h2>
            <p className="text-muted-foreground">
              La historia de iKiwi ha sido destacada en los principales medios del país.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {pressLogos.map((press, index) => (
              <div key={index} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <Image
                  src={press.logo}
                  alt={press.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logo-lanacion.png"
                    alt="La Nación"
                    width={100}
                    height={30}
                    className="h-6 w-auto object-contain"
                  />
                </div>
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
