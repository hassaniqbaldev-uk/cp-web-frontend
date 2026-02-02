"use client";
import Image from "next/image";

const BlogContent = () => {
  return (
    <>
      <section className="px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[5.6rem]">
        <article className="mx-auto max-w-[105rem]">
          {/* Heading */}
          <h2 className="text-[2.5rem] leading-[3rem] font-bold tracking-[-0.02em] text-[#312749] md:text-[4.8rem] md:leading-[6rem]">
            At vero eos et accusamus et iusto odio
          </h2>

          {/* Paragraph */}
          <p className="mt-[1.5rem] text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            lorem eu cursus velit hendrerit elementum. Curabitur etiam
            adipiscing praesent velit viverra mi dignissim at arcu massa mattis.
          </p>

          {/* List */}
          <ul className="mb-[5.3rem] list-disc pl-[2.4rem] text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            <li>Neque sodales ut etiam sit amet nisl orci ac auctor</li>
            <li>
              Adipiscing elit aliquam purus sit amet viverra suspendisse potenti
            </li>
            <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
            <li>
              Excepturi sint occaecati cupiditate non provident sunt in culpa
              officia
            </li>
          </ul>

          {/* Subheading */}
          <h3 className="text-[2.2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3rem]">
            Sed ut perspiciatis unde omnis
          </h3>

          {/* Paragraph */}
          <p className="mt-[1.5rem] mb-[5.3rem] text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
            ultrices cursus sit amet dictum sit amet justo donec enim diam
            porttitor lacus luctus accumsan tortor posuere praesent tristique
            magna sit amet purus gravida quis blandit turpis.
          </p>

          {/* Image */}
          <div className="h-[25rem] w-full overflow-hidden rounded-tl-[2rem] rounded-tr-[2rem] bg-red-200 md:h-[45rem] md:rounded-tl-[2.3rem] md:rounded-tr-[2.3rem]">
            <Image
              src="/blog/blog-detail-image.jpg"
              alt="Content Main Image"
              width={1050}
              height={450}
              className="w-full object-cover"
              unoptimized
            />
          </div>

          {/* Subheading */}
          <h3 className="mt-[5.6rem] mb-[1.5rem] text-[2.2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </h3>

          {/* Paragraph */}
          <p className="text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            At risus viverra adipiscing at in tellus integer feugiat nisl vel.
            Tortor sagittis orci a scelerisque purus semper eget duis at tellus
            integer. Neque sodales ut etiam sit amet nisl purus in.
          </p>

          {/* List */}
          <ul className="mt-[2rem] list-disc pl-[2.4rem] text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            <li>Neque sodales ut etiam sit amet nisl orci ac auctor</li>
            <li>Adipiscing elit aliquam purus sit amet viverra suspendisse</li>
            <li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
          </ul>

          {/* Final Sections */}
          <h3 className="mt-[5.6rem] mb-[1.5rem] text-[2.2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3rem]">
            Class aptent taciti sociosqu ad litora
          </h3>

          <p className="text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim
            facilisis gravida neque euismod in pellentesque massa placerat
            volutpat lacus laoreet.
          </p>

          <h3 className="mt-[5.6rem] mb-[1.5rem] text-[2.2rem] leading-[2.8rem] font-semibold tracking-[-0.02em] text-[#312749] md:text-[2.6rem] md:leading-[3rem]">
            Class aptent taciti sociosqu ad litora
          </h3>

          <p className="text-[1.6rem] leading-[2.8rem] text-[#625C70] md:text-[2rem] md:leading-[3.2rem]">
            Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim
            facilisis gravida neque euismod in pellentesque massa placerat
            volutpat lacus laoreet.
          </p>
        </article>
      </section>
    </>
  );
};

export default BlogContent;
