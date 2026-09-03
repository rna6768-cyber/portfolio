import { ArrowUpRight } from "lucide-react";
import { segaSound } from "../utils/audio";

export default function About() {
  return (
    <section id="about" className="section section-pad about">
      <div className="section-kicker">01 / About</div>
      <div className="about-grid">
        <h2>
          I turn ideas into <span>digital products.</span>
        </h2>
        <div>
          <p className="lead">
            I’m PENG LI, a developer and creative builder focused on modern
            web experiences, interfaces and game projects.
          </p>
          <p>
            I enjoy connecting clean engineering with strong visual direction
            — building products that are useful under the hood and confident
            on the surface.
          </p>
          <a
            className="text-link"
            href="#contact"
            onMouseEnter={() => segaSound.playBlip(750, 0.04)}
            onClick={() => segaSound.playSonicRing()}
          >
            Let’s create something <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}