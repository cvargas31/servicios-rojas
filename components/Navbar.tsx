"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links: { href: string; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/servicios/data-centers", label: "Data Centers" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeHref = (() => {
    if (pathname === "/") return "/";
    let best = "";
    for (const l of links) {
      if (l.href !== "/" && pathname.startsWith(l.href) && l.href.length > best.length) {
        best = l.href;
      }
    }
    return best;
  })();

  const isActive = (href: string) => href === activeHref;

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}${open ? " nav--menu-open" : ""}${pathname !== "/" ? " nav--solid" : ""}`}>
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
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="nav-mobile-only nav-drawer-extra">
            <Link
              href="/contacto"
              className="btn btn-primary nav-drawer-cta"
              onClick={close}
            >
              Cotizar
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          <Link
            href="/contacto"
            className="btn btn-primary nav-desktop-only"
            style={{ padding: "10px 20px", fontSize: 13 }}
          >
            Cotizar
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
