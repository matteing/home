import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "content");

export function getContentSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getContentBySlug(slug, fields = []) {
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
export function getAllContent(fields = []) {
  const slugs = getContentSlugs();
  let posts = slugs
    .map((slug) => getContentBySlug(slug, [...fields, "unlisted"]))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  posts = posts.filter((p) => p.unlisted === undefined || !p.unlisted);
  return posts;
}
