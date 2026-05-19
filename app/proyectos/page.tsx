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
              <span className="eyebrow" data-es>Portafolio</span>
              <span className="eyebrow" data-en>Portfolio</span>
              <h1 data-es>Proyectos que han transformado la infraestructura panameña</h1>
              <h1 data-en>Projects transforming Panama&apos;s infrastructure</h1>
              <p className="hero-sub" data-es>
                Una selección de proyectos representativos entregados a clientes corporativos,
                operadores telecom, gobierno y desarrolladores industriales.
              </p>
              <p className="hero-sub" data-en>
                A selection of representative projects delivered to corporate clients, telecom
                operators, government and industrial developers.
              </p>
              <div className="hero-actions">
                <Link href="/contacto" className="btn btn-pill">
                  <span data-es>Cotizar Proyecto</span>
                  <span data-en>Quote Project</span>
                </Link>
                <a href="#proyectos-grid" className="hero-link">
                  <span data-es>Ver portafolio</span>
                  <span data-en>View portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reveal as="section" id="proyectos-grid" className="projects-bg">
        <div className="container">
          <ProjectFilter projects={PROJECTS} />
        </div>
      </Reveal>

      <TrustedCarousel
        label={{
          es: "Clientes destacados que confían en nuestra ingeniería",
          en: "Featured clients that trust our engineering",
        }}
      />

      <Reveal as="section" className="cta">
        <div className="cta-glow"></div>
        <div className="container">
          <h2 data-es>¿Tu proyecto será el siguiente?</h2>
          <h2 data-en>Will yours be the next project?</h2>
          <p data-es>Cuéntanos los detalles. Prepararemos una propuesta técnica adaptada.</p>
          <p data-en>Tell us the details. We&apos;ll prepare a tailored technical proposal.</p>
          <div className="cta-actions">
            <Link href="/contacto" className="btn btn-primary">
              <span data-es>Iniciar Proyecto</span>
              <span data-en>Start Project</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </>
  );
}
