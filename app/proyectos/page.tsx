import Link from "next/link";
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
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/" data-es>Inicio</Link>
            <Link href="/" data-en>Home</Link>
            <span>/</span>
            <span data-es>Proyectos</span>
            <span data-en>Projects</span>
          </div>
          <span className="eyebrow" data-es>Portafolio</span>
          <span className="eyebrow" data-en>Portfolio</span>
          <h1 data-es>Proyectos que han transformado la infraestructura panameña</h1>
          <h1 data-en>Projects transforming Panama&apos;s infrastructure</h1>
          <p data-es>
            Una selección de proyectos representativos entregados a clientes corporativos,
            operadores telecom, gobierno y desarrolladores industriales.
          </p>
          <p data-en>
            A selection of representative projects delivered to corporate clients, telecom
            operators, government and industrial developers.
          </p>
        </div>
      </section>

      <Reveal as="section" className="projects-bg">
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
