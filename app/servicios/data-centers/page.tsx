import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Construcción de Data Centers en Panamá | Servicios Rojas, S.A.",
  description:
    "Construcción de data centers y salas técnicas llave en mano en Panamá desde 2013. Fusion Module 2000, piso elevado, sistemas eléctricos críticos, NOC y centros de monitoreo para operadores telecom y empresas corporativas.",
  keywords: [
    "construcción data center Panamá",
    "data center llave en mano",
    "Fusion Module 2000 Panamá",
    "sala técnica Panamá",
    "piso elevado data center",
    "NOC Panamá",
    "centro de monitoreo",
    "Servicios Rojas",
  ],
  alternates: { canonical: "/servicios/data-centers" },
  openGraph: {
    title: "Construcción de Data Centers en Panamá — Servicios Rojas, S.A.",
    description:
      "Data centers y salas técnicas llave en mano desde 2013. Fusion Module 2000, piso elevado, sistemas eléctricos críticos y NOCs para operadores telecom en Panamá.",
    url: "/servicios/data-centers",
    type: "website",
    images: ["/images/data-center-howard-etapa2/34.jpg"],
  },
};

const CAPABILITIES = [
  {
    icon: <FloorIcon />,
    title: { es: "Piso elevado", en: "Raised floors" },
    desc: {
      es: "Suministro e instalación de piso técnico para cores y datacenters, con manejo de cargas dinámicas y rutas de cableado bajo piso.",
      en: "Supply and installation of technical flooring for cores and datacenters, supporting dynamic loads and under-floor cable routing.",
    },
  },
  {
    icon: <BoltIcon />,
    title: { es: "Sistemas eléctricos críticos", en: "Critical electrical systems" },
    desc: {
      es: "Adecuación eléctrica para centrales y data centers: tableros, alimentadores, puesta a tierra y redundancia para infraestructura misión crítica.",
      en: "Electrical fit-out for central offices and data centers: panels, feeders, grounding and redundancy for mission-critical infrastructure.",
    },
  },
  {
    icon: <BatteryIcon />,
    title: { es: "Áreas UPS y respaldo", en: "UPS & backup areas" },
    desc: {
      es: "Diseño y construcción de salas de UPS, baterías y generación de respaldo para garantizar continuidad operativa 24/7.",
      en: "Design and construction of UPS rooms, battery banks and backup generation to guarantee 24/7 operational continuity.",
    },
  },
  {
    icon: <ModuleIcon />,
    title: { es: "Datacenters modulares", en: "Modular datacenters" },
    desc: {
      es: "Despliegue de soluciones modulares prefabricadas como Huawei Fusion Module 2000 — instaladas y puestas en marcha para Claro Panamá.",
      en: "Deployment of prefabricated modular solutions such as Huawei Fusion Module 2000 — installed and commissioned for Claro Panamá.",
    },
  },
  {
    icon: <CableIcon />,
    title: { es: "Cableado estructurado", en: "Structured cabling" },
    desc: {
      es: "Diseño e implementación de cableado de cobre y fibra para racks, salas y conectividad backbone dentro del data center.",
      en: "Design and implementation of copper and fiber cabling for racks, rooms and backbone connectivity within the data center.",
    },
  },
  {
    icon: <ScreenIcon />,
    title: { es: "Adecuación de NOC", en: "NOC fit-out" },
    desc: {
      es: "Construcción y equipamiento de Network Operations Centers: mobiliario técnico, video wall, control ambiental y seguridad de acceso.",
      en: "Construction and outfitting of Network Operations Centers: technical furniture, video wall, environmental control and access security.",
    },
  },
  {
    icon: <MonitorIcon />,
    title: { es: "Centros de monitoreo", en: "Monitoring centers" },
    desc: {
      es: "Centros de monitoreo y vigilancia para operación de redes telecom y plataformas críticas, integrados con los sistemas del cliente.",
      en: "Monitoring and surveillance centers for telecom networks and critical platforms, integrated with the client's systems.",
    },
  },
  {
    icon: <ShieldIcon />,
    title: { es: "Impermeabilización", en: "Waterproofing" },
    desc: {
      es: "Impermeabilización de muros y techos en salas técnicas para proteger equipamiento sensible de filtraciones y humedad.",
      en: "Wall and roof waterproofing in technical rooms to protect sensitive equipment from leaks and humidity.",
    },
  },
];

