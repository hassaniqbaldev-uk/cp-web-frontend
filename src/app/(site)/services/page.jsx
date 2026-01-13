import Contact from "@/components/sections/contact/Contact";
import Cta from "@/components/sections/cta/Cta";
import DesignBuild from "@/components/sections/design-build/DesignBuild";
import Expertise2 from "@/components/sections/expertise/Expertise2";
import Growth2 from "@/components/sections/growth/Growth2";
import ServicesHero from "@/components/sections/hero/ServicesHero";
import Support from "@/components/sections/support/Support";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <DesignBuild />
      <Growth2 />
      <Support />
      <Expertise2 />
      <section className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta />
      </section>
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Contact />
      </section>
    </>
  );
};
export default ServicesPage;
