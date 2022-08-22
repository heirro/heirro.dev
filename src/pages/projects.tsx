import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Projects() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />
      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-black'>
            Test Projects
          </div>
        </section>
      </main>
    </Layout>
  );
}
