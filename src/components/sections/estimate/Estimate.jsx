import SectionLabel from "@/components/ui/SectionLabel";
import EstimateCardImg from "@/assets/images/cards/estimate-card-img.png";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AboutHeroLogoShape1 from "@/assets/svgs/about-hero-logo-shape-1.svg";
import AboutHeroLogoShape2 from "@/assets/svgs/about-hero-logo-shape-2.svg";

const Estimate = () => {
  return (
    <>
      <section className="relative overflow-hidden px-[2rem] pt-[5rem] pb-[5rem] xl:px-[0rem] xl:pt-[24.8rem] xl:pb-[10rem]">
        {/*Background Element*/}
        <div className="pointer-events-none absolute top-[20rem] left-[5rem] z-[2] h-[18.5rem] w-[9.2rem] rotate-[35deg] select-none">
          <Image
            src={AboutHeroLogoShape1}
            alt="Logo Shape"
            width={92}
            height={185}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden select-none">
          <Image
            src={AboutHeroLogoShape2}
            alt="Logo Shape"
            width={137}
            height={128}
            className="absolute right-[0] bottom-[5rem] rotate-[35deg] opacity-70"
          />
        </div>

        <div className="relative z-[10] container">
          <div className="flex flex-col items-center gap-[5px] text-center">
            <SectionLabel
              text="Est. 2012 • Manchester, UK"
              textColor="#3078FF"
            />

            <SectionTitle
              text="Born in Manchester, working globally."
              textColor="#312749"
            />
          </div>

          <div className="mt-[5rem] flex flex-col items-center justify-center gap-[4rem] text-center md:gap-[6.8rem] xl:flex-row xl:text-left">
            <div className="w-full overflow-hidden rounded-[2rem] md:w-[44.8rem]">
              <Image
                src={EstimateCardImg}
                width={448}
                height={440}
                alt="Card Image"
                className="object-cover object-center"
              />
            </div>

            <div className="w-full md:w-[68.4rem]">
              <p className="mb-[3rem] text-[1.8rem] leading-[3rem] font-normal tracking-normal text-[#625C70] md:mb-[5rem] md:text-[2.2rem] md:leading-[3.6rem]">
                <span className="font-bold text-[#FF37B3]">In 2012,</span> two
                designers met in a coffee shop in the Northern Quarter. They
                shared a frustration: websites were getting prettier, but they
                weren&apos;t getting smarter. <br /> <br /> They decided to
                build an agency that married world-class aesthetics with
                hard-nosed business strategy. Twelve years later, CreativePixels
                has helped over 200 businesses across the UK, US, and Europe
                transform their digital presence.
              </p>

              <PrimaryButton
                href=""
                text="Book a Call"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estimate;
