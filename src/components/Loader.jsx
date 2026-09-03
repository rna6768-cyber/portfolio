import { useState } from "react";
import { motion } from "framer-motion";
import { segaSound } from "../utils/audio";

export default function Loader({ onComplete }) {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    // 1. Initialize Audio
    segaSound.init();
    
    // 2. Play the Cancun SEGA sound
    segaSound.playCancunSegaChant();
    
    // 3. Start loading progress bar
    setHasStarted(true);
  };

  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
    >
      <div className="loader-content">
        <div className="sega-logo">
          SEGA<span>.DEV</span>
        </div>

        <div className="sega-logo">
          PENGLI<span>.999</span>
        </div>

        <p className="sega-sub">🌴 SEGA WORLD RESORT ARCHITECTURE 🌴</p>

        {!hasStarted ? (
          <motion.button
            onClick={handleStart}
            className="button button-light"
            style={{ marginTop: "1.5rem", cursor: "pointer" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            PRESS START / CLICK TO ENTER
          </motion.button>
        ) : (
          <>
            <p className="sega-sub" style={{ marginTop: "1.5rem" }}>
              LOADING SYSTEM...
            </p>

            <div className="loader-bar-bg">
              <motion.div
                className="loader-bar-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                onAnimationComplete={onComplete}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}