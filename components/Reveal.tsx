"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
};

export default function Reveal({ children, className = "", as = "section" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as keyof JSX.IntrinsicElements;
  // @ts-expect-error - dynamic tag with ref
  return <Tag ref={ref} className={`reveal ${className}`.trim()}>{children}</Tag>;
}
