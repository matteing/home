import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "../config";
import Head from "next/head";
import Shell from "../layout/Shell";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Shell>
      <DefaultSeo {...DEFAULT_SEO} />
      <Head>
        <link rel="shortcut icon" href="/me.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Sergio Mattei"
          href="https://sergiomattei.com/rss.xml"
        />
      </Head>
      <Component {...pageProps} />
    </Shell>
  );
}

export default App;
