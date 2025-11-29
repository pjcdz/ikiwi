import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Trabajá con Nosotros | Kiwi Argentino - iKiwi",
  description: "Sumate al equipo de iKiwi. Oportunidades laborales en campo, empaquetadora y administración. Trabajá en la mayor productora de kiwi de Argentina.",
};

const workAreas = [
  {
    icon: "🌱",
    title: "Campo",
    description: "Trabajo al aire libre en nuestras plantaciones de kiwi.",
    tasks: [
      "Poda y mantenimiento de plantas",
      "Cosecha de kiwis",
      "Riego y fertilización",
      "Control de plagas orgánico",
    ],
    season: "Todo el año (picos en cosecha: Marzo-Mayo)",
  },
  {
    icon: "📦",
    title: "Empaquetadora",
    description: "Procesamiento y empaque de kiwis en nuestra planta.",
    tasks: [
      "Selección y clasificación",
      "Empaque y etiquetado",
      "Control de calidad",
      "Logística de cámaras de frío",
    ],
    season: "Marzo a Octubre (temporada de empaque)",
  },
  {
    icon: "💼",
    title: "Administrativo",
    description: "Gestión y soporte de nuestras operaciones.",
    tasks: [
      "Administración y contabilidad",
      "Comercialización y ventas",
      "Recursos humanos",
      "Sistemas y tecnología",
    ],
    season: "Todo el año",
  },
];

const benefits = [
  {
    icon: "🌿",
    title: "Ambiente Natural",
    description: "Trabajá rodeado de naturaleza en Sierra de los Padres.",
  },
  {
    icon: "📈",
    title: "Crecimiento",
    description: "Oportunidades de desarrollo y capacitación continua.",
  },
  {
    icon: "👥",
    title: "Equipo",
    description: "Formá parte de un equipo apasionado por la agricultura.",
  },
  {
    icon: "🏠",
    title: "Estabilidad",
    description: "Empresa sólida con más de 15 años en el mercado.",
  },
  {
    icon: "🥝",
    title: "Producto Premium",
    description: "Trabajá con el mejor kiwi de Argentina.",
  },
  {
    icon: "🌍",
    title: "Impacto",
    description: "Contribuí a la exportación argentina al mundo.",
  },
];

export default function TrabajaConNosotrosPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4">
            Sumate al Equipo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trabajá con Nosotros
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Formá parte de la mayor productora de kiwi de Argentina. 
            Buscamos personas apasionadas que quieran crecer con nosotros.
          </p>
          
          {/* Imagen de cosecha */}
          <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src="/image11.png"
              alt="Trabajadores cosechando kiwis en Sierra de los Padres"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#3f7528]">90+</p>
              <p className="text-muted-foreground text-sm">Empleados</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#3f7528]">15+</p>
              <p className="text-muted-foreground text-sm">Años</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#3f7528]">270</p>
              <p className="text-muted-foreground text-sm">Hectáreas</p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Áreas de Trabajo */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Áreas de Trabajo</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tenemos oportunidades en diferentes áreas según tus habilidades e intereses.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {workAreas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Tareas típicas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {area.tasks.map((task, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#3f7528] rounded-full" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Temporada:</span> {area.season}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Beneficios */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">¿Por Qué Trabajar en iKiwi?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ofrecemos un ambiente de trabajo único donde podés crecer profesionalmente 
            mientras contribuís a la agricultura sustentable.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Formulario de Contacto */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Postulate</h2>
            <p className="text-center text-muted-foreground mb-8">
              Completá el formulario y nos pondremos en contacto con vos.
            </p>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#3f7528]"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#3f7528]"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#3f7528]"
                        placeholder="+54 223 XXX-XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="area" className="block text-sm font-medium mb-2">
                        Área de Interés *
                      </label>
                      <select
                        id="area"
                        name="area"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#3f7528]"
                      >
                        <option value="">Selecciona un área</option>
                        <option value="campo">Campo</option>
                        <option value="empaquetadora">Empaquetadora</option>
                        <option value="administrativo">Administrativo</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Contanos sobre vos
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#3f7528] resize-none"
                      placeholder="Tu experiencia laboral, habilidades, disponibilidad..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cv" className="block text-sm font-medium mb-2">
                      Adjuntar CV (PDF)
                    </label>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#3f7528] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3f7528]/20 file:text-[#3f7528] hover:file:bg-[#3f7528]/30"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Formatos aceptados: PDF, DOC, DOCX (máx. 5MB)
                    </p>
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button type="submit" size="lg" className="px-12">
                      Enviar Postulación
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Campos obligatorios. Nos contactaremos dentro de los 7 días hábiles.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-[#3f7528]/10 rounded-2xl p-8 md:p-12 text-center">
          <span className="text-4xl">🥝</span>
          <h2 className="text-2xl font-bold mt-4 mb-4">¿Tenés Dudas?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Si tenés preguntas sobre las oportunidades laborales o querés más información, 
            no dudes en contactarnos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="mailto:rrhh@ikiwi.com.ar">
                📧 rrhh@ikiwi.com.ar
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://instagram.com/kiwi_argentino" target="_blank" rel="noopener noreferrer">
                📱 Instagram
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
