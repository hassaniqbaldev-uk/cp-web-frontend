import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.png";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import CheckMarkIcon2 from "@/components/icons/CheckMarkIcon2";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden pt-[19rem] pb-[13rem]">
        {/*Background Image*/}
        <Image
          src={HeroBg}
          alt="Background Image"
          fill
          priority
          className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
        />

        {/*Background Element*/}
        <div className="absolute top-[2rem] left-[2rem] z-[2] h-[17rem] w-[8.4rem] rotate-[33deg] opacity-60">
          <Image
            src={HomeHeroLogoShape1}
            alt="Logo Shape"
            width={84}
            height={170}
          />
        </div>

        <div className="pointer-events-none absolute bottom-[10rem] left-[10rem] z-[2] h-[17rem] w-[8.5rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={85}
            height={170}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={133}
            height={124}
            className="absolute top-[15rem] right-[5rem] rotate-[35deg]"
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center text-center">
            <SectionLabel text="Tailored Services" textColor="#FF37B3" />

            <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[89rem] text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-[#312749]">
              Services built around your goals, not templates.
            </h1>

            <div className="max-w-[76rem]">
              <SectionDescription
                text="Whether you need a new website, a brand refresh, or ongoing growth support—our services are designed to deliver measurable results."
                textColor="#625C70"
              />
            </div>

            <div className="mt-[3rem] mb-[4rem] flex h-[6.4rem] w-full max-w-[57rem] items-center justify-center gap-[1.2rem] rounded-[2rem] border border-[#3078FF] bg-white p-[2rem]">
              <i className="inline-flex size-[2.6rem] items-center justify-center rounded-full bg-[#3078ff]/20">
                <CheckMarkIcon2 fillColor="#3078FF" width="16" height="16" />
              </i>

              <span className="text-[1.8rem] font-semibold tracking-normal text-[#625C70]">
                Flexible monthly payment plans available for all projects.
              </span>
            </div>

            <div className="flex items-center justify-center gap-[1.8rem]">
              <PrimaryButton
                text="See Case Studies"
                textColor="#FFFFFF"
                bGcolor="#312749"
                href=""
              />

              <Link
                href=""
                className="inline-flex h-[5rem] items-center justify-center rounded-[60px] border-2 border-[#312749]/40 px-[30px] py-[8px] text-center text-[1.8rem] font-semibold tracking-normal text-[#312749]"
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

export default ServicesHero;
