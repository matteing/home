import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex flex-wrap space-x-2 lg:space-x-0 lg:flex-col lg:space-y-1 mb-4">
      <span>
        <Link href="/">
          <a>Home</a>
        </Link>
      </span>
      <span>
        <a href="https://matteing.com/lists/" target="_blank">
          Lists
        </a>
      </span>
      <span>
        <a href="https://matteing.com" target="_blank">
          Blog
        </a>
      </span>
      <span>
        <a href="mailto:info@sergiomattei.com" target="_blank">
          Email&nbsp;↗
        </a>
      </span>
      <span>
        <a href="https://getmakerlog.com/@sergio" target="_blank">
          Makerlog&nbsp;↗
        </a>
      </span>
      <span>
        <a href="https://twitter.com/matteing" target="_blank">
          Twitter&nbsp;↗
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/sergiomattei/" target="_blank">
          LinkedIn&nbsp;↗
        </a>
      </span>
      <span>
        <a
          target="_blank"
          href="https://open.spotify.com/user/1233431714?si=Gfd1VxkSQ5qPm8QgaZ6VAA"
        >
          Spotify&nbsp;↗
        </a>
      </span>
    </div>
  );
}
