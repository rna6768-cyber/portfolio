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
    poster: "https://i.pinimg.com/736x/f0/0c/93/f00c9310879d85f5b8f1b2b63b4fc58f.jpg",
  },
  {
    number: "02",
    title: "Kingdom Key Visual",
    type: "Game Art & Concept",
    description:
      "Character concept sheet and environment art designed for a 2D strategy game aesthetic.",
    tags: ["Concept Art", "Character Design", "2D"],
    tone: "blue",
    poster: "https://i.pinimg.com/736x/41/8d/a2/418da27acb82e73d44c3ba6a824c15f8.jpg",
  },
  {
    number: "03",
    title: "Brand Editorial",
    type: "Visual Identity",
    description:
      "A dark-mode layout exploration combining high-fashion photography with modern grid layouts.",
    tags: ["UI Art", "Typography", "Branding"],
    tone: "orange",
    poster: "https://i.pinimg.com/736x/7d/73/b1/7d73b1845e0a488983d6a937023bf26b.jpg",
  },
  {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/57/3b/d9/573bd9681560eb1d516a4e1bd8a1b769.jpg",
  },
   {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/4f/f4/a6/4ff4a63463d7e2d757ad0f59e207bac3.jpg",
  },
  {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/1e/3b/b9/1e3bb989651cfc56165d3ffa0f368044.jpg",
  },
   {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/af/20/96/af20964a61f298775b737c19a996c787.jpg",
  },
  {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/bf/91/d6/bf91d6944f5d40586191c356971db430.jpg",
  },
   {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/a4/ed/33/a4ed3306f7011ad93e3336ac513b35e8.jpg",
  },
  {
    number: "04",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Digital Art", "Illustration", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/2f/2b/8d/2f2b8d6d39c53cab27e324b6d71d04dc.jpg",
  },
  {
    number: "05",
    title: "Neon Cyber Cover",
    type: "Cover Artwork",
    description:
      "Experimental key visual exploring scanline textures, halftones, and synthwave-inspired lighting.",
    tags: ["Key Visual", "Experimental", "Photoshop"],
    tone: "green",
    poster: "https://i.pinimg.com/736x/07/78/84/077884fbe9a18c29f56160eb75a7fadd.jpg",
  },
  {
    number: "05",
    title: "Futuristic Poster Series",
    type: "Poster Design",
    description:
      "A series of futuristic poster designs featuring abstract shapes, vibrant gradients, and dynamic compositions.",
    tags: ["Poster Design"],
    tone: "indigo",
    poster: "https://i.pinimg.com/736x/49/c0/45/49c04541adac23d20af1692cc37ffb73.jpg",
  },
  {
    number: "06",
    title: "Mooncake Festival Poster",
    type: "Cultural Illustration",
    description:
      "A festive poster celebrating the Mooncake Festival, incorporating traditional motifs with a modern design approach.",
    tags: ["Cultural Illustration", "Festive", "Digital Art"],
    tone: "pink",
    poster: "https://i.pinimg.com/736x/c0/43/df/c043df61cf09e05c6ee660cb733783af.jpg",
  },
  {
    number: "07",
    title: " Poster",
    type: "Poster Design",
    description:
      "A nostalgic poster design inspired by classic arcade games, featuring vibrant colors and pixelated aesthetics.",
    tags: ["Poster Design","Digital Art"],
    tone: "red",
    poster: "https://i.pinimg.com/736x/ac/ea/c0/aceac04fd05a15254f1bb434ea4d9091.jpg",
  },
  {
    number: "08",
    title: "Abstract Digital Art",
    type: "Digital Illustration",
    description:
      "An abstract digital artwork exploring geometric shapes, gradients, and dynamic compositions.",
    tags: ["Digital Illustration", "Abstract Art"],
    tone: "purple",
    poster: "https://i.pinimg.com/736x/e1/ea/8e/e1ea8e2c54bcf8155f5389ef8a1bd4d1.jpg",
  },
  {
    number: "09",
    title: "Futuristic Cityscape",
    type: "Concept Art",
    description:
      "A concept art piece depicting a futuristic cityscape with neon lights, towering skyscrapers, and a cyberpunk aesthetic.",
    tags: ["Concept Art", "Cityscape", "Digital Painting"],
    tone: "cyan",
    poster: "https://i.pinimg.com/736x/28/4f/5e/284f5ede3e2236c35309ffcf46a4b0e3.jpg",
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