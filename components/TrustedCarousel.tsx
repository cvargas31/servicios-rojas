import Image from "next/image";

type Logo = { src: string; alt: string };

type Props = {
  label?: { es: string; en: string };
  logos?: Logo[];
};

const DEFAULT_LOGOS: Logo[] = [
  { src: "/images/logos/128.png", alt: "Phoenix Tower International" },
  { src: "/images/logos/tigo.png", alt: "Tigo" },
  { src: "/images/logos/cwlogo.jpg", alt: "Cable & Wireless Panamá" },
  { src: "/images/logos/122.png", alt: "Huawei" },
  { src: "/images/logos/126.png", alt: "ZTE" },
  { src: "/images/logos/121.png", alt: "Claro" },
  { src: "/images/logos/123.png", alt: "Digicel" },
  { src: "/images/logos/124.png", alt: "Ericsson" },
  { src: "/images/logos/127.jpg", alt: "Continental Towers" },
  { src: "/images/logos/125.png", alt: "Renlan" },
];

export default function TrustedCarousel({
  label = {
    es: "Empresas líderes que confían en nuestra ingeniería",
    en: "Industry leaders that trust our engineering",
  },
  logos = DEFAULT_LOGOS,
}: Props) {
  const track = [...logos, ...logos];

  return (
    <section className="trusted-bar">
      <div className="container">
        <div className="trusted-label" data-es>{label.es}</div>
        <div className="trusted-label" data-en>{label.en}</div>
        <div className="trusted-carousel" aria-label={label.en}>
          <div className="trusted-track" role="list">
            {track.map((logo, i) => (
              <span
                key={`${logo.src}-${i}`}
                role="listitem"
                aria-hidden={i >= logos.length}
                className="trusted-logo"
              >
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
    </section>
  );
}
