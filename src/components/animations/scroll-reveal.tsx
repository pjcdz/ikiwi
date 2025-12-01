"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "stagger";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  stagger?: number;
  once?: boolean;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.05,
  stagger = 0.1,
  once = true,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const getAnimationProps = () => {
      switch (animation) {
        case "fadeUp":
          return { from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1 } };
        case "fadeIn":
          return { from: { opacity: 0 }, to: { opacity: 1 } };
        case "slideLeft":
          return { from: { x: 60, opacity: 0 }, to: { x: 0, opacity: 1 } };
        case "slideRight":
          return { from: { x: -60, opacity: 0 }, to: { x: 0, opacity: 1 } };
        case "scale":
          return { from: { scale: 0.9, opacity: 0 }, to: { scale: 1, opacity: 1 } };
        case "stagger":
          return { from: { y: 30, opacity: 0 }, to: { y: 0, opacity: 1 } };
        default:
          return { from: { y: 50, opacity: 0 }, to: { y: 0, opacity: 1 } };
      }
    };

    const { from, to } = getAnimationProps();
    const isStagger = animation === "stagger";
    const targets = isStagger ? element.children : element;

    gsap.set(targets, from);

    const tween = gsap.to(targets, {
      ...to,
      duration,
      delay,
      stagger: isStagger ? stagger : 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: `top ${100 - threshold * 100}%`,
        toggleActions: once ? "play none none none" : "play reverse play reverse",
        onEnter: () => setIsVisible(true),
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === element) t.kill();
      });
    };
  }, [animation, delay, duration, threshold, stagger, once]);

  return (
    <div ref={ref} className={className} style={{ visibility: isVisible ? "visible" : "hidden" }}>
      {children}
    </div>
  );
}
