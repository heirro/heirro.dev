import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import Router from "next/router";
import nProgress from "nprogress";

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = true;

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/nprogress.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
 Router.events.on("routeChangeStart", nProgress.start);
 Router.events.on("routeChangeError", nProgress.done);
 Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
