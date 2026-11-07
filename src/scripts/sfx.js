/**
 * ============================================================================
 * MAC WEBSITE // NATIVE BRUTALIST WEB AUDIO SYNTHESIZER & TACTILE CONTROLLER
 * ============================================================================
 * Zero-dependency browser-native Web Audio API synthesizer for tactile SFX.
 * Master Gain max ~15% (0.12 - 0.18) for ultra-subtle mechanical tactile feedback.
 * Stored under localStorage key 'mac_sfx_enabled' (defaults to 'true').
 * ============================================================================
 */

class BrutalistSFX {
  constructor() {
    this.storageKey = 'mac_sfx_enabled';
    this.ctx = null;
    this.masterGain = null;
    this.isUnlocked = false;
    this.lastTickTime = 0;
    this.minTickInterval = 35; // Cooldown for rapid mouse hovers

    // Read initial preference (defaults to true)
    this.enabled = this.getStoredState();
  }

  getStoredState() {
    if (typeof window === 'undefined') return true;
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored === null ? true : stored === 'true';
    } catch (_) {
      return true;
    }
  }

  setStoredState(val) {
    this.enabled = Boolean(val);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.storageKey, this.enabled ? 'true' : 'false');
      } catch (_) {}
    }
    this.updateToggleUI();
  }

  toggle() {
    const nextState = !this.enabled;
    this.setStoredState(nextState);
    if (nextState) {
      this.thock();
    }
  }

  initContext() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    try {
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      // Master volume locked to ~15% for whisper-quiet mechanical tactile feel
      this.masterGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (_) {}
  }

  unlock() {
    if (!this.ctx) {
      this.initContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().then(() => {
        this.isUnlocked = true;
      }).catch(() => {});
    } else if (this.ctx && this.ctx.state === 'running') {
      this.isUnlocked = true;
    }
  }

  triggerHaptic(ms = 8) {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(ms);
      } catch (_) {}
    }
  }

  /**
   * 1. TICK: Whisper-quiet ~5ms micro-tick (like a wristwatch tick or mechanical escapement)
   */
  tick() {
    if (!this.enabled) return;
    const now = performance.now();
    if (now - this.lastTickTime < this.minTickInterval) return;
    this.lastTickTime = now;

    this.unlock();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, t);
      osc.frequency.exponentialRampToValueAtTime(1400, t + 0.005);

      gain.gain.setValueAtTime(0.09, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.005);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.006);
    } catch (_) {}
  }

  /**
   * 2. SCALETICK(index): 5-step ascending pitch tick across Impact Stat Receipts
   * Frequencies: 300Hz, 340Hz, 380Hz, 420Hz, 460Hz
   */
  scaleTick(index = 0) {
    if (!this.enabled) return;
    this.unlock();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const freqs = [300, 340, 380, 420, 460];
      const safeIndex = Math.max(0, Math.min(Number(index) || 0, freqs.length - 1));
      const freq = freqs[safeIndex];

      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.92, t + 0.018);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.018);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.02);
    } catch (_) {}
  }

  /**
   * 3. THOCK: Crisp, low-mid 25ms mechanical keycap "thock" (180Hz to 60Hz pitch drop)
   */
  thock() {
    if (!this.enabled) return;
    this.unlock();
    this.triggerHaptic(8);
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, t);
      osc.frequency.exponentialRampToValueAtTime(60, t + 0.025);

      gain.gain.setValueAtTime(0.16, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.028);
    } catch (_) {}
  }

  /**
   * 4. SNAP: Crisp 20ms cardstock folder snap / slide-projector clack
   */
  snap() {
    if (!this.enabled) return;
    this.unlock();
    this.triggerHaptic(8);
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const t = this.ctx.currentTime;

      // High click impulse
      const oscHigh = this.ctx.createOscillator();
      const gainHigh = this.ctx.createGain();
      oscHigh.type = 'square';
      oscHigh.frequency.setValueAtTime(860, t);
      oscHigh.frequency.exponentialRampToValueAtTime(320, t + 0.01);

      gainHigh.gain.setValueAtTime(0.09, t);
      gainHigh.gain.exponentialRampToValueAtTime(0.0001, t + 0.01);

      oscHigh.connect(gainHigh);
      gainHigh.connect(this.masterGain);

      oscHigh.start(t);
      oscHigh.stop(t + 0.012);

      // Low cardstock body
      const oscLow = this.ctx.createOscillator();
      const gainLow = this.ctx.createGain();
      oscLow.type = 'sine';
      oscLow.frequency.setValueAtTime(150, t);
      oscLow.frequency.exponentialRampToValueAtTime(45, t + 0.02);

      gainLow.gain.setValueAtTime(0.14, t);
      gainLow.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);

      oscLow.connect(gainLow);
      gainLow.connect(this.masterGain);

      oscLow.start(t);
      oscLow.stop(t + 0.022);
    } catch (_) {}
  }

  /**
   * 5. SCAN: Super-subtle, quiet 30ms high-tech terminal blip (880Hz sine at 10% volume)
   */
  scan() {
    if (!this.enabled) return;
    this.unlock();
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, t);

      gain.gain.setValueAtTime(0.10, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.032);
    } catch (_) {}
  }

  /**
   * 6. TRANSMIT: Clean, subtle 3-pulse tactical walkie-talkie / radar confirmation beep
   */
  transmit() {
    if (!this.enabled) return;
    this.unlock();
    this.triggerHaptic(10);
    if (!this.ctx || this.ctx.state !== 'running') return;

    try {
      const t = this.ctx.currentTime;
      const pulses = [
        { freq: 620, start: t, duration: 0.024 },
        { freq: 760, start: t + 0.036, duration: 0.024 },
        { freq: 940, start: t + 0.072, duration: 0.028 }
      ];

      pulses.forEach(p => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(p.freq, p.start);

        gain.gain.setValueAtTime(0.12, p.start);
        gain.gain.exponentialRampToValueAtTime(0.0001, p.start + p.duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(p.start);
        osc.stop(p.start + p.duration + 0.002);
      });
    } catch (_) {}
  }

  updateToggleUI() {
    if (typeof document === 'undefined') return;
    const isEn = this.enabled;
    const toggles = document.querySelectorAll('.mac-sfx-toggle');

    toggles.forEach(toggle => {
      const dot = toggle.querySelector('.sfx-status-dot');
      const txt = toggle.querySelector('.sfx-status-text');

      if (isEn) {
        toggle.setAttribute('aria-pressed', 'true');
        toggle.classList.remove('bg-tactical-stone', 'text-[#777060]', 'shadow-none', 'opacity-80');
        toggle.classList.add('bg-pure-white', 'text-stark-black', 'shadow-[2px_2px_0px_#000000]');
        if (dot) {
          dot.classList.remove('bg-transparent', 'border-[#777060]');
          dot.classList.add('bg-mac-yellow', 'border-stark-black');
        }
        if (txt) {
          txt.textContent = 'SFX ON';
        }
      } else {
        toggle.setAttribute('aria-pressed', 'false');
        toggle.classList.remove('bg-pure-white', 'text-stark-black', 'shadow-[2px_2px_0px_#000000]');
        toggle.classList.add('bg-tactical-stone', 'text-[#777060]', 'shadow-none', 'opacity-80');
        if (dot) {
          dot.classList.remove('bg-mac-yellow', 'border-stark-black');
          dot.classList.add('bg-transparent', 'border-[#777060]');
        }
        if (txt) {
          txt.textContent = 'SFX OFF';
        }
      }
    });
  }
}

