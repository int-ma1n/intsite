import { useEffect } from "react";

export function useParallax<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const rotateX = (e.clientY - centerY) * -0.003;
      const rotateY = (e.clientX - centerX) * 0.003;

      el.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(8px)
      `;
    };

    const handleMouseLeave = () => {
      el.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
      `;
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);
}
