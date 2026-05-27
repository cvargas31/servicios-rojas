import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TrustedCarousel from "@/components/TrustedCarousel";
import HomeFeatured from "@/components/HomeFeatured";
import HeroStatsCarousel from "@/components/HeroStatsCarousel";

export const metadata: Metadata = {
  title: "Servicios Rojas, S.A. | Ingeniería Civil y Telecomunicaciones en Panamá",
  description:
    "29 años entregando proyectos llave en mano de ingeniería civil, telecomunicaciones y data centers en Panamá. Operadores telecom, gobierno e industria. Cotiza tu proyecto.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Servicios Rojas, S.A. — Ingeniería e Infraestructura en Panamá",
    description:
      "Soluciones llave en mano en telecomunicaciones, ingeniería civil y data centers desde 1997.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero-v2">
        <div className="hero-v2-bg">
          <Image
            src="/images/header-background.jpeg"
            alt="Infraestructura crítica de telecomunicaciones y data centers en Panamá"
            fill
            sizes="100vw"
            priority
          />
          <div className="hero-v2-overlay" />
          <div className="hero-v2-glow-left" aria-hidden="true" />
          <div className="hero-v2-glow-right" aria-hidden="true" />
          <div className="hero-v2-streaks" aria-hidden="true" />
        </div>

        <div className="hero-v2-inner">
          <p className="hero-v2-eyebrow">
            <span>INFRAESTRUCTURA QUE <em>CONECTA</em>, TECNOLOGÍA QUE <em>IMPULSA</em></span>
          </p>

          <h1 className="hero-v2-title">
            <span>Construimos el futuro<br/>de las <em>telecomunicaciones</em></span>
          </h1>

          <p className="hero-v2-cats">
            <span>TORRES <span>•</span> FIBRA ÓPTICA <span>•</span> DATA CENTERS <span>•</span> OBRAS CIVILES ESPECIALIZADAS</span>
          </p>

          <p className="hero-v2-sub">
            <span>Diseñamos y ejecutamos infraestructura crítica con ingeniería de precisión, calidad comprobada y compromiso en cada etapa.</span>
          </p>

          <div className="hero-v2-cta">
            <Link href="/contacto" className="btn-cta-primary">
              <span>Cotiza tu proyecto</span>
            </Link>
            <Link href="/proyectos" className="btn-cta-ghost">
              <span>Ver proyectos</span>
            </Link>
          </div>

          <HeroStatsCarousel />
        </div>

        <div className="hero-v2-badge247" aria-label="Servicio 24/7">
          <div className="hero-v2-badge247-ring">24/7</div>
          <div className="hero-v2-badge247-text">
            <span>Infraestructura<br/>que nunca se detiene</span>
          </div>
        </div>
      </section>

      <TrustedCarousel />

      <Reveal className="purpose">
        <div className="container">
          <div className="purpose-grid">
            <div>
              <span className="eyebrow">Nuestro propósito</span>
              <h2>Construyendo un futuro de infraestructura sostenible</h2>
              <p
                style={{ marginTop: 20, color: "var(--slate-500)", fontSize: 17, lineHeight: 1.8 }}
              >
                Brindamos soluciones integradas en proyectos de ingeniería civil,
                telecomunicaciones, data centers y remodelaciones & construcción comercial. Diseñamos
                y construimos data centers y salas técnicas llave en mano, diferenciándonos por el
                cumplimiento en la ejecución, la calidad y el profesionalismo.
              </p>
              <div className="purpose-tags">
                <span className="tag">Ingeniería Civil</span>
                <span className="tag">Telecomunicaciones</span>
                <span className="tag">Data Centers</span>
                <span className="tag">Remodelaciones</span>
              </div>
              <Link href="/nosotros" className="btn btn-primary">
                <span>Conocer Más</span>
              </Link>
            </div>
            <div className="purpose-image-wrap">
              <div className="purpose-image">
                <Image
                  src="/images/construccion-de-apartamentos/10.jpg"
                  alt="Construcción de edificio de apartamentos por Servicios Rojas"
                  fill
                  sizes="(max-width: 960px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="purpose-stat-float">
                <div className="num">
                  <Counter to={29} />+
                </div>
                <div className="label">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="soluciones">
        <div className="container">
          <div className="soluciones-grid">
            <div className="soluciones-content">
              <h2 className="soluciones-title">
                <span>Soluciones<br/>integrales</span>
              </h2>
              <p className="soluciones-sub">
                <span>Abarcamos cada etapa de tu proyecto con un enfoque integral y especializado.</span>
              </p>
              <Link href="/servicios" className="btn-cta-primary">
                <span>Conoce más</span>
              </Link>
            </div>

            <div className="soluciones-cards">
              {PHASES.map((p) => (
                <div key={p.key} className="soluciones-card">
                  <Image
                    src={p.img}
                    alt={p.title.es}
                    fill
                    sizes="(max-width:760px) 80vw, (max-width:1200px) 33vw, 20vw"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="soluciones-card-label">
                    <span>{p.title.es}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="stats-banner">
        <div className="container">
          <div className="stats-banner-grid">
            <StatBanner to={200} prefix="+" es="Sitios telecom" />
            <StatBanner to={10000} prefix="+" unit="km" es="Fibra óptica" />
            <StatBanner to={5} prefix="+" es="Data centers" />
            <StatBanner to={15} suffix="+" es="Años de experiencia" />
            <StatBanner textEs="Cobertura nacional" es="Panamá" />
          </div>
        </div>
      </Reveal>

      <Reveal className="projects-bg">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Proyectos destacados</span>
            <h2>Proyectos de data centers, telecom e infraestructura crítica</h2>
          </div>
          <HomeFeatured />
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Link href="/proyectos" className="btn btn-dark">
              <span>Ver Todos los Proyectos</span>
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--orange)" }}>
            Hablemos de tu proyecto
          </span>
          <h2>¿Listo para construir<br/>infraestructura de clase mundial?</h2>
          <p>
            Solicita una cotización sin compromiso. Nuestro equipo de ingeniería responderá en
            menos de 24 horas.
          </p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span>Solicitar Cotización</span>
            </Link>
            <a href="tel:+5072298840" className="btn btn-outline">+507 229-8840</a>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function StatBanner({
  to,
  prefix,
  suffix,
  unit,
  textEs,
  es,
}: {
  to?: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
  textEs?: string;
  es: string;
}) {
  const isText = Boolean(textEs);
  return (
    <div>
      <div className={isText ? "num num--text" : "num"}>
        {isText ? (
          <span>{textEs}</span>
        ) : (
          <>
            {prefix && <span className="num-prefix">{prefix}</span>}
            <Counter to={to ?? 0} />
            {unit && <span className="num-unit">{unit}</span>}
            {suffix && <span className="num-suffix">{suffix}</span>}
          </>
        )}
      </div>
      <div className="label">{es}</div>
    </div>
  );
}

const PHASES = [
  {
    key: "design",
    img: "/images/construccion-de-apartamentos/13.jpg",
    title: { es: "Diseño y planeación", en: "Design & planning" },
  },
  {
    key: "build",
    img: "/images/estructura-metalica/5.jpg",
    title: { es: "Construcción", en: "Construction" },
  },
  {
    key: "implementation",
    img: "/images/datacenter-fusion/60.jpg",
    title: { es: "Implementación", en: "Implementation" },
  },
  {
    key: "operations",
    img: "/images/76-sitios-tigo/42.jpg",
    title: { es: "Operación y mantenimiento", en: "Operations & maintenance" },
  },
];

