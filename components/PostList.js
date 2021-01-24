import MDX from "@mdx-js/runtime";
import Link from "next/link";
import Post from "./Post";

export default function PostList({ posts, prevPosts, nextPosts }) {
  const isLocal = process.env.NODE_ENV === "development";
  return (
    <div>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft;
          })
          .map((post) => <Post post={post} />)}
      {prevPosts !== null && (
        <Link href={"/blog/" + prevPosts} passHref>
          <a>« see newer posts</a>
        </Link>
      )}
      {nextPosts !== null && (
        <Link href={"/blog/" + nextPosts} passHref>
          <a>see older posts »</a>
        </Link>
      )}
    </div>
  );
}
