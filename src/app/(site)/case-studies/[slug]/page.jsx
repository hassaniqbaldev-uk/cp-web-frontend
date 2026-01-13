import ClientOverview from "@/components/sections/client-overview/ClientOverview";
import Cta from "@/components/sections/cta/Cta";
import CaseStudiesDetailHero from "@/components/sections/hero/CaseStudiesDetailHero";
import OurApproach from "@/components/sections/our-approach/OurApproach";
import TheChallenge from "@/components/sections/the-challenge/TheChallenge";
import TheSolution from "@/components/sections/the-solution/TheSolution";
import { client } from "@/sanity/client";
import { caseStudiesDetailQuery } from "@/sanity/queries";
import { notFound } from "next/navigation";
import React from "react";

const options = { next: { revalidate: 30 } };

const CaseStudiesDetailPage = async (props) => {
  const params = await props.params;
  const slug = params.slug;

  const caseStudy = await client.fetch(
    caseStudiesDetailQuery,
    { slug },
    options,
  );

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <div className="overflow-hidden">
        <CaseStudiesDetailHero caseStudy={caseStudy} />
        <ClientOverview caseStudy={caseStudy} />
        <TheChallenge caseStudy={caseStudy} />
        <OurApproach caseStudy={caseStudy} />
        <TheSolution caseStudy={caseStudy} />
        <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
          <Cta />
        </section>
      </div>
    </>
  );
};
export default CaseStudiesDetailPage;
