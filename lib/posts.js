import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  let posts = slugs
    .map((slug) => getPostBySlug(slug, [...fields, "unlisted"]))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  posts = posts.filter((p) => p.unlisted === undefined || !p.unlisted);
  return posts;
}

export const generateRssItem = (post) => `
  <item>
    <guid>https://sergiomattei.com/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://sergiomattei.com/blog/${post.slug}</link>
    <description>${post.excerpt ?? "No description set."}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`;

export const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Sergio Mattei's Blog</title>
      <link>https://sergiomattei.com/blog</link>
      <description>I write about maker culture, life and entrepreneurship.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://sergiomattei.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;
