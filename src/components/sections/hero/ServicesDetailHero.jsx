"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const ServicesDetailHero = ({ service }) => {
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

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[15rem] pb-[5rem] md:pt-[20rem] md:pb-[10rem] xl:px-[0rem]">
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
          <HomeHeroLogoShape1 className="absolute top-[2rem] left-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:h-[17rem] md:w-[8.4rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute bottom-[10rem] left-[4rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:left-[10rem] md:h-[17rem] md:w-[8.5rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute top-[15rem] right-[5rem] h-[8rem] w-[4rem] rotate-[35deg] opacity-50 md:h-[12.4rem] md:w-[13.3rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex w-full flex-col items-center justify-between gap-[4rem] text-center xl:flex-row xl:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-[53rem]"
            >
              <motion.div variants={itemVariants}>
                <SectionLabel text="Our Expertise" textColor="#FF37B3" />
              </motion.div>

              <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[89rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="block"
                  >
                    {service.title}
                  </motion.span>
                </span>
              </h1>

              <motion.div
                variants={itemVariants}
                className="mt-[1.5rem] mb-[4rem] max-w-[76rem]"
              >
                <SectionDescription
                  text={service.description}
                  textColor="#625C70"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-wrap items-center justify-center gap-[1.8rem] xl:justify-start"
              >
                <PrimaryButton
                  text="See Case Studies"
                  textColor="#FFFFFF"
                  bGcolor="#312749"
                  href={service.caseStudiesLink}
                />

                <button
                  data-cal-namespace="15min"
                  data-cal-link="hassan-iqbal-mznzu9/15min"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className="inline-flex h-[4rem] items-center justify-center rounded-[60px] border-2 border-[#312749]/40 px-[30px] py-[8px] text-center text-[1.4rem] font-semibold tracking-normal text-[#312749] md:h-[5rem] md:text-[1.8rem]"
                >
                  Book a Call
                </button>
              </motion.div>
            </motion.div>

            <div className="w-full md:w-[63rem]">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="flex h-[32rem] w-full items-center justify-center rounded-[2rem] bg-white md:h-[45rem]"
              >
                <Image
                  src={service.heroImage.asset.url}
                  width={534}
                  height={355}
                  alt="Card Image"
                  className="w-[30rem] md:w-[53.4rem]"
                  unoptimized
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailHero;
