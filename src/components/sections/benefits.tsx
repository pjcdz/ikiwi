import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: "🍊",
    title: "Vitamina C Superior",
    description: "1 kiwi equivale a 1 kilo de limones en vitamina C. Ideal para resfríos y sistema inmune.",
    stat: "92.7mg",
    statLabel: "por 100g",
  },
  {
    icon: "🫁",
    title: "Mejora la Digestión",
    description: "Contiene actinidina, una enzima exclusiva que ayuda a digerir proteínas y tiene efecto laxante suave.",
    stat: "Actinidina",
    statLabel: "enzima exclusiva",
  },
  {
    icon: "💧",
    title: "Efecto Diurético",
    description: "Compuesto 80% de agua, con alta sensación de saciedad. Ayuda a regular el azúcar en sangre.",
    stat: "80%",
    statLabel: "agua natural",
  },
  {
    icon: "🧬",
    title: "Propiedades Anticancerígenas",
    description: "Clorofila, ácido elágico, antocianinas y luteína para mantener la vista sana y proteger células.",
    stat: "Alto",
    statLabel: "poder antioxidante",
  },
  {
    icon: "❤️",
    title: "Salud Cardiovascular",
    description: "Mejora la circulación de la sangre, reduce la presión arterial y protege los huesos.",
    stat: "312mg",
    statLabel: "potasio por 100g",
  },
  {
    icon: "😌",
    title: "Reduce Estrés",
    description: "Efecto apaciguador contra ansiedad y depresión. Reduce el estrés y los nervios.",
    stat: "Natural",
    statLabel: "efecto calmante",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 relative">
      {/* Background Image - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-benefits-breakfast.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/85 via-[#faf8f5]/70 to-[#faf8f5]/85 md:from-[#faf8f5]/75 md:via-[#faf8f5]/60 md:to-[#faf8f5]/75" />
      <div className="container mx-auto px-4 relative z-10">
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
              className="group hover:shadow-lg transition-all duration-300 hover:border-green-500/50 bg-white/95 backdrop-blur-md border border-white/50 shadow-md"
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
                      <span className="text-2xl font-bold text-green-700">
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
        <div className="mt-12 bg-green-50/95 backdrop-blur-sm rounded-2xl p-8 text-center border border-green-100/50 shadow-lg">
          <p className="text-lg text-foreground mb-2">
            <span className="font-bold">¿Sabías que?</span>
          </p>
          <p className="text-2xl md:text-3xl font-bold text-green-700">
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
