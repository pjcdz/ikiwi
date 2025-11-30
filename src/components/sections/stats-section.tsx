"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";

interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  variant?: "inline" | "cards" | "floating";
  columns?: 2 | 3 | 4;
  className?: string;
  darkMode?: boolean;
}

export function StatsSection({
  stats,
  variant = "cards",
  columns = 4,
  className = "",
  darkMode = false,
}: StatsSectionProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  if (variant === "inline") {
    return (
      <ScrollReveal animation="fadeUp" className={className}>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex items-center gap-8">
              <div>
                {stat.icon && <span className="text-2xl mb-2 block">{stat.icon}</span>}
                <p className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-[#3f7528]"}`}>
                  {stat.value}
                </p>
                <p className={`text-sm ${darkMode ? "text-white/70" : "text-gray-600"}`}>{stat.label}</p>
              </div>
              {index < stats.length - 1 && (
                <div className={`hidden md:block w-px h-12 ${darkMode ? "bg-white/20" : "bg-gray-300"}`} />
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    );
  }

  if (variant === "floating") {
    return (
      <ScrollReveal animation="fadeUp" className={className}>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
          <div className={`grid ${gridCols[columns]} gap-6`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                {stat.icon && <span className="text-2xl mb-2 block">{stat.icon}</span>}
                <p className="text-3xl md:text-4xl font-bold text-[#3f7528]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
                {stat.description && <p className="text-xs text-gray-500 mt-1">{stat.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    );
  }

  // cards variant (default)
  return (
    <div className={`grid ${gridCols[columns]} gap-4 md:gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <ScrollReveal key={index} animation="fadeUp" delay={index * 0.1}>
          <div
            className={`${
              darkMode ? "bg-white/10 backdrop-blur-sm" : "bg-white"
            } rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            {stat.icon && <span className="text-3xl mb-3 block">{stat.icon}</span>}
            <p className={`text-3xl md:text-4xl font-bold ${darkMode ? "text-white" : "text-[#3f7528]"}`}>
              {stat.value}
            </p>
            <p className={`text-sm ${darkMode ? "text-white/70" : "text-gray-600"} mt-1`}>{stat.label}</p>
            {stat.description && (
              <p className={`text-xs ${darkMode ? "text-white/50" : "text-gray-500"} mt-2`}>
                {stat.description}
              </p>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
