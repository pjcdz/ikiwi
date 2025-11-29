import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "Nutrición del Kiwi | Kiwi Argentino - iKiwi",
  description: "Descubre los beneficios nutricionales del kiwi. Rico en vitamina C, fibra y actinidina, el kiwi es un superalimento natural.",
};

const nutritionalFacts = {
  per100g: [
    { nutrient: "Calorías", value: "61", unit: "kcal" },
    { nutrient: "Carbohidratos", value: "14.7", unit: "g" },
    { nutrient: "Azúcares", value: "9", unit: "g" },
    { nutrient: "Fibra", value: "3", unit: "g" },
    { nutrient: "Proteínas", value: "1.1", unit: "g" },
    { nutrient: "Grasas", value: "0.5", unit: "g" },
    { nutrient: "Vitamina C", value: "92.7", unit: "mg (103% VD)" },
    { nutrient: "Vitamina K", value: "40.3", unit: "µg (34% VD)" },
    { nutrient: "Vitamina E", value: "1.5", unit: "mg" },
    { nutrient: "Potasio", value: "312", unit: "mg" },
    { nutrient: "Folato", value: "25", unit: "µg" },
  ],
};

const vitaminCComparison = [
  { fruit: "Kiwi Verde", amount: "92.7 mg", percentage: 100, icon: "🥝" },
  { fruit: "Naranja", amount: "53.2 mg", percentage: 57, icon: "🍊" },
  { fruit: "Frutilla", amount: "58.8 mg", percentage: 63, icon: "🍓" },
  { fruit: "Limón", amount: "53 mg", percentage: 57, icon: "🍋" },
  { fruit: "Manzana", amount: "4.6 mg", percentage: 5, icon: "🍎" },
];

const benefits = [
  {
    icon: "💪",
    title: "Sistema Inmunológico",
    description: "Con más vitamina C que la naranja, el kiwi fortalece las defensas naturales del cuerpo contra infecciones y enfermedades.",
    detail: "Un solo kiwi aporta más del 100% del valor diario recomendado de vitamina C, superando a cítricos tradicionales.",
  },
  {
    icon: "🫁",
    title: "Digestión Saludable",
    description: "La actinidina, una enzima única del kiwi, ayuda a descomponer las proteínas y facilita la digestión.",
    detail: "Esta enzima proteolítica puede mejorar la digestión de carnes y lácteos, reduciendo la sensación de pesadez.",
  },
  {
    icon: "❤️",
    title: "Salud Cardiovascular",
    description: "El potasio y la fibra del kiwi contribuyen a mantener la presión arterial en niveles saludables.",
    detail: "Estudios sugieren que comer 2-3 kiwis al día puede reducir la agregación plaquetaria y los niveles de triglicéridos.",
  },
  {
    icon: "😴",
    title: "Mejora del Sueño",
    description: "El kiwi contiene serotonina y antioxidantes que pueden ayudar a conciliar el sueño más fácilmente.",
    detail: "Investigaciones indican que comer 2 kiwis una hora antes de dormir mejora la calidad y duración del sueño.",
  },
  {
    icon: "👀",
    title: "Salud Visual",
    description: "Rico en luteína y zeaxantina, antioxidantes que protegen la vista del daño oxidativo.",
    detail: "Estos carotenoides se concentran en la retina y pueden reducir el riesgo de degeneración macular.",
  },
  {
    icon: "🦴",
    title: "Huesos Fuertes",
    description: "La vitamina K del kiwi es esencial para la fijación del calcio en los huesos.",
    detail: "Un kiwi aporta el 34% del valor diario de vitamina K, importante para la salud ósea.",
  },
];

const faqs = [
  {
    question: "¿Cuántos kiwis puedo comer al día?",
    answer: "Se recomienda consumir 1-3 kiwis al día para obtener sus beneficios. No hay contraindicaciones para personas sanas, aunque quienes tengan alergia a las frutas o problemas renales graves deben consultar a su médico.",
  },
  {
    question: "¿El kiwi amarillo tiene los mismos beneficios que el verde?",
    answer: "Sí, ambos son nutritivos. El kiwi amarillo es más dulce y tiene un poco más de vitamina C, mientras que el verde tiene más fibra y actinidina. Idealmente, alterna entre ambos.",
  },
  {
    question: "¿Se puede comer la piel del kiwi?",
    answer: "¡Sí! La piel del kiwi es comestible y aporta fibra adicional. Lávalo bien antes de consumirlo. Muchas personas prefieren pelarlos, pero no es necesario.",
  },
  {
    question: "¿El kiwi es bueno para diabéticos?",
    answer: "El kiwi tiene un índice glucémico bajo (GI de 50), lo que significa que no causa picos bruscos de azúcar en sangre. La fibra también ayuda a moderar la absorción de azúcares.",
  },
  {
    question: "¿Qué es la actinidina y por qué es importante?",
    answer: "La actinidina es una enzima proteolítica única del kiwi que ayuda a descomponer las proteínas durante la digestión. Es especialmente útil después de comidas pesadas con carnes o lácteos.",
  },
  {
    question: "¿El kiwi puede causar alergia?",
    answer: "Algunas personas pueden ser alérgicas al kiwi, especialmente quienes tienen alergia al látex o al polen de abedul. Los síntomas incluyen picazón en la boca o garganta. Consulta a tu médico si experimentas reacciones.",
  },
  {
    question: "¿Es mejor comer kiwi en ayunas o después de comer?",
    answer: "El kiwi es beneficioso en cualquier momento. En ayunas aprovechas mejor la vitamina C, mientras que después de comer la actinidina ayuda a la digestión de proteínas.",
  },
];

