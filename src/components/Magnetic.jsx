import { useRef } from "react";

function Magnetic({ children, strength = 12, className = "" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      className={`magnetic ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

export default Magnetic;