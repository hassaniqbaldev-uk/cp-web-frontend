import Blog from "@/components/sections/blog/Blog";
import BlogHero from "@/components/sections/hero/BlogHero";
import { BLOG_HERO_QUERY, BLOG_LIST_QUERY } from "@/sanity/queries.blog";
import { client } from "@/sanity/sanity.blog";

export const revalidate = 30; // Next.js ISR

const BlogPage = async () => {
  const hero = await client.fetch(BLOG_HERO_QUERY);
  const blogs = await client.fetch(BLOG_LIST_QUERY);

  return (
    <>
      <BlogHero hero={hero} />
      <Blog blogs={blogs} />
    </>
  );
};

export default BlogPage;
