import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Servicios | Servicios Rojas, S.A.",
  description:
    "Servicios de ingeniería en Panamá: telecomunicaciones, obra civil, data centers y remodelaciones & construcción comercial. Proyectos llave en mano desde 1997.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios — Servicios Rojas, S.A.",
    description:
      "Telecom, civil, data centers y remodelaciones & construcción comercial. Proyectos llave en mano en Panamá.",
    url: "/servicios",
    type: "website",
  },
};

type Svc = {
  id: string;
  num: string;
  eyebrow: { es: string; en: string };
  heading: { es: string; en: string };
  intro: { es: string; en: string };
  items: { es: string; en: string }[];
  img: string;
  imgLabel: { es: string; en: string };
  reverse?: boolean;
};

const SERVICES: Svc[] = [
  {
    id: "data",
    num: "01",
    eyebrow: { es: "01 — Data centers", en: "01 — Data centers" },
    heading: { es: "Data Centers y Salas Técnicas", en: "Data Centers & Server Rooms" },
    intro: {
      es: "Construcción de data centers y salas técnicas: instalación de facilidades eléctricas, suministro e instalación de piso elevado para cores y datacenters, y soluciones modulares como Fusion Module 2000 instaladas para Claro Panamá.",
      en: "Datacenter and server-room builds: electrical facilities, raised-floor supply and install for cores and datacenters, and modular solutions such as Fusion Module 2000 deployed for Claro Panamá.",
    },
    items: [
      { es: "Piso elevado para cores y datacenters", en: "Raised floors for cores & datacenters" },
      { es: "Sistemas eléctricos para centrales", en: "Critical electrical for central offices" },
      { es: "Áreas UPS y respaldo", en: "UPS & backup areas" },
      { es: "Datacenters modulares (Fusion Module)", en: "Modular datacenters (Fusion Module)" },
      { es: "Cableado estructurado", en: "Structured cabling" },
      { es: "Adecuación de NOC", en: "NOC fit-out" },
      { es: "Centros de monitoreo", en: "Monitoring centers" },
      { es: "Impermeabilización de muros y techos", en: "Wall & roof waterproofing" },
    ],
    img: "/images/data-center.webp",
    imgLabel: { es: "DATA CENTER", en: "DATA CENTER" },
  },
  {
    id: "telecom",
    num: "02",
    eyebrow: { es: "02 — Telecomunicaciones", en: "02 — Telecommunications" },
    heading: { es: "Infraestructura Telecom", en: "Telecom Infrastructure" },
    intro: {
      es: "Soluciones para operadores de telecomunicaciones y empresas corporativas: planta externa de fibra y cobre, construcción de sitios para telefonía móvil, sistemas de conectividad estructurada e integración de redes de video, voz, datos y control.",
      en: "Solutions for telecom operators and corporate clients: outside plant for fiber and copper, mobile site construction, structured connectivity systems and integration of video, voice, data and control networks.",
    },
    items: [
      { es: "Proyectos llave en mano para BTS", en: "Turnkey BTS projects" },
      { es: "Mantenimiento preventivo y correctivo", en: "Preventive & corrective maintenance" },
      { es: "Instalación de equipos de telefonía móvil", en: "Mobile telephony equipment install" },
      { es: "Sistemas radiantes GSM, UMTS, 3G y LTE", en: "GSM, UMTS, 3G & LTE radiating systems" },
      { es: "Site surveys", en: "Site surveys" },
      { es: "Torres autosoportadas y monopolos", en: "Self-supporting towers & monopoles" },
      { es: "Adecuaciones civiles, eléctricas y herrajes", en: "Civil, electrical & hardware retrofits" },
      { es: "Pararrayos y protección eléctrica", en: "Lightning rods & electrical protection" },
    ],
    img: "https://images.unsplash.com/photo-1582193607281-dafb7941640f?q=80&w=1600&auto=format&fit=crop",
    imgLabel: { es: "TELECOM", en: "TELECOM" },
    reverse: true,
  },
  {
    id: "civil",
    num: "03",
    eyebrow: { es: "03 — Ingeniería civil", en: "03 — Civil engineering" },
    heading: { es: "Construcción Civil e Industrial", en: "Civil & Industrial Construction" },
    intro: {
      es: "Desde fundaciones críticas hasta naves industriales completas. Manejamos obras estructurales, pavimentaciones portuarias, edificios comerciales, plantas industriales y adecuaciones para clientes gubernamentales y privados.",
      en: "From critical foundations to complete industrial buildings. Structural works, port paving, commercial buildings, industrial plants and retrofits for government and private clients.",
    },
    items: [
      { es: "Estructuras metálicas", en: "Steel structures" },
      { es: "Fundaciones reforzadas", en: "Reinforced foundations" },
      { es: "Naves y plantas industriales", en: "Warehouses & industrial plants" },
      { es: "Pavimentación portuaria e industrial", en: "Port & industrial paving" },
      { es: "Edificios comerciales y residenciales", en: "Commercial & residential buildings" },
      { es: "Cuartos fríos y de maquinaria", en: "Cold rooms & machine rooms" },
      { es: "Casas de fuerza y subestaciones", en: "Power houses & substations" },
      { es: "Pesas camioneras y bases para silos", en: "Truck scales & silo bases" },
    ],
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
    imgLabel: { es: "CIVIL", en: "CIVIL" },
  },
  {
    id: "remodelacion",
    num: "04",
    eyebrow: { es: "04 — Remodelación", en: "04 — Remodeling" },
    heading: {
      es: "Remodelaciones y Construcción Comercial",
      en: "Remodeling & Commercial Construction",
    },
    intro: {
      es: "Locales y tiendas para retail (Tienda + Móvil de Cable & Wireless en Multiplaza, Albrook, Westland, Penonomé, Chitré, Colón), restaurantes (Pio Pio Albrook), oficinas corporativas y adecuaciones de centros de monitoreo.",
      en: "Retail stores (Cable & Wireless Tienda + Móvil at Multiplaza, Albrook, Westland, Penonomé, Chitré, Colón), restaurants (Pio Pio Albrook), corporate offices and monitoring-center fit-outs.",
    },
    items: [
      { es: "Tiendas y locales comerciales", en: "Retail stores & commercial spaces" },
      { es: "Adecuación de oficinas", en: "Office fit-out" },
      { es: "Ampliaciones y refuerzos", en: "Expansions & reinforcement" },
      { es: "Acabados arquitectónicos", en: "Architectural finishes" },
      { es: "Demoliciones controladas", en: "Controlled demolition" },
      { es: "Centros de monitoreo y vigilancia", en: "Monitoring & surveillance centers" },
    ],
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1600&auto=format&fit=crop",
    imgLabel: { es: "REMODELACIÓN", en: "REMODELING" },
    reverse: true,
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero-split">
          <div className="hero-photo">
            <Image
              src="/images/sr-hero-banner.jpg"
              alt="Servicios de ingeniería e infraestructura — Servicios Rojas"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-photo-tint" />
            <div className="hero-wordmark" aria-hidden="true">
              <span>Servicios</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="eyebrow">Lo que hacemos</span>
              <h1>Servicios integrales de ingeniería e infraestructura</h1>
              <p className="hero-sub">
                Cuatro áreas de negocio integradas — data centers, telecomunicaciones, ingeniería
                civil y remodelaciones & construcción comercial — coordinadas para entregar
                proyectos llave en mano de cualquier escala.
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-pill">
                  <span>Cotizar Proyecto</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {SERVICES.map((s) => (
        <Reveal as="section" key={s.id} className={`svc-section`}>
          <div id={s.id} className="container">
            <div className="svc-grid">
              {s.reverse && <SvcImage svc={s} />}
              <div>
                <span className="eyebrow">{s.eyebrow.es}</span>
                <h2>{s.heading.es}</h2>
                <p style={{ marginTop: 20, fontSize: 17 }}>{s.intro.es}</p>
                <ul className="svc-list">
                  {s.items.map((it, i) => (
                    <li key={i}>
                      <span>{it.es}</span>
                    </li>
                  ))}
                </ul>
                {s.id === "data" && (
                  <Link
                    href="/servicios/data-centers"
                    className="hero-link"
                    style={{ marginTop: 28, display: "inline-block" }}
                  >
                    <span>Ver más sobre data centers →</span>
                  </Link>
                )}
              </div>
              {!s.reverse && <SvcImage svc={s} />}
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2>¿Necesitas un servicio específico?</h2>
          <p>Conversemos sobre el alcance, plazos y requerimientos técnicos.</p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span>Solicitar Cotización</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function SvcImage({ svc }: { svc: Svc }) {
  return (
    <div className="svc-image-wrap">
      <div className="svc-image">
        <div className="label">{svc.imgLabel.es}</div>
        <Image
          src={svc.img}
          alt={svc.heading.es}
          fill
          sizes="(max-width: 960px) 100vw, 600px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

