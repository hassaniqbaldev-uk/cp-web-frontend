"use client";
import BlogCard from "@/components/ui/BlogCard";
import BlogCardImg1 from "@/assets/images/cards/blog-card-img-1.webp";
import BlogCardImg2 from "@/assets/images/cards/blog-card-img-2.webp";
import BlogCardImg3 from "@/assets/images/cards/blog-card-img-3.webp";
import BlogCardImg4 from "@/assets/images/cards/blog-card-img-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

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
      "Technical deep dive into state management, code splitting, and performance optimisation for large-scale web apps.",
    link: "",
  },
];

const Blog = ({ blogs }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="bg-[#F0F6FF] px-[2rem] py-[5rem] xl:px-[0rem] xl:py-[10rem]">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="hidden grid-cols-2 gap-[3.3rem] xl:grid"
          >
            {blogs.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BlogCard
                  readTime={item.readTime}
                  publishedDate={item.publishedAt}
                  category={item.category}
                  img={item.coverImage.asset.url}
                  title={item.title}
                  excerpt={item.excerpt}
                  link={`/blog/${item.slug.current}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="block w-full xl:hidden"
          >
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
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
