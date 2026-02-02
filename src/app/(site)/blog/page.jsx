import Blog from "@/components/sections/blog/Blog";
import BlogHero from "@/components/sections/hero/BlogHero";
import { blogHeroQuery, blogListQuery } from "@/sanity/queries.blog";
import { client } from "@/sanity/sanity.blog";

export const revalidate = 30; // Next.js ISR

const BlogPage = async () => {
  const hero = await client.fetch(blogHeroQuery);
  const blogs = await client.fetch(blogListQuery);

  return (
    <>
      <BlogHero hero={hero} />
      <Blog blogs={blogs} />
    </>
  );
};

export default BlogPage;
