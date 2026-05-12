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
    id: "telecom",
    num: "01",
    eyebrow: { es: "01 — Telecomunicaciones", en: "01 — Telecommunications" },
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
    img: "/images/76-sitios-tigo/42.jpg",
    imgLabel: { es: "TELECOM", en: "TELECOM" },
  },
  {
    id: "civil",
    num: "02",
    eyebrow: { es: "02 — Ingeniería civil", en: "02 — Civil engineering" },
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
    img: "/images/estructura-metalica/9.jpg",
    imgLabel: { es: "CIVIL", en: "CIVIL" },
    reverse: true,
  },
  {
    id: "data",
    num: "03",
    eyebrow: { es: "03 — Data centers", en: "03 — Data centers" },
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
    img: "/images/datacenter-fusion/61.jpg",
    imgLabel: { es: "DATA CENTER", en: "DATA CENTER" },
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
    img: "/images/muelle-16/29.jpg",
    imgLabel: { es: "REMODELACIÓN", en: "REMODELING" },
    reverse: true,
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/" data-es>Inicio</Link>
            <Link href="/" data-en>Home</Link>
            <span>/</span>
            <span data-es>Servicios</span>
            <span data-en>Services</span>
          </div>
          <span className="eyebrow" data-es>Lo que hacemos</span>
          <span className="eyebrow" data-en>What we do</span>
          <h1 data-es>Servicios integrales de ingeniería e infraestructura</h1>
          <h1 data-en>Integrated engineering and infrastructure services</h1>
          <p data-es>
            Tres áreas de negocio integradas — ingeniería civil, telecomunicaciones y
            remodelaciones & construcción comercial — coordinadas para entregar proyectos llave en
            mano de cualquier escala.
          </p>
          <p data-en>
            Three integrated business areas — civil engineering, telecommunications and remodeling
            & commercial construction — coordinated to deliver turnkey projects at any scale.
          </p>
        </div>
      </section>

      {SERVICES.map((s) => (
        <Reveal as="section" key={s.id} className={`svc-section`}>
          <div id={s.id} className="container">
            <div className="svc-grid">
              {s.reverse && <SvcImage svc={s} />}
              <div>
                <span className="eyebrow" data-es>{s.eyebrow.es}</span>
                <span className="eyebrow" data-en>{s.eyebrow.en}</span>
                <h2 data-es>{s.heading.es}</h2>
                <h2 data-en>{s.heading.en}</h2>
                <p style={{ marginTop: 20, fontSize: 17 }} data-es>{s.intro.es}</p>
                <p style={{ marginTop: 20, fontSize: 17 }} data-en>{s.intro.en}</p>
                <ul className="svc-list">
                  {s.items.map((it, i) => (
                    <li key={i}>
                      <span data-es>{it.es}</span>
                      <span data-en>{it.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {!s.reverse && <SvcImage svc={s} />}
            </div>
          </div>
        </Reveal>
      ))}

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2 data-es>¿Necesitas un servicio específico?</h2>
          <h2 data-en>Need a specific service?</h2>
          <p data-es>Conversemos sobre el alcance, plazos y requerimientos técnicos.</p>
          <p data-en>Let&apos;s discuss scope, timeline and technical requirements.</p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span data-es>Solicitar Cotización</span>
              <span data-en>Request Quote</span>
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
        <div className="label" data-es>{svc.imgLabel.es}</div>
        <div className="label" data-en>{svc.imgLabel.en}</div>
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
