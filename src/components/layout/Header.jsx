"use client";
import Link from "next/link";
import NavigationDropdown from "../ui/NavigationDropdown";
import PrimaryButton from "../ui/PrimaryButton";
import Logo from "../decorative-elements/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HamburgerIcon from "@/assets/icons/ui/hamburger-icon.svg";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // sticky after 50px
      setIsSticky(currentScrollY > 50);

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const headerSecondaryPaths = [
    "/blog",
    "/audit",
    "/case-studies",
    "/services",
    "/services/slug",
  ];
  const isHeaderSecondary = headerSecondaryPaths.includes(pathname);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[500] w-full px-[2rem] pt-[1.3rem] transition-transform duration-300 ease-out md:pt-[2.5rem] xl:px-[0rem] ${isHidden ? "-translate-y-full" : "translate-y-0"} `}
      >
        <div className="container">
          <div
            className={`header-container ${
              isHeaderSecondary
                ? "header-secondary"
                : isSticky
                  ? "sticky-header"
                  : "header-primary"
            }`}
          >
            <Link href="/" className="inline-flex items-center justify-center">
              <Logo
                width="121"
                height="46"
                className="logo h-[3.6rem] w-[9.7rem] md:h-[4.6rem] md:w-[12.1rem]"
              />
            </Link>

            <nav className="mr-[2.8rem] ml-[4.8rem] hidden items-center justify-center gap-[3rem] xl:flex">
              <NavigationDropdown
                label="Services"
                items={[{ label: "Services", href: "/services" }]}
              />

              <NavigationDropdown
                label="Solutions"
                items={[{ label: "Solutions", href: "/solutions" }]}
              />

              <Link href="/work" className="nav-link">
                Work
              </Link>

              <Link href="/blog" className="nav-link">
                Insights
              </Link>

              <Link href="" className="nav-link">
                Pricing
              </Link>

              <NavigationDropdown
                label="About"
                items={[{ label: "About", href: "/about" }]}
              />
            </nav>

            <div className="flex items-center justify-end gap-[4px]">
              <Link href="/audit" className="nav-btn">
                Free Audit
              </Link>

              {/* Hamburger Button */}
              <button className="inline-flex size-[3.3rem] min-w-[3.3rem] items-center justify-center rounded-full bg-[#FF37B3] xl:hidden">
                <Image src={HamburgerIcon} width={12} height={9} alt="Icon" />
              </button>
            </div>

            <div className="hidden xl:block">
              <PrimaryButton
                text="Book with Hassan"
                textColor="#FFFFFF"
                bGcolor="#FF37B3"
                href=""
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
