import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Further from "./components/Further";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Profile from "./components/Profile";
import Banner from "./components/Banner";
import { segaSound } from "./utils/audio";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="site-shell">
          <Banner />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Profile />
            <Skills />
            <Projects />
            <Experience />
            <Further />
            <Contact />
          </main>

          <footer>
            <span>© 2026 PENG LI</span>
            <span>Built with React + Framer Motion</span>
            <a
              href="#home"
              onMouseEnter={() => segaSound?.playBlip(1000, 0.04)}
              onClick={() => segaSound?.playSonicRing()}
            >
              BACK TO TOP ↑
            </a>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;