// Global initialization
if (typeof window !== 'undefined') {
  const sfx = new BrutalistSFX();
  window.macSFX = sfx;

  // 1. One-time unlock on very first pointerdown/click/keydown anywhere
  const unlockEvents = ['pointerdown', 'click', 'keydown', 'touchstart'];
  const unlockHandler = () => {
    sfx.unlock();
    unlockEvents.forEach(evt => window.removeEventListener(evt, unlockHandler, { capture: true }));
  };
  unlockEvents.forEach(evt => {
    window.addEventListener(evt, unlockHandler, { capture: true, passive: true });
  });

  // 2. Global Click / Action Event Delegation
  document.addEventListener('click', (e) => {
    // SFX Toggle button click
    const toggleBtn = e.target.closest('.mac-sfx-toggle');
    if (toggleBtn) {
      e.preventDefault();
      sfx.toggle();
      return;
    }

    // Specific sound triggers via data-sfx attribute
    const sfxTarget = e.target.closest('[data-sfx]');
    if (sfxTarget) {
      const type = sfxTarget.getAttribute('data-sfx');
      if (type === 'snap') {
        sfx.snap();
        return;
      }
      if (type === 'transmit') {
        sfx.transmit();
        return;
      }
      if (type === 'scan') {
        sfx.scan();
        return;
      }
      if (type === 'thock') {
        sfx.thock();
        // Check for interactive sticker wiggle
        if (sfxTarget.classList.contains('sticker-interactive')) {
          sfxTarget.classList.add('animate-sticker-wiggle');
          setTimeout(() => sfxTarget.classList.remove('animate-sticker-wiggle'), 320);
        }
        return;
      }
    }

    // Special class-based fallback handlers
    if (e.target.closest('.arch-tab-btn, .dossier-toggle-btn, .evidence-filter-btn, .evidence-card, .dept-tab')) {
      sfx.snap();
      return;
    }

    if (e.target.closest('.terminal-filter-chip, #transmit-btn')) {
      sfx.transmit();
      return;
    }

    // General button / arcade click fallback
    const generalBtn = e.target.closest('button:not([disabled]), .arcade-btn, .btn-arcade, .arcade-btn-sm, .arcade-btn-thick, .sticker-interactive');
    if (generalBtn) {
      sfx.thock();
      if (generalBtn.classList.contains('sticker-interactive')) {
        generalBtn.classList.add('animate-sticker-wiggle');
        setTimeout(() => generalBtn.classList.remove('animate-sticker-wiggle'), 320);
      }
    }
  }, { capture: true, passive: false });

  // 3. Hover / Mouseover Event Delegation
  document.addEventListener('mouseover', (e) => {
    // ScaleTick across 5 Impact Stat Boxes
    const scaleTarget = e.target.closest('[data-sfx="scaleTick"], .receipt-cell');
    if (scaleTarget) {
      if (e.relatedTarget && scaleTarget.contains(e.relatedTarget)) return;
      const idxAttr = scaleTarget.getAttribute('data-scale-index');
      let index = idxAttr !== null ? parseInt(idxAttr, 10) : NaN;
      if (isNaN(index)) {
        const parent = scaleTarget.parentElement;
        if (parent) {
          index = Array.from(parent.children).indexOf(scaleTarget);
        }
      }
      sfx.scaleTick(index);
      return;
    }

    // Custom hover sound attributes
    const hoverTarget = e.target.closest('[data-sfx-hover]');
    if (hoverTarget) {
      if (e.relatedTarget && hoverTarget.contains(e.relatedTarget)) return;
      const sound = hoverTarget.getAttribute('data-sfx-hover');
      if (sound === 'scan') {
        sfx.scan();
        return;
      }
      if (sound === 'tick') {
        sfx.tick();
        return;
      }
    }

    // Barcode hover
    const barcode = e.target.closest('.barcode-strip');
    if (barcode) {
      if (e.relatedTarget && barcode.contains(e.relatedTarget)) return;
      sfx.scan();
      return;
    }

    // General subtle hover tick (nav links, buttons, sponsor stamps, industrial rows)
    const tickTarget = e.target.closest('header nav a, #mobile-nav-drawer a, .sponsor-stamp, .industrial-row, [data-sfx-tick], .arcade-btn, .arcade-btn-sm');
    if (tickTarget) {
      if (e.relatedTarget && tickTarget.contains(e.relatedTarget)) return;
      sfx.tick();
    }
  }, { passive: true });

  // 4. Focus Event Delegation (Inputs on Contact form)
  document.addEventListener('focusin', (e) => {
    const inputTarget = e.target.closest('#contact-terminal-form input, #contact-terminal-form textarea, [data-sfx-focus="scan"]');
    if (inputTarget) {
      sfx.scan();
    }
  }, { passive: true });

  // 5. Initialize UI on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => sfx.updateToggleUI());
  } else {
    sfx.updateToggleUI();
  }
}

export default BrutalistSFX;
