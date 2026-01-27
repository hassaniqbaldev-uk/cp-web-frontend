"use client";
import Image from "next/image";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import DesignIcon from "@/assets/icons/ui/design-icon.svg";
import GrowthIcon from "@/assets/icons/ui/growth-icon.svg";
import SupportIcon from "@/assets/icons/ui/support-icon.svg";
import Stroke from "@/assets/svgs/services-dropdown-stroke.svg";
import TiltArrowIcon from "../icons/TiltArrowIcon";
import {
  DESIGN_SERVICE_NAV,
  GROWTH_SERVICE_NAV,
  SUPPORT_SERVICE_NAV,
} from "@/contants";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

const ServicesDropdown = ({ className, isOpen, setIsOpen, onToggle }) => {
  return (
    <>
      <button
        onMouseEnter={onToggle}
        onClick={onToggle}
        className={`inline-flex items-start justify-center gap-[.6rem] ${className}`}
      >
        <span>Services</span>{" "}
        <i
          className={`relative top-[1rem] origin-center transition-all duration-200 ${isOpen ? "-rotate-180" : "-rotate-0"}`}
        >
          <ChevronDownIcon height="6" width="10" />
        </i>
      </button>

      <div
        className={`absolute top-full left-1/2 z-[600] w-[127.2rem] -translate-x-1/2 transition-all duration-200 ${isOpen ? "pointer-events-auto visible pt-[4rem] opacity-100 select-auto" : "pointer-events-none invisible pt-[0rem] opacity-0 select-none"}`}
      >
        <div
          style={{
            clipPath: "polygon(50% 0, 0 100%, 100% 100%)",
            background: "#ffffff",
            height: "2.3rem",
            width: "2.6rem",
          }}
          className="absolute top-[1.8rem] left-[25rem]"
        />

        <div
          onMouseLeave={() => setIsOpen(false)}
          style={{
            boxShadow: "11px 11px 65px 0px #00000040",
          }}
          className="flex w-full gap-[3.8rem] rounded-[3rem] bg-white px-[3.5rem] py-[4rem]"
        >
          <div className="grid flex-1 grid-cols-3 gap-[3.8rem]">
            <div className="flex w-full flex-col gap-[2.4rem] border-r border-[#818181]/30 pr-[3.8rem]">
              <div className="flex flex-col items-start gap-[2rem] text-left">
                <i
                  style={{
                    boxShadow: "5px 5px 22px 0px #ED910C99",
                  }}
                  className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem] bg-[#ED910C]"
                >
                  <Image
                    src={DesignIcon}
                    width={24}
                    height={24}
                    alt="Icon"
                    unoptimized
                  />
                </i>

                <span className="text-left text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
                  Design & Build
                </span>
              </div>

              <ul className="flex flex-col gap-[1.5rem]">
                {DESIGN_SERVICE_NAV.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="flex items-start justify-between gap-[1rem]"
                    >
                      <div className="flex flex-col items-start text-left">
                        <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                          {item.label}
                        </h5>

                        <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.excerpt}
                        </span>
                      </div>

                      <i className="min-w-max">
                        <TiltArrowIcon color="#ED910C" width="12" height="12" />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col gap-[2.4rem] border-r border-[#818181]/30 pr-[3.8rem]">
              <div className="flex flex-col items-start gap-[2rem] text-left">
                <i
                  style={{
                    boxShadow: "5px 5px 22px 0px #FF37B399",
                  }}
                  className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem] bg-[#FF37B3]"
                >
                  <Image
                    src={GrowthIcon}
                    width={24}
                    height={24}
                    alt="Icon"
                    unoptimized
                  />
                </i>

                <span className="text-left text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
                  GROWTH
                </span>
              </div>

              <ul className="flex flex-col gap-[1.5rem]">
                {GROWTH_SERVICE_NAV.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="flex items-start justify-between gap-[1rem]"
                    >
                      <div className="flex flex-col items-start text-left">
                        <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                          {item.label}
                        </h5>

                        <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.excerpt}
                        </span>
                      </div>

                      <i className="min-w-max">
                        <TiltArrowIcon color="#FF37B3" width="12" height="12" />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full flex-col gap-[2.4rem]">
              <div className="flex flex-col items-start gap-[2rem] text-left">
                <i
                  style={{
                    boxShadow: "5px 5px 22px 0px #F14A5899",
                  }}
                  className="inline-flex size-[5.5rem] items-center justify-center rounded-[1.5rem] bg-[#F14A58]"
                >
                  <Image
                    src={SupportIcon}
                    width={24}
                    height={24}
                    alt="Icon"
                    unoptimized
                  />
                </i>

                <span className="text-left text-[1.8rem] leading-[2.4rem] font-bold tracking-[-0.02em] text-[#263238] uppercase">
                  SUPPORT
                </span>
              </div>

              <ul className="flex flex-col gap-[1.5rem]">
                {SUPPORT_SERVICE_NAV.map((item, idx) => (
                  <li
                    key={idx}
                    className="border-[#818181]/30 pb-[1.5rem] not-last:border-b"
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={item.href}
                      className="flex items-start justify-between gap-[1rem]"
                    >
                      <div className="flex flex-col items-start text-left">
                        <h5 className="text-[1.8rem] leading-[2rem] font-semibold tracking-[-0.02em] text-[#263238]">
                          {item.label}
                        </h5>

                        <span className="text-[1.4rem] leading-[2.4rem] font-normal tracking-normal text-[#625C70]">
                          {item.excerpt}
                        </span>
                      </div>

                      <i className="min-w-max">
                        <TiltArrowIcon color="#F14A58" width="12" height="12" />
                      </i>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative flex w-[34.8rem] flex-col items-start rounded-[2rem] bg-[#F5F5F5] px-[3.2rem] pt-[3.2rem] pb-[4rem]">
            <div className="pointer-events-none absolute bottom-[10rem] left-1/2 h-[19.3rem] w-[34.8rem] -translate-x-1/2 select-none">
              <Image src={Stroke} width={348} height={193} alt="Stroke" />
            </div>

            <span className="inline-flex h-[2.8rem] items-center justify-center rounded-[2rem] bg-[#ff37b3]/20 px-[1.2rem] text-center text-[1.4rem] leading-[2.4rem] font-bold tracking-normal text-[#FF37B3] uppercase">
              Special offer
            </span>

            <h4 className="mt-[1.9rem] mb-[1.1rem] text-[3rem] leading-[3.2rem] font-bold tracking-[-0.02em] text-[#312749]">
              Free Website Audit
            </h4>

            <p className="text-[1.6rem] leading-[2.5rem] font-normal tracking-normal text-[#625C70]">
              Discover hidden opportunities to increase your traffic and
              conversions.
            </p>

            <ul className="mt-[2.8rem] mb-[9.1rem] flex flex-col gap-[1.4rem]">
              {["SEO Analysis", "Speed check", "UX Review"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-[1rem]">
                  <div className="inline-flex size-[1.6rem] items-center justify-center rounded-full bg-[#44B276]/20">
                    <div className="size-[1rem] rounded-full bg-[#44B276]" />
                  </div>

                  <span className="text-[1.6rem] leading-[2rem] font-bold tracking-normal text-[#263238]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div>
              <PrimaryButton
                text="Get My Audit"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
                href="/audit"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDropdown;
