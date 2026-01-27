"use client";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import MagnifyingGlassIcon3 from "@/assets/icons/ui/magnifying-glass-icon-3.svg";
import MegaphoneIcon from "@/assets/icons/ui/megaphone-icon.svg";
import BoostIcon from "@/assets/icons/ui/boost-icon.svg";
import EmailIcon2 from "@/assets/icons/ui/email-icon-2.svg";
import DataAnalysticsIcon from "@/assets/icons/ui/data-analytics-icon.svg";
import ProcessBg from "@/assets/images/backgrounds/process-bg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export const themeColors = {
  primary: {
    color: "#3078FF",
    shadow: "5px 5px 44px 0px #3078FFCC",
  },
  secondary: {
    color: "#ED910C",
    shadow: "5px 5px 44px 0px #ED910CCC",
  },
  accent: {
    color: "#FF37B3",
    shadow: "5px 5px 44px 0px #FF37B3CC",
  },
  success: {
    color: "#44B276",
    shadow: "5px 5px 44px 0px #44B276CC",
  },
  highlight: {
    color: "#BF00B4",
    shadow: "5px 5px 44px 0px #BF00B4CC",
  },
};

export const growthData = [
  {
    icon: MagnifyingGlassIcon3,
    iconWidth: 30,
    iconHeight: 30,
    title: "SEO",
    description: "Rank higher on Google",
    link: "",
  },
  {
    icon: MegaphoneIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "PPC",
    description: "Google & Social Ads",
    link: "",
  },
  {
    icon: BoostIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "CRO",
    description: "Boost conversion rates",
    link: "",
  },
  {
    icon: EmailIcon2,
    iconWidth: 30,
    iconHeight: 30,
    title: "Email",
    description: "Automated flows",
    link: "",
  },
  {
    icon: DataAnalysticsIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Analytics",
    description: "Data & tracking",
    link: "",
  },
];

export const themeColorList = Object.values(themeColors);

const Growth2 = ({ services = [] }) => {
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
              className="flex w-full items-center justify-center gap-[6rem]"
            >
              <motion.hr
                variants={itemVariants}
                className="hidden w-full border-t border-white/20 md:block"
              />
              <motion.div variants={itemVariants} className="min-w-max">
                <SectionTitle text="Growth" textColor="#FFFFFF" />
              </motion.div>
              <motion.hr
                variants={itemVariants}
                className="hidden w-full border-t border-white/20 md:block"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="hidden w-full grid-cols-3 gap-[3rem] xl:grid"
            >
              {services.map((item, idx) => {
                const theme = getThemeColor(idx);

                return (
                  <motion.div key={idx} variants={itemVariants}>
                    <div className="growth-2-card">
                      <div className="absolute inset-0 z-[10] flex flex-col items-start justify-center px-[3rem] text-left">
                        <i
                          style={{
                            boxShadow: theme.shadow,
                            background: theme.color,
                          }}
                          className="inline-flex size-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                        >
                          <Image
                            src={item.icon.asset.url}
                            alt={item.title}
                            width={30}
                            height={30}
                            unoptimized
                          />
                        </i>

                        <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                          {item.title}
                        </h4>

                        <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                          {item.excerpt}
                        </p>

                        <Link
                          href={`/services/${item.slug.current}`}
                          className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                        >
                          Explore Service
                          <RightArrowIcon color="#ffffff" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="block w-full xl:hidden"
            >
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
                {services.map((item, idx) => {
                  const theme = getThemeColor(idx);
                  return (
                    <SwiperSlide
                      key={idx}
                      className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                    >
                      <div className="growth-2-card">
                        <div className="absolute inset-0 z-[10] flex flex-col items-start justify-center px-[3rem] text-left">
                          <i
                            style={{
                              background: theme.color,
                            }}
                            className="inline-flex size-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                          >
                            <Image
                              src={item.icon.asset.url}
                              alt={item.title}
                              width={30}
                              height={30}
                              unoptimized
                            />
                          </i>

                          <h4 className="mt-[2rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-white">
                            {item.title}
                          </h4>

                          <p className="mt-[1rem] mb-[3rem] text-[1.6rem] leading-[2.4rem] font-normal tracking-normal text-white">
                            {item.excerpt}
                          </p>

                          <Link
                            href={`/services/${item.slug.current}`}
                            className="inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                          >
                            Explore Service
                            <RightArrowIcon color="#ffffff" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Growth2;
