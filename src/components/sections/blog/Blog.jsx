"use client";
import BlogCard from "@/components/ui/BlogCard";
import BlogCardImg1 from "@/assets/images/cards/blog-card-img-1.png";
import BlogCardImg2 from "@/assets/images/cards/blog-card-img-2.png";
import BlogCardImg3 from "@/assets/images/cards/blog-card-img-3.png";
import BlogCardImg4 from "@/assets/images/cards/blog-card-img-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const CardData = [
  {
    category: "GROWTH",
    img: BlogCardImg1,
    title: "The SEO Checklist for 2025: What's Changed?",
    excerpt:
      "Google's latest core update has shifted the landscape again. Here are the 5 things you need to audit on your site today.",
    link: "",
  },
  {
    category: "Technology",
    img: BlogCardImg2,
    title: "Headless CMS vs WordPress: Making the Right Choice",
    excerpt:
      "Decoupling your frontend from your backend offers speed and security, but is it right for your marketing team?",
    link: "",
  },
  {
    category: "Design",
    img: BlogCardImg3,
    title: "The Psychology of Conversion: Beyond the Button Color",
    excerpt:
      "True CRO isn't about red vs green buttons. It's about understanding cognitive load, trust signals, and user motivation.",
    link: "",
  },
  {
    category: "Engineering",
    img: BlogCardImg4,
    title: "Scaling React Applications: Lessons from 1M+ Users",
    excerpt:
      "Technical deep dive into state management, code splitting, and performance optimization for large-scale web apps.",
    link: "",
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <div className="hidden grid-cols-2 gap-[3.3rem] xl:grid">
            {CardData.map((item, idx) => (
              <BlogCard
                key={idx}
                category={item.category}
                img={item.img}
                title={item.title}
                excerpt={item.excerpt}
                link={item.link}
              />
            ))}
          </div>

          {/* Responsive */}
          <div className="block w-full xl:hidden">
            <Swiper
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={0}
              breakpoints={{
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
              }}
              className="mySwiper"
            >
              {CardData.map((item, idx) => (
                <SwiperSlide
                  key={idx}
                  className="!flex !h-auto !items-center !justify-center px-[1rem] pb-[5rem]"
                >
                  <BlogCard
                    category={item.category}
                    img={item.img}
                    title={item.title}
                    excerpt={item.excerpt}
                    link={item.link}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
