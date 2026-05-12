import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TrustedCarousel from "@/components/TrustedCarousel";

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
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="eyebrow" data-es>Ingeniería e infraestructura · Panamá</span>
              <span className="eyebrow" data-en>Engineering & infrastructure · Panama</span>
              <h1>
                <span data-es>Construyendo la <em>infraestructura</em> que mueve a Panamá</span>
                <span data-en>Building the <em>infrastructure</em> that moves Panama</span>
              </h1>
              <p className="hero-sub">
                <span data-es>
                  Soluciones integradas en ingeniería civil, telecomunicaciones y remodelaciones &
                  construcción comercial. Proyectos llave en mano para operadores, gobierno y
                  desarrolladores industriales desde 1997.
                </span>
                <span data-en>
                  Integrated solutions across civil engineering, telecommunications and remodeling
                  & commercial construction. Turnkey projects for operators, government and
                  industrial developers since 1997.
                </span>
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-primary">
                  <span data-es>Solicitar Cotización</span>
                  <span data-en>Request Quote</span>
                </Link>
                <Link href="/proyectos" className="btn btn-outline">
                  <span data-es>Ver Proyectos</span>
                  <span data-en>View Projects</span>
                </Link>
              </div>
              <div className="hero-trust">
                <span className="hero-trust-text" data-es>Confían en nosotros:</span>
                <span className="hero-trust-text" data-en>Trusted by:</span>
                <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>
                  PHOENIX TOWER · TIGO · CABLE &amp; WIRELESS · HUAWEI · ZTE · CLARO
                </span>
              </div>
            </div>
            <div className="hero-stats-card">
              <h3>
                <small data-es>Resultados que importan</small>
                <small data-en>Results that matter</small>
                <span data-es>29 años de proyectos llave en mano</span>
                <span data-en>29 years of turnkey projects</span>
              </h3>
              <div className="hero-stat-row">
                <div className="v">1997</div>
                <div className="k" data-es>Año de fundación<br/>en Panamá</div>
                <div className="k" data-en>Founded<br/>in Panama</div>
              </div>
              <div className="hero-stat-row">
                <div className="v">200+</div>
                <div className="k" data-es>Sitios telecom<br/>en mantenimiento</div>
                <div className="k" data-en>Telecom sites<br/>under maintenance</div>
              </div>
              <div className="hero-stat-row">
                <div className="v">3</div>
                <div className="k" data-es>Áreas de negocio<br/>integradas</div>
                <div className="k" data-en>Integrated<br/>business areas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedCarousel />

      <Reveal className="purpose">
        <div className="container">
          <div className="purpose-grid">
            <div>
              <span className="eyebrow" data-es>Nuestro propósito</span>
              <span className="eyebrow" data-en>Our purpose</span>
              <h2 data-es>Construyendo un futuro de infraestructura sostenible</h2>
              <h2 data-en>Building a sustainable infrastructure future</h2>
              <p
                style={{ marginTop: 20, color: "var(--slate-500)", fontSize: 17, lineHeight: 1.8 }}
                data-es
              >
                Brindamos soluciones integradas en proyectos de ingeniería civil,
                telecomunicaciones y remodelaciones & construcción comercial. Desarrollamos
                proyectos llave en mano, diferenciándonos por el cumplimiento en la ejecución, la
                calidad y el profesionalismo.
              </p>
              <p
                style={{ marginTop: 20, color: "var(--slate-500)", fontSize: 17, lineHeight: 1.8 }}
                data-en
              >
                We provide integrated solutions across civil engineering, telecommunications and
                remodeling & commercial construction. Our turnkey projects stand out for execution
                discipline, quality, and professionalism.
              </p>
              <div className="purpose-tags">
                <span className="tag" data-es>Ingeniería Civil</span>
                <span className="tag" data-en>Civil Engineering</span>
                <span className="tag" data-es>Telecomunicaciones</span>
                <span className="tag" data-en>Telecommunications</span>
                <span className="tag" data-es>Remodelaciones</span>
                <span className="tag" data-en>Remodeling</span>
                <span className="tag" data-es>Llave en Mano</span>
                <span className="tag" data-en>Turnkey</span>
              </div>
              <Link href="/nosotros" className="btn btn-primary">
                <span data-es>Conocer Más</span>
                <span data-en>Learn More</span>
              </Link>
            </div>
            <div className="purpose-image-wrap">
              <div className="purpose-image">
                <Image
                  src="/images/estructura-metalica/6.jpg"
                  alt="Estructura metálica — Estación Metro Villa Zaita"
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
                <div className="label" data-es>Años de Experiencia</div>
                <div className="label" data-en>Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="industries">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-es>Nuestros servicios</span>
            <span className="eyebrow" data-en>Our services</span>
            <h2 data-es>Sectores donde entregamos resultados</h2>
            <h2 data-en>Sectors where we deliver results</h2>
            <p data-es>
              Tres áreas de negocio integradas — ingeniería civil, telecomunicaciones y
              remodelaciones & construcción comercial — coordinadas para entregar proyectos llave
              en mano de cualquier escala.
            </p>
            <p data-en>
              Three integrated business areas — civil engineering, telecommunications and
              remodeling & commercial construction — coordinated to deliver turnkey projects at any
              scale.
            </p>
          </div>
          <div className="industries-grid">
            {INDUSTRIES.map((it) => (
              <Link key={it.num} href={it.href} className="industry-card">
                <Image
                  src={it.img}
                  alt={it.title.es}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="industry-card-body">
                  <div className="num">{it.num}</div>
                  <h3 data-es>{it.title.es}</h3>
                  <h3 data-en>{it.title.en}</h3>
                  <p data-es>{it.desc.es}</p>
                  <p data-en>{it.desc.en}</p>
                  <span className="arrow" data-es>VER MÁS →</span>
                  <span className="arrow" data-en>LEARN MORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="stats-banner">
        <div className="container">
          <div className="stats-banner-grid">
            <StatBanner to={29} es="Años" en="Years" />
            <StatBanner to={500} es="Proyectos" en="Projects" />
            <StatBanner to={200} es="Sitios Telecom" en="Telecom Sites" />
            <StatBanner to={15} es="Clientes Recurrentes" en="Repeat Clients" />
          </div>
        </div>
      </Reveal>

      <Reveal className="projects-bg">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-es>Proyectos destacados</span>
            <span className="eyebrow" data-en>Featured projects</span>
            <h2 data-es>Proyectos de fábrica e infraestructura crítica</h2>
            <h2 data-en>Factory and critical infrastructure projects</h2>
          </div>
          <div className="projects-grid">
            {FEATURED.map((p) => (
              <article key={p.title.es} className="project">
                <div className="project-img">
                  <span className="project-cat">{p.tag}</span>
                  <Image
                    src={p.img}
                    alt={p.title.es}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="project-body">
                  <h3 data-es>{p.title.es}</h3>
                  <h3 data-en>{p.title.en}</h3>
                  <p data-es>{p.desc.es}</p>
                  <p data-en>{p.desc.en}</p>
                  <div className="project-meta">
                    <span>📍 {p.location}</span>
                    <strong>{p.year}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Link href="/proyectos" className="btn btn-dark">
              <span data-es>Ver Todos los Proyectos</span>
              <span data-en>View All Projects</span>
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta-strip">
        <div className="container">
          <div className="cta-strip-grid">
            <div>
              <h2 data-es>
                De la materia prima al producto final, te ayudamos a construir el mundo con nosotros
              </h2>
              <h2 data-en>
                From raw materials to finished products, we help you build the world with us
              </h2>
              <p data-es>Casi tres décadas entregando proyectos llave en mano respaldan nuestra capacidad técnica y operacional.</p>
              <p data-en>Almost three decades of turnkey delivery back our technical and operational capacity.</p>
            </div>
            <div className="cta-strip-actions">
              <Link href="/contacto" className="btn btn-primary">
                <span data-es>Cotizar Proyecto</span>
                <span data-en>Quote Project</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--orange)" }} data-es>
            Hablemos de tu proyecto
          </span>
          <span className="eyebrow" style={{ color: "var(--orange)" }} data-en>
            Let&apos;s talk about your project
          </span>
          <h2 data-es>¿Listo para construir<br/>infraestructura de clase mundial?</h2>
          <h2 data-en>Ready to build<br/>world-class infrastructure?</h2>
          <p data-es>
            Solicita una cotización sin compromiso. Nuestro equipo de ingeniería responderá en
            menos de 24 horas.
          </p>
          <p data-en>
            Request a no-obligation quote. Our engineering team will respond within 24 hours.
          </p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span data-es>Solicitar Cotización</span>
              <span data-en>Request Quote</span>
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
  suffix = "+",
  es,
  en,
}: {
  to: number;
  suffix?: string;
  es: string;
  en: string;
}) {
  return (
    <div>
      <div className="num">
        <Counter to={to} />
        <small>{suffix}</small>
      </div>
      <div className="label" data-es>{es}</div>
      <div className="label" data-en>{en}</div>
    </div>
  );
}

const INDUSTRIES = [
  {
    num: "01",
    href: "/servicios#telecom",
    img: "/images/76-sitios-tigo/41.jpg",
    title: { es: "Telecomunicaciones", en: "Telecommunications" },
    desc: {
      es: "Torres, antenas, enlaces, mantenimiento y BTS llave en mano.",
      en: "Towers, antennas, links, maintenance and turnkey BTS.",
    },
  },
  {
    num: "02",
    href: "/servicios#civil",
    img: "/images/estructura-metalica/7.jpg",
    title: { es: "Ingeniería Civil", en: "Civil Engineering" },
    desc: {
      es: "Obras industriales, fundaciones, naves, pavimentación y edificios.",
      en: "Industrial works, foundations, warehouses, paving and buildings.",
    },
  },
  {
    num: "03",
    href: "/servicios#data",
    img: "/images/datacenter-fusion/60.jpg",
    title: { es: "Data Centers", en: "Data Centers" },
    desc: {
      es: "Salas técnicas, pisos elevados, UPS, climatización y eléctrico crítico.",
      en: "Server rooms, raised floors, UPS, HVAC and critical electrical.",
    },
  },
  {
    num: "04",
    href: "/servicios#remodelacion",
    img: "/images/muelle-16/29.jpg",
    title: {
      es: "Remodelaciones y Construcción Comercial",
      en: "Remodeling & Commercial Construction",
    },
    desc: {
      es: "Locales retail, restaurantes, oficinas corporativas y centros de monitoreo llave en mano.",
      en: "Retail stores, restaurants, corporate offices and monitoring centers turnkey.",
    },
  },
];

const FEATURED = [
  {
    tag: "CIVIL",
    img: "/images/estructura-metalica/5.jpg",
    title: {
      es: "Estructura Metálica — Metro Villa Zaita",
      en: "Steel Structure — Villa Zaita Metro",
    },
    desc: {
      es: "Instalación de estructura metálica en la estación del Metro de Villa Zaita para Grupo ITM.",
      en: "Steel structure installation at the Villa Zaita Metro station for Grupo ITM.",
    },
    location: "Villa Zaita, Panamá",
    year: "2023",
  },
  {
    tag: "TELECOM",
    img: "/images/76-sitios-tigo/41.jpg",
    title: {
      es: "76 Sitios Tigo — Llave en Mano",
      en: "76 Tigo Sites — Turnkey",
    },
    desc: {
      es: "Construcción llave en mano de 76 sitios para la red Tigo de Millicom a nivel nacional.",
      en: "Turnkey construction of 76 nationwide sites for the Millicom Tigo network.",
    },
    location: "Nacional",
    year: "En ejecución",
  },
  {
    tag: "DATA CENTER",
    img: "/images/datacenter-fusion/59.jpg",
    title: {
      es: "Datacenter Fusion Module 2000 — Claro",
      en: "Fusion Module 2000 Datacenter — Claro",
    },
    desc: {
      es: "Adecuación civil e instalación del Datacenter Fusion Module 2000 para Claro Panamá.",
      en: "Civil retrofit and Fusion Module 2000 datacenter install for Claro Panamá.",
    },
    location: "Ciudad de Panamá",
    year: "2018 — 2019",
  },
];
