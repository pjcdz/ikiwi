import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: "Recetas con Kiwi | Kiwi Argentino - iKiwi",
  description: "Descubre deliciosas recetas con kiwi argentino. Desde postres hasta ensaladas, el kiwi aporta sabor y nutrición a tus comidas.",
};

const categories = [
  { id: "postres", name: "Postres", icon: "🍰" },
  { id: "bebidas", name: "Bebidas", icon: "🥤" },
  { id: "ensaladas", name: "Ensaladas", icon: "🥗" },
  { id: "desayunos", name: "Desayunos", icon: "🌅" },
];

const recipes = [
  {
    id: 1,
    title: "Pavlova de Kiwi",
    category: "postres",
    difficulty: "Media",
    time: "90 min",
    servings: "8 porciones",
    description: "Un clásico postre australiano con base de merengue crujiente, crema chantilly y kiwis frescos.",
    ingredients: [
      "4 claras de huevo",
      "250g de azúcar",
      "1 cdta de vinagre blanco",
      "1 cdta de esencia de vainilla",
      "2 cdas de maicena",
      "300ml de crema de leche",
      "4 kiwis verdes",
      "2 kiwis amarillos"
    ],
    steps: [
      "Precalentar el horno a 120°C.",
      "Batir las claras a punto nieve, agregar el azúcar de a poco.",
      "Incorporar el vinagre, vainilla y maicena.",
      "Formar un disco sobre bandeja y hornear 90 minutos.",
      "Dejar enfriar completamente en el horno.",
      "Batir la crema y cubrir el merengue.",
      "Decorar con rodajas de kiwi."
    ],
    tips: "Usa kiwis bien maduros para mayor dulzor. Combina verdes y amarillos para un contraste visual.",
  },
  {
    id: 2,
    title: "Smoothie Verde Energizante",
    category: "bebidas",
    difficulty: "Fácil",
    time: "5 min",
    servings: "2 vasos",
    description: "Un smoothie refrescante y nutritivo, ideal para comenzar el día con energía natural.",
    ingredients: [
      "2 kiwis verdes",
      "1 banana madura",
      "1 taza de espinaca",
      "200ml de leche de almendras",
      "1 cda de miel o stevia",
      "Cubos de hielo"
    ],
    steps: [
      "Pelar los kiwis y la banana.",
      "Agregar todos los ingredientes a la licuadora.",
      "Licuar hasta obtener una mezcla homogénea.",
      "Servir inmediatamente con hielo."
    ],
    tips: "Congela la banana en rodajas la noche anterior para un smoothie más cremoso.",
  },
  {
    id: 3,
    title: "Ensalada Tropical con Kiwi",
    category: "ensaladas",
    difficulty: "Fácil",
    time: "15 min",
    servings: "4 porciones",
    description: "Una ensalada fresca y colorida que combina kiwi con pollo y vegetales.",
    ingredients: [
      "3 kiwis verdes en cubos",
      "2 pechugas de pollo cocidas",
      "1 palta/aguacate",
      "100g de rúcula",
      "50g de nueces",
      "Queso de cabra",
      "Aceite de oliva",
      "Jugo de limón",
      "Sal y pimienta"
    ],
    steps: [
      "Cortar el pollo en tiras y el kiwi en cubos.",
      "Disponer la rúcula en una fuente.",
      "Agregar el pollo, kiwi, palta y nueces.",
      "Desmenuzar el queso de cabra por encima.",
      "Aderezar con aceite, limón, sal y pimienta."
    ],
    tips: "El kiwi amarillo queda espectacular en esta ensalada por su dulzor más intenso.",
  },
  {
    id: 4,
    title: "Bowl de Açaí con Kiwi",
    category: "desayunos",
    difficulty: "Fácil",
    time: "10 min",
    servings: "1 porción",
    description: "Un desayuno nutritivo y fotogénico, perfecto para empezar el día con energía.",
    ingredients: [
      "100g de pulpa de açaí congelada",
      "1 banana congelada",
      "2 kiwis en rodajas",
      "Granola",
      "Semillas de chía",
      "Coco rallado",
      "Miel"
    ],
    steps: [
      "Licuar el açaí con la banana hasta obtener una crema espesa.",
      "Verter en un bowl.",
      "Decorar con kiwi, granola, chía y coco.",
      "Rociar con miel al gusto."
    ],
    tips: "No agregues mucho líquido al licuar para mantener la consistencia espesa.",
  },
  {
    id: 5,
    title: "Agua Fresca de Kiwi y Menta",
    category: "bebidas",
    difficulty: "Fácil",
    time: "10 min",
    servings: "1 litro",
    description: "Una bebida refrescante y saludable, ideal para los días de calor.",
    ingredients: [
      "4 kiwis maduros",
      "1 litro de agua fría",
      "Hojas de menta fresca",
      "2 cdas de miel o azúcar",
      "Jugo de 1 limón",
      "Hielo"
    ],
    steps: [
      "Pelar y licuar los kiwis con un poco de agua.",
      "Colar para quitar las semillas si lo prefieres.",
      "Mezclar con el resto del agua, miel y limón.",
      "Agregar hojas de menta y servir con hielo."
    ],
    tips: "Congela cubos de kiwi para usar como hielos decorativos.",
  },
  {
    id: 6,
    title: "Tarta de Crema y Kiwi",
    category: "postres",
    difficulty: "Avanzada",
    time: "120 min",
    servings: "10 porciones",
    description: "Una elegante tarta con base de masa sablée, crema pastelera y kiwis glaseados.",
    ingredients: [
      "Masa sablée (o comprada)",
      "500ml de leche",
      "4 yemas",
      "100g de azúcar",
      "40g de maicena",
      "Esencia de vainilla",
      "6 kiwis",
      "Mermelada de damasco para glasear"
    ],
    steps: [
      "Forrar un molde con la masa y hornear en blanco.",
      "Preparar la crema pastelera y dejar enfriar.",
      "Rellenar la base con la crema.",
      "Decorar con rodajas de kiwi en espiral.",
      "Pincelar con mermelada tibia para dar brillo."
    ],
    tips: "Usa kiwis firmes para que mantengan su forma al cortar.",
  },
  {
    id: 7,
    title: "Ensalada de Frutas Energética",
    category: "ensaladas",
    difficulty: "Fácil",
    time: "15 min",
    servings: "4 porciones",
    description: "Una ensalada de frutas perfecta para cualquier momento del día.",
    ingredients: [
      "3 kiwis (mezcla de verdes y amarillos)",
      "1 mango",
      "1 taza de frutillas",
      "1 naranja",
      "Semillas de chía",
      "Miel",
      "Menta fresca"
    ],
    steps: [
      "Cortar todas las frutas en cubos uniformes.",
      "Mezclar en un bowl grande.",
      "Agregar el jugo de la naranja y miel.",
      "Espolvorear con chía y decorar con menta."
    ],
    tips: "Prepárala justo antes de servir para que las frutas mantengan su textura.",
  },
  {
    id: 8,
    title: "Yogur con Kiwi y Granola",
    category: "desayunos",
    difficulty: "Fácil",
    time: "5 min",
    servings: "1 porción",
    description: "Un desayuno rápido, nutritivo y delicioso.",
    ingredients: [
      "1 taza de yogur natural o griego",
      "2 kiwis en cubos",
      "4 cdas de granola",
      "1 cda de miel",
      "Semillas de lino"
    ],
    steps: [
      "Colocar el yogur en un bowl o vaso.",
      "Agregar los cubos de kiwi.",
      "Cubrir con granola y semillas.",
      "Rociar con miel al gusto."
    ],
    tips: "El kiwi verde ayuda a la digestión gracias a la actinidina, ideal para comenzar el día.",
  },
];

