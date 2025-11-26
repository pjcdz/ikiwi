"use client";

import { AnimatedSection } from "@/components/animations/animated-section";
import { Badge } from "@/components/ui/badge";

// Posts del Instagram con descripciones visuales del archivo recopilacion_posts_completa.md
const instagramPosts = [
  {
    id: 1,
    type: "recipe",
    title: "Mini Pavlovas",
    likes: 43,
    url: "https://www.instagram.com/p/CeT5vPfOtMr/",
    gradient: "from-pink-400 to-rose-500",
    emoji: "🍰",
  },
  {
    id: 2,
    type: "nature",
    title: "Flores de Kiwi",
    likes: 48,
    url: "https://www.instagram.com/p/CWGkEzOPbyh/",
    gradient: "from-green-400 to-emerald-500",
    emoji: "🌸",
  },
  {
    id: 3,
    type: "recipe",
    title: "Torta de Kiwi",
    likes: 54,
    url: "https://www.instagram.com/p/CWBbLn6P_wp/",
    gradient: "from-lime-400 to-green-500",
    emoji: "🎂",
  },
  {
    id: 4,
    type: "farm",
    title: "Cosecha 20/21",
    likes: 89,
    url: "https://www.instagram.com/p/COlIe2vLyW8/",
    gradient: "from-amber-500 to-orange-500",
    emoji: "🌾",
  },
  {
    id: 5,
    type: "recipe",
    title: "Daifuku Japonés",
    likes: 36,
    url: "https://www.instagram.com/p/CTC3Dk0Lj0B/",
    gradient: "from-purple-400 to-pink-500",
    emoji: "🍡",
  },
  {
    id: 6,
    type: "drink",
    title: "Jugo de Kiwi",
    likes: 70,
    url: "https://www.instagram.com/p/CErm5d0j10s/",
    gradient: "from-cyan-400 to-teal-500",
    emoji: "🧃",
  },
  {
    id: 7,
    type: "recipe",
    title: "Kiwi con Chocolate",
    likes: 72,
    url: "https://www.instagram.com/p/BdvVyQYFQJ-/",
    gradient: "from-amber-600 to-amber-800",
    emoji: "🍫",
  },
  {
    id: 8,
    type: "farm",
    title: "Heladas",
    likes: 77,
    url: "https://www.instagram.com/p/CUXlaEcLDYj/",
    gradient: "from-blue-400 to-indigo-500",
    emoji: "❄️",
  },
  {
    id: 9,
    type: "recipe",
    title: "Helado Artesanal",
    likes: 96,
    url: "https://www.instagram.com/p/B5vnguUldGm/",
    gradient: "from-yellow-400 to-amber-500",
    emoji: "🍦",
  },
];

export function InstagramGallery() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-12">
          <Badge className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-1 mb-4">
            @kiwi_argentino
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            SEGUINOS EN <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">INSTAGRAM</span>
          </h2>
          <p className="text-xl text-gray-600">
            171 posts • 734 seguidores • Recetas, tips y vida en el campo
          </p>
        </AnimatedSection>

        {/* Grid de Instagram */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto mb-12">
          {instagramPosts.map((post, index) => (
            <AnimatedSection 
              key={post.id}
              animation="scale"
              delay={index * 0.05}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:z-10 bg-linear-to-br ${post.gradient} relative`}
              >
                {/* Contenido */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl md:text-6xl group-hover:scale-125 transition-transform duration-300">
                    {post.emoji}
                  </span>
                </div>

                {/* Overlay con info */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-2">
                    <p className="font-bold text-sm md:text-base">{post.title}</p>
                    <p className="text-xs md:text-sm">❤️ {post.likes}</p>
                  </div>
                </div>

                {/* Badge de tipo */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge className="bg-white/90 text-gray-800 text-xs capitalize">
                    {post.type}
                  </Badge>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA de Instagram */}
        <AnimatedSection animation="fadeUp" className="text-center">
          <a
            href="https://instagram.com/kiwi_argentino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <span className="text-2xl">📷</span>
            SEGUIR EN INSTAGRAM
            <span className="text-sm bg-white/20 px-2 py-1 rounded-full">@kiwi_argentino</span>
          </a>
        </AnimatedSection>

        {/* Stats del Instagram */}
        <AnimatedSection animation="stagger" className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-3xl md:text-4xl font-black text-green-600">171</p>
            <p className="text-gray-600 text-sm">Posts</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-3xl md:text-4xl font-black text-pink-600">734</p>
            <p className="text-gray-600 text-sm">Seguidores</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <p className="text-3xl md:text-4xl font-black text-amber-600">5+</p>
            <p className="text-gray-600 text-sm">Años</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
