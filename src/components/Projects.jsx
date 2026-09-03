import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { segaSound } from "../utils/audio";
import Slideshow from "./Slideshow"; // <-- Import the new component

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

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCardClick = (index) => {
    if (segaSound?.playSonicRing) segaSound.playSonicRing();
    setSelectedIndex(index);
  };

  return (
    <section id="work" className="section section-pad work-section">
      <div className="section-kicker">03 / Art Showcase</div>
      <div className="work-head">
        <h2>
          Visuals I’ve <span>created.</span>
        </h2>
        <p>
          Selected artworks, poster designs, digital illustrations, and visual experiments. Click any artwork to open the full-screen slideshow gallery.
        </p>
      </div>

      <div className="project-list">
        {artworks.map((art, i) => (
          <motion.article
            key={art.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`project-card ${art.tone}`}
            onMouseEnter={(e) => {
              if (e.target === e.currentTarget || e.currentTarget.contains(e.target)) {
                segaSound?.playSonicSpinDash();
              }
            }}
            onClick={() => handleCardClick(i)}
            style={{ cursor: "pointer" }}
          >
            <div className="project-visual full-poster-contain">
              {art.poster && (
                <img
                  src={art.poster}
                  alt={`${art.title} showcase`}
                  className="project-poster-img"
                  loading="lazy"
                />
              )}

              <div className="visual-lines" />
              <div className="project-number">{art.number}</div>

              {/* Floating Yellow Tags */}
              <div className="card-floating-tags">
                {art.tags.map((t, tagIndex) => (
                  <span
                    key={t}
                    className="card-tag-pill"
                    onMouseEnter={(e) => {
                      e.stopPropagation();
                      segaSound?.playBlip(900 + tagIndex * 100, 0.04);
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="visual-icon expand-hint">
                <Maximize2 size={18} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Render the extracted Slideshow Component */}
      <Slideshow
        artworks={artworks}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </section>
  );
}