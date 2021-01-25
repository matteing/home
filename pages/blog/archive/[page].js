import { getAllPosts } from ".../../../lib/posts";
import PostList from "../../../components/PostList";
import { POSTS_PER_PAGE } from "../../../config";

export default function BlogPage({
  posts,
  prevPosts,
  nextPosts,
  pageIndex,
  numPages,
}) {
  return <PostList posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />;
}

export async function getStaticProps({ params }) {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "excerpt",
    "draft",
    "content",
  ]);

  const pageIndex = parseInt(params.page) - 1;
  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = (pageIndex + 1) * POSTS_PER_PAGE;

  const prevPosts = pageIndex > 0 ? pageIndex : null;
  const nextPosts = endIndex >= posts.length ? null : pageIndex + 2;
  const numPages = (POSTS_PER_PAGE % getAllPosts().length) + 1;

  return {
    props: {
      posts: posts.slice(startIndex, endIndex),
      prevPosts,
      nextPosts,
      pageIndex,
      numPages,
    },
  };
}

export async function getStaticPaths() {
  const numPages = (POSTS_PER_PAGE % getAllPosts().length) + 1;

  return {
    paths: [...Array(numPages)].map((v, i) => {
      return {
        params: { page: (i + 1).toString() },
      };
    }),
    fallback: false,
  };
}
