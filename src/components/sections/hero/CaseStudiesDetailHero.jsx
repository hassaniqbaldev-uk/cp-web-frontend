"use client";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { urlFor } from "@/sanity/image";
import { motion } from "framer-motion";

const CaseStudiesDetailHero = ({ caseStudy }) => {
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
      <section className="relative px-[2rem] pt-[21.4rem] pb-[14.4rem] xl:px-[0rem]">
        {/*Background Image*/}
        {caseStudy.detailHero?.heroImage && (
          <Image
            src={urlFor(caseStudy.detailHero.heroImage)
              .width(1440)
              .height(900)
              .fit("crop")
              .url()}
            alt={caseStudy.title}
            fill
            priority
            unoptimized
            className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          />
        )}

        {/* Background Element */}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          {caseStudy.detailHero?.heroElement && (
            <Image
              src={urlFor(caseStudy.detailHero.heroElement)
                .width(287)
                .height(173)
                .url()}
              alt={caseStudy.title}
              width={287}
              height={173}
              unoptimized
              className="absolute right-[-6rem] bottom-[-4rem] w-[15rem] md:right-[-9rem] md:h-[17.3rem] md:w-[28.7rem]"
            />
          )}
        </div>

        <div className="relative z-[10] container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left"
          >
            <motion.div variants={itemVariants}>
              <SectionLabel
                text="case studies"
                textColor={caseStudy.primaryColor}
              />
            </motion.div>

            <h1 className="mt-[1rem] mb-[3rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8rem]">
              <span className="block overflow-hidden">
                <motion.span
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                  className="block"
                >
                  {caseStudy.title}
                </motion.span>
              </span>
            </h1>

            <motion.div variants={itemVariants}>
              {caseStudy.detailHero?.ctaButton && (
                <PrimaryButton
                  target="_blank"
                  href={caseStudy.detailHero.ctaButton.url}
                  bGcolor={caseStudy.primaryColor}
                  text={caseStudy.detailHero.ctaButton.label}
                  textColor="#05020B"
                />
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesDetailHero;
