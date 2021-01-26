import { NextSeo } from "next-seo";
import Prose from "../../components/Prose";

export default function MdxPage({ children, frontMatter }) {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={(frontMatter.description || frontMatter.excerpt) ?? null}
      />
      <Prose>{children}</Prose>
    </>
  );
}
