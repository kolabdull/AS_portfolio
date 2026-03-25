import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedBoxes = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.5,
          pin: true,
          start: 'top top',
          end: '+=150%'
        }
      })
      .to('.box', {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: 'power1.inOut',
        stagger: { amount: 1 }
      })
      .to('.box', { ease: 'power1.out', duration: 1, rotation: '45deg' }, 0)
      .to('.box', { ease: 'power1.in', duration: 1, rotation: '0deg' }, 1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-white">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 text-center text-5xl font-black uppercase z-10 text-black">
        Scroll<br />Down
      </span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 text-center text-5xl font-black uppercase z-10 text-black">
        Scroll<br />Up
      </span>
      <div className="absolute inset-0">
        {Array.from({ length: 90 }).map((_, i) => (
          <div key={i} className="box h-[1.2vh] w-[50vw] mb-[-0.2vh] bg-gray-900" />
        ))}
      </div>
    </section>
  );
};

export default AnimatedBoxes;