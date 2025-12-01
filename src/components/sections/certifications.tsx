"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
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
  const [expandedCert, setExpandedCert] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedCert = certifications.find((c) => c.id === expandedCert);

  useEffect(() => {
    if (expandedCert && detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [expandedCert]);

  const categoryColors = {
    origin: { bg: "bg-[#3f7528]/15", text: "text-[#3f7528]", border: "border-[#3f7528]/30", ring: "ring-[#3f7528]/20" },
    organic: { bg: "bg-emerald-500/15", text: "text-emerald-700", border: "border-emerald-500/30", ring: "ring-emerald-500/20" },
    quality: { bg: "bg-blue-500/15", text: "text-blue-700", border: "border-blue-500/30", ring: "ring-blue-500/20" },
    international: { bg: "bg-purple-500/15", text: "text-purple-700", border: "border-purple-500/30", ring: "ring-purple-500/20" },
  };

  const categoryLabels = {
    origin: "Origen",
    organic: "Orgánico",
    quality: "Calidad",
    international: "Internacional",
  };

  return (
    <section className={`relative overflow-hidden ${className}`} id="certificaciones">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/bg-certifications-aerial.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/85 via-[#faf8f5]/70 to-[#faf8f5]/85 backdrop-blur-[2px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#3f7528]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {showTitle && (
          <div className="text-center mb-16 md:mb-20">
            <ScrollReveal animation="fadeUp">
              <span className="inline-block text-[#3f7528] text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-[#3f7528]/10 rounded-full border border-[#3f7528]/20">
                Calidad Certificada
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
                {variant === "preview"
                  ? "Respaldados por las Mejores Certificaciones"
                  : "Nuestras Certificaciones"}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                {variant === "preview"
                  ? "Cada kiwi que producimos cumple con los más altos estándares nacionales e internacionales de calidad y sustentabilidad."
                  : "Nuestro compromiso con la excelencia está avalado por las certificaciones más exigentes del mercado nacional e internacional."}
              </p>
            </ScrollReveal>
          </div>
        )}

        {/* Certifications Grid - Premium Cards */}
        <div
          className={`grid gap-6 md:gap-8 ${
            variant === "preview"
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {displayCertifications.map((cert, index) => {
            const colors = categoryColors[cert.category];
            const isExpanded = expandedCert === cert.id;
            
            return (
              <ScrollReveal key={cert.id} animation="fadeUp" delay={index * 0.1}>
                <div
                  onClick={() => variant === "full" ? setExpandedCert(isExpanded ? null : cert.id) : null}
                  className={`group relative bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border h-full ${
                    isExpanded ? `${colors.border} ring-4 ${colors.ring}` : "border-gray-100/50 hover:border-gray-200"
                  } ${variant === "full" ? "cursor-pointer" : ""}`}
                >
                {/* Top Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                  cert.category === "origin" ? "from-[#3f7528] to-lime-500" :
                  cert.category === "organic" ? "from-emerald-500 to-teal-500" :
                  cert.category === "quality" ? "from-blue-500 to-cyan-500" :
                  "from-purple-500 to-pink-500"
                }`} />

                <div className={`p-6 md:p-8 ${variant === "full" ? "" : "text-center"}`}>
                  {/* Icon Container */}
                  <div className={`${variant === "preview" ? "mx-auto" : ""} w-20 h-20 mb-6 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                    {cert.iconType === "image" ? (
                      <Image
                        src={cert.icon}
                        alt={cert.shortName}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                        unoptimized
                      />
                    ) : (
                      <span className="text-4xl">{cert.icon}</span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <Badge className={`mb-4 ${colors.bg} ${colors.text} border ${colors.border} font-semibold`}>
                    {categoryLabels[cert.category]}
                  </Badge>

                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#3f7528] transition-colors ${
                    variant === "preview" ? "text-base" : "text-xl"
                  }`}>
                    {variant === "preview" ? cert.shortName : cert.name}
                  </h3>

                  {/* Description */}
                  <p className={`text-gray-600 leading-relaxed ${variant === "preview" ? "text-sm" : "text-sm mb-4"}`}>
                    {variant === "preview"
                      ? cert.description
                      : cert.fullDescription}
                  </p>


                </div>
              </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Expanded Detail Panel - Full variant */}
        {variant === "full" && expandedCert && selectedCert && (
          <div
            ref={detailRef}
            className="mt-8 overflow-hidden bg-white/95 backdrop-blur-md rounded-3xl border border-gray-200 shadow-2xl"
          >
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-5">
                  <div className={`w-20 h-20 ${categoryColors[selectedCert.category].bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {selectedCert.iconType === "image" ? (
                      <Image
                        src={selectedCert.icon}
                        alt={selectedCert.shortName}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                        unoptimized
                      />
                    ) : (
                      <span className="text-4xl">{selectedCert.icon}</span>
                    )}
                  </div>
                  <div>
                    <Badge className={`mb-2 ${categoryColors[selectedCert.category].bg} ${categoryColors[selectedCert.category].text} border ${categoryColors[selectedCert.category].border}`}>
                      {categoryLabels[selectedCert.category]}
                    </Badge>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-gray-900">
                      {selectedCert.name}
                    </h3>
                    {selectedCert.year && (
                      <p className="text-gray-500 text-sm mt-1">Otorgada en {selectedCert.year}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setExpandedCert(null)}
                  className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Cerrar detalle"
                >
                  <svg className="w-6 h-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Full Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedCert.fullDescription}
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">✓</div>
                  <h4 className="font-bold text-gray-900 mb-1">Trazabilidad</h4>
                  <p className="text-sm text-gray-600">Control completo del origen</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  <h4 className="font-bold text-gray-900 mb-1">Sustentabilidad</h4>
                  <p className="text-sm text-gray-600">Prácticas responsables</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">⭐</div>
                  <h4 className="font-bold text-gray-900 mb-1">Calidad Premium</h4>
                  <p className="text-sm text-gray-600">Estándares internacionales</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Button - Preview variant */}
        {variant === "preview" && (
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-[#3f7528] hover:bg-[#2d5a1c] text-white px-10 py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/nosotros#certificaciones">
                  Ver Todas las Certificaciones
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        )}


      </div>
    </section>
  );
}
