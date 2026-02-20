"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import EstimateCardImg from "@/assets/images/cards/estimate-card-img.png";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import AboutHeroLogoShape1 from "@/components/decorative-elements/AboutHeroLogoShape1";
import ContactHeroLogoShape1 from "@/components/decorative-elements/ContactHeroLogoShape1";

const Estimate = () => {
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
      <section className="relative overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <AboutHeroLogoShape1 className="absolute top-[20rem] left-[5rem] h-[18.5rem] w-[9.2rem] rotate-[35deg] opacity-50" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ContactHeroLogoShape1 className="absolute right-[0] bottom-[5rem] rotate-[35deg] opacity-50" />
        </div>

        <div className="relative z-[10] container">
          <div className="my-[5rem] flex flex-col items-center justify-center gap-[4rem] text-center md:gap-[6.8rem] xl:flex-row xl:gap-[9rem] xl:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full md:w-[53.8rem]"
            >
              <motion.div variants={itemVariants}>
                <SectionLabel
                  text="Est. 2012 • Manchester, UK"
                  textColor="#3078FF"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-[1.5rem] mb-[3.5rem]"
              >
                <SectionTitle
                  text="Born in Manchester, working globally."
                  textColor="#312749"
                />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-[1.8rem] leading-[3rem] font-normal tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.6rem]"
              >
                <span className="font-bold text-[#FF37B3]">CreativePixels</span>{" "}
                is a UK digital agency focused on web design, WordPress
                development, and performance-driven websites. We help businesses
                turn their online presence into a practical growth tool by
                combining clear strategy, thoughtful design, and solid technical
                delivery. From brochure sites to complex builds, our work is
                built to be fast, search-friendly, and easy for teams to manage.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full overflow-hidden rounded-[2rem] md:w-[53.5rem]"
            >
              <Image
                src={EstimateCardImg}
                width={535}
                height={512}
                alt="Card Image"
                className="size-full object-cover object-center"
                unoptimized
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="w-full rounded-[3rem] border border-[#EE7621] bg-[#FDF4E7] p-[2rem] md:p-[4rem]"
          >
            <p className="text-center text-[1.8rem] leading-[3rem] font-bold tracking-normal text-[#625C70] md:text-[2.2rem] md:leading-[3.6rem] xl:text-left">
              <span className="text-[#3078FF]">Over the years,</span> we’ve
              partnered with startups, growing companies, and established
              organisations that need more than just a good-looking website.
              They want reliability, long-term support, and measurable
              improvement. Alongside design and development, we strengthen SEO
              foundations, improve user experience, and provide ongoing website
              support to help businesses generate leads, increase conversions,
              and grow with confidence.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Estimate;
