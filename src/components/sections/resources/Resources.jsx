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
import SectionDescription from "@/components/ui/SectionDescription";

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

export const clientResourcesData = [
  {
    icon: MagnifyingGlassIcon3,
    iconWidth: 30,
    iconHeight: 30,
    title: "Project Agreement",
    description: "Standard terms for website design and development projects.",
    link: "/legal/project-agreement",
  },
  {
    icon: MegaphoneIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Retainer Agreement",
    description: "Terms for ongoing monthly marketing and support retainers.",
    link: "/legal/retainer-agreement",
  },
  {
    icon: BoostIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "NDA Template",
    description:
      "A mutual non-disclosure agreement used where confidential information is shared, including agency, white-label, and sensitive projects.",
    link: "/legal/nda-template",
  },
  {
    icon: EmailIcon2,
    iconWidth: 30,
    iconHeight: 30,
    title: "Payment Terms",
    description: "Invoicing, payment schedules, and refund policies.",
    link: "/legal/payment-terms",
  },
  {
    icon: DataAnalysticsIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Intellectual Property",
    description: "Ownership, licensing, and usage rights for deliverables.",
    link: "/legal/intellectual-property",
  },
  {
    icon: DataAnalysticsIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Complaints Procedure",
    description: "How to raise concerns and our resolution process.",
    link: "/legal/complaints-procedure",
  },
  {
    icon: DataAnalysticsIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Client Resources",
    description:
      "These documents apply when working with CreativePixels as a client, agency, or partner.",
    link: "/legal/client-resources",
  },
  {
    icon: DataAnalysticsIcon,
    iconWidth: 30,
    iconHeight: 30,
    title: "Support & Maintenance Schedule",
    description:
      "What’s included in ongoing support and maintenance, how requests are handled, response times, and what falls outside standard support.",
    link: "/legal/support-maintenance-schedule",
  },
];

export const themeColorList = Object.values(themeColors);

const Resources = () => {
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
              className="flex w-full flex-col items-center justify-center"
            >
              <motion.div variants={itemVariants} className="min-w-max">
                <SectionTitle text="Client Resources" textColor="#FFFFFF" />
              </motion.div>

              <motion.div variants={itemVariants} className="min-w-max">
                <SectionDescription
                  text="Agreements and terms for working together"
                  textColor="#FFFFFF"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="hidden w-full grid-cols-3 gap-[3rem] xl:grid"
            >
              {clientResourcesData.map((item, idx) => {
                const theme = getThemeColor(idx);

                return (
                  <motion.div key={idx} variants={itemVariants}>
                    <div className="client-resources-card">
                      <div className="flex h-full flex-col items-start justify-between p-[3rem] text-left">
                        <div className="flex flex-col items-start">
                          <i
                            style={{
                              boxShadow: theme.shadow,
                              background: theme.color,
                            }}
                            className="inline-flex size-[5.8rem] min-h-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                          >
                            <Image
                              src={item.icon}
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
                            {item.description}
                          </p>
                        </div>

                        <Link
                          href={item.link}
                          className="relative z-[10] inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                        >
                          Explore Strategy
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
                {clientResourcesData.map((item, idx) => {
                  const theme = getThemeColor(idx);
                  return (
                    <SwiperSlide
                      key={idx}
                      className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[10rem]"
                    >
                      <div className="client-resources-card">
                        <div className="flex h-full flex-col items-start justify-between p-[3rem] text-left">
                          <div className="flex flex-col items-start">
                            <i
                              style={{
                                background: theme.color,
                              }}
                              className="inline-flex size-[5.8rem] min-w-max items-center justify-center rounded-[1.5rem]"
                            >
                              <Image
                                src={item.icon}
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
                              {item.description}
                            </p>
                          </div>

                          <Link
                            href={item.link}
                            className="relative z-[10] inline-flex items-center gap-[.8rem] text-[1.6rem] font-semibold text-white"
                          >
                            Explore Strategy
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

export default Resources;
