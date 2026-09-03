// src/components/Dock.jsx
import { motion } from "framer-motion";
import { Home, Briefcase, User, Mail, Sparkles } from "lucide-react";
import { segaSound } from "../utils/audio";

const dockItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Work", href: "#work", icon: Briefcase },
  { label: "Services", href: "#services", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Dock() {
  return (
    <div className="dock-wrapper">
      <div className="dock-container glass">
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              className="dock-item"
              whileHover={{ scale: 1.25, y: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onMouseEnter={() => segaSound.playBlip(800 + index * 100, 0.04)}
              onClick={() => segaSound.playSonicRing()}
            >
              <Icon size={20} />
              <span className="dock-tooltip">{item.label}</span>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}