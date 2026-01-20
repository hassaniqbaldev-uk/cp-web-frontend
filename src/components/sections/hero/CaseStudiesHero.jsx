import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.png";
import HomeHeroLogoShape2 from "@/assets/svgs/home-hero-logo-shape-2.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import ShapeIcon from "@/assets/icons/ui/shape-icon.svg";
import SendIcon3 from "@/assets/icons/ui/send-icon-3.svg";
import FastTimelineIcon from "@/assets/icons/ui/fast-timeline-icon.svg";

const CaseStudiesHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[17.2rem] pb-[5rem] xl:px-[0rem] xl:pb-[9.4rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="absolute top-[25rem] right-[2rem] z-[2] h-[13.4rem] w-[26.8rem] rotate-[33deg] opacity-60">
          <Image
            src={HomeHeroLogoShape2}
            alt="Logo Shape"
            width={134}
            height={268}
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left">
            <SectionLabel text="Our Work" textColor="#FF37B3" />

            <h1 className="mt-[1rem] mb-[1.5rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8.5rem]">
              Real work.{" "}
              <span className="bg-gradient-pink-orange bg-clip-text text-transparent">
                Real results.
              </span>
            </h1>

            <div className="max-w-[70.6rem]">
              <SectionDescription
                text="Explore how we've helped ambitious brands across industries scale their digital presence through strategy, design, and technology."
                textColor="#625C70"
              />
            </div>
          </div>

          <div className="mt-[5rem] grid grid-cols-1 gap-[2rem] md:grid-cols-3 xl:mt-[6rem] xl:gap-[3rem]">
            <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#EE7621] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
              <div className="relative size-[6.3rem]">
                <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                  <i>
                    <Image src={ShapeIcon} alt="Icon" width={28} height={28} />
                  </i>
                </div>

                <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#EE7621]" />
              </div>

              <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#EE7621] xl:text-[6.8rem] xl:leading-[6rem]">
                  100%
                </h4>

                <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                  Custom Designed Sites
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#3078FF] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
              <div className="relative size-[6.3rem]">
                <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                  <i>
                    <Image src={SendIcon3} alt="Icon" width={30} height={30} />
                  </i>
                </div>
                <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#3078FF]" />
              </div>

              <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#3078FF] xl:text-[6.8rem] xl:leading-[6rem]">
                  200+
                </h4>

                <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                  Projects Delivered
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-[4rem] overflow-hidden rounded-[3rem] border border-[#FF37B3] bg-white p-[2rem] text-left xl:gap-[5.3rem] xl:p-[3.5rem]">
              <div className="relative size-[6.3rem]">
                <div className="absolute top-0 left-0 z-[1] inline-flex size-[5.8rem] items-center justify-center rounded-[1.3rem] border border-white/20 bg-white/35 backdrop-blur-[10px]">
                  <i>
                    <Image
                      src={FastTimelineIcon}
                      alt="Icon"
                      width={44}
                      height={44}
                    />
                  </i>
                </div>
                <div className="absolute right-0 bottom-0 z-[0] size-[5.8rem] rounded-[1.3rem] bg-[#FF37B3]" />
              </div>

              <div className="flex flex-col gap-[1rem] xl:gap-[1.4rem]">
                <h4 className="text-[5rem] leading-[5rem] font-bold tracking-normal text-[#FF37B3] xl:text-[6.8rem] xl:leading-[6rem]">
                  65%
                </h4>

                <span className="text-[1.4rem] font-bold tracking-normal text-[#625C70] xl:text-[1.6rem]">
                  Faster Load Times
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHero;
