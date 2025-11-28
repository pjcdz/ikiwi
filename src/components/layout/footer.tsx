import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  productos: [
    { name: "Kiwi Verde", href: "/productos#verde" },
    { name: "Kiwi Amarillo", href: "/productos#amarillo" },
    { name: "Kiwi Rojo", href: "/productos#rojo" },
    { name: "Kiwi Orgánico", href: "/productos#organico" },
    { name: "Baby Kiwi", href: "/productos#baby" },
  ],
  empresa: [
    { name: "Nuestra Historia", href: "/nosotros" },
    { name: "Empaquetadora", href: "/nosotros#empaquetadora" },
    { name: "Sostenibilidad", href: "/nosotros#sostenibilidad" },
    { name: "Certificaciones", href: "/nosotros#certificaciones" },
    { name: "Trabajá con Nosotros", href: "/trabaja-con-nosotros" },
  ],
  recursos: [
    { name: "Recetas", href: "/recetas" },
    { name: "Beneficios Nutricionales", href: "/nutricion" },
    { name: "Noticias", href: "/noticias" },
    { name: "Preguntas Frecuentes", href: "/faq" },
  ],
  contacto: [
    { name: "Contacto", href: "/contacto" },
    { name: "Dónde Comprar", href: "/contacto#comprar" },
    { name: "Contacto Comercial B2B", href: "/contacto#exportadores" },
    { name: "Exportadores", href: "/contacto#exportadores" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/kiwi_argentino", icon: "📷" },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-amber-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center">
                <span className="text-2xl">🥝</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-amber-800 leading-tight">iKiwi</span>
                <span className="text-xs text-muted-foreground leading-tight">Kiwi Argentino</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              La mayor productora de kiwi de Argentina. Cultivando calidad premium desde Mar del Plata.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Productos</h3>
            <ul className="space-y-2">
              {footerLinks.productos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-2">
              {footerLinks.contacto.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-amber-700 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Sierra de los Padres</p>
              <p>Mar del Plata, Argentina 🇦🇷</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* B2B Contact Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm">
              <span>🤝</span>
              <span className="text-amber-800 font-medium">
                ¿Sos mayorista, restaurante o exportador?
              </span>
            </div>
            <Link
              href="/contacto#exportadores"
              className="text-sm font-semibold text-amber-700 hover:text-amber-900 transition-colors"
            >
              Contacto Comercial →
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} iKiwi - Kiwi Argentino. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Image src="/logo-ig.png" alt="IG Mar y Sierras" width={20} height={20} className="w-5 h-5 object-contain" />
              IG "Kiwi Mar y Sierras"
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/e/ea/USDA_organic_seal.svg" alt="Orgánico" width={20} height={20} className="w-5 h-5 object-contain" unoptimized />
              Orgánico Argentina
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Image src="/logo-globalgap.png" alt="GlobalGAP" width={20} height={20} className="w-5 h-5 object-contain" />
              GlobalGAP
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Image src="/logo-ue-organica.png" alt="Certificación UE" width={20} height={20} className="w-5 h-5 object-contain" />
              Certificación UE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
