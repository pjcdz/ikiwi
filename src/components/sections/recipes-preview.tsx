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
    description: "Bases de merengue con crema batida y kiwi en compota, gelatina y fresco.",
    emoji: "🍰",
  },
  {
    id: 2,
    title: "Smoothie Bowl de Matcha",
    category: "Desayunos",
    time: "10 min",
    difficulty: "Fácil",
    description: "Banana congelada, espinaca, matcha, kiwi, coco rallado y quinoa inflada.",
    emoji: "🥣",
  },
  {
    id: 3,
    title: "Bubble Tea de Kiwi",
    category: "Bebidas",
    time: "40 min",
    difficulty: "Media",
    description: "Té de burbujas con kiwi fresco, tapioca casera y miel.",
    emoji: "🧋",
  },
  {
    id: 4,
    title: "Daifuku de Kiwi Amarillo",
    category: "Postres",
    time: "50 min",
    difficulty: "Alta",
    description: "Dulce japonés de mochi relleno con kiwi gold fresco.",
    emoji: "🍡",
  },
  {
    id: 5,
    title: "Rodajas con Chocolate",
    category: "Postres",
    time: "15 min",
    difficulty: "Fácil",
    description: "Kiwi bañado en chocolate negro con quinoa y chispas de chocolate.",
    emoji: "🍫",
  },
  {
    id: 6,
    title: "Salmón al Kiwi",
    category: "Salados",
    time: "30 min",
    difficulty: "Media",
    description: "Salmón al horno con kiwi caramelizado, tomates cherry y cebolla.",
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
