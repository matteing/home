import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <span>
        <Link href="/">
          <a>Home</a>
        </Link>
      </span>
      <span>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </span>
      <span>
        <a href="/lists">Lists</a>
      </span>
      <span>
        <a href="/">Email ↗</a>
      </span>
      <span>
        <a href="/">Twitter ↗</a>
      </span>
      <span>
        <a href="/">LinkedIn ↗</a>
      </span>
      <span>
        <a
          target="_blank"
          href="https://open.spotify.com/user/1233431714?si=Gfd1VxkSQ5qPm8QgaZ6VAA"
        >
          Spotify ↗
        </a>
      </span>
    </div>
  );
}
