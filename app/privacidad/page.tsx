import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Servicios Rojas, S.A. — Cómo recolectamos, usamos y protegemos tus datos personales.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Política</span>
          <h1>Política de Privacidad</h1>
          <p>
            Servicios Rojas, S.A. respeta tu privacidad. Esta política describe cómo recolectamos,
            usamos y protegemos tu información personal en este sitio web.
          </p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container" style={{ maxWidth: 880 }}>
          <article className="legal-body">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              Servicios Rojas, S.A., con domicilio en Calle E, Casa L 17, Bethania, Panamá, es la
              entidad responsable del tratamiento de los datos personales recolectados a través de
              este sitio web. Para cualquier consulta puedes escribirnos a{" "}
              <a href="mailto:proyectos@servicios-rojas.com">proyectos@servicios-rojas.com</a>.
            </p>

            <h2>2. Datos que recolectamos</h2>
            <ul>
              <li>
                <strong>Datos del formulario de contacto:</strong> nombre, empresa, correo,
                teléfono, tipo de proyecto y mensaje.
              </li>
              <li>
                <strong>Datos técnicos:</strong> dirección IP, tipo de navegador, páginas visitadas
                y tiempo en el sitio, mediante cookies y herramientas de analítica.
              </li>
            </ul>

            <h2>3. Finalidades del tratamiento</h2>
            <ul>
              <li>Responder a tus solicitudes de cotización y consultas comerciales.</li>
              <li>Mejorar la experiencia del sitio y medir su desempeño.</li>
              <li>
                Cumplir con obligaciones legales y comerciales relacionadas con la contratación de
                servicios.
              </li>
            </ul>

            <h2>4. Cookies y herramientas de medición</h2>
            <p>
              Utilizamos cookies propias y de terceros (Google Analytics, Google Ads y Google Tag
              Manager) para analizar el tráfico y medir el desempeño de campañas publicitarias.
              Puedes desactivar las cookies desde la configuración de tu navegador.
            </p>

            <h2>5. Conservación de los datos</h2>
            <p>
              Los datos del formulario se conservan durante el tiempo necesario para gestionar tu
              solicitud y, posteriormente, durante los plazos legales aplicables.
            </p>

            <h2>6. Compartir datos con terceros</h2>
            <p>
              No vendemos ni cedemos tus datos personales. Compartimos información únicamente con
              proveedores tecnológicos que prestan servicios bajo acuerdos de confidencialidad
              (alojamiento, analítica, correo).
            </p>

            <h2>7. Tus derechos</h2>
            <p>
              Puedes solicitar el acceso, rectificación, oposición o eliminación de tus datos
              escribiéndonos a{" "}
              <a href="mailto:proyectos@servicios-rojas.com">proyectos@servicios-rojas.com</a>.
            </p>

            <h2>8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política periódicamente. La versión vigente siempre estará
              disponible en esta página.
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
