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
      <h3>Solicita una cotización</h3>
      <p>Completa el formulario y nuestro equipo te contactará para coordinar.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre Completo</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Empresa</label>
            <input type="text" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Correo</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" required />
          </div>
        </div>
        <div className="form-group">
          <label>Tipo de Proyecto</label>
          <select required defaultValue="">
            <option value="" disabled>— Selecciona —</option>
            <option>Telecomunicaciones</option>
            <option>Ingeniería Civil</option>
            <option>Data Center</option>
            <option>Remodelaciones y Construcción Comercial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mensaje / Detalles</label>
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
              <span>Enviar Solicitud →</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
