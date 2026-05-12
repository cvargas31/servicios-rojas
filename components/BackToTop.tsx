"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 240);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (progress / 100) * circumference;

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
    >
      <svg viewBox="0 0 50 50" aria-hidden="true">
        <circle className="track" cx="25" cy="25" r={radius} />
        <circle
          className="progress"
          cx="25"
          cy="25"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <svg className="arrow-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 5l-7 7h4v7h6v-7h4z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
