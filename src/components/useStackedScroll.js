import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useStackedScroll = (phoneRef, contentRef, itemsRef) => {
  useLayoutEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const content = contentRef.current;
      const items = itemsRef.current.filter(Boolean);

      items.forEach((item, index) => {
        gsap.set(item, {
          "--clip": "0px",
          "--compact-s": 0,
          "--compact-o": 0,
          "--card-x": "0px",
          "--card-y": "0px",
          "--card-r": "0deg",
        });

        const tl = gsap.timeline();

        // Reveal animation
        tl.to(item, {
          "--clip": `${item.offsetHeight + 100}px`,
          "--compact-s": 1,
          "--compact-o": 1,
          duration: 1,
          ease: "none",
        });

        // Pop effect
        tl.to(
          item,
          {
            "--border-radius-h": "180px",
            "--border-radius-v": "20px",
            duration: 0.15,
            repeat: 1,
            yoyo: true,
          },
          0
        );

        // Tilt + stack
        tl.to(
          item,
          {
            "--card-r": index % 2 === 0 ? "-4deg" : "3deg",
            "--card-x": index % 2 === 0 ? "-4px" : "3px",
            "--card-y": "-40px",
            duration: 0.2,
          },
          0
        );

        ScrollTrigger.create({
          animation: tl,
          trigger: item,
          scroller: content,
          scrub: true,
          start: "top top+=180",
          end: "bottom top+=120",
        });
      });
    }, phoneRef);

    return () => ctx.revert();
  }, []);
};