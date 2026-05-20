import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Motion values for smooth trailing
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.6 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch-only devices
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsMobile(!hasFinePointer);

    if (!hasFinePointer) return;

    // Add CSS class to body to hide default cursor
    document.body.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable");

      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Dynamic trailing outer glowing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-red pointer-events-none z-[9999]"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(255, 30, 30, 0.1)" : "rgba(255, 30, 30, 0)",
          borderColor: isHovered ? "#FF3333" : "#FF1E1E",
          boxShadow: isHovered
            ? "0 0 20px rgba(255, 30, 30, 0.6), inset 0 0 10px rgba(255, 30, 30, 0.3)"
            : "0 0 10px rgba(255, 30, 30, 0.3)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
      {/* Instant inner core point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neon-red pointer-events-none z-[9999] shadow-[0_0_10px_#FF1E1E]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovered ? 0.5 : 1,
          backgroundColor: isHovered ? "#FF3333" : "#FF1E1E",
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
      />
    </>
  );
}
