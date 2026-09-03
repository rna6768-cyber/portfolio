// src/utils/audio.js

class SegaAudio {
  constructor() {
    this.ctx = null;
    this.lastSpinDashTime = 0; // Throttle timer for hover sound
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  // Quick 8-bit blip for tag hovers & small actions
  playBlip(freq = 880, duration = 0.04) {
    try {
      this.init();
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio context errors before user interaction
    }
  }

  // Sega rising chime
  playChime() {
    this.init();
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        this.ctx.currentTime + i * 0.08 + 0.25
      );

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
    });
  }

  // Classic SEGA 16-bit Voice Chant ("SEEE-GAAA")
  playCancunSegaChant() {
    this.init();
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;

    const voice1SE = 293.66; // D4
    const voice2SE = 440.0;  // A4
    const voice1GA = 392.0;  // G4
    const voice2GA = 587.33; // D5

    const playVoicePair = (f1, f2, startTime, duration) => {
      [f1, f2].forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "square";
        osc.frequency.setValueAtTime(freq * 0.98, startTime);
        osc.frequency.exponentialRampToValueAtTime(freq, startTime + 0.05);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.08, startTime + 0.03);
        gain.gain.setValueAtTime(0.08, startTime + duration - 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    };

    // "SEEE..."
    playVoicePair(voice1SE, voice2SE, now, 0.45);
    // "...GAAA"
    playVoicePair(voice1GA, voice2GA, now + 0.42, 0.85);
  }

  // Iconic Sonic Ring Collect Sound (Synthesized on Click)
  playSonicRing() {
    this.init();
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = "sine";
    osc2.type = "sine";

    // B5 -> E6
    osc1.frequency.setValueAtTime(987.77, now);
    osc1.frequency.setValueAtTime(1318.51, now + 0.08);

    osc2.frequency.setValueAtTime(1318.51, now);
    osc2.frequency.setValueAtTime(1758.38, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  }

  // Sonic Spin Dash Rev Sound (Throttled for Card Hovering)
  playSonicSpinDash() {
    const nowTimestamp = Date.now();
    // 300ms cooldown prevents rapid stuttering on sub-elements
    if (nowTimestamp - this.lastSpinDashTime < 300) return;
    this.lastSpinDashTime = nowTimestamp;

    this.init();
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";

    // 200Hz to 1800Hz frequency swoop
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(1800, now + 0.25);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.28);
  }
}

export const segaSound = new SegaAudio();