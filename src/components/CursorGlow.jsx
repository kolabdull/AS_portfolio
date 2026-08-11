import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    let raf = null;

    const handleMove = (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        raf = null;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div className="cursor-glow" ref={glowRef} />;
}

export default CursorGlow;