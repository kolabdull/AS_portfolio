import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollReveal(selector = ".reveal") {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay so newly-routed content is in the DOM
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(selector);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
      );
      els.forEach((el) => {
        el.classList.remove("is-visible"); // reset on route change
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, selector]);
}