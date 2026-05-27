"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type Logo = { src: string; alt: string };

type Props = {
  title?: string;
  subtitle?: string;
  logos?: Logo[];
};

const DEFAULT_LOGOS: Logo[] = [
  { src: "/images/logos/128.png", alt: "Phoenix Tower International" },
  { src: "/images/logos/tigo.png", alt: "Tigo" },
  { src: "/images/logos/cwlogo.png", alt: "Cable & Wireless Panamá" },
  { src: "/images/logos/122.png", alt: "Huawei" },
  { src: "/images/logos/126.png", alt: "ZTE" },
  { src: "/images/logos/121.png", alt: "Claro" },
  { src: "/images/logos/123.png", alt: "Digicel" },
  { src: "/images/logos/124.png", alt: "Ericsson" },
  { src: "/images/logos/127.png", alt: "Continental Towers" },
  { src: "/images/logos/125.png", alt: "Renlan" },
];

export default function TrustedCarousel({
  title = "Confían en nosotros",
  subtitle = "Empresas líderes que confían en nuestra experiencia para sus proyectos más importantes.",
  logos = DEFAULT_LOGOS,
}: Props) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: false },
    [AutoScroll({ speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  return (
    <section className="trusted-bar">
      <div className="container">
        <div className="trusted-head">
          <h2 className="trusted-title">
            <span>{title}</span>
          </h2>
          <p className="trusted-subtitle">
            <span>{subtitle}</span>
          </p>
        </div>
        <div className="trusted-carousel" aria-label={title}>
          <div className="trusted-viewport" ref={emblaRef}>
            <div className="trusted-track" role="list">
              {logos.map((logo) => (
                <span key={logo.src} role="listitem" className="trusted-logo">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={200}
                    height={80}
                    sizes="200px"
                    loading="lazy"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
