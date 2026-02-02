export const blogHeroQuery = `
*[_type == "blog" && featured == true][0]{
  title,
  excerpt,
  category,
  readTime,
  slug { current },
  coverImage {
      asset->{
        url
      }
    }
}
`;

export const blogListQuery = `
*[_type == "blog"] | order(publishedAt desc) {
  title,
  excerpt,
  category,
  readTime,
  slug { current },
  publishedAt,
  coverImage {
      asset->{
        url
      }
    }
}
`;
