import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Nosotros | Kiwi Argentino - iKiwi",
  description: "Conoce la historia de iKiwi, la mayor productora de kiwi de Argentina. Desde Mar del Plata al mundo con calidad premium y certificación orgánica.",
};

const timeline = [
  {
    year: "2006",
    title: "El Nacimiento",
    description: "Luis Franch, un abogado, decide invertir en el cultivo de kiwis después de que su esposa lee una nota periodística sobre el tema. Comienzan con unas pocas hectáreas en Mar del Plata.",
  },
  {
    year: "2010",
    title: "Expansión Inicial",
    description: "La empresa crece con la incorporación de nuevas hectáreas y la construcción de la primera planta de empaque y frío.",
  },
  {
    year: "2015",
    title: "Alianza con Bologna",
    description: "Se establece colaboración con la Universidad de Bolonia para el desarrollo de nuevas variedades amarillas y rojas.",
  },
  {
    year: "2019",
    title: "270 Hectáreas",
    description: "iKiwi alcanza las 270 hectáreas cultivadas, consolidándose como la mayor productora de kiwi del país. La Nación publica un extenso reportaje sobre la empresa.",
  },
  {
    year: "2021",
    title: "Cooperativa Ecco Kiwi",
    description: "Se forma la cooperativa Ecco Kiwi, agrupando productores del sudeste bonaerense para mejorar la comercialización conjunta.",
  },
  {
    year: "2022",
    title: "Indicación Geográfica",
    description: "El kiwi del sudeste bonaerense obtiene la IG 'Kiwi Mar y Sierras' y Denominación de Origen, reconociendo oficialmente su calidad diferenciada.",
  },
  {
    year: "2023",
    title: "Primera Exportación a Europa",
    description: "Hito histórico: 900 toneladas de kiwi orgánico certificado son exportadas a España, la primera operación con IG a Europa.",
  },
  {
    year: "2025",
    title: "Expansión Global",
    description: "Argentina mejora del puesto 43° al 24° en el ranking mundial de exportadores. Se exploran nuevos mercados en Oriente Medio y Norteamérica.",
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

const certifications = [
  {
    name: "IG Mar y Sierras",
    description: "Indicación Geográfica que certifica el origen y calidad diferenciada del kiwi del sudeste bonaerense.",
    icon: "🏅",
  },
  {
    name: "Orgánico Argentina",
    description: "Certificación nacional de producción orgánica sin uso de agroquímicos sintéticos.",
    icon: "🌿",
  },
  {
    name: "USDA Organic",
    description: "Certificación del Departamento de Agricultura de Estados Unidos para exportación.",
    icon: "🇺🇸",
  },
  {
    name: "GlobalGAP",
    description: "Estándar internacional de buenas prácticas agrícolas para seguridad alimentaria.",
    icon: "✅",
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
              <p className="text-4xl font-bold text-primary">270+</p>
              <p className="text-muted-foreground">Hectáreas</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">1M+</p>
              <p className="text-muted-foreground">Kilos/Año</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">90+</p>
              <p className="text-muted-foreground">Empleados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">4</p>
              <p className="text-muted-foreground">Países Exportación</p>
            </div>
          </div>
        </div>

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
                  La región costera del sudeste bonaerense resultó tener condiciones ideales: 
                  suelo, clima atlántico y las horas de frío necesarias para producir kiwis 
                  de calidad excepcional.
                </p>
                <p>
                  Hoy, iKiwi produce más de un millón de kilos de kiwi al año, emplea a más de 
                  90 personas y exporta a Canadá, Italia, Alemania e Inglaterra. Pero la visión 
                  sigue siendo la misma: producir el mejor kiwi del mundo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌿</div>
                  <p className="text-lg font-medium text-foreground">Mar del Plata</p>
                  <p className="text-muted-foreground">Sierra de los Padres</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full">
                <span className="font-bold">Desde 2006</span>
              </div>
            </div>
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
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <Card>
                      <CardContent className="p-6">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
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

        <Separator className="my-16" />

        {/* Certifications */}
        <section id="certificaciones">
          <h2 className="text-3xl font-bold text-center mb-4">Certificaciones</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nuestro compromiso con la calidad está respaldado por las más exigentes 
            certificaciones nacionales e internacionales.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sustainability */}
        <section className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12" id="sostenibilidad">
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
