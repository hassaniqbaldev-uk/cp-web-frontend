"use client";
import WaveHandIcon from "@/assets/icons/ui/wave-hand-icon.svg";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CtaBgStroke from "@/components/decorative-elements/CtaBgStroke";
import CtaBg from "@/assets/images/backgrounds/sticky-cta-bg.png";
import { useEffect, useState } from "react";

const StickyCta = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHidden(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 z-[100] w-full overflow-hidden px-[1rem] py-[1rem] transition-transform duration-300 ease-out ${isHidden ? "translate-y-full" : "translate-y-0"}`}
    >
      {/*Background Image*/}
      <Image
        src={CtaBg}
        alt="Background Image"
        fill
        priority
        className="pointer-events-none absolute inset-0 z-[1] object-cover select-none"
      />

      {/*Background Element*/}
      <div className="pointer-events-none absolute top-1/2 right-[-2rem] z-[2] -translate-y-1/2 select-none">
        <CtaBgStroke />
      </div>

      <div className="relative z-[10] container">
        <div className="flex flex-col items-center justify-center gap-[1rem] md:flex-row md:gap-[4rem] xl:justify-start">
          <div className="flex items-center gap-[2rem]">
            <i className="hidden min-w-max xl:block">
              <Image src={WaveHandIcon} alt="Icon" width={58} height={58} />
            </i>

            <h4 className="text-[1.4rem] leading-[2rem] font-bold tracking-[-0.02em] text-white md:text-[2.8rem] md:leading-[4rem] xl:text-[3.4rem] xl:leading-[4.8rem]">
              Let’s design, build, and grow your next big project.
            </h4>
          </div>

          <div className="min-w-max">
            <PrimaryButton
              text="Book a Call"
              textColor="#FFFFFF"
              bGcolor="#FF37B3"
              href=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCta;
