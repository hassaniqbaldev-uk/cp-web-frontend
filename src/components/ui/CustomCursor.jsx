"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  // Track mouse position
  useEffect(() => {
    const move = (e) => {
      if (!hasMoved) setHasMoved(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [hasMoved]);

  // Track hover on cards
  useEffect(() => {
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const elements = document.querySelectorAll(".cursor-card");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  // 🚫 Do not render until mouse moves
  if (!hasMoved) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden size-[7rem] items-center justify-center rounded-full bg-[#FF37B3] text-white xl:flex"
      animate={{
        x: position.x - 35,
        y: position.y - 35,
        scale: visible ? 1 : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <span className="text-[1.4rem] font-semibold">View</span>
    </motion.div>
  );
};

export default CustomCursor;
