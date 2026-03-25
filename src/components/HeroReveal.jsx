import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroReveal = () => {
  const containerRef = useRef(null);
  const splitTopRef = useRef(null);
  const splitBottomRef = useRef(null);
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split header animation
      gsap.fromTo(splitTopRef.current,
        { y: '0%' },
        {
          y: '-50%',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
      gsap.fromTo(splitBottomRef.current,
        { y: '0%' },
        {
          y: '50%',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // Parallax images
      parallaxRefs.current.forEach((el, i) => {
        if (!el) return;
        const speed = 0.5 + i * 0.2;
        gsap.fromTo(el,
          { y: 0 },
          {
            y: -150 * speed,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Split text */}
      <div className="relative w-full h-screen">
        <div ref={splitTopRef} className="absolute top-0 left-0 w-full h-1/2 overflow-hidden" style={{ clipPath: 'inset(0 0 50% 0)' }}>
          <div className="h-full bg-white flex items-center justify-center">
            <span className="text-black text-6xl md:text-8xl lg:text-9xl font-black">Creative</span>
          </div>
        </div>
        <div ref={splitBottomRef} className="absolute top-1/2 left-0 w-full h-1/2 overflow-hidden" style={{ clipPath: 'inset(50% 0 0 0)' }}>
          <div className="h-full bg-white flex items-center justify-center">
            <span className="text-black text-6xl md:text-8xl lg:text-9xl font-black">Developer</span>
          </div>
        </div>
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-lg px-6">
          <p className="text-gray-300 text-lg md:text-xl font-light mb-8">
            // I build immersive digital experiences
          </p>
        </div>
      </div>

      {/* Parallax decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={el => parallaxRefs.current[0] = el}
          className="absolute left-[-100px] top-[-400px] w-48 h-48 bg-gray-800 rounded-full opacity-40"
        />
        <div
          ref={el => parallaxRefs.current[1] = el}
          className="absolute left-[-200px] top-[-400px] w-32 h-48 bg-gray-700 rounded-lg opacity-40"
        />
        <div
          ref={el => parallaxRefs.current[2] = el}
          className="absolute right-[-100px] top-[-500px] w-40 h-40 bg-gray-600 rounded-full opacity-40"
        />
        <div
          ref={el => parallaxRefs.current[3] = el}
          className="absolute left-[500px] top-[-300px] w-24 h-24 bg-gray-500 rounded-full blur-sm opacity-40"
        />
        <div
          ref={el => parallaxRefs.current[4] = el}
          className="absolute left-[400px] top-[-400px] w-32 h-48 bg-gray-400 rounded-lg blur-sm opacity-40 z-10"
        />
      </div>
    </div>
  );
};

export default HeroReveal;