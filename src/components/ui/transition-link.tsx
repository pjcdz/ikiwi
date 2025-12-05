"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  onClick,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    // If default prevented (e.g. by onClick), don't proceed
    if (e.defaultPrevented) return;

    e.preventDefault();

    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      router.push(href);
      return;
    }

    document.startViewTransition(async () => {
      router.push(href);
      // Small delay to allow Next.js to start rendering the new route
      await sleep(50);
    });
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
