import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { segaSound } from "../utils/audio";

const posterItems = [
  {
    id: 1,
    title: "Yunjin Lesserafim",
    image:
      "https://i.pinimg.com/1200x/73/4d/e2/734de21bb7d3a14f03be9f9c6a0dadc8.jpg",
  },
  {
    id: 2,
    title: "WHO IS SPIDER-MAN?",
    image:
      "https://i.pinimg.com/736x/1e/3b/b9/1e3bb989651cfc56165d3ffa0f368044.jpg",
  },
  {
    id: 3,
    title: "STARBOY",
    image:
      "https://i.pinimg.com/736x/b9/bb/89/b9bb89ce6e14794c4bef15e94ab71e59.jpg",
  },
  {
    id: 4,
    title: "Neon Cyber Cover",
    image:
      "https://i.pinimg.com/736x/7f/e1/b3/7fe1b3f9e0cb1e9d4fb8258155cdfe21.jpg",
  },
  {
    id: 5,
    title: "Futuristic Poster Series",
    image:
      "https://i.pinimg.com/736x/9b/bb/e7/9bbbe724d3861e9384090f8260d27d78.jpg",
  },
  {
    id: 6,
    title: "Mooncake Festival Poster",
    image:
      "https://i.pinimg.com/736x/1a/bd/ef/1abdef9911b2582eabf72e2a7b104c60.jpg",
  },
];

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    if (segaSound?.playBlip) segaSound.playBlip(600, 0.05);
    setIsVisible(false);
  };

  const infinitePosterItems = [
    ...posterItems,
    ...posterItems,
    ...posterItems,
    ...posterItems,
  ];

  return (
    <div className="poster-banner">
      {/* Left Badge */}
      <div className="poster-banner-badge">
        <Sparkles size={12} /> NEW ARTWORK
      </div>

      {/* Auto-Playing Loop Track */}
      <div className="poster-ticker-track" style={{ cursor: "default" }}>
        <motion.div
          className="poster-ticker-content"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {infinitePosterItems.map((poster, index) => (
            <div key={`${poster.id}-${index}`} className="poster-ticker-item">
              <img
                src={poster.image}
                alt={poster.title}
                className="poster-thumb"
              />
              <span className="poster-item-title">{poster.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
