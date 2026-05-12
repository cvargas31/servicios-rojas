type Props = {
  label?: { es: string; en: string };
  logos?: string[];
};

const DEFAULT_LOGOS = [
  "PHOENIX TOWER",
  "TIGO · MILLICOM",
  "CABLE & WIRELESS",
  "HUAWEI",
  "ZTE",
  "CLARO",
  "DIGICEL",
  "ERICSSON",
  "CONTINENTAL TOWERS",
  "RENLAN",
  "GRUPO ITM",
  "EMPRESAS MELO",
  "PANAMA PORTS",
  "KIO NETWORKS",
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
              <span key={`${logo}-${i}`} role="listitem" aria-hidden={i >= logos.length}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
