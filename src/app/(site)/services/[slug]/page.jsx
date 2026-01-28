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
import { SERVICES_DETAIL_QUERY } from "@/sanity/queries.services";
import { client } from "@/sanity/sanity.services";

const options = { next: { revalidate: 30 } };

const ServicesDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const service = await client.fetch(SERVICES_DETAIL_QUERY, { slug }, options);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Sticky Cta */}
      {/* <StickyCta /> */}
      <ServicesDetailHero service={service.detailHero} />
      {/* <ProjectShowcase service={service.projectShowcase} /> */}
      <PartnerWithUs2 service={service.partnerWithUs2} />
      <div className="overflow-hidden px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Cta2 />
      </div>
      <Expertise3 service={service.expertise3} />
      <Methodology service={service.methodology} />
      {/* <Options service={service.options} /> */}
      <section className="bg-[#ed910c]/13 px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <Testimonials />
      </section>
      <Questions service={service.faqs} />
    </>
  );
};

export default ServicesDetailPage;
