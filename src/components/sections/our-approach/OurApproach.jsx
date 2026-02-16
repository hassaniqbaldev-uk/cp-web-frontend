"use client";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import SectionDescription from "@/components/ui/SectionDescription";
import Image from "next/image";
import { urlFor } from "@/sanity/caseStudies.image";
import { motion } from "framer-motion";

const OurApproach = ({ caseStudy }) => {
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
      <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <div
          style={{
            background: caseStudy.primaryColor,
          }}
          className="relative container w-full rounded-[3rem] xl:h-[65.9rem]"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="inset-0 flex flex-col items-center justify-center px-[2rem] py-[3rem] text-center xl:absolute xl:items-start xl:px-[5.7rem] xl:py-[0rem] xl:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[2.3rem] leading-[3rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]"
            >
              {caseStudy.ourApproach.title}
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-[1.9rem] mb-[2.8rem] max-w-[51.6rem]"
            >
              <SectionDescription
                text={caseStudy.ourApproach.description}
                textColor="#022B32"
              />
            </motion.div>

            <ul className="flex flex-col gap-[3.8rem] text-left">
              {caseStudy.ourApproach.points.map((item, idx) => (
                <motion.li
                  variants={itemVariants}
                  key={idx}
                  className="inline-flex gap-[1rem] md:gap-[2rem]"
                >
                  <i>
                    <CheckMarkIcon
                      width="26"
                      height="26"
                      color="#263238"
                      className="size-[1.5rem] md:size-[2.6rem]"
                    />
                  </i>
                  <span className="max-w-[47rem] text-[1.4rem] leading-[2rem] tracking-normal text-[#263238] md:text-[1.8rem] md:leading-[2.8rem]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="absolute right-0 bottom-0 hidden h-[67.7rem] w-[64.5rem] xl:block"
          >
            <Image
              src={urlFor(caseStudy.ourApproach.cardImage)
                .width(645)
                .height(677)
                .url()}
              alt={caseStudy.ourApproach.title}
              width={645}
              height={677}
              unoptimized
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;
