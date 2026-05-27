"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectLightbox from "./ProjectLightbox";

export type ProjectCategory = "all" | "TELECOM" | "CIVIL" | "DATA" | "MAINT";

export type ProjectItem = {
  slug: string;
  cat: Exclude<ProjectCategory, "all">;
  title: { es: string; en: string };
  desc: { es: string; en: string };
  location: string;
  year: string;
  img: string;
  gallery?: string[];
  tagLabel: string;
};

const CATEGORIES: { id: ProjectCategory; es: string; en: string }[] = [
  { id: "all", es: "Todos", en: "All" },
  { id: "TELECOM", es: "Telecom", en: "Telecom" },
  { id: "CIVIL", es: "Civil", en: "Civil" },
  { id: "DATA", es: "Data Center", en: "Data Center" },
  { id: "MAINT", es: "Mantenimiento", en: "Maintenance" },
];

export default function ProjectFilter({ projects }: { projects: ProjectItem[] }) {
  const [active, setActive] = useState<ProjectCategory>("all");
  const [openProject, setOpenProject] = useState<ProjectItem | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const visible = projects.filter((p) => active === "all" || p.cat === active);

  const openGallery = (project: ProjectItem) => {
    if (project.gallery && project.gallery.length > 0) {
      setOpenProject(project);
      setImageIndex(0);
    }
  };

  return (
    <>
      <div className="filter-bar">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={active === c.id ? "active" : undefined}
            onClick={() => setActive(c.id)}
            type="button"
          >
            <span>{c.es}</span>
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} item={p} onOpen={() => openGallery(p)} />
        ))}
      </div>
      {openProject?.gallery && (
        <ProjectLightbox
          images={openProject.gallery}
          title={openProject.title}
          currentIndex={imageIndex}
          onClose={() => setOpenProject(null)}
          onNavigate={setImageIndex}
        />
      )}
    </>
  );
}

function ProjectCard({ item, onOpen }: { item: ProjectItem; onOpen: () => void }) {
  const hasGallery = !!(item.gallery && item.gallery.length > 0);
  const galleryCount = item.gallery?.length ?? 0;

  const interactiveProps = hasGallery
    ? {
        role: "button" as const,
        tabIndex: 0,
        onClick: onOpen,
        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        },
        "aria-label": `Abrir galería: ${item.title.es}`,
      }
    : { style: { cursor: "default" as const } };

  return (
    <article
      className={`project${hasGallery ? " project-clickable" : ""}`}
      itemScope
      itemType="https://schema.org/CreativeWork"
      {...interactiveProps}
    >
      <div className="project-img">
        <span className="project-cat">{item.tagLabel}</span>
        <Image
          src={item.img}
          alt={item.title.es}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          itemProp="image"
        />
        {hasGallery && (
          <span className="project-gallery-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-12.5-5.5 2.5 3.01L14.5 12l4.5 6H5z"
              />
            </svg>
            {galleryCount}
          </span>
        )}
      </div>
      <div className="project-body">
        <h3 itemProp="name">{item.title.es}</h3>
        <p itemProp="description">{item.desc.es}</p>
        <div className="project-meta">
          <span itemProp="locationCreated">📍 {item.location}</span>
          <strong>{item.year}</strong>
        </div>
      </div>
    </article>
  );
}
