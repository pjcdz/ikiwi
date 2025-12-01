"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "stagger";
  delay?: number;
  duration?: number;
  staggerDelay?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  staggerDelay = 0.08,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const animations: Record<string, gsap.TweenVars> = {
        fadeUp: { y: 60, opacity: 0 },
        fadeIn: { opacity: 0 },
        slideLeft: { x: -100, opacity: 0 },
        slideRight: { x: 100, opacity: 0 },
        scale: { scale: 0.8, opacity: 0 },
        stagger: { y: 40, opacity: 0 },
      };

      const initial = animations[animation];

      if (animation === "stagger") {
        const children = element.children;
        gsap.set(children, initial);
        
        gsap.to(children, {
          y: 0,
          opacity: 1,
          duration,
          stagger: staggerDelay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay,
        });
      } else {
        gsap.set(element, initial);
        
        gsap.to(element, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay,
        });
      }
    }, element);

    return () => ctx.revert();
  }, [animation, delay, duration, staggerDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
