import React from "react";
import PostList from "../../components/PostList";
import config from "../../config";
import { getPostBySlug, getAllPosts } from "../../lib/posts";

export default function Blog({ posts, prevPosts, nextPosts }) {
  return (
    <div>
      <PostList posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "coverImageAlt",
    "excerpt",
    "draft",
    "content",
  ]);
  const startIndex = 0;
  const endIndex = config.postsPerPage;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;
  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  };
}
