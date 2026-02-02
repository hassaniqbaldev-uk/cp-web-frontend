import BlogContent from "@/components/sections/blog/BlogContent";
import BlogMeta from "@/components/sections/blog/BlogMeta";
import BlogShare from "@/components/sections/blog/BlogShare";
import RelatedBlogs from "@/components/sections/blog/RelatedBlogs";
import BlogDetailHero from "@/components/sections/hero/BlogDetailHero";

const BlogDetailPage = () => {
  return (
    <>
      <BlogDetailHero />
      <BlogMeta />
      <BlogContent />
      <BlogShare />
      <RelatedBlogs />
    </>
  );
};

export default BlogDetailPage;
