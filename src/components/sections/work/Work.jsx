"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
import TiltArrowIcon from "@/components/icons/TiltArrowIcon";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { urlFor } from "@/sanity/image";
import { motion } from "framer-motion";

const Work = ({ caseStudies }) => {
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-[3rem] xl:flex-row xl:items-end"
          >
            <div className="flex w-[30rem] flex-col items-center text-center md:w-[58.5rem] xl:items-start xl:text-left">
              <motion.div variants={itemVariants}>
                <SectionLabel text="Our Work" textColor="#EE8D00" />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-[5px] mb-[14px]"
              >
                <SectionTitle text="Digital Done Right." />
              </motion.div>

              <motion.div variants={itemVariants}>
                <SectionDescription text="We've crafted websites and brands that blend design, development, and strategy into measurable success." />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <PrimaryButton
                text="View All Projects"
                textColor="#FFFFFF"
                href="/case-studies"
                bGcolor="#FF37B3"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-[7.4rem] hidden w-full gap-[3rem] xl:flex"
          >
            <div className="w-[79.1rem]">
              <motion.div variants={itemVariants}>
                <Link
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${caseStudies[6].slug}`}
                  className="flex flex-col gap-[3.9rem] rounded-[3rem] bg-white px-[3rem] pt-[2rem] pb-[4rem]"
                >
                  <div className="flex h-[49.7rem] w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={urlFor(caseStudies[6].thumbnailImage)
                        ?.width(737)
                        .height(497)
                        .fit("crop")
                        .url()}
                      alt={caseStudies[6].title || "Case Study Thumbnail Image"}
                      width={737}
                      height={497}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex w-full flex-col">
                    {/* <ul className="flex items-center gap-[1.2rem]">
                    {["NON-PROFIT", "STRATEGY", "UX DESIGN"].map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="inline-flex h-[2.8rem] items-center justify-center rounded-[20rem] bg-[#F2F1F4] px-[12px] text-center text-[1.4rem] leading-[2.4rem] font-bold text-[#312749]"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul> */}

                    <hr className="my-[3.2rem] w-full border-t border-black/20" />

                    <div className="flex h-full items-center justify-between">
                      <div className="flex flex-col items-start text-left">
                        <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {caseStudies[6].title}
                        </h4>

                        <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                          {caseStudies[6].excerpt}
                        </span>
                      </div>

                      <i
                        style={{
                          background: caseStudies[6].iconBg,
                        }}
                        className="inline-flex size-[6rem] items-center justify-center rounded-full"
                      >
                        <TiltArrowIcon color={caseStudies[6].iconColor} />
                      </i>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            <div className="flex w-[40rem] flex-col gap-[2rem]">
              <motion.div variants={itemVariants}>
                <Link
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${caseStudies[5].slug}`}
                  className="flex w-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[1.5rem] pb-[3rem]"
                >
                  <div className="flex h-[22.7rem] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={urlFor(caseStudies[5].thumbnailImage)
                        ?.width(365)
                        .height(227)
                        .fit("crop")
                        .url()}
                      alt={caseStudies[5].title || "Case Study Thumbnail Image"}
                      width={365}
                      height={227}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[2.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {caseStudies[5].title}
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        {caseStudies[5].excerpt}
                      </span>
                    </div>

                    <i
                      style={{
                        background: caseStudies[5].iconBg,
                      }}
                      className="inline-flex size-[6rem] items-center justify-center rounded-full"
                    >
                      <TiltArrowIcon color={caseStudies[5].iconColor} />
                    </i>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  style={{
                    boxShadow: "11px 11px 65px 0px #00000012",
                  }}
                  href={`/case-studies/${caseStudies[4].slug}`}
                  className="flex w-full flex-col gap-[2rem] rounded-[3rem] bg-white px-[2rem] pt-[1.5rem] pb-[3rem]"
                >
                  <div className="flex h-[22.7rem] w-full overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={urlFor(caseStudies[4].thumbnailImage)
                        ?.width(365)
                        .height(227)
                        .fit("crop")
                        .url()}
                      alt={caseStudies[4].title || "Case Study Thumbnail Image"}
                      width={365}
                      height={227}
                      className="size-full"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start text-left">
                      <h4 className="text-[2.6rem] leading-[4rem] font-bold tracking-[-0.02em] text-[#312749]">
                        {caseStudies[4].title}
                      </h4>

                      <span className="text-[1.6rem] leading-[2.6rem] font-semibold text-[#625C70]">
                        {caseStudies[4].excerpt}
                      </span>
                    </div>

                    <i
                      style={{
                        background: caseStudies[4].iconBg,
                      }}
                      className="inline-flex size-[6rem] items-center justify-center rounded-full"
                    >
                      <TiltArrowIcon color={caseStudies[4].iconColor} />
                    </i>
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mt-[3rem] block w-full xl:hidden"
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
              {caseStudies.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!flex !h-auto !justify-center !pt-[2rem] pb-[5rem]"
                >
                  <Link
                    style={{
                      boxShadow: "11px 11px 65px 0px #00000012",
                    }}
                    href={`/case-studies/${item.slug}`}
                    className="flex h-full w-[27.5rem] flex-col gap-[2.2rem] rounded-[3rem] bg-white px-[1.5rem] pt-[1.5rem] pb-[2rem]"
                  >
                    <div className="flex h-[18.3rem] w-full overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={urlFor(item.thumbnailImage)
                          ?.width(275)
                          .height(183)
                          .fit("crop")
                          .url()}
                        alt={item.title || "Case Study Thumbnail Image"}
                        width={275}
                        height={183}
                        className="w-full object-cover object-center"
                        unoptimized
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col items-start gap-[1rem] text-left">
                        <h4 className="text-[2rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#312749]">
                          {item.title}
                        </h4>

                        <span className="text-[1.4rem] leading-[1.9rem] font-semibold text-[#625C70]">
                          {item.excerpt}
                        </span>
                      </div>

                      <i
                        style={{
                          backgroundColor: item.iconBg,
                        }}
                        className="inline-flex size-[4.6rem] min-w-[4.6rem] items-center justify-center rounded-full"
                      >
                        <TiltArrowIcon color={item.iconColor} />
                      </i>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Work;
