import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.servicios-rojas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/nosotros", priority: 0.8, changeFrequency: "yearly" },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/data-centers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/proyectos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacidad", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terminos", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
