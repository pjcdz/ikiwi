import Link from "next/link";
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
    { name: "Productores", href: "/nosotros#productores" },
    { name: "Sostenibilidad", href: "/nosotros#sostenibilidad" },
    { name: "Certificaciones", href: "/nosotros#certificaciones" },
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
    { name: "Exportadores", href: "/contacto#exportadores" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/kiwi_argentino", icon: "📷" },
];

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl">🥝</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary leading-tight">iKiwi</span>
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
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} iKiwi - Kiwi Argentino. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              🏅 Indicación Geográfica "Kiwi Mar y Sierras"
            </span>
            <span className="text-xs text-muted-foreground">
              🌱 Certificación Orgánica
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
