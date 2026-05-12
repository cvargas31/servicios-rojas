"use client";

import Image from "next/image";
import { useState } from "react";

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

  const visible = projects.filter((p) => active === "all" || p.cat === active);

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
            <span data-es>{c.es}</span>
            <span data-en>{c.en}</span>
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} item={p} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <article className="project" itemScope itemType="https://schema.org/CreativeWork">
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
      </div>
      <div className="project-body">
        <h3 data-es itemProp="name">{item.title.es}</h3>
        <h3 data-en>{item.title.en}</h3>
        <p data-es itemProp="description">{item.desc.es}</p>
        <p data-en>{item.desc.en}</p>
        <div className="project-meta">
          <span itemProp="locationCreated">📍 {item.location}</span>
          <strong>{item.year}</strong>
        </div>
      </div>
    </article>
  );
}
