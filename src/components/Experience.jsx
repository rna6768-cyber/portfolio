import { motion } from "framer-motion";
import { segaSound } from "../utils/audio";

const experiences = [
  {
    period: "2024 — 2026",
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Building responsive interfaces and interactive experiences for personal and client projects.",
  },
  {
    period: "2023 — 2026",
    role: "Full Stack Developer",
    company: "Personal Projects",
    description:
      "Developing web platforms, APIs, payment flows and experimental products.",
  },
  {
    period: "2023 — 2026",
    role: "Open Source",
    company: "Contributor",
    description:
      "Learning in public, experimenting with new tools and sharing practical solutions.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section section-pad experience-section">
      <div className="section-kicker">04 / Experience</div>
      <div className="experience-grid">
        <h2>
          Experience that keeps <span>evolving.</span>
        </h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="timeline-item"
              onMouseEnter={() => segaSound.playSonicSpinDash()}
              onClick={() => segaSound.playBlip(700 + i * 150, 0.08)}
            >
              <span>{exp.period}</span>
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
                <small>{exp.description}</small>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}