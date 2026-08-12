import { useState, useEffect } from "react";

const bootLines = [
  "kolawole.os v1.0 — booting…",
  "loading modules: work, research, build, life",
  "connecting to network… OK",
  "ready.",
];

function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip boot on subsequent visits within the same session
    if (sessionStorage.getItem("booted") === "1") {
      setVisible(false);
      return;
    }

    // Reduced motion — skip animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("booted", "1");
      setVisible(false);
      return;
    }

    // Reveal each boot line in sequence
    let cancelled = false;
    const revealLines = async () => {
      for (let i = 0; i < bootLines.length; i++) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 600));
        setLines((prev) => [...prev, bootLines[i]]);
      }
    };
    revealLines();

    // Progress bar fills over ~1.6s
    const start = Date.now();
    const duration = 3200;
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(tick);
    }, 30);

    // Fade out after 1.9s
    const fadeTimer = setTimeout(() => {
      sessionStorage.setItem("booted", "1");
      setVisible(false);
    }, 3800);

    return () => {
      cancelled = true;
      clearInterval(tick);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="boot-sequence">
      <div className="boot-inner">
        <div className="boot-brand">
          <span className="boot-mark">A-S</span>
          <span className="boot-name">KOLAWOLE.OS</span>
        </div>

        <div className="boot-log">
          {lines.map((line, i) => (
            <div key={i} className="boot-line">
              <span className="boot-prompt">$</span> {line}
            </div>
          ))}
          {lines.length < bootLines.length && (
            <div className="boot-line">
              <span className="boot-prompt">$</span>
              <span className="boot-cursor">_</span>
            </div>
          )}
        </div>

        <div className="boot-progress">
          <div className="boot-progress-track">
            <div
              className="boot-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="boot-progress-value">
            {String(Math.round(progress)).padStart(3, "0")}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default BootSequence;