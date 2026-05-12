"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSent(true);
    setTimeout(() => {
      form.reset();
      setSent(false);
    }, 3000);
  };

  return (
    <div className="contact-form">
      <h3 data-es>Solicita una cotización</h3>
      <h3 data-en>Request a quote</h3>
      <p data-es>Completa el formulario y nuestro equipo te contactará para coordinar.</p>
      <p data-en>Fill out the form and our team will contact you to coordinate.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label data-es>Nombre Completo</label>
            <label data-en>Full Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label data-es>Empresa</label>
            <label data-en>Company</label>
            <input type="text" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label data-es>Correo</label>
            <label data-en>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label data-es>Teléfono</label>
            <label data-en>Phone</label>
            <input type="tel" required />
          </div>
        </div>
        <div className="form-group">
          <label data-es>Tipo de Proyecto</label>
          <label data-en>Project Type</label>
          <select required defaultValue="">
            <option value="" disabled>— Selecciona —</option>
            <option>Telecomunicaciones</option>
            <option>Ingeniería Civil</option>
            <option>Data Center</option>
            <option>Remodelaciones y Construcción Comercial</option>
          </select>
        </div>
        <div className="form-group">
          <label data-es>Mensaje / Detalles</label>
          <label data-en>Message / Details</label>
          <textarea rows={5} required />
        </div>
        <button
          type="submit"
          className="form-submit"
          style={sent ? { background: "#16a34a" } : undefined}
        >
          {sent ? (
            "✓ Mensaje Enviado"
          ) : (
            <>
              <span data-es>Enviar Solicitud →</span>
              <span data-en>Submit Request →</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
