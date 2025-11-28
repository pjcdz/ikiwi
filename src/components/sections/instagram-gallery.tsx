"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/animations/animated-section";
import { Badge } from "@/components/ui/badge";

// Posts del Instagram con imágenes reales
const instagramPosts = [
  {
    id: 1,
    type: "recipe",
    title: "Mini Pavlovas",
    likes: 43,
    url: "https://www.instagram.com/p/CeT5vPfOtMr/",
    image: "/ig-home-mini-pavlovas.png",
    overlayColor: "from-pink-500/30 to-rose-600/40",
    emoji: "🍰",
  },
  {
    id: 2,
    type: "nature",
    title: "Flores de Kiwi",
    likes: 48,
    url: "https://www.instagram.com/p/CWGkEzOPbyh/",
    image: "/ig-home-flores.png",
    overlayColor: "from-green-500/30 to-emerald-600/40",
    emoji: "🌸",
  },
  {
    id: 3,
    type: "recipe",
    title: "Torta de Kiwi",
    likes: 54,
    url: "https://www.instagram.com/p/CWBbLn6P_wp/",
    image: "/ig-home-torta.png",
    overlayColor: "from-lime-500/30 to-green-600/40",
    emoji: "🎂",
  },
  {
    id: 4,
    type: "farm",
    title: "Cosecha 20/21",
    likes: 89,
    url: "https://www.instagram.com/p/COlIe2vLyW8/",
    image: "/ig-home-cosecha.png",
    overlayColor: "from-amber-500/30 to-orange-600/40",
    emoji: "🌾",
  },
  {
    id: 5,
    type: "recipe",
    title: "Daifuku Japonés",
    likes: 36,
    url: "https://www.instagram.com/p/CTC3Dk0Lj0B/",
    image: "/ig-home-daifuku.png",
    overlayColor: "from-purple-500/30 to-pink-600/40",
    emoji: "🍡",
  },
  {
    id: 6,
    type: "drink",
    title: "Jugo de Kiwi",
    likes: 70,
    url: "https://www.instagram.com/p/CErm5d0j10s/",
    image: "/ig-home-jugo.png",
    overlayColor: "from-cyan-500/30 to-teal-600/40",
    emoji: "🧃",
  },
  {
    id: 7,
    type: "recipe",
    title: "Kiwi con Chocolate",
    likes: 72,
    url: "https://www.instagram.com/p/BdvVyQYFQJ-/",
    image: "/ig-home-chocolate.png",
    overlayColor: "from-amber-600/30 to-amber-800/40",
    emoji: "🍫",
  },
  {
    id: 8,
    type: "farm",
    title: "Heladas",
    likes: 77,
    url: "https://www.instagram.com/p/CUXlaEcLDYj/",
    image: "/ig-home-heladas.png",
    overlayColor: "from-blue-500/30 to-indigo-600/40",
    emoji: "❄️",
  },
  {
    id: 9,
    type: "recipe",
    title: "Helado Artesanal",
    likes: 96,
    url: "https://www.instagram.com/p/B5vnguUldGm/",
    image: "/ig-home-helado.png",
    overlayColor: "from-yellow-500/30 to-amber-600/40",
    emoji: "🍦",
  },
];

export function InstagramGallery() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Background Image - bg-fixed solo en desktop (no funciona en mobile) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: "url('/bg-instagram-vines.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/80 via-[#faf8f5]/65 to-[#faf8f5]/80 md:from-[#faf8f5]/70 md:via-[#faf8f5]/55 md:to-[#faf8f5]/70" />
      <div className="container mx-auto px-4 relative z-10">
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
                className="group block aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:z-10 relative"
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 33vw, 250px"
                  />
                </div>
                
                {/* Overlay con gradiente sutil */}
                <div className={`absolute inset-0 bg-gradient-to-t ${post.overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Overlay con info en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center p-2">
                    <span className="text-3xl md:text-4xl mb-2 block">{post.emoji}</span>
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
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-8 md:px-10 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1"
          >
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
              alt="Instagram" 
              width={28} 
              height={28} 
              className="w-6 h-6 md:w-7 md:h-7" 
              unoptimized 
            />
            <span>SEGUIR EN INSTAGRAM</span>
          </a>
        </AnimatedSection>

        {/* Stats del Instagram */}
        <AnimatedSection animation="stagger" className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
          <div className="text-center bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <p className="text-3xl md:text-4xl font-black text-amber-700">171</p>
            <p className="text-gray-600 text-sm">Posts</p>
          </div>
          <div className="text-center bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <p className="text-3xl md:text-4xl font-black text-pink-600">734</p>
            <p className="text-gray-600 text-sm">Seguidores</p>
          </div>
          <div className="text-center bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <p className="text-3xl md:text-4xl font-black text-amber-600">5+</p>
            <p className="text-gray-600 text-sm">Años</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
