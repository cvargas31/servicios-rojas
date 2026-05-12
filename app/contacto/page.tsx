import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Servicios Rojas, S.A. Tel. +507 229-8840 · proyectos@servicios-rojas.com · Calle E, Casa L 17, Bethania, Panamá. Cotización en 24 h.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Servicios Rojas, S.A.",
    description:
      "Cotiza tu proyecto. Respondemos en menos de 24 horas hábiles.",
    url: "/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/" data-es>Inicio</Link>
            <Link href="/" data-en>Home</Link>
            <span>/</span>
            <span data-es>Contacto</span>
            <span data-en>Contact</span>
          </div>
          <span className="eyebrow" data-es>Hablemos</span>
          <span className="eyebrow" data-en>Let&apos;s talk</span>
          <h1 data-es>Inicia tu próximo proyecto con nosotros</h1>
          <h1 data-en>Start your next project with us</h1>
          <p data-es>
            Respondemos cotizaciones en menos de 24 horas hábiles. Cuéntanos el alcance, plazo y
            requerimientos técnicos.
          </p>
          <p data-en>
            We respond within 24 business hours. Tell us scope, timeline and technical
            requirements.
          </p>
        </div>
      </section>

      <Reveal as="section" className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3 data-es>Información de contacto</h3>
              <h3 data-en>Contact information</h3>
              <p data-es>
                Estamos disponibles para atender tu consulta técnica o comercial. Contacto directo,
                sin intermediarios.
              </p>
              <p data-en>
                Available for technical or commercial inquiries. Direct contact, no intermediaries.
              </p>

              <div className="contact-item">
                <div className="icon">📍</div>
                <div>
                  <h5 data-es>Oficina principal</h5>
                  <h5 data-en>Main office</h5>
                  <p>
                    Calle E, Casa L 17<br />
                    Bethania, Panamá
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">☎</div>
                <div>
                  <h5 data-es>Teléfono / Fax</h5>
                  <h5 data-en>Phone / Fax</h5>
                  <a href="tel:+5072298840">+507 229-8840</a>
                  <br />
                  <span style={{ color: "var(--slate-500)" }}>Fax: +507 229-6415</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">✉</div>
                <div>
                  <h5 data-es>Correo</h5>
                  <h5 data-en>Email</h5>
                  <a href="mailto:proyectos@servicios-rojas.com">proyectos@servicios-rojas.com</a>
                  <br />
                  <a href="mailto:comunicaciones@servicios-rojas.com">comunicaciones@servicios-rojas.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">👥</div>
                <div>
                  <h5 data-es>Contactos directos</h5>
                  <h5 data-en>Direct contacts</h5>
                  <p style={{ fontSize: 14, lineHeight: 1.7 }}>
                    <strong>Ing. Arturo I. Rojas Vivero</strong><br />
                    <span data-es>Gerente General</span>
                    <span data-en>General Manager</span>
                    <br />
                    <a href="mailto:arojas@servicios-rojas.com">arojas@servicios-rojas.com</a>
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>
                    <strong>Ing. Arturo I. Rojas Lozano</strong><br />
                    <span data-es>Gerente Proyectos Obra Civil</span>
                    <span data-en>Civil Works Manager</span>
                    <br />
                    <a href="mailto:arojaslozano@servicios-rojas.com">arojaslozano@servicios-rojas.com</a>
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>
                    <strong>Ing. Carlos Lozano Yaber</strong><br />
                    <span data-es>Gerente Telecom</span>
                    <span data-en>Telecom Manager</span>
                    <br />
                    <a href="mailto:clozanoy@servicios-rojas.com">clozanoy@servicios-rojas.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">⏰</div>
                <div>
                  <h5 data-es>Horario</h5>
                  <h5 data-en>Hours</h5>
                  <p data-es>Lun – Vie · 8:00 – 17:00</p>
                  <p data-en>Mon – Fri · 8:00 – 17:00</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </Reveal>

      <section style={{ padding: 0 }}>
        <iframe
          title="Servicios Rojas — Bethania, Panamá"
          src="https://www.google.com/maps?q=Bethania,+Panamá&output=embed"
          width="100%"
          height={450}
          style={{ border: 0, display: "block" }}
          loading="lazy"
        />
      </section>
    </>
  );
}
