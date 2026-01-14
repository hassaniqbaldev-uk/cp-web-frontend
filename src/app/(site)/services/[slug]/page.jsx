import Cta2 from "@/components/sections/cta/Cta2";
import StickyCta from "@/components/sections/cta/StickyCta";
import Expertise3 from "@/components/sections/expertise/Expertise3";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import Methodology from "@/components/sections/methodology/Methodology";
import Options from "@/components/sections/options/Options";
import PartnerWithUs2 from "@/components/sections/partner-with-us/PartnerWithUs2";
import ProjectShowcase from "@/components/sections/project-showcase/ProjectShowcase";
import Questions from "@/components/sections/questions/Questions";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const ServicesDetailPage = () => {
  return (
    <>
      {/* Sticky Cta */}
      <StickyCta />
      <ServicesDetailHero />
      <ProjectShowcase />
      <PartnerWithUs2 />
      <div className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta2 />
      </div>
      <Expertise3 />
      <Methodology />
      <Options />
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <Questions />
    </>
  );
};

export default ServicesDetailPage;
