import React from "react";
import Link from "next/link";
import MDX from "@mdx-js/runtime";

export default function Post({ post, single = false }) {
  return (
    <div className="pb-8 mb-8 last:mb-0 border-b last:border-b-0">
      <div className="mb-4">
        <h1 className="font-bold text-lg">{post.title}</h1>
        <div className="flex space-x-2 items-center text-xs text-gray-500">
          <div>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            }).format(new Date(post.date))}
          </div>
          <Link href={`/blog/${post.slug}/`} passHref>
            <a>Permalink</a>
          </Link>
        </div>
      </div>
      <div className="prose prose-sm prose-green">
        <MDX>{post.content}</MDX>
      </div>
    </div>
  );
}
