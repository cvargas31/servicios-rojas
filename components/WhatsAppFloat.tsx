"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "50766888362";
const WHATSAPP_MESSAGE =
  "Hola, me gustaría cotizar un proyecto con Servicios Rojas.";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18269078957/J4NICJLO3sYcEK2LsIdE",
      });
    }
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Escríbenos por WhatsApp"
      onClick={handleWhatsAppClick}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.255.59 4.456 1.711 6.396L3.2 28.8l6.589-1.706a12.78 12.78 0 0 0 6.214 1.594h.005c7.069 0 12.8-5.731 12.8-12.8 0-3.42-1.331-6.633-3.749-9.052A12.71 12.71 0 0 0 16.003 3.2zm0 23.32h-.004a10.6 10.6 0 0 1-5.402-1.479l-.388-.23-4.013 1.04 1.07-3.91-.252-.402a10.59 10.59 0 0 1-1.622-5.642c0-5.86 4.768-10.627 10.627-10.627 2.84 0 5.51 1.106 7.517 3.116a10.55 10.55 0 0 1 3.114 7.517c0 5.86-4.768 10.617-10.647 10.617zm5.832-7.953c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.825 1.04-1.012 1.252-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.847-1.59-1.892-1.777-2.212-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.985-2.373-.26-.624-.524-.539-.72-.549-.187-.01-.4-.012-.613-.012-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.255 3.443 5.467 4.83.764.33 1.36.527 1.825.674.767.243 1.465.21 2.016.127.615-.092 1.892-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"
        />
      </svg>
      <span className="whatsapp-float-pulse" aria-hidden="true" />
    </Link>
  );
}
