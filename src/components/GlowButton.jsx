import { useRef, useEffect } from 'react';

const GlowButton = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef(null);
  const bgRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const bg = bgRef.current;
    const frame = frameRef.current;

    const handleMouseMove = (e) => {
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      const scaleY = 10 - Math.min(1, Math.hypot(e.clientX - centerX, e.clientY - centerY) / (rect.width * 1.5)) * 10;
      if (bg) bg.style.transform = `rotateZ(${angle + 180}deg) scaleY(${scaleY})`;
    };

    const handleMouseEnter = () => {
      if (frame) frame.classList.add('hover');
    };
    const handleMouseLeave = () => {
      if (frame) frame.classList.remove('hover');
    };
    const handleMouseDown = () => {
      if (frame) frame.classList.add('press');
    };
    const handleMouseUp = () => {
      if (frame) frame.classList.remove('press');
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousedown', handleMouseDown);
    button.addEventListener('mouseup', handleMouseUp);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousedown', handleMouseDown);
      button.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative w-14 h-14 rounded-full flex items-center justify-center bg-gray-800 overflow-hidden ${className}`}
    >
      <img
        ref={bgRef}
        src="https://cdn.prod.website-files.com/65cceef869e5a56037c32801/672080ee3e9942d6e0617400_Rectangle%201002.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-200"
      />
      <div
        ref={frameRef}
        className="relative z-10 w-12 h-12 rounded-full bg-gray-700/50 backdrop-blur-sm flex items-center justify-center transition-all duration-200"
        style={{
          boxShadow: '0 0 0 0 white, inset 0 0 0 2px rgba(0,0,0,0.6), inset 0 0 16px rgba(160,160,160,0.1)',
        }}
      >
        {children}
      </div>
    </button>
  );
};

export default GlowButton;