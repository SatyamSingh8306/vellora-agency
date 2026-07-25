"use client";

import { useCallback, useEffect, useId } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { WorkShot } from "../lib/works";

type ImageLightboxProps = {
  shots: WorkShot[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function ImageLightbox({
  shots,
  index,
  open,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const titleId = useId();
  const shot = shots[index];

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + shots.length) % shots.length);
  }, [index, onIndexChange, shots.length]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % shots.length);
  }, [index, onIndexChange, shots.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  if (!open || !shot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      {shots.length > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      ) : null}

      <div
        className="relative flex max-h-[85vh] w-full max-w-6xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[75vh] w-full overflow-hidden rounded-xl">
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1600}
            height={1000}
            className="mx-auto h-auto max-h-[75vh] w-auto max-w-full object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <p
          id={titleId}
          className="font-instrument-sans mt-4 text-center text-sm text-white/70"
        >
          {shot.label ?? shot.alt}
          {shots.length > 1 ? (
            <span className="ml-2 text-white/40">
              {index + 1} / {shots.length}
            </span>
          ) : null}
        </p>
      </div>
    </div>
  );
}
