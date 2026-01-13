import StickyCta from "@/components/layout/StickyCta";
import ServicesDetailHero from "@/components/sections/hero/ServicesDetailHero";
import ProjectShowcase from "@/components/sections/project-showcase/ProjectShowcase";

const ServicesDetailPage = () => {
  return (
    <>
      {/* Sticky Cta */}
      <StickyCta />
      <ServicesDetailHero />
      <ProjectShowcase />
    </>
  );
};

export default ServicesDetailPage;
