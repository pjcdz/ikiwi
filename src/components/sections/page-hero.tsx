"use client";

import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: "green" | "cream" | "beige" | "dark";
  showStats?: boolean;
  stats?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  children?: React.ReactNode;
  className?: string;
  showTransition?: boolean;
}

const bgColors = {
  green: "bg-[#3f7528]",
  cream: "bg-[#faf8f5]",
  beige: "bg-[#f5f0e8]",
  dark: "bg-[#1a3311]",
};

const textColors = {
  green: { title: "text-white", subtitle: "text-lime-300", badge: "text-lime-300" },
  cream: { title: "text-gray-900", subtitle: "text-gray-600", badge: "text-[#3f7528]" },
  beige: { title: "text-gray-900", subtitle: "text-gray-600", badge: "text-[#3f7528]" },
  dark: { title: "text-white", subtitle: "text-white/80", badge: "text-lime-300" },
};

const transitionColors = {
  green: "#faf8f5",
  cream: "#f5f0e8",
  beige: "#faf8f5",
  dark: "#faf8f5",
};

export function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = "cream",
  showStats = false,
  stats = [],
  children,
  className = "",
  showTransition = true,
}: PageHeroProps) {
  const colors = textColors[backgroundColor];

  return (
    <section className={`relative overflow-hidden ${bgColors[backgroundColor]} ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div
            className={`absolute inset-0 ${
              backgroundColor === "green" || backgroundColor === "dark"
                ? "bg-gradient-to-br from-[#3f7528]/95 via-[#3f7528]/90 to-[#2d5a1c]/95"
                : "bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/95 to-[#faf8f5]/80"
            }`}
          />
        </>
      )}

      {/* Decorative blurs for green/dark background */}
      {(backgroundColor === "green" || backgroundColor === "dark") && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          {badge && (
            <ScrollReveal animation="fadeUp" className="mb-4">
              <span
                className={`inline-block ${colors.badge} text-sm font-semibold tracking-[0.3em] uppercase`}
              >
                {badge}
              </span>
            </ScrollReveal>
          )}

          {/* Title */}
          <AnimatedTitle
            as="h1"
            animation="words"
            className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 ${colors.title}`}
            stagger={0.08}
          >
            {title}
          </AnimatedTitle>

          {/* Title Highlight (optional second line) */}
          {titleHighlight && (
            <AnimatedTitle
              as="p"
              animation="words"
              className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-lime-300 mb-6"
              stagger={0.08}
              delay={0.1}
            >
              {titleHighlight}
            </AnimatedTitle>
          )}

          {/* Subtitle */}
          {subtitle && (
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className={`text-xl md:text-2xl ${colors.subtitle} mb-4`}>{subtitle}</p>
            </ScrollReveal>
          )}

          {/* Description */}
          {description && (
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className={`text-lg ${colors.subtitle} max-w-2xl mx-auto`}>{description}</p>
            </ScrollReveal>
          )}

          {/* Stats */}
          {showStats && stats.length > 0 && (
            <ScrollReveal animation="fadeUp" delay={0.15}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p
                      className={`text-3xl md:text-4xl font-bold ${
                        backgroundColor === "green" || backgroundColor === "dark"
                          ? "text-white"
                          : "text-[#3f7528]"
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className={`text-sm ${colors.subtitle}`}>{stat.label}</p>
                    {stat.description && (
                      <p className={`text-xs ${colors.subtitle} mt-1`}>{stat.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Additional children */}
          {children}
        </div>
      </div>

      {/* Section Transition */}
      {showTransition && (
        <SectionTransition
          variant="wave"
          toColor={transitionColors[backgroundColor]}
          height={100}
          className="absolute -bottom-1 left-0 right-0"
        />
      )}
    </section>
  );
}
