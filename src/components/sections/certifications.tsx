"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
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
            <span className="inline-block text-[#3f7528] text-sm font-bold tracking-[0.3em] uppercase mb-4 px-4 py-2 bg-[#3f7528]/10 rounded-full border border-[#3f7528]/20">
              Calidad Certificada
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              {variant === "preview"
                ? "Respaldados por las Mejores Certificaciones"
                : "Nuestras Certificaciones"}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {variant === "preview"
                ? "Cada kiwi que producimos cumple con los más altos estándares nacionales e internacionales de calidad y sustentabilidad."
                : "Nuestro compromiso con la excelencia está avalado por las certificaciones más exigentes del mercado nacional e internacional."}
            </p>
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
              <div
                key={cert.id}
                onClick={() => variant === "full" ? setExpandedCert(isExpanded ? null : cert.id) : null}
                className={`group relative bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border ${
                  isExpanded ? `${colors.border} ring-4 ${colors.ring}` : "border-gray-100/50 hover:border-gray-200"
                } ${variant === "full" ? "cursor-pointer" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
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

                  {/* Year Badge - Full variant */}
                  {variant === "full" && cert.year && (
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Otorgada en {cert.year}
                      </span>
                      <span className={`text-xs font-semibold ${colors.text} flex items-center gap-1`}>
                        {isExpanded ? "Cerrar" : "Ver más"}
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>
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
        )}

        {/* Bottom Stats Banner - Full variant */}
        {variant === "full" && (
          <div className="mt-16 relative">
            {/* Background with gradient and pattern */}
            <div className="bg-gradient-to-r from-[#3f7528] via-[#4a8a30] to-[#3f7528] rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden relative">
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              {/* Decorative blur elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                  <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-lime-200 px-5 py-2 rounded-full text-sm font-semibold border border-white/20 mb-4">
                    <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                    Nuestro Compromiso
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-black text-white">
                    Calidad que Trasciende Fronteras
                  </h3>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="w-14 h-14 mx-auto mb-4 bg-lime-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">🏅</span>
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">6</div>
                      <div className="text-white/70 text-sm font-medium">Certificaciones Activas</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="w-14 h-14 mx-auto mb-4 bg-lime-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">🌍</span>
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">4</div>
                      <div className="text-white/70 text-sm font-medium">Países de Exportación</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="w-14 h-14 mx-auto mb-4 bg-lime-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">🏆</span>
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">2022</div>
                      <div className="text-white/70 text-sm font-medium">Primera IG Argentina</div>
                    </div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="w-14 h-14 mx-auto mb-4 bg-lime-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">✓</span>
                      </div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">100%</div>
                      <div className="text-white/70 text-sm font-medium">Trazabilidad Garantizada</div>
                    </div>
                  </div>
                </div>

                {/* Bottom tagline */}
                <div className="text-center mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/60 text-sm flex items-center justify-center gap-2">
                    <span className="text-lime-400">🥝</span>
                    Cada kiwi cuenta una historia de calidad y compromiso
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
