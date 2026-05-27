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
          <span className="eyebrow">Legal</span>
          <h1>Términos de Uso</h1>
          <p>
            Al acceder y utilizar el sitio web de Servicios Rojas, S.A. aceptas los términos y
            condiciones descritos a continuación.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container" style={{ maxWidth: 880 }}>
          <article className="legal-body">
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
        </div>
      </section>
    </>
  );
}
