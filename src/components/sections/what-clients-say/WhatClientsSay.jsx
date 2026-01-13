import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.png";
import StarIcon from "@/components/icons/StarIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import EyeAvatarIcon from "@/assets/icons/ui/eye-avatar-icon.svg";
import CrossEyeIcon from "@/assets/icons/ui/cross-eye-icon.png";

const WhatClientsSay = () => {
  return (
    <>
      <section className="relative py-[10rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        <div className="relative z-[10] container">
          <div className="flex items-center justify-center gap-[6.8rem]">
            <div className="flex w-[58rem] flex-col items-start text-left">
              <ul className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index}>
                    <StarIcon color="#FF37B3" height="20" width="20" />
                  </li>
                ))}
              </ul>

              <div className="mt-[2rem] mb-[1.8rem]">
                <SectionTitle
                  text="Imaginative vision. Outstanding Web Design."
                  textColor="#FFFFFF"
                />
              </div>

              <p className="mb-[6.4rem] max-w-[49.8rem] text-[1.8rem] leading-[2.6rem] font-normal tracking-normal text-white">
                &quot;From beginning to end, it was an incredible experience.
                Working with the entire team was enjoyable due to their
                creativity and expertise. <br /> <br /> They completely
                understood our goals as a studio with a very ambitious and
                distinctive website, from concept to design. We are quite happy
                with the outcome.”
              </p>

              <div className="flex items-center gap-[1.2rem]">
                <div className="flex inline-flex size-[5.6rem] items-center justify-center overflow-hidden rounded-full bg-white">
                  <Image
                    src={EyeAvatarIcon}
                    alt="Avatar Image"
                    width={40}
                    height={30}
                  />
                </div>

                <div className="flex flex-col items-start text-left">
                  <h6 className="text-[1.8rem] leading-[2.6rem] font-normal tracking-normal text-white">
                    Agency Owner, Managing Director
                  </h6>

                  <span className="text-[1.6rem] leading-[2.4rem] font-medium tracking-normal text-[#F6F6F6]">
                    Award Winning Agency based in Cheshire
                  </span>
                </div>
              </div>
            </div>

            <div className="h-[51.6rem] w-[57.5rem] rounded-[3rem] border border-[#939394]/20 p-[1.8rem]">
              <div className="flex size-full items-center justify-center rounded-[3rem] bg-[#dbd5dd]/20 backdrop-blur-[10px]">
                <Image src={CrossEyeIcon} width={282} height={245} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatClientsSay;
