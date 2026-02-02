"use client";
import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/contact-hero-bg.webp";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";

const BlogDetailHero = () => {
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
      <section className="relative w-full px-[2rem] pt-[10rem] pb-[5rem] md:pt-[20rem] xl:px-[0rem] xl:pb-[20rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="relative z-[10] container">
          <div className="flex flex-wrap items-center gap-[1rem] text-[1.4rem] leading-[1.8rem] font-medium tracking-[-0.02em] text-white uppercase md:gap-[2.5rem] md:text-[1.8rem] md:leading-[2rem] md:font-bold">
            <Link href="" className="text-[#FF37B3]">
              HOME
            </Link>

            <i className="inline-flex size-[1.2rem] -rotate-90 items-center justify-center stroke-white text-center">
              <ChevronDownIcon height="6" width="10" />
            </i>

            <Link href="">BLOGS</Link>

            <i className="inline-flex size-[1.2rem] -rotate-90 items-center justify-center stroke-white text-center">
              <ChevronDownIcon height="6" width="10" />
            </i>

            <span>
              Why &apos;Template&apos; is a Dirty Word in Enterprise Web Design
            </span>
          </div>

          <h1 className="mt-[3.4rem] mb-[4rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[6rem] md:leading-[7rem] xl:text-[7rem] xl:leading-[8rem]">
            Why &apos;Template&apos; is a Dirty Word in Enterprise Web Design
          </h1>

          <div
            style={{
              boxShadow: "0px 12px 40px 0px #00000014",
            }}
            className="flex h-[25rem] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-amber-50 text-center md:h-[40rem] md:rounded-[3rem] lg:h-[51.5rem] xl:mb-[-44rem]"
          >
            Image
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailHero;
