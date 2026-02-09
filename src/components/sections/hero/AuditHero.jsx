"use client";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionLabel from "@/components/ui/SectionLabel";
import ClockIcon from "@/assets/icons/ui/clock-icon.svg";
import CheckmarkIcon2 from "@/assets/icons/ui/checkmark-icon-2.svg";
import ShieldCheckIcon from "@/assets/icons/ui/shield-check-icon.svg";
import RightArrowIcon from "@/components/icons/RightArrowIcon";
import AuditContactBox from "@/assets/svgs/audit-contact-box.svg";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import HomeHeroLogoShape1 from "@/components/decorative-elements/HomeHeroLogoShape1";
import ServicesLogoShape from "@/components/decorative-elements/ServicesLogoShape";

const AuditHero = () => {
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
      <section className="relative w-full overflow-hidden px-[2rem] pt-[10rem] pb-[5rem] md:pt-[19.2rem] xl:px-[0rem] xl:pb-[10rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <HomeHeroLogoShape1 className="absolute top-[5.8px] left-[12px] h-[8rem] w-[4rem] rotate-[25deg] opacity-70 md:h-[18.4rem] md:w-[9.1rem]" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] select-none">
          <ServicesLogoShape className="absolute right-[-2rem] bottom-[7.8rem] h-[8rem] w-[4rem] rotate-[-34deg] opacity-70 select-none md:h-[17.7rem] md:w-[12.9rem]" />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[4rem] xl:flex-row">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex w-full flex-col items-center text-center md:w-[63rem] xl:items-start xl:text-left"
            >
              <motion.div variants={itemVariants}>
                <SectionLabel
                  text="Only 3 Free Audit Slots Left This Week"
                  textColor="#FF37B3"
                />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="mt-[1.3rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]"
              >
                Unlock your website&apos;s{" "}
                <span className="bg-gradient-orange-yellow bg-clip-text text-transparent">
                  hidden revenue.
                </span>
              </motion.h1>

              <motion.div variants={itemVariants} className="max-w-[58.5rem]">
                <SectionDescription
                  text="Stop guessing why you aren't growing. We'll manually analyze your site's UX, SEO, and Performance and send you a custom video report."
                  textColor="#625C70"
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="my-[3.7rem] flex w-full flex-col items-start gap-[1.2rem] rounded-[2rem] border border-[#3078FF] bg-white px-[3rem] py-[2.7rem] text-left md:gap-[2.5rem] md:py-[3.5rem]"
              >
                <div className="flex items-center gap-[.8rem] md:gap-[1.2rem]">
                  <i>
                    <Image
                      src={ClockIcon}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="size-[1.8rem] md:size-[2.4rem]"
                    />
                  </i>

                  <h4 className="text-[1.8rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[2.2rem]">
                    What you get
                  </h4>
                </div>

                <ul className="grid grid-cols-1 gap-x-[2.8rem] gap-y-[.6rem] md:grid-cols-2 md:gap-y-[1.2rem]">
                  {[
                    "Video walkthrough of issues",
                    "Detailed Conversion Roadmap",
                    "SEO Missed Opportunities",
                    "Site Speed Analysis",
                    "Competitor Benchmarking",
                    "3 Quick-Win Fixes",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-[1.2rem]">
                      <i className="inline-flex size-[2.4rem] min-w-[2.4rem] items-center justify-center rounded-full bg-[#44b276]/20">
                        <Image
                          src={CheckmarkIcon2}
                          alt="Icon"
                          width={14}
                          height={14}
                        />
                      </i>

                      <span className="text-[1.6rem] font-semibold tracking-normal text-[#625C70]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-[1.6rem] text-left"
              >
                <i>
                  <Image
                    src={ShieldCheckIcon}
                    alt="Icon"
                    width={18}
                    height={21}
                  />
                </i>

                <span className="text-[1.6rem] leading-[2rem] font-normal tracking-normal text-[#625C70]">
                  Delivered to your inbox within 48 hours.
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div
                style={{
                  boxShadow: "13px 13px 40px 0px #00000014",
                }}
                className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border-t-8 border-[#FF37B3] bg-white px-[2.7rem] py-[4rem] md:w-[52.5rem]"
              >
                {/* Header */}
                <div className="flex w-full flex-col gap-[1rem] border-b border-[#D6D6D6] pb-[2.5rem]">
                  <h4 className="text-[2.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]">
                    Claim Your Free Audit
                  </h4>

                  <p className="text-[1.6rem] font-normal tracking-normal text-[#625C70]">
                    Join 150+ companies we&apos;ve helped.
                  </p>
                </div>
                {/* Main */}
                <div className="mt-[2.5rem] mb-[3rem] flex w-full flex-col items-start gap-[2.5rem]">
                  <fieldset className="w-full">
                    <label
                      htmlFor="website-url"
                      className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                    >
                      Website URL <span className="text-[#F14A58]">*</span>{" "}
                    </label>

                    <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                      <input
                        type="text"
                        className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                        placeholder="https://company.com"
                      />
                    </div>
                  </fieldset>

                  <fieldset className="w-full">
                    <label
                      htmlFor="work-email"
                      className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                    >
                      Work Email <span className="text-[#F14A58]">*</span>{" "}
                    </label>

                    <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                      <input
                        type="text"
                        className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </fieldset>

                  <div className="grid w-full grid-cols-1 gap-[1.5rem] md:grid-cols-2">
                    <fieldset className="w-full">
                      <label
                        htmlFor="name"
                        className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                      >
                        Name
                      </label>

                      <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                        <input
                          type="text"
                          className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                          placeholder="Jane Doe"
                        />
                      </div>
                    </fieldset>

                    <fieldset className="w-full">
                      <label
                        htmlFor="revenue-range"
                        className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                      >
                        I need help with
                      </label>

                      <Select>
                        <SelectTrigger className="!h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB] px-[1.5rem] text-[1.6rem] font-normal tracking-normal text-[#625C70]">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent align="center">
                          <SelectItem value="Design & Branding">
                            Design & Branding
                          </SelectItem>
                          <SelectItem value="Website Development">
                            Website Development
                          </SelectItem>
                          <SelectItem value="Maintenance & Growth">
                            Maintenance & Growth
                          </SelectItem>
                          <SelectItem value="Something else">
                            Something else
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </fieldset>
                  </div>

                  <fieldset className="w-full">
                    <label
                      htmlFor="primar-goal"
                      className="text-[1.6rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749]"
                    >
                      Primary Goal?
                    </label>

                    <div className="h-[5.2rem] w-full rounded-[1.6rem] border border-[#E5E7EB] bg-[#F9FAFB]">
                      <input
                        type="text"
                        className="h-full w-full bg-[transparent] p-[1.5rem] outline-0"
                        placeholder="What do you want to fix?"
                      />
                    </div>
                  </fieldset>
                </div>
                {/* Footer */}
                <div className="flex w-full flex-col items-center justify-center gap-[2.3rem]">
                  <button className="inline-flex w-full cursor-pointer items-center justify-center">
                    <span className="inline-flex h-[4rem] w-full items-center justify-center rounded-[7rem] bg-[#ED910C] px-[3rem] py-[1rem] text-center text-[1.4rem] font-semibold tracking-normal text-white md:h-[5rem] md:text-[1.8rem]">
                      Get My Free Audit
                    </span>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-[-3px]"
                    >
                      <path
                        d="M1.5752 0C2.62647 1.81667 4.58995 3.04004 6.83984 3.04004C9.08953 3.03987 11.0523 1.81654 12.1035 0H13.6787V13.6787H12.1035C11.0523 11.8621 9.08956 10.6388 6.83984 10.6387C4.58992 10.6387 2.62646 11.862 1.5752 13.6787H0V0H1.5752Z"
                        fill="#ED910C"
                      />
                    </svg>

                    <i className="inline-flex size-[4rem] min-w-[4rem] items-center justify-center rounded-full bg-[#ED910C] md:size-[5rem] md:min-w-[5rem]">
                      <RightArrowIcon
                        color="#ffffff"
                        width="18"
                        height="18"
                        className="size-[1.4rem] md:size-[1.8rem]"
                      />
                    </i>
                  </button>

                  {/* <div>
                    <Image
                      src={AuditContactBox}
                      width={228}
                      height={24}
                      alt="Audit Box"
                    />
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuditHero;
