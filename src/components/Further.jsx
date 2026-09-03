import { segaSound } from "../utils/audio";

export default function Further() {
  return (
    <section id="services" className="section section-pad services-section">
      <div className="section-kicker">05 / Services</div>
      <h2>
        What I can <span>build for you.</span>
      </h2>
      <div className="services-grid">
        <div
          onMouseEnter={() => segaSound.playSonicSpinDash()}
          onClick={() => segaSound.playSonicRing()}
        >
          <b>01</b>
          <h3>Web Development</h3>
          <p>
            Modern, responsive websites and web applications built for
            performance and usability.
          </p>
        </div>
        <div
          onMouseEnter={() => segaSound.playSonicSpinDash()}
          onClick={() => segaSound.playSonicRing()}
        >
          <b>02</b>
          <h3>UI / UX Design</h3>
          <p>
            Clean visual systems, landing pages and interfaces with
            thoughtful interactions.
          </p>
        </div>
        <div
          onMouseEnter={() => segaSound.playSonicSpinDash()}
          onClick={() => segaSound.playSonicRing()}
        >
          <b>03</b>
          <h3>Backend / API</h3>
          <p>
            REST APIs, authentication, databases, integrations and practical
            server-side systems.
          </p>
        </div>
      </div>
    </section>
  );
}