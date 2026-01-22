import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.webp";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import CheckMarkIcon2 from "@/components/icons/CheckMarkIcon2";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Link from "next/link";

const SolutionsHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[19rem] pb-[13rem] xl:px-[0rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
          unoptimized
        />

        {/*Background Element*/}
        <div className="absolute top-[2rem] left-[2rem] z-[2] h-[17rem] w-[8.4rem] rotate-[33deg] opacity-60">
          <Image
            src={HomeHeroLogoShape1}
            alt="Logo Shape"
            width={84}
            height={170}
            unoptimized
          />
        </div>

        <div className="pointer-events-none absolute bottom-[10rem] left-[10rem] z-[2] h-[17rem] w-[8.5rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={85}
            height={170}
            unoptimized
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={133}
            height={124}
            className="absolute top-[15rem] right-[5rem] rotate-[35deg]"
            unoptimized
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center">
            <SectionLabel text="Tailored Expertise" textColor="#FF37B3" />

            <h1 className="mt-[1.5rem] mb-[2.5rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
              Solutions <br /> tailored to your Reality.
            </h1>

            <div className="mb-[4rem] max-w-[74rem]">
              <SectionDescription
                text="One size fits no one. We adapt our high-performance strategies to your specific industry challenges and growth goals."
                textColor="#625C70"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[1.8rem]">
              <PrimaryButton
                text="See Case Studies"
                textColor="#FFFFFF"
                bGcolor="#312749"
                href=""
              />

              <Link
                href=""
                className="inline-flex h-[4rem] items-center justify-center rounded-[60px] border-2 border-[#312749]/40 px-[30px] py-[8px] text-center text-[1.4rem] font-semibold tracking-normal text-[#312749] md:h-[5rem] md:text-[1.8rem]"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsHero;
