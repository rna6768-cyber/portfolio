import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { segaSound } from "../utils/audio";

const socials = [
  { name: "GitHub", href: "https://github.com", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { name: "Telegram", href: "https://t.me/peng_Obi", icon: FaTelegram },
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section-pad">
      <div className="section-kicker">06 / Contact</div>
      
      <motion.div 
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <p className="contact-mini">Have an idea? Let’s make it real.</p>
        
        <h2>
          LET’S <em>WORK</em>
          <br />
          TOGETHER.
        </h2>

        {/* Primary Email CTA: Spin Dash on hover, Ring chime on click */}
        <a 
          className="email-link" 
          href="mailto:hello@pengli.dev"
          onMouseEnter={() => segaSound.playSonicSpinDash()}
          onClick={() => segaSound.playSonicRing()}
        >
          hello@pengli.dev <ArrowUpRight />
        </a>

        {/* Social Links with pitch-scaled menu blips */}
        <div className="socials">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => segaSound.playBlip(850 + index * 120, 0.04)}
                onClick={() => segaSound.playSonicRing()}
              >
                <Icon /> {social.name}
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}