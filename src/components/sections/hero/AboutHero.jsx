import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.png";
import AboutHeroCardImg from "@/assets/images/cards/about-hero-card-img.png";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import SparkStarIcon from "@/assets/icons/ui/spark-star-icon.svg";
import RocketIcon2 from "@/assets/icons/ui/rocket-icon-2.svg";
import RetentionIcon from "@/assets/icons/ui/retention-icon.svg";
import NetworkingIcon from "@/assets/icons/ui/networking-icon.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";

const AboutHero = () => {
  return (
    <>
      <section className="relative w-full px-[2rem] pt-[10rem] pb-[5rem] md:pt-[16.7rem] xl:px-[0rem] xl:pb-[22.8rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[5.8px] left-[12px] z-[2] h-[18.4rem] w-[9.1rem] rotate-[25deg] select-none">
          <Image
            src={HomeHeroLogoShape1}
            alt="Logo Shape"
            width={91}
            height={184}
          />
        </div>

        <div className="pointer-events-none absolute top-[15rem] left-[90rem] z-[2] h-[22.5rem] w-[11.2rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={112}
            height={225}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={179}
            height={166}
            className="absolute right-[0] bottom-[25rem] rotate-[35deg]"
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center gap-[15rem] xl:flex-row">
            <div className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <SectionLabel text="Who We Are" textColor="#FF37B3" />

              <h1 className="mt-[1rem] mb-[2rem] max-w-[43.6rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                A digital agency that{" "}
                <span className="bg-gradient-yellow-pink bg-clip-text text-transparent">
                  gives a damn.
                </span>
              </h1>

              <div className="max-w-[54rem]">
                <SectionDescription
                  text="We founded CreativePixels because we were tired of agencies over-promising and under-delivering. We're here to change that with honest work and real results."
                  textColor="#ffffff"
                />
              </div>
            </div>

            <div className="relative hidden h-[48.7rem] w-[46.4rem] items-center justify-center xl:flex">
              <div className="absolute top-[6.6rem] left-[-3.2rem] h-[24.6rem] w-[23.2rem] rounded-[20rem] bg-[#FFE400] blur-[20rem]" />

              <Image
                src={AboutHeroCardImg}
                width={464}
                height={487}
                alt="Card Image"
              />
            </div>
          </div>

          <div className="mt-[5rem] flex flex-wrap justify-center gap-[2.4rem] xl:mt-[9rem] xl:mb-[-36rem]">
            <div className="about-hero-card flex flex-col items-center justify-center text-center">
              <i>
                <Image src={SparkStarIcon} width={55} height={55} alt="Icon" />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                12+
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Years Experience
              </span>
            </div>

            <div className="about-hero-card flex flex-col items-center justify-center text-center">
              <i>
                <Image src={RocketIcon2} width={55} height={55} alt="Icon" />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                200+
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Projects Launched
              </span>
            </div>

            <div className="about-hero-card flex flex-col items-center justify-center text-center">
              <i>
                <Image src={RetentionIcon} width={55} height={55} alt="Icon" />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                94%
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Client Retention
              </span>
            </div>

            <div className="about-hero-card flex flex-col items-center justify-center text-center">
              <i>
                <Image src={NetworkingIcon} width={55} height={55} alt="Icon" />
              </i>

              <h4 className="mt-[2.5rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-white">
                15+
              </h4>

              <span className="text-[1.8rem] font-bold tracking-normal text-white">
                Team Members
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
