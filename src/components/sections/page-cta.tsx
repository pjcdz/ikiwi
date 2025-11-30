"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface PageCTAProps {
  icon?: string;
  title: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: "green" | "cream" | "dark" | "greenLight";
  showCertifications?: boolean;
  certifications?: Array<{
    name: string;
    logo: string;
  }>;
  className?: string;
}

const variantStyles = {
  green: {
    bg: "bg-[#3f7528]",
    title: "text-white",
    description: "text-white/80",
    primaryBtn: "bg-white text-[#3f7528] hover:bg-lime-100",
    secondaryBtn: "border-white/30 text-white hover:bg-white/10",
  },
  greenLight: {
    bg: "bg-[#3f7528]/10",
    title: "text-gray-900",
    description: "text-gray-600",
    primaryBtn: "bg-[#3f7528] text-white hover:bg-[#4a8a30]",
    secondaryBtn: "border-[#3f7528]/30 text-[#3f7528] hover:bg-[#3f7528]/10",
  },
  cream: {
    bg: "bg-[#faf8f5]",
    title: "text-gray-900",
    description: "text-gray-600",
    primaryBtn: "bg-[#3f7528] text-white hover:bg-[#4a8a30]",
    secondaryBtn: "border-gray-300 text-gray-700 hover:bg-gray-100",
  },
  dark: {
    bg: "bg-[#1a3311]",
    title: "text-white",
    description: "text-white/70",
    primaryBtn: "bg-lime-400 text-[#1a3311] hover:bg-lime-300",
    secondaryBtn: "border-white/30 text-white hover:bg-white/10",
  },
};

export function PageCTA({
  icon,
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "greenLight",
  showCertifications = false,
  certifications = [],
  className = "",
}: PageCTAProps) {
  const styles = variantStyles[variant];

  return (
    <section className={`${styles.bg} py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          {icon && (
            <ScrollReveal animation="scale" className="mb-4">
              <span className="text-5xl">{icon}</span>
            </ScrollReveal>
          )}

          {/* Title */}
          <AnimatedTitle
            as="h2"
            animation="words"
            className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black mb-4 ${styles.title}`}
            stagger={0.08}
          >
            {title}
          </AnimatedTitle>

          {/* Description */}
          {description && (
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className={`text-lg md:text-xl ${styles.description} mb-8`}>{description}</p>
            </ScrollReveal>
          )}

          {/* Buttons */}
          {(primaryButton || secondaryButton) && (
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryButton && (
                  <Link
                    href={primaryButton.href}
                    className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${styles.primaryBtn}`}
                  >
                    {primaryButton.text}
                  </Link>
                )}
                {secondaryButton && (
                  <Link
                    href={secondaryButton.href}
                    className={`inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${styles.secondaryBtn}`}
                  >
                    {secondaryButton.text}
                  </Link>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Certifications */}
          {showCertifications && certifications.length > 0 && (
            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="mt-12 pt-8 border-t border-current/10">
                <p className={`text-sm ${styles.description} mb-4`}>Certificaciones</p>
                <div className="flex flex-wrap justify-center items-center gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md"
                    >
                      <Image
                        src={cert.logo}
                        alt={cert.name}
                        width={60}
                        height={40}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
