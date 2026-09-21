"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./gallery.module.css";

export type GalleryItem = {
  src: string;
  caption: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + items.length - 1) % items.length));
  }, [items.length]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  const active = openIndex !== null ? items[openIndex] : null;

  /** Spans that always fill a 12-col row (6+6, 4+4+4, 8+4). */
  const layout = [
    "w6",
    "w6",
    "w4",
    "w4",
    "w4",
    "w8",
    "w4",
    "w4",
    "w4",
    "w4",
    "w6",
    "w6",
    "w4",
    "w4",
    "w4",
  ] as const;

  return (
    <>
      <div className={styles.mosaic}>
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className={`${styles.mosaicItem} ${styles[layout[index % layout.length]]}`}
            onClick={() => setOpenIndex(index)}
            aria-label={`Open ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.caption}
              fill
              className={styles.mosaicImg}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw"
            />
            <span className={styles.mosaicCaption}>{item.caption}</span>
          </button>
        ))}
      </div>

      {active ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button type="button" className={styles.lightboxBackdrop} onClick={close} aria-label="Close lightbox" />
          <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close">
            ×
          </button>
          <button type="button" className={styles.lightboxPrev} onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <div className={styles.lightboxStage}>
            <Image
              src={active.src}
              alt={active.caption}
              width={1400}
              height={1000}
              className={styles.lightboxImg}
              priority
            />
            <p className={styles.lightboxCaption}>{active.caption}</p>
            <p className={styles.lightboxCount}>
              {(openIndex ?? 0) + 1} / {items.length}
            </p>
          </div>
          <button type="button" className={styles.lightboxNext} onClick={next} aria-label="Next image">
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
