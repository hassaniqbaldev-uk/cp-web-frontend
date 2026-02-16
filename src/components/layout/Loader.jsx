"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.webp";
import LoaderLogo from "../decorative-elements/LoaderLogo";
import { useLoaderStore } from "@/store/loaderStore";

export default function Loader() {
  const [phase, setPhase] = useState(0);
  const [exit, setExit] = useState(false);
  const setLoaderDone = useLoaderStore((state) => state.setLoaderDone);

  useEffect(() => {
    // phase 0 → 1: begin stroke draw
    const t1 = setTimeout(() => setPhase(1), 150);

    // phase 1 → 2: begin fill
    // stroke finishes at ~1.54s (1s duration + 18 paths × 0.03s stagger)
    const t2 = setTimeout(() => setPhase(2), 1850);

    // phase 2 → exit: fade out loader
    // fill finishes at ~0.76s after phase 2 (0.4s duration + 18 paths × 0.02s stagger)
    const t3 = setTimeout(() => setExit(true), 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{
        background: `url(${HeroBg.src}) no-repeat center center/cover`,
      }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onAnimationComplete={() => {
        if (exit) setLoaderDone();
      }}
    >
      <LoaderLogo
        width="240"
        height="91"
        phase={phase}
        className="h-[4.6rem] w-[12.1rem] md:h-[9.1rem] md:w-[24rem]"
      />
    </motion.div>
  );
}
