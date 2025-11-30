"use client";

interface SectionTransitionProps {
  variant?: "wave" | "gradient" | "diagonal" | "organic";
  fromColor?: string;
  toColor?: string;
  height?: number;
  flip?: boolean;
  className?: string;
}

export function SectionTransition({
  variant = "wave",
  fromColor = "#faf8f5",
  toColor = "#faf8f5",
  height = 120,
  flip = false,
  className = "",
}: SectionTransitionProps) {
  const transform = flip ? "scaleY(-1)" : undefined;

  if (variant === "wave") {
    return (
      <div
        className={`w-full overflow-hidden pointer-events-none ${className}`}
        style={{ height, transform, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 115C96 110 192 100 288 92C384 84 480 78 576 78C672 78 768 84 864 87C960 90 1056 90 1152 88C1248 86 1344 82 1392 80L1440 78V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill={toColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "organic") {
    return (
      <div
        className={`w-full overflow-hidden pointer-events-none ${className}`}
        style={{ height, transform, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 100 480 20 720 60C960 100 1200 20 1440 60V120H0V60Z"
            fill={toColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "diagonal") {
    return (
      <div
        className={`w-full overflow-hidden pointer-events-none ${className}`}
        style={{ height, transform, marginTop: flip ? 0 : -1, marginBottom: flip ? -1 : 0 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <polygon points="0,120 1440,0 1440,120" fill={toColor} />
        </svg>
      </div>
    );
  }

  // gradient
  return (
    <div
      className={`w-full pointer-events-none ${className}`}
      style={{
        height,
        background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        marginTop: -1,
        marginBottom: -1,
      }}
    />
  );
}
