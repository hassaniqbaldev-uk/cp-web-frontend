"use client";
import Counter from "@/components/ui/Counter";
import { motion } from "framer-motion";

const Stats = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-[2rem] pt-[5rem] md:pt-[22rem] xl:px-[0rem]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container flex flex-col items-center justify-center gap-[5rem] xl:flex-row"
      >
        <motion.div
          variants={itemVariants}
          className="grid w-full gap-[2.4rem] md:grid-cols-3"
        >
          <div className="flex size-full flex-col items-start justify-center gap-[2rem] rounded-[3rem] bg-[#FF37B3] p-[4rem] text-left">
            <h4 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
              <Counter value={12} suffix="+" />
            </h4>

            <span className="text-[1.8rem] font-bold tracking-normal text-white">
              Years Experience
            </span>
          </div>

          <div className="flex size-full flex-col items-start justify-center gap-[2rem] rounded-[3rem] bg-[#EE7621] p-[4rem] text-left">
            <h4 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
              <Counter value={200} suffix="+" />
            </h4>

            <span className="text-[1.8rem] font-bold tracking-normal text-white">
              Projects Launched
            </span>
          </div>

          <div className="flex size-full flex-col items-start justify-center gap-[2rem] rounded-[3rem] bg-[#F14A58D9] p-[4rem] text-left">
            <h4 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
              <Counter value={15} suffix="+" />
            </h4>

            <span className="text-[1.8rem] font-bold tracking-normal text-white">
              Team Members
            </span>
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-[2.2rem] leading-[3.3rem] font-normal tracking-normal text-[#625C70] xl:max-w-[36.9rem] xl:text-left"
        >
          We founded CreativePixels because we were tired of agencies
          over-promising and under-delivering. We&apos;re here to change that
          with honest work and real results.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Stats;
