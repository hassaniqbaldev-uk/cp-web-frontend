import WaveHandIcon from "@/assets/icons/ui/wave-hand-icon.svg";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import CtaBgStroke from "@/components/decorative-elements/CtaBgStroke";
import CtaBg from "@/assets/images/backgrounds/sticky-cta-bg.png";

const StickyCta = () => {
  return (
    <div className="fixed bottom-0 left-0 z-[100] w-full overflow-hidden bg-amber-800 py-[3rem]">
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
        <div className="flex items-center gap-[4rem]">
          <div className="flex items-center gap-[2rem]">
            <i className="hidden min-w-max md:block">
              <Image src={WaveHandIcon} alt="Icon" width={58} height={58} />
            </i>

            <h4 className="text-[3.4rem] leading-[4.8rem] font-bold tracking-[-0.02em] text-white">
              Let’s design, build, and grow your next big project.
            </h4>
          </div>

          <div>
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
