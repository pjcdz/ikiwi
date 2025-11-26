import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: "🍊",
    title: "Vitamina C Superior",
    description: "Un kiwi contiene más vitamina C que 3-4 naranjas. Fortalece el sistema inmunológico.",
    stat: "92.7mg",
    statLabel: "por 100g",
  },
  {
    icon: "🫁",
    title: "Mejora la Digestión",
    description: "Contiene actinidina, una enzima única que ayuda a digerir proteínas y mejora el tránsito intestinal.",
    stat: "Actinidina",
    statLabel: "enzima exclusiva",
  },
  {
    icon: "💪",
    title: "Rico en Fibra",
    description: "3 gramos de fibra por cada 100g. Ideal para mantener una dieta equilibrada y sentirse saciado.",
    stat: "3g",
    statLabel: "fibra por 100g",
  },
  {
    icon: "🧬",
    title: "Antioxidantes",
    description: "Clorofila, ácido elágico, antocianinas y luteína protegen tus células del envejecimiento.",
    stat: "Alto",
    statLabel: "poder antioxidante",
  },
  {
    icon: "❤️",
    title: "Salud Cardiovascular",
    description: "El potasio ayuda a regular la presión arterial y protege el corazón.",
    stat: "312mg",
    statLabel: "potasio por 100g",
  },
  {
    icon: "✨",
    title: "Piel Radiante",
    description: "La vitamina E y C estimulan la producción de colágeno para una piel más joven.",
    stat: "Colágeno",
    statLabel: "producción natural",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Nutrición y Salud</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios del Kiwi Argentino
          </h2>
          <p className="text-lg text-muted-foreground">
            El kiwi es considerado una de las frutas más nutritivas del mundo. 
            Descubre por qué deberías incluirlo en tu dieta diaria.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {benefit.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">
                        {benefit.stat}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {benefit.statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison callout */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center">
          <p className="text-lg text-foreground mb-2">
            <span className="font-bold">¿Sabías que?</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-primary">
            1 kiwi = 1 kilo de limones en vitamina C
          </p>
          <p className="text-muted-foreground mt-2">
            Fuente: Mercado Central de Buenos Aires
          </p>
        </div>
      </div>
    </section>
  );
}
