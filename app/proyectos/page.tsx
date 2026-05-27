import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import ProjectFilter from "@/components/ProjectFilter";
import { PROJECTS } from "@/components/projects-data";
import TrustedCarousel from "@/components/TrustedCarousel";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Portafolio de Servicios Rojas, S.A.: telecom, ingeniería civil, data centers y mantenimiento en Panamá. Más de 500 proyectos llave en mano entregados.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: "Proyectos — Servicios Rojas, S.A.",
    description:
      "Telecom, civil, data centers y mantenimiento. Más de 500 proyectos en Panamá.",
    url: "/proyectos",
    type: "website",
  },
};

const CAPABILITIES = [
  {
    icon: <BuildingIcon />,
    title: { es: "Edificaciones", en: "Buildings" },
    desc: {
      es: "Institucionales, comerciales e industriales.",
      en: "Institutional, commercial and industrial.",
    },
  },
  {
    icon: <WarehouseIcon />,
    title: { es: "Infraestructura", en: "Infrastructure" },
    desc: {
      es: "Galeras, workshops, reachstackers, estaciones de metro y centros de datos.",
      en: "Warehouses, workshops, reachstackers, metro stations and data centers.",
    },
  },
  {
    icon: <RoadIcon />,
    title: { es: "Obras Viales", en: "Road Works" },
    desc: {
      es: "Construcción y rehabilitación de carreteras, calles y movimientos de tierra.",
      en: "Construction and rehabilitation of roads, streets and earthworks.",
    },
  },
  {
    icon: <BoltIcon />,
    title: {
      es: "Obras Eléctricas de Misión Crítica",
      en: "Mission-Critical Electrical Works",
    },
    desc: {
      es: "Diseño, construcción e instalación de sistemas eléctricos para infraestructura crítica.",
      en: "Design, construction and installation of electrical systems for critical infrastructure.",
    },
  },
];

export default function ProyectosPage() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero-split">
          <div className="hero-photo">
            <Image
              src="/images/data-center-howard-etapa2/34.jpg"
              alt="Data center Howard etapa 2 — Servicios Rojas"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-photo-tint" />
            <div className="hero-wordmark" aria-hidden="true">
              <span>Portafolio</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="eyebrow">Portafolio</span>
              <h1>Proyectos que han transformado la infraestructura panameña</h1>
              <p className="hero-sub">
                Una selección de proyectos representativos entregados a clientes corporativos,
                operadores telecom, gobierno y desarrolladores industriales.
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-pill">
                  <span>Cotizar Proyecto</span>
                </Link>
                <a href="#proyectos-grid" className="hero-link">
                  <span>Ver portafolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" id="proyectos-grid" className="projects-bg">
        <div className="container">
          <div className="projects-layout">
            <aside className="projects-sidebar">
              <div className="projects-sidebar-inner">
                {CAPABILITIES.map((c, i) => (
                  <div key={i} className="cap-item">
                    <div className="cap-icon">{c.icon}</div>
                    <div className="cap-body">
                      <h4>{c.title.es}</h4>
                      <p>{c.desc.es}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
            <div className="projects-main">
              <ProjectFilter projects={PROJECTS} />
            </div>
          </div>
        </div>
      </Reveal>

      <TrustedCarousel
        title="Clientes destacados"
        subtitle="Empresas líderes que confían en nuestra ingeniería para sus proyectos más importantes."
      />

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>¿Tu proyecto será el siguiente?</h2>
          <p>Cuéntanos los detalles. Prepararemos una propuesta técnica adaptada.</p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span>Iniciar Proyecto</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 21V6l7-3v18" />
      <path d="M11 21h9V9l-9-3" />
      <path d="M6 9h2M6 12h2M6 15h2M6 18h2" />
      <path d="M14 11h2M14 14h2M14 17h2" />
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M3 21h18" />
      <rect x="8" y="13" width="3" height="3" />
      <rect x="11" y="13" width="3" height="3" />
      <rect x="8" y="16" width="3" height="3" />
      <rect x="11" y="16" width="3" height="3" />
    </svg>
  );
}

function RoadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 3L4 21" />
      <path d="M17 3l3 18" />
      <path d="M12 4v2" />
      <path d="M12 10v2" />
      <path d="M12 16v2" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}
