import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.png";
import HowWeWorkHeroCardImg from "@/assets/images/cards/how-we-work-hero-card-img.png";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";

const HowWeWorkHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[15rem] pb-[5.3rem] xl:px-[0rem] xl:pt-[10rem]">
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

        <div className="pointer-events-none absolute top-[12rem] right-[3rem] z-[2] h-[18.5rem] w-[7.2rem] rotate-[40deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={72}
            height={185}
          />
        </div>

        <div className="pointer-events-none absolute right-[90rem] bottom-[5rem] z-[2] h-[11.2rem] w-[12rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={120}
            height={112}
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex items-center justify-center gap-[15rem]">
            <div className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <SectionLabel text="Our Process" textColor="#FF37B3" />

              <h1 className="mt-[1rem] mb-[2rem] max-w-[63rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
                We bring order to{" "}
                <span className="bg-gradient-yellow-pink bg-clip-text text-transparent">
                  digital chaos.
                </span>
              </h1>

              <div className="max-w-[54rem]">
                <SectionDescription
                  text="Great products aren't born by accident. They are the result of a rigorous, proven process that minimizes risk and maximizes ROI."
                  textColor="#ffffff"
                />
              </div>
            </div>

            <div className="relative hidden h-[48.4rem] w-[48.4rem] items-center justify-center xl:flex">
              <Image
                src={HowWeWorkHeroCardImg}
                width={484}
                height={484}
                alt="Card Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWorkHero;
