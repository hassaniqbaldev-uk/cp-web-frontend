import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/home-hero-bg.png";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";

const CareersHero = () => {
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
            <SectionLabel text="Careers" textColor="#FF37B3" />

            <h1 className="mt-[1rem] mb-[2rem] text-[7rem] leading-[8.5rem] font-bold tracking-[-0.03em] text-white">
              Build the{" "}
              <span className="bg-gradient-yellow-orange bg-clip-text text-transparent">
                Extraordinary.
              </span>
            </h1>

            <div className="mb-[4rem] max-w-[68rem]">
              <SectionDescription
                text="We're a team of strategists, designers, and engineers who refuse to settle for 'good enough.' Join us in Manchester or remotely."
                textColor="#ffffff"
              />
            </div>

            <PrimaryButton
              text="View Open Roles"
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

export default CareersHero;
