import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Nosotros | Servicios Rojas, S.A.",
  description:
    "Conoce Servicios Rojas, S.A. — 29 años construyendo obra civil, telecomunicaciones y data centers en Panamá. Misión, visión y valores.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros — Servicios Rojas, S.A.",
    description:
      "29 años entregando proyectos llave en mano de ingeniería civil y telecom en Panamá.",
    url: "/nosotros",
    type: "website",
  },
};

const CONTACTS = [
  {
    icon: <UserIcon />,
    role: { es: "Gerente General", en: "General Manager" },
    name: "Ing. Arturo I. Rojas Vivero",
    email: "arojas@servicios-rojas.com",
  },
  {
    icon: <HardHatIcon />,
    role: {
      es: "Gerente de Proyectos Obra Civil",
      en: "Civil Works Projects Manager",
    },
    name: "Ing. Arturo I. Rojas Lozano",
    email: "arojaslozano@servicios-rojas.com",
  },
  {
    icon: <AntennaIcon />,
    role: { es: "Gerente Telecom", en: "Telecom Manager" },
    name: "Ing. Carlos Lozano Yaber",
    email: "clozanoy@servicios-rojas.com",
  },
  {
    icon: <HeadsetIcon />,
    role: { es: "Soporte Telecom", en: "Telecom Support" },
    name: "Luis Paredes",
    email: "comunicaciones@servicios-rojas.com",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero-split">
          <div className="hero-photo">
            <Image
              src="/images/nosotros-img1.jpg"
              alt="Servicios Rojas — Obra civil en Panamá"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-photo-tint" />
            <div className="hero-wordmark" aria-hidden="true">
              <span>Nosotros</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="eyebrow">Nuestra historia</span>
              <h1>Construyendo Panamá desde 1997</h1>
              <p className="hero-sub">
                Una empresa fundada con un compromiso inquebrantable: entregar excelencia técnica y
                construir relaciones de largo plazo con nuestros clientes.
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-pill">
                  <span>Conversemos</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="main-img">
                <Image
                  src="/images/nosotros-img2.jpg"
                  alt="Servicios Rojas — Obra civil en Panamá"
                  fill
                  sizes="(max-width: 960px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="float-card">
                <div className="num">1997</div>
                <div className="label">Año fundación</div>
              </div>
            </div>
            <div>
              <span className="eyebrow">Quiénes somos</span>
              <h2>De una operación familiar a contratista de infraestructura crítica</h2>
              <p>
                Servicios Rojas, S.A. se constituye en 1997 para brindar soluciones integradas en
                tres áreas: proyectos de ingeniería civil, proyectos de telecomunicaciones y
                remodelaciones & construcción comercial.
              </p>
              <p>
                Con personal altamente capacitado e idóneo en su área de especialidad, y en
                constante actualización tecnológica, desarrollamos proyectos llave en mano —
                diferenciándonos por el cumplimiento en la ejecución, la calidad y el
                profesionalismo en cada obra entregada.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="about-impact">
        <div className="container">
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-stat-icon"><ShieldIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-num">+29</div>
                <div className="impact-stat-label">
                  <span>AÑOS DE<br />EXPERIENCIA</span>
                </div>
              </div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-icon"><PeopleIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-label">
                  <span>PROFESIONALES<br />ESPECIALIZADOS</span>
                </div>
              </div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-icon"><CheckCircleIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-num">500+</div>
                <div className="impact-stat-label">
                  <span>PROYECTOS<br />EJECUTADOS</span>
                </div>
              </div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-icon"><PinIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-label">
                  <span>COBERTURA<br />NACIONAL</span>
                </div>
              </div>
            </div>
          </div>

          <div className="impact-mission">
            <div className="impact-block">
              <div className="impact-block-head">
                <div className="impact-block-icon"><EyeIcon /></div>
                <h3>Visión</h3>
              </div>
              <p>
                Ser la mejor y más eficiente empresa constructora en Panamá, liderando el mercado
                por medio de la responsabilidad, eficiencia y cumplimiento.
              </p>
              <p>
                Buscamos la satisfacción del cliente, el crecimiento sostenible y la optimización
                de costos en todos nuestros servicios y operaciones.
              </p>
            </div>
            <div className="impact-block">
              <div className="impact-block-head">
                <div className="impact-block-icon"><TargetIcon /></div>
                <h3>Misión</h3>
              </div>
              <p>
                Somos una empresa constructora dedicada a la ejecución de proyectos de obra civil,
                remodelaciones y telecomunicaciones, con equipo, maquinaria y transporte propio,
                comprometidos con la calidad y la satisfacción de nuestros clientes.
              </p>
              <p>
                Construimos obras gubernamentales y privadas con los más altos estándares de
                exigencia y control de calidad.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="about-contacts">
        <div className="container">
          <div className="contacts-head">
            <h2>
              <span>Contactos</span>
            </h2>
          </div>
          <div className="contacts-grid">
            {CONTACTS.map((c) => (
              <div key={c.email} className="contact-card">
                <div className="contact-icon">{c.icon}</div>
                <h4>{c.role.es}</h4>
                <p className="contact-name">{c.name}</p>
                <a className="contact-email" href={`mailto:${c.email}`}>
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <div className="contacts-banner">
            <p>
              <span>
                INFRAESTRUCTURA QUE <em>CONECTA</em>, TECNOLOGÍA QUE <em>IMPULSA</em>
              </span>
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>¿Trabajamos juntos?</h2>
          <p>Conversemos sobre tu próximo proyecto. Nuestro equipo está listo para atenderte.</p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span>Contactar</span>
            </Link>
            <Link href="/proyectos" className="btn btn-outline">
              <span>Ver Proyectos</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5l8 3v6.2c0 4.6-3.4 8.6-8 9.8-4.6-1.2-8-5.2-8-9.8V5.5l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
      <path d="M15 19c0-2.2 1.6-4 4-4s4 1.5 4 4" transform="translate(-2 0)" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.6 2.6L16 9.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c.8-3.6 4-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
    </svg>
  );
}

function HardHatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 17c0-4.5 4-8 9-8s9 3.5 9 8" />
      <path d="M2.5 17h19" />
      <path d="M2.5 17v2h19v-2" />
      <path d="M10 9V6.5a2 2 0 014 0V9" />
    </svg>
  );
}

function AntennaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 5c4 4 4 10 0 14" />
      <path d="M8 8c2 2.5 2 5.5 0 8" />
      <path d="M19 5c-4 4-4 10 0 14" />
      <path d="M16 8c-2 2.5-2 5.5 0 8" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 13.5V21" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <path d="M4 14h3v5H5a1 1 0 01-1-1v-4z" />
      <path d="M20 14h-3v5h2a1 1 0 001-1v-4z" />
      <path d="M17 19v.5a2.5 2.5 0 01-2.5 2.5H13" />
    </svg>
  );
}
