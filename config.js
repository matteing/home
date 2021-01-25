export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : "https://sergiomattei.com";

export const POSTS_PER_PAGE = 3;
export const DEFAULT_SEO = {
  title: "Home",
  titleTemplate: `%s | Sergio Mattei`,
  description:
    "Sergio Mattei is a maker, entrepreneur and self-taught programmer.",
  openGraph: {
    url: BASE_URL,
    title: "Sergio Mattei",
    description:
      "Sergio Mattei is a maker, entrepreneur and self-taught programmer.",
    images: [
      {
        url: `${BASE_URL}/me_square.jpeg`,
      },
    ],
    site_name: "Sergio Mattei",
  },
  twitter: {
    handle: "@matteing",
    site: "@matteing",
    cardType: "summary",
  },
};
