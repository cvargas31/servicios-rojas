"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

type Stat = {
  icon: () => JSX.Element;
  value: string;
  label: string;
};

const STATS: Stat[] = [
  {
    icon: IconTower,
    value: "+200",
    label: "Sitios telecom ejecutados",
  },
  {
    icon: IconFiber,
    value: "+10,000 km",
    label: "Fibra óptica desplegada",
  },
  {
    icon: IconRack,
    value: "+5",
    label: "Data centers construidos",
  },
  {
    icon: IconShield,
    value: "15+",
    label: "Años en infraestructura crítica",
  },
  {
    icon: IconMap,
    value: "Cobertura nacional",
    label: "Panamá",
  },
];

export default function HeroStatsCarousel() {
  return (
    <>
      <ul className="hero-v2-stats" aria-label="Servicios Rojas key metrics">
        {STATS.map((s, i) => (
          <li key={i}>
            <s.icon />
            <div>
              <strong>
                <span>{s.value}</span>
              </strong>
              <span>{s.label}</span>
            </div>
          </li>
        ))}
      </ul>
      <MobileStatsCarousel />
    </>
  );
}

function MobileStatsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", (api) => {
      setSnaps(api.scrollSnapList());
      onSelect(api);
    });
  }, [emblaApi, onSelect]);

  const scrollTo = (i: number) => emblaApi?.scrollTo(i);

  return (
    <div className="hero-stats-mobile" aria-label="Servicios Rojas key metrics">
      <div className="hero-stats-mobile-viewport" ref={emblaRef}>
        <div className="hero-stats-mobile-track">
          {STATS.map((s, i) => (
            <div key={i} className="hero-stats-mobile-slide">
              <div className="hero-stats-mobile-card">
                <s.icon />
                <div>
                  <strong>
                    <span>{s.value}</span>
                  </strong>
                  <span>{s.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-stats-mobile-dots" role="tablist">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={selected === i}
            aria-label={`Slide ${i + 1}`}
            className={selected === i ? "active" : undefined}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

function IconTower() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 21l3-9M19 21l-3-9M12 3v18M8 12h8M9.5 8h5M10.5 5h3" />
      <circle cx="12" cy="3" r="1" />
    </svg>
  );
}
function IconFiber() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17c4 0 4-10 8-10s4 10 8 10" />
      <circle cx="3" cy="17" r="1.6" fill="currentColor" />
      <circle cx="19" cy="17" r="1.6" fill="currentColor" />
    </svg>
  );
}
function IconRack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="7" y1="7" x2="14" y2="7" />
      <line x1="7" y1="12" x2="14" y2="12" />
      <line x1="7" y1="17" x2="14" y2="17" />
      <circle cx="17" cy="7" r="0.8" fill="currentColor" />
      <circle cx="17" cy="12" r="0.8" fill="currentColor" />
      <circle cx="17" cy="17" r="0.8" fill="currentColor" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-7-7.5-7-12a7 7 0 0114 0c0 4.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
