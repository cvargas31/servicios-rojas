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
            <p data-es>
              Soluciones integradas de ingeniería y telecomunicaciones en Panamá desde 1997.
              Construyendo la infraestructura del futuro con experiencia y compromiso.
            </p>
            <p data-en>
              Integrated engineering and telecommunications solutions in Panama since 1997.
              Building the infrastructure of the future with expertise and commitment.
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
            <h5 data-es>Empresa</h5>
            <h5 data-en>Company</h5>
            <ul>
              <li>
                <Link href="/nosotros" data-es>Nosotros</Link>
                <Link href="/nosotros" data-en>About</Link>
              </li>
              <li>
                <Link href="/proyectos" data-es>Proyectos</Link>
                <Link href="/proyectos" data-en>Projects</Link>
              </li>
              <li>
                <Link href="/contacto" data-es>Trabaja con nosotros</Link>
                <Link href="/contacto" data-en>Work with us</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5 data-es>Servicios</h5>
            <h5 data-en>Services</h5>
            <ul>
              <li><Link href="/servicios#telecom">Telecom</Link></li>
              <li>
                <Link href="/servicios#civil" data-es>Civil</Link>
                <Link href="/servicios#civil" data-en>Civil</Link>
              </li>
              <li><Link href="/servicios#data">Data Centers</Link></li>
              <li>
                <Link href="/servicios#remodelacion" data-es>Remodelaciones</Link>
                <Link href="/servicios#remodelacion" data-en>Remodeling</Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5 data-es>Contacto</h5>
            <h5 data-en>Contact</h5>
            <ul>
              <li>📍 Calle E, Casa L 17, Bethania, Panamá</li>
              <li>☎ +507 229-8840</li>
              <li>💬 +507 6688-8362 (WhatsApp)</li>
              <li>✉ proyectos@servicios-rojas.com</li>
              <li>
                <span data-es>Lun – Vie 8:00 – 17:00 · Sáb 8:00 – 12:00</span>
                <span data-en>Mon – Fri 8:00 – 17:00 · Sat 8:00 – 12:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>
            © {new Date().getFullYear()} Servicios Rojas, S.A. <span data-es>Todos los derechos reservados.</span>
            <span data-en>All rights reserved.</span>
          </div>
          <div>
            <Link href="/privacidad" data-es>Privacidad</Link>
            <Link href="/privacidad" data-en>Privacy</Link> ·{" "}
            <Link href="/terminos" data-es>Términos</Link>
            <Link href="/terminos" data-en>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
