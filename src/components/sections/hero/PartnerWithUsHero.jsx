import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.png";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";

const PartnerWithUsHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden pt-[18.3rem] pb-[11.2rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[5.8px] left-[30px] z-[2] h-[21.6rem] w-[10.7rem] rotate-[25deg] select-none">
          <Image
            src={HomeHeroLogoShape1}
            alt="Logo Shape"
            width={107}
            height={216}
          />
        </div>

        <div className="pointer-events-none absolute bottom-[6rem] left-[10rem] z-[2] h-[19.5rem] w-[9.2rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={92}
            height={195}
          />
        </div>

        <div className="pointer-events-none absolute right-[5rem] bottom-[5rem] z-[2] h-[17.3rem] w-[18.6rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={186}
            height={173}
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center justify-center text-center">
            <SectionLabel
              text="White Label Web Design & Branding"
              textColor="#FF37B3"
            />

            <h1 className="mt-[1rem] mb-[2rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-white md:text-[7rem] md:leading-[8.5rem]">
              An agency, for{" "}
              <span className="bg-gradient-yellow-pink bg-clip-text text-transparent">
                your agency
              </span>
            </h1>

            <div className="mb-[4rem] max-w-[76rem]">
              <SectionDescription
                text="Since 2014, CreativePixels has supported agencies across the UK, US & Australia with WordPress websites, branding, and ongoing support—all delivered under your brand."
                textColor="#ffffff"
              />
            </div>

            <PrimaryButton
              text="How It Works"
              textColor="#312749"
              bGcolor="#FFFFFF"
              href=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerWithUsHero;
