import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Términos y condiciones de uso del sitio web de Servicios Rojas, S.A.",
  alternates: { canonical: "/terminos" },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/" data-es>Inicio</Link>
            <Link href="/" data-en>Home</Link>
            <span>/</span>
            <span data-es>Términos</span>
            <span data-en>Terms</span>
          </div>
          <span className="eyebrow" data-es>Legal</span>
          <span className="eyebrow" data-en>Legal</span>
          <h1 data-es>Términos de Uso</h1>
          <h1 data-en>Terms of Use</h1>
          <p data-es>
            Al acceder y utilizar el sitio web de Servicios Rojas, S.A. aceptas los términos y
            condiciones descritos a continuación.
          </p>
          <p data-en>
            By accessing and using the Servicios Rojas, S.A. website you accept the terms and
            conditions below.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container" style={{ maxWidth: 880 }}>
          <article className="legal-body" data-es>
            <h2>1. Información del sitio</h2>
            <p>
              Este sitio es una vitrina informativa de los servicios prestados por Servicios
              Rojas, S.A. en Panamá. Cualquier propuesta o contrato resulta de un proceso comercial
              separado.
            </p>

            <h2>2. Propiedad intelectual</h2>
            <p>
              Los contenidos, marcas, fotografías y materiales gráficos del sitio son propiedad de
              Servicios Rojas, S.A. o de sus respectivos titulares. Queda prohibida su reproducción
              sin autorización escrita.
            </p>

            <h2>3. Limitación de responsabilidad</h2>
            <p>
              La información publicada se ofrece de buena fe y a título informativo. Servicios
              Rojas, S.A. no garantiza la disponibilidad ininterrumpida del sitio ni la ausencia
              total de errores.
            </p>

            <h2>4. Enlaces a terceros</h2>
            <p>
              Este sitio puede contener enlaces a sitios de terceros. No nos hacemos responsables
              de su contenido ni de sus prácticas de privacidad.
            </p>

            <h2>5. Modificaciones</h2>
            <p>
              Servicios Rojas, S.A. puede actualizar estos términos en cualquier momento. La
              versión vigente estará siempre disponible en esta página.
            </p>

            <h2>6. Legislación aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Panamá. Cualquier disputa
              será resuelta en los tribunales competentes del país.
            </p>

            <p>
              <em>Última actualización: {new Date().getFullYear()}.</em>
            </p>
          </article>

          <article className="legal-body" data-en>
            <h2>1. About this site</h2>
            <p>
              This site is an informational showcase of services provided by Servicios Rojas, S.A.
              in Panamá. Any proposal or contract is the result of a separate commercial process.
            </p>

            <h2>2. Intellectual property</h2>
            <p>
              Contents, trademarks, photographs and graphic materials on the site are owned by
              Servicios Rojas, S.A. or their respective holders. Reproduction without written
              permission is prohibited.
            </p>

            <h2>3. Limitation of liability</h2>
            <p>
              Information is provided in good faith for informational purposes. Servicios Rojas,
              S.A. does not guarantee uninterrupted availability or complete absence of errors.
            </p>

            <h2>4. Third-party links</h2>
            <p>
              This site may contain links to third-party sites. We are not responsible for their
              content or privacy practices.
            </p>

            <h2>5. Changes</h2>
            <p>
              Servicios Rojas, S.A. may update these terms at any time. The current version will
              always be available on this page.
            </p>

            <h2>6. Governing law</h2>
            <p>
              These terms are governed by the laws of the Republic of Panama. Any dispute will be
              resolved by the competent courts of the country.
            </p>

            <p>
              <em>Last updated: {new Date().getFullYear()}.</em>
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
