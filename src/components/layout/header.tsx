"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Briefcase } from "lucide-react";

const navigation = [
  { name: "Inicio", href: "/", icon: "🏠" },
  { name: "Nuestros Kiwis", href: "/productos", icon: "🥝" },
  { name: "Nosotros", href: "/nosotros", icon: "👨‍🌾" },
  { name: "Nutrición", href: "/nutricion", icon: "💪" },
  { name: "Recetas", href: "/recetas", icon: "🍽️" },
  { name: "Noticias", href: "/noticias", icon: "📰" },
  { name: "Contacto", href: "/contacto", icon: "✉️" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed-header fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          {/* Logo - Fixed width to balance with right side */}
          <div className="flex-1 flex justify-start min-w-0">
            <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => setIsOpen(false)}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 flex-shrink-0">
                  <Image 
                    src="/logo-ikiwi-recortado.png"
                    alt="iKiwi Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-green-800 leading-tight">iKiwi</span>
                  <span className="text-xs text-muted-foreground leading-tight hidden sm:block">Kiwi Argentino</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered - Only show on xl screens */}
          <nav className="hidden xl:flex items-center space-x-0.5 justify-center shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-2.5 py-2 text-sm font-medium text-muted-foreground hover:text-green-700 transition-colors rounded-md hover:bg-green-50 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop - Fixed width to balance with left side */}
          <div className="hidden xl:flex flex-1 items-center justify-end space-x-2 min-w-0">
            <Button asChild variant="outline" size="sm" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white shrink-0 h-9">
              <Link href="/trabaja-con-nosotros">
                <Briefcase className="mr-1.5 h-4 w-4" />
                <span className="hidden 2xl:inline">Trabajá con Nosotros</span>
                <span className="2xl:hidden">Trabajá</span>
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-green-700 hover:bg-green-800 shrink-0 h-9">
              <Link href="/contacto">Dónde Comprar</Link>
            </Button>
          </div>
          
          {/* Simplified CTA for medium screens (lg only) */}
          <div className="hidden lg:flex xl:hidden items-center space-x-2">
            <Button asChild size="sm" className="bg-green-700 hover:bg-green-800">
              <Link href="/contacto">Dónde Comprar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Show on screens smaller than xl */}
          <button 
            className="xl:hidden p-2 -mr-2 lg:ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay below header */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white">
          <div className="px-4 py-6 h-full flex flex-col overflow-y-auto">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 text-lg font-medium text-foreground hover:text-green-700 hover:bg-green-50 rounded-xl transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Trabajá con Nosotros - Destacado */}
              <Link
                href="/trabaja-con-nosotros"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-4 text-lg font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-xl transition-colors mt-2"
              >
                <span className="text-2xl">💼</span>
                <span>Trabajá con Nosotros</span>
              </Link>
            </div>
            
            {/* CTA Button at bottom */}
            <div className="mt-auto pt-6 border-t border-border/50 pb-8">
              <Button asChild size="lg" className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg">
                <Link href="/contacto" onClick={() => setIsOpen(false)}>
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Dónde Comprar
                </Link>
              </Button>
              
              {/* Social/Contact info */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Sierra de los Padres, Mar del Plata 🇦🇷
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
