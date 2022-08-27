import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Blog = () => {
  return (
    <Layout>
      <Seo templateTitle='Blog' />
      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-black'>
            COMING SOON
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Blog;
