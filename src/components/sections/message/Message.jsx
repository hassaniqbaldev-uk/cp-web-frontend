"use client";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";
import { motion } from "framer-motion";

const Message = () => {
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
    <section className="relative px-[3rem] py-[5rem] xl:px-[0rem] xl:py-[8.8rem]">
      {/*Background Element*/}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        <ServicesLogoShape className="pointer-events-none absolute top-[2rem] right-[-1rem] h-[7.1rem] w-[5.2rem] rotate-[-34deg] select-none md:top-[7.8rem] md:h-[17.7rem] md:w-[12.9rem]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto flex max-w-[113rem] flex-col items-center gap-[2rem] text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-[3.5rem] leading-[4rem] font-semibold tracking-[-0.02em] text-[#070707] md:text-[4.5rem] md:leading-[5.6rem] lg:text-[5.6rem] lg:leading-[6.4rem]"
        >
          An agency, for your agency
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-[103rem] text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#333333] md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]"
        >
          Expand your services, take on more clients, and deliver results, all
          without the overhead of hiring in-house.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-[2.4rem] leading-[3.4rem] font-semibold tracking-[-0.02em] text-[#EE8D00] md:text-[2.8rem] md:leading-[3.8rem] lg:text-[3.4rem] lg:leading-[4.8rem]"
        >
          Access web and graphics designers, developers, and long-term support
          all under your own brand.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Message;