const PROJECTS = [
  {
    img: "/images/datacenter-fusion/60.jpg",
    title: {
      es: "Datacenter Fusion Module 2000 — Claro Panamá",
      en: "Fusion Module 2000 Datacenter — Claro Panamá",
    },
    meta: "Ciudad de Panamá · 2018 — 2019",
    desc: {
      es: "Adecuación civil y despliegue del Datacenter modular Fusion Module 2000 de Huawei para Claro Panamá. El proyecto integró preparación del sitio, sistemas eléctricos críticos, climatización modular e integración con la red de core del operador, entregado bajo modalidad llave en mano.",
      en: "Civil retrofit and deployment of the Huawei Fusion Module 2000 modular Datacenter for Claro Panamá. The project integrated site preparation, critical electrical systems, modular cooling and integration with the operator's core network — delivered turnkey.",
    },
  },
  {
    img: "/images/data-center-howard-etapa2/34.jpg",
    title: {
      es: "International Data Center Howard — II Etapa",
      en: "International Data Center Howard — Phase II",
    },
    meta: "Howard, Panamá · Cable & Wireless · Octubre 2013",
    desc: {
      es: "Segunda etapa del International Data Center Howard para Cable & Wireless Panamá, ubicado en la antigua base aérea de Howard. Obra civil, sistemas eléctricos y adecuaciones técnicas para ampliar la capacidad operativa del data center existente.",
      en: "Phase II of the International Data Center Howard for Cable & Wireless Panamá, located at the former Howard air base. Civil works, electrical systems and technical fit-outs to expand the operating capacity of the existing data center.",
    },
  },
];

const PROCESS = [
  {
    num: "01",
    title: { es: "Site survey y diseño", en: "Site survey & design" },
    desc: {
      es: "Levantamiento del sitio, análisis de cargas, rutas y restricciones. Diseño técnico coordinado con el cliente y los fabricantes de equipamiento.",
      en: "Site survey, load analysis, routes and constraints. Technical design coordinated with the client and equipment vendors.",
    },
  },
  {
    num: "02",
    title: { es: "Adecuación civil", en: "Civil retrofit" },
    desc: {
      es: "Piso elevado, impermeabilización de muros y techos, cuartos técnicos, áreas UPS y bases para equipamiento crítico.",
      en: "Raised flooring, wall and roof waterproofing, technical rooms, UPS areas and bases for critical equipment.",
    },
  },
  {
    num: "03",
    title: { es: "Sistemas eléctricos", en: "Electrical systems" },
    desc: {
      es: "Tableros, alimentadores, UPS, generación de respaldo, puesta a tierra y redundancia para soportar operación continua.",
      en: "Panels, feeders, UPS, backup generation, grounding and redundancy to support continuous operation.",
    },
  },
  {
    num: "04",
    title: { es: "Mecánico y control", en: "Mechanical & control" },
    desc: {
      es: "Climatización (HVAC), distribución de aire, monitoreo ambiental y sistemas de control integrados al NOC.",
      en: "HVAC, air distribution, environmental monitoring and control systems integrated with the NOC.",
    },
  },
  {
    num: "05",
    title: { es: "Integración y entrega", en: "Integration & handover" },
    desc: {
      es: "Cableado estructurado, integración con la red del cliente, pruebas, documentación y entrega llave en mano.",
      en: "Structured cabling, integration with the client network, testing, documentation and turnkey handover.",
    },
  },
];

const FAQ = [
  {
    q: {
      es: "¿Cuánto tiempo toma construir un data center modular?",
      en: "How long does it take to build a modular data center?",
    },
    a: {
      es: "Depende del tamaño y del nivel de adecuación civil requerido, pero un despliegue modular tipo Fusion Module 2000 puede ejecutarse en semanas en lugar de los meses que toma un data center construido completamente en sitio.",
      en: "It depends on size and required civil work, but a modular Fusion Module 2000 deployment can be executed in weeks rather than the months required for a fully site-built data center.",
    },
  },
  {
    q: {
      es: "¿Trabajan con Huawei Fusion Module 2000?",
      en: "Do you work with Huawei Fusion Module 2000?",
    },
    a: {
      es: "Sí. Instalamos y pusimos en marcha el Fusion Module 2000 para Claro Panamá, incluyendo toda la adecuación civil e integración con la infraestructura existente del operador.",
      en: "Yes. We installed and commissioned the Fusion Module 2000 for Claro Panamá, including all civil retrofit and integration with the operator's existing infrastructure.",
    },
  },
  {
    q: {
      es: "¿Atienden proyectos para gobierno y operadores telecom?",
      en: "Do you serve government and telecom operators?",
    },
    a: {
      es: "Sí. Nuestro portafolio de data centers y salas técnicas ha sido entregado a operadores telecom líderes en Panamá como Claro y Cable & Wireless, y atendemos también proyectos corporativos y gubernamentales.",
      en: "Yes. Our datacenter and server-room portfolio has been delivered to leading telecom operators in Panamá such as Claro and Cable & Wireless, and we also serve corporate and government projects.",
    },
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Construcción de Data Centers y Salas Técnicas",
  provider: {
    "@type": "Organization",
    name: "Servicios Rojas, S.A.",
    url: "https://servicios-rojas.com",
    areaServed: { "@type": "Country", name: "Panamá" },
  },
  areaServed: { "@type": "Country", name: "Panamá" },
  description:
    "Construcción de data centers y salas técnicas llave en mano en Panamá. Fusion Module 2000, piso elevado, sistemas eléctricos críticos, UPS, NOC y centros de monitoreo para operadores telecom y empresas corporativas.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Capacidades en data centers",
    itemListElement: CAPABILITIES.map((c) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: c.title.es, description: c.desc.es },
    })),
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q.es,
    acceptedAnswer: { "@type": "Answer", text: f.a.es },
  })),
};

