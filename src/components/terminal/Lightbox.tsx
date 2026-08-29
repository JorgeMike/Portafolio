import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type LightboxImage = {
  src: string;
  alt: string;
  layoutId?: string;
};

function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: LightboxImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const isOpen = images.length > 0;
  const current = images[index];
  const [direction, setDirection] = useState(0);

  const goTo = (nextIndex: number) => {
    if (images.length < 2) return;
    setDirection(nextIndex > index ? 1 : -1);
    onIndexChange((nextIndex + images.length) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo(index + 1);
      if (event.key === "ArrowLeft") goTo(index - 1);
    };
    document.addEventListener("keydown", onKeyDown);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, index, images.length, onClose]);

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          onClick={onClose}
        >
          <div
            className="relative flex max-h-[70vh] max-w-[min(90vw,640px)] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={current.src}
                layoutId={current.layoutId}
                src={current.src}
                alt={current.alt}
                custom={direction}
                initial={
                  current.layoutId
                    ? false
                    : { opacity: 0, x: direction * 60 }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
                className="max-h-[70vh] max-w-[min(90vw,640px)] rounded border border-border object-contain shadow-2xl shadow-black/60"
              />
            </AnimatePresence>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Imagen anterior"
                  className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-lg text-text hover:text-term-green"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Imagen siguiente"
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface/80 text-lg text-text hover:text-term-green"
                >
                  ›
                </button>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-text-dim">
                  {index + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar imagen"
            className="fixed right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 text-lg text-text hover:text-term-green"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Lightbox;
