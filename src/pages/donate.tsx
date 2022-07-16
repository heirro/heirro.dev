import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const Donate = () => {
  return (
    <Layout>
      <Seo templateTitle='Donate' />
      <main>
        <section className='bg-white'>
          <div className='flex min-h-screen flex-col items-center justify-center text-center text-black'>
            Test Donate
          </div>
        </section>
      </main>
    </Layout>
  );
};
export default Donate;
