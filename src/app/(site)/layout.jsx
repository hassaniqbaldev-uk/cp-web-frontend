import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MobileMenu from "@/components/layout/MobileMenu";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {
  return (
    <>
      <MobileMenu />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
