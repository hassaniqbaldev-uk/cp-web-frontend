"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import { motion } from "framer-motion";

export const themeColors = {
  primary: {
    color: "#FF37B3",
    shadow: "5px 5px 44px 0px #FF37B3CC",
  },
  secondary: {
    color: "#3078FF",
    shadow: "5px 5px 44px 0px #3078FFCC",
  },
  accent: {
    color: "#ED910C",
    shadow: "5px 5px 44px 0px #ED910CCC",
  },
};

export const partnerData = [
  {
    title: "Market Invisibility",
    description:
      "Blending in with competitors? We find your unique angle and amplify it visually and verbally.",
  },
  {
    title: "Inconsistent Customer Experience",
    description:
      "We create comprehensive brand guidelines to ensure your brand looks and sounds the same across every touchpoint.",
  },
  {
    title: "Low Perceived Value",
    description:
      "Premium pricing requires premium presentation. We elevate your aesthetic to match the quality of your service.",
  },
];

export const themeColorList = Object.values(themeColors);

const PartnerWithUs2 = ({ service }) => {
  const getThemeColor = (index) =>
    themeColorList[index % themeColorList.length];

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
    <>
      <section className="relative px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Image*/}
        <Image
          src={ProcessBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[5rem]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center justify-center gap-[5px] text-center"
            >
              <motion.div variants={itemVariants}>
                <SectionLabel text="partner with us" textColor="#FF37B3" />
              </motion.div>

              <motion.div variants={itemVariants}>
                <SectionTitle
                  text="Stop losing money to..."
                  textColor="#FFFFFF"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <SectionDescription
                  text="We identify and fix the bottlenecks that are choking your growth."
                  textColor="#FFFFFF"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="hidden w-full grid-cols-3 gap-[3rem]"
            >
              {service.card.map((item, idx) => {
                const theme = getThemeColor(idx);

                return (
                  <motion.div key={idx} variants={itemVariants}>
                    <div className="partner-with-us-2-card">
                      <div className="absolute inset-0 z-[10] flex flex-col items-start justify-start p-[3rem] text-left">
                        <div
                          style={{
                            boxShadow: theme.shadow,
                            background: theme.color,
                          }}
                          className="inline-flex size-[4.8rem] min-w-max items-center justify-center rounded-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white"
                        >
                          {idx + 1}
                        </div>

                        <h4 className="mt-[2rem] text-[2.6rem] leading-[3rem] font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h4>

                        <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Responsive */}
            <div className="block w-full">
              <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={0}
                breakpoints={{
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                }}
                className="mySwiper"
              >
                {service.card.map((item, idx) => {
                  const theme = getThemeColor(idx);
                  return (
                    <SwiperSlide
                      key={idx}
                      className="!flex !h-auto !items-center !justify-center px-[1rem] pt-[.5rem] pb-[10rem]"
                    >
                      <div className="partner-with-us-2-card">
                        <div className="absolute inset-0 z-[10] flex flex-col items-start justify-center p-[3rem] text-left">
                          <div
                            style={{
                              boxShadow: theme.shadow,
                              background: theme.color,
                            }}
                            className="inline-flex size-[4.8rem] min-w-max items-center justify-center rounded-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white"
                          >
                            {idx + 1}
                          </div>

                          <h4 className="mt-[2rem] text-[2.2rem] leading-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                            {item.title}
                          </h4>

                          <p className="mt-[1rem] mb-[2rem] text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-white">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUs2;
