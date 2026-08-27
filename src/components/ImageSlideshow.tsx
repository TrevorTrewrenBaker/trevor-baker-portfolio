// src/components/ImageSlideshow.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageSlideshowProps {
  images: string[];
  altPrefix: string;
}

export default function ImageSlideshow({ images, altPrefix }: ImageSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const goPrev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const goNext = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="space-y-3">
      {/* Main slide */}
      <div className="relative rounded-lg overflow-hidden bg-(--color-primary)/5 group">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="w-full block cursor-zoom-in"
        >
          <img
            src={images[current]}
            alt={`${altPrefix} screenshot ${current + 1}`}
            className="w-full h-auto max-h-[500px] object-contain bg-(--color-primary)/5"
          />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                bg-black/50 text-white opacity-0 group-hover:opacity-100
                transition-opacity hover:bg-black/70"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                bg-black/50 text-white opacity-0 group-hover:opacity-100
                transition-opacity hover:bg-black/70"
            >
              <ChevronRight size={20} />
            </button>

            <span className="absolute bottom-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-black/50 text-white">
              {current + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`shrink-0 rounded-md overflow-hidden border-2 transition-colors
                ${
                  index === current
                    ? "border-(--color-primary)"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
            >
              <img
                src={src}
                alt={`${altPrefix} thumbnail ${index + 1}`}
                className="w-20 h-14 object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          <img
            src={images[current]}
            alt={`${altPrefix} screenshot ${current + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next screenshot"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {images.length > 1 && (
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium px-3 py-1 rounded-full bg-white/10 text-white">
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      )}
    </div>
  );
}