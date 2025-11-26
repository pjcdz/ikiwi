import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const recipes = [
  {
    id: 1,
    title: "Mini Pavlovas con Kiwi",
    category: "Postres",
    time: "45 min",
    difficulty: "Media",
    description: "Delicadas bases de merengue con crema batida y kiwi fresco en varias presentaciones.",
    emoji: "🍰",
  },
  {
    id: 2,
    title: "Smoothie Bowl Verde",
    category: "Desayunos",
    time: "10 min",
    difficulty: "Fácil",
    description: "Bowl energizante con banana, espinaca, kiwi y toppings saludables.",
    emoji: "🥣",
  },
  {
    id: 3,
    title: "Ensalada de Kiwi y Burrata",
    category: "Salados",
    time: "15 min",
    difficulty: "Fácil",
    description: "Combinación fresca de kiwi amarillo con burrata, tomates secos y albahaca.",
    emoji: "🥗",
  },
  {
    id: 4,
    title: "Galette de Kiwi",
    category: "Postres",
    time: "60 min",
    difficulty: "Media",
    description: "Tarta rústica con masa casera, ricotta cremosa y kiwis frescos.",
    emoji: "🥧",
  },
  {
    id: 5,
    title: "Margarita de Kiwi",
    category: "Bebidas",
    time: "5 min",
    difficulty: "Fácil",
    description: "Cóctel refrescante con kiwi maduro, tequila, lima y borde escarchado.",
    emoji: "🍸",
  },
  {
    id: 6,
    title: "Salmón con Salsa de Kiwi",
    category: "Salados",
    time: "30 min",
    difficulty: "Media",
    description: "Salmón al horno con una fresca salsa de kiwi, cilantro y pimiento.",
    emoji: "🐟",
  },
];

export function RecipesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Cocina con Kiwi</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recetas Deliciosas
          </h2>
          <p className="text-lg text-muted-foreground">
            Desde postres irresistibles hasta platos salados innovadores. 
            Descubre la versatilidad del kiwi argentino en la cocina.
          </p>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recipes.map((recipe) => (
            <Card 
              key={recipe.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{recipe.category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>⏱️ {recipe.time}</span>
                  </div>
                </div>
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">
                  {recipe.emoji}
                </div>
                <CardTitle className="text-lg">{recipe.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{recipe.description}</CardDescription>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Dificultad:</span>
                  <Badge variant="outline" className="text-xs">{recipe.difficulty}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/recetas">Ver Todas las Recetas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
