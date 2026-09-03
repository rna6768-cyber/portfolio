import { motion } from "framer-motion";
import { segaSound } from "../utils/audio";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Python",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "REST API",
  "SQL / PostgreSQL",
  "Git / GitHub",
  "UI / UX",
  "Framer Motion",
];

export default function Skills() {
  return (
    <section id="skills" className="section section-pad skills-section">
      <div className="section-kicker">02 / Capabilities</div>
      <div className="skills-heading">
        <h2>
          Tools I use to <span>build.</span>
        </h2>
        <p>
          From front-end interfaces to backend systems, I like owning the full
          journey from idea to working product.
        </p>
      </div>
      <div className="skill-list">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.025 }}
            className="skill-pill"
            onMouseEnter={() => segaSound.playBlip(700 + i * 50, 0.03)}
          >
            <span>0{i + 1}</span>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}