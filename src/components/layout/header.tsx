"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";

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
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl">🥝</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary leading-tight">iKiwi</span>
                <span className="text-xs text-muted-foreground leading-tight">Kiwi Argentino</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild>
              <Link href="/contacto">Dónde Comprar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full screen overlay below header */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white">
          <div className="px-4 py-6 h-full flex flex-col overflow-y-auto">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-4 py-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
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
