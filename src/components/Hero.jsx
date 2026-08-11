// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const HeroReveal = () => {
//   const containerRef = useRef(null);
//   const splitTopRef = useRef(null);
//   const splitBottomRef = useRef(null);
//   const parallaxRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Split header animation
//       gsap.fromTo(splitTopRef.current,
//         { y: '0%' },
//         {
//           y: '-50%',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: true,
//           }
//         }
//       );
//       gsap.fromTo(splitBottomRef.current,
//         { y: '0%' },
//         {
//           y: '50%',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: true,
//           }
//         }
//       );

//       // Parallax images
//       parallaxRefs.current.forEach((el, i) => {
//         if (!el) return;
//         const speed = 0.5 + i * 0.2;
//         gsap.fromTo(el,
//           { y: 0 },
//           {
//             y: -150 * speed,
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: 'top bottom',
//               end: 'bottom top',
//               scrub: true,
//             }
//           }
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="relative bg-black text-white min-h-screen overflow-hidden">
//       {/* Split text */}
//       <div className="relative w-full h-screen">
//         <div ref={splitTopRef} className="absolute top-0 left-0 w-full h-1/2 overflow-hidden" style={{ clipPath: 'inset(0 0 50% 0)' }}>
//           <div className="h-full bg-white flex items-center justify-center">
//             <span className="text-black text-6xl md:text-8xl lg:text-9xl font-black">Creative</span>
//           </div>
//         </div>
//         <div ref={splitBottomRef} className="absolute top-1/2 left-0 w-full h-1/2 overflow-hidden" style={{ clipPath: 'inset(50% 0 0 0)' }}>
//           <div className="h-full bg-white flex items-center justify-center">
//             <span className="text-black text-6xl md:text-8xl lg:text-9xl font-black">Developer</span>
//           </div>
//         </div>
//       </div>

//       {/* Centered content */}
//       <div className="absolute inset-0 flex items-center justify-center text-center">
//         <div className="max-w-lg px-6">
//           <p className="text-gray-300 text-lg md:text-xl font-light mb-8">
//             // I build immersive digital experiences
//           </p>
//         </div>
//       </div>

//       {/* Parallax decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           ref={el => parallaxRefs.current[0] = el}
//           className="absolute left-[-100px] top-[-400px] w-48 h-48 bg-gray-800 rounded-full opacity-40"
//         />
//         <div
//           ref={el => parallaxRefs.current[1] = el}
//           className="absolute left-[-200px] top-[-400px] w-32 h-48 bg-gray-700 rounded-lg opacity-40"
//         />
//         <div
//           ref={el => parallaxRefs.current[2] = el}
//           className="absolute right-[-100px] top-[-500px] w-40 h-40 bg-gray-600 rounded-full opacity-40"
//         />
//         <div
//           ref={el => parallaxRefs.current[3] = el}
//           className="absolute left-[500px] top-[-300px] w-24 h-24 bg-gray-500 rounded-full blur-sm opacity-40"
//         />
//         <div
//           ref={el => parallaxRefs.current[4] = el}
//           className="absolute left-[400px] top-[-400px] w-32 h-48 bg-gray-400 rounded-lg blur-sm opacity-40 z-10"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroReveal;


import { useEffect, useState } from "react";

function Hero() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [typedText, setTypedText] = useState("");

  const command = "whoami";

  useEffect(() => {
    if (!showTerminal) {
      setTypedText("");
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(command.slice(0, index + 1));
      index += 1;

      if (index === command.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [showTerminal]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-kicker">
            <span className="terminal-prompt">$</span> ./initialize
          </p>

          <h1>
            Abdul-Samad
            <br />
            <span>Temitope Kolawole</span>
          </h1>

          <div className="hero-role">
            <span>Engineer</span>
            <span>·</span>
            <span>Researcher</span>
            <span>·</span>
            <span>Builder</span>
          </div>

          <p className="hero-description">
            I build at the intersection of engineering, computation, data,
            artificial intelligence, and intelligent systems.
          </p>

          <div className="hero-actions">
            <button
              className="primary-action"
              onClick={scrollToProjects}
            >
              Explore My Work
              <span>↗</span>
            </button>

            <button
              className="secondary-action"
              onClick={() => setShowTerminal(!showTerminal)}
            >
              {showTerminal ? "Close Terminal" : "Open Terminal"}
              <span>⌘</span>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <div className="image-label">
              <span>PROFILE_001</span>
              <span>AVAILABLE</span>
            </div>

            <div className="hero-image-placeholder">
              <span>YOUR PHOTO</span>
              <small>BLACK & WHITE PORTRAIT</small>
            </div>

            <div className="image-meta">
              <span>ENGINEER</span>
              <span>NG / 06</span>
            </div>
          </div>
        </div>
      </div>

      {showTerminal && (
        <div className="hero-terminal">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span />
              <span />
              <span />
            </div>

            <span>abdul-samad@portfolio:~</span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">$</span>{" "}
              {typedText}
              {typedText.length < command.length && (
                <span className="terminal-cursor">▋</span>
              )}
            </p>

            {typedText === command && (
              <div className="terminal-output">
                <p>abdul-samad</p>
                <p>Engineer. Researcher. Builder.</p>
                <p>Currently building intelligent systems.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}

export default Hero;