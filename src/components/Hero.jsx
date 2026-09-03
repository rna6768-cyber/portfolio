import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { segaSound } from "../utils/audio";
import Slideshow from "./Slideshow";

// Sample artworks data for quick launch from Hero
const artworks = [
  {
    number: "01",
    title: "MLBB TopUp Poster",
    type: "Digital Illustration",
    description:
      "A high-contrast promotional poster concept featuring bold typography, neon gradients, and arcade-inspired composition.",
    tags: ["Photoshop", "Digital Art", "Poster Design"],
    tone: "violet",
    poster: "https://i.pinimg.com/736x/e8/fe/fb/e8fefb1d16429c442001a2eb313c0c36.jpg",
  },
  {
    number: "02",
    title: "Kingdom Key Visual",
    type: "Game Art & Concept",
    description:
      "Character concept sheet and environment art designed for a 2D strategy game aesthetic.",
    tags: ["Concept Art", "Character Design", "2D"],
    tone: "blue",
    poster: "https://i.pinimg.com/736x/56/7e/d6/567ed66daaa6963fed08585c7bfa6dd5.jpg",
  },
  {
    number: "03",
    title: "Brand Editorial Layout",
    type: "Visual Identity",
    description:
      "A dark-mode layout exploration combining high-fashion photography with modern grid layouts.",
    tags: ["UI Art", "Typography", "Branding"],
    tone: "orange",
    poster: "https://i.pinimg.com/1200x/50/ee/86/50ee860b95cb4a88dd596002da7753d1.jpg",
  },
  {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Key Visual", "Experimental", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/7f/e1/b3/7fe1b3f9e0cb1e9d4fb8258155cdfe21.jpg",
  },
];

export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openSlideshow = (index = 0) => {
    if (segaSound?.playSonicRing) segaSound.playSonicRing();
    setSelectedIndex(index);
  };

  return (
    <section id="home" className="hero section-pad">
      <div className="hero-grid" />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="hero-content">
        {/* Eyebrow Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow"
        >
          <span className="status-dot" /> Available for creative projects
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          PENG <em>LI</em>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-role"
        >
          Full Stack Developer <b>•</b> UI Designer <b>•</b> Creative Builder
        </motion.p>

        {/* Hero Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-copy"
        >
          I build digital experiences that feel simple, fast and memorable —
          from ambitious web products to interactive game worlds.
        </motion.p>

        {/* Action Buttons with Sound Triggers */}
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Primary Action */}
          <a
            href="#work"
            className="button button-light"
            onMouseEnter={() => segaSound?.playSonicSpinDash()}
            onClick={() => segaSound?.playSonicRing()}
          >
            Explore my work <ArrowUpRight size={18} />
          </a>

          {/* Slideshow Trigger Action */}
          <button
            type="button"
            className="button button-accent"
            onMouseEnter={() => segaSound?.playBlip(1200, 0.04)}
            onClick={() => openSlideshow(0)}
          >
            Launch Showcase <Play size={16} fill="currentColor" />
          </button>

          {/* Secondary Action */}
          <a
            href="#contact"
            className="button button-ghost"
            onMouseEnter={() => segaSound?.playBlip(1000, 0.04)}
            onClick={() => segaSound?.playChime()}
          >
            Start a project
          </a>
        </motion.div>
      </div>

      {/* Hero Footer Meta */}
      <div className="hero-meta">
        <span>PORTFOLIO / 2026</span>
        <span>BASED IN CAMBODIA</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

      {/* Render Lightbox Slideshow Modal */}
      <Slideshow
        artworks={artworks}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
}