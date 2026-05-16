"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  images: string[];
  title: { es: string; en: string };
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function ProjectLightbox({
  images,
  title,
  currentIndex,
  onClose,
  onNavigate,
}: Props) {
  const total = images.length;
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setLoading(true);
  }, [currentIndex]);

  const adjacentImages =
    total > 1
      ? [
          images[(currentIndex + 1) % total],
          images[(currentIndex - 1 + total) % total],
        ].filter((src) => src !== images[currentIndex])
      : [];

  const next = useCallback(() => {
    if (total > 1) onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  const prev = useCallback(() => {
    if (total > 1) onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, onClose]);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={title.es}>
      <button
        type="button"
        className="lightbox-backdrop"
        onClick={onClose}
        aria-label="Cerrar"
        tabIndex={-1}
      />
      <div className="lightbox-shell" role="document">
        <header className="lightbox-head">
          <div className="lightbox-titles">
            <h3 data-es>{title.es}</h3>
            <h3 data-en>{title.en}</h3>
            <span className="lightbox-counter">
              {currentIndex + 1} / {total}
            </span>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="lightbox-close"
            onClick={onClose}
            aria-label="Cerrar galería"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.3 5.71 12 12.01l6.3 6.3-1.41 1.42L10.59 13.4l-6.3 6.32-1.41-1.42 6.3-6.29-6.3-6.3L4.29 4.3l6.3 6.3 6.3-6.3z"
              />
            </svg>
          </button>
        </header>

        <div className="lightbox-stage">
          {total > 1 && (
            <button
              type="button"
              className="lightbox-nav prev"
              onClick={prev}
              aria-label="Imagen anterior"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>
          )}

          <div className="lightbox-image-wrap">
            <Image
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`${title.es} — ${currentIndex + 1} de ${total}`}
              fill
              sizes="(max-width: 960px) 100vw, 90vw"
              style={{ objectFit: "contain" }}
              priority
              onLoad={() => setLoading(false)}
            />
            {loading && (
              <div className="lightbox-spinner" aria-hidden="true">
                <span className="lightbox-spinner-ring" />
              </div>
            )}
          </div>
          <div className="lightbox-preload" aria-hidden="true">
            {adjacentImages.map((src) => (
              <div key={src} className="lightbox-preload-slot">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 960px) 100vw, 90vw"
                  priority
                />
              </div>
            ))}
          </div>

          {total > 1 && (
            <button
              type="button"
              className="lightbox-nav next"
              onClick={next}
              aria-label="Imagen siguiente"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="m8.59 16.59 1.41 1.41 6-6-6-6L8.59 7.41 13.17 12z" />
              </svg>
            </button>
          )}
        </div>

        {total > 1 && (
          <div className="lightbox-thumbs" role="tablist" aria-label="Miniaturas">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                className={`lightbox-thumb${i === currentIndex ? " active" : ""}`}
                onClick={() => onNavigate(i)}
                aria-label={`Ir a imagen ${i + 1}`}
              >
                <Image src={src} alt="" fill sizes="96px" style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
