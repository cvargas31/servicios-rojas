"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ProjectLightbox from "./ProjectLightbox";
import { PROJECTS } from "./projects-data";

type FeaturedEntry = {
  slug: string;
  tag: string;
  desc: { es: string; en: string };
};

const FEATURED: FeaturedEntry[] = [
  {
    slug: "datacenter-fusion-claro",
    tag: "DATA CENTER",
    desc: {
      es: "Adecuación civil e instalación del Datacenter Fusion Module 2000 para Claro Panamá.",
      en: "Civil retrofit and Fusion Module 2000 datacenter install for Claro Panamá.",
    },
  },
  {
    slug: "estructura-metalica-villa-zaita",
    tag: "CIVIL",
    desc: {
      es: "Instalación de estructura metálica en la estación del Metro de Villa Zaita para Grupo ITM.",
      en: "Steel structure installation at the Villa Zaita Metro station for Grupo ITM.",
    },
  },
  {
    slug: "76-sitios-tigo",
    tag: "TELECOM",
    desc: {
      es: "Construcción llave en mano de 76 sitios para la red Tigo de Millicom a nivel nacional.",
      en: "Turnkey construction of 76 nationwide sites for the Millicom Tigo network.",
    },
  },
];

export default function HomeFeatured() {
  const items = useMemo(
    () =>
      FEATURED.map((f) => {
        const source = PROJECTS.find((p) => p.slug === f.slug);
        return source ? { ...f, source } : null;
      }).filter((x): x is NonNullable<typeof x> => x !== null),
    [],
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="projects-grid">
        {items.map((it, i) => {
          const { source } = it;
          const hasGallery = !!source.gallery && source.gallery.length > 0;
          return (
            <article
              key={source.slug}
              className={`project${hasGallery ? " project-clickable" : ""}`}
              {...(hasGallery
                ? {
                    role: "button" as const,
                    tabIndex: 0,
                    onClick: () => {
                      setOpenIndex(i);
                      setImageIndex(0);
                    },
                    onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOpenIndex(i);
                        setImageIndex(0);
                      }
                    },
                    "aria-label": `Abrir galería: ${source.title.es}`,
                  }
                : {})}
            >
              <div className="project-img">
                <span className="project-cat">{it.tag}</span>
                <Image
                  src={source.img}
                  alt={source.title.es}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                {hasGallery && (
                  <span className="project-gallery-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-12.5-5.5 2.5 3.01L14.5 12l4.5 6H5z"
                      />
                    </svg>
                    {source.gallery!.length}
                  </span>
                )}
              </div>
              <div className="project-body">
                <h3 data-es>{source.title.es}</h3>
                <h3 data-en>{source.title.en}</h3>
                <p data-es>{it.desc.es}</p>
                <p data-en>{it.desc.en}</p>
                <div className="project-meta">
                  <span>📍 {source.location}</span>
                  <strong>{source.year}</strong>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {active?.source.gallery && (
        <ProjectLightbox
          images={active.source.gallery}
          title={active.source.title}
          currentIndex={imageIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setImageIndex}
        />
      )}
    </>
  );
}
