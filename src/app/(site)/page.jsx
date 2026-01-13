import HomeHero from "@/components/sections/hero/HomeHero";
import Expertise from "@/components/sections/expertise/Expertise";
import Services from "@/components/sections/services/Services";
import Established from "@/components/sections/established/Established";
import Process from "@/components/sections/process/Process";
import Work from "@/components/sections/work/Work";
import Cta from "@/components/sections/cta/Cta";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Contact from "@/components/sections/contact/Contact";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Expertise />
      <Services />
      <Established />
      <Process />
      <Work />
      <section className="overflow-hidden px-[2rem] pb-[5rem] xl:px-[0rem] xl:pb-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ffd900]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};
export default HomePage;
