import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

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

export default function NosotrosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow" data-es>Nuestra historia</span>
          <span className="eyebrow" data-en>Our story</span>
          <h1 data-es>Construyendo Panamá desde 1997</h1>
          <h1 data-en>Building Panama since 1997</h1>
          <p data-es>
            Una empresa fundada con un compromiso inquebrantable: entregar excelencia técnica y
            construir relaciones de largo plazo con nuestros clientes.
          </p>
          <p data-en>
            A company founded with an unwavering commitment: delivering technical excellence and
            building long-term client relationships.
          </p>
        </div>
      </section>

      <Reveal className="about-intro">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="main-img">
                <Image
                  src="/images/estructura-metalica/8.jpg"
                  alt="Servicios Rojas — Obra civil en Panamá"
                  fill
                  sizes="(max-width: 960px) 100vw, 600px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="float-card">
                <div className="num">1997</div>
                <div className="label" data-es>Año fundación</div>
                <div className="label" data-en>Founded</div>
              </div>
            </div>
            <div>
              <span className="eyebrow" data-es>Quiénes somos</span>
              <span className="eyebrow" data-en>Who we are</span>
              <h2 data-es>De una operación familiar a contratista de infraestructura crítica</h2>
              <h2 data-en>From a family operation to critical-infrastructure contractor</h2>
              <p data-es>
                Servicios Rojas, S.A. se constituye en 1997 para brindar soluciones integradas en
                tres áreas: proyectos de ingeniería civil, proyectos de telecomunicaciones y
                remodelaciones & construcción comercial.
              </p>
              <p data-en>
                Servicios Rojas, S.A. was established in 1997 to provide integrated solutions in
                three areas: civil engineering projects, telecommunications projects and remodeling
                & commercial construction.
              </p>
              <p data-es>
                Con personal altamente capacitado e idóneo en su área de especialidad, y en
                constante actualización tecnológica, desarrollamos proyectos llave en mano —
                diferenciándonos por el cumplimiento en la ejecución, la calidad y el
                profesionalismo en cada obra entregada.
              </p>
              <p data-en>
                With highly trained personnel — qualified in their area of expertise and
                continuously updated technologically — we deliver turnkey projects, setting
                ourselves apart through execution discipline, quality and professionalism on every
                site.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="values">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" data-es>Misión, visión, valores</span>
            <span className="eyebrow" data-en>Mission, vision, values</span>
            <h2 data-es>Lo que nos define</h2>
            <h2 data-en>What defines us</h2>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title.es} className="value">
                <div className="icon">{v.icon}</div>
                <h3 data-es>{v.title.es}</h3>
                <h3 data-en>{v.title.en}</h3>
                <p data-es>{v.desc.es}</p>
                <p data-en>{v.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="stats-banner">
        <div className="container">
          <div className="stats-banner-grid">
            <Stat to={29} es="Años" en="Years" />
            <Stat to={500} es="Proyectos" en="Projects" />
            <Stat to={200} es="Sitios Telecom" en="Telecom Sites" />
            <Stat to={15} es="Clientes Recurrentes" en="Repeat Clients" />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2 data-es>¿Trabajamos juntos?</h2>
          <h2 data-en>Shall we work together?</h2>
          <p data-es>Conversemos sobre tu próximo proyecto. Nuestro equipo está listo para atenderte.</p>
          <p data-en>Let&apos;s talk about your next project. Our team is ready to help.</p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span data-es>Contactar</span>
              <span data-en>Contact</span>
            </Link>
            <Link href="/proyectos" className="btn btn-outline">
              <span data-es>Ver Proyectos</span>
              <span data-en>View Projects</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}

function Stat({ to, es, en }: { to: number; es: string; en: string }) {
  return (
    <div>
      <div className="num">
        <Counter to={to} />
        <small>+</small>
      </div>
      <div className="label" data-es>{es}</div>
      <div className="label" data-en>{en}</div>
    </div>
  );
}

const VALUES = [
  {
    icon: "🎯",
    title: { es: "Misión", en: "Mission" },
    desc: {
      es: "Somos una empresa constructora dedicada a proyectos de obra civil, remodelaciones y telecomunicaciones. Contamos con equipo, maquinaria y transporte para atender proyectos de infraestructura de mediana y gran complejidad, tanto gubernamentales como privados, satisfaciendo a nuestros clientes con un riguroso control de calidad en los productos terminados.",
      en: "We are a construction company specialized in civil works, remodeling and telecommunications projects. We have the equipment, machinery and transport to serve mid- to large-scale infrastructure projects — government and private — satisfying our clients with strict quality control on every finished product.",
    },
  },
  {
    icon: "🚀",
    title: { es: "Visión", en: "Vision" },
    desc: {
      es: "Convertirnos en la mejor y más eficiente empresa constructora de Panamá, liderando el mercado por responsabilidad y eficiencia, cumpliendo a tiempo cada trabajo encomendado, y haciendo que nuestro personal se sienta motivado y orgulloso de pertenecer a la organización.",
      en: "Becoming Panama's best and most efficient construction company — leading the market through responsibility and efficiency, delivering every job on time, and making our team feel motivated and proud to belong to the organization.",
    },
  },
  {
    icon: "🤝",
    title: { es: "Llave en Mano", en: "Turnkey Delivery" },
    desc: {
      es: "Nuestra alianza estratégica con Grupo ITM combina la experiencia e infraestructura de ambas empresas, permitiéndonos brindar proyectos llave en mano reduciendo costos y tiempos de entrega.",
      en: "Our strategic alliance with Grupo ITM combines the experience and infrastructure of both companies, letting us deliver turnkey projects with lower costs and shorter lead times.",
    },
  },
  {
    icon: "⚖️",
    title: { es: "Valores", en: "Values" },
    desc: {
      es: "Cumplimiento, calidad y profesionalismo. Fomentamos el control y la calidad del servicio, buscando siempre dar más para lograr la satisfacción del cliente y crecer junto a nuestros aliados.",
      en: "Reliability, quality and professionalism. We foster service quality and control, always going further to ensure client satisfaction and to grow alongside our partners.",
    },
  },
];
