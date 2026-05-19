import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Servicios Rojas, S.A. Tel. +507 229-8840 · WhatsApp +507 6688-8362 · proyectos@servicios-rojas.com · Calle E, Casa L 17, Bethania, Panamá. Cotización en 24 h para proyectos de ingeniería civil, telecomunicaciones y data centers.",
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
      <section className="hero hero--page">
        <div className="hero-split">
          <div className="hero-photo">
            <Image
              src="/images/sr-hero-banner.jpg"
              alt="Equipo de ingeniería Servicios Rojas en Panamá"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-photo-tint" />
            <div className="hero-wordmark" aria-hidden="true">
              <span>Contacto</span>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="eyebrow" data-es>Hablemos</span>
              <span className="eyebrow" data-en>Let&apos;s talk</span>
              <h1 data-es>Inicia tu próximo proyecto con nosotros</h1>
              <h1 data-en>Start your next project with us</h1>
              <p className="hero-sub" data-es>
                Respondemos cotizaciones en menos de 24 horas hábiles. Cuéntanos el alcance, plazo
                y requerimientos técnicos.
              </p>
              <p className="hero-sub" data-en>
                We respond within 24 business hours. Tell us scope, timeline and technical
                requirements.
              </p>
              <div className="hero-actions">
                <a href="tel:+5072298840" className="btn btn-pill">+507 229-8840</a>
                <a
                  href="https://wa.me/50766888362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-link"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
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
                  <h5 data-es>Teléfono</h5>
                  <h5 data-en>Phone</h5>
                  <a href="tel:+5072298840">+507 229-8840</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">💬</div>
                <div>
                  <h5 data-es>Celular / WhatsApp</h5>
                  <h5 data-en>Mobile / WhatsApp</h5>
                  <a href="tel:+50766888362">+507 6688-8362</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">✉</div>
                <div>
                  <h5 data-es>Correo</h5>
                  <h5 data-en>Email</h5>
                  <a href="mailto:proyectos@servicios-rojas.com">proyectos@servicios-rojas.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">⏰</div>
                <div>
                  <h5 data-es>Horario</h5>
                  <h5 data-en>Hours</h5>
                  <p data-es>Lun – Vie · 8:00 – 17:00</p>
                  <p data-en>Mon – Fri · 8:00 – 17:00</p>
                  <p data-es>Sáb · 8:00 – 12:00</p>
                  <p data-en>Sat · 8:00 – 12:00</p>
                </div>
              </div>

              <a
                href="https://wa.me/50766888362?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Servicios%20Rojas."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Escríbenos por WhatsApp"
              >
                <span aria-hidden>💬</span>
                <span data-es>Escríbenos por WhatsApp</span>
                <span data-en>Message us on WhatsApp</span>
              </a>
            </div>

            <ContactForm />
          </div>
        </div>
      </Reveal>

      <section style={{ padding: 0 }}>
        <iframe
          title="Servicios Rojas, S.A. — Bethania, Panamá"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.563297084225!2d-79.52591312427592!3d9.012268789249159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca95838918aa5%3A0x81b3c417a117f48a!2sServicios%20Rojas%2C%20S.A.!5e0!3m2!1ses!2spa!4v1778948011409!5m2!1ses!2spa"
          width="100%"
          height={450}
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </>
  );
}
