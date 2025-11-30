"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = "chars" | "words" | "lines" | "fadeUp";

interface AnimatedTitleProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  animation?: AnimationType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  start?: string;
}

export function AnimatedTitle({
  children,
  as: Tag = "h2",
  animation = "words",
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  once = true,
  start = "top 85%",
}: AnimatedTitleProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".anim-element");
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(elements, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(elements, { y: 40, opacity: 0 });

    const tween = gsap.to(elements, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === container) t.kill();
      });
    };
  }, [isReady, delay, stagger, duration, once, start]);

  const renderContent = () => {
    if (animation === "fadeUp" || animation === "lines") {
      return (
        <span className="anim-element inline-block">
          {children}
        </span>
      );
    }

    if (animation === "chars") {
      return children.split("").map((char, i) => (
        <span
          key={i}
          className="anim-element inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }

    // words
    return children.split(" ").map((word, i, arr) => (
      <span key={i} className="inline-block overflow-hidden">
        <span className="anim-element inline-block">
          {word}
        </span>
        {i < arr.length - 1 && "\u00A0"}
      </span>
    ));
  };

  return (
    <Tag 
      ref={containerRef as React.RefObject<HTMLHeadingElement>} 
      className={className}
    >
      {renderContent()}
    </Tag>
  );
}
