"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "./LangProvider";

const links: { href: string; es: string; en: string }[] = [
  { href: "/", es: "Inicio", en: "Home" },
  { href: "/nosotros", es: "Nosotros", en: "About" },
  { href: "/servicios", es: "Servicios", en: "Services" },
  { href: "/proyectos", es: "Proyectos", en: "Projects" },
  { href: "/contacto", es: "Contacto", en: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const close = () => setOpen(false);

  const langToggle = (extraClass?: string) => (
    <div className={`lang-toggle${extraClass ? " " + extraClass : ""}`}>
      <button
        data-lang="es"
        className={lang === "es" ? "active" : undefined}
        onClick={() => setLang("es")}
        type="button"
        aria-label="Español"
      >
        ES
      </button>
      <button
        data-lang="en"
        className={lang === "en" ? "active" : undefined}
        onClick={() => setLang("en")}
        type="button"
        aria-label="English"
      >
        EN
      </button>
    </div>
  );

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={close} aria-label="Servicios Rojas, S.A.">
          <Image
            src="/images/logo-letra.png"
            alt="Servicios Rojas, S.A."
            width={2716}
            height={1182}
            priority
            className="logo-img logo-desktop"
            sizes="220px"
          />
          <Image
            src="/images/logotipo-servicios-rojas.png"
            alt="Servicios Rojas, S.A."
            width={999}
            height={654}
            priority
            className="logo-img logo-mobile"
            sizes="80px"
          />
        </Link>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={isActive(l.href) ? "active" : undefined}
                onClick={close}
                data-es
              >
                {l.es}
              </Link>
              <Link
                href={l.href}
                className={isActive(l.href) ? "active" : undefined}
                onClick={close}
                data-en
              >
                {l.en}
              </Link>
            </li>
          ))}
          <li className="nav-mobile-only nav-drawer-extra">
            {langToggle()}
          </li>
          <li className="nav-mobile-only nav-drawer-extra">
            <Link
              href="/contacto"
              className="btn btn-primary nav-drawer-cta"
              onClick={close}
            >
              <span data-es>Cotizar</span>
              <span data-en>Quote</span>
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          {langToggle("nav-desktop-only")}
          <Link
            href="/contacto"
            className="btn btn-primary nav-desktop-only"
            style={{ padding: "10px 20px", fontSize: 13 }}
          >
            <span data-es>Cotizar</span>
            <span data-en>Quote</span>
          </Link>
          <button
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
