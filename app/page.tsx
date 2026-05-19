import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import TrustedCarousel from "@/components/TrustedCarousel";
import HomeFeatured from "@/components/HomeFeatured";

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
        <div className="hero-split">
          <div className="hero-photo">
            <Image
              src="/images/sr-hero-banner.jpg"
              alt="Infraestructura crítica y telecomunicaciones"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-photo-tint" />
            <div className="hero-wordmark" aria-hidden="true">
              <span>Servicios<br/>Rojas</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="eyebrow" data-es>Servicios Rojas · Panamá</span>
              <span className="eyebrow" data-en>Servicios Rojas · Panama</span>
              <h1>
                <span data-es>Impulsando el progreso a través de la infraestructura crítica</span>
                <span data-en>Powering progress through critical infrastructure</span>
              </h1>
              <p className="hero-sub">
                <span data-es>
                  Con compromiso de calidad, ingeniería de precisión y entregas a tiempo,
                  convertimos tus proyectos de telecomunicaciones, data centers e ingeniería civil
                  en realidad — llave en mano desde 1997.
                </span>
                <span data-en>
                  With a commitment to quality craftsmanship, precision engineering and timely
                  delivery, we turn your telecom, data center and civil engineering concepts into
                  concrete reality — turnkey since 1997.
                </span>
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-pill">
                  <span data-es>Descubrir</span>
                  <span data-en>Discover</span>
                </Link>
                <Link href="/proyectos" className="hero-link">
                  <span data-es>Ver proyectos</span>
                  <span data-en>View projects</span>
                </Link>
              </div>
            </div>

            <div className="hero-cards">
              <Link href="/servicios#telecom" className="hero-card">
                <Image
                  src="/images/76-sitios-tigo/42.jpg"
                  alt="Sitio telecom Tigo en Panamá — mantenimiento por Servicios Rojas"
                  fill
                  sizes="(max-width: 1024px) 50vw, (max-width: 1600px) 280px, 420px"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero-card-overlay">
                  <div className="hero-card-num">
                    <Counter to={200} />
                    +
                  </div>
                  <div className="hero-card-label">
                    <span data-es>Sitios telecom<br/>en mantenimiento</span>
                    <span data-en>Telecom sites<br/>under maintenance</span>
                  </div>
                </div>
                <span className="hero-card-arrow" aria-hidden="true">↗</span>
              </Link>
              <Link href="/proyectos" className="hero-card">
                <Image
                  src="/images/data-center-howard-etapa2/34.jpg"
                  alt="Data center Howard etapa 2 — Servicios Rojas"
                  fill
                  sizes="(max-width: 1024px) 50vw, (max-width: 1600px) 280px, 420px"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero-card-overlay">
                  <div className="hero-card-num">
                     <Counter to={5} /> +
                  </div>
                  <div className="hero-card-label">
                    <span data-es>Años entregando<br/> Data centers</span>
                    <span data-en>Years of <br/>delivering data centers</span>
                  </div>
                </div>
                <span className="hero-card-arrow" aria-hidden="true">↗</span>
              </Link>
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
                telecomunicaciones, data centers y remodelaciones & construcción comercial. Diseñamos
                y construimos data centers y salas técnicas llave en mano, diferenciándonos por el
                cumplimiento en la ejecución, la calidad y el profesionalismo.
              </p>
              <p
                style={{ marginTop: 20, color: "var(--slate-500)", fontSize: 17, lineHeight: 1.8 }}
                data-en
              >
                We provide integrated solutions across civil engineering, telecommunications, data
                centers and remodeling & commercial construction. We design and build turnkey data
                centers and server rooms, standing out for execution discipline, quality, and
                professionalism.
              </p>
              <div className="purpose-tags">
                <span className="tag" data-es>Ingeniería Civil</span>
                <span className="tag" data-en>Civil Engineering</span>
                <span className="tag" data-es>Telecomunicaciones</span>
                <span className="tag" data-en>Telecommunications</span>
                <span className="tag" data-es>Data Centers</span>
                <span className="tag" data-en>Data Centers</span>
                <span className="tag" data-es>Remodelaciones</span>
                <span className="tag" data-en>Remodeling</span>
              </div>
              <Link href="/nosotros" className="btn btn-primary">
                <span data-es>Conocer Más</span>
                <span data-en>Learn More</span>
              </Link>
            </div>
            <div className="purpose-image-wrap">
              <div className="purpose-image">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
                  alt="Ingenieros revisando planos en sitio de construcción"
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
              Cuatro áreas de negocio integradas — ingeniería civil, telecomunicaciones, data
              centers y remodelaciones & construcción comercial — coordinadas para entregar
              proyectos llave en mano de cualquier escala.
            </p>
            <p data-en>
              Four integrated business areas — civil engineering, telecommunications, data centers
              and remodeling & commercial construction — coordinated to deliver turnkey projects at
              any scale.
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
            <h2 data-es>Proyectos de data centers, telecom e infraestructura crítica</h2>
            <h2 data-en>Data center, telecom and critical infrastructure projects</h2>
          </div>
          <HomeFeatured />
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
    href: "/servicios#data",
    img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1600&auto=format&fit=crop",
    title: { es: "Data Centers", en: "Data Centers" },
    desc: {
      es: "Salas técnicas, pisos elevados, UPS, climatización y eléctrico crítico.",
      en: "Server rooms, raised floors, UPS, HVAC and critical electrical.",
    },
  },
  {
    num: "02",
    href: "/servicios#telecom",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop",
    title: { es: "Telecomunicaciones", en: "Telecommunications" },
    desc: {
      es: "Torres, antenas, enlaces, mantenimiento y BTS llave en mano.",
      en: "Towers, antennas, links, maintenance and turnkey BTS.",
    },
  },
  {
    num: "03",
    href: "/servicios#civil",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    title: { es: "Ingeniería Civil", en: "Civil Engineering" },
    desc: {
      es: "Obras industriales, fundaciones, naves, pavimentación y edificios.",
      en: "Industrial works, foundations, warehouses, paving and buildings.",
    },
  },
  {
    num: "04",
    href: "/servicios#remodelacion",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
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