export default function NutricionPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Nutrición</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            El Poder Nutricional del Kiwi
          </h1>
          <p className="text-xl text-muted-foreground">
            Pequeño pero poderoso: el kiwi es uno de los alimentos más densos en nutrientes. 
            Descubre por qué es considerado un superalimento natural.
          </p>
        </div>

        {/* Vitamin C Comparison Hero */}
        <section className="mb-16">
          <Card className="bg-[#3f7528]/10 border-[#3f7528]/30">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="text-6xl mb-4 block">🥝</span>
                <h2 className="text-2xl font-bold mb-2">¿Sabías que el kiwi tiene más Vitamina C que la naranja?</h2>
                <p className="text-muted-foreground">
                  Un solo kiwi verde contiene el 103% del valor diario recomendado de vitamina C
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                {vitaminCComparison.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-2xl w-10">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{item.fruit}</span>
                        <span className="text-sm text-muted-foreground">{item.amount}/100g</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${index === 0 ? 'bg-[#3f7528]' : 'bg-muted-foreground/30'} rounded-full transition-all`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nutritional Facts Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Información Nutricional</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground mb-4">Por cada 100g de kiwi verde</p>
                <div className="space-y-3">
                  {nutritionalFacts.per100g.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-muted last:border-0">
                      <span className="font-medium">{item.nutrient}</span>
                      <span className="text-muted-foreground">{item.value} {item.unit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Health Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-4">Beneficios para la Salud</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            El kiwi no es solo delicioso, es un verdadero aliado para tu salud. 
            Estos son los principales beneficios respaldados por la ciencia.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <p className="text-sm text-[#3f7528]">{benefit.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Actinidin Section */}
        <section className="mb-16">
          <div className="bg-[#3f7528]/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-5xl">🧬</span>
                <h2 className="text-2xl font-bold mt-4 mb-2">Actinidina: La Enzima Única del Kiwi</h2>
                <p className="text-muted-foreground">
                  Una de las razones por las que el kiwi es especial
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">¿Qué es?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    La actinidina es una enzima proteolítica natural que se encuentra 
                    exclusivamente en el kiwi (especialmente en el verde). Tiene la capacidad 
                    de descomponer las proteínas, similar a la papaína de la papaya o la 
                    bromelina del ananá.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Beneficios</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3f7528]">✓</span>
                      Mejora la digestión de proteínas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3f7528]">✓</span>
                      Reduce la hinchazón después de comidas pesadas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3f7528]">✓</span>
                      Ideal como postre después de carnes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3f7528]">✓</span>
                      Puede usarse como ablandador natural de carnes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Green vs Gold */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Kiwi Verde vs. Kiwi Amarillo</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-[#3f7528]/30">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    <Image src="/image12.png" alt="Kiwi Verde Hayward" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mt-2">Kiwi Verde (Hayward)</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span>Vitamina C</span>
                    <span className="font-medium">92.7 mg/100g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fibra</span>
                    <span className="font-medium text-[#3f7528]">3g (más alto)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Actinidina</span>
                    <span className="font-medium text-[#3f7528]">Alta concentración</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabor</span>
                    <span className="font-medium">Ácido-dulce equilibrado</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Textura</span>
                    <span className="font-medium">Firme, con semillas crujientes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-accent/30">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="relative w-24 h-24 mx-auto mb-2">
                    <Image src="/image13.png" alt="Kiwi Gold Amarillo" fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold mt-2">Kiwi Amarillo (Jintao/Dorí)</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span>Vitamina C</span>
                    <span className="font-medium text-accent">161 mg/100g (más alto)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fibra</span>
                    <span className="font-medium">2g</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Actinidina</span>
                    <span className="font-medium">Moderada</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sabor</span>
                    <span className="font-medium text-accent">Más dulce, tropical</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Textura</span>
                    <span className="font-medium">Más suave, menos peludo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* FAQ */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA */}
        <section className="mt-20 text-center bg-[#3f7528]/10 rounded-2xl p-8 md:p-12">
          <span className="text-5xl mb-4 block">🥝</span>
          <h2 className="text-2xl font-bold mb-4">Incorpora el Kiwi a Tu Dieta</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Con todos estos beneficios, ¿qué esperas? El kiwi argentino de iKiwi 
            es la opción más fresca y nutritiva para cuidar tu salud.
          </p>
        </section>
      </div>
    </div>
  );
}
