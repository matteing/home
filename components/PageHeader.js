import React from "react";
import { Breadcrumbs } from "nextjs-breadcrumbs";

export default function PageHeader({ title, subtitle = null }) {
  const example = Breadcrumbs();

  return <div>{example}</div>;
}
