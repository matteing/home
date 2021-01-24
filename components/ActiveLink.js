import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children, shaky = false }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (
    (!shaky && router.pathname === href) ||
    (shaky && router.pathname.startsWith(href))
  ) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
