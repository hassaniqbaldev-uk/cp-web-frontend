"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import SectionLabel from "@/components/ui/SectionLabel";
import HeadphoneIcon from "@/assets/icons/ui/headphone-icon.svg";
import EmailIcon from "@/assets/icons/ui/email-icon.svg";
import TimelineIcon from "@/assets/icons/ui/timeline-icon.svg";
import Link from "next/link";
import SectionDescription from "@/components/ui/SectionDescription";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import HomeHeroLogoShape2 from "@/components/decorative-elements/HomeHeroLogoShape2";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CallHero = () => {
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
      const cal = await getCalApi({ namespace: "cwh" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#292929" },
          dark: { "cal-brand": "#FF37B3" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
        hideBranding: true, // This hides the Cal.com branding
      });
    })();
  }, []);

  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[18rem] xl:px-[0rem] xl:pb-[8.3rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[70px] left-[-10px] h-[8rem] w-[4rem] rotate-[25deg] md:top-[5.8px] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape2 className="absolute top-[12rem] right-[2rem] h-[8rem] w-[4rem] rotate-[33deg] opacity-50 md:right-[8rem] md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute bottom-[8rem] left-[-6rem] h-[10rem] w-[10rem] rotate-[33deg] opacity-50 md:h-[13.2rem] md:w-[14.2rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[4rem]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              <h1 className="mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="block"
                  >
                    Book a call with Hassan
                  </motion.span>
                </span>
              </h1>

              <motion.div variants={itemVariants} className="max-w-[62.8rem]">
                <SectionDescription
                  text="Smart websites, standout branding, and ongoing support everything you need to grow."
                  textColor="#FFFFFF"
                />
              </motion.div>
            </motion.div>

            <div className="w-full">
              <Cal
                namespace="cwh"
                calLink="hassan-iqbal-mznzu9/cwh"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "1.2rem",
                  overflow: "scroll",
                }}
                config={{
                  layout: "month_view",
                  theme: "dark",
                  hideBranding: true,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallHero;
