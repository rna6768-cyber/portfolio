import { useState } from "react";
import { motion } from "framer-motion";
import { segaSound } from "../utils/audio";

export default function Loader({ onComplete }) {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    // 1. Resolve path dynamic to Vite base environment (works locally & on GitHub Pages)
    const audioPath = `${import.meta.env.BASE_URL}sega.mp3`;
    const audio = new Audio(audioPath);
    audio.volume = 0.8;

    // 2. Play audio with error handling
    audio.play().catch((err) => {
      console.warn("Audio playback issue:", err);
    });

    // 3. Fallback initialization for Web Audio utilities
    if (segaSound?.init) {
      segaSound.init();
    }

    // 4. Trigger loader progress state
    setHasStarted(true);
  };

  return (
    <motion.div
      className="loader-screen relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
    >
      {/* Scanline CRT FX */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 3px, 6px 100%",
        }}
        animate={{ opacity: [0.15, 0.25, 0.18] }}
        transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
      />

      <div className="loader-content relative z-10">
        <motion.div
          className="sega-logo"
          animate={{
            textShadow: [
              "0 0 4px #0066ff, 0 0 10px #0066ff",
              "0 0 2px #ff0055, -2px 0 8px #ff0055",
              "0 0 4px #0066ff, 0 0 10px #0066ff",
            ],
            x: [0, -1, 1, 0],
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          SEGA<span>.DEV</span>
        </motion.div>

        <motion.div
          className="sega-logo"
          animate={{
            textShadow: [
              "0 0 4px #ffea00, 0 0 8px #ffea00",
              "0 0 2px #0066ff, 2px 0 6px #0066ff",
              "0 0 4px #ffea00, 0 0 8px #ffea00",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          PENGLI<span>.999</span>
        </motion.div>

        <p className="sega-sub">🌴 SEGA WORLD RESORT ARCHITECTURE 🌴</p>

        {!hasStarted ? (
          <motion.button
            onClick={handleStart}
            onMouseEnter={() => segaSound?.playBlip && segaSound.playBlip(800, 0.03)}
            className="button button-light"
            style={{ marginTop: "1.5rem", cursor: "pointer" }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px rgba(255, 234, 0, 0)",
                "0 0 15px rgba(255, 234, 0, 0.6)",
                "0 0 0px rgba(255, 234, 0, 0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
          >
            PRESS START / CLICK TO ENTER
          </motion.button>
        ) : (
          <>
            <motion.p
              className="sega-sub"
              style={{ marginTop: "1.5rem" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
            >
              LOADING SYSTEM...
            </motion.p>

            <div className="loader-bar-bg">
              <motion.div
                className="loader-bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                onAnimationComplete={() => {
                  if (segaSound?.playBlip) segaSound.playBlip(1200, 0.08);
                  onComplete();
                }}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}