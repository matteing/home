import { NextSeo } from "next-seo";
import Post from "../../components/Post";
import { BASE_URL } from "../../config";
import { getPostBySlug, getAllPosts } from "../../lib/posts";

export default function BlogPost({ post }) {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description || post.excerpt}
        openGraph={{
          url: BASE_URL,
          title: post.title,
          description: post.description || post.excerpt,
          site_name: "Sergio Mattei",
        }}
        twitter={{
          handle: "@matteing",
          site: "@matteing",
          cardType: "summary",
        }}
      />
      <Post single post={post} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "coverImage",
    "coverImageAlt",
    "draft",
  ]);
  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false,
  };
}
