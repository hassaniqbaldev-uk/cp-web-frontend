"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.webp";
import AboutHeroCardImg from "@/assets/images/cards/about-hero-card-img.webp";
import SparkStarIcon from "@/assets/icons/ui/spark-star-icon.svg";
import RocketIcon2 from "@/assets/icons/ui/rocket-icon-2.svg";
import RetentionIcon from "@/assets/icons/ui/retention-icon.svg";
import NetworkingIcon from "@/assets/icons/ui/networking-icon.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import AboutHeroLogoShape1 from "@/components/decorative-elements/AboutHeroLogoShape1";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

const AboutHero = () => {
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

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 50,
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
    <>
      <section className="relative w-full px-[2rem] pt-[10rem] pb-[5rem] md:pt-[16.7rem] xl:px-[0rem] xl:pb-[22.8rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] z-[2] h-[8rem] w-[4rem] rotate-[25deg] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <AboutHeroLogoShape1 className="pointer-events-none absolute top-[15rem] left-[25rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 select-none md:left-[90rem] md:h-[22.5rem] md:w-[11.2rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <ContactHeroLogoShape1 className="absolute right-[2rem] bottom-[2rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:right-[-5rem] md:bottom-[25rem] md:h-[16.6rem] md:w-[17.9rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[15rem] xl:flex-row">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left"
            >
              <motion.div variants={itemVariants}>
                <SectionLabel text="Who We Are" textColor="#FF37B3" />
              </motion.div>

              <h1 className="mt-[1rem] mb-[2rem] max-w-[43.6rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="block"
                  >
                    A digital agency that
                  </motion.span>
                </span>

                <span className="block overflow-hidden">
                  <motion.span
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                    className="bg-gradient-yellow-pink block bg-clip-text text-transparent"
                  >
                    gives a damn.
                  </motion.span>
                </span>
              </h1>

              <motion.div variants={itemVariants} className="max-w-[54rem]">
                <SectionDescription
                  text="We founded CreativePixels because we were tired of agencies over-promising and under-delivering. We're here to change that with honest work and real results."
                  textColor="#ffffff"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
              className="relative hidden h-[48.7rem] w-[46.4rem] items-center justify-center xl:flex"
            >
              <div className="absolute top-[6.6rem] left-[-3.2rem] h-[24.6rem] w-[23.2rem] rounded-[20rem] bg-[#FFE400] blur-[20rem]" />

              <Image
                src={AboutHeroCardImg}
                width={464}
                height={487}
                alt="Card Image"
                unoptimized
              />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-[5rem] flex flex-wrap justify-center gap-[2.4rem] xl:mt-[9rem] xl:mb-[-36rem]"
          >
            <motion.div
              variants={itemVariants}
              className="about-hero-card flex flex-col items-center justify-center text-center"
            >
              <i>
                <Image
                  src={SparkStarIcon}
                  width={55}
                  height={55}
                  alt="Icon"
                  unoptimized
                />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={12} suffix="+" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Years Experience
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="about-hero-card flex flex-col items-center justify-center text-center"
            >
              <i>
                <Image
                  src={RocketIcon2}
                  width={55}
                  height={55}
                  alt="Icon"
                  unoptimized
                />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={200} suffix="+" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Projects Launched
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="about-hero-card flex flex-col items-center justify-center text-center"
            >
              <i>
                <Image
                  src={RetentionIcon}
                  width={55}
                  height={55}
                  alt="Icon"
                  unoptimized
                />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={94} suffix="%" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Client Retention
              </span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="about-hero-card flex flex-col items-center justify-center text-center"
            >
              <i>
                <Image
                  src={NetworkingIcon}
                  width={55}
                  height={55}
                  alt="Icon"
                  unoptimized
                />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                <Counter value={15} suffix="+" />
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Team Members
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
