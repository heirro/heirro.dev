import Router from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function Index() {
  const [, setLoaded] = useState(false);
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/home');
    } else {
      setLoaded(true);
    }
  }, []);
  return (
    <>
      <Seo templateTitle='Home' />
      {/* <Home /> */}
    </>
  );
}
