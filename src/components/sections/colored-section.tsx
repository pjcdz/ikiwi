"use client";

import { SectionTransition } from "@/components/animations/section-transition";

interface ColoredSectionProps {
  backgroundColor: "green" | "cream" | "beige" | "dark" | "white" | "greenLight";
  backgroundImage?: string;
  backgroundOpacity?: number;
  children: React.ReactNode;
  transition?: "wave" | "organic" | "gradient" | "diagonal" | "none";
  transitionTo?: string;
  transitionPosition?: "top" | "bottom" | "both";
  className?: string;
  containerClassName?: string;
  id?: string;
}

const bgColors = {
  green: "bg-[#3f7528]",
  greenLight: "bg-[#3f7528]/10",
  cream: "bg-[#faf8f5]",
  beige: "bg-[#f5f0e8]",
  dark: "bg-[#1a3311]",
  white: "bg-white",
};

const defaultTransitionColors: Record<string, string> = {
  green: "#faf8f5",
  greenLight: "#faf8f5",
  cream: "#f5f0e8",
  beige: "#faf8f5",
  dark: "#faf8f5",
  white: "#faf8f5",
};

export function ColoredSection({
  backgroundColor,
  backgroundImage,
  backgroundOpacity = 0.5,
  children,
  transition = "none",
  transitionTo,
  transitionPosition = "bottom",
  className = "",
  containerClassName = "",
  id,
}: ColoredSectionProps) {
  const toColor = transitionTo || defaultTransitionColors[backgroundColor];
  const showTopTransition = transition !== "none" && (transitionPosition === "top" || transitionPosition === "both");
  const showBottomTransition = transition !== "none" && (transitionPosition === "bottom" || transitionPosition === "both");

  return (
    <section id={id} className={`relative ${bgColors[backgroundColor]} ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            opacity: backgroundOpacity,
          }}
        />
      )}

      {/* Top Transition */}
      {showTopTransition && (
        <SectionTransition
          variant={transition as "wave" | "organic" | "gradient" | "diagonal"}
          toColor={bgColors[backgroundColor].replace("bg-[", "").replace("]", "").replace("/10", "")}
          height={80}
          flip
          className="absolute -top-1 left-0 right-0 z-10"
        />
      )}

      {/* Content */}
      <div className={`relative z-10 py-16 md:py-24 lg:py-32 ${containerClassName}`}>
        <div className="container mx-auto px-4">{children}</div>
      </div>

      {/* Bottom Transition */}
      {showBottomTransition && (
        <SectionTransition
          variant={transition as "wave" | "organic" | "gradient" | "diagonal"}
          toColor={toColor}
          height={80}
          className="absolute -bottom-1 left-0 right-0 z-10"
        />
      )}
    </section>
  );
}
