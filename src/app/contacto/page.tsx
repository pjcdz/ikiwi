import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Contacto | Kiwi Argentino - iKiwi",
  description: "Contacta con iKiwi. Consultas comerciales, distribución y más. La mayor productora de kiwi de Argentina.",
};

const contactInfo = [
  {
    icon: "📍",
    title: "Ubicación",
    lines: ["Sierra de los Padres", "Mar del Plata, Buenos Aires", "Argentina"],
  },
  {
    icon: "📧",
    title: "Email",
    lines: ["info@ikiwi.com.ar", "ventas@ikiwi.com.ar"],
  },
  {
    icon: "📱",
    title: "Teléfono",
    lines: ["+54 223 XXX-XXXX", "Lun-Vie 9:00-18:00"],
  },
  {
    icon: "🌐",
    title: "Redes Sociales",
    lines: ["@kiwi_argentino", "Instagram"],
  },
];

const reasons = [
  {
    icon: "🛒",
    title: "Compra Directa",
    description: "Consulta sobre puntos de venta o compra directa de nuestros productos.",
  },
  {
    icon: "🏪",
    title: "Distribución",
    description: "Interesado en distribuir kiwi iKiwi en tu comercio o cadena.",
  },
  {
    icon: "🌍",
    title: "Exportación",
    description: "Oportunidades de exportación y comercio internacional.",
  },
  {
    icon: "📰",
    title: "Prensa",
    description: "Consultas de medios, entrevistas y material de prensa.",
  },
  {
    icon: "🤝",
    title: "Alianzas",
    description: "Propuestas de colaboración y partnerships estratégicos.",
  },
  {
    icon: "🌱",
    title: "Producción",
    description: "Información sobre nuestro modelo productivo y visitas.",
  },
];

export default function ContactoPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Contacto</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hablemos
          </h1>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para responder tus consultas sobre nuestros productos, 
            distribución, exportación o cualquier otra inquietud.
          </p>
        </div>

        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold mb-3">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Contact Form */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Envíanos un Mensaje</h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                      Empresa / Organización
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium mb-2">
                      Motivo de Contacto *
                    </label>
                    <select
                      id="motivo"
                      name="motivo"
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="compra">Compra directa</option>
                      <option value="distribucion">Distribución / Mayorista</option>
                      <option value="exportacion">Exportación</option>
                      <option value="prensa">Prensa / Medios</option>
                      <option value="alianzas">Alianzas / Colaboraciones</option>
                      <option value="visita">Visita a instalaciones</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" size="lg">
                      Enviar Mensaje
                    </Button>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Campos obligatorios. Responderemos en un plazo de 24-48 horas hábiles.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Reasons to Contact */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">¿Por Qué Contactarnos?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Trabajamos con diferentes tipos de clientes y socios. Selecciona el que 
            mejor represente tu consulta.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{reason.icon}</div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Location Map */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Nuestra Ubicación</h2>
          <Card>
            <CardContent className="p-0 overflow-hidden rounded-lg">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12548.847891036647!2d-57.79832!3d-37.94286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8ef1e9a8f27%3A0x8a0e7e9e0d0b0c0d!2sSierra%20de%20los%20Padres%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de iKiwi - Sierra de los Padres, Mar del Plata"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 text-center bg-card">
                <h3 className="text-xl font-semibold mb-2">Sierra de los Padres</h3>
                <p className="text-muted-foreground mb-4">
                  Mar del Plata, Buenos Aires, Argentina
                </p>
                <p className="text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                  A 25 km del centro de Mar del Plata, en la zona rural del Partido de General Pueyrredón.
                  Nuestra ubicación privilegiada nos permite cultivar kiwis de la más alta calidad
                  gracias al clima atlántico único de la región.
                </p>
                <Button variant="outline" asChild>
                  <a 
                    href="https://maps.google.com/?q=Sierra+de+los+Padres,+Mar+del+Plata,+Argentina" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Social CTA */}
        <section className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Seguinos en Redes</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Mantente al día con las últimas novedades, recetas y contenido sobre 
              el mundo del kiwi argentino.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="https://instagram.com/kiwi_argentino" target="_blank" rel="noopener noreferrer">
                  📸 Instagram
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                🏅 IG Mar y Sierras
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Kiwi con Indicación Geográfica del Sudeste Bonaerense
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
