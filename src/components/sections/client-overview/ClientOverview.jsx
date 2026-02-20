"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/caseStudies.image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClientOverview = ({ caseStudy }) => {
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
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-start justify-center gap-[4rem] md:gap-[5rem] xl:flex-row xl:gap-[10.9rem]"
          >
            <div className="flex w-full flex-col items-start gap-[2rem] text-left md:gap-[3rem] xl:w-[61rem]">
              <motion.h2
                variants={itemVariants}
                className="text-[2.3rem] leading-[3rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]"
              >
                {caseStudy.clientOverview.title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[1.6rem] leading-[2.6rem] font-medium tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[4rem]"
              >
                {caseStudy.clientOverview.description}
              </motion.p>
            </div>

            <div className="flex w-full flex-col gap-[1.8rem] xl:w-[48rem]">
              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col gap-[7px] rounded-[1.5rem] border border-[#ED910C] p-[2.3rem]"
              >
                <h5 className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#ED910C] md:text-[2.2rem] md:leading-[3.7rem]">
                  Industry
                </h5>

                <ul className="flex flex-wrap gap-[5px]">
                  {caseStudy.industries.map((item, idx) => (
                    <li
                      key={item._id}
                      className="inline-flex items-center gap-[5px] text-[1.8rem] leading-[3rem] font-medium tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.7rem]"
                    >
                      {item.title}
                      {idx < caseStudy.industries.length - 1 && " / "}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col gap-[7px] rounded-[1.5rem] border border-[#FF37B3] p-[2.3rem]"
              >
                <h5 className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#FF37B3] md:text-[2.2rem] md:leading-[3.7rem]">
                  Services
                </h5>

                <ul className="flex flex-wrap gap-[5px]">
                  {caseStudy.services.map((item, idx) => (
                    <li
                      key={item._id}
                      className="inline-flex items-center gap-[5px] text-[1.8rem] leading-[3rem] font-medium tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.7rem]"
                    >
                      {item.title}
                      {idx < caseStudy.services.length - 1 && " / "}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col gap-[7px] rounded-[1.5rem] border border-[#3078FF] p-[2.3rem]"
              >
                <h5 className="text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#3078FF] md:text-[2.2rem] md:leading-[3.7rem]">
                  Tools Used
                </h5>

                <ul className="flex items-center gap-[2rem] md:gap-[3rem]">
                  {caseStudy.tools.map((item) => (
                    <li key={item._id}>
                      <img
                        src={urlFor(item.toolImage).url()}
                        alt={item.altText}
                        className="h-[2.6rem]"
                      />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-[5rem] w-full overflow-hidden rounded-[1rem] md:rounded-[3rem]"
          >
            {caseStudy.clientOverview.cardImage?.length > 1 ? (
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full"
              >
                {caseStudy.clientOverview.cardImage.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <Image
                      src={urlFor(img).width(1200).height(600).url()}
                      alt={`${caseStudy.clientOverview.title} slide ${idx + 1}`}
                      width={1200}
                      height={600}
                      unoptimized
                      className="size-full object-cover object-center"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <Image
                src={urlFor(caseStudy.clientOverview.cardImage?.[0])
                  .width(1200)
                  .height(600)
                  .url()}
                alt={caseStudy.clientOverview.title}
                width={1200}
                height={600}
                unoptimized
                className="size-full object-cover object-center"
              />
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ClientOverview;
