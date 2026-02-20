"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionTitle from "@/components/ui/SectionTitle";
import SectionDescription from "@/components/ui/SectionDescription";
import Image from "next/image";
import GroupIcon from "@/assets/icons/ui/group-icon.svg";
import ComputerIcon from "@/assets/icons/ui/computer-icon.svg";
import FastTimelineIcon2 from "@/assets/icons/ui/fast-timeline-icon-2.svg";
import HeartIcon2 from "@/assets/icons/ui/heart-icon-2.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import ValuesCardImg from "@/assets/images/cards/values-card-img.png";

export const valuesCards = [
  {
    title: "People First",
    description:
      "Technology is just a tool. We focus on the humans who will actually use the products we build.",
    icon: GroupIcon,
    color: "#3078FF",
    boxShadow: "4px 12px 30px 0px #3078FF1C",
  },
  {
    title: "Outcome Driven",
    description:
      "We don't care about vanity metrics. We care about leads, sales, and measurable growth for your business.",
    icon: ComputerIcon,
    color: "#FF37B3",
    boxShadow: "4px 12px 30px 0px #FF37B31C",
  },
  {
    title: "Move Fast",
    description:
      "The digital world changes daily. We build agile workflows that allow us to ship, test, and iterate quickly.",
    icon: FastTimelineIcon2,
    color: "#EE8D00",
    boxShadow: "4px 12px 30px 0px #EE76211C",
  },
  {
    title: "Radical Transparency",
    description:
      "No hidden fees, no tech jargon. We explain what we're doing and why, every step of the way.",
    icon: HeartIcon2,
    color: "#44B276",
    boxShadow: "4px 12px 30px 0px #44B2761C",
  },
];

const Values = () => {
  const [hovered, setHovered] = useState(null);

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
      <section className="relative overflow-hidden bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={itemVariants}>
              <SectionLabel text="Our Values" textColor="#FF37B3" />
            </motion.div>

            <motion.div variants={itemVariants} className="mt-[5px] mb-[14px]">
              <SectionTitle text="Our Core Values" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <SectionDescription text="The principles that guide every decision we make." />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-[5rem] flex flex-col items-center justify-center gap-[4rem] xl:flex-row xl:items-start"
          >
            <motion.div
              variants={itemVariants}
              className="w-full overflow-hidden rounded-[3rem] md:w-[58rem]"
            >
              <Image
                src={ValuesCardImg}
                width={580}
                height={677}
                alt="Card Image"
                className="size-full object-cover object-center"
                unoptimized
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid w-full gap-[3.3rem] md:grid-cols-2 xl:w-[58.5rem]"
            >
              {valuesCards.map((item, idx) => (
                <motion.div variants={itemVariants} key={idx}>
                  <div
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      boxShadow: hovered === idx ? item.boxShadow : "",
                      borderColor: hovered === idx ? item.color : "#F1F0F3",
                    }}
                    className="flex h-full w-full flex-col items-start justify-center rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
                  >
                    <div className="relative size-[6.3rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                        <i>
                          <Image
                            src={item.icon}
                            alt="Icon"
                            width={30}
                            height={30}
                            unoptimized
                          />
                        </i>
                      </div>
                      <div
                        style={{
                          background: item.color,
                        }}
                        className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                      />
                    </div>

                    <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                      {item.title}
                    </h3>

                    <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Responsive */}
          {/* <div className="mt-[5rem] block w-full xl:hidden">
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
              {valuesCards.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]"
                >
                  <div
                    style={{
                      borderColor: item.color,
                    }}
                    className="flex h-full w-full flex-col items-start justify-between rounded-[3rem] border bg-white px-[3rem] pt-[3.1rem] pb-[2.8rem] text-left backdrop-blur-[10px] transition-all duration-200"
                  >
                    <div className="relative size-[6.3rem]">
                      <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                        <i>
                          <Image
                            src={item.icon}
                            alt="Icon"
                            width={30}
                            height={30}
                            unoptimized
                          />
                        </i>
                      </div>
                      <div
                        style={{
                          background: item.color,
                        }}
                        className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem]"
                      />
                    </div>

                    <div>
                      <h3 className="mt-[3rem] mb-[1rem] text-[2.6rem] font-semibold tracking-[-0.02em] text-[#312749]">
                        {item.title}
                      </h3>

                      <p className="text-[1.6rem] leading-[2.4rem] font-normal text-[#625C70]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default Values;
