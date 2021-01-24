import Post from "../../components/Post";
import { getPostBySlug, getAllPosts } from "../../lib/posts";

export default function BlogPost({ post }) {
  return (
    <div>
      <Post single post={post} />
    </div>
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
