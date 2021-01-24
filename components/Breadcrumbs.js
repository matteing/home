import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const convertBreadcrumb = (string) => {
  return string
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü");
};

export default function Breadcrumbs() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol
        className="breadcrumb"
        className="flex text-xs text-gray-300 capitalize"
      >
        <li>
          <Link href={"/"}>
            <a>Index</a>
          </Link>
          &nbsp;/&nbsp;
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          const crumb = convertBreadcrumb(breadcrumb.breadcrumb);
          if (crumb.length === 0) return null;
          return (
            <li key={breadcrumb.href}>
              <Link href={breadcrumb.href}>
                <a>{crumb}</a>
              </Link>
              &nbsp;/&nbsp;
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