export default function DataCentersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="hero hero--page">
        <div className="hero-split">
          <div className="hero-photo">
            <Image
              src="/images/data-center-howard-etapa2/34.jpg"
              alt="Construcción de data centers y salas técnicas en Panamá — Servicios Rojas"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-photo-tint" />
            <div className="hero-wordmark" aria-hidden="true">
              <span>Data Centers</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="eyebrow">Servicios → Data centers</span>
              <h1>Construcción de Data Centers y Salas Técnicas en Panamá</h1>
              <p className="hero-sub">
                Desde 2013 entregamos data centers llave en mano para operadores telecom y
                empresas corporativas en Panamá — incluyendo el despliegue del Fusion Module 2000
                para Claro y el International Data Center Howard para Cable & Wireless.
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-pill">
                  <span>Cotizar Data Center</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" className="about-impact">
        <div className="container">
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-stat-icon"><ClockIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-num">+10</div>
                <div className="impact-stat-label">
                  <span>AÑOS CONSTRUYENDO<br />DATA CENTERS</span>
                </div>
              </div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-icon"><ModuleIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-num">2</div>
                <div className="impact-stat-label">
                  <span>DATA CENTERS<br />LLAVE EN MANO</span>
                </div>
              </div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-icon"><KeyIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-label">
                  <span>100% TURNKEY<br />CIVIL + ELÉCTRICO + MEC.</span>
                </div>
              </div>
            </div>
            <div className="impact-stat">
              <div className="impact-stat-icon"><AntennaIcon /></div>
              <div className="impact-stat-body">
                <div className="impact-stat-label">
                  <span>OPERADORES TELECOM<br />COMO CLIENTES ANCLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="dc-capabilities">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Capacidades técnicas</span>
            <h2>Todo lo que entregamos dentro de un data center</h2>
          </div>
          <div className="dc-cap-grid">
            {CAPABILITIES.map((c, i) => (
              <div key={i} className="dc-cap-card">
                <div className="dc-cap-icon">{c.icon}</div>
                <h3>{c.title.es}</h3>
                <p>{c.desc.es}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="dc-projects">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Proyectos de referencia</span>
            <h2>Data centers que hemos construido</h2>
          </div>
          <div className="dc-projects-list">
            {PROJECTS.map((p, i) => (
              <div key={i} className={`dc-project${i % 2 === 1 ? " dc-project--reverse" : ""}`}>
                <div className="dc-project-img">
                  <Image
                    src={p.img}
                    alt={p.title.es}
                    fill
                    sizes="(max-width: 960px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="dc-project-body">
                  <h3>{p.title.es}</h3>
                  <div className="dc-project-meta">{p.meta}</div>
                  <p>{p.desc.es}</p>
                  <Link href="/proyectos#proyectos-grid" className="hero-link">
                    <span>Ver más proyectos</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="dc-process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>El proceso de construir un data center llave en mano</h2>
          </div>
          <div className="dc-process-list">
            {PROCESS.map((step) => (
              <div key={step.num} className="dc-step">
                <div className="dc-step-num">{step.num}</div>
                <div className="dc-step-body">
                  <h4>{step.title.es}</h4>
                  <p>{step.desc.es}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="dc-faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Lo que clientes corporativos suelen preguntar</h2>
          </div>
          <div className="dc-faq-list">
            {FAQ.map((f, i) => (
              <details key={i} className="dc-faq-item">
                <summary>
                  <span>{f.q.es}</span>
                </summary>
                <p>{f.a.es}</p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>¿Construyes un data center en Panamá?</h2>
          <p>
            Conversemos sobre el alcance técnico, plazos y modalidad llave en mano.
          </p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span>Solicitar Cotización</span>
            </Link>
            <Link href="/proyectos#proyectos-grid" className="btn btn-outline">
              <span>Ver Proyectos</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function FloorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h18M3 14h18M3 20h18" />
      <path d="M7 8v6M12 8v6M17 8v6" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="16" height="10" rx="1.5" />
      <path d="M19 11v4h2v-4z" />
      <path d="M7 11v4M11 11v4M15 11v4" />
    </svg>
  );
}

function ModuleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M4 9h16M4 15h16" />
      <circle cx="7" cy="6" r="0.6" fill="currentColor" />
      <circle cx="7" cy="12" r="0.6" fill="currentColor" />
      <circle cx="7" cy="18" r="0.6" fill="currentColor" />
    </svg>
  );
}

function CableIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4v4a4 4 0 008 0V4" />
      <path d="M12 8c0 6 8 4 8 12" />
      <rect x="2.5" y="2" width="3" height="3" />
      <rect x="6.5" y="2" width="3" height="3" />
    </svg>
  );
}

function ScreenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 8l2 2M6 12l2-2" />
      <path d="M11 8h7M11 11h7M11 14h5" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5l8 3v6.2c0 4.6-3.4 8.6-8 9.8-4.6-1.2-8-5.2-8-9.8V5.5l8-3z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M17 12v3M20 12v2" />
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
