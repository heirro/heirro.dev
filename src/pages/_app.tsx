/* eslint-disable @next/next/next-script-for-ga */
import { config } from '@fortawesome/fontawesome-svg-core';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import nProgress from 'nprogress';
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
    router.events.on('routeChangeStart', () => nProgress.start());
    router.events.on('routeChangeComplete', () => nProgress.done());
    router.events.on('routeChangeError', () => nProgress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <Script
            src='https://redacted.heirro.dev/events'
            data-website-id="3faae683-99e9-4c6d-afe0-7ff76a772a88"
            strategy="lazyOnload"
            async
            defer
          />
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-RQVKNYBQQ2'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RQVKNYBQQ2');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
