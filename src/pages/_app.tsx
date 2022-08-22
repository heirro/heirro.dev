import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <NextNProgress 
        color="#000000"
    />
    <Component {...pageProps} />;
  </>
  )
}

export default MyApp;
