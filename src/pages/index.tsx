import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Home from '@/pages/home';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <Seo />
      <Layout>
        <Home />
      </Layout>
      {/* MAIN */}
      {/* FOOTER */}
    </>
  );
}
