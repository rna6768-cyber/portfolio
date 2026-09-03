import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { segaSound } from "../utils/audio";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  const handleNavClick = () => {
    segaSound.playBlip(750, 0.06);
    close();
  };

  return (
    <nav className="nav-wrap">
      <div className="nav glass">
        {/* Brand Logo */}
        <a 
          className="brand" 
          href="#home" 
          onClick={handleNavClick}
          onMouseEnter={() => segaSound.playBlip(1100, 0.04)}
        >
          PENG<span>LI</span>
        </a>

        {/* Desktop Navigation Links (Hidden on Mobile via CSS) */}
        <div className="desktop-nav">
          {["About", "Work", "Experience", "Services", "Contact"].map(
            (item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => segaSound.playBlip(800 + index * 100, 0.04)}
                onClick={() => segaSound.playBlip(600, 0.08)}
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Action Group */}
        <div className="nav-actions">
          <a 
            className="nav-cta" 
            href="#contact"
            onMouseEnter={() => segaSound.playSonicSpinDash()}
            onClick={() => segaSound.playSonicRing()}
          >
            Let's talk <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-btn"
            onClick={() => {
              segaSound.playBlip(menuOpen ? 500 : 900, 0.08);
              setMenuOpen(!menuOpen);
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mobile-menu glass"
          >
            {["About", "Work", "Experience", "Services", "Contact"].map(
              (item, index) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={handleNavClick}
                  onMouseEnter={() => segaSound.playBlip(800 + index * 100, 0.04)}
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}