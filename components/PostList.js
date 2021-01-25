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
      <div className="flex">
        {prevPosts !== null &&
          (prevPosts === 1 ? (
            <Link href={"/blog/"}>
              <a>« Newer</a>
            </Link>
          ) : (
            <Link href={"/blog/archive/" + prevPosts}>
              <a>« Newer</a>
            </Link>
          ))}
        <div className="flex-grow"></div>
        {nextPosts !== null && (
          <Link href={"/blog/archive/" + nextPosts}>
            <a>Older »</a>
          </Link>
        )}
      </div>
    </div>
  );
}
