import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { segaSound } from "../utils/audio";

export default function Slideshow({ artworks, selectedIndex, setSelectedIndex }) {
  const activeArt = selectedIndex !== null ? artworks[selectedIndex] : null;

  const closeModal = useCallback(() => {
    if (segaSound?.playBlip) segaSound.playBlip(600, 0.04);
    setSelectedIndex(null);
  }, [setSelectedIndex]);

  const showNext = useCallback(() => {
    if (segaSound?.playBlip) segaSound.playBlip(1000, 0.03);
    setSelectedIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  }, [artworks.length, setSelectedIndex]);

  const showPrev = useCallback(() => {
    if (segaSound?.playBlip) segaSound.playBlip(800, 0.03);
    setSelectedIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  }, [artworks.length, setSelectedIndex]);

  // Keyboard navigation listeners (Arrow keys & Escape)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev, closeModal]);

  return (
    <AnimatePresence>
      {activeArt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="art-modal-backdrop"
          onClick={closeModal}
        >
          <div className="art-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button className="slideshow-nav-btn prev" onClick={showPrev} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>

            <button className="slideshow-nav-btn next" onClick={showNext} aria-label="Next">
              <ChevronRight size={28} />
            </button>

            <div className="slideshow-stage">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="slide-content-wrapper"
                >
                  <div className="modal-image-wrapper">
                    <img
                      src={activeArt.poster}
                      alt={activeArt.title}
                      className="modal-full-img"
                    />
                  </div>

                  <div className="modal-details">
                    <div className="modal-details-head">
                      <div>
                        <span className="modal-type">{activeArt.type}</span>
                        <h2>{activeArt.title}</h2>
                      </div>
                      <span className="slideshow-counter">
                        {selectedIndex + 1} / {artworks.length}
                      </span>
                    </div>

                    <p>{activeArt.description}</p>

                    <div className="modal-tags">
                      {activeArt.tags.map((t, tagIndex) => (
                        <span
                          key={t}
                          className="modal-tag-pill"
                          onMouseEnter={(e) => {
                            e.stopPropagation();
                            segaSound?.playBlip(900 + tagIndex * 100, 0.04);
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}