import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Empaquetadora } from "@/components/sections/empaquetadora";
import { Certifications } from "@/components/sections/certifications";

export const metadata = {
  title: "Nosotros | Kiwi Argentino - iKiwi",
  description: "Conoce la historia de iKiwi, la mayor productora de kiwi de Argentina. Desde Mar del Plata al mundo con calidad premium y certificación orgánica.",
};

const timeline = [
  {
    year: "2006",
    title: "El Nacimiento",
    description: "Luis Franch, un abogado, decide invertir en el cultivo de kiwis después de que su esposa lee una nota periodística sobre el tema. Comienzan con unas pocas hectáreas en Mar del Plata, descubriendo el potencial único del terroir bonaerense.",
  },
  {
    year: "2010",
    title: "Expansión Inicial",
    description: "La empresa crece con la incorporación de nuevas hectáreas y la construcción de la primera planta de empaque y frío. Se confirma la calidad excepcional del kiwi argentino gracias al suelo rico en materia orgánica.",
  },
  {
    year: "2015",
    title: "Convenio con Bologna",
    description: "Se firma un convenio estratégico con la Universidad de Bolonia (Italia), líder mundial en investigación genética de Actinidia, para acceder a germoplasma avanzado y desarrollar variedades amarillas y rojas.",
  },
  {
    year: "2017",
    title: "Visión Premium",
    description: "Luis Franch articula públicamente la meta de alcanzar 10 millones de kilos y ser reconocidos como productores de calidad Premium, comparable a Nueva Zelanda.",
  },
  {
    year: "2019",
    title: "Hitos de Exportación",
    description: "iKiwi alcanza las 270 hectáreas. Primera exportación de kiwi amarillo orgánico (variedad Jintao) a Europa. La Nación publica un extenso reportaje sobre la empresa.",
  },
  {
    year: "2021",
    title: "Cooperativa Ecco Argentina",
    description: "Se forma la Cooperativa Ecco Argentina en General Alvarado (Miramar), agrupando productores del sudeste bonaerense. Se inaugura planta propia de frío y empaque.",
  },
  {
    year: "2022",
    title: "Indicación Geográfica",
    description: "Mediante Resolución N° 33/2022, el 'Kiwi Mar y Sierras del Sudeste de Buenos Aires' obtiene la IG, reconociendo oficialmente su calidad diferenciada vinculada al origen geográfico.",
  },
  {
    year: "2023",
    title: "Primera Exportación con IG",
    description: "Hito histórico: 22,400 kg de kiwi orgánico con sello IG son exportados a España. La planta de empaque genera empleo directo para 20 familias locales.",
  },
  {
    year: "2025",
    title: "Expansión Global",
    description: "Argentina sube del puesto 43° al 24° en exportadores mundiales. Se concretan alianzas con Emiratos Árabes Unidos y se exploran mercados en China, con el kiwi rojo como próxima innovación.",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Sustentabilidad",
    description: "Prácticas agrícolas responsables que protegen el medio ambiente y aseguran la calidad para las generaciones futuras.",
  },
  {
    icon: "⭐",
    title: "Calidad Premium",
    description: "Cada kiwi pasa por rigurosos controles de calidad. Solo la fruta que cumple nuestros estándares llega al consumidor.",
  },
  {
    icon: "🤝",
    title: "Comunidad",
    description: "Generamos empleo local y trabajamos con productores de la región para fortalecer la industria frutícola argentina.",
  },
  {
    icon: "🔬",
    title: "Innovación",
    description: "Investigación constante con universidades internacionales para desarrollar nuevas variedades y mejorar procesos.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4">Nuestra Historia</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            La Mayor Productora de Kiwi de Argentina
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Desde una nota en el diario hasta liderar la industria del kiwi en Argentina. 
            Esta es la historia de iKiwi y nuestra pasión por cultivar la mejor fruta del país.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-700">270+</p>
              <p className="text-muted-foreground">Hectáreas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-700">16%+</p>
              <p className="text-muted-foreground">Materia Seca</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-700">24°</p>
              <p className="text-muted-foreground">Ranking Mundial</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-amber-700">3</p>
              <p className="text-muted-foreground">Variedades</p>
            </div>
          </div>
        </div>

        {/* Terroir Section */}
        <section className="mb-20 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">El Terroir: Mar y Sierras</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🌍 Ubicación Privilegiada</h3>
                <p className="text-muted-foreground mb-4">
                  La zona núcleo de producción abarca los partidos de <strong>General Pueyrredón, 
                  General Alvarado, Balcarce, Lobería, Necochea, San Cayetano, Tres Arroyos, 
                  Mar Chiquita y General Madariaga</strong>.
                </p>
                <p className="text-muted-foreground">
                  La franja costera influenciada por el Océano Atlántico y protegida por el 
                  sistema serrano de Tandilia ofrece condiciones únicas que diferencian al 
                  producto argentino de sus competidores.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">🌱 Suelos Excepcionales</h3>
                <p className="text-muted-foreground mb-4">
                  A diferencia de Nueva Zelanda (suelos volcánicos), el sudeste bonaerense 
                  posee suelos con <strong>horizontes profundos y alto contenido de materia 
                  orgánica</strong>.
                </p>
                <p className="text-muted-foreground">
                  Esta riqueza permite una retención de humedad y disponibilidad de nutrientes 
                  que favorece el desarrollo de raíces robustas sin dependencia excesiva de 
                  fertirrigación sintética.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">🌡️ Clima Atlántico Moderado</h3>
                <p className="text-muted-foreground">
                  La influencia oceánica reduce la amplitud térmica extrema durante el verano 
                  y minimiza el riesgo de heladas tempranas en otoño, permitiendo que la fruta 
                  permanezca en la vid <strong>hasta 20 días extra</strong>.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">⭐ Calidad Superior</h3>
                <p className="text-muted-foreground">
                  El "hang time" extra permite una acumulación de metabolitos y azúcares que 
                  elevan el perfil de sabor. Nuestro kiwi alcanza un mínimo de <strong>16% de 
                  materia seca</strong> y <strong>6.5° Brix</strong> promedio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">El Origen de iKiwi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Todo comenzó en 2006 cuando Luis Franch, un abogado de profesión, descubrió 
                  una oportunidad inesperada. Su esposa había leído una nota periodística sobre 
                  el cultivo de kiwis en Argentina y le comentó la idea.
                </p>
                <p>
                  Lo que empezó como una inversión modesta en unas pocas hectáreas en la zona 
                  de Mar del Plata se transformó en la mayor operación productora de kiwi del país. 
                  La región del sudeste bonaerense —entre el mar y las sierras de Tandilia— posee 
                  un <strong>terroir único</strong>: suelos con alto contenido de materia orgánica 
                  (superior a los suelos volcánicos de Nueva Zelanda), clima atlántico moderado, 
                  y la ausencia de heladas tempranas que permite que la fruta permanezca en la 
                  vid hasta 20 días extra, desarrollando un perfil de sabor excepcional.
                </p>
                <p>
                  Como explicó Franch: <em>"Las condiciones climáticas y el suelo son propicios 
                  para este cultivo. Tenemos una posición similar a Nueva Zelanda, pero nuestros 
                  suelos hacen la diferencia. La riqueza y el alto contenido orgánico es la clave 
                  de la calidad del kiwi."</em>
                </p>
                <p>
                  Hoy, iKiwi produce más de un millón de kilos de kiwi al año, emplea a más de 
                  90 personas y exporta a España, Italia, Alemania e Inglaterra. Pero la visión 
                  sigue siendo la misma: producir el mejor kiwi del mundo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/image11.png"
                  alt="Cosecha de kiwis en Sierra de los Padres, Mar del Plata"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-700 text-white px-6 py-3 rounded-full">
                <span className="font-bold">Desde 2006</span>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Varieties Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Nuestras Variedades</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Gracias al convenio con la Universidad de Bolonia, hemos diversificado nuestra 
            producción con variedades de alta demanda en los mercados internacionales.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center">
                <span className="text-6xl">🥝</span>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-green-100 text-green-800 hover:bg-green-100">Hayward</Badge>
                <h3 className="text-xl font-semibold mb-2">Kiwi Verde</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  El clásico. Pulpa verde esmeralda, sabor acidulce y complejo. 
                  Cosecha en noviembre. Es nuestro volumen principal de producción.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Mercado:</span> Consumo global
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-yellow-500 to-yellow-300 flex items-center justify-center">
                <span className="text-6xl">🟡</span>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Jintao</Badge>
                <h3 className="text-xl font-semibold mb-2">Kiwi Amarillo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Pulpa amarilla, piel suave, perfil tropical y dulce. Requiere 
                  menos horas de frío (350-450h). Cosecha temprana en septiembre/octubre.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Mercado:</span> Europa, Asia
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-dashed border-2">
              <div className="h-32 bg-gradient-to-br from-red-500 to-red-300 flex items-center justify-center">
                <span className="text-6xl">❤️</span>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3 bg-red-100 text-red-800 hover:bg-red-100">Experimental</Badge>
                <h3 className="text-xl font-semibold mb-2">Kiwi Rojo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  La próxima innovación. Muy dulce, notas a berries. Cosecha en 
                  octubre, llenando el hueco entre amarillo y verde.
                </p>
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Mercado:</span> China, retail de lujo
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Timeline */}
        <section className="mb-20" id="historia">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestra Trayectoria</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-amber-600 rounded-full -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card>
                      <CardContent className="p-6">
                        <span className="text-2xl font-bold text-amber-700">{item.year}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Empaquetadora Section - Full width */}
      <Empaquetadora />

      <div className="container mx-auto px-4">
        {/* Certifications - Using new component */}
        <Certifications variant="full" showTitle={true} className="py-0" />

        {/* Sustainability */}
        <section className="mt-20 bg-amber-50 rounded-2xl p-8 md:p-12" id="sostenibilidad">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl">🌍</span>
            <h2 className="text-3xl font-bold mt-4 mb-4">Compromiso con la Sustentabilidad</h2>
            <p className="text-muted-foreground mb-8">
              Creemos que el futuro de la agricultura está en las prácticas sustentables. 
              Por eso, una parte significativa de nuestra producción cuenta con certificación 
              orgánica, y trabajamos constantemente para reducir nuestra huella ambiental.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🌱 Producción Orgánica</h4>
                <p className="text-sm text-muted-foreground">
                  Sin agroquímicos sintéticos ni fertilizantes artificiales.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">💧 Uso Eficiente del Agua</h4>
                <p className="text-sm text-muted-foreground">
                  Sistemas de riego por goteo y monitoreo constante.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🚚 Km 0</h4>
                <p className="text-sm text-muted-foreground">
                  Menor huella de carbono que el kiwi importado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
