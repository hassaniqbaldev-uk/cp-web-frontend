import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

const TheSolution = ({ caseStudy }) => {
  return (
    <>
      <section
        style={{
          background: caseStudy.secondaryColor,
        }}
        className="px-[2rem] pt-[5rem] xl:px-[0rem] xl:pt-[8rem]"
      >
        <div className="container">
          <div className="flex flex-col-reverse items-center justify-center gap-[5rem] text-center xl:flex-row xl:items-start xl:gap-[10rem] xl:text-left">
            <div className="flex w-full items-center justify-center md:w-[51.1rem]">
              <Image
                src={urlFor(caseStudy.theSolution.cardImage)
                  .width(511)
                  .height(495)
                  .url()}
                alt={caseStudy.theSolution.title}
                width={511}
                height={495}
                unoptimized
              />
            </div>

            <div className="w-full md:w-[51.6rem]">
              <div>
                <SectionTitle
                  text={caseStudy.theSolution.title}
                  textColor="#FFFFFF"
                />
              </div>

              <div className="mt-[1.9rem] mb-[5.5rem]">
                <SectionDescription
                  text={caseStudy.theSolution.description}
                  textColor="#FFFFFF"
                />
              </div>

              <div>
                <PrimaryButton
                  href=""
                  text="Book a Call"
                  textColor="#05020B"
                  bGcolor={caseStudy.primaryColor}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheSolution;
