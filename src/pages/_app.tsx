import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import nProgress from "nprogress";
import { useEffect } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import '@/styles/nprogress.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  nProgress.start());
    router.events.on('routeChangeComplete', () =>  nProgress.done());
    router.events.on('routeChangeError', () =>  nProgress.done());
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