function RecipeCard({ recipe }: { recipe: typeof recipes[0] }) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="p-6 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="secondary">{recipe.difficulty}</Badge>
          <Badge variant="outline">{recipe.time}</Badge>
        </div>
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{recipe.description}</p>
        <p className="text-sm text-[#3f7528] font-medium">{recipe.servings}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" className="w-full" asChild>
          <a href={`#receta-${recipe.id}`}>Ver Receta Completa</a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function RecipeDetail({ recipe }: { recipe: typeof recipes[0] }) {
  return (
    <div id={`receta-${recipe.id}`} className="scroll-mt-24 py-12 border-b last:border-b-0">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Badge>{recipe.category}</Badge>
        <Badge variant="secondary">{recipe.difficulty}</Badge>
        <Badge variant="outline">{recipe.time}</Badge>
        <Badge variant="outline">{recipe.servings}</Badge>
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{recipe.title}</h3>
      <p className="text-muted-foreground mb-8">{recipe.description}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-lg mb-4">🥝 Ingredientes</h4>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3f7528] flex-shrink-0" />
                <span className="text-muted-foreground">{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-4">👨‍🍳 Preparación</h4>
          <ol className="space-y-3">
            {recipe.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3f7528] text-white text-sm flex items-center justify-center font-medium">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-[#3f7528]/10 rounded-lg">
        <p className="text-sm">
          <span className="font-semibold">💡 Tip: </span>
          <span className="text-muted-foreground">{recipe.tips}</span>
        </p>
      </div>
    </div>
  );
}

export default function RecetasPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Recetario</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recetas con Kiwi Argentino
          </h1>
          <p className="text-xl text-muted-foreground">
            Descubre nuevas formas de disfrutar el kiwi. Desde postres irresistibles 
            hasta ensaladas frescas, estas recetas destacan el sabor único de nuestro kiwi.
          </p>
        </div>

        {/* Categories Tabs */}
        <Tabs defaultValue="todas" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 w-auto">
              <TabsTrigger value="todas">Todas</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  <span className="mr-1">{cat.icon}</span>
                  <span className="hidden sm:inline">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="todas">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </TabsContent>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recipes
                  .filter((r) => r.category === cat.id)
                  .map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Recipe Details */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recetas Detalladas</h2>
          {recipes.map((recipe) => (
            <RecipeDetail key={recipe.id} recipe={recipe} />
          ))}
        </section>

        {/* Tips Section */}
        <section className="mt-20 bg-[#3f7528]/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Consejos para Cocinar con Kiwi</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">🌡️ Maduración Perfecta</h4>
                <p className="text-sm text-muted-foreground">
                  Para acelerar la maduración, guarda los kiwis junto a manzanas o bananas. 
                  Un kiwi está listo cuando cede ligeramente a la presión.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">🧊 Conservación</h4>
                <p className="text-sm text-muted-foreground">
                  Los kiwis maduros se conservan hasta 2 semanas en la heladera. 
                  También puedes congelarlos en cubos para smoothies.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">🥛 Lácteos</h4>
                <p className="text-sm text-muted-foreground">
                  La actinidina puede cuajar la leche con el tiempo. 
                  Si combinas kiwi con lácteos, consume inmediatamente.
                </p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">🍖 Marinadas</h4>
                <p className="text-sm text-muted-foreground">
                  La actinidina ablanda las carnes. Usa pulpa de kiwi como 
                  marinada natural para cortes más tiernos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
