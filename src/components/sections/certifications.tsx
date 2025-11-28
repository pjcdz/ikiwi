import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  certifications,
  getPreviewCertifications,
  type Certification,
} from "@/lib/certifications";

interface CertificationsProps {
  variant?: "preview" | "full";
  showTitle?: boolean;
  className?: string;
}

export function Certifications({
  variant = "preview",
  showTitle = true,
  className = "",
}: CertificationsProps) {
  const displayCertifications =
    variant === "preview" ? getPreviewCertifications(4) : certifications;

  return (
    <section className={`py-16 md:py-24 relative ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/bg-certifications-aerial.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/75 via-[#faf8f5]/65 to-[#faf8f5]/75" />
      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Calidad Certificada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {variant === "preview"
                ? "Respaldados por las Mejores Certificaciones"
                : "Nuestras Certificaciones"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {variant === "preview"
                ? "Cada kiwi que producimos cumple con los más altos estándares nacionales e internacionales de calidad y sustentabilidad."
                : "Nuestro compromiso con la excelencia está avalado por las certificaciones más exigentes del mercado nacional e internacional."}
            </p>
          </div>
        )}

        <div
          className={`grid gap-6 ${
            variant === "preview"
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {displayCertifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              variant={variant}
            />
          ))}
        </div>

        {variant === "preview" && (
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/nosotros#certificaciones">
                Ver Todas las Certificaciones
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

interface CertificationCardProps {
  certification: Certification;
  variant: "preview" | "full";
}

function CertificationCard({ certification, variant }: CertificationCardProps) {
  const categoryColors = {
    origin: "bg-amber-100 text-amber-800",
    organic: "bg-green-100 text-green-800",
    quality: "bg-blue-100 text-blue-800",
    international: "bg-purple-100 text-purple-800",
  };

  const categoryLabels = {
    origin: "Origen",
    organic: "Orgánico",
    quality: "Calidad",
    international: "Internacional",
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white/90 backdrop-blur-sm">
      <CardContent className={`p-6 ${variant === "full" ? "space-y-4" : "text-center"}`}>
        <div className={`${variant === "preview" ? "mb-4" : "mb-3"} flex ${variant === "preview" ? "justify-center" : "justify-start"}`}>
          <div className="w-16 h-16 flex items-center justify-center">
            {certification.iconType === "image" ? (
              <Image
                src={certification.icon}
                alt={certification.shortName}
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                unoptimized
              />
            ) : (
              <span className="text-5xl">{certification.icon}</span>
            )}
          </div>
        </div>

        {variant === "full" && (
          <Badge className={categoryColors[certification.category]}>
            {categoryLabels[certification.category]}
          </Badge>
        )}

        <h3 className={`font-semibold ${variant === "preview" ? "mb-2" : "text-lg mb-2"}`}>
          {variant === "preview" ? certification.shortName : certification.name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {variant === "preview"
            ? certification.description
            : certification.fullDescription}
        </p>

        {variant === "full" && certification.year && (
          <p className="text-xs text-muted-foreground mt-2">
            Otorgada en {certification.year}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
