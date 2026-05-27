import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="logo" aria-label="Servicios Rojas, S.A.">
              <Image
                src="/images/logo-letra.png"
                alt="Servicios Rojas, S.A."
                width={2716}
                height={1182}
                className="logo-img"
                sizes="240px"
              />
            </Link>
            <p>
              Soluciones integradas de ingeniería y telecomunicaciones en Panamá desde 1997.
              Construyendo la infraestructura del futuro con experiencia y compromiso.
            </p>
            <div className="socials">
              <a href="mailto:proyectos@servicios-rojas.com" aria-label="Email">@</a>
              <a href="tel:+5072298840" aria-label="Teléfono">☎</a>
              <a
                href="https://wa.me/50766888362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h5>Empresa</h5>
            <ul>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/proyectos">Proyectos</Link>
              </li>
              <li>
                <Link href="/contacto">Trabaja con nosotros</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Servicios</h5>
            <ul>
              <li><Link href="/servicios#telecom">Telecom</Link></li>
              <li>
                <Link href="/servicios#civil">Civil</Link>
              </li>
              <li><Link href="/servicios/data-centers">Data Centers</Link></li>
              <li>
                <Link href="/servicios#remodelacion">Remodelaciones</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Contacto</h5>
            <ul>
              <li>📍 Calle E, Casa L 17, Bethania, Panamá</li>
              <li>☎ +507 229-8840</li>
              <li>💬 +507 6688-8362 (WhatsApp)</li>
              <li>✉ proyectos@servicios-rojas.com</li>
              <li>
                <span>Lun – Vie 8:00 – 17:00 · Sáb 8:00 – 12:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>
            © {new Date().getFullYear()} Servicios Rojas, S.A. <span>Todos los derechos reservados.</span>
          </div>
          <div>
            <Link href="/privacidad">Privacidad</Link> ·{" "}
            <Link href="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
