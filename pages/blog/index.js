import { NextSeo } from "next-seo";
import React from "react";
import PostList from "../../components/PostList";
import { POSTS_PER_PAGE } from "../../config";
import { generateRss, getAllPosts } from "../../lib/posts";
import fs from "fs";

export default function Blog({ posts, prevPosts, nextPosts }) {
  return (
    <>
      <PostList posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
      <NextSeo
        title={"Blog"}
        description={"I write about life, startups and technology."}
      />
    </>
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

  const rss = generateRss(posts);
  fs.writeFileSync("./public/rss.xml", rss);

  const startIndex = 0;
  const endIndex = POSTS_PER_PAGE;
  const prevPosts = null;
  const nextPosts = endIndex >= posts.length ? null : 2;
  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  };
}
