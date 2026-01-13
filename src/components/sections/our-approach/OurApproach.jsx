import CheckMarkIcon from "@/components/icons/CheckMarkIcon";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

const OurApproach = ({ caseStudy }) => {
  return (
    <>
      <section className="px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <div
          style={{
            background: caseStudy.primaryColor,
          }}
          className="relative container w-full rounded-[3rem] xl:h-[65.9rem]"
        >
          <div className="inset-0 flex flex-col items-center justify-center px-[2rem] py-[3rem] text-center xl:absolute xl:items-start xl:px-[5.7rem] xl:py-[0rem] xl:text-left">
            <div>
              <SectionTitle
                text={caseStudy.ourApproach.title}
                textColor="#312749"
              />
            </div>

            <div className="mt-[1.9rem] mb-[2.8rem] max-w-[51.6rem]">
              <SectionDescription
                text={caseStudy.ourApproach.description}
                textColor="#022B32"
              />
            </div>

            <ul className="flex flex-col gap-[3.8rem] text-left">
              {caseStudy.ourApproach.points.map((item, idx) => (
                <li key={idx} className="inline-flex gap-[1rem] md:gap-[2rem]">
                  <i>
                    <CheckMarkIcon
                      width="26"
                      height="26"
                      color="#263238"
                      className="size-[1.5rem] md:size-[2.6rem]"
                    />
                  </i>
                  <span className="max-w-[47rem] text-[1.4rem] leading-[2rem] tracking-normal text-[#263238] md:text-[1.8rem] md:leading-[2.8rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute right-0 bottom-0 hidden h-[67.7rem] w-[64.5rem] xl:block">
            <Image
              src={urlFor(caseStudy.ourApproach.cardImage)
                .width(645)
                .height(677)
                .url()}
              alt={caseStudy.ourApproach.title}
              width={645}
              height={677}
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurApproach;
