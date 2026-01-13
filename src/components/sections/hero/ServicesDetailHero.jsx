import Image from "next/image";
import HeroBg from "@/assets/images/backgrounds/audit-hero-bg.png";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";
import HomeHeroLogoShape1 from "@/assets/svgs/home-hero-logo-shape-1.svg";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionDescription from "@/components/ui/SectionDescription";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Link from "next/link";
import HeroCardImg from "@/assets/images/cards/services-detail-hero-card-img.png";

const ServicesDetailHero = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden px-[2rem] pt-[20rem] pb-[10rem] xl:px-[0rem]">
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

        <div className="pointer-events-none absolute bottom-[10rem] left-[20rem] z-[2] h-[10rem] w-[5.3rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={53}
            height={100}
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
          <div className="flex w-full items-center justify-between gap-[2rem]">
            <div className="w-[53rem]">
              <SectionLabel text="Our Expertise" textColor="#FF37B3" />

              <h1 className="mt-[1.5rem] mb-[2.5rem] max-w-[89rem] text-[3rem] leading-[3.7rem] font-bold tracking-[-0.03em] text-[#312749] md:text-[7rem] md:leading-[8rem]">
                Strategic Brand Identity Design
              </h1>

              <div className="mt-[1.5rem] mb-[4rem] max-w-[76rem]">
                <SectionDescription
                  text="Your brand deserves more than just a logo. We create visual identities, bilingual branding, and digital assets that help you stand out and connect with your audience."
                  textColor="#625C70"
                />
              </div>

              <div className="flex w-full flex-wrap items-center gap-[1.8rem]">
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
                  Book a Call
                </Link>
              </div>
            </div>

            <div className="w-[63rem]">
              <div className="flex h-[45rem] w-full items-center justify-center rounded-[2rem] bg-white">
                <Image
                  src={HeroCardImg}
                  width={534}
                  height={355}
                  alt="Card Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesDetailHero;
